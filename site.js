const shared = {
  contactEmail: "app-dev@almx.cc",
  eulaUrl: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
};

const translations = {
  "zh-Hant": {
    htmlLang: "zh-Hant",
    languageLabel: "語言",
    themeLabel: "外觀:",
    themeAuto: "自動",
    themeLight: "白天",
    themeDark: "夜晚",
    navHome: "首頁",
    navProduct: "使用教學",
    navSupport: "支援",
    navPrivacy: "隱私權政策",
    navTerms: "使用條款",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: {
      topline: "支援與法務資訊",
      eyebrow: "Privacy first site survey",
      title: "LiDAR WiFi Planner",
      summary: "LiDAR WiFi Planner 的支援資訊、隱私權政策與使用條款。網站會依瀏覽器語言自動切換，也可手動選擇語言。",
      cards: [
        ["使用教學", "用生成的操作畫面快速了解掃描圖面、實測熱力圖、模擬規劃與匯出報告。", "product.html", "Open Product Guide"],
        ["支援", "使用說明、問題回報與聯絡開發者。", "support.html", "Open Support"],
        ["隱私權政策", "了解 App 如何處理 RoomPlan、LiDAR、測速、控制器與本機資料。", "privacy.html", "Open Privacy Policy"],
        ["使用條款", "查看使用本 App、訂閱與 Apple 標準 EULA 的相關條款。", "terms.html", "Open Terms"]
      ]
    },
    support: {
      topline: "支援",
      eyebrow: "Support",
      title: "支援與聯絡",
      summary: "如果你在掃描平面圖、進行 Wi-Fi site survey、訂閱圖面數量或匯出檔案時遇到問題，可以透過以下方式聯絡我們。",
      meta: [["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "LiDAR WiFi Planner"], ["支援語言", "繁體中文、English、日本語、한국어、简体中文"]],
      sections: [
        ["常見支援範圍", ["LiDAR / RoomPlan 掃描、平面圖保存與重新載入。", "Wi-Fi 量測點、下載速度、延遲、抖動、丟包與熱力圖結果。", "控制器進階檢測設定，例如 Aruba Instant 控制器連線。", "PNG / SVG 匯出、3D 預覽與圖面管理。", "訂閱、購買狀態恢復與圖面數量限制。"]],
        ["回報問題時建議提供", ["iPhone 或 iPad 型號、iOS / iPadOS 版本與 App 版本。", "發生問題的頁面與操作步驟。", "是否使用控制器進階檢測，以及控制器品牌與版本。", "可公開分享的截圖或錯誤訊息。請不要寄送控制器密碼或其他敏感資訊。"]],
        ["重要限制", ["iOS 不開放一般 App 直接讀取 Wi-Fi RSSI。本 App 的一般檢測使用下載速度、延遲、抖動與丟包等實際傳輸表現作為品質指標；進階檢測則需要使用者自行設定並授權連線到支援的 Wi-Fi 控制器。"]]
      ]
    },
    privacy: {
      topline: "隱私權政策",
      eyebrow: "Privacy first site survey",
      title: "隱私權政策",
      summary: "LiDAR WiFi Planner 以本機處理為主，不建立開發者雲端帳號，也不販售個人資料。",
      meta: [["生效日期", "2026 年 6 月 19 日"], ["App", "LiDAR WiFi Planner"], ["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["我們收集哪些資料", ["App 主要在你的裝置上處理資料。你掃描的房間平面圖、圖面、量測點、測速結果、控制器設定與匯出檔案，預設保存在你的裝置本機。", "我們不要求建立開發者帳號，不使用第三方廣告追蹤，不會將你的平面圖或 Wi-Fi 量測資料上傳到我們的伺服器。"]],
        ["RoomPlan、LiDAR 與圖面資料", ["App 會使用 Apple RoomPlan、相機與 LiDAR 功能來建立房間結構資料。這些資料用於產生 2D 平面圖、3D 預覽、PNG / SVG 匯出與 Wi-Fi 熱力圖分析。", "除非你主動透過系統分享功能、Email 或其他 App 匯出，圖面資料會留在你的裝置上。"]],
        ["網路測試與控制器連線", ["App 可能會執行 ping、下載測速或連線到你自行設定的測速端點，以估算 Wi-Fi 品質。這些網路服務可能會看見你的 IP 位址與連線時間，這是網路連線本身會產生的資訊。", "如果你選擇設定 Wi-Fi 控制器，控制器位址、帳號與密碼會保存在裝置的 Keychain 中，用於你要求的連線測試與讀取控制器資訊。請只連線到你擁有或被授權管理的設備。"]],
        ["App 內購買與訂閱", ["訂閱與付款由 Apple App Store 處理。我們不會取得你的完整付款卡號或銀行資訊。App 只會讀取 Apple 提供的購買狀態，以啟用對應的圖面數量限制。"]],
        ["資料分享與第三方", ["我們不販售個人資料。當你使用分享、備份、Email、匯出圖檔或傳到其他 App 時，資料會依照你選擇的目的地與對方服務的隱私權政策處理。", "如果你使用 Cloudflare、LibreSpeed、自訂測速伺服器或 Wi-Fi 控制器，相關服務或設備可能會記錄連線資訊。"]],
        ["資料保留與刪除", ["本機資料會保留在你的裝置上，直到你在 App 中刪除圖面、刪除設定、移除 App，或使用 iOS 系統功能清除資料。", "若你需要協助了解或刪除與本 App 相關的資料，可以透過本頁聯絡信箱與我們聯繫。"]],
        ["兒童隱私", ["本 App 不以兒童為主要對象，也不刻意收集兒童的個人資料。"]],
        ["政策更新", ["我們可能會因功能、法規或 App Store 要求更新本政策。更新後會在此頁面公布新的生效日期。"]]
      ]
    },
    terms: {
      topline: "使用條款",
      eyebrow: "Terms of Use",
      title: "使用條款",
      summary: "使用 LiDAR WiFi Planner 代表你同意以下條款，以及 Apple App Store 適用的標準 EULA 與購買規則。",
      meta: [["生效日期", "2026 年 6 月 19 日"], ["App", "LiDAR WiFi Planner"], ["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Apple 標準 EULA", [`LiDAR WiFi Planner 採用 Apple 標準終端使用者授權合約。若本頁內容與 Apple 標準 EULA 或 App Store 規則有衝突，依 Apple 適用條款為準。`, `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]],
        ["App 用途", ["本 App 是 Wi-Fi / LAN 規劃與診斷工具，提供 LiDAR 平面圖、site survey 量測、熱力圖、模擬規劃、控制器輔助讀值與匯出功能。量測結果會受設備、環境、測速端點、ISP、區域網路負載與使用方式影響，僅供網路規劃與故障排查參考。"]],
        ["使用者責任", ["請只在你擁有、管理或被授權測試的網路環境中使用本 App。", "若使用控制器進階檢測，請確認你有權連線並讀取該設備資訊。", "請自行確認匯出的平面圖、截圖或測試資料是否包含敏感資訊，再分享給第三方。"]],
        ["訂閱與購買", ["App 內購買與訂閱由 Apple App Store 處理。價格、試用、續訂、退款與取消訂閱依 Apple 顯示與 Apple 帳號設定為準。App 會根據 Apple 提供的購買狀態啟用對應功能或圖面數量。"]],
        ["服務限制與免責", ["本 App 會盡力提供有用的量測與規劃資訊，但不保證任何特定網路效能、覆蓋結果、控制器相容性或測速準確度。你應依實際網路環境、設備規格與專業判斷進行部署或調整。"]],
        ["條款更新", ["我們可能會因功能、法規或 App Store 要求更新本條款。更新後會在此頁面公布新的生效日期。"]]
      ]
    }
  },
  en: {
    htmlLang: "en",
    languageLabel: "Language",
    themeLabel: "Theme:",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",
    navHome: "Home",
    navProduct: "Product Guide",
    navSupport: "Support",
    navPrivacy: "Privacy Policy",
    navTerms: "Terms of Use",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: {
      topline: "Support and legal information",
      eyebrow: "Privacy first site survey",
      title: "LiDAR WiFi Planner",
      summary: "Support, privacy policy, and terms of use for LiDAR WiFi Planner. This site automatically follows your browser language and also lets you choose manually.",
      cards: [["Product Guide", "Learn the app flow with generated interface mockups for scanning, surveys, simulation, and reports.", "product.html", "Open Product Guide"], ["Support", "Help, issue reports, and developer contact information.", "support.html", "Open Support"], ["Privacy Policy", "How the app handles RoomPlan, LiDAR, speed tests, controllers, and local data.", "privacy.html", "Open Privacy Policy"], ["Terms of Use", "Terms for using the app, subscriptions, and Apple's standard EULA.", "terms.html", "Open Terms"]]
    },
    support: {
      topline: "Support",
      eyebrow: "Support",
      title: "Support and Contact",
      summary: "If you have trouble scanning floor plans, running a Wi-Fi site survey, using subscriptions, or exporting files, contact us here.",
      meta: [["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "LiDAR WiFi Planner"], ["Languages", "Traditional Chinese, English, Japanese, Korean, Simplified Chinese"]],
      sections: [["Common Support Topics", ["LiDAR / RoomPlan scanning, saved floor plans, and reloading plans.", "Wi-Fi survey points, download speed, latency, jitter, packet loss, and heatmap results.", "Advanced controller setup, including Aruba Instant controller connection.", "PNG / SVG export, 3D preview, and floor plan management.", "Subscriptions, purchase restoration, and floor plan limits."]], ["When Reporting an Issue", ["Please include your iPhone or iPad model, iOS / iPadOS version, and app version.", "Describe the screen and steps that led to the issue.", "Tell us whether advanced controller testing was enabled, plus the controller brand and version.", "Attach screenshots or error messages only if they are safe to share. Do not send controller passwords or sensitive credentials."]], ["Important Limitation", ["iOS does not allow general apps to read Wi-Fi RSSI directly. Standard tests use real transport indicators such as download speed, latency, jitter, and packet loss. Advanced tests require a supported Wi-Fi controller configured and authorized by the user."]]]
    },
    privacy: {
      topline: "Privacy Policy",
      eyebrow: "Privacy first site survey",
      title: "Privacy Policy",
      summary: "LiDAR WiFi Planner is designed around on-device processing. We do not provide developer cloud accounts and we do not sell personal data.",
      meta: [["Effective date", "June 19, 2026"], ["App", "LiDAR WiFi Planner"], ["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [["Information We Collect", ["The app primarily processes information on your device. Scanned rooms, floor plans, measurement points, speed test results, controller settings, and exported files are stored locally on your device by default.", "We do not require a developer account, do not use third-party advertising tracking, and do not upload your floor plans or Wi-Fi measurement data to our servers."]], ["RoomPlan, LiDAR, and Floor Plan Data", ["The app uses Apple RoomPlan, camera, and LiDAR features to create room structure data. This data is used for 2D floor plans, 3D previews, PNG / SVG export, and Wi-Fi heatmap analysis.", "Unless you choose to export through system sharing, email, or another app, floor plan data remains on your device."]], ["Network Tests and Controller Connections", ["The app may run ping tests, download speed tests, or connect to test endpoints you configure to estimate Wi-Fi quality. Those network services may see your IP address and connection time, which are inherent to network communication.", "If you configure a Wi-Fi controller, the controller address, username, and password are stored in the device Keychain and used only for connection tests and reading controller information you request. Connect only to equipment you own or are authorized to manage."]], ["In-App Purchases and Subscriptions", ["Subscriptions and payments are handled by Apple App Store. We do not receive your full payment card or banking information. The app only reads purchase status provided by Apple to unlock the applicable floor plan limit."]], ["Sharing and Third Parties", ["We do not sell personal data. When you use sharing, backup, email, image export, or send files to another app, the data is handled according to the destination and that service's privacy policy.", "If you use Cloudflare, LibreSpeed, custom speed test servers, or Wi-Fi controllers, those services or devices may log connection information."]], ["Data Retention and Deletion", ["Local data remains on your device until you delete floor plans, delete settings in the app, remove the app, or clear data through iOS system features.", "If you need help understanding or deleting data related to this app, contact us at the email address on this page."]], ["Children's Privacy", ["This app is not directed primarily to children and we do not knowingly collect children's personal data."]], ["Policy Updates", ["We may update this policy because of product changes, legal requirements, or App Store requirements. Updated versions will be posted on this page with a new effective date."]]]
    },
    terms: {
      topline: "Terms of Use",
      eyebrow: "Terms of Use",
      title: "Terms of Use",
      summary: "By using LiDAR WiFi Planner, you agree to these terms and the applicable Apple App Store standard EULA and purchase rules.",
      meta: [["Effective date", "June 19, 2026"], ["App", "LiDAR WiFi Planner"], ["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [["Apple Standard EULA", [`LiDAR WiFi Planner uses Apple's standard end user license agreement. If this page conflicts with Apple's standard EULA or App Store rules, Apple's applicable terms control.`, `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]], ["App Purpose", ["This app is a Wi-Fi / LAN planning and diagnostic tool that provides LiDAR floor plans, site survey measurements, heatmaps, simulation planning, controller-assisted readings, and export tools. Results may vary depending on devices, environment, test endpoints, ISP, local network load, and usage, and are for planning and troubleshooting reference."]], ["User Responsibilities", ["Use the app only in networks you own, manage, or are authorized to test.", "If you use advanced controller testing, make sure you are authorized to connect to and read that equipment.", "Review exported floor plans, screenshots, or test data for sensitive information before sharing them with third parties."]], ["Subscriptions and Purchases", ["In-app purchases and subscriptions are handled by Apple App Store. Pricing, trials, renewals, refunds, and cancellation are governed by Apple displays and Apple account settings. The app unlocks features or floor plan limits based on purchase status provided by Apple."]], ["Limitations and Disclaimer", ["The app aims to provide useful measurement and planning information, but it does not guarantee any specific network performance, coverage result, controller compatibility, or speed-test accuracy. Use actual site conditions, equipment specifications, and professional judgment before deployment or changes."]], ["Updates", ["We may update these terms because of product changes, legal requirements, or App Store requirements. Updated versions will be posted on this page with a new effective date."]]]
    }
  },
  ja: {
    htmlLang: "ja",
    languageLabel: "言語",
    themeLabel: "外観:",
    themeAuto: "自動",
    themeLight: "ライト",
    themeDark: "ダーク",
    navHome: "ホーム",
    navProduct: "使い方",
    navSupport: "サポート",
    navPrivacy: "プライバシーポリシー",
    navTerms: "利用規約",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: { topline: "サポートと法的情報", eyebrow: "Privacy first site survey", title: "LiDAR WiFi Planner", summary: "LiDAR WiFi Planner のサポート、プライバシーポリシー、利用規約です。ブラウザの言語に合わせて自動表示され、手動で切り替えることもできます。", cards: [["使い方", "生成した操作画面でスキャン、測定、シミュレーション、レポートの流れを確認できます。", "product.html", "使い方を開く"], ["サポート", "ヘルプ、不具合報告、開発者への連絡先。", "support.html", "サポートを開く"], ["プライバシーポリシー", "RoomPlan、LiDAR、速度測定、コントローラー、ローカルデータの扱い。", "privacy.html", "ポリシーを開く"], ["利用規約", "App、サブスクリプション、Apple 標準 EULA に関する規約。", "terms.html", "規約を開く"]] },
    support: { topline: "サポート", eyebrow: "Support", title: "サポートとお問い合わせ", summary: "フロアプランのスキャン、Wi-Fi site survey、サブスクリプション、書き出しで問題がある場合は、こちらからお問い合わせください。", meta: [["連絡先", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "LiDAR WiFi Planner"], ["対応言語", "繁體中文、English、日本語、한국어、简体中文"]], sections: [["主なサポート内容", ["LiDAR / RoomPlan スキャン、保存済みフロアプラン、再読み込み。", "Wi-Fi 測定ポイント、ダウンロード速度、遅延、ジッター、パケットロス、ヒートマップ結果。", "Aruba Instant コントローラー接続などの高度なコントローラー設定。", "PNG / SVG 書き出し、3D プレビュー、フロアプラン管理。", "サブスクリプション、購入の復元、フロアプラン数の制限。"]], ["問題報告時に含めてほしい情報", ["iPhone または iPad の機種、iOS / iPadOS バージョン、App バージョン。", "問題が起きた画面と操作手順。", "高度なコントローラーテストを使用しているか、コントローラーのブランドとバージョン。", "共有してもよいスクリーンショットやエラーメッセージ。コントローラーのパスワードなど機密情報は送らないでください。"]], ["重要な制限", ["iOS は一般 App に Wi-Fi RSSI の直接読み取りを許可していません。通常測定はダウンロード速度、遅延、ジッター、パケットロスなど実際の通信指標を使用します。高度な測定には、ユーザーが設定し権限を持つ対応 Wi-Fi コントローラーが必要です。"]]] },
    privacy: { topline: "プライバシーポリシー", eyebrow: "Privacy first site survey", title: "プライバシーポリシー", summary: "LiDAR WiFi Planner は端末上での処理を中心に設計されています。開発者クラウドアカウントは提供せず、個人データを販売しません。", meta: [["発効日", "2026年6月19日"], ["App", "LiDAR WiFi Planner"], ["連絡先", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]], sections: [["収集する情報", ["本 App は主に端末上で情報を処理します。スキャンした部屋、フロアプラン、測定ポイント、速度測定結果、コントローラー設定、書き出しファイルは、初期設定では端末内に保存されます。", "開発者アカウントの作成は不要です。第三者広告トラッキングは使用せず、フロアプランや Wi-Fi 測定データを当社サーバーへアップロードしません。"]], ["RoomPlan、LiDAR、フロアプランデータ", ["本 App は Apple RoomPlan、カメラ、LiDAR 機能を使用して部屋の構造データを作成します。このデータは 2D フロアプラン、3D プレビュー、PNG / SVG 書き出し、Wi-Fi ヒートマップ分析に使用されます。", "システム共有、メール、他の App への書き出しを自分で選択しない限り、フロアプランデータは端末上に残ります。"]], ["ネットワークテストとコントローラー接続", ["本 App は Wi-Fi 品質を推定するために、ping、ダウンロード速度測定、またはユーザーが設定したテストエンドポイントへの接続を行う場合があります。これらのサービスは、通信上必要な IP アドレスや接続時刻を確認できる場合があります。", "Wi-Fi コントローラーを設定した場合、アドレス、ユーザー名、パスワードは端末の Keychain に保存され、要求された接続テストとコントローラー情報の取得にのみ使用されます。所有または管理権限のある機器にのみ接続してください。"]], ["App 内課金とサブスクリプション", ["サブスクリプションと支払いは Apple App Store によって処理されます。当社は完全なカード番号や銀行情報を受け取りません。本 App は Apple から提供される購入状態を読み取り、対応するフロアプラン数の上限を有効化します。"]], ["共有と第三者", ["当社は個人データを販売しません。共有、バックアップ、メール、画像書き出し、他の App への送信を使用した場合、データは選択した送信先およびそのサービスのプライバシーポリシーに従って処理されます。", "Cloudflare、LibreSpeed、カスタム速度測定サーバー、Wi-Fi コントローラーを使用する場合、それらのサービスまたは機器が接続情報を記録することがあります。"]], ["データの保存と削除", ["ローカルデータは、App 内でフロアプランや設定を削除する、App を削除する、または iOS のシステム機能でデータを消去するまで端末上に残ります。", "本 App に関連するデータの確認または削除について支援が必要な場合は、このページのメールアドレスまでご連絡ください。"]], ["児童のプライバシー", ["本 App は児童を主な対象としておらず、児童の個人データを意図的に収集しません。"]], ["ポリシーの更新", ["機能変更、法的要件、App Store 要件により本ポリシーを更新する場合があります。更新版は新しい発効日とともにこのページに掲載します。"]]] },
    terms: { topline: "利用規約", eyebrow: "Terms of Use", title: "利用規約", summary: "LiDAR WiFi Planner を使用することで、本規約および Apple App Store の標準 EULA と購入規則に同意したものとみなされます。", meta: [["発効日", "2026年6月19日"], ["App", "LiDAR WiFi Planner"], ["連絡先", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]], sections: [["Apple 標準 EULA", [`LiDAR WiFi Planner は Apple 標準エンドユーザー使用許諾契約を採用しています。本ページと Apple 標準 EULA または App Store 規則が矛盾する場合は、Apple の適用条項が優先されます。`, `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]], ["App の用途", ["本 App は Wi-Fi / LAN の計画と診断ツールであり、LiDAR フロアプラン、site survey 測定、ヒートマップ、シミュレーション、コントローラー補助読み取り、書き出し機能を提供します。結果は機器、環境、測定先、ISP、ローカルネットワーク負荷、使用方法により変動し、計画とトラブルシューティングの参考情報です。"]], ["ユーザーの責任", ["所有、管理、またはテスト権限のあるネットワークでのみ使用してください。", "高度なコントローラーテストを使用する場合は、その機器へ接続し情報を読み取る権限があることを確認してください。", "フロアプラン、スクリーンショット、測定データを第三者へ共有する前に、機密情報が含まれていないか確認してください。"]], ["サブスクリプションと購入", ["App 内課金とサブスクリプションは Apple App Store によって処理されます。価格、試用、更新、返金、解約は Apple の表示と Apple アカウント設定に従います。本 App は Apple から提供される購入状態に基づき、機能またはフロアプラン数の上限を有効化します。"]], ["制限と免責", ["本 App は有用な測定と計画情報の提供を目指しますが、特定のネットワーク性能、カバレッジ結果、コントローラー互換性、速度測定精度を保証しません。導入や変更の前に、実際の現場条件、機器仕様、専門的判断を使用してください。"]], ["更新", ["機能変更、法的要件、App Store 要件により本規約を更新する場合があります。更新版は新しい発効日とともにこのページに掲載します。"]]] }
  },
  ko: {
    htmlLang: "ko",
    languageLabel: "언어",
    themeLabel: "테마:",
    themeAuto: "자동",
    themeLight: "라이트",
    themeDark: "다크",
    navHome: "홈",
    navProduct: "사용 가이드",
    navSupport: "지원",
    navPrivacy: "개인정보 처리방침",
    navTerms: "이용 약관",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: { topline: "지원 및 법적 정보", eyebrow: "Privacy first site survey", title: "LiDAR WiFi Planner", summary: "LiDAR WiFi Planner의 지원, 개인정보 처리방침, 이용 약관입니다. 브라우저 언어에 따라 자동으로 표시되며 직접 변경할 수도 있습니다.", cards: [["사용 가이드", "생성된 조작 화면으로 스캔, 측정, 시뮬레이션, 보고서 흐름을 확인합니다.", "product.html", "가이드 열기"], ["지원", "도움말, 문제 보고, 개발자 연락처.", "support.html", "지원 열기"], ["개인정보 처리방침", "RoomPlan, LiDAR, 속도 테스트, 컨트롤러, 로컬 데이터 처리 방식.", "privacy.html", "개인정보 처리방침 열기"], ["이용 약관", "앱, 구독, Apple 표준 EULA 관련 약관.", "terms.html", "약관 열기"]] },
    support: { topline: "지원", eyebrow: "Support", title: "지원 및 연락처", summary: "도면 스캔, Wi-Fi site survey, 구독, 파일 내보내기에 문제가 있으면 아래로 문의해 주세요.", meta: [["연락처", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "LiDAR WiFi Planner"], ["지원 언어", "繁體中文, English, 日本語, 한국어, 简体中文"]], sections: [["주요 지원 범위", ["LiDAR / RoomPlan 스캔, 저장된 도면, 다시 불러오기.", "Wi-Fi 측정 지점, 다운로드 속도, 지연 시간, 지터, 패킷 손실, 히트맵 결과.", "Aruba Instant 컨트롤러 연결 등 고급 컨트롤러 설정.", "PNG / SVG 내보내기, 3D 미리보기, 도면 관리.", "구독, 구입 복원, 도면 수 제한."]], ["문제 보고 시 포함할 정보", ["iPhone 또는 iPad 모델, iOS / iPadOS 버전, 앱 버전.", "문제가 발생한 화면과 작업 순서.", "고급 컨트롤러 테스트 사용 여부, 컨트롤러 브랜드와 버전.", "공유해도 되는 스크린샷이나 오류 메시지. 컨트롤러 비밀번호 등 민감한 정보는 보내지 마세요."]], ["중요 제한 사항", ["iOS는 일반 앱이 Wi-Fi RSSI를 직접 읽는 것을 허용하지 않습니다. 일반 테스트는 다운로드 속도, 지연 시간, 지터, 패킷 손실 등 실제 전송 지표를 사용합니다. 고급 테스트에는 사용자가 설정하고 권한을 가진 지원 Wi-Fi 컨트롤러가 필요합니다."]]] },
    privacy: { topline: "개인정보 처리방침", eyebrow: "Privacy first site survey", title: "개인정보 처리방침", summary: "LiDAR WiFi Planner는 기기 내 처리를 중심으로 설계되었습니다. 개발자 클라우드 계정을 제공하지 않으며 개인정보를 판매하지 않습니다.", meta: [["시행일", "2026년 6월 19일"], ["App", "LiDAR WiFi Planner"], ["연락처", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]], sections: [["수집하는 정보", ["앱은 주로 사용자의 기기에서 정보를 처리합니다. 스캔한 방, 도면, 측정 지점, 속도 테스트 결과, 컨트롤러 설정, 내보낸 파일은 기본적으로 사용자의 기기에 저장됩니다.", "개발자 계정 생성을 요구하지 않으며, 제3자 광고 추적을 사용하지 않고, 도면 또는 Wi-Fi 측정 데이터를 당사 서버로 업로드하지 않습니다."]], ["RoomPlan, LiDAR 및 도면 데이터", ["앱은 Apple RoomPlan, 카메라 및 LiDAR 기능을 사용하여 방 구조 데이터를 생성합니다. 이 데이터는 2D 도면, 3D 미리보기, PNG / SVG 내보내기 및 Wi-Fi 히트맵 분석에 사용됩니다.", "시스템 공유, 이메일 또는 다른 앱으로 직접 내보내기를 선택하지 않는 한 도면 데이터는 사용자의 기기에 남아 있습니다."]], ["네트워크 테스트 및 컨트롤러 연결", ["앱은 Wi-Fi 품질을 추정하기 위해 ping, 다운로드 속도 테스트 또는 사용자가 설정한 테스트 엔드포인트 연결을 실행할 수 있습니다. 이러한 서비스는 네트워크 통신의 특성상 사용자의 IP 주소와 연결 시간을 볼 수 있습니다.", "Wi-Fi 컨트롤러를 설정하면 컨트롤러 주소, 사용자 이름 및 비밀번호가 기기의 Keychain에 저장되며, 사용자가 요청한 연결 테스트와 컨트롤러 정보 읽기에만 사용됩니다. 본인이 소유하거나 관리 권한이 있는 장비에만 연결하십시오."]], ["앱 내 구입 및 구독", ["구독과 결제는 Apple App Store에서 처리됩니다. 당사는 사용자의 전체 카드 번호나 은행 정보를 받지 않습니다. 앱은 Apple이 제공하는 구입 상태만 읽어 해당 도면 수 제한을 활성화합니다."]], ["공유 및 제3자", ["당사는 개인정보를 판매하지 않습니다. 공유, 백업, 이메일, 이미지 내보내기 또는 다른 앱으로 보내기를 사용할 경우 데이터는 사용자가 선택한 대상 및 해당 서비스의 개인정보 처리방침에 따라 처리됩니다.", "Cloudflare, LibreSpeed, 사용자 지정 속도 테스트 서버 또는 Wi-Fi 컨트롤러를 사용하는 경우 해당 서비스나 장비가 연결 정보를 기록할 수 있습니다."]], ["데이터 보관 및 삭제", ["로컬 데이터는 앱에서 도면 또는 설정을 삭제하거나, 앱을 제거하거나, iOS 시스템 기능으로 데이터를 지울 때까지 기기에 남아 있습니다.", "이 앱과 관련된 데이터를 이해하거나 삭제하는 데 도움이 필요한 경우 이 페이지의 이메일 주소로 문의해 주십시오."]], ["아동의 개인정보", ["이 앱은 아동을 주된 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다."]], ["정책 업데이트", ["기능 변경, 법적 요구사항 또는 App Store 요구사항에 따라 본 정책을 업데이트할 수 있습니다. 업데이트된 버전은 새 시행일과 함께 이 페이지에 게시됩니다."]]] },
    terms: { topline: "이용 약관", eyebrow: "Terms of Use", title: "이용 약관", summary: "LiDAR WiFi Planner를 사용하면 본 약관과 Apple App Store의 표준 EULA 및 구입 규칙에 동의하는 것입니다.", meta: [["시행일", "2026년 6월 19일"], ["App", "LiDAR WiFi Planner"], ["연락처", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]], sections: [["Apple 표준 EULA", [`LiDAR WiFi Planner는 Apple 표준 최종 사용자 사용권 계약을 사용합니다. 이 페이지의 내용이 Apple 표준 EULA 또는 App Store 규칙과 충돌하는 경우 Apple의 해당 약관이 우선합니다.`, `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]], ["앱 목적", ["이 앱은 Wi-Fi / LAN 계획 및 진단 도구로, LiDAR 도면, site survey 측정, 히트맵, 시뮬레이션 계획, 컨트롤러 보조 측정값, 내보내기 기능을 제공합니다. 결과는 장비, 환경, 테스트 엔드포인트, ISP, 로컬 네트워크 부하 및 사용 방식에 따라 달라질 수 있으며 계획과 문제 해결 참고용입니다."]], ["사용자 책임", ["본인이 소유, 관리하거나 테스트 권한이 있는 네트워크에서만 앱을 사용하십시오.", "고급 컨트롤러 테스트를 사용하는 경우 해당 장비에 연결하고 정보를 읽을 권한이 있는지 확인하십시오.", "도면, 스크린샷 또는 테스트 데이터를 제3자에게 공유하기 전에 민감한 정보가 포함되어 있는지 확인하십시오."]], ["구독 및 구입", ["앱 내 구입과 구독은 Apple App Store에서 처리됩니다. 가격, 체험, 갱신, 환불, 구독 취소는 Apple 표시와 Apple 계정 설정을 따릅니다. 앱은 Apple이 제공하는 구입 상태에 따라 기능 또는 도면 수 제한을 활성화합니다."]], ["제한 및 면책", ["앱은 유용한 측정 및 계획 정보를 제공하기 위해 노력하지만 특정 네트워크 성능, 커버리지 결과, 컨트롤러 호환성 또는 속도 테스트 정확도를 보장하지 않습니다. 배포나 변경 전 실제 현장 조건, 장비 사양 및 전문적 판단을 사용하십시오."]], ["약관 업데이트", ["기능 변경, 법적 요구사항 또는 App Store 요구사항에 따라 본 약관을 업데이트할 수 있습니다. 업데이트된 버전은 새 시행일과 함께 이 페이지에 게시됩니다."]]] }
  },
  "zh-Hans": {
    htmlLang: "zh-Hans",
    languageLabel: "语言",
    themeLabel: "外观:",
    themeAuto: "自动",
    themeLight: "白天",
    themeDark: "夜晚",
    navHome: "首页",
    navProduct: "使用指南",
    navSupport: "支持",
    navPrivacy: "隐私政策",
    navTerms: "使用条款",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: { topline: "支持与法律信息", eyebrow: "Privacy first site survey", title: "LiDAR WiFi Planner", summary: "LiDAR WiFi Planner 的支持信息、隐私政策与使用条款。网站会根据浏览器语言自动切换，也可以手动选择语言。", cards: [["使用指南", "用生成的操作画面快速了解扫描图面、实测热力图、模拟规划与导出报告。", "product.html", "打开指南"], ["支持", "使用说明、问题反馈与联系开发者。", "support.html", "打开支持"], ["隐私政策", "了解 App 如何处理 RoomPlan、LiDAR、测速、控制器与本机数据。", "privacy.html", "打开隐私政策"], ["使用条款", "查看使用本 App、订阅与 Apple 标准 EULA 的相关条款。", "terms.html", "打开条款"]] },
    support: { topline: "支持", eyebrow: "Support", title: "支持与联系", summary: "如果你在扫描平面图、进行 Wi-Fi site survey、订阅图面数量或导出文件时遇到问题，可以通过以下方式联系我们。", meta: [["联系邮箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "LiDAR WiFi Planner"], ["支持语言", "繁體中文、English、日本語、한국어、简体中文"]], sections: [["常见支持范围", ["LiDAR / RoomPlan 扫描、平面图保存与重新加载。", "Wi-Fi 测量点、下载速度、延迟、抖动、丢包与热力图结果。", "控制器进阶检测设置，例如 Aruba Instant 控制器连接。", "PNG / SVG 导出、3D 预览与图面管理。", "订阅、购买状态恢复与图面数量限制。"]], ["反馈问题时建议提供", ["iPhone 或 iPad 型号、iOS / iPadOS 版本与 App 版本。", "发生问题的页面与操作步骤。", "是否使用控制器进阶检测，以及控制器品牌与版本。", "可公开分享的截图或错误信息。请不要寄送控制器密码或其他敏感信息。"]], ["重要限制", ["iOS 不开放一般 App 直接读取 Wi-Fi RSSI。本 App 的一般检测使用下载速度、延迟、抖动与丢包等实际传输表现作为质量指标；进阶检测则需要用户自行设置并授权连接到支持的 Wi-Fi 控制器。"]]] },
    privacy: { topline: "隐私政策", eyebrow: "Privacy first site survey", title: "隐私政策", summary: "LiDAR WiFi Planner 以本机处理为主，不建立开发者云端账号，也不出售个人资料。", meta: [["生效日期", "2026 年 6 月 19 日"], ["App", "LiDAR WiFi Planner"], ["联系邮箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]], sections: [["我们收集哪些资料", ["App 主要在你的设备上处理资料。你扫描的房间平面图、图面、测量点、测速结果、控制器设置与导出文件，默认保存在你的设备本机。", "我们不要求建立开发者账号，不使用第三方广告追踪，不会将你的平面图或 Wi-Fi 测量资料上传到我们的服务器。"]], ["RoomPlan、LiDAR 与图面资料", ["App 会使用 Apple RoomPlan、相机与 LiDAR 功能来建立房间结构资料。这些资料用于产生 2D 平面图、3D 预览、PNG / SVG 导出与 Wi-Fi 热力图分析。", "除非你主动通过系统分享功能、Email 或其他 App 导出，图面资料会留在你的设备上。"]], ["网络测试与控制器连接", ["App 可能会执行 ping、下载测速或连接到你自行设置的测速端点，以估算 Wi-Fi 质量。这些网络服务可能会看见你的 IP 地址与连接时间，这是网络连接本身会产生的信息。", "如果你选择设置 Wi-Fi 控制器，控制器地址、账号与密码会保存在设备的 Keychain 中，用于你要求的连接测试与读取控制器信息。请只连接到你拥有或被授权管理的设备。"]], ["App 内购买与订阅", ["订阅与付款由 Apple App Store 处理。我们不会取得你的完整付款卡号或银行信息。App 只会读取 Apple 提供的购买状态，以启用对应的图面数量限制。"]], ["资料分享与第三方", ["我们不出售个人资料。当你使用分享、备份、Email、导出图档或传到其他 App 时，资料会依照你选择的目的地与对方服务的隐私政策处理。", "如果你使用 Cloudflare、LibreSpeed、自定义测速服务器或 Wi-Fi 控制器，相关服务或设备可能会记录连接信息。"]], ["资料保留与删除", ["本机资料会保留在你的设备上，直到你在 App 中删除图面、删除设置、移除 App，或使用 iOS 系统功能清除资料。", "若你需要协助了解或删除与本 App 相关的资料，可以通过本页联系邮箱与我们联系。"]], ["儿童隐私", ["本 App 不以儿童为主要对象，也不刻意收集儿童的个人资料。"]], ["政策更新", ["我们可能会因功能、法规或 App Store 要求更新本政策。更新后会在此页面公布新的生效日期。"]]] },
    terms: { topline: "使用条款", eyebrow: "Terms of Use", title: "使用条款", summary: "使用 LiDAR WiFi Planner 代表你同意以下条款，以及 Apple App Store 适用的标准 EULA 与购买规则。", meta: [["生效日期", "2026 年 6 月 19 日"], ["App", "LiDAR WiFi Planner"], ["联系邮箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]], sections: [["Apple 标准 EULA", [`LiDAR WiFi Planner 采用 Apple 标准最终用户许可协议。若本页内容与 Apple 标准 EULA 或 App Store 规则有冲突，依 Apple 适用条款为准。`, `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]], ["App 用途", ["本 App 是 Wi-Fi / LAN 规划与诊断工具，提供 LiDAR 平面图、site survey 测量、热力图、模拟规划、控制器辅助读值与导出功能。测量结果会受设备、环境、测速端点、ISP、局域网负载与使用方式影响，仅供网络规划与故障排查参考。"]], ["用户责任", ["请只在你拥有、管理或被授权测试的网络环境中使用本 App。", "若使用控制器进阶检测，请确认你有权连接并读取该设备信息。", "请自行确认导出的平面图、截图或测试数据是否包含敏感信息，再分享给第三方。"]], ["订阅与购买", ["App 内购买与订阅由 Apple App Store 处理。价格、试用、续订、退款与取消订阅依 Apple 显示与 Apple 账号设置为准。App 会根据 Apple 提供的购买状态启用对应功能或图面数量。"]], ["服务限制与免责声明", ["本 App 会尽力提供有用的测量与规划信息，但不保证任何特定网络性能、覆盖结果、控制器兼容性或测速准确度。你应依实际网络环境、设备规格与专业判断进行部署或调整。"]], ["条款更新", ["我们可能会因功能、法规或 App Store 要求更新本条款。更新后会在此页面公布新的生效日期。"]]] }
  }
};

const aliases = {
  zh: "zh-Hant",
  "zh-TW": "zh-Hant",
  "zh-HK": "zh-Hant",
  "zh-MO": "zh-Hant",
  "zh-CN": "zh-Hans",
  "zh-SG": "zh-Hans",
  "ja-JP": "ja",
  "ko-KR": "ko",
  "en-US": "en",
  "en-GB": "en"
};

const page = document.body.dataset.page || "home";
const select = document.getElementById("languageSelect");
const themeSelect = document.getElementById("themeSelect");

function preferredLanguage() {
  const stored = localStorage.getItem("siteLanguage");
  if (stored && translations[stored]) return stored;

  const languages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];

  for (const lang of languages) {
    if (translations[lang]) return lang;
    if (aliases[lang]) return aliases[lang];
    const base = lang.split("-")[0];
    if (translations[base]) return base;
    if (aliases[base]) return aliases[base];
  }
  return "en";
}

function preferredTheme() {
  const stored = localStorage.getItem("siteTheme");
  return ["auto", "light", "dark"].includes(stored) ? stored : "auto";
}

function applyTheme(theme) {
  if (theme === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = theme;
  }
  themeSelect.value = theme;
  localStorage.setItem("siteTheme", theme);
}

function renderMeta(items) {
  return `<div class="meta">${items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

function renderSections(sections) {
  return sections.map(([title, body], index) => {
    const shouldList = (page === "support" && index < 2) || (page === "terms" && index === 2);
    const content = shouldList
      ? `<ul>${body.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : body.map((item) => `<p>${item}</p>`).join("");
    return `<section><h2>${title}</h2>${content}</section>`;
  }).join("");
}

function renderHome(data) {
  return `<div class="link-grid">${data.cards.map(([title, text, href, cta]) => `
    <a class="link-card" href="${href}">
      <h2>${title}</h2>
      <p>${text}</p>
      <span class="button">${cta}</span>
    </a>
  `).join("")}</div>`;
}

function renderPage(data) {
  if (page === "home") return renderHome(data);
  return `${renderMeta(data.meta)}${renderSections(data.sections)}`;
}

function applyLanguage(lang) {
  const data = translations[lang] || translations["en"];
  const pageData = data[page] || data.home;

  document.body.classList.add("is-switching");
  window.setTimeout(() => {
    document.documentElement.lang = data.htmlLang;
    document.title = `LiDAR WiFi Planner - ${pageData.topline}`;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.innerHTML = pageData[key] || data[key] || node.innerHTML;
    });
    document.querySelectorAll("[data-nav]").forEach((node) => {
      if (node.dataset.nav === page) node.setAttribute("aria-current", "page");
      else node.removeAttribute("aria-current");
    });
    document.getElementById("content").innerHTML = renderPage(pageData);
        select.value = lang;
        themeSelect.value = preferredTheme();
        localStorage.setItem("siteLanguage", lang);
    document.body.classList.remove("is-switching");
  }, 80);
}

select.addEventListener("change", (event) => applyLanguage(event.target.value));
themeSelect.addEventListener("change", (event) => applyTheme(event.target.value));
applyTheme(preferredTheme());
applyLanguage(preferredLanguage());
