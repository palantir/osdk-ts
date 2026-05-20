---
"@osdk/react-components": minor
---

Add `<OsdkThemeProvider>` and `useOsdkTheme` (from `@osdk/react-components/experimental/theme`) for opt-in theming. The provider seeds its state from `defaultTheme` (`"light" | "dark" | "system"`, defaults to `"system"`) and writes `data-bp-color-scheme` onto the document root — or a custom `target` — so OSDK and Blueprint tokens flip together. `"system"` follows `prefers-color-scheme` and reacts to OS changes at runtime; descendants switch modes by calling `setTheme` from `useOsdkTheme`.
