export type SportRuleGroup = {
  group: string;
  sports: { name: string; time: string; note: string }[];
};

export const sportsRuleGroups: SportRuleGroup[] = [
  {
    group: "技擊類｜大會醫師限定／優先處置限制",
    sports: [
      { name: "跆拳道對打", time: "1 分鐘，可延長 +1 分鐘", note: "一律依主審指示進場，限定大會醫師判定是否可續賽。" },
      { name: "柔道", time: "1 分鐘", note: "僅可做允許之外傷處理，須事先熟悉可進場人數與可做處置。" },
      { name: "角力", time: "2 分鐘", note: "注意裁判手勢、口令與可否離開墊面處置。" },
      { name: "拳擊", time: "依拳台規範", note: "由拳台醫師主導頭部與臉部傷害判定。" },
      { name: "空手道", time: "3 分鐘", note: "熟悉失格與不可處置項目。" },
    ],
  },
  {
    group: "有傷停處置時間",
    sports: [
      { name: "羽球／網球／軟網／桌球", time: "依單項規則", note: "需在規定傷停時間內完成評估與處置。" },
      { name: "木球／射箭／擊劍／自由車場地賽", time: "依單項規則", note: "著重快評估、快處置與不影響比賽節奏。" },
    ],
  },
  {
    group: "無傷停處置時間",
    sports: [
      { name: "田徑／競技體操／韻律體操／射擊／舉重", time: "依裁判及場地規範", note: "通常需判斷是否繼續或放棄。" },
      { name: "跆拳道品勢／空手道型", time: "依裁判規範", note: "多以安全確認與場邊處理為主。" },
    ],
  },
  {
    group: "水上類｜水上優先交給專業",
    sports: [
      { name: "游泳", time: "緊急時由水域專業先進場", note: "貼布限制須依規定，不得任意貼紮。" },
      { name: "划船／輕艇", time: "依水域安全流程", note: "優先由水上專業救援處理，再由醫護接手。" },
    ],
  },
];

export const sportSupportChecklist = [
  "熟悉 EAP 與後送路線。",
  "確認是否需協助過磅、體檢。",
  "確認上場時機：被動或主動。",
  "熟悉裁判手勢／口令。",
  "知道傷停時間與可進場人數。",
  "知道哪些處置可能導致選手失格。",
];
