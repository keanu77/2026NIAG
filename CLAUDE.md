# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

全大運（115 National Intercollegiate Athletic Games）賽事醫護支援互動課程網站。給賽事支援醫護人員、護理師、EMT、AT/PT 與場邊防護員使用，涵蓋賽事總覽、角色分工、賽前準備、後送應變、單項競賽規則與場邊急症處理。

## Commands

```bash
npm run dev    # 啟動開發伺服器 (localhost:3000)
npm run build  # 建置生產版本
npm run lint   # ESLint 檢查
```

## Architecture

**純靜態前端網站** — 無資料庫、無 API routes、無後端邏輯。

- **app/** — Next.js 14 App Router 頁面，每個 `page.tsx` 對應一個課程章節
  - 首頁 `/` → 課程導覽與入口
  - `/overview` `/roles` `/preparation` `/records` `/transfer` `/sports` `/emergency` `/contacts` → 各章節頁面
- **components/** — 可重用元件
  - `ui/page-shell.tsx` — 全站佈局骨架（sidebar + mobile nav + main content），所有頁面都包在 `<PageShell>` 內
  - `course-sidebar.tsx` / `course-mobile-nav.tsx` — 導覽列（desktop sidebar + mobile bottom nav）
  - `emergency-*` 系列 — 場邊急症處理模組（decision tree、grid、quick actions）
  - `scenario-quiz.tsx` — 情境測驗互動元件
- **data/** — 所有內容資料以 TypeScript 常數匯出（非 JSON），頁面直接 import 使用
- **lib/utils.ts** — `cn()` class merge 工具函式（clsx + tailwind-merge）

## Key Conventions

- **CSS 工具類別**：`.card`（圓角卡片）、`.page-wrap`（頁面間距）、`.section-grid`（grid 佈局）定義在 `globals.css`
- **品牌色**：teal/cyan 系列，自訂色票在 `tailwind.config.ts` 的 `brand` 色階
- **UI 風格**：大圓角（`rounded-3xl`）、柔和陰影（`shadow-soft`）、slate 色系底色
- **Client components**：需要互動（useState、事件）的元件標記 `"use client"`，其餘皆為 Server Components
- **新增章節內容**：在 `data/` 新增資料檔 → 在 `app/` 建立對應 route → 頁面用 `<PageShell>` 包裹 → 在 `course-sidebar.tsx` 的 `navItems` 陣列加入導覽項目
