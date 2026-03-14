export const returnToPlayPrinciples = [
  "回場前要做出診斷，排除重大四肢、脊椎或內臟傷害。",
  "若回場會顯著增加惡化或長期風險，不宜回場。",
  "若惡化或長期風險輕微至中等，需先讓運動員充分了解並接受。",
  "運動員重返賽場時應能達到接近受傷前表現。",
  "遵守流血規則，持續出血者須離場處理。",
];

export const emergencyCategories = [
  {
    id: "cardio",
    title: "心血管急症",
    items: [
      {
        name: "Commotio Cordis / 心因性猝死",
        history: ["胸部在 T 波高峰前受到撞擊", "可能完全無前兆"],
        exam: ["無脈搏", "呼吸暫停"],
        action: ["啟動 EAP", "立即 CPR", "使用 AED", "轉送急診"],
      },
    ],
  },
  {
    id: "resp",
    title: "呼吸道急症",
    items: [
      {
        name: "Asthma / 哮喘",
        history: ["可能出現呼吸短促"],
        exam: ["喘鳴 wheezing"],
        action: ["使用 Salbutamol 等藥物", "依個人耐受度決定是否可續賽"],
      },
      {
        name: "Pneumothorax / 氣胸",
        history: ["自發性呼吸困難", "鈍傷合併呼吸困難"],
        exam: ["呼吸音減弱"],
        action: ["提供氧氣", "轉送急診"],
      },
      {
        name: "Tension Pneumothorax / 張力性氣胸",
        history: ["自發性或外傷後呼吸困難"],
        exam: ["呼吸音減弱", "靜脈怒張", "氣管偏移"],
        action: ["極端情況下針刺減壓", "立即轉送急診"],
      },
    ],
  },
  {
    id: "heat",
    title: "熱傷害",
    items: [
      {
        name: "Cramp / 抽筋",
        history: ["熱濕環境中運動"],
        exam: ["肌肉痙攣"],
        action: ["伸展", "冰敷", "補充水分", "補充電解質"],
      },
      {
        name: "Heat Exhaustion / 熱衰竭",
        history: ["熱濕環境中運動"],
        exam: ["虛弱", "疲勞", "噁心", "意識正常"],
        action: ["離開高溫環境", "移除衣物", "補充水分"],
      },
      {
        name: "Heat Stroke / 熱中暑",
        history: ["熱濕環境中運動"],
        exam: ["意識改變", "神經系統異常"],
        action: ["迅速降溫", "冰水浴", "保持涼爽通風", "安排轉送"],
      },
    ],
  },
  {
    id: "env",
    title: "環境急症",
    items: [
      {
        name: "Anaphylaxis / 過敏性休克",
        history: ["可能無前兆"],
        exam: ["呼吸急促", "腫脹", "心跳加速", "低血壓"],
        action: ["Albuterol", "抗組織胺", "Epi-pen", "轉送急診"],
      },
      {
        name: "Lightning / 雷擊",
        history: ["可能無前兆"],
        exam: ["無固定發現"],
        action: ["立即 CPR", "遵循 30:30 原則停止戶外活動"],
      },
    ],
  },
  {
    id: "msk",
    title: "骨骼肌肉急症",
    items: [
      {
        name: "閉鎖性骨折",
        history: ["跌倒或鈍傷"],
        exam: ["骨壓痛", "支點測試", "明顯變形"],
        action: ["軸向牽引", "夾板固定"],
      },
      {
        name: "開放性骨折",
        history: ["跌倒或鈍傷"],
        exam: ["骨變形", "撕裂傷"],
        action: ["軸向牽引", "濕紗布覆蓋傷口", "夾板固定於脈搏最佳處"],
      },
      {
        name: "肩／肘／髖／膝關節脫臼",
        history: ["跌倒、扭轉或撞擊"],
        exam: ["變形", "疼痛", "需檢查神經血管功能"],
        action: ["專業人員單次復位或固定", "必要時緊急轉送"],
      },
    ],
  },
  {
    id: "head",
    title: "頭部損傷",
    items: [
      {
        name: "頭部創傷（無喪失意識）",
        history: ["頭部外傷但無 LOC"],
        exam: ["ABCDE", "頸部檢查", "神經系統檢查", "GCS"],
        action: ["當天不可回場", "保持環境安靜", "重新評估與觀察"],
      },
      {
        name: "頭部創傷（短暫喪失意識）",
        history: ["短暫 LOC 但可活動"],
        exam: ["顱底骨折徵象", "Raccoon eyes", "Battle sign", "耳漏鼻漏"],
        action: ["當天不可回場", "觀察與再評估"],
      },
      {
        name: "頭部創傷（長時間或持續失去意識）",
        history: ["長時間 LOC 或持續昏迷"],
        exam: ["固定頸椎", "移除口腔護具", "移除面罩", "保留頭盔"],
        action: ["立即轉送急診", "預先與急診電話交班"],
      },
    ],
  },
];

export const headInjuryFlow = [
  {
    level: "無喪失意識",
    disposition: "當天不可回場",
    steps: ["ABCDE", "頸部檢查", "GCS / 神經系統檢查", "安靜環境下重新觀察"],
  },
  {
    level: "短暫喪失意識",
    disposition: "當天不可回場",
    steps: ["ABCDE", "注意顱底骨折徵象", "再次評估", "必要時升級後送"],
  },
  {
    level: "長時間或持續失去意識",
    disposition: "立即轉送急診",
    steps: ["固定頸椎", "移除口腔護具", "移除面罩", "保留頭盔並電話交班"],
  },
];
