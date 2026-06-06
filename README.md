# 全大運賽事醫護支援需知 v1.5

這是一個以 Next.js 14 + TypeScript + Tailwind CSS 製作的多頁互動課程網站，提供 115
全大運賽事支援醫護人員、護理師、EMT、AT/PT 與場邊防護員使用。純靜態前端（`output: "export"`），無資料庫與後端。

## 功能（章節）

- 首頁與課程導覽
- 賽事總覽
- 角色分工
- 賽前準備
- 紀錄與回報
- 後送與應變
- 單項競賽規則（19 項運動醫護手冊，可搜尋／篩選）
- 場邊急症處理模組（決策樹、快速處置、頭部創傷分流）
- 場邊評估工具（SCAT 腦震盪、熱傷害、骨折判定等快速參考）
- 相關案例（22 件國際運動賽場經典醫療事件回顧）

## 啟動方式

```bash
npm install
npm run dev    # localhost:3000
npm run build  # 靜態輸出至 out/
npm run lint
```

## 部署（Cloudflare Pages）

- Build command: `npm run build`
- Output directory: `out`
- CLI 部署: `npx wrangler pages deploy out --project-name=2026niag`
- 正式網域: https://2026niag.sportsmedicine.tw

## 後續可擴充

- CMS／後台上稿
- PDF 上傳後自動產生教材頁
- 手機版快速查詢模式
- 熱傷害、後送 SOP 等專頁

## 變更紀錄

- **v1.5** — 新增相關案例頁（22 件國際經典案例）、新增場邊評估工具頁、移除情境測驗功能、頁尾加入免責聲明、隱藏重要窗口頁面
- **v1.1** — 新增手機版快速導覽、場邊急症 quick reference、高風險情境 decision tree、頭部創傷分流卡片
