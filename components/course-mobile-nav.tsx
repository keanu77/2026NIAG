"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav-items";

export function CourseMobileNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-700 p-4 text-white shadow-soft">
        <div className="mb-1 flex items-center gap-2 text-sm font-medium text-white/90">
          <Activity className="h-4 w-4" /> 全大運醫護支援課程 v1.1
        </div>
        <p className="text-sm text-white/85">手機版快速導覽與場邊查詢</p>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-w-fit items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition",
                active
                  ? "border-teal-200 bg-teal-50 text-teal-800"
                  : "border-slate-200 bg-white text-slate-600",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.shortLabel}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
