"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="text-5xl font-bold text-rose-300">Oops</div>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">發生錯誤</h1>
      <p className="mt-2 max-w-md text-sm text-slate-600">
        {error.message || "頁面載入時發生未預期的錯誤，請重試。"}
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        重新載入
      </button>
    </div>
  );
}
