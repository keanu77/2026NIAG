"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav-items";

export function CourseMobileNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
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
