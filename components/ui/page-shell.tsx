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
        <footer className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>
            <a
              href="https://blog.sportsmedicine.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline decoration-teal-300 underline-offset-2 hover:text-teal-900"
            >
              運動醫學科 吳易澄醫師
            </a>{" "}
            製作
          </p>
          <div className="mx-auto mt-4 max-w-2xl space-y-1 text-xs text-slate-400">
            <p>
              本網站內容僅供 115
              全大運賽事醫護支援人員教育訓練與現場參考之用，不構成正式醫療建議。
            </p>
            <p>
              實際臨床處置應依現場狀況、專業判斷及醫師指示執行，本網站不承擔任何因使用本站內容所產生之責任。
            </p>
            <p>
              網站所引用之案例、數據與臨床指引均來自公開文獻，僅作教學用途，著作權歸原作者所有。
            </p>
            <p>聯絡資訊如有異動，請以大會最新公告為準。</p>
          </div>
          <p className="mt-3">版本：v1.5 | 2026 年 3 月</p>
        </footer>
      </main>
      <BackToTop />
    </div>
  );
}
