---
title: Composables
description: Docus 5 提供的 Vue composables,可在自訂元件與頁面中使用。
---

::caution
Docus 5 不再提供舊版的 `useDocus()` / `useMenu()` / `useScrollspy()`,改成下列幾個更聚焦的 composables。
::

## `useSeo()`

統一處理 meta tags、canonical URL、hreflang、og:image、article schema 等 SEO 設定。Docus 預設已在頁面層套用,通常**不需要自己呼叫**;若要在自訂頁面覆寫設定才需要。

```vue
<script setup lang="ts">
useSeo({
  title: () => 'My Custom Page',
  description: () => 'Custom description',
  type: 'article'
})
</script>
```

## `useUIConfig()`

取得 `app.config.ts` 中 `ui.*` 元件的預設變體(default variants),用於自訂元件樣式時保持一致。

```ts
const tocConfig = useUIConfig('contentToc')
// → { highlight: true, ... }
```

支援的元件鍵:`contentToc`、`contentNavigation`、`navigationMenu`。

## `useLogoAssets()`

回傳 header logo 相關資源(`hasLogo`、`headerLightUrl`、`headerDarkUrl`、`contextMenuItems`),由 `AppHeaderLogo.vue` 使用。自訂 header 元件時可重用。

```ts
const { hasLogo, headerLightUrl, headerDarkUrl } = useLogoAssets()
```

## `useSubNavigation()`

取得當前頁面所屬的子章節導覽結構,用於建立區段切換(例如 `Introduction` / `Vue` 之間切換)。

```ts
const { sections, currentSection } = useSubNavigation()
```

## `useDocusColorMode()`

包裝 Nuxt 的 colorMode,讀寫亮/暗主題。

```ts
const colorMode = useDocusColorMode()
colorMode.preference = 'dark'
```

## `useDocusI18n()`

取得當前語系與語言切換工具,搭配 `docus.locale` 設定使用。

```ts
const { locale, t } = useDocusI18n()
```

---

完整原始碼可在 `node_modules/docus/app/composables/` 查看。
