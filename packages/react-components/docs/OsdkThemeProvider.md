# OsdkThemeProvider

Provides OSDK color-scheme state to descendants, writes `data-bp-color-scheme` onto the DOM, and optionally applies custom design-token CSS variables created with `createTheme`.

## Import

```tsx
import {
  createTheme,
  type OsdkColorScheme,
  OsdkThemeProvider,
  type ResolvedOsdkColorScheme,
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

With no props, the provider follows `prefers-color-scheme` and re-renders when the OS preference changes. To override the OS at runtime, descendants call `setColorScheme` from `useOsdkTheme`.

## Props reference

| Prop                   | Type                                                  | Default                    | Description                                                                                                             |
| ---------------------- | ----------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `colorScheme`          | `"light" \| "dark" \| "system"` _(optional)_          | —                          | Controlled color scheme. When provided, the parent must update it in response to `onColorSchemeChanged`.                |
| `defaultColorScheme`   | `"light" \| "dark" \| "system"`                       | `"system"`                 | Initial color scheme when uncontrolled. Ignored when `colorScheme` is provided.                                         |
| `onColorSchemeChanged` | `(colorScheme: OsdkColorScheme) => void` _(optional)_ | —                          | Fires whenever a descendant calls `setColorScheme`.                                                                     |
| `theme`                | `OsdkTheme` _(optional)_                              | —                          | Custom design-token theme created with `createTheme`.                                                                   |
| `target`               | `HTMLElement \| null` _(optional)_                    | `document.documentElement` | Element to write the color-scheme attribute and theme CSS variables onto. Defaults to `<html>` so portals inherit them. |
| `children`             | `React.ReactNode`                                     | —                          | Subtree that should resolve the color scheme via `useOsdkTheme`.                                                        |

## Color scheme modes

| Mode       | Behavior                                                                                |
| ---------- | --------------------------------------------------------------------------------------- |
| `"system"` | Follows the OS `prefers-color-scheme` setting and re-renders when it changes (default). |
| `"light"`  | Starts in light mode regardless of the OS preference.                                   |
| `"dark"`   | Starts in dark mode regardless of the OS preference.                                    |

`"system"` is the only mode where the resolved color scheme can change without anyone calling `setColorScheme`.

## Custom themes

Use `createTheme` for brand tokens. Color scheme remains a separate prop so runtime light/dark toggles do not require recreating the design-token object.

```tsx
import {
  createTheme,
  OsdkThemeProvider,
} from "@osdk/react-components/experimental/theme";

const acmeTheme = createTheme({
  colors: {
    background: "#ffffff",
    surface: "#f6f7f9",
    text: "#1c2127",
    textMuted: "#5f6b7c",
    primary: "#7c3aed",
    primaryForeground: "#ffffff",
    border: "#d9dce3",
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    bodySmall: 12,
    bodyMedium: 14,
    bodyLarge: 16,
  },
  radius: 6,
  spacing: 4,
});

export function Root() {
  return (
    <OsdkThemeProvider theme={acmeTheme}>
      <App />
    </OsdkThemeProvider>
  );
}
```

`createTheme` maps semantic OSDK tokens to the underlying OSDK and Blueprint CSS variables. Use the `cssVariables` escape hatch for variables that do not have a semantic field yet:

```tsx
const theme = createTheme({
  colors: { primary: "#16a34a" },
  cssVariables: {
    "--osdk-table-header-bg": "#14532d",
  },
});
```

## `useOsdkTheme` hook

```tsx
const { colorScheme, resolvedColorScheme, setColorScheme, theme } =
  useOsdkTheme();
```

| Field                 | Type                              | Description                                                                                                     |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `colorScheme`         | `"light" \| "dark" \| "system"`   | The requested mode, including `"system"`.                                                                       |
| `resolvedColorScheme` | `"light" \| "dark"`               | The concrete color scheme currently applied to the DOM. When `colorScheme === "system"`, tracks the OS setting. |
| `setColorScheme`      | `(next: OsdkColorScheme) => void` | Switch the requested mode at runtime.                                                                           |
| `theme`               | `OsdkTheme \| undefined`          | The custom design-token theme currently applied by the provider, if any.                                        |

Must be called from a descendant of `<OsdkThemeProvider>`; throws otherwise.

## Examples

### Force light or dark with `defaultColorScheme`

```tsx
<OsdkThemeProvider defaultColorScheme="dark">
  <App />
</OsdkThemeProvider>;
```

Users can still switch at runtime via `useOsdkTheme().setColorScheme`; `defaultColorScheme` only seeds the initial value.

### Build a color-scheme toggle

```tsx
import {
  type OsdkColorScheme,
  useOsdkTheme,
} from "@osdk/react-components/experimental/theme";

const COLOR_SCHEMES: readonly OsdkColorScheme[] = ["light", "dark", "system"];

export function ThemeToggle() {
  const { colorScheme, resolvedColorScheme, setColorScheme } = useOsdkTheme();
  return (
    <div role="group" aria-label="Theme">
      {COLOR_SCHEMES.map((nextColorScheme) => (
        <button
          key={nextColorScheme}
          type="button"
          onClick={() => setColorScheme(nextColorScheme)}
          aria-pressed={colorScheme === nextColorScheme}
        >
          {nextColorScheme}
        </button>
      ))}
      {colorScheme === "system" && (
        <span aria-live="polite">(resolved: {resolvedColorScheme})</span>
      )}
    </div>
  );
}
```

### Drive the color scheme from an external store

```tsx
<OsdkThemeProvider
  colorScheme={colorScheme}
  onColorSchemeChanged={(next) => dispatch(setColorScheme(next))}
>
  <App />
</OsdkThemeProvider>;
```

Use controlled mode whenever an external source of truth exists. Use uncontrolled mode when the provider can own the state itself.

### Scope theming to a subtree

By default the provider writes to `<html>` so portaled overlays inherit the color scheme and theme variables. To theme only a slice of the page, pass a `target`:

```tsx
import { useState } from "react";

export function DashboardEmbed() {
  const [themeTarget, setThemeTarget] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setThemeTarget}>
      {themeTarget != null && (
        <OsdkThemeProvider target={themeTarget} defaultColorScheme="dark">
          <Dashboard />
        </OsdkThemeProvider>
      )}
    </div>
  );
}
```

### Branch on the resolved color scheme in JS

If you need to swap an asset or change a non-CSS value based on the resolved color scheme, read `resolvedColorScheme`:

```tsx
function Logo() {
  const { resolvedColorScheme } = useOsdkTheme();
  return (
    <img
      src={resolvedColorScheme === "dark"
        ? "/logo-dark.svg"
        : "/logo-light.svg"}
      alt="Acme"
    />
  );
}
```
