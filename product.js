const common = {
  "zh-Hant": {
    htmlLang: "zh-Hant", themeLabel: "外觀:", themeAuto: "自動", themeLight: "白天", themeDark: "夜晚",
    navHome: "首頁", navProduct: "使用教學", navSupport: "支援", navPrivacy: "隱私權政策", navTerms: "使用條款",
    topline: "產品使用教學", eyebrow: "Product walkthrough", title: "LiDAR WiFi Planner",
    summary: "用生成的操作畫面快速了解：掃描圖面、站點實測、熱力圖判讀、AP 模擬、控制器進階檢測與報告匯出。",
    footer: "Copyright © 2026 ALMX. All rights reserved."
  },
  en: {
    htmlLang: "en", themeLabel: "Theme:", themeAuto: "Auto", themeLight: "Light", themeDark: "Dark",
    navHome: "Home", navProduct: "Product Guide", navSupport: "Support", navPrivacy: "Privacy Policy", navTerms: "Terms of Use",
    topline: "Product Guide", eyebrow: "Product walkthrough", title: "LiDAR WiFi Planner",
    summary: "Generated guide screens explain scanning, on-site measurements, heatmap reading, AP simulation, controller-assisted tests, and report export.",
    footer: "Copyright © 2026 ALMX. All rights reserved."
  },
  ja: {
    htmlLang: "ja", themeLabel: "外観:", themeAuto: "自動", themeLight: "ライト", themeDark: "ダーク",
    navHome: "ホーム", navProduct: "使い方", navSupport: "サポート", navPrivacy: "プライバシーポリシー", navTerms: "利用規約",
    topline: "製品ガイド", eyebrow: "Product walkthrough", title: "LiDAR WiFi Planner",
    summary: "生成した操作画面で、スキャン、現地測定、ヒートマップ、AP シミュレーション、コントローラー測定、レポート出力を説明します。",
    footer: "Copyright © 2026 ALMX. All rights reserved."
  },
  ko: {
    htmlLang: "ko", themeLabel: "테마:", themeAuto: "자동", themeLight: "라이트", themeDark: "다크",
    navHome: "홈", navProduct: "사용 가이드", navSupport: "지원", navPrivacy: "개인정보 처리방침", navTerms: "이용 약관",
    topline: "제품 사용 가이드", eyebrow: "Product walkthrough", title: "LiDAR WiFi Planner",
    summary: "생성된 조작 화면으로 스캔, 현장 측정, 히트맵 확인, AP 시뮬레이션, 컨트롤러 측정, 보고서 내보내기를 설명합니다.",
    footer: "Copyright © 2026 ALMX. All rights reserved."
  },
  "zh-Hans": {
    htmlLang: "zh-Hans", themeLabel: "外观:", themeAuto: "自动", themeLight: "白天", themeDark: "夜晚",
    navHome: "首页", navProduct: "使用指南", navSupport: "支持", navPrivacy: "隐私政策", navTerms: "使用条款",
    topline: "产品使用指南", eyebrow: "Product walkthrough", title: "LiDAR WiFi Planner",
    summary: "用生成的操作画面快速了解：扫描图面、现场实测、热力图判读、AP 模拟、控制器进阶检测与报告导出。",
    footer: "Copyright © 2026 ALMX. All rights reserved."
  }
};

const guide = {
  "zh-Hant": {
    features: [["LiDAR 圖面", "掃一次保存平面圖"], ["實測熱力圖", "站點測速與延遲"], ["AP 模擬", "5 GHz / 2.4 GHz 規劃"], ["報告匯出", "PDF、CSV、PNG、SVG"]],
    noteTitle: "關於畫面",
    note: "以下畫面是依 App 程式結構生成的教學 mockup，用來說明操作流程；實際 App 會依裝置、語言、圖面與測點資料顯示不同內容。",
    steps: [
      ["01", "掃描或載入平面圖", "先在圖面頁建立房間基底。支援 RoomPlan 掃描、範例圖面、多圖面管理、旋轉校正、3D 預覽與 2D 匯出。", ["按下 Scan floor plan 開始掃描。", "掃描完成後平面圖會保存，下次不用重掃。", "可用 Align / Rotate 90° 把牆線轉正，方便後續量測。"], "plan"],
      ["02", "站到定點，點選圖面位置", "實測 site survey 的核心流程是：人站在房間實際位置，在圖面點出同一個位置，再開始測試。", ["每個測點會記錄下載速度、延遲、抖動、丟包與綜合分數。", "累積至少 3 個測點後會內插成實測熱力圖。", "測點可重測、清除，也可匯出 CSV。"], "survey"],
      ["03", "切換指標看不同問題", "同一次量測會保存多個指標，所以不需要為了看延遲或丟包再跑一次。", ["Download 看實際吞吐量。", "Latency / Jitter / Loss 看穩定度。", "Score 綜合判斷；SNR 則需要控制器進階讀值。"], "metrics"],
      ["04", "用模擬規劃 AP 或中繼器位置", "熱力圖演算頁可以在平面圖放置多台 AP，依 FSPL 與牆損模型預估覆蓋，適合改善前先試擺。", ["點擊圖面新增 AP，拖曳調整位置。", "預設 5 GHz，能更明顯看出牆損差異。", "可清除 AP 重新規劃。"], "simulation"],
      ["05", "連接控制器取得進階真值", "若有 Aruba Instant 控制器，可讀取本機 client 的真實 SNR、關聯 AP、頻段與通道，提升判讀精準度。", ["設定控制器位址、帳號與密碼。", "測試成功後，訊號偵測會顯示進階測試徽章。", "控制器頁也能查看 AP、client、RF 與 roaming 資訊。"], "controller"],
      ["06", "產生報告與匯出資料", "完成測點後，可產出給客戶或自己留存的驗收報告，也能匯出圖面與量測資料做後續分析。", ["至少 3 個測點即可產生熱力圖報告。", "可匯出 PNG / SVG / DXF 平面圖。", "報告、CSV 與圖檔都由使用者主動分享。"], "report"]
    ]
  },
  en: {
    features: [["LiDAR plans", "Scan once and save"], ["Survey heatmaps", "Speed and latency points"], ["AP simulation", "5 GHz / 2.4 GHz planning"], ["Exports", "PDF, CSV, PNG, SVG"]],
    noteTitle: "About these screens",
    note: "The screens below are generated instructional mockups based on the app structure. The real app changes with device, language, floor plan, and measurement data.",
    steps: [
      ["01", "Scan or load a floor plan", "Start with a saved room base. The Floor Plan tab supports RoomPlan scanning, samples, multiple plans, alignment, 3D preview, and 2D export.", ["Tap Scan floor plan to start.", "After scanning, the plan is saved so you do not need to rescan.", "Use Align / Rotate 90° to straighten walls."], "plan"],
      ["02", "Stand on-site and tap your location", "The core site survey flow is simple: stand at a real spot, tap the matching point on the plan, then start the test.", ["Each point records download, latency, jitter, loss, and score.", "At least 3 points produce an interpolated heatmap.", "Points can be re-tested, cleared, or exported as CSV."], "survey"],
      ["03", "Switch metrics without re-measuring", "One measurement stores several metrics, so you can diagnose speed, stability, and quality from the same data.", ["Download shows throughput.", "Latency / Jitter / Loss show stability.", "Score is combined; SNR requires controller data."], "metrics"],
      ["04", "Simulate AP or repeater placement", "The Simulation tab lets you place multiple APs and estimates coverage using FSPL plus wall loss before changing hardware.", ["Tap to add APs and drag to move them.", "5 GHz is the default to reveal wall-loss differences.", "Clear APs and try another layout."], "simulation"],
      ["05", "Use controller-assisted readings", "With an Aruba Instant controller, the app can read real SNR, associated AP, band, and channel for better accuracy.", ["Enter controller host, account, and password.", "A successful test enables the advanced survey badge.", "The Controller tab also shows AP, client, RF, and roaming details."], "controller"],
      ["06", "Create reports and export data", "After measuring points, generate a client-ready report or export floor plans and raw survey data for analysis.", ["At least 3 points can produce a heatmap report.", "Export PNG / SVG / DXF floor plans.", "Reports, CSV, and images are shared only when you choose."], "report"]
    ]
  }
};

guide.ja = {
  features: [["LiDAR フロアプラン", "一度スキャンして保存"], ["実測ヒートマップ", "速度と遅延を測定"], ["AP シミュレーション", "5 GHz / 2.4 GHz 計画"], ["レポート出力", "PDF、CSV、PNG、SVG"]],
  noteTitle: "画面について",
  note: "以下は App の構造をもとに生成した説明用 mockup です。実際の App 画面は端末、言語、フロアプラン、測定データによって変わります。",
  steps: [
    ["01", "フロアプランをスキャンまたは読み込み", "まず部屋の基礎となる図面を作成します。RoomPlan スキャン、サンプル、複数図面、角度補正、3D プレビュー、2D 書き出しに対応します。", ["Scan floor plan を押してスキャンを開始します。", "スキャン後は図面が保存され、次回は再スキャン不要です。", "Align / Rotate 90° で壁線を見やすく整えます。"], "plan"],
    ["02", "現地で立ち位置をタップ", "実測 site survey は、実際の位置に立ち、図面上の同じ位置をタップしてテストする流れです。", ["各測定点にダウンロード、遅延、ジッター、パケットロス、スコアを保存します。", "3 点以上で実測ヒートマップを生成します。", "測定点は再測定、削除、CSV 書き出しができます。"], "survey"],
    ["03", "再測定せずに指標を切り替え", "1 回の測定で複数の指標を保存するため、速度と安定性を同じデータから確認できます。", ["Download は実効速度を表示します。", "Latency / Jitter / Loss は安定性を確認します。", "Score は総合評価、SNR はコントローラー連携が必要です。"], "metrics"],
    ["04", "AP や中継器の配置を試す", "Simulation では複数 AP を配置し、FSPL と壁損失でカバー範囲を推定します。", ["図面をタップして AP を追加し、ドラッグで移動します。", "初期値は 5 GHz で、壁損失の違いが分かりやすくなります。", "Clear APs で配置を消して試し直せます。"], "simulation"],
    ["05", "コントローラーで高精度測定", "Aruba Instant コントローラーがある場合、実際の SNR、接続 AP、周波数帯、チャンネルを読み取れます。", ["コントローラーのホスト、アカウント、パスワードを入力します。", "接続成功後は Advanced test バッジが表示されます。", "Controller タブで AP、client、RF、roaming 情報を確認できます。"], "controller"],
    ["06", "レポートとデータを書き出し", "測定後は顧客向けレポートや、分析用の図面・生データを書き出せます。", ["3 点以上でヒートマップ付きレポートを作成できます。", "PNG / SVG / DXF のフロアプランを書き出せます。", "レポート、CSV、画像はユーザーが選んだ時だけ共有されます。"], "report"]
  ]
};
guide.ko = {
  features: [["LiDAR 도면", "한 번 스캔하고 저장"], ["실측 히트맵", "속도와 지연 측정"], ["AP 시뮬레이션", "5 GHz / 2.4 GHz 계획"], ["보고서 내보내기", "PDF, CSV, PNG, SVG"]],
  noteTitle: "화면 안내",
  note: "아래 화면은 앱 구조를 바탕으로 생성한 설명용 mockup입니다. 실제 앱은 기기, 언어, 도면, 측정 데이터에 따라 다르게 표시됩니다.",
  steps: [
    ["01", "도면을 스캔하거나 불러오기", "먼저 방의 기준 도면을 만듭니다. RoomPlan 스캔, 샘플, 여러 도면, 정렬, 3D 미리보기, 2D 내보내기를 지원합니다.", ["Scan floor plan을 눌러 스캔을 시작합니다.", "스캔 후 도면이 저장되어 다음에는 다시 스캔할 필요가 없습니다.", "Align / Rotate 90°로 벽선을 보기 좋게 맞춥니다."], "plan"],
    ["02", "현장에서 위치를 탭하기", "실측 site survey는 실제 위치에 서서 도면의 같은 위치를 탭한 뒤 테스트하는 방식입니다.", ["각 지점은 다운로드, 지연 시간, 지터, 패킷 손실, 점수를 기록합니다.", "3개 이상의 지점으로 실측 히트맵을 만듭니다.", "측정 지점은 재측정, 삭제, CSV 내보내기가 가능합니다."], "survey"],
    ["03", "다시 측정하지 않고 지표 전환", "한 번의 측정에 여러 지표가 저장되므로 같은 데이터로 속도와 안정성을 확인할 수 있습니다.", ["Download는 실제 처리량을 보여줍니다.", "Latency / Jitter / Loss는 안정성을 확인합니다.", "Score는 종합 평가이며 SNR은 컨트롤러 데이터가 필요합니다."], "metrics"],
    ["04", "AP 또는 중계기 위치 시뮬레이션", "Simulation 탭에서 여러 AP를 배치하고 FSPL 및 벽 손실 모델로 커버리지를 예측합니다.", ["도면을 탭해 AP를 추가하고 드래그로 이동합니다.", "기본값은 5 GHz라 벽 손실 차이가 더 잘 보입니다.", "Clear APs로 배치를 지우고 다시 계획할 수 있습니다."], "simulation"],
    ["05", "컨트롤러로 고급 실제값 읽기", "Aruba Instant 컨트롤러가 있으면 실제 SNR, 연결 AP, 대역, 채널을 읽어 정확도를 높일 수 있습니다.", ["컨트롤러 주소, 계정, 비밀번호를 입력합니다.", "테스트 성공 후 고급 테스트 배지가 표시됩니다.", "Controller 탭에서 AP, client, RF, roaming 정보를 확인합니다."], "controller"],
    ["06", "보고서와 데이터 내보내기", "측정 후 고객용 보고서나 분석용 도면 및 원시 데이터를 내보낼 수 있습니다.", ["3개 이상의 지점으로 히트맵 보고서를 만들 수 있습니다.", "PNG / SVG / DXF 도면을 내보낼 수 있습니다.", "보고서, CSV, 이미지는 사용자가 선택할 때만 공유됩니다."], "report"]
  ]
};
guide["zh-Hans"] = {
  ...guide["zh-Hant"],
  features: [["LiDAR 图面", "扫描一次并保存"], ["实测热力图", "站点测速与延迟"], ["AP 模拟", "5 GHz / 2.4 GHz 规划"], ["报告导出", "PDF、CSV、PNG、SVG"]],
  noteTitle: "关于画面",
  note: "以下画面是依 App 程序结构生成的教学 mockup，用来说明操作流程；实际 App 会依设备、语言、图面与测点资料显示不同内容。",
  steps: [
    ["01", "扫描或载入平面图", "先在图面页建立房间基底。支持 RoomPlan 扫描、范例图面、多图面管理、旋转校正、3D 预览与 2D 导出。", ["按下 Scan floor plan 开始扫描。", "扫描完成后平面图会保存，下次不用重扫。", "可用 Align / Rotate 90° 把墙线转正，方便后续测量。"], "plan"],
    ["02", "站到定点，点选图面位置", "实测 site survey 的核心流程是：人站在房间实际位置，在图面点出同一个位置，再开始测试。", ["每个测点会记录下载速度、延迟、抖动、丢包与综合分数。", "累积至少 3 个测点后会内插成实测热力图。", "测点可重测、清除，也可导出 CSV。"], "survey"],
    ["03", "切换指标看不同问题", "同一次测量会保存多个指标，所以不需要为了看延迟或丢包再跑一次。", ["Download 看实际吞吐量。", "Latency / Jitter / Loss 看稳定度。", "Score 综合判断；SNR 则需要控制器进阶读值。"], "metrics"],
    ["04", "用模拟规划 AP 或中继器位置", "热力图演算页可以在平面图放置多台 AP，依 FSPL 与墙损模型预估覆盖，适合改善前先试摆。", ["点击图面新增 AP，拖曳调整位置。", "默认 5 GHz，能更明显看出墙损差异。", "可清除 AP 重新规划。"], "simulation"],
    ["05", "连接控制器取得进阶真值", "若有 Aruba Instant 控制器，可读取本机 client 的真实 SNR、关联 AP、频段与通道，提升判读精准度。", ["设置控制器地址、账号与密码。", "测试成功后，讯号侦测会显示进阶测试徽章。", "控制器页也能查看 AP、client、RF 与 roaming 信息。"], "controller"],
    ["06", "产生报告与导出资料", "完成测点后，可产出给客户或自己留存的验收报告，也能导出图面与测量资料做后续分析。", ["至少 3 个测点即可产生热力图报告。", "可导出 PNG / SVG / DXF 平面图。", "报告、CSV 与图档都由使用者主动分享。"], "report"]
  ]
};

const detailedSteps = {
  "zh-Hant": {
    controllerHub: ["06", "控制器打開後看到什麼", "控制器頁不是只顯示連線成功，而是把控制器能讀到的網路真值整理成入口。你會先看到本機 client 的連線狀態，再看到整個控制器角度的 AP、client 與 RF 功能。", ["本機連線：SNR、關聯 AP、頻段、通道、IP。", "總覽：AP 數、client 數、SSID 與通道概況。", "功能入口：Clients、Roaming、AP load balancing、Trend history、Controller Config、Application visibility、Channels & RF、Controller status、Discovered services。"], "controllerHub"],
    reportBuilder: ["08", "報告產生器長什麼樣", "報告產生器會先讓你選底圖、指標、圖例、判定方式與報告主題。它不是只把截圖丟進 PDF，而是依測點資料重新產生可交付的 A4 報告。", ["可選牆線底圖或含實景底圖。", "可勾選下載、延遲、抖動、丟包、綜合分數與 SNR。", "可加入比例尺、熱力圖、圖例、頁碼、合格判定與案場資訊。"], "reportBuilder"],
    photoReport: ["09", "測點照片如何進報告", "在訊號偵測頁開啟測點照片後，每個測點可以拍一張現場參考照片。產生報告時打開 Attach site photos，照片會依測試編號附在報告後段。", ["照片是選用功能，預設不佔儲存空間。", "PDF 後端會用 3 × 3 網格整理照片，每頁最多 9 張。", "照片標籤會對應測點編號，方便驗收時回看現場位置。"], "photoReport"]
  },
  en: {
    controllerHub: ["06", "What the Controller tab shows", "The Controller tab is more than a connection check. It turns controller-only network readings into a hub: local client details first, then AP, client, and RF tools from the controller's perspective.", ["Local connection: SNR, associated AP, band, channel, and IP.", "Overview: AP count, client count, SSIDs, and channel status.", "Feature entries: Clients, Roaming, AP load balancing, Trend history, Controller Config, Application visibility, Channels & RF, Controller status, and Discovered services."], "controllerHub"],
    reportBuilder: ["08", "What the report builder looks like", "The report builder lets you choose base map, metrics, legends, verdicts, and visual theme. It is not a screenshot dump; it rebuilds an A4 handoff report from survey data.", ["Choose walls-only or real backdrop base maps.", "Select download, latency, jitter, loss, score, and SNR when available.", "Add scale bar, heatmap, legend, page numbers, acceptance verdict, and site information."], "reportBuilder"],
    photoReport: ["09", "How site photos enter the report", "When point photos are enabled in Signal Survey, each survey point can carry a reference photo. Turn on Attach site photos in the report builder to append them to the PDF.", ["Photos are optional and disabled by default.", "The PDF appends a 3 × 3 photo grid, up to 9 photos per page.", "Photo labels match survey point numbers for acceptance review."], "photoReport"]
  },
  ja: {
    controllerHub: ["06", "Controller タブで見える内容", "Controller タブは接続確認だけではありません。まず本機 client の状態を表示し、その後にコントローラー視点の AP、client、RF 関連機能へ進めます。", ["本機接続：SNR、接続 AP、周波数帯、チャンネル、IP。", "全体概要：AP 数、client 数、SSID、チャンネル状況。", "機能入口：Clients、Roaming、AP load balancing、Trend history、Controller Config、Application visibility、Channels & RF、Controller status、Discovered services。"], "controllerHub"],
    reportBuilder: ["08", "レポート作成画面", "レポート作成画面では、ベースマップ、指標、凡例、判定、テーマを選べます。単なるスクリーンショットではなく、測定データから A4 レポートを再生成します。", ["壁線のみ、または実景底図付きのベースマップを選択。", "ダウンロード、遅延、ジッター、パケットロス、スコア、利用可能なら SNR を選択。", "スケールバー、ヒートマップ、凡例、ページ番号、合格判定、現場情報を追加できます。"], "reportBuilder"],
    photoReport: ["09", "現場写真をレポートに入れる方法", "Signal Survey で測点写真を有効にすると、各測定点に現場写真を添付できます。レポート作成時に Attach site photos をオンにすると PDF の後半に追加されます。", ["写真は任意機能で、初期設定ではオフです。", "PDF 末尾に 3 × 3 の写真グリッドを追加し、1 ページ最大 9 枚を配置します。", "写真ラベルは測定点番号に対応し、検収時に確認しやすくなります。"], "photoReport"]
  },
  ko: {
    controllerHub: ["06", "Controller 탭에서 보이는 내용", "Controller 탭은 단순 연결 확인이 아닙니다. 먼저 로컬 client 연결 상태를 보여주고, 컨트롤러 관점의 AP, client, RF 기능으로 들어갈 수 있습니다.", ["로컬 연결: SNR, 연결 AP, 대역, 채널, IP.", "전체 개요: AP 수, client 수, SSID, 채널 상태.", "기능 입구: Clients, Roaming, AP load balancing, Trend history, Controller Config, Application visibility, Channels & RF, Controller status, Discovered services."], "controllerHub"],
    reportBuilder: ["08", "보고서 생성 화면", "보고서 생성기에서 기본 지도, 지표, 범례, 판정 방식, 테마를 선택합니다. 단순 스크린샷이 아니라 측정 데이터로 A4 보고서를 다시 만듭니다.", ["벽선만 또는 실제 배경이 포함된 기본 지도를 선택합니다.", "다운로드, 지연 시간, 지터, 패킷 손실, 점수, 가능하면 SNR을 선택합니다.", "축척, 히트맵, 범례, 페이지 번호, 합격 판정, 현장 정보를 추가할 수 있습니다."], "reportBuilder"],
    photoReport: ["09", "현장 사진이 보고서에 들어가는 방식", "Signal Survey에서 지점 사진을 켜면 각 측정 지점에 참고 사진을 붙일 수 있습니다. 보고서 생성 시 Attach site photos를 켜면 PDF 뒤쪽에 추가됩니다.", ["사진은 선택 기능이며 기본값은 꺼짐입니다.", "PDF 뒤쪽에 3 × 3 사진 그리드를 추가하며 페이지당 최대 9장입니다.", "사진 라벨은 측정 지점 번호와 맞춰져 검수 때 확인하기 쉽습니다."], "photoReport"]
  },
  "zh-Hans": {
    controllerHub: ["06", "控制器打开后看到什么", "控制器页不是只显示连接成功，而是把控制器能读到的网络真值整理成入口。你会先看到本机 client 的连接状态，再看到整个控制器角度的 AP、client 与 RF 功能。", ["本机连接：SNR、关联 AP、频段、通道、IP。", "总览：AP 数、client 数、SSID 与通道概况。", "功能入口：Clients、Roaming、AP load balancing、Trend history、Controller Config、Application visibility、Channels & RF、Controller status、Discovered services。"], "controllerHub"],
    reportBuilder: ["08", "报告生成器长什么样", "报告生成器会先让你选底图、指标、图例、判定方式与报告主题。它不是只把截图丢进 PDF，而是依测点资料重新产生可交付的 A4 报告。", ["可选墙线底图或含实景底图。", "可勾选下载、延迟、抖动、丢包、综合分数与 SNR。", "可加入比例尺、热力图、图例、页码、合格判定与案场信息。"], "reportBuilder"],
    photoReport: ["09", "测点照片如何进报告", "在讯号侦测页开启测点照片后，每个测点可以拍一张现场参考照片。产生报告时打开 Attach site photos，照片会依测试编号附在报告后段。", ["照片是选用功能，默认不占储存空间。", "PDF 后端会用 3 × 3 网格整理照片，每页最多 9 张。", "照片标签会对应测点编号，方便验收时回看现场位置。"], "photoReport"]
  }
};

Object.entries(detailedSteps).forEach(([lang, details]) => {
  const steps = guide[lang].steps;
  steps.splice(5, 0, details.controllerHub);
  steps.push(details.reportBuilder, details.photoReport);
});

Object.entries(guide).forEach(([, data]) => {
  data.steps.forEach((step, index) => { step[0] = String(index + 1).padStart(2, "0"); });
});

const aliases = { zh: "zh-Hant", "zh-TW": "zh-Hant", "zh-HK": "zh-Hant", "zh-MO": "zh-Hant", "zh-CN": "zh-Hans", "zh-SG": "zh-Hans", "ja-JP": "ja", "ko-KR": "ko", "en-US": "en", "en-GB": "en" };
const select = document.getElementById("languageSelect");
const themeSelect = document.getElementById("themeSelect");

function preferredLanguage() {
  const stored = localStorage.getItem("siteLanguage");
  if (stored && common[stored]) return stored;
  const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
  for (const lang of languages) {
    if (common[lang]) return lang;
    if (aliases[lang]) return aliases[lang];
    const base = lang.split("-")[0];
    if (common[base]) return base;
    if (aliases[base]) return aliases[base];
  }
  return "en";
}

function preferredTheme() {
  const stored = localStorage.getItem("siteTheme");
  return ["auto", "light", "dark"].includes(stored) ? stored : "auto";
}

function applyTheme(theme) {
  if (theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = theme;
  themeSelect.value = theme;
  localStorage.setItem("siteTheme", theme);
}

function mock(type) {
  const walls = '<i class="mock-wall w1"></i><i class="mock-wall w2"></i><i class="mock-wall w3"></i><i class="mock-wall w4"></i><i class="mock-wall w5"></i><i class="mock-wall w6"></i>';
  if (type === "plan") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Floor Plan</span><span class="mock-chip">Plans</span></div><div class="mock-map">${walls}</div><div class="mock-card"><div class="mock-row"><strong>Living Room</strong><span>Saved</span></div><div class="mock-row"><span>Align</span><span>3D Model</span><span>Export</span></div></div><div class="mock-footer"><span class="mock-button">Scan floor plan</span></div></div></div>`;
  if (type === "survey") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Signal survey</span><span class="mock-chip">General</span></div><div class="mock-map"><span class="heat good"></span><span class="heat mid"></span><span class="heat bad"></span>${walls}<b class="survey-dot dot-a">92</b><b class="survey-dot dot-b">54</b><b class="survey-dot dot-c">21</b></div><div class="mock-tabs"><span class="mock-tab is-on">Download</span><span class="mock-tab">Latency</span><span class="mock-tab">Loss</span></div><div class="mock-footer"><span class="mock-button">Start test</span></div></div></div>`;
  if (type === "metrics") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Metrics</span><span class="mock-chip">1 test</span></div><div class="mock-tabs"><span class="mock-tab is-on">Download</span><span class="mock-tab">Latency</span><span class="mock-tab">Jitter</span><span class="mock-tab">Loss</span><span class="mock-tab">Score</span><span class="mock-tab">SNR</span></div><div class="mock-card"><div class="mock-row"><strong>Latest</strong><span>92 Mbps</span></div><div class="mock-row"><span>Latency</span><strong>12 ms</strong></div><div class="mock-row"><span>Jitter</span><strong>3 ms</strong></div><div class="mock-row"><span>Packet loss</span><strong>0%</strong></div></div><div class="mock-card"><div class="mock-gauge"></div></div></div></div>`;
  if (type === "simulation") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Simulation</span><span class="mock-chip">5 GHz</span></div><div class="mock-map"><span class="heat good"></span><span class="heat mid"></span><span class="heat bad"></span>${walls}<b class="ap-dot ap-a">AP</b><b class="ap-dot ap-b">AP</b></div><div class="mock-card"><div class="mock-row"><span>Heatmap detail</span><strong>16 cm</strong></div><div class="mock-row"><span>Band</span><strong>5 GHz</strong></div></div><div class="mock-footer"><span class="mock-button">Clear APs</span></div></div></div>`;
  if (type === "controller") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Controller</span><span class="mock-chip">Advanced</span></div><div class="mock-card"><div class="mock-row"><strong>Local client</strong><span>SNR 45 dB</span></div><div class="mock-row"><span>Associated AP</span><strong>2F</strong></div><div class="mock-row"><span>Band / Channel</span><strong>5 GHz · 36</strong></div></div><div class="mock-card"><div class="mock-row"><span>APs</span><strong>3 online</strong></div><div class="mock-row"><span>Clients</span><strong>28</strong></div><div class="mock-row"><span>Roaming</span><strong>Monitor</strong></div></div></div></div>`;
  if (type === "controllerHub") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Controller</span><span class="mock-chip">Online</span></div><div class="mock-card"><div class="mock-row"><strong>This device</strong><span>2F · 45 dB</span></div><div class="mock-row"><span>SSID</span><strong>Office-5G</strong></div></div><div class="mock-feature-row"><span>Clients</span><b>28</b></div><div class="mock-feature-row"><span>Roaming</span><b>Live</b></div><div class="mock-feature-row"><span>AP load balancing</span><b>3 AP</b></div><div class="mock-feature-row"><span>Application visibility</span><b>DPI</b></div><div class="mock-feature-row"><span>Channels & RF</span><b>DFS</b></div><div class="mock-feature-row"><span>Controller status</span><b>WAN</b></div></div></div>`;
  if (type === "reportBuilder") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Generate report</span><span class="mock-chip">A4 PDF</span></div><div class="mock-card"><div class="mock-row"><strong>Base map</strong><span>Walls only</span></div><div class="mock-row"><span>Theme</span><strong>Minimal</strong></div></div><div class="mock-card"><div class="mock-check on">Download heatmap</div><div class="mock-check on">Latency heatmap</div><div class="mock-check">SNR heatmap</div><div class="mock-check on">Show legend</div><div class="mock-check on">Attach site photos</div></div><div class="mock-card"><div class="mock-row"><span>Verdict</span><strong>Overall + per point</strong></div><div class="mock-row"><span>Estimated pages</span><strong>7</strong></div></div><div class="mock-footer"><span class="mock-button">Preview report</span></div></div></div>`;
  if (type === "photoReport") return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Photo appendix</span><span class="mock-chip">Page 7</span></div><div class="mock-report"><div class="mock-report-line"></div><div class="mock-report-line short"></div><div class="photo-grid">${Array.from({ length: 9 }, (_, i) => `<span class="photo-tile"><b>#${i + 1}</b></span>`).join("")}</div><div class="mock-row"><span>Point photos</span><strong>3 × 3 grid</strong></div></div></div></div>`;
  return `<div class="phone-mock"><div class="phone-screen"><div class="mock-header"><span class="mock-title">Report</span><span class="mock-chip">PDF</span></div><div class="mock-report"><div class="mock-report-line"></div><div class="mock-report-line short"></div><div class="mock-map"><span class="heat good"></span><span class="heat mid"></span><span class="heat bad"></span>${walls}<b class="survey-dot dot-a">92</b><b class="survey-dot dot-b">54</b><b class="survey-dot dot-c">21</b></div><div class="mock-report-line"></div><div class="mock-report-line short"></div></div><div class="mock-footer"><span class="mock-button">Generate report</span></div></div></div>`;
}

function render(lang) {
  const c = common[lang] || common["en"];
  const data = guide[lang] || guide.en;
  document.documentElement.lang = c.htmlLang;
  document.title = `LiDAR WiFi Planner - ${c.topline}`;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.innerHTML = c[key] || node.innerHTML;
  });
  document.querySelectorAll("[data-nav]").forEach((node) => {
    if (node.dataset.nav === "product") node.setAttribute("aria-current", "page");
    else node.removeAttribute("aria-current");
  });
  const features = data.features.map(([title, text]) => `<div class="feature-pill"><strong>${title}</strong><span>${text}</span></div>`).join("");
  const steps = data.steps.map(([kicker, title, text, bullets, type]) => `<article class="guide-step card"><div class="step-copy"><span class="step-kicker">${kicker}</span><h2>${title}</h2><p>${text}</p><ul class="step-list">${bullets.map((item) => `<li>${item}</li>`).join("")}</ul></div>${mock(type)}</article>`).join("");
  document.getElementById("content").innerHTML = `<div class="feature-strip">${features}</div><div class="product-flow">${steps}</div><div class="note-card"><strong>${data.noteTitle}</strong><p>${data.note}</p></div>`;
  select.value = lang;
  themeSelect.value = preferredTheme();
  localStorage.setItem("siteLanguage", lang);
}

select.addEventListener("change", (event) => render(event.target.value));
themeSelect.addEventListener("change", (event) => applyTheme(event.target.value));
applyTheme(preferredTheme());
render(preferredLanguage());
