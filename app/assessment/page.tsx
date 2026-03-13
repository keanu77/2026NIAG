"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Search,
  Stethoscope,
} from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";
import {
  assessmentTools,
  toolQuickReference,
  type ToolSection,
} from "@/data/assessment-tools";

function ToolCard({ section }: { section: ToolSection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 p-5 text-left transition hover:bg-slate-50"
      >
        <Stethoscope className="h-5 w-5 shrink-0 text-teal-600" />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-slate-900">{section.title}</h3>
          {section.subtitle && (
            <p className="mt-0.5 text-sm text-slate-500">{section.subtitle}</p>
          )}
        </div>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-slate-400" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
        )}
      </button>

      {open && (
        <div className="space-y-4 border-t border-slate-100 p-5">
          {section.warning && (
            <div className="flex items-start gap-2 rounded-2xl bg-amber-50 p-4 text-sm text-amber-800">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="font-medium">{section.warning}</span>
            </div>
          )}

          {section.description && (
            <p className="text-sm leading-relaxed text-slate-600">
              {section.description}
            </p>
          )}

          {section.lists?.map((list) => (
            <div key={list.title}>
              <h4 className="mb-2 text-sm font-semibold text-slate-800">
                {list.title}
              </h4>
              {list.style === "numbered" ||
              (list as { numbered?: boolean }).numbered ? (
                <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-700">
                  {list.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : (
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {list.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {section.tables?.map((table) => (
            <div key={table.caption ?? table.headers.join("-")} className="overflow-x-auto">
              {table.caption && (
                <h4 className="mb-2 text-sm font-semibold text-slate-800">
                  {table.caption}
                </h4>
              )}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {table.headers.map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2 text-left font-semibold text-slate-700"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-b border-slate-100 last:border-0"
                    >
                      {row.cells.map((cell, ci) => (
                        <td key={ci} className="px-3 py-2 text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          {section.notes && (
            <div className="rounded-2xl bg-teal-50 p-4">
              <p className="mb-1 text-xs font-semibold text-teal-700">備註</p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-teal-800">
                {section.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AssessmentPage() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? assessmentTools.filter((s) => {
        const q = query.toLowerCase();
        const text = [
          s.title,
          s.subtitle ?? "",
          s.description ?? "",
          s.warning ?? "",
          ...(s.notes ?? []),
          ...(s.lists?.flatMap((l) => [l.title, ...l.items]) ?? []),
          ...(s.tables?.flatMap((t) => [
            t.caption ?? "",
            ...t.headers,
            ...t.rows.flatMap((r) => r.cells),
          ]) ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return text.includes(q);
      })
    : assessmentTools;

  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle
          eyebrow="Assessment Tools"
          title="評估工具"
          desc="場邊常用評估工具彙整，包含急救評估、腦震盪、熱傷害、骨折判定與返場決策。"
        />

        {/* Quick Reference */}
        <section className="mt-6 overflow-x-auto">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            快速參考總覽
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  工具
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  適用情境
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  關鍵決策
                </th>
              </tr>
            </thead>
            <tbody>
              {toolQuickReference.map((item) => (
                <tr
                  key={item.tool}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-3 py-2 font-medium text-teal-700">
                    {item.tool}
                  </td>
                  <td className="px-3 py-2 text-slate-700">{item.use}</td>
                  <td className="px-3 py-2 text-slate-700">
                    {item.keyDecision}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Search */}
        <div className="relative mt-8">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋評估工具…"
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        {/* Tool Cards */}
        <div className="mt-6 space-y-4">
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-400">
              找不到符合「{query}」的工具
            </p>
          )}
          {filtered.map((section) => (
            <ToolCard key={section.id} section={section} />
          ))}
        </div>

        <ChapterNav />
      </div>
    </PageShell>
  );
}
