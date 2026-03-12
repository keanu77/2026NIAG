"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav-items";

export function CourseSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen border-r border-slate-200 bg-white/90 p-5 backdrop-blur lg:block">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-700 p-5 text-white shadow-soft">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white/90">
          <Activity className="h-4 w-4" /> 全大運醫護支援課程
        </div>
        <div className="text-xl font-bold leading-snug">
          全大運賽事醫護支援需知 v1.1
        </div>
        <p className="mt-2 text-sm text-white/85">
          給賽事支援醫護人員與場邊防護員的互動網站
        </p>
      </div>

      <nav className="mt-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                active
                  ? "bg-teal-50 text-teal-800"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
