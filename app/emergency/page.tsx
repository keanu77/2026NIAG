import type { Metadata } from "next";
import { Brain, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { EmergencyGrid } from "@/components/emergency-grid";
import { ReturnToPlayCard } from "@/components/return-to-play-card";
import { ScenarioQuiz } from "@/components/scenario-quiz";
import { SectionTitle } from "@/components/section-title";
import { EmergencyQuickActions } from "@/components/emergency-quick-actions";
import { EmergencyDecisionTree, defaultTrees } from "@/components/emergency-decision-tree";
import { ChapterNav } from "@/components/chapter-nav";
import {
  emergencyCategories,
  headInjuryFlow,
  returnToPlayPrinciples,
  scenarioQuestions,
} from "@/data/emergency";

export const metadata: Metadata = { title: "場邊急症處理" };

export default function EmergencyPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <section className="rounded-[28px] bg-gradient-to-br from-slate-900 via-rose-950 to-orange-700 p-8 text-white md:p-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium">v1.1 升級模組</div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">場邊急症處理 × 快速決策</h1>
            <p className="text-sm leading-7 text-white/85 md:text-base">
              這一版新增手機版快速查詢、四種高風險情境 decision tree，以及頭部創傷分流流程，讓第二份 PDF 的內容能更像真正的場邊工具。
            </p>
          </div>
        </section>

        <SectionTitle eyebrow="Emergency Management" title="場邊急症處理" desc="整合第二份 PDF 的核心內容：倫理、回場原則、六大類急症、頭部外傷分流與情境測驗。" />

        <EmergencyQuickActions />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="card p-6">
            <h2 className="text-xl font-bold">場邊處理倫理義務</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>回場判斷可能受到教練、球迷、選手與團隊壓力影響。</li>
              <li>場邊決策要以運動員福祉為優先。</li>
              <li>需盡可能保護隱私，必要時可請隊員圍圈遮擋視線。</li>
            </ul>
          </div>
          <ReturnToPlayCard principles={returnToPlayPrinciples} />
        </div>

        <section className="space-y-4">
          <SectionTitle eyebrow="Decision Support" title="高風險情境快速流程" desc="適合場邊先用來建立第一反應，再進一步搭配完整醫療評估。" />
          <EmergencyDecisionTree trees={defaultTrees} />
        </section>

        <EmergencyGrid items={emergencyCategories} />

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Brain className="h-4 w-4" /> Head Injury Flow
            </div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">頭部創傷分流</h2>
            <div className="mt-5 space-y-4">
              {headInjuryFlow.map((item) => (
                <div key={item.level} className="rounded-3xl border border-slate-200 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{item.level}</h3>
                    <div className={`rounded-full px-3 py-1 text-xs font-semibold ${item.disposition.includes("立即") ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-900"}`}>
                      {item.disposition}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {item.steps.map((step) => (
                      <div key={step} className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                        <ChevronRight className="mt-0.5 h-4 w-4 text-slate-400" /> {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-900">技擊類支援提醒</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                {["先熟悉 EAP 與裁判手勢／口令。", "確認可上場處理的人數與傷停時間。", "不確定規則時，先向裁判長確認。", "注意某些處置可能導致選手失格。"].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4">{item}</div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-900">閉館前工作</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                {["清點醫療資源並回報需求", "彙整醫療紀錄與建議事項", "確認已無選手在比賽及練習", "完成簽退"].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">情境測驗</h2>
          <ScenarioQuiz questions={scenarioQuestions} />
        </section>

        <ChapterNav />
      </div>
    </PageShell>
  );
}
