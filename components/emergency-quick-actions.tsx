import Link from "next/link";
import { AlertTriangle, Flame, HeartPulse, ShieldAlert, Wind } from "lucide-react";

const quickActions = [
  {
    title: "熱中暑先降溫",
    desc: "意識改變 + 高溫環境，先快速降溫，再安排轉送。",
    icon: Flame,
    tone: "bg-rose-50 text-rose-900 border-rose-200",
  },
  {
    title: "胸口撞擊先 CPR/AED",
    desc: "疑似 Commotio Cordis，立即啟動 EAP、CPR 與 AED。",
    icon: HeartPulse,
    tone: "bg-amber-50 text-amber-950 border-amber-200",
  },
  {
    title: "頭部創傷當天不回場",
    desc: "無論短暫或明顯 LOC，優先 ABCDE、觀察或後送。",
    icon: ShieldAlert,
    tone: "bg-violet-50 text-violet-900 border-violet-200",
  },
  {
    title: "張力性氣胸辨識",
    desc: "呼吸音減弱、靜脈怒張、氣管偏移，需立即升級處理。",
    icon: Wind,
    tone: "bg-cyan-50 text-cyan-900 border-cyan-200",
  },
];

export function EmergencyQuickActions() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
        <AlertTriangle className="h-4 w-4" /> 手機版快速查詢
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className={`rounded-3xl border p-5 ${item.tone}`}>
              <Icon className="h-5 w-5" />
              <h3 className="mt-3 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        建議將本頁加入手機主畫面，作為場邊查詢用的 quick reference。
      </div>
    </section>
  );
}
