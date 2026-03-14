export type CaseStudy = {
  id: string;
  title: string;
  date: string;
  location: string;
  sport: string;
  sportCategory:
    | "足球"
    | "美式足球"
    | "冰球"
    | "賽車"
    | "拳擊"
    | "板球"
    | "路跑"
    | "羽球"
    | "網球"
    | "游泳"
    | "角力"
    | "柔道"
    | "擊劍"
    | "體操"
    | "舉重"
    | "田徑"
    | "射箭"
    | "自由車";
  outcome: "存活" | "死亡" | "大量傷患";
  summary: string;
  treatment: string;
  lesson: string;
  keyFactors: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "C1",
    title: "Damar Hamlin 場上心跳驟停",
    date: "2023-01-02",
    location: "Cincinnati, USA",
    sport: "美式足球（NFL 例行賽）",
    sportCategory: "美式足球",
    outcome: "存活",
    summary: "比賽中倒地、心跳驟停；現場恢復心跳後以救護車送醫。",
    treatment:
      "場邊立即施行 CPR；當場完成一次去顫/除顫並恢復心跳後送往醫院；入院後使用呼吸器支持。",
    lesson:
      "事件強化「EAP + CPR/AED」公共倡議；推動美國校園與運動場域心臟緊急應變計畫立法。",
    keyFactors: ["CPR", "AED", "EAP"],
  },
  {
    id: "C2",
    title: "Christian Eriksen 歐洲國家盃心跳驟停",
    date: "2021-06-12",
    location: "Copenhagen, Denmark",
    sport: "足球（UEFA Euro 2020）",
    sportCategory: "足球",
    outcome: "存活",
    summary: "比賽中倒地，接受 CPR 並以除顫使心跳恢復後送醫。",
    treatment:
      "現場施以 CPR 並以除顫讓心跳恢復；其後完成植入式心臟去顫器（ICD）手術並出院。",
    lesson:
      "丹麥心臟急救志工參與度上升；英格蘭足球體系擴大 AED 下沉至基層場域。",
    keyFactors: ["CPR", "AED", "ICD"],
  },
  {
    id: "C3",
    title: "Fabrice Muamba 心跳驟停（英格蘭盃賽）",
    date: "2012-03-17",
    location: "London, UK",
    sport: "足球（盃賽）",
    sportCategory: "足球",
    outcome: "存活",
    summary:
      "場上倒地、長時間心肺復甦；醫療團隊最終把病人送達醫院並恢復生命徵象。",
    treatment:
      "現場嘗試 15 次除顫仍無法立即恢復心跳，倒地至抵院約 48 分鐘，抵院後持續約 30 分鐘處置。",
    lesson:
      "凸顯「現場復甦＋不中斷轉送」一體化流程的重要性；英格蘭推動更大規模 AED 配發。",
    keyFactors: ["CPR", "AED", "持續轉送"],
  },
  {
    id: "C4",
    title: "Tom Lockyer 英超比賽中心跳驟停",
    date: "2023-12-16",
    location: "Bournemouth, UK",
    sport: "足球（Premier League）",
    sportCategory: "足球",
    outcome: "存活",
    summary: "比賽中倒地心跳驟停，賽事中止；場上接受約 7 分鐘醫療處置後送醫。",
    treatment: "場內接受治療並轉送醫院；其後接受 ICD 置入預防復發。",
    lesson:
      "英格蘭聯賽以 CPR 宣導活動（延後 1 分鐘開球）擴大民眾急救技能普及。",
    keyFactors: ["CPR", "ICD", "停賽決策"],
  },
  {
    id: "C5",
    title: "Evan Ndicka 比賽中倒地（胸部創傷鑑別）",
    date: "2024-04-14",
    location: "Udine, Italy",
    sport: "足球（Serie A）",
    sportCategory: "足球",
    outcome: "存活",
    summary:
      "比賽末段倒地手按胸口，離場送醫；初步排除急性心肌梗塞，判定胸部外傷合併輕微氣胸。",
    treatment: "醫療人員迅速上場、擔架離場並中止比賽；住院檢查後確認診斷。",
    lesson: "以「疑似心臟症狀」處置並停賽，反映「先保命、後賽事」原則。",
    keyFactors: ["停賽決策", "快速鑑別"],
  },
  {
    id: "C6",
    title: "Edoardo Bove 比賽中突然倒地",
    date: "2024-12-01",
    location: "Florence, Italy",
    sport: "足球（義甲聯賽）",
    sportCategory: "足球",
    outcome: "存活",
    summary:
      "比賽早段倒地失去意識；送醫後在加護照護下評估，後續接受 ICD 置入。",
    treatment:
      "醫療人員衝入場內、球員形成人牆保護隱私，以救護車送醫並中止比賽。",
    lesson: "聯賽對「攜帶 ICD 參賽」有限制，造成運動回場決策具制度門檻。",
    keyFactors: ["隱私保護", "ICD", "停賽決策"],
  },
  {
    id: "C7",
    title: "Piermario Morosini 場上倒地死亡（救護車延誤）",
    date: "2012-04-14",
    location: "Pescara, Italy",
    sport: "足球（職業聯賽）",
    sportCategory: "足球",
    outcome: "死亡",
    summary: "比賽中倒地，最終不治；媒體聚焦救護車進出場與設備/動線問題。",
    treatment:
      "救護車因停車阻擋等因素延遲進場，救護車規格與進場條件成為爭議焦點。",
    lesson:
      "EAP 若未把「車輛管制、救護通道淨空」制度化，將可能造成致命延誤。義大利推進運動場館 AED 規範。",
    keyFactors: ["救護車動線", "EAP", "AED 政策"],
  },
  {
    id: "C8",
    title: "Antonio Puerta 二次倒地後死亡",
    date: "2007-08-25",
    location: "Seville, Spain",
    sport: "足球（職業聯賽）",
    sportCategory: "足球",
    outcome: "死亡",
    summary:
      "場上倒地後短暫恢復並自行離場，但在更衣室再次倒地，需心臟復甦後送醫，數日後不治。",
    treatment:
      "場上隊友與醫療人員介入；更衣室再次倒地並接受心臟復甦，轉送醫院加護治療。",
    lesson:
      "短暫恢復意識 ≠ 安全，仍可能處於致命性心律不整風險期，需「持續監測與快速轉送」。",
    keyFactors: ["二次倒地", "持續監測", "快速轉送"],
  },
  {
    id: "C9",
    title: "Miklós Fehér 比賽中倒地死亡",
    date: "2004-01-25",
    location: "Guimarães, Portugal",
    sport: "足球（職業聯賽）",
    sportCategory: "足球",
    outcome: "死亡",
    summary: "場上倒地，現場急救後送醫不治；救護車到場時間約 9 分鐘。",
    treatment: "兩隊醫療人員嘗試復甦，救護車到場後送醫。",
    lesson: "凸顯「去顫時效」對可存活性心律的決定性；場館 AED 可近性是硬門檻。",
    keyFactors: ["AED 可近性", "到達時間"],
  },
  {
    id: "C10",
    title: "Phil O'Donnell 比賽中倒地死亡",
    date: "2007-12-29",
    location: "Motherwell, Scotland",
    sport: "足球（職業聯賽）",
    sportCategory: "足球",
    outcome: "死亡",
    summary: "比賽末段倒地，送醫途中仍嘗試急救，最終不治。",
    treatment: "以救護車送醫，途中仍嘗試復甦。",
    lesson: "蘇格蘭推動運動參與者心臟篩檢，反映需「上游篩檢與風險分層」策略。",
    keyFactors: ["心臟篩檢", "上游預防"],
  },
  {
    id: "C11",
    title: "Marc-Vivien Foé 國際賽倒地死亡",
    date: "2003-06-26",
    location: "Lyon, France",
    sport: "足球（國際賽事）",
    sportCategory: "足球",
    outcome: "死亡",
    summary: "比賽中倒地，現場與醫療站嘗試長時間心臟復甦後不治。",
    treatment: "倒地後由醫療人員處置並送至體育場醫療區，心臟復甦約 45 分鐘。",
    lesson:
      "FIFA 加速推動賽事 AED 佈建，將 AED 納入大型賽務硬體標準並發展標準化緊急醫療包（FMEB）。",
    keyFactors: ["AED", "FMEB", "FIFA 標準"],
  },
  {
    id: "C12",
    title: "Rich Peverley 替補席心臟急症",
    date: "2014-03-10",
    location: "Dallas, USA",
    sport: "冰球（NHL）",
    sportCategory: "冰球",
    outcome: "存活",
    summary: "替補席出現嚴重心臟事件、送醫，比賽延期。",
    treatment: "現場立即啟動醫療處置並以救護車送醫。",
    lesson:
      "NHL 後續強化場館急救標準與 EAP，引入「可拆式替補席」以騰出救治空間。",
    keyFactors: ["EAP", "場館標準"],
  },
  {
    id: "C13",
    title: "Jay Bouwmeester 替補席倒地",
    date: "2020-02-11",
    location: "Anaheim, USA",
    sport: "冰球（NHL）",
    sportCategory: "冰球",
    outcome: "存活",
    summary: "替補席倒地，穩定後送醫；其後接受 ICD 置入。",
    treatment: "醫療人員快速介入後送醫。",
    lesson: "NHL 逐步把心臟事件處置納入制度化標準（醫師、救護車、AED）。",
    keyFactors: ["ICD", "EAP", "制度化"],
  },
  {
    id: "C14",
    title: "Jiří Fischer 替補席心跳驟停",
    date: "2005-11-21",
    location: "Detroit, USA",
    sport: "冰球（NHL）",
    sportCategory: "冰球",
    outcome: "存活",
    summary: "替補席發作，隊醫無法觸及脈搏，啟動 CPR 與 AED 後送醫。",
    treatment: "隊醫實施 CPR、使用 AED 後偵測到脈搏，以救護車送醫。",
    lesson: "NHL 急救標準逐步演進，明文化「至少三名醫師、兩輛救護車與 AED」。",
    keyFactors: ["CPR", "AED", "明文化標準"],
  },
  {
    id: "C15",
    title: "Romain Grosjean F1 火災嚴重事故",
    date: "2020-11-29",
    location: "Sakhir, Bahrain",
    sport: "賽車（F1 Bahrain GP）",
    sportCategory: "賽車",
    outcome: "存活",
    summary:
      "高速撞擊後起火，駕駛受燒燙傷但成功逃生；醫療車與賽道救援立即介入。",
    treatment:
      "醫療車在起跑第一圈即跟隨車陣，事故後迅速抵達；使用滅火器、創傷包協助脫困與處置。",
    lesson:
      "FIA 啟動事故調查並檢視安全裝置（Halo、防火裝備、護欄設計）與醫療介入流程。",
    keyFactors: ["醫療車", "Halo", "防火裝備"],
  },
  {
    id: "C16",
    title: "Jules Bianchi F1 雨戰事故",
    date: "2014-10-05",
    location: "Suzuka, Japan",
    sport: "賽車（F1 分站賽）",
    sportCategory: "賽車",
    outcome: "死亡",
    summary: "雨天事故造成嚴重顱腦傷；救援與醫療程序遵循既有流程。",
    treatment: "救援/醫療程序依規執行，以救護車撤離送醫。",
    lesson:
      "促成虛擬安全車（VSC）等制度變更，凸顯賽道風險控制也是醫療防護的上游措施。",
    keyFactors: ["VSC", "賽道安全", "上游預防"],
  },
  {
    id: "C17",
    title: "Dan Wheldon 多車事故死亡",
    date: "2011-10-16",
    location: "Las Vegas, USA",
    sport: "賽車（IndyCar）",
    sportCategory: "賽車",
    outcome: "死亡",
    summary: "多車事故造成「不可存活傷害」並死亡。",
    treatment: "被空運至醫療中心後不治。",
    lesson: "官方調查提出多因素「完美風暴」結論，作為賽事安全改革依據。",
    keyFactors: ["事故調查", "安全改革"],
  },
  {
    id: "C18",
    title: "Justin Wilson 遭碎片擊中死亡",
    date: "2015-08-23",
    location: "Pocono, USA",
    sport: "賽車（IndyCar）",
    sportCategory: "賽車",
    outcome: "死亡",
    summary: "遭碎片擊中頭部，空運後昏迷，後續不治。",
    treatment: "直升機空運送醫，處於重度昏迷。",
    lesson: "推動座艙防護（Aeroscreen）等安全技術發展。",
    keyFactors: ["Aeroscreen", "座艙防護"],
  },
  {
    id: "C19",
    title: "Phillip Hughes 遭球擊中死亡（板球）",
    date: "2014-11-25",
    location: "Sydney, Australia",
    sport: "板球（國內一級賽）",
    sportCategory: "板球",
    outcome: "死亡",
    summary: "遭球擊中後倒地，送醫手術及加護後不治。",
    treatment:
      "醫療人員約 42 秒內抵達，移動緊急醫療車（MediCab）約 3 分鐘內到位，救護車轉送醫院。",
    lesson:
      "提升頭部/頸部防護標準與裝備要求，更嚴格的頭盔標準、腦震盪制度建議。",
    keyFactors: ["護具標準", "腦震盪制度", "到達時間"],
  },
  {
    id: "C20",
    title: "Boston Marathon 爆炸案（大量傷患）",
    date: "2013-04-15",
    location: "Boston, USA",
    sport: "路跑（大型群眾賽事）",
    sportCategory: "路跑",
    outcome: "大量傷患",
    summary: "爆炸造成多名傷患；大量院前止血、檢傷、快速分流送醫。",
    treatment:
      "118 名患者由現場以救護車送至醫院；嚴重出血者在現場即使用止血帶；爆炸到抵院中位時間約 11 分鐘。",
    lesson:
      "預先規劃的大型賽事醫療帳篷在突發大量傷患中轉化為傷患集結點；多部門協同、止血與快速分流是關鍵。",
    keyFactors: ["MCI", "止血帶", "檢傷分類", "快速分流"],
  },
  {
    id: "C21",
    title: "Patrick Day 拳賽顱腦重傷死亡",
    date: "2019-10-12",
    location: "Chicago, USA",
    sport: "拳擊（職業賽事）",
    sportCategory: "拳擊",
    outcome: "死亡",
    summary: "比賽中遭重擊倒地後顱腦傷，緊急手術後不治。",
    treatment:
      "醫療人員立即包圍、數分鐘內以擔架送上救護車；送醫途中出現癲癇，後續接受緊急腦部手術。",
    lesson: "凸顯格鬥技「場邊醫師停止比賽權限、賽後監測與轉送門檻」的重要性。",
    keyFactors: ["停賽權限", "神經監測", "快速轉送"],
  },
  {
    id: "C22",
    title: "Maxim Dadashev 拳賽顱內出血死亡",
    date: "2019-07-19",
    location: "Oxon Hill, USA",
    sport: "拳擊（職業賽事）",
    sportCategory: "拳擊",
    outcome: "死亡",
    summary: "賽後倒下、送醫診斷顱內出血並緊急手術，最終不治。",
    treatment: "賽後倒下並被救護車送往醫院，接受神經外科介入。",
    lesson:
      "突顯拳擊賽「停賽決策、賽後神經學觀察、與急診/神外接軌」的制度責任。",
    keyFactors: ["停賽決策", "神經監測", "監管調查"],
  },
  // ── 羽球 ──
  {
    id: "C23",
    title: "張志傑亞青賽場上心跳驟停",
    date: "2024-06-30",
    location: "Yogyakarta, Indonesia",
    sport: "羽球（亞洲青年錦標賽）",
    sportCategory: "羽球",
    outcome: "死亡",
    summary: "17 歲中國選手比賽中倒地，現場醫療反應嚴重延誤，送醫後不治。",
    treatment: "倒地後數分鐘才開始 CPR，AED 部署延遲，送至當地醫院後宣告死亡。",
    lesson:
      "暴露場邊急救嚴重不足：無即時 CPR、AED 延誤。BWF 與亞洲羽總遭嚴厲批評，每分鐘延遲除顫存活率降 7–10%。",
    keyFactors: ["AED 延誤", "CPR 延遲", "賽事醫療標準"],
  },
  {
    id: "C24",
    title: "Markis Kido 奧運金牌得主心跳驟停",
    date: "2021-06-14",
    location: "Tangerang, Indonesia",
    sport: "羽球（友誼賽）",
    sportCategory: "羽球",
    outcome: "死亡",
    summary: "2008 北京奧運男雙金牌得主在友誼賽中心跳驟停倒地，送醫後不治。",
    treatment: "緊急送往附近醫院，但搶救無效。",
    lesson:
      "心因性猝死也可發生在退役菁英選手身上；所有層級比賽場地都應配備 AED 與急救人員。",
    keyFactors: ["AED 可近性", "退役選手風險"],
  },
  // ── 網球 ──
  {
    id: "C25",
    title: "2014 澳網極端高溫多人倒地",
    date: "2014-01-16",
    location: "Melbourne, Australia",
    sport: "網球（Australian Open）",
    sportCategory: "網球",
    outcome: "存活",
    summary:
      "氣溫超過 40°C，多名選手因熱傷害退賽；Frank Dancevic 場上昏倒並出現幻覺。",
    treatment: "場上醫療介入、冰毛巾降溫、靜脈輸液，多人退賽接受進一步治療。",
    lesson:
      "促使澳網強化極端高溫政策（EHP），授權裁判暫停比賽、關閉屋頂、延長休息時間，證實菁英選手也會發生熱傷害。",
    keyFactors: ["熱傷害", "極端高溫政策", "降溫措施"],
  },
  // ── 角力 ──
  {
    id: "C26",
    title: "NCAA 三名角力選手 33 天內減重死亡",
    date: "1997-11-09",
    location: "USA（密西根、北卡、威斯康辛）",
    sport: "角力（NCAA 大學聯賽）",
    sportCategory: "角力",
    outcome: "死亡",
    summary:
      "Jeff Reese(21)、Billy Saylor(19)、Joseph LaRosa(22) 在 33 天內先後因極端減重死亡，死因包括腎衰竭、心跳驟停與橫紋肌溶解。",
    treatment: "三人均接受緊急復甦但均不治。",
    lesson:
      "NCAA 立即禁止橡膠衣、三溫暖減重、瀉藥/利尿劑，建立最低體重認證制度（男性體脂 ≥ 5%），徹底改變全球角力減重管理。",
    keyFactors: ["急速減重", "體重管理", "制度改革"],
  },
  // ── 柔道 ──
  {
    id: "C27",
    title: "日本柔道 27 年間 118 人死亡統計",
    date: "1983-2010",
    location: "Japan",
    sport: "柔道（學生層級）",
    sportCategory: "柔道",
    outcome: "死亡",
    summary:
      "1983–2010 年間日本柔道紀錄 118 例死亡，多為青少年選手因被摔後頭部撞擊導致急性硬膜下出血，部分與二次撞擊症候群有關。",
    treatment: "多數案例因延遲認知腦震盪症狀而錯失救治黃金時間。",
    lesson:
      "催生「全國柔道事故受害者協會」，推動強制腦震盪休息期、禁止腦震盪後過早返回練習，凸顯投技運動的頭部撞擊風險。",
    keyFactors: ["腦震盪", "二次撞擊", "頭部防護"],
  },
  // ── 游泳 ──
  {
    id: "C28",
    title: "Fran Crippen 公開水域高溫溺斃",
    date: "2010-10-23",
    location: "Fujairah, UAE",
    sport: "游泳（FINA 公開水域世界盃 10 km）",
    sportCategory: "游泳",
    outcome: "死亡",
    summary:
      "26 歲美國選手在水溫約 31°C 的公開水域比賽中失蹤，約 2 小時後在水底被發現，已無生命跡象。",
    treatment: "發現後嘗試心肺復甦但已無效，解剖研判為高水溫誘發心律不整。",
    lesson:
      "FINA 實施嚴格水溫上限（31°C）、強制晶片追蹤選手通過檢查點、大幅增加救援艇與潛水員配置。",
    keyFactors: ["水溫管制", "選手追蹤", "救援配置"],
  },
  {
    id: "C29",
    title: "Alexander Dale Oen 訓練後心跳驟停",
    date: "2012-05-01",
    location: "Flagstaff, Arizona, USA",
    sport: "游泳（世錦賽金牌選手高原訓練）",
    sportCategory: "游泳",
    outcome: "死亡",
    summary:
      "26 歲挪威世錦賽 100 公尺蛙式金牌得主在高原訓練營淋浴後心跳驟停，隊友立即 CPR 但無法挽回。",
    treatment: "隊友與教練立即施行 CPR，急救人員到場後持續搶救但不治。",
    lesson:
      "凸顯菁英選手也可能有未診斷心臟疾患；促進各國泳協加強賽前心臟篩檢（ECG/心臟超音波），高原訓練增加心臟負擔需特別注意。",
    keyFactors: ["心臟篩檢", "高原訓練", "CPR"],
  },
  // ── 擊劍 ──
  {
    id: "C30",
    title: "Vladimir Smirnov 世錦賽斷劍穿腦死亡",
    date: "1982-07-19",
    location: "Rome, Italy",
    sport: "擊劍（世界錦標賽個人花劍）",
    sportCategory: "擊劍",
    outcome: "死亡",
    summary:
      "蘇聯選手在對戰中遭對手斷劍穿透面罩網目，刺入眼窩並貫穿腦部，9 天後不治。",
    treatment: "緊急手術移除斷劍碎片並處理腦部損傷，但傷勢過重。",
    lesson:
      "史上最重大擊劍安全改革：強制 FIE 認證面罩（1600N 等級）、Kevlar 防護背心、馬氏體鋼劍身（彎折不斷裂）、強制護胸、雙武器檢查制度。",
    keyFactors: ["裝備標準", "面罩強度", "劍身材質"],
  },
  // ── 田徑 ──
  {
    id: "C31",
    title: "Gabriela Andersen-Schiess 奧運馬拉松熱衰竭",
    date: "1984-08-05",
    location: "Los Angeles, USA",
    sport: "田徑（奧運女子馬拉松）",
    sportCategory: "田徑",
    outcome: "存活",
    summary:
      "瑞士選手在 LA 奧運馬拉松終點前嚴重熱衰竭，左臂癱軟、右腿僵硬，搖搖晃晃花了 5 分鐘才走完最後 400 公尺。",
    treatment:
      "依當時規則醫護人員不得在場上協助（否則取消資格），通過終點後立即以靜脈輸液與降溫措施處置，2 小時內恢復。",
    lesson:
      "促成修改規則允許場上醫療評估而不自動取消資格，並改善大型馬拉松賽事熱傷害防治協定。",
    keyFactors: ["熱傷害", "規則修改", "場上醫療權限"],
  },
  {
    id: "C32",
    title: "Salim Sdiri 遭標槍誤擊穿刺傷",
    date: "2007-07-13",
    location: "Rome, Italy",
    sport: "田徑（黃金聯賽）",
    sportCategory: "田徑",
    outcome: "存活",
    summary:
      "法國跳遠選手在比賽中被芬蘭標槍選手 Tero Pitkämäki 的失控標槍擊中背部/側腹，標槍穿刺入體。",
    treatment: "場上緊急醫療處置後送醫手術移除標槍，住院治療後康復。",
    lesson:
      "促使田徑賽事加強同場進行的投擲與跳躍項目安全間距、時序管控與安全走廊規劃。",
    keyFactors: ["同場安全", "投擲區管制", "安全走廊"],
  },
  {
    id: "C33",
    title: "甘肅白銀越野跑 21 人罹難",
    date: "2021-05-22",
    location: "Baiyin, Gansu, China",
    sport: "田徑（百公里越野超馬）",
    sportCategory: "田徑",
    outcome: "大量傷患",
    summary:
      "172 名跑者參加黃河石林百公里越野賽，山區突遇冰雹、凍雨與強風，21 人因失溫死亡，包括多名菁英超馬選手。",
    treatment:
      "地形偏遠導致救援延遲，牧羊人救出部分跑者，直升機與地面搜救隊陸續抵達。",
    lesson:
      "暴露賽事組織重大缺失：氣象監控不足、偏遠路段檢查點與庇護所不足、未強制攜帶禦寒裝備。中國全面整頓馬拉松/越野跑安全規範。",
    keyFactors: ["失溫", "氣象監控", "強制裝備", "賽事管理"],
  },
  // ── 體操 ──
  {
    id: "C34",
    title: "Elena Mukhina 訓練中脊椎骨折全癱",
    date: "1980-07-03",
    location: "Moscow, USSR",
    sport: "體操（奧運備戰訓練）",
    sportCategory: "體操",
    outcome: "存活",
    summary:
      "蘇聯體操選手在莫斯科奧運前 2 週練習 Thomas Salto 時旋轉不足、下巴著地，頸椎骨折致四肢癱瘓，當時腿傷未癒仍被教練要求訓練。",
    treatment:
      "緊急住院與脊椎手術，但傷勢造成永久四肢癱瘓，終身輪椅生活，2006 年過世。",
    lesson:
      "Thomas Salto 被 FIG 禁止用於女子體操；凸顯教練不當施壓傷病選手訓練的危險，推動獨立醫療監督制度。",
    keyFactors: ["教練施壓", "帶傷訓練", "動作禁令"],
  },
  {
    id: "C35",
    title: "桑蘭跳馬意外頸椎骨折全癱",
    date: "1998-07-21",
    location: "New York, USA",
    sport: "體操（友好運動會跳馬）",
    sportCategory: "體操",
    outcome: "存活",
    summary:
      "17 歲中國體操選手桑蘭在友好運動會跳馬熱身時因跳馬高度被調整（據報未通知），衝刺過快導致頭頸部著地，C5–C6 頸椎骨折。",
    treatment: "場上緊急處置後送至 Mount Sinai 醫院手術，長期復健。",
    lesson:
      "強調熱身期間器材調整的嚴格溝通程序、強制配置保護員，以及設備變更通知機制的重要性。",
    keyFactors: ["器材調整", "溝通程序", "保護員"],
  },
  {
    id: "C36",
    title: "Julissa Gomez 跳馬撞擊頸椎斷裂死亡",
    date: "1988-05-01",
    location: "Tokyo, Japan",
    sport: "體操（國際賽事跳馬熱身）",
    sportCategory: "體操",
    outcome: "死亡",
    summary:
      "15 歲美國體操選手在跳馬熱身時雙手滑脫，頭部直接撞上跳馬器材後摔落，頸椎嚴重損傷致四肢癱瘓，3 年後感染過世。",
    treatment: "緊急手術並長期住院，始終處於植物人狀態，1991 年過世。",
    lesson:
      "促成跳馬器材從傳統馬鞍改為現代跳馬檯（2001 年啟用），改善落地墊配置，要求教練在熱身時必須保護。",
    keyFactors: ["器材改良", "跳馬檯", "熱身保護"],
  },
  // ── 舉重 ──
  {
    id: "C37",
    title: "Janos Baranyai 奧運抓舉手肘脫臼",
    date: "2008-08-11",
    location: "Beijing, China",
    sport: "舉重（奧運 77 公斤級）",
    sportCategory: "舉重",
    outcome: "存活",
    summary:
      "匈牙利選手在北京奧運抓舉 148 公斤時右臂不支、手肘嚴重脫臼，槓鈴墜落，畫面全球轉播引發震撼。",
    treatment: "場上立即醫療介入，住院手術修復肘關節。",
    lesson:
      "凸顯奧運舉重對關節的極端負荷，強調場邊骨科專科醫師配置的重要性，以及正確熱身與技術對預防災難性關節傷害的關鍵角色。",
    keyFactors: ["關節傷害", "骨科配置", "技術與熱身"],
  },
  // ── 射箭 ──
  {
    id: "C38",
    title: "Svetlana Gomboeva 東京奧運射箭熱中暑",
    date: "2021-07-23",
    location: "Tokyo, Japan",
    sport: "射箭（奧運排名賽）",
    sportCategory: "射箭",
    outcome: "存活",
    summary:
      "俄羅斯射箭選手在東京奧運排名賽中因高溫（超過 34°C 高濕度）暈倒在射線上。",
    treatment:
      "場上醫療人員以冰毛巾、遮陽帳與降溫措施處置，休息後恢復並在後續輪次繼續比賽。",
    lesson:
      "射箭選手長時間暴露於直射陽光下且活動量低，特別容易發生熱傷害。東京奧運後增設遮陽設施、降溫站，並調整賽程避開正午高溫時段。",
    keyFactors: ["熱傷害", "遮陽設施", "賽程調整"],
  },
  // ── 自由車 ──
  {
    id: "C39",
    title: "Azizulhasni Awang 場地賽木刺穿腿完賽",
    date: "2011-02-01",
    location: "Manchester, UK",
    sport: "自由車（UCI 場地世界盃競輪賽）",
    sportCategory: "自由車",
    outcome: "存活",
    summary:
      "馬來西亞選手在競輪賽集團摔車後，木質場地碎片貫穿小腿，他帶著木刺完成比賽後才接受醫療處置。",
    treatment: "完賽後緊急送醫手術取出木刺，後續康復良好，2020 年奧運獲銅牌。",
    lesson:
      "凸顯木質自由車場地在摔車時的穿刺風險、場地維護的重要性，以及場地自由車防護裝備改進的需求。",
    keyFactors: ["場地維護", "穿刺傷", "防護裝備"],
  },
  {
    id: "C40",
    title: "Bahman Golbarnezhad 帕運公路賽摔車死亡",
    date: "2016-09-17",
    location: "Rio de Janeiro, Brazil",
    sport: "自由車（帕運公路賽）",
    sportCategory: "自由車",
    outcome: "死亡",
    summary:
      "伊朗帕運選手在公路賽下坡路段摔車後心跳驟停，為 1960 年以來首位在帕運比賽中死亡的選手。",
    treatment: "場邊急救人員施行 CPR，救護車送醫但不治。",
    lesson:
      "促使加強公路賽下坡路段安全審查、護欄配置、醫療團隊回應時間，以及山路賽段的醫療車部署。",
    keyFactors: ["下坡安全", "醫療回應時間", "賽道安全審查"],
  },
  // ── 拳擊（補充經典案例）──
  {
    id: "C41",
    title: "Duk Koo Kim 拳賽 14 回合後死亡",
    date: "1982-11-13",
    location: "Las Vegas, USA",
    sport: "拳擊（WBA 輕量級世界冠軍賽）",
    sportCategory: "拳擊",
    outcome: "死亡",
    summary:
      "韓國拳手與 Ray Mancini 激戰 14 回合後倒地，硬膜下出血，4 天後不治。",
    treatment: "場邊醫療介入後緊急送醫手術。",
    lesson:
      "直接促成 WBC 將冠軍賽從 15 回合縮減為 12 回合，並強化擂台邊醫療要求與裁判停賽訓練。",
    keyFactors: ["回合數改革", "裁判停賽", "醫療標準"],
  },
];

export const bestPractices = {
  immediate: [
    {
      title: "AED 到病人胸口的時間設為硬 KPI",
      desc: "不僅要有 AED，還要能在最短時間（以分鐘計）取得並開始使用。",
    },
    {
      title: "賽前 10 分鐘「醫療簡報（Medical Time-out）」",
      desc: "逐一確認角色分配：誰呼叫 EMS、誰帶 AED、誰做 CPR、誰管制動線。",
    },
    {
      title: "救護車進出場動線與 AED 同等重要",
      desc: "車輛管制、停車、場館門禁未制度化，將可能出現致命延誤。",
    },
    {
      title: "建立「停賽/終止」決策樹並授權裁判長 + 醫療主管",
      desc: "球員狀況不明時，停賽是避免二次風險的必要手段。",
    },
    {
      title: "隱私屏障與壓力管理流程",
      desc: "群眾視線/鏡頭管理已成現場急救的標準配套之一。",
    },
    {
      title: "格鬥類「醫師優先停賽」與賽後神經評估門檻",
      desc: "傷害可能在離開擂台後快速惡化，賽後觀察不能只靠選手自述。",
    },
  ],
  longTerm: [
    {
      title: "EAP 制度化並納入聯盟/主辦方稽核",
      desc: "把醫師數量、救護車數量、AED 配置寫成硬規範並持續更新。",
    },
    {
      title: "建置「場館—醫院」固定轉送協定",
      desc: "含創傷/神外/燒燙傷中心，需平時與醫療體系演練。",
    },
    {
      title: "建立賽事醫療事件的事後回顧（AAR）與資料庫",
      desc: "系統化事後回顧、數據整理與跨機構改善計畫。",
    },
    { title: "推進上游風險管理", desc: "心臟篩檢、裝備標準、選手健康規範。" },
    {
      title: "AED 與 CPR 技能下沉到基層與校園",
      desc: "擴大心臟緊急應變與 AED/CPR 教育覆蓋。",
    },
    {
      title: "一致化場上急救裝備清單與教育",
      desc: "如 FIFA 標準化緊急醫療包（FMEB），走向裝備與流程一致化。",
    },
  ],
};

export const allSportCategories = [
  "羽球",
  "網球",
  "游泳",
  "田徑",
  "體操",
  "自由車",
  "擊劍",
  "拳擊",
  "柔道",
  "角力",
  "舉重",
  "射箭",
  "足球",
  "美式足球",
  "冰球",
  "賽車",
  "板球",
  "路跑",
] as const;
