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
  - [Persist the user's choice to `localStorage`](#persist-the-users-choice-to-localstorage)
  - [Scope theming to a subtree](#scope-theming-to-a-subtree)
- [Branching on the resolved theme in JS](#branching-on-the-resolved-theme-in-js)
- [Skipping the provider](#skipping-the-provider)

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
      <OsdkThemeProvider>
        {/* your app */}
      </OsdkThemeProvider>
    </OsdkProvider>
  );
}
```

With no props the provider follows `prefers-color-scheme` and re-renders when the OS preference changes. To override the OS at runtime, descendants call `setTheme` from [`useOsdkTheme`](#useosdktheme-hook).

> **If you don't render this provider**, OSDK components stay in light mode regardless of the OS preference. The CSS only flips on an explicit `data-bp-color-scheme` selector — the provider is the supported way to add one. If you'd rather not pull React state into your theming, see [Skipping the provider](#skipping-the-provider) for the attribute-only path.

## Props reference

| Prop           | Type                               | Default                    | Description                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultTheme` | `"light" \| "dark" \| "system"`    | `"system"`                 | Initial theme. The provider owns the state from then on; descendants change it at runtime via `useOsdkTheme().setTheme`.                                                                                                                             |
| `target`       | `HTMLElement \| null` _(optional)_ | `document.documentElement` | Element to write `data-bp-color-scheme` onto. Defaults to `<html>` so Blueprint portals (popovers, dialogs, tooltips) — which render outside the React tree — also receive the theme. See [Scope theming to a subtree](#scope-theming-to-a-subtree). |
| `children`     | `React.ReactNode`                  | —                          | Subtree that should resolve the theme via `useOsdkTheme`.                                                                                                                                                                                            |

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
</OsdkThemeProvider>;
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
</OsdkThemeProvider>;
```

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

## Skipping the provider

If your host app already owns theme state in its own store (Redux, Zustand, a parent design-system provider), you don't need this provider at all. The OSDK tokens activate from `data-bp-color-scheme="dark"` on any ancestor element.

For example, write `data-bp-color-scheme` onto `<html>` from your existing theme reducer — and OSDK tokens flip via CSS only, with no React provider needed.
