"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Shield,
  Skull,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";
import {
  caseStudies,
  bestPractices,
  allSportCategories,
  type CaseStudy,
} from "@/data/cases";

/* ── outcome helpers ─────────────────────────── */

const outcomeMeta: Record<
  CaseStudy["outcome"],
  { label: string; bg: string; text: string; icon: typeof CheckCircle2 }
> = {
  存活: {
    label: "存活",
    bg: "bg-emerald-100",
    text: "text-emerald-800",
    icon: CheckCircle2,
  },
  死亡: {
    label: "死亡",
    bg: "bg-rose-100",
    text: "text-rose-800",
    icon: Skull,
  },
  大量傷患: {
    label: "大量傷患",
    bg: "bg-amber-100",
    text: "text-amber-900",
    icon: Users,
  },
};

/* ── CaseCard ────────────────────────────────── */

function CaseCard({ c }: { c: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const meta = outcomeMeta[c.outcome];
  const Icon = meta.icon;

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 p-5 text-left transition hover:bg-slate-50"
      >
        {/* outcome icon */}
        <div
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${meta.bg}`}
        >
          <Icon className={`h-4 w-4 ${meta.text}`} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${meta.bg} ${meta.text}`}
            >
              {meta.label}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
              {c.sportCategory}
            </span>
            <span className="text-xs text-slate-400">{c.date}</span>
          </div>
          <h3 className="mt-1 font-bold text-slate-900">{c.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{c.summary}</p>
        </div>

        {open ? (
          <ChevronUp className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
        ) : (
          <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
        )}
      </button>

      {open && (
        <div className="space-y-4 border-t border-slate-100 p-5">
          <div>
            <p className="text-xs font-semibold text-slate-500">地點</p>
            <p className="mt-0.5 text-sm text-slate-700">{c.location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">賽事</p>
            <p className="mt-0.5 text-sm text-slate-700">{c.sport}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-700">處置過程</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {c.treatment}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-700">教訓與影響</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {c.lesson}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.keyFactors.map((f) => (
              <span
                key={f}
                className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Stat cards ───────────────────────────────── */

function StatCards() {
  const survived = caseStudies.filter((c) => c.outcome === "存活").length;
  const fatal = caseStudies.filter((c) => c.outcome === "死亡").length;
  const mci = caseStudies.filter((c) => c.outcome === "大量傷患").length;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="card p-4 text-center">
        <p className="text-2xl font-bold text-slate-900">
          {caseStudies.length}
        </p>
        <p className="mt-1 text-xs text-slate-500">經典案例</p>
      </div>
      <div className="card p-4 text-center">
        <p className="text-2xl font-bold text-emerald-600">{survived}</p>
        <p className="mt-1 text-xs text-slate-500">成功救回</p>
      </div>
      <div className="card p-4 text-center">
        <p className="text-2xl font-bold text-rose-600">{fatal}</p>
        <p className="mt-1 text-xs text-slate-500">不幸死亡</p>
      </div>
      <div className="card p-4 text-center">
        <p className="text-2xl font-bold text-amber-600">{mci}</p>
        <p className="mt-1 text-xs text-slate-500">大量傷患</p>
      </div>
    </div>
  );
}

/* ── Main Page ────────────────────────────────── */

export default function CasesPage() {
  const [query, setQuery] = useState("");
  const [sportFilter, setSportFilter] = useState<string>("all");
  const [outcomeFilter, setOutcomeFilter] = useState<string>("all");

  const filtered = caseStudies.filter((c) => {
    if (sportFilter !== "all" && c.sportCategory !== sportFilter) return false;
    if (outcomeFilter !== "all" && c.outcome !== outcomeFilter) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      const text = [
        c.title,
        c.summary,
        c.treatment,
        c.lesson,
        c.sport,
        c.location,
        ...c.keyFactors,
      ]
        .join(" ")
        .toLowerCase();
      if (!text.includes(q)) return false;
    }
    return true;
  });

  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle
          eyebrow="Case Studies"
          title="相關案例"
          desc="22 件國際運動賽場經典醫療事件回顧，涵蓋足球、美式足球、冰球、賽車、拳擊、板球與路跑，從成功救援與遺憾案例中汲取教訓。"
        />

        <StatCards />

        {/* Search & Filters */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋案例…"
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <select
              value={sportFilter}
              onChange={(e) => setSportFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-400"
            >
              <option value="all">全部運動</option>
              {allSportCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={outcomeFilter}
              onChange={(e) => setOutcomeFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-400"
            >
              <option value="all">全部結果</option>
              <option value="存活">存活</option>
              <option value="死亡">死亡</option>
              <option value="大量傷患">大量傷患</option>
            </select>
          </div>
        </div>

        {/* Case list */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-slate-400">
              找不到符合條件的案例
            </p>
          )}
          {filtered.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>

        {/* Best Practices */}
        <section className="space-y-6">
          <SectionTitle
            eyebrow="Best Practices"
            title="最佳實務建議"
            desc="從 22 件案例歸納出的場邊醫療核心建議。"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Immediate */}
            <div className="card p-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  即時應變建議
                </h3>
              </div>
              <div className="mt-4 space-y-3">
                {bestPractices.immediate.map((bp) => (
                  <div
                    key={bp.title}
                    className="rounded-2xl bg-amber-50 p-4"
                  >
                    <p className="text-sm font-semibold text-amber-900">
                      {bp.title}
                    </p>
                    <p className="mt-1 text-sm text-amber-800">{bp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Long-term */}
            <div className="card p-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  長期制度建議
                </h3>
              </div>
              <div className="mt-4 space-y-3">
                {bestPractices.longTerm.map((bp) => (
                  <div
                    key={bp.title}
                    className="rounded-2xl bg-teal-50 p-4"
                  >
                    <p className="text-sm font-semibold text-teal-800">
                      {bp.title}
                    </p>
                    <p className="mt-1 text-sm text-teal-700">{bp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ChapterNav />
      </div>
    </PageShell>
  );
}
