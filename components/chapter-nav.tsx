"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { navItems } from "@/data/nav-items";

export function ChapterNav() {
  const pathname = usePathname();
  const idx = navItems.findIndex((item) => item.href === pathname);
  if (idx < 0) return null;

  const prev = idx > 0 ? navItems[idx - 1] : null;
  const next = idx < navItems.length - 1 ? navItems[idx + 1] : null;

  return (
    <nav aria-label="章節導覽" className="mt-12 flex items-stretch gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <ChevronLeft className="h-4 w-4 shrink-0 text-slate-400" />
          <div>
            <div className="text-xs text-slate-400">上一章</div>
            <div className="mt-0.5">{prev.label}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex flex-1 items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <div>
            <div className="text-xs text-slate-400">下一章</div>
            <div className="mt-0.5">{next.label}</div>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
