"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";
import { sportSupportChecklist, sportsRuleGroups } from "@/data/sports-rules";

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
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

export default function SportsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
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
        <SectionTitle eyebrow="Sport-specific Rules" title="單項競賽規則" desc="不同競賽的進場時機、處置時間與人員限制都不同。" />
        <div className="card p-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋：跆拳道、游泳、角力、傷停..."
            aria-label="搜尋競賽項目"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          />
        </div>
        <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {filtered.map((group) => (
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
          <div className="card p-6 h-fit">
            <h2 className="text-xl font-bold">技擊類支援注意事項</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {sportSupportChecklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
