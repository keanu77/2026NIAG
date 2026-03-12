import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";

export const metadata: Metadata = { title: "紀錄與回報" };

const forms = [
  ["簽到退單", "必填"],
  ["賽前準備工作檢核表", "必填"],
  ["各類所得領取簽收單", "必填"],
  ["醫藥衛材及基本物品檢核表", "必填"],
  ["醫療防護紀錄單", "備用"],
  ["運動防護與處理記錄表", "備用"],
  ["SCAT-6 腦震盪評估表", "備用"],
];

export default function RecordsPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle eyebrow="Records" title="紀錄與回報" desc="線上填報為主，紙本紀錄為備援。" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold">必備表單</h2>
            <div className="mt-4 space-y-3">
              {forms.map(([name, tag]) => (
                <div key={name} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 text-sm">
                  <span>{name}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold">填報提醒</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>登入醫療管理系統後，進入傷病資訊登錄。</li>
              <li>若有用藥，必須明確填寫藥名。</li>
              <li>後送事件要同步通報主任、醫護組與必要窗口。</li>
              <li>醫療廢棄物須依規定回收與帶回處理。</li>
              <li>所有工作人員皆需完成簽到與簽退。</li>
            </ul>
          </div>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
