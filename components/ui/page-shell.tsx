import { ReactNode } from "react";
import { CourseSidebar } from "@/components/course-sidebar";
import { CourseMobileNav } from "@/components/course-mobile-nav";
import { BackToTop } from "@/components/back-to-top";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[280px_1fr]">
      <CourseSidebar />
      <main id="main-content" className="p-5 md:p-8">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          跳至主要內容
        </a>
        <CourseMobileNav />
        <div className="mt-6 lg:mt-0">{children}</div>
      </main>
      <BackToTop />
    </div>
  );
}
