"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";
import { sportSupportChecklist, sportsRuleGroups } from "@/data/sports-rules";
import {
  sportsDetails,
  categoryColors,
  allCategories,
  type SportDetail,
  type TreatmentGroup,
} from "@/data/sports-detail";

/* ───── Highlight 搜尋關鍵字 ───── */
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="rounded bg-yellow-200 px-0.5">{part}</mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

/* ───── 分類標籤 ───── */
function CategoryBadge({ category }: { category: string }) {
  const c = categoryColors[category] ?? { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" };
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${c.bg} ${c.text} ${c.border}`}>
      {category}
    </span>
  );
}

/* ───── 處置表格 ───── */
function TreatmentTable({ group }: { group: TreatmentGroup }) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-bold text-slate-800">{group.title}</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="pb-2 pr-3 font-medium text-slate-500">情況</th>
              {group.items.some((i) => i.clinical) && (
                <th className="pb-2 pr-3 font-medium text-slate-500">臨床特徵</th>
              )}
              <th className="pb-2 pr-3 font-medium text-slate-500">處置</th>
              {group.items.some((i) => i.canContinue) && (
                <th className="pb-2 font-medium text-slate-500">續賽</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {group.items.map((item, i) => (
              <tr key={i}>
                <td className="py-2 pr-3 font-medium text-slate-700">{item.condition}</td>
                {group.items.some((i) => i.clinical) && (
                  <td className="py-2 pr-3 text-slate-600">{item.clinical ?? "—"}</td>
                )}
                <td className="py-2 pr-3 text-slate-600">{item.treatment}</td>
                {group.items.some((i) => i.canContinue) && (
                  <td className="py-2">
                    {item.canContinue ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          item.canContinue.includes("不可") || item.canContinue.includes("不建議") || item.canContinue.includes("不續賽")
                            ? "bg-red-50 text-red-700"
                            : item.canContinue.includes("可考慮") || item.canContinue === "可"
                              ? "bg-green-50 text-green-700"
                              : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {item.canContinue}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ───── 展開式運動卡片 ───── */
function SportCard({ sport, query }: { sport: SportDetail; query: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden">
      {/* 摘要列 */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-slate-50"
        aria-expanded={open}
      >
        <span className="text-2xl">{sport.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900">
              <Highlight text={sport.name} query={query} />
            </h3>
            <CategoryBadge category={sport.category} />
          </div>
          <p className="mt-1 text-xs text-slate-500">{sport.nameEn}</p>
          <p className="mt-1 text-sm text-teal-700">
            處理時間：<Highlight text={sport.rules.processingTime} query={query} />
          </p>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 展開內容 */}
      {open && (
        <div className="space-y-6 border-t border-slate-100 px-5 pb-6 pt-4">
          {/* 比賽規則 */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">1</span>
              比賽規則摘要
            </h3>
            <div className="grid gap-2 text-sm sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">處理時間</p>
                <p className="mt-1 font-medium text-slate-800">{sport.rules.processingTime}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">進場規定</p>
                <p className="mt-1 font-medium text-slate-800">{sport.rules.entryRule}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">特殊注意</p>
                <p className="mt-1 font-medium text-slate-800">{sport.rules.specialNote}</p>
              </div>
            </div>
          </section>

          {/* 常見傷害 */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">2</span>
              常見傷害
            </h3>
            {sport.injuries.byType.length > 0 && (
              <div className="mb-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">依傷害類型</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-left">
                        <th className="pb-2 pr-3 font-medium text-slate-500">類型</th>
                        {sport.injuries.byType.some((i) => i.rate) && (
                          <th className="pb-2 pr-3 font-medium text-slate-500">發生率</th>
                        )}
                        <th className="pb-2 font-medium text-slate-500">說明</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sport.injuries.byType.map((inj, i) => (
                        <tr key={i}>
                          <td className="py-1.5 pr-3 font-medium text-slate-700">{inj.type}</td>
                          {sport.injuries.byType.some((i) => i.rate) && (
                            <td className="py-1.5 pr-3 text-teal-700">{inj.rate ?? "—"}</td>
                          )}
                          <td className="py-1.5 text-slate-600">{inj.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {sport.injuries.byLocation.length > 0 && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">依受傷部位</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-left">
                        <th className="pb-2 pr-3 font-medium text-slate-500">部位</th>
                        {sport.injuries.byLocation.some((i) => i.rate) && (
                          <th className="pb-2 pr-3 font-medium text-slate-500">發生率</th>
                        )}
                        <th className="pb-2 font-medium text-slate-500">常見機轉</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sport.injuries.byLocation.map((inj, i) => (
                        <tr key={i}>
                          <td className="py-1.5 pr-3 font-medium text-slate-700">{inj.location}</td>
                          {sport.injuries.byLocation.some((i) => i.rate) && (
                            <td className="py-1.5 pr-3 text-teal-700">{inj.rate ?? "—"}</td>
                          )}
                          <td className="py-1.5 text-slate-600">{inj.mechanism}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>

          {/* 現場評估 */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">3</span>
              現場快速評估
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="mb-2 text-xs font-semibold text-slate-500">快速觀察</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  {sport.assessment.quickObservation.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="mb-2 text-xs font-semibold text-slate-500">針對性評估</p>
                <div className="space-y-1 text-sm">
                  {sport.assessment.targeted.map((item, i) => (
                    <div key={i}>
                      <span className="font-medium text-slate-700">{item.area}：</span>
                      <span className="text-slate-600">{item.focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 處置建議 */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">4</span>
              常見傷害處置建議
            </h3>
            <div className="space-y-4">
              {sport.treatments.map((group, i) => (
                <TreatmentTable key={i} group={group} />
              ))}
            </div>
          </section>

          {/* 不可續賽 */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs text-red-700">!</span>
              不可續賽的情況
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                <p className="mb-2 text-xs font-bold text-red-700">絕對禁止續賽</p>
                <ul className="space-y-1 text-sm text-red-800">
                  {sport.noPlay.absolute.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5">&#10005;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                <p className="mb-2 text-xs font-bold text-amber-700">相對禁止續賽</p>
                <ul className="space-y-1 text-sm text-amber-800">
                  {sport.noPlay.relative.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5">&#9888;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 轉送標準 */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">5</span>
              轉送標準
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {sport.transfer.immediate.length > 0 && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                  <p className="mb-2 text-xs font-bold text-red-700">立即後送</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {sport.transfer.immediate.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {sport.transfer.urgent.length > 0 && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                  <p className="mb-2 text-xs font-bold text-amber-700">儘速就醫</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {sport.transfer.urgent.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {sport.transfer.followUp.length > 0 && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-3">
                  <p className="mb-2 text-xs font-bold text-green-700">門診追蹤</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {sport.transfer.followUp.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

/* ───── 主頁面 ───── */
export default function SportsPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"detail" | "summary">("detail");

  const filtered = useMemo(() => {
    let result = sportsDetails;
    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((s) => {
        const searchable = [
          s.name,
          s.nameEn,
          s.category,
          s.rules.processingTime,
          s.rules.entryRule,
          s.rules.specialNote,
          ...s.injuries.byType.map((i) => `${i.type} ${i.description}`),
          ...s.injuries.byLocation.map((i) => `${i.location} ${i.mechanism}`),
          ...s.treatments.flatMap((t) => [t.title, ...t.items.map((i) => `${i.condition} ${i.treatment}`)]),
          ...s.noPlay.absolute,
          ...s.noPlay.relative,
        ].join(" ").toLowerCase();
        return searchable.includes(q);
      });
    }
    return result;
  }, [query, selectedCategory]);

  const filteredSummary = useMemo(() => {
    if (!query.trim()) return sportsRuleGroups;
    return sportsRuleGroups
      .map((group) => ({
        ...group,
        sports: group.sports.filter((item) => `${group.group} ${item.name} ${item.note}`.includes(query)),
      }))
      .filter((group) => group.sports.length > 0);
  }, [query]);

  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle
          eyebrow="Sport-specific Medical Protocols"
          title="單項競賽醫護手冊"
          desc="19 項競賽的進場時機、常見傷害、處置建議與轉送標準。點擊各運動項目查看詳細內容。"
        />

        {/* 搜尋 + 篩選 */}
        <div className="card space-y-4 p-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋：跆拳道、踝扭傷、腦震盪、熱中暑..."
            aria-label="搜尋競賽項目或傷害"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                !selectedCategory
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              全部 ({sportsDetails.length})
            </button>
            {allCategories.map((cat) => {
              const count = sportsDetails.filter((s) => s.category === cat).length;
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(active ? null : cat)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    active
                      ? "border-teal-600 bg-teal-600 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
          {/* 切換模式 */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("detail")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "detail" ? "bg-teal-100 text-teal-800" : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              詳細模式
            </button>
            <button
              onClick={() => setViewMode("summary")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "summary" ? "bg-teal-100 text-teal-800" : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              摘要模式
            </button>
          </div>
        </div>

        {viewMode === "detail" ? (
          /* 詳細模式 */
          <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {filtered.length === 0 && (
                <div className="card p-8 text-center text-sm text-slate-500">
                  找不到符合的項目，請嘗試其他關鍵字
                </div>
              )}
              {filtered.map((sport) => (
                <SportCard key={sport.id} sport={sport} query={query} />
              ))}
            </div>
            <div className="space-y-6">
              <div className="card sticky top-24 p-5">
                <h2 className="text-lg font-bold text-slate-900">支援注意事項</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {sportSupportChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card sticky top-[420px] p-5">
                <h2 className="text-lg font-bold text-slate-900">快速統計</h2>
                <div className="mt-3 space-y-2 text-sm">
                  <p className="text-slate-600">
                    共 <span className="font-bold text-teal-700">{sportsDetails.length}</span> 項運動
                  </p>
                  <p className="text-slate-600">
                    目前顯示 <span className="font-bold text-teal-700">{filtered.length}</span> 項
                  </p>
                  {selectedCategory && (
                    <p className="text-slate-600">
                      篩選：<span className="font-bold text-teal-700">{selectedCategory}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 摘要模式（保留原始簡潔視圖） */
          <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              {filteredSummary.map((group) => (
                <section key={group.group} className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">
                    <Highlight text={group.group} query={query} />
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {group.sports.map((sport) => (
                      <div key={sport.name} className="card p-5">
                        <h3 className="text-lg font-semibold">
                          <Highlight text={sport.name} query={query} />
                        </h3>
                        <p className="mt-2 text-sm font-medium text-teal-700">處理時間：{sport.time}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          <Highlight text={sport.note} query={query} />
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="card h-fit p-6">
              <h2 className="text-xl font-bold">技擊類支援注意事項</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {sportSupportChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <ChapterNav />
      </div>
    </PageShell>
  );
}
