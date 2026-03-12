import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="text-7xl font-bold text-slate-300">404</div>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">找不到此頁面</h1>
      <p className="mt-2 text-sm text-slate-600">
        您所尋找的頁面不存在，可能已被移動或刪除。
      </p>
      <Link
        href="/"
        className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        回到首頁
      </Link>
    </div>
  );
}
