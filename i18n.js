// Bilingual copy shared by static content and dynamic app UI.
(() => {
  const entries = [
  [
    "黃安可",
    "An-Ke Huang"
  ],
  [
    "專題作品",
    "Projects"
  ],
  [
    "個人生涯",
    "Timeline"
  ],
  [
    "資訊工程系",
    "Computer Science & Information Engineering"
  ],
  [
    "尋找大四實習",
    "Seeking a senior-year internship"
  ],
  [
    "熱愛程式設計，享受用科技解決問題的過程。",
    "I love programming and solving problems through technology."
  ],
  [
    "我想要成為一位厲害的軟體工程師!",
    "I aspire to become a great software engineer!"
  ],
  [
    "目前就讀國立虎尾科技大學資訊工程系四年級，高中畢業於屏東高工電機科。進入資工系後，我認真學習資料結構、演算法、作業系統等核心課程，並利用課餘時間練習 LeetCode 題目及開發 Side Projects，持續精進程式設計與問題解決能力。大學期間也積極參與程式設計與專題競賽，透過實際挑戰累積經驗，從中學習團隊合作、技術應用與解決問題的方法。",
    "I am a senior studying Computer Science and Information Engineering at National Formosa University, with a background in Electrical Engineering from Pingtung Industrial Vocational High School. My studies include data structures, algorithms, and operating systems. Outside class, I practice on LeetCode and build side projects to improve my programming and problem-solving skills. Programming and project competitions have also helped me gain practical experience in teamwork and applying technology."
  ],
  [
    "為了從實務中累積經驗，我主動尋找實習機會並應徵，自從 2026 年 7 月開始在 Panasonic PAVCTW 事業部擔任 IT 實習生，累積了許多企業實務經驗，但由於製造業的工作以既有系統維護與改善為主讓我更加渴望挑戰不同的技術與開發環境。未來希望加入更具挑戰性的軟體開發團隊，持續精進技術，累積解決實際問題的能力，朝理想中的軟體工程師邁進！",
    "To gain practical experience, I actively sought an internship and joined Panasonic PAVCTW as an IT intern in July 2026. This role has given me valuable industry experience. Working mainly on maintaining and improving existing manufacturing systems has also motivated me to explore new technologies and development environments. I hope to join a software development team where I can take on new challenges, strengthen my technical skills, and grow as an engineer."
  ],
  [
    "就讀學校",
    "Education"
  ],
  [
    "國立虎尾科技大學",
    "National Formosa University"
  ],
  [
    "預計畢業",
    "Expected graduation"
  ],
  [
    "2027 年 6 月",
    "June 2027"
  ],
  [
    "目標職位",
    "Seeking"
  ],
  [
    "軟體工程實習生",
    "Software Engineering Intern"
  ],
  [
    "實習配合時間",
    "Availability"
  ],
  [
    "課程已修畢，無須返校上課，實習時間皆可配合。",
    "All coursework completed; available for a full-time internship without returning to campus for classes."
  ],
  [
    "專題競賽",
    "Project competitions"
  ],
  [
    "盛群盃",
    "Holtek MCU Contest"
  ],
  [
    "銅牌",
    "Bronze"
  ],
  [
    "晶心盃",
    "Andes Competition"
  ],
  [
    "經歷",
    "Experience"
  ],
  [
    "教學助理",
    "Teaching Assistant"
  ],
  [
    "校內讀書會",
    "Campus study group"
  ],
  [
    "輔導員",
    "Mentor"
  ],
  [
    "松下電腦 IT實習",
    "Panasonic IT Internship"
  ],
  [
    "大四實習",
    "Senior-year internship"
  ],
  [
    "程式競賽",
    "Programming contests"
  ],
  [
    "佳作",
    "Honorable Mention"
  ],
  [
    "晉級全國賽",
    "National finalist"
  ],
  [
    "學業",
    "Academics"
  ],
  [
    "前",
    "Top"
  ],
  [
    "系排名",
    "in the department"
  ],
  [
    "大二、大三皆達成",
    "In both sophomore and junior years"
  ],
  [
    "履歷",
    "Resume"
  ],
  [
    "專業證照",
    "Certifications"
  ],
  [
    "TQC Linux 系統管理",
    "TQC Linux System Administration"
  ],
  [
    "專業級",
    "Professional"
  ],
  [
    "工業配線技術士",
    "Industrial Wiring Technician"
  ],
  [
    "丙級",
    "Class C"
  ],
  [
    "室內配線技術士",
    "Interior Wiring Technician"
  ],
  [
    "業餘無線電人員執照",
    "Amateur Radio Operator License"
  ],
  [
    "二等",
    "Class 2"
  ],
  [
    "紅十字會急救員訓練",
    "Red Cross First Aid Training"
  ],
  [
    "訓練證書",
    "Training Certificate"
  ],
  [
    "具備 AI 感測的",
    "AI-Powered"
  ],
  [
    "智慧嬰兒安撫搖椅",
    "Smart Baby Soothing Chair"
  ],
  [
    "為減輕家長照顧嬰幼兒的負擔，整合哭聲辨識、感測器、馬達控制與遠端監控，將 AI 與嵌入式系統連結成可操作的照護輔助方案，並可以透過APP輕鬆遠端監控寶寶狀態或是操控智慧搖椅。",
    "An assistive care system combining cry recognition, sensors, motor control, and remote monitoring to support parents. AI and embedded systems work together, while a mobile app lets caregivers check the baby's status and control the chair remotely."
  ],
  [
    "我的負責項目",
    "My contributions"
  ],
  [
    "韌體開發、硬體整合、App 串接與模型訓練。整合 UART、I²C、ADC、PWM、GPIO 等介面，並蒐集素材、完成模型訓練與系統測試。",
    "Firmware development, hardware integration, app connectivity, and model training. I integrated UART, I²C, ADC, PWM, and GPIO interfaces, collected training materials, trained the model, and tested the system."
  ],
  [
    "您的瀏覽器不支援影片播放，請",
    "Your browser does not support video playback. Please"
  ],
  [
    "下載運轉示範影片",
    "download the demonstration video"
  ],
  [
    "操作手動按鈕，展示搖椅運轉與指示燈狀態。",
    "Manual controls demonstrate chair operation and indicator lights."
  ],
  [
    "初賽影片",
    "Preliminary Round Video"
  ],
  [
    "運作測試影片",
    "Operation Test Video"
  ],
  [
    "技術",
    "Technologies"
  ],
  [
    "AI 辨識",
    "AI Recognition"
  ],
  [
    "Edge Impulse｜哭聲辨識",
    "Edge Impulse | Cry recognition"
  ],
  [
    "韌體開發",
    "Firmware"
  ],
  [
    "I/O 整合",
    "I/O Integration"
  ],
  [
    "GPIO：按鈕、LED、安全扣偵測",
    "GPIO: Buttons, LEDs, safety buckle detection"
  ],
  [
    "電路製作",
    "Circuit Fabrication"
  ],
  [
    "Altium｜自行刻電路板",
    "Altium | Custom-etched PCB"
  ],
  [
    "外殼製作",
    "Enclosure"
  ],
  [
    "3D 列印",
    "3D Printing"
  ],
  [
    "App 開發",
    "App Development"
  ],
  [
    "APP操控",
    "App Controls"
  ],
  [
    "使用 Flutter 開發，採用 Google Material Design 元件打造操作介面。",
    "Built with Flutter and Google Material Design components."
  ],
  [
    "安撫椅系統",
    "Soothing Chair System"
  ],
  [
    "系統在啟動時會檢查以下安全確認",
    "Safety checks before starting"
  ],
  [
    "如為繫上或未做妥，系統不會運作，運轉過程中也會檢查。",
    "The chair will only run when all safety checks pass. Checks also continue during operation."
  ],
  [
    "安全帶已扣上",
    "Safety belt fastened"
  ],
  [
    "請確認嬰兒已妥善固定。",
    "Make sure the baby is safely secured."
  ],
  [
    "模擬嬰兒在座",
    "Simulate baby in seat"
  ],
  [
    "切換座位感應器的示範訊號。",
    "Toggle the simulated seat sensor signal."
  ],
  [
    "確認並啟動",
    "Confirm & Start"
  ],
  [
    "取消",
    "Cancel"
  ],
  [
    "試試看吧",
    "Try it out"
  ],
  [
    "首頁",
    "Home"
  ],
  [
    "搖椅控制",
    "Chair Controls"
  ],
  [
    "音樂播放",
    "Music"
  ],
  [
    "哭聲紀錄",
    "Cry Records"
  ],
  [
    "請開啟 JavaScript 以體驗互動 App。",
    "Enable JavaScript to try the interactive app."
  ],
  [
    "獲獎紀錄",
    "Awards"
  ],
  [
    "盛群盃創意大賽",
    "Holtek MCU Contest"
  ],
  [
    "晶心盃應用組",
    "Andes Competition — Application Category"
  ],
  [
    "校內專題競賽",
    "University Project Competition"
  ],
  [
    "AI 校園衝突與",
    "AI Campus Conflict &"
  ],
  [
    "暴力行為辨識系統",
    "Violence Detection System"
  ],
  [
    "結合 YOLO11 Pose 與 LSTM，分析連續影格中的人體骨骼特徵，辨識疑似打架、推擠與拉扯等異常互動，並記錄事件時間、辨識結果與信心度。",
    "Combines YOLO11 Pose and LSTM to analyze body keypoints across consecutive frames, detect suspected fighting, pushing, and pulling, and record event times, predictions, and confidence scores."
  ],
  [
    "資料蒐集、前處理與模型訓練。建立影片匯入、骨骼擷取、正規化、時序切片與標記的自動化流程，並參與即時推論、FastAPI 後端及網頁介面整合。",
    "Data collection, preprocessing, and model training. I built an automated pipeline for video import, pose extraction, normalization, temporal segmentation, and labeling, and helped integrate real-time inference, a FastAPI backend, and the web interface."
  ],
  [
    "設計與驗證",
    "Design & Validation"
  ],
  [
    "使用骨骼關鍵點作為辨識輸入，降低對臉部與外觀特徵的依賴，並針對多人、遮擋與不同拍攝環境進行測試。",
    "Uses body keypoints as input to reduce reliance on faces and appearance. Tested with multiple people, occlusion, and different filming environments."
  ],
  [
    "骨骼姿態分析、異常行為辨識與事件紀錄介面",
    "Pose analysis, abnormal behavior detection, and event logging interface"
  ],
  [
    "校園合作與部署規劃",
    "School Collaboration & Deployment Plans"
  ],
  [
    "與高雄地區國小合作進行研發與驗證，規劃將系統部署至校園內，協助辨識疑似衝突與暴力事件，提供校方掌握異常狀況的參考，維護校園安全。",
    "Collaborating with an elementary school in Kaohsiung on development and validation. Planned campus deployment would help identify suspected conflicts and violence, giving staff information to support school safety."
  ],
  [
    "後續規劃以 Raspberry Pi 進行邊緣部署，驗證系統在校園實際環境中的運作表現。",
    "Future plans include edge deployment on Raspberry Pi to evaluate performance in a real school environment."
  ],
  [
    "資料蒐集與處理流程",
    "Data Collection & Processing"
  ],
  [
    "影片資料來源",
    "Video Sources"
  ],
  [
    "AI 影片自動生成與蒐集",
    "Automated AI Video Generation & Collection"
  ],
  [
    "透過自動化流程生成AI影片，並自動下載、匯入資料集，約佔蒐集影片的 70%。",
    "AI videos are generated, downloaded, and imported through an automated pipeline, accounting for approximately 70% of collected videos."
  ],
  [
    "網路公開資料集",
    "Public Datasets"
  ],
  [
    "彙整公開影片素材",
    "Collect publicly available videos"
  ],
  [
    "自行拍攝模擬影片",
    "Self-Recorded Simulations"
  ],
  [
    "拍攝模擬行為情境",
    "Record simulated behavior scenarios"
  ],
  [
    "彙整資料後，以 Python 自動化處理",
    "Automated processing in Python after collection"
  ],
  [
    "影片讀取",
    "Video Import"
  ],
  [
    "OpenCV 讀取影片並逐幀擷取。",
    "Read videos and extract frames with OpenCV."
  ],
  [
    "骨骼擷取",
    "Pose Extraction"
  ],
  [
    "YOLO11 Pose 擷取人體骨骼關鍵點。",
    "Extract body keypoints with YOLO11 Pose."
  ],
  [
    "時序建立",
    "Sequence Building"
  ],
  [
    "整理並正規化骨骼座標，建立連續影格時間序列。",
    "Organize and normalize keypoints into temporal sequences."
  ],
  [
    "標記與建集",
    "Labeling & Dataset Creation"
  ],
  [
    "標記 FIGHT／NORMAL，建立訓練資料集。",
    "Label FIGHT / NORMAL samples to build the training dataset."
  ],
  [
    "切分與訓練",
    "Splitting & Training"
  ],
  [
    "切分 Training／Validation／Test，進行 LSTM 模型訓練。",
    "Split into training, validation, and test sets, then train the LSTM model."
  ],
  [
    "骨架轉換影片",
    "Pose Visualization Videos"
  ],
  [
    "下載衝突行為骨架影片",
    "Download conflict pose video"
  ],
  [
    "衝突行為骨架",
    "Conflict Pose Visualization"
  ],
  [
    "下載一般行為骨架影片",
    "Download normal behavior pose video"
  ],
  [
    "一般行為骨架",
    "Normal Behavior Pose Visualization"
  ],
  [
    "測試影片",
    "Test Video"
  ],
  [
    "下載系統測試影片",
    "Download system test video"
  ],
  [
    "屏東高工",
    "Pingtung Industrial Vocational High School"
  ],
  [
    "電機科",
    "Electrical Engineering"
  ],
  [
    "高中就讀電機科期間，我取得了工業配線與室內配線丙級證照，也意外發現自己對軟體開發的熱情。出於好奇，我購買了 Udemy 網頁開發課程並開始自學程式設計，從此開啟了我踏入資訊工程領域的旅程。",
    "While studying Electrical Engineering in high school, I earned Class C certifications in industrial and interior wiring and discovered my interest in software development. I bought a web development course on Udemy and began learning programming independently, starting my journey into computer science."
  ],
  [
    "大一",
    "Freshman"
  ],
  [
    "大一上學期 — 大一下學期",
    "Freshman year — Fall & Spring"
  ],
  [
    "從高中自學網頁開發，到大學正式踏入資訊工程領域，我持續探索程式設計的各種可能。除了累積軟體開發與演算法基礎，也嘗試結合過去的電機背景，投入 AI 與嵌入式系統開發，享受將想法一步步實現的過程。",
    "From teaching myself web development in high school to studying computer science at university, I have continued exploring programming. Alongside software and algorithm fundamentals, I apply my electrical engineering background to AI and embedded systems, turning ideas into working projects."
  ],
  [
    "大二",
    "Sophomore"
  ],
  [
    "大二上學期 — 大二下學期",
    "Sophomore year — Fall & Spring"
  ],
  [
    "畢業專題",
    "Capstone Project"
  ],
  [
    "AI 智慧嬰兒安撫搖椅",
    "AI Smart Baby Soothing Chair"
  ],
  [
    "整合哭聲辨識、嵌入式控制與遠端監控，負責韌體、硬體整合、App 串接與模型訓練。",
    "Integrated cry recognition, embedded control, and remote monitoring. Responsible for firmware, hardware integration, app connectivity, and model training."
  ],
  [
    "查看專題介紹與影片",
    "Explore the project & videos"
  ],
  [
    "銅牌 / BRONZE",
    "BRONZE"
  ],
  [
    "第 20 屆盛群盃創意大賽",
    "20th Holtek MCU Contest"
  ],
  [
    "專題競賽銅牌",
    "Project Competition — Bronze"
  ],
  [
    "歷經整個暑假及開學後的課餘時間持續投入開發，終於完成系統整合與實作，並在競賽中榮獲銅牌。作品更獲得評審高度肯定，認為系統完成度高，具備實際應用價值與商業化潛力。",
    "After developing the project throughout the summer and outside class, we completed the integrated system and won bronze. The judges praised its completeness, practical value, and commercialization potential."
  ],
  [
    "再度帶著智慧嬰兒安撫搖椅參加晶心盃專題競賽，並再次榮獲銅牌，為團隊的努力增添一份肯定。",
    "We entered the smart baby soothing chair in the Andes Competition and earned another bronze award in recognition of the team's work."
  ],
  [
    "大三",
    "Junior"
  ],
  [
    "大三上學期 — 大三下學期",
    "Junior year — Fall & Spring"
  ],
  [
    "Python 程式課程",
    "Python Programming Lab"
  ],
  [
    "擔任 Python 程式實習課程教學助理，協助同學理解程式語法與邏輯、解決課堂實作問題，並協助授課老師進行作業批改與課堂教學，從中培養技術溝通與問題解決能力。",
    "Served as a Python programming lab teaching assistant, helping students understand syntax and logic and solve programming exercises. Supported grading and classroom instruction while developing technical communication and problem-solving skills."
  ],
  [
    "佳作 / HONORABLE MENTION",
    "HONORABLE MENTION"
  ],
  [
    "2025校內專題競賽",
    "2025 University Project Competition"
  ],
  [
    "在國立虎尾科技大學校內成果發表暨專題競賽中，以智慧嬰兒安撫搖椅專題獲得專題競賽佳作。",
    "The smart baby soothing chair received an Honorable Mention at National Formosa University's project exhibition and competition."
  ],
  [
    "上下學期專題成績分別為 93分、92分",
    "Project grades: 93 and 92 in the two semesters"
  ],
  [
    "研發階段",
    "In Development"
  ],
  [
    "以 YOLO11 Pose 與 LSTM 建立骨骼行為辨識流程，負責自動化資料處理、模型訓練，並參與後端整合。",
    "Built a pose-based behavior recognition pipeline with YOLO11 Pose and LSTM. Responsible for automated data processing and model training; also contributed to backend integration."
  ],
  [
    "查看專題介紹",
    "Explore the project"
  ],
  [
    "大四",
    "Senior"
  ],
  [
    "大四實習與競賽",
    "Senior-year Internship & Competitions"
  ],
  [
    "2026 / 07 / 01 起 · 全學年實習",
    "From 2026 / 07 / 01 · Full academic year"
  ],
  [
    "松下電腦",
    "Panasonic"
  ],
  [
    "IT 實習",
    "IT Internship"
  ],
  [
    "加入台灣松下電腦生產技術部 DX 數位化課，參與內部資訊系統維護、強固型電腦與周邊設備測試自動化，並開發與維護測試腳本，累積製造業現場的系統開發與交流經驗。",
    "Joined the DX section of Panasonic Taiwan's Production Engineering Department. Work includes internal system maintenance, test automation for rugged computers and peripherals, and developing and maintaining test scripts, gaining hands-on experience in manufacturing systems and collaboration."
  ],
  [
    "目前正在實習中",
    "Internship in Progress"
  ],
  [
    "松下電腦 IT 實習",
    "Panasonic IT Internship"
  ],
  [
    "ICPC 程式競賽",
    "ICPC Programming Contest"
  ],
  [
    "參加全國程式競賽，獲得佳作。",
    "Received an Honorable Mention in the national programming contest."
  ],
  [
    "晉級全國賽 / QUALIFIED",
    "QUALIFIED FOR NATIONAL FINALS"
  ],
  [
    "NCPC 程式競賽",
    "NCPC Programming Contest"
  ],
  [
    "成功晉級全國賽。",
    "Qualified for the national finals."
  ],
  [
    "持續學習，繼續向前。",
    "Keep learning. Keep moving forward."
  ],
  [
    "聯絡我",
    "Contact Me"
  ],
  [
    "歡迎聯繫，聊聊實習機會或專案合作。",
    "Get in touch about internship opportunities or project collaboration."
  ],
  [
    "電子信箱",
    "Email"
  ],
  [
    "複製信箱",
    "Copy Email"
  ],
  [
    "傳送郵件",
    "Send Email"
  ],
  [
    "黃安可 · AN-KE HUANG",
    "AN-KE HUANG"
  ],
  [
    "回到頂端 ↑",
    "Back to top ↑"
  ],
  [
    "黃安可，國立虎尾科技大學資訊工程系，預計 2027 年 6 月畢業。尋找軟體工程實習機會，具備程式設計、AI 資料處理與系統整合經驗。",
    "An-Ke Huang, Computer Science and Information Engineering student at National Formosa University, graduating in June 2027. Seeking a software engineering internship, with experience in programming, AI data processing, and system integration."
  ],
  [
    "黃安可的個人照片",
    "Portrait of An-Ke Huang"
  ],
  [
    "聯絡方式與履歷",
    "Contact and resume"
  ],
  [
    "聯絡我：查看信箱",
    "Contact me: view email address"
  ],
  [
    "TQC Linux 系統管理專業級證書",
    "TQC Linux System Administration Professional certificate"
  ],
  [
    "工業配線丙級技術士證",
    "Class C Industrial Wiring Technician certificate"
  ],
  [
    "室內配線丙級技術士證",
    "Class C Interior Wiring Technician certificate"
  ],
  [
    "業餘無線電人員二等執照",
    "Class 2 Amateur Radio Operator license"
  ],
  [
    "紅十字會急救員訓練證書",
    "Red Cross First Aid Training certificate"
  ],
  [
    "實體控制盒操作與搖椅運轉示範",
    "Physical control box and rocking chair demonstration"
  ],
  [
    "智慧搖椅影片介紹",
    "Smart chair videos"
  ],
  [
    "比賽影片（開發中）",
    "Competition Video (In Development)"
  ],
  [
    "播放智慧搖椅比賽影片（開發中）",
    "Play smart chair competition video (in development)"
  ],
  [
    "播放智慧搖椅運作測試影片",
    "Play smart chair operation test video"
  ],
  [
    "返回 App 首頁",
    "Back to app home"
  ],
  [
    "App 展示頁面",
    "App demo pages"
  ],
  [
    "盛群盃創意大賽銅牌得獎合照",
    "Team photo after winning bronze at the Holtek MCU Contest"
  ],
  [
    "晶心盃應用組銅牌團隊合照",
    "Andes Competition application category bronze team photo"
  ],
  [
    "校內專題競賽佳作獎狀",
    "University Project Competition Honorable Mention certificate"
  ],
  [
    "校園行為辨識系統的姿態分析與事件紀錄介面",
    "Campus behavior detection system pose analysis and event logging interface"
  ],
  [
    "衝突行為骨架轉換影片",
    "Conflict behavior pose visualization video"
  ],
  [
    "一般行為骨架轉換影片",
    "Normal behavior pose visualization video"
  ],
  [
    "AI 校園衝突與暴力行為辨識系統測試影片",
    "AI campus conflict and violence detection test video"
  ],
  [
    "第 20 屆盛群盃創意大賽團隊領獎合影",
    "Team receiving an award at the 20th Holtek MCU Contest"
  ],
  [
    "2025 晶心盃應用組團隊與作品合影",
    "2025 Andes Competition application category team and project photo"
  ],
  [
    "2025 晶心盃應用組銅牌獎杯",
    "2025 Andes Competition application category bronze trophy"
  ],
  [
    "黃安可擔任 Python 教學助理，於電腦教室協助同學進行程式實作",
    "An-Ke Huang assisting students with Python programming in the computer lab"
  ],
  [
    "智慧嬰兒安撫搖椅專題成果簡報",
    "Smart baby soothing chair project presentation"
  ],
  [
    "松下電腦 IT 實習工作紀錄",
    "Panasonic IT internship work photo"
  ],
  [
    "ICPC 程式競賽三位參賽團隊成員合影",
    "Three ICPC programming contest team members"
  ],
  [
    "關閉信箱視窗",
    "Close email dialog"
  ],
  [
    "座位感應器：已偵測到嬰兒（模擬）",
    "Seat sensor: baby detected (simulated)"
  ],
  [
    "座位感應器：未偵測到嬰兒",
    "Seat sensor: no baby detected"
  ],
  [
    "APP的首頁，一切都從這裡開始。",
    "The app home screen: your starting point."
  ],
  [
    "目前狀態",
    "Current Status"
  ],
  [
    "顯示搖椅是否正在運作，與控制頁同步。",
    "Shows whether the chair is running, in sync with the control page."
  ],
  [
    "功能入口",
    "Features"
  ],
  [
    "點選搖椅控制、音樂播放或紀錄卡片，進入對應頁面。",
    "Select chair controls, music, or records to open that page."
  ],
  [
    "手動／智慧模式切換、強度調整與啟動前安全確認流程。",
    "Switch between manual and smart modes, adjust intensity, and complete safety checks before starting."
  ],
  [
    "模式切換與啟動",
    "Mode & Start"
  ],
  [
    "點擊模式按鈕，可在手動模式與智慧模式間切換。啟動前搖椅系統會先檢測安全扣卡榫感應器及在席感應器否。",
    "Tap the mode button to switch between manual and smart modes. Before starting, the system checks the safety buckle and seat sensors."
  ],
  [
    "強度調整",
    "Intensity"
  ],
  [
    "拖曳滑桿切換 0–3 級強度，狀態卡會即時更新。",
    "Drag the slider to set intensity from 0 to 3. The status updates immediately."
  ],
  [
    "計時停止",
    "Auto Stop"
  ],
  [
    "選擇 15、20、25 或 30 分鐘，運作時開始倒數；到時自動停止。",
    "Choose 15, 20, 25, or 30 minutes. The countdown begins when running and stops the chair when it ends."
  ],
  [
    "將播放控制、曲風與音量設定集中在一個頁面。",
    "Playback, genre, and volume controls in one place."
  ],
  [
    "播放控制",
    "Playback Controls"
  ],
  [
    "在目前曲風的 1–8 首內切換上一首／下一首，並可切換播放與暫停。第 8 首之後會回到第 1 首。",
    "Browse tracks 1–8 in the selected genre and toggle play or pause. The playlist loops after track 8."
  ],
  [
    "曲風與計時",
    "Genre & Timer"
  ],
  [
    "依錄影提供輕鬆、歡樂與流行選項，並可設定播放停止時間。",
    "Choose Relaxing, Cheerful, or Pop, as shown in the recording, and set a playback timer."
  ],
  [
    "音量調整",
    "Volume"
  ],
  [
    "拖曳滑桿查看音量百分比；本展示不輸出音訊。",
    "Drag the slider to adjust the volume percentage. This demo has no audio output."
  ],
  [
    "依日期與時間整理偵測事件，讓照護者回顧系統紀錄。",
    "Review detection events organized by date and time."
  ],
  [
    "事件清單",
    "Event List"
  ],
  [
    "每張卡片呈現偵測結果與時間，清單可上下捲動。",
    "Each card shows a detection result and time. Scroll to browse the list."
  ],
  [
    "模擬新增",
    "Simulate an Event"
  ],
  [
    "下方按鈕可加入一筆目前時間的示範事件，體驗紀錄更新；不會開啟麥克風或保存資料。",
    "Add a sample event with the current time using the button below. No microphone access or data storage is involved."
  ],
  [
    "歡迎登入安撫椅系統",
    "Welcome to the Soothing Chair System"
  ],
  [
    "啟動前會顯示安全帶提醒",
    "Safety checks appear before starting"
  ],
  [
    "智慧模式，點擊切換為手動模式",
    "Smart mode: switch to manual mode"
  ],
  [
    "手動模式，點擊切換為智慧模式",
    "Manual mode: switch to smart mode"
  ],
  [
    "智慧模式",
    "Smart Mode"
  ],
  [
    "手動模式",
    "Manual Mode"
  ],
  [
    "運作中",
    "Running"
  ],
  [
    "已停止",
    "Stopped"
  ],
  [
    "控制",
    "Controls"
  ],
  [
    "紀錄",
    "Records"
  ],
  [
    "關閉",
    "Off"
  ],
  [
    "計時",
    "Timer"
  ],
  [
    "分鐘",
    "min"
  ],
  [
    "搖椅",
    "Chair"
  ],
  [
    "音樂",
    "Music"
  ],
  [
    "強度",
    "Intensity"
  ],
  [
    "停止",
    "Stop"
  ],
  [
    "啟動",
    "Start"
  ],
  [
    "剩餘",
    "Remaining"
  ],
  [
    "最低",
    "Low"
  ],
  [
    "最高",
    "High"
  ],
  [
    "曲風",
    "Genre"
  ],
  [
    "輕鬆",
    "Relaxing"
  ],
  [
    "歡樂",
    "Cheerful"
  ],
  [
    "流行",
    "Pop"
  ],
  [
    "播放中",
    "Playing"
  ],
  [
    "已暫停",
    "Paused"
  ],
  [
    "上一首",
    "Previous track"
  ],
  [
    "下一首",
    "Next track"
  ],
  [
    "暫停",
    "Pause"
  ],
  [
    "播放狀態模擬 · 無音訊",
    "Simulated playback · No audio"
  ],
  [
    "播放",
    "Play"
  ],
  [
    "音量大小",
    "Volume"
  ],
  [
    "靜音",
    "Mute"
  ],
  [
    "最大",
    "Max"
  ],
  [
    "示範紀錄",
    "Sample Records"
  ],
  [
    "偵測到哭聲",
    "Cry detected"
  ],
  [
    "時間",
    "Time"
  ],
  [
    "已切換至",
    "Switched to "
  ],
  [
    "已切換為",
    "Changed to "
  ],
  [
    "搖椅已停止。",
    "The chair has stopped."
  ],
  [
    "安全帶已確認，座位感應器已偵測到嬰兒（模擬），搖椅開始運作。",
    "Safety belt confirmed and baby detected (simulated). The chair is starting."
  ],
  [
    "音樂狀態：播放中（無音訊）。",
    "Music: playing (no audio)."
  ],
  [
    "音樂狀態：已暫停。",
    "Music: paused."
  ],
  [
    "搖椅計時設為",
    "Chair timer set to"
  ],
  [
    "音樂計時設為",
    "Music timer set to"
  ],
  [
    "已關閉搖椅計時。",
    "Chair timer turned off."
  ],
  [
    "已關閉音樂計時。",
    "Music timer turned off."
  ],
  [
    "曲風已切換為",
    "Genre changed to "
  ],
  [
    "，從",
    ", starting with "
  ],
  [
    "開始。",
    "."
  ],
  [
    "計時結束，搖椅已停止。",
    "Timer finished. The chair has stopped."
  ],
  [
    "計時結束，音樂已暫停。",
    "Timer finished. Music has paused."
  ],
  [
    "已複製 ✓",
    "Copied ✓"
  ],
  [
    "信箱已複製到剪貼簿。",
    "Email address copied to clipboard."
  ],
  [
    "請選取信箱文字，使用 Ctrl+C 或長按複製。",
    "Select the email address and press Ctrl+C or long-press to copy."
  ],
  [
    "智慧搖椅｜完整介紹",
    "Smart Chair | Overview"
  ],
  [
    "智慧搖椅｜",
    "Smart Chair | "
  ],
  [
    "關閉影片",
    "Close video"
  ],
  [
    "在 YouTube 觀看 ↗",
    "Watch on YouTube ↗"
  ],
  [
    "關於我",
    "About"
  ],
  [
    "專題競賽佳作",
    "Project Competition — Honorable Mention"
  ]
];
  const languageStorageKey = 'anke-portfolio-language';
  const supportedLanguages = ['en', 'zh-Hant'];
  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem(languageStorageKey);
  } catch { /* Language switching still works when browser storage is unavailable. */ }
  let language = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';
  const sources = new WeakMap();
  const attributeSources = new WeakMap();
  const translations = new Map(entries);
  const phrases = [...translations.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(phrases.map(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  const chinese = /[\u4e00-\u9fff]/;
  const translate = value => language === 'en'
    ? value.replace(pattern, phrase => translations.get(phrase)) : value;
  const ignored = element => !element || element.closest('script, style, noscript, .language-switch, i18n-text');

  function updateText(node) {
    if (ignored(node.parentElement)) return;
    const previous = sources.get(node);
    const value = node.nodeValue;
    const source = previous && previous.rendered === value ? previous.source : value;
    if (!chinese.test(source)) return;
    const rendered = translate(source);
    sources.set(node, { source, rendered });
    if (value !== rendered) node.nodeValue = rendered;
  }

  function updateElement(element) {
    if (element.matches('i18n-text[data-i18n]')) {
      const pair = entries[Number(element.dataset.i18n)];
      const value = pair[language === 'en' ? 1 : 0];
      if (element.textContent !== value) element.textContent = value;
    }
    if (element.hasAttribute('data-i18n-attrs')) {
      const attributes = JSON.parse(element.getAttribute('data-i18n-attrs'));
      for (const [name, index] of Object.entries(attributes)) {
        const value = entries[Number(index)][language === 'en' ? 1 : 0];
        if (element.getAttribute(name) !== value) element.setAttribute(name, value);
      }
    }
    if (ignored(element)) return;
    let saved = attributeSources.get(element);
    if (!saved) attributeSources.set(element, saved = new Map());
    for (const name of ['aria-label', 'alt', 'title']) {
      if (!element.hasAttribute(name)) continue;
      const value = element.getAttribute(name);
      const previous = saved.get(name);
      const source = previous && previous.rendered === value ? previous.source : value;
      if (!chinese.test(source)) continue;
      const rendered = translate(source);
      saved.set(name, { source, rendered });
      if (value !== rendered) element.setAttribute(name, rendered);
    }
  }

  function update(root) {
    if (root.nodeType === Node.TEXT_NODE) return updateText(root);
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    updateElement(root);
    for (const element of root.querySelectorAll('*')) updateElement(element);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) updateText(walker.currentNode);
  }

  function setLanguage(next) {
    if (!supportedLanguages.includes(next)) return;
    language = next;
    try {
      localStorage.setItem(languageStorageKey, language);
    } catch { /* Keep the selected language for this page even if it cannot be saved. */ }
    document.documentElement.lang = language;
    update(document.documentElement);
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
    window.dispatchEvent(new Event('resize'));
  }

  // Translate newly rendered controls without replacing them or resetting their state.
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') updateText(record.target);
      else if (record.type === 'attributes') updateElement(record.target);
      else for (const node of record.addedNodes) update(node);
    }
  });
  observer.observe(document.documentElement, {
    childList: true, subtree: true, characterData: true,
    attributes: true, attributeFilter: ['aria-label', 'alt', 'title'],
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  window.siteLanguage = { translate, get language() { return language; } };
  setLanguage(language);

})();
