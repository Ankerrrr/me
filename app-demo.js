(() => {
  const root = document.querySelector("#chair-app-demo");
  if (!root) return;
  // Scale the complete 360 × 776 phone, including its content and border.
  function resizePhone() {
    const scale = Math.min(window.innerHeight * 0.8 / 776, root.clientWidth / 360);
    root.style.setProperty("--app-phone-scale", String(scale));
  }
  resizePhone();
  window.addEventListener("resize", resizePhone, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(resizePhone).observe(root);
  const screen = root.querySelector("#app-screen");
  const guide = root.querySelector("#app-guide-content");
  const feedback = root.querySelector("#app-demo-feedback");
  const safety = root.querySelector(".app-safety-dialog");
  const overlay = root.querySelector(".app-safety-overlay");
  const phoneContent = root.querySelector(".app-phone-content");
  const beltCheck = root.querySelector("#app-belt-check");
  const seatCheck = root.querySelector("#app-seat-check");
  const confirmButton = root.querySelector("[data-app-confirm]");
  let safetyOpen = false;
  function updateSafety() {
    confirmButton.disabled = !(beltCheck.checked && seatCheck.checked);
    const seatStatus = root.querySelector(".app-seat-status");
    if (seatStatus) {
      seatStatus.textContent = seatCheck.checked
        ? "座位感應器：已偵測到嬰兒（模擬）"
        : "座位感應器：未偵測到嬰兒";
    }
  }
  function openSafety() {
    beltCheck.checked = false;
    seatCheck.checked = false;
    updateSafety();
    safetyOpen = true;
    overlay.hidden = false;
    phoneContent.inert = true;
    beltCheck.focus({ preventScroll: true });
  }
  function closeSafety() {
    safetyOpen = false;
    overlay.hidden = true;
    phoneContent.inert = false;
    screen
      .querySelector('[data-app-action="toggle-chair"]')
      ?.focus({ preventScroll: true });
  }
  function animateView() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    screen.animate(
      [
        {
          opacity: 0,
          transform: `translateX(${state.view === "home" ? "-18px" : "24px"})`,
        },
        { opacity: 1, transform: "translateX(0)" },
      ],
      { duration: 320, easing: "cubic-bezier(.2,.7,.2,1)" },
    );
    guide.animate(
      [
        { opacity: 0.3, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 280, easing: "ease-out" },
    );
  }
  const state = {
    view: "home",
    running: false,
    smartMode: false,
    intensity: 0,
    minutes: 0,
    remaining: 0,
    playing: false,
    volume: 50,
    genre: "輕鬆",
    track: 0,
    musicMinutes: 0,
    musicRemaining: 0,
  };
  const tracksPerGenre = 8;
  const trackTitle = () => `${state.genre} ${state.track + 1}`;
  const records = [
    "15:22:43",
    "14:13:52",
    "14:07:44",
    "11:04:57",
    "11:03:05",
    "10:58:27",
  ];
  const descriptions = {
    home: [
      "首頁",
      "APP的首頁，一切都從這裡開始。",
      [
        ["目前狀態", "顯示搖椅是否正在運作，與控制頁同步。"],
        ["功能入口", "點選搖椅控制、音樂播放或紀錄卡片，進入對應頁面。"],
      ],
    ],
    control: [
      "搖椅控制",
      "手動／智慧模式切換、強度調整與啟動前安全確認流程。",
      [
        [
          "模式切換與啟動",
          "點擊模式按鈕，可在手動模式與智慧模式間切換。啟動前搖椅系統會先檢測安全扣卡榫感應器及在席感應器否。",
        ],
        ["強度調整", "拖曳滑桿切換 0–3 級強度，狀態卡會即時更新。"],
        [
          "計時停止",
          "選擇 15、20、25 或 30 分鐘，運作時開始倒數；到時自動停止。",
        ],
      ],
    ],
    music: [
      "音樂播放",
      "將播放控制、曲風與音量設定集中在一個頁面。",
      [
        [
          "播放控制",
          "在目前曲風的 1–8 首內切換上一首／下一首，並可切換播放與暫停。第 8 首之後會回到第 1 首。",
        ],
        [
          "曲風與計時",
          "依錄影提供輕鬆、歡樂與流行選項，並可設定播放停止時間。",
        ],
        ["音量調整", "拖曳滑桿查看音量百分比；本展示不輸出音訊。"],
      ],
    ],
    records: [
      "哭聲紀錄",
      "依日期與時間整理偵測事件，讓照護者回顧系統紀錄。",
      [
        ["事件清單", "每張卡片呈現偵測結果與時間，清單可上下捲動。"],
        [
          "模擬新增",
          "下方按鈕可加入一筆目前時間的示範事件，體驗紀錄更新；不會開啟麥克風或保存資料。",
        ],
      ],
    ],
  };
  const timerOptions = (value) =>
    `<option value="0" ${value === 0 ? "selected" : ""}>關閉</option>${[15, 20, 25, 30].map((n) => `<option value="${n}" ${value === n ? "selected" : ""}>${n} 分鐘</option>`).join("")}`;
  const timer = (id, value) =>
    `<label class="app-select">計時<select id="${id}" aria-label="${id === "chair-timer" ? "搖椅" : "音樂"}計時">${timerOptions(value)}</select></label>`;
  const status = () => (state.running ? "運作中" : "已停止");
  const clock = (seconds) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  function notify(text) {
    if (feedback) feedback.textContent = text;
  }
  function render() {
    const info = descriptions[state.view];
    root.querySelector("#app-screen-title").textContent = info[0];
    root.querySelector("[data-app-home]").disabled = state.view === "home";
    root
      .querySelectorAll("[data-app-view]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.appView === state.view),
        ),
      );
    guide.innerHTML = `<h6>${info[0]}</h6><p>${info[1]}</p>${info[2].map(([title, text], i) => `<div class="app-guide-step"><span>0${i + 1}</span><div><h6>${title}</h6><p>${text}</p></div></div>`).join("")}`;
    if (state.view === "home") {
      screen.innerHTML = `<div class="app-welcome"><span>WELCOME</span><h6>歡迎登入安撫椅系統</h6></div><div class="app-home-grid"><div class="app-tile"><strong>目前狀態</strong><span class="app-status-pill">${status()}</span></div><button class="app-tile app-tile-control" data-app-view="control"><strong>控制</strong><span aria-hidden="true">⚙︎</span></button><button class="app-tile" data-app-view="music"><strong>音樂播放</strong><span aria-hidden="true">♫</span></button><button class="app-tile" data-app-view="records"><strong>紀錄</strong><span aria-hidden="true">☷</span></button></div>`;
    } else if (state.view === "control") {
      screen.innerHTML = `<div class="app-panel app-device-state"><span class="app-device-dot ${state.running ? "active" : ""}"></span><div><strong>${status()}</strong><small>強度 ${state.intensity}</small></div></div><div class="app-panel"><button type="button" class="app-mode ${state.smartMode ? "is-smart" : ""}" data-app-action="toggle-mode" aria-pressed="${state.smartMode}" aria-label="${state.smartMode ? "智慧模式，點擊切換為手動模式" : "手動模式，點擊切換為智慧模式"}">${state.smartMode ? "智慧模式" : "手動模式"} <span aria-hidden="true">⇄</span></button><div class="app-control-row"><button class="app-start" data-app-action="toggle-chair">${state.running ? "停止" : "啟動"}</button>${timer("chair-timer", state.minutes)}</div><small class="app-timer-readout" id="chair-remaining">${state.running && state.remaining ? `剩餘 ${clock(state.remaining)}` : "啟動前會顯示安全帶提醒"}</small></div><div class="app-panel"><label for="chair-intensity">強度 <output id="intensity-value">${state.intensity}</output></label><input id="chair-intensity" type="range" min="0" max="3" step="1" value="${state.intensity}" /><div class="app-range-labels"><span>0 · 最低</span><span>3 · 最高</span></div></div>`;
    } else if (state.view === "music") {
      screen.innerHTML = `${timer("music-timer", state.musicMinutes)}<label class="app-select">曲風<select id="music-genre" aria-label="音樂曲風">${["輕鬆", "歡樂", "流行"].map((v) => `<option ${v === state.genre ? "selected" : ""}>${v}</option>`).join("")}</select></label><div class="app-panel"><div class="app-music-title"><span aria-hidden="true">♫</span><strong>${trackTitle()}</strong><small>${state.playing ? "播放中" : "已暫停"}</small></div><div class="app-player-buttons"><button data-app-action="prev" aria-label="上一首">Ⅰ◀</button><button data-app-action="play" aria-label="${state.playing ? "暫停" : "播放"}音樂">${state.playing ? "Ⅱ" : "▶"}</button><button data-app-action="next" aria-label="下一首">▶Ⅰ</button></div><small class="app-timer-readout" id="music-remaining">${state.playing && state.musicRemaining ? `剩餘 ${clock(state.musicRemaining)}` : "播放狀態模擬 · 無音訊"}</small></div><div class="app-panel"><label for="music-volume">音量大小 <output id="volume-value">${state.volume}%</output></label><input id="music-volume" type="range" min="0" max="100" value="${state.volume}" /><div class="app-range-labels"><span>靜音</span><span>最大</span></div></div>`;
    } else {
      screen.innerHTML = `<p class="app-record-date">06/09 · 示範紀錄</p><div class="app-records">${records.map((time) => `<div class="app-panel app-record"><span aria-hidden="true">●</span><div><strong>偵測到哭聲</strong><small>時間 ${time}</small></div></div>`).join("")}</div>`;
    }
  }
  root.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (safetyOpen && !safety.contains(button)) return;
    if (button.dataset.appView || button.hasAttribute("data-app-home")) {
      state.view = button.dataset.appView || "home";
      render();
      screen.scrollTop = 0;
      animateView();
      notify(`已切換至${descriptions[state.view][0]}。`);
      return;
    }
    const action = button.dataset.appAction;
    if (action === "toggle-mode") {
      state.smartMode = !state.smartMode;
      render();
      screen
        .querySelector('[data-app-action="toggle-mode"]')
        ?.focus({ preventScroll: true });
      notify(`已切換至${state.smartMode ? "智慧模式" : "手動模式"}。`);
    }
    if (action === "toggle-chair") {
      if (state.running) {
        state.running = false;
        state.remaining = 0;
        render();
        notify("搖椅已停止。");
      } else openSafety();
    }
    if (button.hasAttribute("data-app-confirm")) {
      if (!beltCheck.checked || !seatCheck.checked) return;
      closeSafety();
      state.running = true;
      state.remaining = state.minutes * 60;
      render();
      screen
        .querySelector('[data-app-action="toggle-chair"]')
        ?.focus({ preventScroll: true });
      notify("安全帶已確認，座位感應器已偵測到嬰兒（模擬），搖椅開始運作。");
    }
    if (button.hasAttribute("data-app-cancel")) closeSafety();
    if (action === "play") {
      state.playing = !state.playing;
      if (state.playing && !state.musicRemaining)
        state.musicRemaining = state.musicMinutes * 60;
      render();
      notify(
        state.playing ? "音樂狀態：播放中（無音訊）。" : "音樂狀態：已暫停。",
      );
    }
    if (action === "prev" || action === "next") {
      state.track =
        (state.track + (action === "prev" ? tracksPerGenre - 1 : 1)) %
        tracksPerGenre;
      render();
      notify(`已切換至${trackTitle()}。`);
    }
  });
  root.addEventListener("input", (event) => {
    if (event.target.id === "chair-intensity") {
      state.intensity = Number(event.target.value);
      root.querySelector("#intensity-value").textContent = state.intensity;
      root.querySelector(".app-device-state small").textContent =
        `強度 ${state.intensity}`;
    }
    if (event.target.id === "music-volume") {
      state.volume = Number(event.target.value);
      root.querySelector("#volume-value").textContent = `${state.volume}%`;
    }
  });
  root.addEventListener("change", (event) => {
    if (event.target === beltCheck || event.target === seatCheck)
      updateSafety();
    if (event.target.id === "chair-timer") {
      state.minutes = Number(event.target.value);
      state.remaining = state.running ? state.minutes * 60 : 0;
      render();
      notify(
        state.minutes
          ? `搖椅計時設為 ${state.minutes} 分鐘。`
          : "已關閉搖椅計時。",
      );
    }
    if (event.target.id === "music-timer") {
      state.musicMinutes = Number(event.target.value);
      state.musicRemaining = state.musicMinutes * 60;
      render();
      notify(
        state.musicMinutes
          ? `音樂計時設為 ${state.musicMinutes} 分鐘。`
          : "已關閉音樂計時。",
      );
    }
    if (event.target.id === "music-genre") {
      state.genre = event.target.value;
      state.track = 0;
      render();
      notify(`曲風已切換為${state.genre}，從${trackTitle()}開始。`);
    }
  });
  root.addEventListener("keydown", (event) => {
    if (!safetyOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeSafety();
    }
    if (event.key === "Tab") {
      const controls = [...safety.querySelectorAll("input, button")].filter(
        (el) => !el.disabled,
      );
      const first = controls[0],
        last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  setInterval(() => {
    if (state.running && state.remaining > 0) {
      state.remaining--;
      if (!state.remaining) {
        state.running = false;
        render();
        notify("計時結束，搖椅已停止。");
      }
    }
    if (state.playing && state.musicRemaining > 0) {
      state.musicRemaining--;
      if (!state.musicRemaining) {
        state.playing = false;
        render();
        notify("計時結束，音樂已暫停。");
      }
    }
    const chair = root.querySelector("#chair-remaining");
    if (chair && state.running && state.remaining)
      chair.textContent = `剩餘 ${clock(state.remaining)}`;
    const music = root.querySelector("#music-remaining");
    if (music && state.playing && state.musicRemaining)
      music.textContent = `剩餘 ${clock(state.musicRemaining)}`;
  }, 1000);
  render();
})();
