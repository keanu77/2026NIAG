# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

全大運（115 National Intercollegiate Athletic Games）賽事醫護支援互動課程網站。給賽事支援醫護人員、護理師、EMT、AT/PT 與場邊防護員使用，涵蓋賽事總覽、角色分工、賽前準備、後送應變、單項競賽規則與場邊急症處理。

## Commands

```bash
npm install    # 安裝依賴（首次或 package.json 變更後）
npm run dev    # 啟動開發伺服器 (localhost:3000)
npm run build  # 建置生產版本（static export → out/）
npm run lint   # ESLint 檢查
```

## Architecture

**純靜態前端網站** — 無資料庫、無 API routes、無後端邏輯。`next.config.mjs` 設定 `output: "export"` 產生靜態檔案。

- **app/** — Next.js 14 App Router 頁面，每個 `page.tsx` 對應一個課程章節
  - 首頁 `/` → 課程導覽與入口
  - `/overview` `/roles` `/preparation` `/records` `/transfer` `/sports` `/emergency` `/contacts` → 各章節頁面
  - `error.tsx` / `not-found.tsx` — 自訂錯誤與 404 頁面
  - Client component 頁面（`preparation`、`sports`）透過同目錄 `layout.tsx` 匯出 metadata
- **components/** — 可重用元件
  - `ui/page-shell.tsx` — 全站佈局骨架（sidebar + mobile nav + main content + back-to-top），所有頁面都包在 `<PageShell>` 內
  - `course-sidebar.tsx` / `course-mobile-nav.tsx` — 導覽列，共用 `data/nav-items.ts` 的 navItems 陣列
  - `chapter-nav.tsx` — 章節前後導覽，所有章節頁面底部使用
  - `numbered-step-card.tsx` — 編號步驟卡片共用元件
  - `emergency-*` 系列 — 場邊急症處理模組（decision tree、grid、quick actions）
  - `scenario-quiz.tsx` — 情境測驗互動元件（含重考功能）
- **data/** — 所有內容資料以 TypeScript 常數匯出（非 JSON），頁面直接 import 使用
  - `nav-items.ts` — 導覽項目共用陣列，sidebar / mobile nav / chapter-nav 共用
- **lib/utils.ts** — `cn()` class merge 工具函式（clsx + tailwind-merge）

## Key Conventions

- **CSS 工具類別**：`.card`（圓角卡片）、`.page-wrap`（頁面間距）、`.section-grid`（grid 佈局）定義在 `globals.css`
- **品牌色**：teal/cyan 系列，自訂色票在 `tailwind.config.ts` 的 `brand` 色階
- **UI 風格**：大圓角（`rounded-3xl`）、柔和陰影（`shadow-soft`）、slate 色系底色
- **Client components**：需要互動（useState、事件）的元件標記 `"use client"`，其餘皆為 Server Components
- **無障礙**：nav link 使用 `aria-current="page"`、skip-to-content 連結、`focus-visible` outline、table `<caption>`
- **列印樣式**：`@media print` 隱藏 sidebar/nav，卡片 `break-inside: avoid`
- **新增章節**：在 `data/` 新增資料檔 → 在 `app/` 建立對應 route → 頁面用 `<PageShell>` 包裹 → 在 `data/nav-items.ts` 的 navItems 陣列加入導覽項目 → 頁面底部加入 `<ChapterNav />`

## Deployment

部署到 **Cloudflare Pages**（static export）：
- Build command: `npm run build`
- Output directory: `out`
- CLI 部署: `npx wrangler pages deploy out --project-name=2026niag`
- GitHub repo: `keanu77/2026NIAG`
