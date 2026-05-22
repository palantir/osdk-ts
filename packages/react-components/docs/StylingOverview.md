# Styling Overview

`@osdk/react-components` uses a three-layer token architecture that makes
theming predictable and composable.

## Token Architecture

```
Blueprint Core (@blueprintjs/core)
         |
   Blueprint Tokens (--bp-*)
         |
   OSDK Tokens (--osdk-*)
         |
   Component Styles
```

[Blueprint](https://blueprintjs.com) is a React UI toolkit built by Palantir.
OSDK components use Blueprint's design tokens as the foundation layer so they
integrate seamlessly with other Palantir applications and components that
already use Blueprint.

### Layer 1: Blueprint Tokens

The foundation. Blueprint design tokens (`--bp-*`) define the raw visual
primitives — colors, typography, spacing, and intent states. These are
inherited from `@blueprintjs/core`.

### Layer 2: OSDK Tokens

OSDK tokens (`--osdk-*`) map to Blueprint tokens by default. Override these
to theme OSDK components **without** affecting other Blueprint components in
your app.

```css
:root {
  /* Override just the OSDK table header */
  --osdk-table-header-bg: #f5f5f5;
}
```

### Layer 3: Component Tokens

Per-component CSS variables (e.g. `--osdk-table-*`, `--osdk-form-*`) control
specific UI elements. Each component documents its available variables.

## CSS Layers

Styles are organized using CSS `@layer` for predictable cascade ordering:

```css
@layer osdk.components, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "./my-brand.css" layer(user.brand);
```

Later layers always win, regardless of selector specificity. This means your
brand overrides will always take precedence over OSDK defaults.

## Dark Mode

Components react automatically to dark mode via any of these selectors:

- `prefers-color-scheme: dark` media query (OS-level preference)
- `[data-bp-color-scheme="dark"]` attribute selector (Blueprint convention)
- `.bp6-dark` class selector (Blueprint convention)
- `[data-theme="dark"]` attribute selector (Tailwind / Storybook convention)

No extra configuration is needed — the token layer detects whichever
selector is active and flips both `--bp-*` and `--osdk-*` tokens.

## Token Scopes

| Scope     | Prefix                 | Use when you want to...                               |
| --------- | ---------------------- | ----------------------------------------------------- |
| Blueprint | `--bp-*`               | Theme both Blueprint and OSDK components consistently |
| OSDK      | `--osdk-*`             | Theme only OSDK components, leave Blueprint unchanged |
| Component | `--osdk-<component>-*` | Customize a single component                          |

## Custom Themes

Create a brand layer that overrides the tokens you care about:

```css
/* user-brand.css */
:root {
  /* Global surface overrides */
  --osdk-surface-border-radius: 8px;

  /* Table-specific overrides */
  --osdk-table-header-bg: var(--my-brand-surface);
  --osdk-table-row-bg-hover: var(--my-brand-hover);

  /* Form-specific overrides */
  --osdk-form-section-padding: 20px;
}
```
