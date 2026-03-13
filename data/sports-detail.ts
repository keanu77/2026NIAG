export type InjuryItem = {
  type: string;
  rate?: string;
  description: string;
};

export type BodyPartInjury = {
  location: string;
  rate?: string;
  mechanism: string;
};

export type AssessmentItem = {
  area: string;
  focus: string;
};

export type TreatmentGroup = {
  title: string;
  items: { condition: string; clinical?: string; treatment: string; canContinue?: string }[];
};

export type SportDetail = {
  id: string;
  name: string;
  nameEn: string;
  category: "技擊類" | "球拍類" | "精準類" | "水上類" | "場地類" | "重量類" | "體操類" | "田徑類" | "演練類";
  icon: string;
  rules: {
    processingTime: string;
    entryRule: string;
    specialNote: string;
  };
  injuries: {
    byType: InjuryItem[];
    byLocation: BodyPartInjury[];
  };
  assessment: {
    quickObservation: string[];
    targeted: AssessmentItem[];
  };
  treatments: TreatmentGroup[];
  noPlay: {
    absolute: string[];
    relative: string[];
  };
  transfer: {
    immediate: string[];
    urgent: string[];
    followUp: string[];
  };
};

export const sportsDetails: SportDetail[] = [
  // ──────────────────────────────────────
  // 01 跆拳道對打
  // ──────────────────────────────────────
  {
    id: "taekwondo-sparring",
    name: "跆拳道對打",
    nameEn: "Taekwondo Sparring",
    category: "技擊類",
    icon: "🥋",
    rules: {
      processingTime: "1 分鐘，可延長 +1 分鐘",
      entryRule: "主審指示後方可進場，僅限大會指定醫師",
      specialNote: "限定大會醫師判定是否可續賽；禁止場邊遞藥、噴劑",
    },
    injuries: {
      byType: [
        { type: "挫傷", rate: "40–50%", description: "踢擊與拳擊造成" },
        { type: "扭傷 (Sprain)", rate: "20–30%", description: "踝、膝關節" },
        { type: "拉傷 (Strain)", rate: "15–20%", description: "大腿、腹股溝" },
        { type: "腦震盪", rate: "5–10%", description: "頭部踢擊（高風險）" },
        { type: "骨折", rate: "3–5%", description: "足部、手部、肋骨" },
      ],
      byLocation: [
        { location: "頭頸部", rate: "25–30%", mechanism: "旋踢、推踢擊中頭部" },
        { location: "下肢", rate: "30–40%", mechanism: "踢擊碰撞、急停扭轉" },
        { location: "軀幹", rate: "15–20%", mechanism: "拳擊、踢擊肋部" },
        { location: "上肢", rate: "10–15%", mechanism: "格擋、跌倒撐地" },
      ],
    },
    assessment: {
      quickObservation: ["意識狀態（頭部被踢擊後必查）", "受傷姿勢與部位", "是否可自主活動"],
      targeted: [
        { area: "頭部", focus: "SCAT6 快速篩檢、瞳孔反應" },
        { area: "踝/膝", focus: "Ottawa Rules、穩定度測試" },
        { area: "足部", focus: "壓痛點、負重能力" },
        { area: "軀幹", focus: "肋骨壓痛、呼吸痛" },
      ],
    },
    treatments: [
      {
        title: "頭部撞擊/腦震盪",
        items: [
          { condition: "意識清楚但有症狀", treatment: "SCAT6 評估、終止比賽、觀察" },
          { condition: "意識改變", treatment: "穩定頸椎、立即後送" },
          { condition: "鼻出血", treatment: "加壓止血、前傾姿勢", canContinue: "止血後可考慮" },
        ],
      },
      {
        title: "踝關節扭傷",
        items: [
          { condition: "Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "Grade II", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "Grade III", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "足部傷害",
        items: [
          { condition: "趾骨骨折", treatment: "buddy taping、冰敷", canContinue: "視疼痛" },
          { condition: "蹠骨骨折", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
    ],
    noPlay: {
      absolute: ["腦震盪症狀", "意識改變", "疑似骨折", "關節脫臼", "嚴重出血"],
      relative: ["嚴重疼痛影響動作", "中度扭傷/拉傷", "反覆受同一部位撞擊"],
    },
    transfer: {
      immediate: ["意識改變", "疑似頸椎損傷", "嚴重出血不止", "疑似內臟損傷"],
      urgent: ["疑似骨折", "關節脫臼", "需影像評估之傷害"],
      followUp: ["輕度扭傷/拉傷", "輕度腦震盪（需追蹤）"],
    },
  },

  // ──────────────────────────────────────
  // 02 柔道
  // ──────────────────────────────────────
  {
    id: "judo",
    name: "柔道",
    nameEn: "Judo",
    category: "技擊類",
    icon: "🥋",
    rules: {
      processingTime: "1 分鐘",
      entryRule: "主審許可後進場，僅限外傷處理",
      specialNote: "僅可做允許之外傷處理，須事先熟悉可進場人數與可做處置",
    },
    injuries: {
      byType: [
        { type: "扭傷 (Sprain)", rate: "30–40%", description: "肩、膝、踝" },
        { type: "拉傷 (Strain)", rate: "20–25%", description: "大腿、背部" },
        { type: "挫傷", rate: "15–20%", description: "摔倒撞擊" },
        { type: "脫臼", rate: "5–10%", description: "肩、肘" },
        { type: "骨折", rate: "3–5%", description: "鎖骨、手指" },
      ],
      byLocation: [
        { location: "肩關節", rate: "25–30%", mechanism: "摔技落地、關節技" },
        { location: "膝關節", rate: "20–25%", mechanism: "扭轉、固技" },
        { location: "手肘", rate: "15–20%", mechanism: "關節技（十字固）" },
        { location: "頭頸部", rate: "10–15%", mechanism: "摔倒撞擊" },
        { location: "手指", rate: "10–15%", mechanism: "抓握道服" },
      ],
    },
    assessment: {
      quickObservation: ["受傷機轉（摔倒/關節技/壓制）", "意識狀態", "關節明顯畸形"],
      targeted: [
        { area: "肩關節", focus: "穩定度、活動範圍、畸形" },
        { area: "膝關節", focus: "Lachman test、穩定度" },
        { area: "肘關節", focus: "活動度、血管神經狀態" },
        { area: "頸椎", focus: "壓痛、神經症狀（摔倒後）" },
      ],
    },
    treatments: [
      {
        title: "肩關節傷害",
        items: [
          { condition: "肩關節脫臼", clinical: "明顯畸形", treatment: "三角巾固定、後送（不現場復位）" },
          { condition: "肩鎖關節扭傷", clinical: "肩上方壓痛", treatment: "冰敷、三角巾", canContinue: "不建議" },
          { condition: "旋轉肌拉傷", clinical: "特定角度痛", treatment: "冰敷、評估功能", canContinue: "視功能" },
        ],
      },
      {
        title: "膝關節傷害",
        items: [
          { condition: "韌帶扭傷", treatment: "評估穩定度、冰敷", canContinue: "輕度可考慮" },
          { condition: "半月板損傷", clinical: "卡住感", treatment: "冰敷、後送評估", canContinue: "不建議" },
        ],
      },
      {
        title: "肘關節傷害（關節技）",
        items: [
          { condition: "過度伸展", treatment: "冰敷、評估穩定度", canContinue: "視疼痛" },
          { condition: "肘關節脫臼", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
    ],
    noPlay: {
      absolute: ["關節脫臼", "疑似骨折", "意識改變", "嚴重韌帶損傷", "神經症狀"],
      relative: ["嚴重疼痛影響動作", "關節不穩定", "中度扭傷/拉傷"],
    },
    transfer: {
      immediate: ["肩/肘關節脫臼", "疑似骨折", "意識改變", "頸椎疼痛"],
      urgent: ["嚴重軟組織傷害", "需影像評估之傷害"],
      followUp: ["輕度扭傷/拉傷", "手指傷害"],
    },
  },

  // ──────────────────────────────────────
  // 03 角力
  // ──────────────────────────────────────
  {
    id: "wrestling",
    name: "角力",
    nameEn: "Wrestling",
    category: "技擊類",
    icon: "🤼",
    rules: {
      processingTime: "2 分鐘",
      entryRule: "裁判暫停後方可進場",
      specialNote: "注意裁判手勢、口令與可否離開墊面處置",
    },
    injuries: {
      byType: [
        { type: "扭傷 (Sprain)", rate: "30–35%", description: "膝、踝、肩" },
        { type: "拉傷 (Strain)", rate: "20–25%", description: "頸、背部" },
        { type: "皮膚傷害", rate: "15–20%", description: "擦傷、墊面灼傷" },
        { type: "挫傷", rate: "10–15%", description: "碰撞" },
        { type: "脫臼/骨折", rate: "5–10%", description: "肩、手指" },
      ],
      byLocation: [
        { location: "膝關節", rate: "25–30%", mechanism: "扭轉、跪姿" },
        { location: "肩關節", rate: "20–25%", mechanism: "壓制、摔技" },
        { location: "頸椎", rate: "15–20%", mechanism: "頭頸部扭轉" },
        { location: "皮膚", rate: "15–20%", mechanism: "墊面摩擦" },
        { location: "耳朵", rate: "5–10%", mechanism: "反覆摩擦（菜花耳）" },
      ],
    },
    assessment: {
      quickObservation: ["受傷機轉", "是否可自行站立", "明顯畸形或出血"],
      targeted: [
        { area: "膝關節", focus: "穩定度、腫脹、活動度" },
        { area: "肩關節", focus: "活動範圍、穩定度" },
        { area: "頸椎", focus: "壓痛、神經症狀" },
        { area: "皮膚", focus: "出血控制、傷口清潔" },
      ],
    },
    treatments: [
      {
        title: "膝關節傷害",
        items: [
          { condition: "韌帶扭傷", treatment: "評估穩定度、冰敷", canContinue: "輕度可考慮" },
          { condition: "半月板損傷", treatment: "冰敷、後送", canContinue: "不建議" },
          { condition: "臏骨脫臼", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "皮膚傷害（墊面灼傷）",
        items: [
          { condition: "表淺擦傷", treatment: "清潔、覆蓋", canContinue: "可" },
          { condition: "出血傷口", treatment: "止血、清潔、覆蓋", canContinue: "止血後可考慮" },
          { condition: "耳朵血腫", treatment: "加壓、冰敷", canContinue: "視嚴重度" },
        ],
      },
    ],
    noPlay: {
      absolute: ["疑似骨折", "關節脫臼", "頸椎疼痛伴神經症狀", "意識改變"],
      relative: ["嚴重疼痛", "關節不穩定", "大面積出血"],
    },
    transfer: {
      immediate: ["頸椎損傷疑慮", "意識改變", "嚴重骨折/脫臼"],
      urgent: ["需影像評估之傷害", "嚴重軟組織傷害"],
      followUp: ["輕度扭傷/拉傷", "皮膚傷害"],
    },
  },

  // ──────────────────────────────────────
  // 04 拳擊
  // ──────────────────────────────────────
  {
    id: "boxing",
    name: "拳擊",
    nameEn: "Boxing",
    category: "技擊類",
    icon: "🥊",
    rules: {
      processingTime: "依拳台規範",
      entryRule: "由拳台醫師主導",
      specialNote: "拳台醫師判定頭部與臉部傷害；出血需在限定時間處理",
    },
    injuries: {
      byType: [
        { type: "挫傷", rate: "35–45%", description: "頭面部最常見" },
        { type: "撕裂傷", rate: "20–25%", description: "眉弓、嘴唇" },
        { type: "腦震盪", rate: "10–15%", description: "頭部重擊" },
        { type: "骨折", rate: "5–10%", description: "鼻骨、掌骨" },
        { type: "扭傷", rate: "5–10%", description: "手腕、踝" },
      ],
      byLocation: [
        { location: "頭面部", rate: "40–50%", mechanism: "拳擊直接撞擊" },
        { location: "手/腕", rate: "20–25%", mechanism: "擊拳反作用力" },
        { location: "肋部", rate: "10–15%", mechanism: "Body shot" },
        { location: "肩/肘", rate: "5–10%", mechanism: "出拳過度伸展" },
      ],
    },
    assessment: {
      quickObservation: ["意識狀態（KD 後必查）", "臉部出血/腫脹", "站立平衡"],
      targeted: [
        { area: "頭部", focus: "SCAT6、瞳孔、定向力" },
        { area: "臉部", focus: "鼻骨偏移、眼眶腫脹、視力" },
        { area: "手部", focus: "掌骨壓痛、握拳能力" },
        { area: "肋部", focus: "壓痛、呼吸痛" },
      ],
    },
    treatments: [
      {
        title: "頭部撞擊",
        items: [
          { condition: "擊倒後站立", treatment: "SCAT6 評估、意識監測" },
          { condition: "KO/TKO", treatment: "ABCDE 評估、頸椎保護、後送" },
          { condition: "反覆頭部打擊", treatment: "建議終止比賽" },
        ],
      },
      {
        title: "臉部出血/撕裂傷",
        items: [
          { condition: "眉弓撕裂", treatment: "加壓止血、凡士林", canContinue: "視出血控制" },
          { condition: "鼻出血", treatment: "加壓、前傾", canContinue: "止血後可考慮" },
          { condition: "嚴重眼眶腫脹", treatment: "冰敷", canContinue: "影響視線則不可" },
        ],
      },
      {
        title: "手部傷害（拳擊手骨折）",
        items: [
          { condition: "掌骨骨折（Boxer's fracture）", clinical: "小指掌骨壓痛", treatment: "固定、後送" },
          { condition: "腕關節扭傷", treatment: "冰敷、彈繃", canContinue: "視疼痛" },
        ],
      },
    ],
    noPlay: {
      absolute: ["腦震盪症狀", "KO/TKO", "疑似骨折", "嚴重出血不止", "視力受影響"],
      relative: ["反覆頭部打擊", "嚴重疼痛", "手部傷害影響握拳"],
    },
    transfer: {
      immediate: ["意識改變", "疑似顱內出血", "頸椎疼痛"],
      urgent: ["疑似骨折", "嚴重撕裂傷需縫合", "眼部傷害"],
      followUp: ["輕度腦震盪（需追蹤）", "軟組織挫傷"],
    },
  },

  // ──────────────────────────────────────
  // 05 空手道
  // ──────────────────────────────────────
  {
    id: "karate",
    name: "空手道",
    nameEn: "Karate",
    category: "技擊類",
    icon: "🥋",
    rules: {
      processingTime: "3 分鐘",
      entryRule: "裁判允許後方可進場",
      specialNote: "熟悉失格與不可處置項目；無法在時限內回復則失格",
    },
    injuries: {
      byType: [
        { type: "挫傷", rate: "35–45%", description: "踢擊、拳擊" },
        { type: "扭傷", rate: "20–30%", description: "踝、膝" },
        { type: "拉傷", rate: "15–20%", description: "大腿、腹股溝" },
        { type: "腦震盪", rate: "5–10%", description: "頭部攻擊" },
        { type: "骨折", rate: "3–5%", description: "手足、鼻骨" },
      ],
      byLocation: [
        { location: "頭面部", rate: "25–35%", mechanism: "拳腳攻擊" },
        { location: "下肢", rate: "25–30%", mechanism: "踢擊、急停" },
        { location: "軀幹", rate: "15–20%", mechanism: "踢擊肋部" },
        { location: "上肢", rate: "10–15%", mechanism: "格擋、攻擊" },
      ],
    },
    assessment: {
      quickObservation: ["意識狀態", "受傷部位與機轉", "自主活動能力"],
      targeted: [
        { area: "頭部", focus: "SCAT6、意識、視覺追蹤" },
        { area: "踝膝", focus: "穩定度、Ottawa Rules" },
        { area: "手足", focus: "壓痛、畸形、功能" },
      ],
    },
    treatments: [
      {
        title: "頭部撞擊",
        items: [
          { condition: "有腦震盪症狀", treatment: "終止比賽、SCAT6 評估" },
          { condition: "鼻出血", treatment: "加壓止血", canContinue: "止血後可考慮" },
        ],
      },
      {
        title: "四肢傷害",
        items: [
          { condition: "踝扭傷 Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "踝扭傷 Grade II–III", treatment: "冰敷/固定、後送", canContinue: "不可" },
          { condition: "手指/趾骨折", treatment: "buddy taping 或固定", canContinue: "視情況" },
        ],
      },
    ],
    noPlay: {
      absolute: ["腦震盪", "疑似骨折", "關節脫臼", "嚴重出血"],
      relative: ["中度扭傷", "嚴重疼痛影響動作"],
    },
    transfer: {
      immediate: ["意識改變", "疑似骨折", "嚴重出血"],
      urgent: ["需影像評估之傷害"],
      followUp: ["輕度扭傷/拉傷", "輕度腦震盪（需追蹤）"],
    },
  },

  // ──────────────────────────────────────
  // 06 游泳
  // ──────────────────────────────────────
  {
    id: "swimming",
    name: "游泳",
    nameEn: "Swimming",
    category: "水上類",
    icon: "🏊",
    rules: {
      processingTime: "緊急時由水域專業先進場",
      entryRule: "水中救援由專業救生員執行，上岸後醫護接手",
      specialNote: "貼布限制須依規定，不得任意貼紮；注意泳池邊濕滑",
    },
    injuries: {
      byType: [
        { type: "過度使用傷害", rate: "60–70%", description: "肩、膝最常見" },
        { type: "扭傷", rate: "10–15%", description: "踝、膝" },
        { type: "拉傷", rate: "10–15%", description: "腰背、大腿" },
        { type: "抽筋", rate: "5–10%", description: "小腿、足部" },
      ],
      byLocation: [
        { location: "肩關節", rate: "40–50%", mechanism: "游泳肩（過度使用）" },
        { location: "膝關節", rate: "15–20%", mechanism: "蛙式膝" },
        { location: "腰背部", rate: "10–15%", mechanism: "蝶式/仰式" },
        { location: "足/踝", rate: "5–10%", mechanism: "轉身踢牆" },
      ],
    },
    assessment: {
      quickObservation: ["意識狀態（水中事故必查）", "呼吸情況", "受傷部位"],
      targeted: [
        { area: "肩關節", focus: "活動範圍、疼痛弧、力量" },
        { area: "膝關節", focus: "內側壓痛、穩定度" },
        { area: "腰背", focus: "活動度、神經症狀" },
      ],
    },
    treatments: [
      {
        title: "游泳肩（肩部過度使用）",
        items: [
          { condition: "輕度疼痛", treatment: "冰敷、伸展", canContinue: "可考慮" },
          { condition: "中度疼痛影響泳姿", treatment: "冰敷、休息", canContinue: "不建議" },
          { condition: "嚴重疼痛", treatment: "終止比賽", canContinue: "不可" },
        ],
      },
      {
        title: "抽筋",
        items: [
          { condition: "小腿抽筋", treatment: "伸展、按摩、補水" },
          { condition: "水中抽筋", treatment: "確保安全離水、伸展" },
        ],
      },
      {
        title: "水中緊急事件",
        items: [
          { condition: "溺水/嗆水", treatment: "離水、ABCDE 評估" },
          { condition: "跳水撞擊", treatment: "頸椎保護、脊椎板離水" },
        ],
      },
    ],
    noPlay: {
      absolute: ["意識改變", "呼吸困難", "疑似頸椎損傷", "嚴重抽筋"],
      relative: ["嚴重疼痛影響泳姿", "持續抽筋"],
    },
    transfer: {
      immediate: ["溺水/嗆水後症狀", "意識改變", "疑似頸椎損傷"],
      urgent: ["疑似骨折", "嚴重軟組織傷害"],
      followUp: ["過度使用傷害", "輕度扭傷/拉傷"],
    },
  },

  // ──────────────────────────────────────
  // 07 划船與輕艇
  // ──────────────────────────────────────
  {
    id: "rowing-canoeing",
    name: "划船與輕艇",
    nameEn: "Rowing & Canoeing",
    category: "水上類",
    icon: "🚣",
    rules: {
      processingTime: "依水域安全流程",
      entryRule: "水上救援由專業處理，上岸後醫護接手",
      specialNote: "優先由水上專業救援處理，再由醫護接手；注意水溫與氣溫",
    },
    injuries: {
      byType: [
        { type: "過度使用", rate: "50–60%", description: "背、肩、腕" },
        { type: "拉傷", rate: "15–20%", description: "腰背、肋間" },
        { type: "水泡", rate: "10–15%", description: "手掌" },
        { type: "挫傷", rate: "5–10%", description: "翻船碰撞" },
      ],
      byLocation: [
        { location: "腰背部", rate: "30–40%", mechanism: "重複划動" },
        { location: "肩關節", rate: "20–25%", mechanism: "過度使用" },
        { location: "手腕/手掌", rate: "15–20%", mechanism: "握槳、水泡" },
        { location: "膝關節", rate: "10–15%", mechanism: "固定姿勢" },
      ],
    },
    assessment: {
      quickObservation: ["是否翻船/落水", "失溫症狀", "受傷部位"],
      targeted: [
        { area: "腰背", focus: "活動度、神經症狀" },
        { area: "肩關節", focus: "活動範圍、力量" },
        { area: "手部", focus: "水泡處理、感染徵兆" },
      ],
    },
    treatments: [
      {
        title: "腰背部傷害",
        items: [
          { condition: "肌肉疲勞", treatment: "伸展、休息" },
          { condition: "急性拉傷", treatment: "冰敷、限制活動", canContinue: "不建議" },
          { condition: "椎間盤症狀", treatment: "終止、後送評估", canContinue: "不可" },
        ],
      },
      {
        title: "翻船/落水",
        items: [
          { condition: "失溫", treatment: "乾燥保暖、溫熱飲品" },
          { condition: "溺水/嗆水", treatment: "ABCDE 評估、後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["失溫", "溺水後症狀", "神經症狀", "嚴重腰背傷害"],
      relative: ["中度疼痛", "持續水泡出血"],
    },
    transfer: {
      immediate: ["溺水/失溫", "意識改變", "疑似脊椎損傷"],
      urgent: ["嚴重腰背傷害", "疑似骨折"],
      followUp: ["過度使用傷害", "水泡"],
    },
  },

  // ──────────────────────────────────────
  // 08 羽球
  // ──────────────────────────────────────
  {
    id: "badminton",
    name: "羽球",
    nameEn: "Badminton",
    category: "球拍類",
    icon: "🏸",
    rules: {
      processingTime: "依單項規則（通常有傷停時間）",
      entryRule: "經裁判同意後進場",
      specialNote: "需在規定傷停時間內完成評估與處置",
    },
    injuries: {
      byType: [
        { type: "扭傷 (Sprain)", rate: "30–40%", description: "踝關節最常見" },
        { type: "拉傷 (Strain)", rate: "20–30%", description: "大腿、小腿" },
        { type: "過度使用", rate: "15–20%", description: "肩、肘" },
        { type: "挫傷", rate: "5–10%", description: "被球擊中" },
      ],
      byLocation: [
        { location: "踝關節", rate: "30–40%", mechanism: "急停、跳殺落地" },
        { location: "膝關節", rate: "15–20%", mechanism: "弓步、跳躍" },
        { location: "肩關節", rate: "10–15%", mechanism: "殺球動作" },
        { location: "跟腱", rate: "5–10%", mechanism: "急停蹬跳" },
        { location: "腰背部", rate: "5–10%", mechanism: "旋轉、後仰" },
      ],
    },
    assessment: {
      quickObservation: ["受傷時動作（跳殺/急停/弓步）", "是否可自行站立", "明顯畸形"],
      targeted: [
        { area: "踝關節", focus: "Ottawa Rules、負重能力" },
        { area: "跟腱", focus: "Thompson test" },
        { area: "膝關節", focus: "穩定度、腫脹" },
        { area: "肩/肘", focus: "活動範圍、力量" },
      ],
    },
    treatments: [
      {
        title: "踝關節扭傷",
        items: [
          { condition: "Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "Grade II", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "Grade III", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "跟腱傷害",
        items: [
          { condition: "跟腱炎急性發作", treatment: "冰敷、評估", canContinue: "視疼痛" },
          { condition: "疑似跟腱斷裂", clinical: "Thompson test 陽性", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "肌肉拉傷",
        items: [
          { condition: "小腿/大腿輕度拉傷", treatment: "冰敷、伸展", canContinue: "可考慮" },
          { condition: "中重度拉傷", treatment: "冰敷、彈繃", canContinue: "不建議" },
        ],
      },
    ],
    noPlay: {
      absolute: ["跟腱斷裂", "疑似骨折", "關節脫臼", "嚴重扭傷（Grade III）"],
      relative: ["中度扭傷/拉傷", "嚴重疼痛影響動作"],
    },
    transfer: {
      immediate: ["跟腱斷裂", "疑似骨折"],
      urgent: ["關節脫臼", "需影像評估之傷害"],
      followUp: ["輕度扭傷/拉傷", "過度使用傷害"],
    },
  },

  // ──────────────────────────────────────
  // 09 網球與軟網
  // ──────────────────────────────────────
  {
    id: "tennis",
    name: "網球與軟網",
    nameEn: "Tennis & Soft Tennis",
    category: "球拍類",
    icon: "🎾",
    rules: {
      processingTime: "依單項規則（通常有傷停時間）",
      entryRule: "經裁判同意後進場",
      specialNote: "傷停時間有限，需快速評估並決定是否可續賽",
    },
    injuries: {
      byType: [
        { type: "過度使用傷害", rate: "40–50%", description: "肩、肘、腕最常見" },
        { type: "扭傷 (Sprain)", rate: "25–30%", description: "踝關節" },
        { type: "拉傷 (Strain)", rate: "15–20%", description: "大腿、小腿、腹肌" },
        { type: "挫傷", rate: "5–10%", description: "被球擊中" },
      ],
      byLocation: [
        { location: "肘關節", rate: "25–35%", mechanism: "網球肘（外側肱骨上髁炎）" },
        { location: "肩關節", rate: "20–25%", mechanism: "發球動作、過度使用" },
        { location: "踝關節", rate: "15–20%", mechanism: "急停、側向移動" },
        { location: "膝關節", rate: "10–15%", mechanism: "跳躍、急轉" },
        { location: "腕關節", rate: "10–15%", mechanism: "擊球衝擊" },
        { location: "腰背部", rate: "10–15%", mechanism: "發球過度伸展" },
      ],
    },
    assessment: {
      quickObservation: ["選手站立或倒地", "受傷姿勢與部位", "是否可自主活動"],
      targeted: [
        { area: "肘關節", focus: "壓痛點、握力、伸腕抗阻" },
        { area: "肩關節", focus: "活動範圍、力量、穩定度" },
        { area: "踝關節", focus: "Ottawa Rules、負重能力" },
        { area: "腰背部", focus: "活動度、神經症狀" },
      ],
    },
    treatments: [
      {
        title: "網球肘（外側肱骨上髁炎）",
        items: [
          { condition: "急性發作", treatment: "冰敷患處 → 評估疼痛程度 → 彈繃或護肘支撐 → 評估握拍能力" },
          { condition: "疼痛可忍受且握拍穩定", treatment: "可考慮續賽" },
          { condition: "疼痛嚴重影響擊球", treatment: "不建議續賽" },
        ],
      },
      {
        title: "肩關節傷害",
        items: [
          { condition: "旋轉肌拉傷", clinical: "發球痛、特定角度痛", treatment: "冰敷、評估功能" },
          { condition: "肩夾擠", clinical: "抬臂痛", treatment: "休息、冰敷" },
          { condition: "SLAP 損傷", clinical: "深層肩痛", treatment: "賽後評估" },
          { condition: "肩關節脫臼", clinical: "畸形、無法活動", treatment: "固定、後送" },
        ],
      },
      {
        title: "踝關節扭傷",
        items: [
          { condition: "Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "Grade II", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "Grade III", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "熱傷害（戶外網球賽事常見）",
        items: [
          { condition: "熱痙攣", clinical: "肌肉抽筋", treatment: "休息、電解質補充" },
          { condition: "熱衰竭", clinical: "頭暈、噁心、大量流汗", treatment: "陰涼處休息、補水" },
          { condition: "熱中暑", clinical: "高體溫、意識改變", treatment: "緊急冷卻、後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["關節脫臼", "疑似骨折", "嚴重扭傷（Grade III）", "熱中暑", "神經症狀（麻木、無力）"],
      relative: ["中度拉傷", "嚴重疼痛影響動作", "持續頭暈或噁心"],
    },
    transfer: {
      immediate: ["熱中暑", "關節脫臼", "疑似骨折", "神經症狀"],
      urgent: ["需影像評估之傷害", "嚴重軟組織傷害"],
      followUp: ["輕中度扭傷/拉傷", "過度使用傷害"],
    },
  },

  // ──────────────────────────────────────
  // 10 桌球
  // ──────────────────────────────────────
  {
    id: "table-tennis",
    name: "桌球",
    nameEn: "Table Tennis",
    category: "球拍類",
    icon: "🏓",
    rules: {
      processingTime: "依單項規則",
      entryRule: "經裁判同意後進場",
      specialNote: "需在規定傷停時間內完成評估與處置；低撞擊運動",
    },
    injuries: {
      byType: [
        { type: "過度使用傷害", rate: "60–70%", description: "肩、肘、腕、膝" },
        { type: "扭傷 (Sprain)", rate: "15–20%", description: "踝關節" },
        { type: "拉傷 (Strain)", rate: "10–15%", description: "腰背、大腿" },
        { type: "急性傷害", rate: "少見", description: "跌倒、撞擊球桌" },
      ],
      byLocation: [
        { location: "肩關節", rate: "25–30%", mechanism: "重複揮拍、發球" },
        { location: "肘關節", rate: "15–20%", mechanism: "類似網球肘" },
        { location: "腰背部", rate: "15–20%", mechanism: "旋轉動作" },
        { location: "膝關節", rate: "10–15%", mechanism: "快速移動、蹲姿" },
        { location: "腕關節", rate: "10–15%", mechanism: "抽球動作" },
        { location: "踝關節", rate: "10–15%", mechanism: "急停、側向移動" },
      ],
    },
    assessment: {
      quickObservation: ["受傷部位與機轉", "自主活動能力", "明顯外傷"],
      targeted: [
        { area: "肩關節", focus: "活動範圍、力量" },
        { area: "肘/腕", focus: "壓痛、握力、抗阻測試" },
        { area: "腰背部", focus: "活動度、神經症狀" },
        { area: "踝關節", focus: "Ottawa Rules" },
      ],
    },
    treatments: [
      {
        title: "肩關節過度使用傷害",
        items: [
          { condition: "輕度疼痛", treatment: "冰敷、伸展", canContinue: "可考慮" },
          { condition: "中度疼痛", treatment: "冰敷、休息", canContinue: "視功能決定" },
          { condition: "嚴重疼痛", treatment: "終止比賽", canContinue: "不續賽" },
        ],
      },
      {
        title: "肘關節傷害（桌球肘）",
        items: [
          { condition: "急性發作", treatment: "冰敷 → 彈繃或護肘 → 評估握拍穩定度" },
        ],
      },
      {
        title: "撞擊球桌/跌倒",
        items: [
          { condition: "頭部撞擊", treatment: "意識評估、SCAT6" },
          { condition: "四肢挫傷", treatment: "冰敷、評估骨折" },
          { condition: "擦傷", treatment: "清潔、覆蓋" },
        ],
      },
    ],
    noPlay: {
      absolute: ["疑似骨折", "關節脫臼", "頭部撞擊後意識改變", "神經症狀"],
      relative: ["嚴重疼痛影響動作", "握拍不穩定", "無法正常移位"],
    },
    transfer: {
      immediate: ["頭部撞擊後意識改變", "疑似骨折"],
      urgent: ["需影像評估之傷害"],
      followUp: ["過度使用傷害", "輕度扭傷/拉傷"],
    },
  },

  // ──────────────────────────────────────
  // 11 射箭與射擊
  // ──────────────────────────────────────
  {
    id: "archery-shooting",
    name: "射箭與射擊",
    nameEn: "Archery & Shooting",
    category: "精準類",
    icon: "🎯",
    rules: {
      processingTime: "依單項規則",
      entryRule: "著重快評估、快處置",
      specialNote: "不影響比賽節奏；精準運動以過度使用傷害為主",
    },
    injuries: {
      byType: [
        { type: "射箭：肩關節旋轉肌病變", description: "拉弓動作" },
        { type: "射箭：肘關節肌腱炎", description: "重複動作" },
        { type: "射箭：弓弦撞擊瘀傷", description: "放箭時弓弦打到前臂" },
        { type: "射箭：手指水泡/神經壓迫", description: "握弓、放箭" },
        { type: "射擊：肩關節肌肉疲勞/拉傷", description: "持槍姿勢" },
        { type: "射擊：頸部肌肉緊繃", description: "瞄準姿勢" },
        { type: "射擊：手腕/手指過度使用", description: "扣扳機動作" },
        { type: "射擊：耳部聽力損傷", description: "噪音（需防護）" },
      ],
      byLocation: [],
    },
    assessment: {
      quickObservation: ["選手意識狀態", "是否可繼續站立/持器材", "明顯外傷"],
      targeted: [
        { area: "暈厥/頭暈", focus: "血糖、水分、環境因素" },
        { area: "過度換氣", focus: "呼吸頻率、焦慮程度" },
        { area: "熱傷害", focus: "體溫、意識狀態" },
        { area: "弓弦撞擊傷", focus: "皮膚完整性、腫脹" },
      ],
    },
    treatments: [
      {
        title: "暈厥/頭暈",
        items: [
          { condition: "低血糖", treatment: "補充糖分、休息" },
          { condition: "脫水", treatment: "補充水分與電解質" },
          { condition: "熱傷害", treatment: "陰涼處休息、冷卻" },
          { condition: "過度換氣", treatment: "放慢呼吸、安撫" },
          { condition: "心因性", treatment: "評估心臟問題、後送" },
        ],
      },
      {
        title: "過度換氣",
        items: [
          { condition: "步驟 1", treatment: "安撫、引導慢呼吸" },
          { condition: "步驟 2", treatment: "深呼吸練習（吸4秒~吐6秒）" },
          { condition: "步驟 3", treatment: "移至安靜區域" },
          { condition: "步驟 4", treatment: "評估是否可繼續比賽" },
        ],
      },
      {
        title: "弓弦撞擊傷（射箭）",
        items: [
          { condition: "輕度瘀傷", treatment: "冰敷、護具調整" },
          { condition: "中度腫脹", treatment: "冰敷、評估繼續比賽" },
          { condition: "皮膚裂傷", treatment: "清潔、覆蓋" },
        ],
      },
      {
        title: "肌肉疲勞/痙攣",
        items: [
          { condition: "肩頸", treatment: "伸展、按摩、休息" },
          { condition: "前臂/手指", treatment: "伸展、輕度活動" },
          { condition: "腰背", treatment: "伸展、調整姿勢" },
        ],
      },
    ],
    noPlay: {
      absolute: ["意識改變", "熱中暑", "無法安全持器材", "視力問題"],
      relative: ["嚴重頭暈未緩解", "持續過度換氣", "嚴重肌肉痙攣"],
    },
    transfer: {
      immediate: ["熱中暑", "意識改變", "疑似心臟問題"],
      urgent: ["持續暈厥", "嚴重脫水"],
      followUp: ["過度使用傷害", "輕度熱傷害（已穩定）"],
    },
  },

  // ──────────────────────────────────────
  // 12 擊劍
  // ──────────────────────────────────────
  {
    id: "fencing",
    name: "擊劍",
    nameEn: "Fencing",
    category: "精準類",
    icon: "🤺",
    rules: {
      processingTime: "依單項規則",
      entryRule: "著重快評估、快處置",
      specialNote: "不影響比賽節奏；注意劍刺傷/瘀傷與弓步膝",
    },
    injuries: {
      byType: [
        { type: "扭傷 (Sprain)", rate: "30–40%", description: "踝、膝關節" },
        { type: "拉傷 (Strain)", rate: "25–30%", description: "大腿、小腿" },
        { type: "過度使用傷害", rate: "20–25%", description: "肩、肘、腕" },
        { type: "刺傷/瘀傷", rate: "10–15%", description: "裝備穿透或撞擊" },
      ],
      byLocation: [
        { location: "膝關節", rate: "25–30%", mechanism: "弓步動作" },
        { location: "踝關節", rate: "20–25%", mechanism: "弓步、急停" },
        { location: "大腿", rate: "15–20%", mechanism: "弓步拉傷" },
        { location: "肩/肘/腕", rate: "15–20%", mechanism: "劍刺動作" },
        { location: "足部", rate: "10–15%", mechanism: "前腳負重過度" },
      ],
    },
    assessment: {
      quickObservation: ["受傷部位與機轉", "是否可站立/移動", "護具是否造成問題"],
      targeted: [
        { area: "膝關節", focus: "穩定度、腫脹、活動度" },
        { area: "踝關節", focus: "Ottawa Rules、負重能力" },
        { area: "大腿", focus: "肌肉觸診、收縮力" },
        { area: "劍刺傷", focus: "深度、出血、器官損傷" },
      ],
    },
    treatments: [
      {
        title: "膝關節傷害（弓步膝）",
        items: [
          { condition: "髕骨肌腱炎", clinical: "髕骨下疼痛", treatment: "冰敷、評估功能" },
          { condition: "韌帶扭傷", clinical: "不穩定感", treatment: "評估穩定度、冰敷" },
          { condition: "半月板損傷", clinical: "卡住感", treatment: "冰敷、後送" },
        ],
      },
      {
        title: "踝關節扭傷",
        items: [
          { condition: "Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "Grade II", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "Grade III", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "劍刺傷/瘀傷",
        items: [
          { condition: "表淺瘀傷", treatment: "冰敷、可續賽" },
          { condition: "深層瘀傷", treatment: "冰敷、評估功能" },
          { condition: "疑似穿透傷", treatment: "檢查傷口深度、後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["疑似骨折", "關節脫臼", "韌帶完全斷裂", "嚴重肌肉拉傷（Grade III）", "穿透傷"],
      relative: ["無法正常執行弓步", "嚴重疼痛影響動作", "中度扭傷/拉傷"],
    },
    transfer: {
      immediate: ["穿透傷", "疑似骨折", "關節脫臼"],
      urgent: ["需影像評估之傷害", "嚴重軟組織傷害"],
      followUp: ["輕中度扭傷/拉傷", "過度使用傷害"],
    },
  },

  // ──────────────────────────────────────
  // 13 自由車場地賽
  // ──────────────────────────────────────
  {
    id: "track-cycling",
    name: "自由車場地賽",
    nameEn: "Track Cycling",
    category: "場地類",
    icon: "🚴",
    rules: {
      processingTime: "依單項規則",
      entryRule: "著重快評估、快處置",
      specialNote: "不影響比賽節奏；高速撞擊風險（可達 70+ km/h），摔車傷害可能嚴重",
    },
    injuries: {
      byType: [
        { type: "擦傷/撕裂傷", rate: "40–50%", description: "摔車最常見" },
        { type: "挫傷", rate: "25–30%", description: "撞擊地面或護欄" },
        { type: "骨折", rate: "15–20%", description: "高速撞擊" },
        { type: "腦震盪", rate: "10–15%", description: "頭部撞擊" },
        { type: "過度使用傷害", rate: "10–15%", description: "膝、背" },
      ],
      byLocation: [
        { location: "皮膚", rate: "50%+", mechanism: "摔車擦傷" },
        { location: "上肢", rate: "20–30%", mechanism: "摔車撐地" },
        { location: "頭頸部", rate: "15–20%", mechanism: "摔車撞擊" },
        { location: "下肢", rate: "15–20%", mechanism: "撞擊、扭轉" },
        { location: "軀幹", rate: "10–15%", mechanism: "撞擊護欄" },
      ],
    },
    assessment: {
      quickObservation: ["場景安全（確認比賽已停止或選手已離開賽道）", "意識狀態", "明顯畸形或大量出血"],
      targeted: [
        { area: "ABCDE 評估", focus: "A-呼吸道、B-呼吸、C-出血循環、D-意識神經、E-全身檢視" },
        { area: "意識評估（必做）", focus: "SCAT6：意識狀態、定向力、記憶（摔車過程）" },
        { area: "頸椎", focus: "中線壓痛、神經症狀" },
      ],
    },
    treatments: [
      {
        title: "頭部撞擊/腦震盪",
        items: [
          { condition: "步驟 1", treatment: "穩定頸椎（勿移除頭盔除非必要）" },
          { condition: "步驟 2", treatment: "意識評估" },
          { condition: "步驟 3", treatment: "SCAT6 篩檢" },
          { condition: "步驟 4", treatment: "任何陽性 → 終止比賽" },
        ],
      },
      {
        title: "大面積擦傷（Road Rash）",
        items: [
          { condition: "步驟 1", treatment: "評估範圍與深度" },
          { condition: "步驟 2", treatment: "生理食鹽水沖洗" },
          { condition: "步驟 3", treatment: "濕性敷料覆蓋（水膠體或矽膠敷料）" },
          { condition: "步驟 4", treatment: "彈繃或網套固定" },
        ],
      },
      {
        title: "鎖骨骨折（摔車撐地最常見）",
        items: [
          { condition: "局部壓痛、腫脹", treatment: "三角巾固定" },
          { condition: "可能觸及骨折端", treatment: "冰敷" },
          { condition: "患側無法抬臂", treatment: "後送影像評估" },
        ],
      },
      {
        title: "軀幹撞擊",
        items: [
          { condition: "肋骨挫傷/骨折", clinical: "呼吸痛、壓痛", treatment: "評估呼吸、冰敷" },
          { condition: "腹部撞擊", clinical: "壓痛、反彈痛", treatment: "監測、疑似內傷後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["意識喪失或改變", "疑似腦震盪", "疑似骨折", "關節脫臼", "大面積或深層擦傷", "腹部撞擊疑似內傷", "頸椎疼痛或神經症狀"],
      relative: ["多處輕度擦傷", "嚴重疼痛影響騎乘", "車輛損壞無法修復"],
    },
    transfer: {
      immediate: ["意識改變", "疑似頸椎或脊椎損傷", "疑似內臟損傷", "大量出血", "多處骨折"],
      urgent: ["單一骨折", "關節脫臼", "需縫合之撕裂傷", "深層擦傷"],
      followUp: ["輕度擦傷（已處理）", "軟組織挫傷", "輕度腦震盪（需追蹤）"],
    },
  },

  // ──────────────────────────────────────
  // 14 田徑
  // ──────────────────────────────────────
  {
    id: "track-field",
    name: "田徑",
    nameEn: "Track & Field",
    category: "田徑類",
    icon: "🏃",
    rules: {
      processingTime: "依裁判及場地規範",
      entryRule: "需裁判允許方可進場",
      specialNote: "通常需判斷是否繼續或放棄；田賽與徑賽傷害模式不同",
    },
    injuries: {
      byType: [
        { type: "拉傷 (Strain)", rate: "35–45%", description: "腿後肌群最常見" },
        { type: "扭傷 (Sprain)", rate: "15–25%", description: "踝關節" },
        { type: "過度使用", rate: "15–20%", description: "脛骨痛、跟腱炎" },
        { type: "挫傷/擦傷", rate: "10–15%", description: "跌倒、碰撞" },
        { type: "骨折", rate: "少見", description: "疲勞性骨折" },
      ],
      byLocation: [
        { location: "大腿後側", rate: "25–35%", mechanism: "衝刺加速" },
        { location: "踝關節", rate: "15–20%", mechanism: "跳躍落地" },
        { location: "膝關節", rate: "10–15%", mechanism: "跳躍、扭轉" },
        { location: "小腿/脛骨", rate: "10–15%", mechanism: "跑步衝擊" },
        { location: "腰背部", rate: "10–15%", mechanism: "投擲動作" },
        { location: "肩/肘", rate: "5–10%", mechanism: "投擲項目" },
      ],
    },
    assessment: {
      quickObservation: ["受傷時動作（衝刺/跳躍/投擲/跌倒）", "是否可自行站立行走", "明顯畸形"],
      targeted: [
        { area: "大腿後側", focus: "壓痛範圍、收縮力、伸展痛" },
        { area: "踝關節", focus: "Ottawa Rules、負重能力" },
        { area: "膝關節", focus: "穩定度、腫脹" },
        { area: "脛骨", focus: "壓痛點、跳躍痛（疲勞性骨折）" },
      ],
    },
    treatments: [
      {
        title: "腿後肌拉傷（最常見）",
        items: [
          { condition: "輕度拉傷", treatment: "冰敷、輕度伸展", canContinue: "可考慮" },
          { condition: "中度拉傷", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "重度拉傷（聽到/感到撕裂）", treatment: "冰敷、固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "踝關節扭傷",
        items: [
          { condition: "Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "Grade II", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "Grade III", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "熱傷害（長距離/戶外項目）",
        items: [
          { condition: "熱痙攣", treatment: "休息、電解質補充" },
          { condition: "熱衰竭", treatment: "陰涼處、補水、冷卻" },
          { condition: "熱中暑", treatment: "緊急冷卻（冰浴）、立即後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["疑似骨折", "關節脫臼", "嚴重肌肉拉傷", "熱中暑", "意識改變"],
      relative: ["中度拉傷/扭傷", "嚴重疼痛影響動作"],
    },
    transfer: {
      immediate: ["熱中暑", "意識改變", "疑似骨折", "嚴重出血"],
      urgent: ["需影像評估之傷害", "關節脫臼"],
      followUp: ["輕度拉傷/扭傷", "過度使用傷害"],
    },
  },

  // ──────────────────────────────────────
  // 15 體操
  // ──────────────────────────────────────
  {
    id: "gymnastics",
    name: "競技體操與韻律體操",
    nameEn: "Gymnastics",
    category: "體操類",
    icon: "🤸",
    rules: {
      processingTime: "依裁判及場地規範",
      entryRule: "通常需判斷是否繼續或放棄",
      specialNote: "高風險項目，嚴重傷害可能性高；摔落/高處墜落必做脊椎評估",
    },
    injuries: {
      byType: [
        { type: "競技：扭傷", rate: "30–40%", description: "踝、膝、腕" },
        { type: "競技：拉傷", rate: "20–25%", description: "背部、大腿" },
        { type: "競技：骨折", rate: "10–15%", description: "手腕、足部" },
        { type: "競技：脫臼", rate: "5–10%", description: "肩、肘、髕骨" },
        { type: "競技：腦震盪", rate: "5–10%", description: "摔落撞擊" },
        { type: "韻律：過度使用", rate: "50–60%", description: "背、髖、踝" },
        { type: "韻律：扭傷", rate: "20–25%", description: "踝關節" },
      ],
      byLocation: [
        { location: "踝關節", mechanism: "競技最常見（落地）；韻律常見" },
        { location: "膝關節", mechanism: "競技與韻律都常見" },
        { location: "腕關節", mechanism: "競技常見（撐地）" },
        { location: "脊椎/背部", mechanism: "韻律最常見" },
        { location: "肩關節", mechanism: "競技常見" },
      ],
    },
    assessment: {
      quickObservation: ["確認可安全接近", "評估摔落高度與方式", "意識狀態"],
      targeted: [
        { area: "ABCDE 評估", focus: "A-呼吸道、B-呼吸、C-循環、D-神經功能、E-暴露檢視" },
        { area: "脊椎評估（高處摔落必做）", focus: "頸背部中線壓痛、四肢感覺運動、假設脊椎損傷直到排除" },
      ],
    },
    treatments: [
      {
        title: "摔落傷/脊椎損傷",
        items: [
          { condition: "步驟 1", treatment: "穩定頸椎" },
          { condition: "步驟 2", treatment: "意識評估" },
          { condition: "步驟 3", treatment: "四肢感覺運動評估" },
          { condition: "步驟 4", treatment: "如有疑慮 → 脊椎板固定、後送" },
        ],
      },
      {
        title: "踝關節傷害（最常見）",
        items: [
          { condition: "輕度扭傷", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "中度扭傷", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "嚴重扭傷/骨折", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "腕關節傷害",
        items: [
          { condition: "扭傷", clinical: "腫脹、壓痛", treatment: "PEACE 原則、彈繃" },
          { condition: "骨折", clinical: "畸形、劇痛", treatment: "副木固定、後送" },
          { condition: "脫臼", clinical: "明顯畸形", treatment: "固定、後送" },
          { condition: "遠端橈骨骨骺炎（Gymnast's Wrist）", clinical: "腕背側痛、負重痛", treatment: "終止比賽、轉介（14歲以下優先考慮）" },
        ],
      },
      {
        title: "腰背傷害",
        items: [
          { condition: "肌肉痙攣", treatment: "伸展、冰敷" },
          { condition: "急性扭傷", treatment: "冰敷、限制活動" },
          { condition: "疑似椎弓解離", treatment: "休息、後續影像評估" },
          { condition: "有神經症狀", treatment: "立即後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["疑似脊椎損傷", "疑似骨折", "關節脫臼", "腦震盪症狀", "嚴重扭傷", "神經症狀"],
      relative: ["嚴重疼痛影響動作", "關節不穩定", "無法安全完成動作"],
    },
    transfer: {
      immediate: ["疑似脊椎損傷", "意識改變", "嚴重骨折或多處骨折", "開放性骨折"],
      urgent: ["單一骨折", "關節脫臼", "需影像評估之傷害"],
      followUp: ["輕中度扭傷/拉傷", "過度使用傷害"],
    },
  },

  // ──────────────────────────────────────
  // 16 舉重
  // ──────────────────────────────────────
  {
    id: "weightlifting",
    name: "舉重",
    nameEn: "Weightlifting",
    category: "重量類",
    icon: "🏋️",
    rules: {
      processingTime: "依裁判及場地規範",
      entryRule: "通常需判斷是否繼續或放棄",
      specialNote: "重量負荷傷害風險高；注意瓦氏動作引起的血壓驟升",
    },
    injuries: {
      byType: [
        { type: "拉傷", rate: "35–45%", description: "腰背、大腿、肩" },
        { type: "扭傷", rate: "20–25%", description: "腕、膝、踝" },
        { type: "過度使用", rate: "15–20%", description: "肩、膝、背" },
        { type: "骨折", rate: "少見", description: "應力性骨折" },
      ],
      byLocation: [
        { location: "腰背部", rate: "30–40%", mechanism: "肌肉拉傷、椎間盤問題" },
        { location: "肩關節", rate: "20–25%", mechanism: "旋轉肌傷害、不穩定" },
        { location: "膝關節", rate: "15–20%", mechanism: "髕骨肌腱炎、韌帶傷害" },
        { location: "腕關節", rate: "10–15%", mechanism: "過度背屈傷害" },
        { location: "手肘", rate: "5–10%", mechanism: "過度伸展" },
      ],
    },
    assessment: {
      quickObservation: ["受傷機轉（舉起中、落下時）", "槓鈴是否已移開", "選手姿勢與意識"],
      targeted: [
        { area: "腰背", focus: "神經症狀、活動度" },
        { area: "肩關節", focus: "穩定度、活動範圍" },
        { area: "膝關節", focus: "穩定度、腫脹" },
        { area: "腕關節", focus: "腫脹、活動度" },
      ],
    },
    treatments: [
      {
        title: "腰背部傷害（最常見）",
        items: [
          { condition: "肌肉痙攣", clinical: "局部疼痛、緊繃", treatment: "冰敷、輕度伸展" },
          { condition: "急性拉傷", clinical: "劇痛、活動受限", treatment: "冰敷、限制活動" },
          { condition: "椎間盤問題", clinical: "放射痛至下肢", treatment: "立即終止、後送" },
        ],
      },
      {
        title: "肩關節傷害",
        items: [
          { condition: "旋轉肌拉傷", clinical: "特定角度痛", treatment: "冰敷、評估功能" },
          { condition: "肩關節不穩定", clinical: "脫位感", treatment: "終止比賽、後續評估" },
          { condition: "肩關節脫臼", clinical: "明顯畸形", treatment: "固定、後送" },
        ],
      },
      {
        title: "瓦氏動作相關問題",
        items: [
          { condition: "暈厥", treatment: "平躺、抬高下肢、鬆開衣物" },
          { condition: "跌落/撞擊", treatment: "必須用 SCAT6 排除併發傷" },
          { condition: "血壓不穩", treatment: "監測、緩慢恢復姿勢" },
        ],
      },
      {
        title: "槓鈴撞擊傷",
        items: [
          { condition: "頭部", treatment: "意識評估、SCAT6" },
          { condition: "軀幹", treatment: "評估肋骨、內臟" },
          { condition: "四肢", treatment: "評估骨折" },
        ],
      },
    ],
    noPlay: {
      absolute: ["腰背傷害伴神經症狀", "肩關節脫臼", "疑似骨折", "意識喪失", "嚴重肌肉拉傷"],
      relative: ["嚴重疼痛影響動作", "關節不穩定", "無法安全舉重"],
    },
    transfer: {
      immediate: ["神經症狀", "意識改變", "疑似骨折", "嚴重關節脫臼"],
      urgent: ["中重度肌肉拉傷", "需影像評估之傷害"],
      followUp: ["輕度拉傷/扭傷", "過度使用傷害"],
    },
  },

  // ──────────────────────────────────────
  // 17 跆拳道品勢與空手道型
  // ──────────────────────────────────────
  {
    id: "poomsae-kata",
    name: "跆拳道品勢與空手道型",
    nameEn: "Poomsae & Kata",
    category: "演練類",
    icon: "🥋",
    rules: {
      processingTime: "依裁判規範",
      entryRule: "多以安全確認與場邊處理為主",
      specialNote: "無對打接觸，傷害以過度使用為主；急性傷害較少",
    },
    injuries: {
      byType: [
        { type: "過度使用傷害", rate: "50–60%", description: "主要傷害類型" },
        { type: "拉傷", rate: "20–25%", description: "踢擊、跳躍動作" },
        { type: "扭傷", rate: "15–20%", description: "踝、膝關節" },
        { type: "急性傷害", rate: "少見", description: "跳躍落地不當" },
      ],
      byLocation: [
        { location: "骨盆/髖部", mechanism: "品勢最常見（36%），顯著高於對打" },
        { location: "踝關節", mechanism: "常見（27%）" },
        { location: "膝關節", mechanism: "常見" },
        { location: "腰背部", mechanism: "常見" },
        { location: "上肢", mechanism: "較少" },
      ],
    },
    assessment: {
      quickObservation: ["受傷時動作（踢擊、跳躍、旋轉）", "選手自主活動能力", "明顯外傷或異常姿勢"],
      targeted: [
        { area: "髖部", focus: "活動度、髖屈肌張力" },
        { area: "踝關節", focus: "Ottawa Rules、負重能力" },
        { area: "膝關節", focus: "穩定度、髕骨追蹤" },
        { area: "腰背", focus: "活動度、神經症狀" },
      ],
    },
    treatments: [
      {
        title: "髖部/骨盆傷害（品勢最常見）",
        items: [
          { condition: "髖屈肌拉傷", clinical: "抬腿痛、髖前方壓痛", treatment: "PEACE 原則、休息" },
          { condition: "髂脛束症候群", clinical: "髖外側痛", treatment: "伸展、泡棉滾筒" },
          { condition: "恥骨聯合炎", clinical: "恥骨壓痛", treatment: "休息、後續評估" },
          { condition: "髖關節夾擠 (FAI)", clinical: "屈髖+內旋痛、鼠蹊深層痛", treatment: "終止比賽、轉介評估" },
        ],
      },
      {
        title: "踝關節扭傷",
        items: [
          { condition: "Grade I", treatment: "冰敷、貼紮", canContinue: "可考慮" },
          { condition: "Grade II", treatment: "冰敷、彈繃", canContinue: "不建議" },
          { condition: "Grade III", treatment: "固定、後送", canContinue: "不可" },
        ],
      },
      {
        title: "大腿肌肉拉傷",
        items: [
          { condition: "腿旁肌", treatment: "冰敷、伸展、評估嚴重度" },
          { condition: "股四頭肌", treatment: "冰敷、休息" },
          { condition: "內收肌群", treatment: "冰敷、評估劈腿能力" },
        ],
      },
      {
        title: "抽筋",
        items: [
          { condition: "小腿", treatment: "踝背屈伸展" },
          { condition: "大腿", treatment: "適當伸展" },
          { condition: "足部", treatment: "腳趾伸展、按摩" },
        ],
      },
    ],
    noPlay: {
      absolute: ["疑似骨折", "嚴重肌肉拉傷", "嚴重踝扭傷", "神經症狀"],
      relative: ["中度拉傷/扭傷", "嚴重疼痛影響動作", "無法完成標準動作"],
    },
    transfer: {
      immediate: [],
      urgent: ["疑似骨折", "需影像評估之傷害", "嚴重軟組織傷害"],
      followUp: ["過度使用傷害", "輕中度拉傷/扭傷", "髖部慢性問題"],
    },
  },

  // ──────────────────────────────────────
  // 18 木球
  // ──────────────────────────────────────
  {
    id: "woodball",
    name: "木球",
    nameEn: "Woodball",
    category: "場地類",
    icon: "🏌️",
    rules: {
      processingTime: "依單項規則",
      entryRule: "著重快評估、快處置",
      specialNote: "不影響比賽節奏；戶外賽事注意環境因素（熱傷害、蚊蟲）",
    },
    injuries: {
      byType: [
        { type: "過度使用", description: "腰背、肩、腕（重複揮桿）" },
        { type: "扭傷", description: "踝關節（不平地面）" },
        { type: "拉傷", description: "背部、肩部（揮桿動作）" },
        { type: "擊球傷害", description: "手、腳（被球或球桿擊中）" },
      ],
      byLocation: [],
    },
    assessment: {
      quickObservation: ["選手意識狀態", "受傷部位", "環境相關症狀"],
      targeted: [
        { area: "熱傷害", focus: "體溫、意識、皮膚狀態" },
        { area: "肌肉骨骼傷害", focus: "壓痛、活動度、功能" },
        { area: "過敏反應", focus: "呼吸、皮膚、腫脹" },
      ],
    },
    treatments: [
      {
        title: "熱傷害",
        items: [
          { condition: "熱痙攣", clinical: "肌肉抽筋", treatment: "休息、電解質補充" },
          { condition: "熱衰竭", clinical: "頭暈、噁心、大量流汗", treatment: "陰涼處、補水、冷卻" },
          { condition: "熱中暑", clinical: "高體溫、意識改變", treatment: "積極冷卻、立即後送" },
        ],
      },
      {
        title: "腰背部傷害",
        items: [
          { condition: "肌肉疲勞", treatment: "休息、伸展" },
          { condition: "急性拉傷", treatment: "冰敷、限制活動" },
          { condition: "有神經症狀", treatment: "終止比賽、後送" },
        ],
      },
      {
        title: "被球或球桿擊中",
        items: [
          { condition: "頭部", treatment: "意識評估、SCAT6（如需）" },
          { condition: "手指", treatment: "冰敷、評估骨折" },
          { condition: "足部", treatment: "冰敷、評估骨折" },
        ],
      },
      {
        title: "蚊蟲叮咬/過敏",
        items: [
          { condition: "局部反應", treatment: "冰敷、止癢" },
          { condition: "廣泛蕁麻疹", treatment: "抗組織胺、監測" },
          { condition: "過敏性休克", treatment: "腎上腺素、緊急後送" },
        ],
      },
    ],
    noPlay: {
      absolute: ["熱中暑", "疑似骨折", "嚴重過敏反應", "意識改變"],
      relative: ["熱衰竭未緩解", "嚴重疼痛", "中度扭傷/拉傷"],
    },
    transfer: {
      immediate: ["熱中暑", "過敏性休克", "意識改變"],
      urgent: ["疑似骨折", "嚴重脫水"],
      followUp: ["輕度熱傷害", "過度使用傷害", "輕度扭傷/拉傷"],
    },
  },
];

// 分類色彩對照
export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  技擊類: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  球拍類: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  精準類: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  水上類: { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  場地類: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  重量類: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  體操類: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  田徑類: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  演練類: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
};

export const allCategories = [
  "技擊類",
  "球拍類",
  "精準類",
  "水上類",
  "場地類",
  "重量類",
  "體操類",
  "田徑類",
  "演練類",
] as const;
