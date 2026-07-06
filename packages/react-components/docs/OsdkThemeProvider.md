# OsdkThemeProvider

Provides OSDK theme state to descendants and writes a `data-bp-color-scheme` attribute onto the document so the OSDK + Blueprint design tokens activate the right theme. Components inside the provider re-render automatically when the resolved theme changes.

## Prerequisites

Before using `OsdkThemeProvider`, complete the library setup described in [Prerequisites](./Prerequisites.md), in particular the CSS layer imports - the provider only flips an attribute; the OSDK token CSS does the rest.

## Table of Contents

- [Import](#import)
- [Quick start](#quick-start)
- [Props reference](#props-reference)
- [`useOsdkTheme` hook](#useosdktheme-hook)
- [Examples](#examples)
  - [Default: follow the OS preference](#default-follow-the-os-preference)
  - [Force light or dark with `defaultTheme`](#force-light-or-dark-with-defaulttheme)
  - [Build a `ThemeToggle`](#build-a-themetoggle)
  - [Drive the theme from an external store (controlled mode)](#drive-the-theme-from-an-external-store-controlled-mode)
  - [Scope theming to a subtree](#scope-theming-to-a-subtree)
- [Branching on the resolved theme in JS](#branching-on-the-resolved-theme-in-js)

## Import

```tsx
import {
  type OsdkThemeMode,
  OsdkThemeProvider,
  type ResolvedOsdkTheme,
  useOsdkTheme,
} from "@osdk/react-components/experimental/theme";
```

## Quick start

```tsx
import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";

function App() {
  return (
    <OsdkProvider client={client}>
      <OsdkThemeProvider>{/* your app */}</OsdkThemeProvider>
    </OsdkProvider>
  );
}
```

With no props the provider follows `prefers-color-scheme` and re-renders when the OS preference changes. To override the OS at runtime, descendants call `setTheme` from [`useOsdkTheme`](#useosdktheme-hook).

> **Always render the provider somewhere above OSDK components.** OSDK components stay in light mode without it — the CSS only flips when `data-bp-color-scheme="dark"` is on an ancestor, and the provider is the supported way to manage that attribute. If an external store already owns your theme value, use [controlled mode](#drive-the-theme-from-an-external-store-controlled-mode) instead of skipping the provider — that way descendants can still call `useOsdkTheme`.

## Props reference

| Prop             | Type                                          | Default                    | Description                                                                                                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme`          | `"light" \| "dark" \| "system"` _(optional)_  | —                          | Controlled theme. When provided, the provider does not maintain its own state — the parent must respond to `onThemeChanged` (or update its own external store) and re-render with the new value. See [Drive the theme from an external store](#drive-the-theme-from-an-external-store-controlled-mode). |
| `defaultTheme`   | `"light" \| "dark" \| "system"`               | `"system"`                 | Initial theme when uncontrolled. Ignored when `theme` is provided. The provider owns the state from then on; descendants change it at runtime via `useOsdkTheme().setTheme`.                                                                                                                            |
| `onThemeChanged` | `(theme: OsdkThemeMode) => void` _(optional)_ | —                          | Fires whenever a descendant calls `setTheme`. Use this to layer side effects (persistence, analytics) on top of the default state update, or to drive an external store in controlled mode.                                                                                                             |
| `target`         | `HTMLElement \| null` _(optional)_            | `document.documentElement` | Element to write `data-bp-color-scheme` onto. Defaults to `<html>` so Blueprint portals (popovers, dialogs, tooltips) — which render outside the React tree — also receive the theme. See [Scope theming to a subtree](#scope-theming-to-a-subtree).                                                    |
| `children`       | `React.ReactNode`                             | —                          | Subtree that should resolve the theme via `useOsdkTheme`.                                                                                                                                                                                                                                               |

### `defaultTheme` modes

| Mode       | Behavior                                                                                |
| ---------- | --------------------------------------------------------------------------------------- |
| `"system"` | Follows the OS `prefers-color-scheme` setting and re-renders when it changes (default). |
| `"light"`  | Starts in light mode regardless of the OS preference.                                   |
| `"dark"`   | Starts in dark mode regardless of the OS preference.                                    |

`"system"` is the only mode where the resolved theme can change without anyone calling `setTheme` — it reacts to the OS preference flipping while your app is open.

## `useOsdkTheme` hook

```tsx
const { theme, resolvedTheme, setTheme } = useOsdkTheme();
```

| Field           | Type                            | Description                                                                                               |
| --------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `theme`         | `"light" \| "dark" \| "system"` | The requested mode, including `"system"`.                                                                 |
| `resolvedTheme` | `"light" \| "dark"`             | The concrete theme actually applied to the DOM. When `theme === "system"`, tracks `prefers-color-scheme`. |
| `setTheme`      | `(next: OsdkThemeMode) => void` | Switch the requested mode at runtime.                                                                     |

Must be called from a descendant of `<OsdkThemeProvider>`; throws otherwise.

## Examples

### Default: follow the OS preference

The simplest setup — no props needed. The provider starts in `"system"` mode, listens to `prefers-color-scheme`, and flips automatically when the user toggles their OS appearance.

```tsx
import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";

export function Root() {
  return (
    <OsdkProvider client={client}>
      <OsdkThemeProvider>
        <App />
      </OsdkThemeProvider>
    </OsdkProvider>
  );
}
```

To verify this in development, open Chrome DevTools → `⌘⇧P` → "Show Rendering" → set "Emulate CSS media feature prefers-color-scheme" to `light` or `dark`.

### Force light or dark with `defaultTheme`

Pin the initial mode if your app intentionally ships in light or dark regardless of the OS:

```tsx
<OsdkThemeProvider defaultTheme="dark">
  <App />
</OsdkThemeProvider>
```

Users can still switch at runtime via `useOsdkTheme().setTheme`; `defaultTheme` only seeds the initial value.

### Build a `ThemeToggle`

A typical settings-bar control that lets the user pick light/dark/system:

```tsx
import {
  type OsdkThemeMode,
  useOsdkTheme,
} from "@osdk/react-components/experimental/theme";

const MODES: readonly OsdkThemeMode[] = ["light", "dark", "system"];

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useOsdkTheme();
  return (
    <div role="group" aria-label="Theme">
      {MODES.map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => setTheme(mode)}
          aria-pressed={theme === mode}
        >
          {mode}
        </button>
      ))}
      {theme === "system" && (
        <span aria-live="polite">(resolved: {resolvedTheme})</span>
      )}
    </div>
  );
}
```

Render it anywhere inside the provider:

```tsx
<OsdkThemeProvider>
  <Header>
    <ThemeToggle />
  </Header>
  <main>{/* ... */}</main>
</OsdkThemeProvider>
```

### Drive the theme from an external store (controlled mode)

If the theme value already lives outside the OSDK tree (e.g. in a parent design-system provider), pass it in via the `theme` prop. The provider stops owning state; you re-render it with the new value when the store changes, and the provider rewrites `data-bp-color-scheme` accordingly.

```tsx
import {
  type OsdkThemeMode,
  OsdkThemeProvider,
} from "@osdk/react-components/experimental/theme";
import { useAppTheme } from "../store/theme.js"; // your own store hook

export function AppRoot() {
  // `theme` is owned by the app's store, not by the provider.
  const theme = useAppTheme();
  return (
    <OsdkProvider client={client}>
      <OsdkThemeProvider theme={theme}>
        <App />
      </OsdkThemeProvider>
    </OsdkProvider>
  );
}
```

If descendants call `setTheme` from `useOsdkTheme()`, controlled mode does **not** update the provider's state — it fires `onThemeChanged` so you can route the change back into your store.

```tsx
<OsdkThemeProvider
  theme={theme}
  onThemeChanged={(next) => dispatch(setTheme(next))}
>
  <App />
</OsdkThemeProvider>
```

Use controlled mode whenever an external source of truth exists. Use uncontrolled (just `defaultTheme`) when the provider can own the state itself.

### Scope theming to a subtree

By default the provider writes `data-bp-color-scheme` onto `<html>` so portaled overlays (popovers, dialogs, tooltips) inherit the theme. To theme only a slice of the page — for example, embedding an OSDK dashboard inside a host app that already manages its own theme — pass a `target`:

```tsx
import { useRef } from "react";

export function DashboardEmbed() {
  const scopeRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={scopeRef}>
      <OsdkThemeProvider target={scopeRef.current} defaultTheme="dark">
        <Dashboard />
      </OsdkThemeProvider>
    </div>
  );
}
```

Trade-off: portals from `@base-ui/react` / Blueprint render in a portal container that is **not** a descendant of `scopeRef`, so dropdowns and tooltips opened from inside the scoped subtree will follow the document-level theme, not the scoped one. Use the default (`<html>`) target unless you specifically need per-region theming.

## Branching on the resolved theme in JS

If you need to swap an asset or change a non-CSS value based on theme, read `resolvedTheme` — not `theme` — so the `"system"` mode resolves to a concrete `"light"` or `"dark"` for you:

```tsx
function LogoMark() {
  const { resolvedTheme } = useOsdkTheme();
  return (
    <img
      src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
      alt="Logo"
    />
  );
}
```
