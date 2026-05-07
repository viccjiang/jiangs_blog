# JIANG Blog

使用 [Docus](https://docus.dev)(Nuxt 4)建置的個人部落格 / 文件網站。

## 專案結構

- `content/` — Markdown 內容,採路由式結構(例如 `content/introduction/getting-started.md` 對應 `/introduction/getting-started`)
- `content/_dir.yml` — 章節導覽與中繼資料
- `app.config.ts` — Docus 主題設定(標題、header、socials、github 等)
- `nuxt.config.ts` — Nuxt 設定
- `public/` — 靜態資源

## 開發

```bash
npm install
npm run dev
```

預設於 <http://localhost:3000> 啟動。

## 建置與部署

```bash
npm run build      # SSR 建置
npm run generate   # 產生靜態網站到 .output/public
npm run preview    # 本機預覽建置結果
npm run lint       # ESLint
```

部署方式請參考 [Nuxt 部署文件](https://nuxt.com/docs/getting-started/deployment)。

## 撰寫內容須知

- 頁面標題與描述寫在 frontmatter 的 `title` / `description`,不要再在內文寫 H1,否則 Docus 5 會重複渲染。

  ```md
  ---
  title: Getting Started
  description: 從撰寫 Markdown 到部署文件網站,只要幾分鐘。
  ---

  ## 子標題從這裡開始
  ```

- 新章節:先建 `_dir.yml` 再加 Markdown。
- 檔名與資料夾用小寫加連字號(`getting-started.md`、`introduction/`)。

## Docus 5 設定要點

`app.config.ts` 中 `header` / `seo` / `socials` / `github` 放在**頂層**,不要包在 `docus: {}` 內。`github` 欄位是 `owner` / `name` / `branch` / `rootDir`。schema 參考 `node_modules/docus/app/types/index.d.ts`。

---

更多細節請參考 [Docus](https://docus.dev) 官方文件。
