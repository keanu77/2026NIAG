export type ToolTableRow = {
  cells: string[];
};

export type ToolSection = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  warning?: string;
  tables?: {
    caption?: string;
    headers: string[];
    rows: ToolTableRow[];
  }[];
  lists?: {
    title: string;
    style?: "bullet" | "numbered";
    items: string[];
  }[];
  notes?: string[];
};

export const assessmentTools: ToolSection[] = [
  // ─── PEACE & LOVE ───
  {
    id: "peace-love",
    title: "軟組織損傷處置：PEACE & LOVE",
    subtitle: "取代傳統 RICE 原則，2019 年後國際標準",
    tables: [
      {
        caption: "PEACE（急性期：0–72 小時）",
        headers: ["字母", "原則", "說明"],
        rows: [
          { cells: ["P – Protect", "保護", "限制活動 1–3 天，減少組織進一步受損"] },
          { cells: ["E – Elevate", "抬高", "患部抬高至心臟以上，促進液體回流"] },
          { cells: ["A – Avoid", "避免抗發炎", "前 48–72 小時避免過度冰敷與 NSAIDs"] },
          { cells: ["C – Compress", "加壓", "彈性繃帶限制水腫，但不可過緊"] },
          { cells: ["E – Educate", "衛教", "讓選手了解積極康復的重要性"] },
        ],
      },
      {
        caption: "LOVE（亞急性期：72 小時後）",
        headers: ["字母", "原則", "說明"],
        rows: [
          { cells: ["L – Load", "漸進負重", "在疼痛允許範圍內逐步增加負荷"] },
          { cells: ["O – Optimism", "樂觀心態", "正向心理有助於恢復"] },
          { cells: ["V – Vascularization", "促進血流", "無痛有氧運動促進組織血流"] },
          { cells: ["E – Exercise", "功能運動", "恢復活動度、本體感覺、肌力"] },
        ],
      },
    ],
  },

  // ─── ABCDE ───
  {
    id: "abcde",
    title: "急救評估：ABCDE",
    tables: [
      {
        headers: ["項目", "評估內容", "紅旗警示"],
        rows: [
          { cells: ["A – Airway", "呼吸道通暢性", "阻塞、異物、喘鳴音"] },
          { cells: ["B – Breathing", "呼吸狀態", "呼吸困難、呼吸音異常、發紺"] },
          { cells: ["C – Circulation", "循環與出血", "大量出血、脈搏異常、休克徵象"] },
          { cells: ["D – Disability", "神經功能", "意識改變、瞳孔異常、肢體無力"] },
          { cells: ["E – Exposure", "暴露檢視", "明顯畸形、隱藏傷口、體溫異常"] },
        ],
      },
    ],
  },

  // ─── AVPU / GCS ───
  {
    id: "avpu-gcs",
    title: "意識評估：AVPU / GCS",
    tables: [
      {
        caption: "AVPU 快速評估",
        headers: ["等級", "定義", "對應 GCS"],
        rows: [
          { cells: ["A – Alert", "清醒", "≈ 15"] },
          { cells: ["V – Verbal", "對聲音有反應", "≈ 12–14"] },
          { cells: ["P – Pain", "對疼痛有反應", "≈ 8–11"] },
          { cells: ["U – Unresponsive", "無反應", "< 8"] },
        ],
      },
      {
        caption: "GCS 總分判讀",
        headers: ["分數", "嚴重度", "處置"],
        rows: [
          { cells: ["15", "正常", "持續觀察"] },
          { cells: ["13–14", "輕度", "密切監測"] },
          { cells: ["9–12", "中度", "儘速後送"] },
          { cells: ["< 8", "重度", "立即後送、考慮插管"] },
        ],
      },
    ],
  },

  // ─── SCAT6 ───
  {
    id: "scat6",
    title: "腦震盪評估：SCAT6 / Child-SCAT6",
    warning: "核心原則：疑似即移除，同日禁返",
    description: "疑似腦震盪（任何症狀、可見徵象或紅旗）= 立即移除比賽，禁止同日返場",
    lists: [
      {
        title: "紅旗徵象（任一項 → 立即後送）",
        items: [
          "GCS < 15 分",
          "明顯顱骨畸形",
          "撞擊後癲癇 (Impact Seizure)",
          "頸部疼痛或壓痛 / 棘突中線壓痛",
          "複視",
          "四肢無力或麻木",
          "嚴重或加劇的頭痛",
          "意識喪失或意識狀態惡化",
          "嘔吐、躁動",
        ],
      },
      {
        title: "可見徵象（現場觀察）",
        items: [
          "倒地後無法自行站起",
          "平衡障礙 / 步態不穩 / 動作不協調",
          "茫然或呆滯眼神",
          "反應遲緩",
          "抓握頭部",
        ],
      },
    ],
    tables: [
      {
        caption: "年齡工具選擇",
        headers: ["年齡", "工具"],
        rows: [
          { cells: ["≥ 13 歲", "SCAT6"] },
          { cells: ["< 13 歲", "Child-SCAT6"] },
        ],
      },
    ],
    notes: [
      "腦震盪症狀可能在撞擊後數小時甚至數天才浮現",
      "單次評估陰性 ≠ 排除腦震盪",
      "應建立 24–48 小時連續追蹤",
    ],
  },

  // ─── GRTP ───
  {
    id: "grtp",
    title: "分級回歸運動 (GRTP)",
    subtitle: "腦震盪後回歸運動六階段",
    tables: [
      {
        headers: ["階段", "目標", "活動", "最短時間"],
        rows: [
          { cells: ["1", "症狀限制活動", "日常活動", "24–48h"] },
          { cells: ["2", "輕度有氧", "步行、游泳", "24h"] },
          { cells: ["3", "運動特異性", "跑步、技術練習", "24h"] },
          { cells: ["4", "無接觸訓練", "進階訓練", "24h"] },
          { cells: ["5", "完整接觸訓練", "對練", "24h"] },
          { cells: ["6", "回歸比賽", "正式比賽", "–"] },
        ],
      },
    ],
    notes: ["每階段無症狀 24 小時才可進入下一階段"],
  },

  // ─── Ottawa Rules ───
  {
    id: "ottawa-rules",
    title: "Ottawa Ankle & Foot Rules",
    description: "條列式評估是否需照 X 光",
    lists: [
      {
        title: "踝關節 X 光指徵（任一項 → 需照 X 光）",
        items: [
          "踝區疼痛 + 外踝後緣或尖端 6 cm 內骨頭壓痛",
          "踝區疼痛 + 內踝後緣或尖端 6 cm 內骨頭壓痛",
          "踝區疼痛 + 無法立即負重走 4 步",
        ],
      },
      {
        title: "足部 X 光指徵（任一項 → 需照 X 光）",
        items: [
          "中足區疼痛 + 第 5 蹠骨基部壓痛",
          "中足區疼痛 + 舟狀骨壓痛",
          "中足區疼痛 + 無法立即負重走 4 步",
        ],
      },
    ],
    notes: [
      "適用：急性踝/足創傷",
      "不適用：< 18 歲（敏感度較低）、孕婦、多處創傷、感覺異常",
    ],
  },

  // ─── C-Spine Rule ───
  {
    id: "c-spine",
    title: "頸椎評估：Canadian C-Spine Rule",
    lists: [
      {
        title: "高風險因子（任一項 → 頸椎固定後送）",
        items: [
          "年齡 ≥ 65 歲",
          "危險機轉：高處墜落 (>1m)、軸向負荷於頭部、高速撞擊",
          "四肢麻木或刺痛",
        ],
      },
      {
        title: "低風險因子（允許測試主動轉頭）",
        items: [
          "簡單後方追撞",
          "受傷後可行走",
          "無頸部中線壓痛",
        ],
      },
    ],
    notes: [
      "主動頸旋轉：可完成左右各 45° 且無痛 → 不需影像",
      "無法完成或疼痛 → 需固定後送",
    ],
  },

  // ─── EHS ───
  {
    id: "ehs",
    title: "熱傷害：運動熱中暑 (EHS)",
    description: "EHS = 中樞神經症狀 + 核心體溫升高",
    warning: "運動型 EHS 皮膚可能仍在出汗，勿以「皮膚乾燥」作為必要紅旗",
    tables: [
      {
        caption: "診斷標準",
        headers: ["項目", "標準"],
        rows: [
          { cells: ["核心體溫", "直腸溫度 > 40°C（優先）"] },
          { cells: ["中樞症狀", "意識改變、混亂、癲癇、昏迷"] },
        ],
      },
      {
        caption: "處置步驟：冷卻優先，轉送其次",
        headers: ["步驟", "動作"],
        rows: [
          { cells: ["1", "確認 EHS（中樞症狀 + 體溫升高）"] },
          { cells: ["2", "立即全身冷水浸泡 (CWI)：水溫 10–15°C"] },
          { cells: ["3", "持續攪動水流加速散熱"] },
          { cells: ["4", "監測核心體溫（直腸溫度）"] },
          { cells: ["5", "降至 38.9°C 以下才可移出"] },
          { cells: ["6", "體溫達標後才進行轉送"] },
        ],
      },
    ],
    notes: ["時效：30 分鐘內降溫 → 100% 生還率"],
  },

  // ─── EAH ───
  {
    id: "eah",
    title: "運動相關低血鈉 (EAH)",
    warning: "與熱衰竭易混淆，處置完全不同。絕對避免給予低張液或大量水分",
    tables: [
      {
        caption: "鑑別要點",
        headers: ["特徵", "EAH", "熱衰竭"],
        rows: [
          { cells: ["病史", "大量飲水、體重增加", "脫水、飲水不足"] },
          { cells: ["體溫", "不一定高", "可能升高"] },
          { cells: ["症狀", "噁心、嘔吐、頭痛、混亂、癲癇", "頭暈、噁心、虛弱"] },
        ],
      },
      {
        caption: "處置",
        headers: ["嚴重度", "處置"],
        rows: [
          { cells: ["輕度（僅噁心嘔吐）", "限水、監測、避免低張液"] },
          { cells: ["重度（神經症狀）", "3% 高張食鹽水 100mL 推注，緊急後送"] },
        ],
      },
    ],
  },

  // ─── 溺水評估 ───
  {
    id: "drowning",
    title: "溺水評估（非致命溺水）",
    description: "正確術語：溺水 (Drowning) / 非致命溺水 (Non-fatal drowning)。不建議使用：乾性溺水、續發性溺水、二次溺水",
    tables: [
      {
        caption: "分層處置",
        headers: ["狀況", "處置"],
        rows: [
          { cells: ["無症狀 + SpO₂ ≥ 95% + 呼吸檢查正常", "急診觀察 4–8 小時，可評估返家"] },
          { cells: ["有症狀（咳嗽、呼吸困難）或 SpO₂ < 95%", "住院觀察、進一步評估"] },
          { cells: ["意識改變、呼吸衰竭", "立即急救、後送"] },
        ],
      },
    ],
    lists: [
      {
        title: "返家衛教警示（告知家屬如出現以下症狀需立即就醫）",
        items: ["咳嗽加劇", "呼吸急促", "嗜睡或意識改變", "嘔吐", "發燒"],
      },
    ],
  },

  // ─── RTP ───
  {
    id: "rtp",
    title: "返場判定 (RTP) 框架",
    description: "以「功能 + 風險」取代單純 Grade 分級",
    lists: [
      {
        title: "RTP 必要條件",
        numbered: true,
        items: [
          "無紅旗：骨折疑慮、神經缺損、頸椎疑慮、EHS、疑似腦震盪、無法控制出血",
          "疼痛可忍受且可控",
          "功能測試可接受：下肢（走 4 步 → 快走 → 小跳 → 項目特異動作）、上肢（可安全持器材 → 力量接近正常 → 項目特異動作）",
          "選手知情同意",
          "記錄並安排賽後追蹤",
        ],
      } as { title: string; numbered?: boolean; items: string[] },
      {
        title: "強制追蹤項目",
        items: ["頭部撞擊", "眼部傷害", "疑似骨折或內傷"],
      },
    ],
    notes: ["決策框架：健康狀態 → 參與風險 → 情境修正（比賽重要性、替代策略）"],
  },

  // ─── 護具移除 ───
  {
    id: "helmet-removal",
    title: "護具移除原則",
    subtitle: "頭盔移除",
    warning: "高能量機轉下，單靠壓痛不足以排除頸椎損傷",
    tables: [
      {
        headers: ["原則", "說明"],
        rows: [
          { cells: ["優先維持頸椎中立", "氣道呼吸循環為先"] },
          { cells: ["需受訓人員執行", "至少 3 人協作"] },
          { cells: ["無把握時", "固定後轉送，不移除"] },
        ],
      },
    ],
  },

  // ─── 場邊決策流程 ───
  {
    id: "decision-flow",
    title: "場邊醫療決策流程",
    lists: [
      {
        title: "流程步驟",
        numbered: true,
        items: [
          "場景安全 → Primary survey (ABCDE)",
          "任一紅旗 → 立即後送/啟動 EMS",
          "穩定 → 神經評估（AVPU/GCS）",
          "頭部撞擊？→ 是 → 立即移除，同日禁返，醫療評估+追蹤",
          "否 → 局部評估（肌骨/傷口）",
          "需要影像？(Ottawa/C-spine) → 是 → 固定/保護，轉送影像",
          "通過 RTP 必要條件？→ 是 → 允許續賽，記錄+賽後追蹤",
          "否 → 不續賽，衛教/門診追蹤",
        ],
      } as { title: string; numbered?: boolean; items: string[] },
    ],
  },
];

// 快速參考總覽
export const toolQuickReference = [
  { tool: "PEACE & LOVE", use: "軟組織損傷", keyDecision: "前 72h 避免過度冰敷/NSAIDs" },
  { tool: "ABCDE", use: "急救評估", keyDecision: "任一項異常需處理" },
  { tool: "GCS", use: "意識量化", keyDecision: "< 15 需監測；< 8 考慮插管" },
  { tool: "SCAT6", use: "腦震盪", keyDecision: "疑似即移除，同日禁返" },
  { tool: "Ottawa Rules", use: "踝/足骨折", keyDecision: "條列式評估是否需 X 光" },
  { tool: "C-Spine Rule", use: "頸椎", keyDecision: "高風險 → 固定後送" },
  { tool: "EHS", use: "熱中暑", keyDecision: "冷卻優先；直腸溫度" },
  { tool: "EAH", use: "低血鈉", keyDecision: "禁低張液；重症給 3% NaCl" },
  { tool: "溺水", use: "非致命溺水", keyDecision: "依症狀/SpO₂ 分層" },
  { tool: "RTP", use: "返場判定", keyDecision: "功能+風險，非單純 Grade" },
];
