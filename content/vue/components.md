---
title: Components
description: Docus 5 內建 Nuxt UI v3 prose 元件,可直接在 Markdown 中以 MDC 語法使用。
---

下列範例展示常用元件,完整列表可參考 [Nuxt UI Prose 文件](https://ui.nuxt.com/getting-started/typography)。

## Callout

四種變體:`note` / `tip` / `caution` / `warning`,也可以用通用 `callout` 自訂 icon。

::note
這是一段提示訊息(`::note`)。
::

::tip
這是一個技巧(`::tip`)。
::

::caution
請小心使用(`::caution`)。
::

::warning
警告:這個動作不可逆(`::warning`)。
::

::callout{icon="i-lucide-sparkles" color="primary"}
通用 callout,可自訂 icon 與 color。
::

```md
::tip
這是一個技巧。
::

::callout{icon="i-lucide-sparkles" color="primary"}
通用 callout,可自訂 icon 與 color。
::
```

## Badge

行內標記:

:badge[v1.0]

:badge[New]

```md
:badge[v1.0]
```

## Card / CardGroup

::card-group
  ::card
  ---
  title: Nuxt
  icon: i-logos-nuxt-icon
  to: https://nuxt.com
  target: _blank
  ---
  全端 Vue 框架,Docus 的基礎。
  ::

  ::card
  ---
  title: Vue
  icon: i-logos-vue
  to: https://vuejs.org
  target: _blank
  ---
  漸進式前端框架。
  ::

  ::card
  ---
  title: GitHub
  icon: i-simple-icons-github
  to: https://github.com/viccjiang
  target: _blank
  ---
  我的開源專案。
  ::
::

```md
::card-group
  ::card
  ---
  title: Nuxt
  icon: i-logos-nuxt-icon
  to: https://nuxt.com
  ---
  全端 Vue 框架。
  ::
::
```

## Code Group

::code-group
```bash [npm]
npm install
```

```bash [pnpm]
pnpm install
```

```bash [yarn]
yarn install
```
::

```md
::code-group
​```bash [npm]
npm install
​```

​```bash [pnpm]
pnpm install
​```
::
```

## Code Preview

預覽區 + 原始碼並排:

::code-preview
:badge[Hello]

#code
```md
:badge[Hello]
```
::

## Tabs

::tabs
  ::tabs-item{label="說明" icon="i-lucide-info"}
  Docus 5 的 tabs 元件可以放任何 markdown 內容。
  ::

  ::tabs-item{label="範例" icon="i-lucide-code"}
  ```ts
  const hello = 'world'
  ```
  ::
::

## Accordion

::accordion
  ::accordion-item{label="什麼是 Docus?" icon="i-lucide-circle-help"}
  Docus 是基於 Nuxt 的文件主題,提供開箱即用的文件網站體驗。
  ::

  ::accordion-item{label="如何撰寫頁面?" icon="i-lucide-pencil"}
  在 `content/` 目錄新增 `.md` 檔案,並用 frontmatter 設定 `title` 與 `description`。
  ::
::

## Steps

::steps
### 安裝

```bash
npm install
```

### 啟動開發

```bash
npm run dev
```

### 部署

```bash
npm run generate
```
::

## Field

API 參數說明用元件:

::field-group
  ::field{name="title" type="string" required}
  頁面標題,顯示在 header 與 SEO meta。
  ::

  ::field{name="description" type="string"}
  頁面描述,顯示在標題下方與 SEO meta。
  ::

  ::field{name="navigation" type="boolean | object"}
  控制此頁是否出現在側邊導覽。
  ::
::

## Kbd

按鍵顯示:按 :kbd{value="meta"} + :kbd{value="K"} 開啟搜尋。

```md
:kbd{value="meta"} + :kbd{value="K"}
```

## Collapsible

::collapsible
這是預設收合的內容,可以放任何 markdown,包括程式碼:

```ts
const collapsed = true
```
::

## Icon

直接用 [Iconify](https://icones.js.org) 名稱:

:icon{name="i-logos-nuxt-icon"} :icon{name="i-logos-vue"} :icon{name="i-simple-icons-github"}

```md
:icon{name="i-logos-nuxt-icon"}
```
