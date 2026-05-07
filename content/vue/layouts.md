---
title: Layouts
description: Docus 5 內建 default 與 docs 兩個 layout,可在 frontmatter 指定使用。
---

Docus 5 的 layout 簡化成只有兩個:

## `default`

不帶側邊導覽的單欄版面,適合首頁、Landing Page 或單獨頁面。

```md [content/index.md]
---
title: Home
layout: default
navigation: false
---

::u-page-hero
#title
JIANG Blog
::
```

`content/index.md` 預設就是這個 layout,搭配 `::u-page-hero` / `::u-page-section` 等 page 元件可以快速做出 landing page(可參考本站首頁原始碼)。

## `docs`

帶左側 aside 導覽 + 右側 ToC 的文件版面,**所有 `content/` 內非首頁的頁面預設都是這個 layout**,通常不需要在 frontmatter 指定。

```md [content/introduction/getting-started.md]
---
title: Getting Started
description: 從撰寫 Markdown 到部署文件網站,只要幾分鐘。
---

## 子章節從這裡開始
```

側邊導覽結構由各章節的 `_dir.yml` 決定:

```yml [content/introduction/_dir.yml]
icon: ph:star-duotone
navigation.redirect: /introduction/getting-started
```

## frontmatter 控制項

| 欄位 | 型別 | 說明 |
|---|---|---|
| `layout` | `'default' \| 'docs'` | 指定 layout(通常不必設定) |
| `navigation` | `boolean \| object` | 控制此頁是否出現在側邊導覽 |
| `navigation.title` | `string` | 自訂導覽顯示文字 |
| `navigation.icon` | `string` | 自訂導覽 icon(Iconify 名稱) |
| `navigation.redirect` | `string` | 點擊章節時跳轉到指定路徑 |

## 自訂 layout

若要自製 layout,在專案根目錄建立 `app/layouts/<name>.vue`,Nuxt 會自動掛載,frontmatter 用 `layout: <name>` 即可套用。
