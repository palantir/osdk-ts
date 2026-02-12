# CSS Variables API Reference

Complete reference of all CSS custom properties (variables) available in `@osdk/react-components-styles`.

## Table of Contents

- [Overview](#overview)
- [Token Architecture](#token-architecture)
- [Blueprint Token Mappings](#blueprint-token-mappings)
  - [Surface Tokens](#surface-tokens)
  - [Typography Tokens](#typography-tokens)
  - [Intent Tokens](#intent-tokens)
  - [Iconography Tokens](#iconography-tokens)
- [OSDK Component Tokens](#osdk-component-tokens)
  - [Focus & Accessibility](#focus--accessibility)
  - [Checkbox](#checkbox)
  - [Table](#table)
- [Creating a Custom Theme](#creating-a-custom-theme)

## Overview

This package provides CSS custom properties for theming OSDK React components. All tokens can be overridden using CSS custom properties to create custom themes.

The token system has two main categories:
1. **Blueprint Token Mappings**: OSDK-namespaced aliases to Blueprint's design tokens
2. **OSDK Component Tokens**: Component-specific semantic tokens

## Token Architecture

```
Blueprint Core (@blueprintjs/core)
    ↓ (imported via @import)
Blueprint Tokens (--bp-*)
    ↓ (mapped to)
OSDK Tokens (--osdk-*)
    ↓ (applied to)
React Components
```

## Blueprint Token Mappings

These tokens provide OSDK-namespaced aliases to Blueprint's design system tokens. They reference Blueprint's `--bp-*` tokens which are imported from `@blueprintjs/core`.

### Surface Tokens

Control layout, spacing, shadows, and z-index layering.

| Variable | Maps to Blueprint Token | Description |
|----------|------------------------|-------------|
| `--osdk-surface-z-index-1` | `--bp-surface-z-index-1` | Z-index for sticky headers and interactive elements |
| `--osdk-surface-z-index-2` | `--bp-surface-z-index-2` | Z-index for pinned columns and tooltips |
| `--osdk-surface-border-radius` | `--bp-surface-border-radius` | Standard border radius (4px) |
| `--osdk-surface-border-width` | `--bp-surface-border-width` | Standard border width (1px) |
| `--osdk-surface-border-color-default` | `--bp-surface-border-color-default` | Default border color |
| `--osdk-surface-background-color-default` | `--bp-surface-background-color-default-rest` | Default background color for surfaces |
| `--osdk-surface-background-color-default-hover` | `--bp-surface-background-color-default-hover` | Hover state background for surfaces |
| `--osdk-surface-spacing` | `--bp-surface-spacing` | Base spacing unit (4px) |
| `--osdk-surface-shadow-2` | `--bp-surface-shadow-2` | Shadow for tooltips and popovers |

### Typography Tokens

Control text appearance.

| Variable | Maps to Blueprint Token | Description |
|----------|------------------------|-------------|
| `--osdk-typography-color-muted` | `--bp-typography-color-muted` | Muted/subtle text color |
| `--osdk-typography-color-default-rest` | `--bp-typography-color-default-rest` | Default text color |
| `--osdk-typography-size-body-medium` | `--bp-typography-size-body-medium` | Medium body text size (13px) |

### Intent Tokens

Semantic colors for interactive elements and states.

| Variable | Maps to Blueprint Token | Description |
|----------|------------------------|-------------|
| `--osdk-intent-default-foreground` | `--bp-intent-default-foreground` | Text color on default backgrounds |
| `--osdk-intent-default-hover` | `--bp-intent-default-hover` | Default hover state |
| `--osdk-intent-primary-rest` | `--bp-intent-primary-rest` | Primary rest state |
| `--osdk-intent-primary-foreground` | `--bp-intent-primary-foreground` | Text color on primary backgrounds |
| `--osdk-intent-primary-hover` | `--bp-intent-primary-hover` | Primary hover state |
| `--osdk-intent-primary-active` | `--bp-intent-primary-active` | Primary active/pressed state |

### Iconography Tokens

Control icon sizing.

| Variable | Maps to Blueprint Token | Description |
|----------|------------------------|-------------|
| `--osdk-iconography-size-small` | `--bp-iconography-size-small` | Small icon size (16px) |

## OSDK Component Tokens

Component-specific semantic tokens that may reference Blueprint tokens or define custom values.

### Focus & Accessibility

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-focus-visible-outline` | `var(--bp-emphasis-focus-width) solid var(--bp-emphasis-focus-color)` | Focus ring style |
| `--osdk-focus-visible-outline-offset` | `var(--bp-emphasis-focus-offset)` | Focus ring offset from element |

### Checkbox

Styling for checkbox components.

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-checkbox-icon-size` | `var(--bp-iconography-size-small)` | Size of checkmark icon |
| `--osdk-checkbox-padding` | `calc(var(--bp-surface-spacing) / 2)` | Internal padding |
| `--osdk-checkbox-border` | `var(--bp-surface-border-width) solid var(--bp-surface-border-color-default)` | Border style |
| `--osdk-checkbox-bg` | `transparent` | Unchecked background |
| `--osdk-checkbox-bg-hover` | `var(--bp-surface-background-color-default-hover)` | Unchecked hover background |
| `--osdk-checkbox-bg-active` | `var(--bp-surface-background-color-default-active)` | Unchecked active background |
| `--osdk-checkbox-bg-checked` | `var(--bp-intent-primary-rest)` | Checked background |
| `--osdk-checkbox-bg-checked-hover` | `var(--bp-intent-primary-hover)` | Checked hover background |
| `--osdk-checkbox-bg-checked-active` | `var(--bp-intent-primary-active)` | Checked active background |
| `--osdk-checkbox-checked-foreground` | `var(--bp-intent-primary-foreground)` | Checkmark color |

### Table

Styling for table components including headers, rows, and cells.

#### Base Border Properties

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-border-color` | `var(--bp-surface-border-color-default)` | Base color for all table borders |
| `--osdk-table-border-width` | `var(--bp-surface-border-width)` | Base width for all table borders |

#### Semantic Border Variables

These variables define the purpose of each border type, making it easier to customize specific borders without affecting others.

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-border` | `var(--osdk-table-border-width) solid var(--osdk-table-border-color)` | Base table border (outermost edges) |
| `--osdk-table-header-divider` | `var(--osdk-table-border)` | Vertical divider between header cells |
| `--osdk-table-cell-divider` | `var(--osdk-table-border-width) solid transparent` | Vertical divider between row cells (transparent by default) |
| `--osdk-table-row-divider` | `var(--osdk-table-border)` | Horizontal divider between rows |
| `--osdk-table-pinned-column-border` | `calc(var(--osdk-table-border-width) * 2) solid var(--osdk-table-border-color)` | Border for pinned columns (thicker for emphasis) |

#### Header Styling

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-header-bg` | `var(--bp-palette-light-gray-5)` | Table header background color |
| `--osdk-table-header-fontWeight` | `var(--bp-typography-weight-bold)` | Header text weight |
| `--osdk-table-header-fontSize` | `var(--bp-typography-size-body-small)` | Header text size |
| `--osdk-table-header-color` | `var(--bp-typography-color-muted)` | Header text color |

#### Row Backgrounds

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-row-bg-default` | `var(--bp-palette-light-gray-5)` | Default row background |
| `--osdk-table-row-bg-hover` | `oklch(from var(--bp-palette-blue-5) l c h / 0.2)` | Row hover background |
| `--osdk-table-row-bg-active` | `var(--bp-palette-blue-5)` | Active/selected row background |

#### Row Border Colors (Hover/Active States)

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-row-border-color-hover` | `var(--bp-intent-primary-rest)` | Border color for hovered rows |
| `--osdk-table-row-border-color-active` | `var(--bp-intent-primary-rest)` | Border color for selected rows |

#### Cell Styling

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-cell-padding` | `calc(var(--bp-surface-spacing) * 3) calc(var(--bp-surface-spacing) * 2)` | Cell padding |
| `--osdk-table-cell-fontSize` | `var(--bp-typography-size-body-medium)` | Cell text size |
| `--osdk-table-cell-color` | `var(--bp-typography-color-default-rest)` | Cell text color |

#### Skeleton Loading

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `--osdk-table-skeleton-color-from` | `oklch(from var(--bp-palette-light-gray-1) l c h / 0.4)` | Skeleton animation start color (light gray at 40% opacity) |
| `--osdk-table-skeleton-color-to` | `oklch(from var(--bp-palette-gray-1) l c h / 0.4)` | Skeleton animation end color (medium gray at 40% opacity) |
| `--osdk-table-skeleton-border-color` | `oklch(from var(--bp-palette-light-gray-1) l c h / 0.6)` | Skeleton cell border color (light gray at 60% opacity) |

## Creating a Custom Theme

To create a custom theme, override the tokens at the appropriate level. You can either:

1. **Override OSDK tokens directly** for quick customization
2. **Override Blueprint tokens** to change the entire design system

### Example: Override OSDK Tokens

```css
@layer osdk.tokens, custom.theme;

@import "@osdk/react-components-styles" layer(osdk.tokens);

@layer custom.theme {
  :root {
    /* Change table styling */
    --osdk-table-header-bg: #f0f0f0;
    --osdk-table-row-bg-default: white;
    --osdk-table-border-color: #e0e0e0;

    /* Customize primary intent colors */
    --osdk-intent-primary-rest: #2563eb;
    --osdk-intent-primary-hover: #1d4ed8;
    --osdk-intent-primary-active: #1e40af;
  }
}
```

### Example: Override Blueprint Tokens

For more comprehensive theming, override the Blueprint tokens that the OSDK tokens reference:

```css
@layer osdk.tokens, custom.theme;

@import "@osdk/react-components-styles" layer(osdk.tokens);

@layer custom.theme {
  :root {
    /* Change the entire primary color system */
    --bp-intent-primary-rest: #2563eb;
    --bp-intent-primary-hover: #1d4ed8;
    --bp-intent-primary-active: #1e40af;

    /* Override palette colors */
    --bp-palette-light-gray-5: #fafafa;

    /* Change typography */
    --bp-typography-size-body-medium: 14px;
    --bp-typography-weight-bold: 600;

    /* Adjust surface properties */
    --bp-surface-border-radius: 8px;
    --bp-surface-spacing: 8px;
  }
}
```

### Theme Architecture Best Practices

1. **Use CSS Layers**: Always import the default tokens into a layer, then add your custom overrides in a higher-priority layer. This ensures your custom theme takes precedence without specificity issues.

2. **Override at the right level**:
   - Override OSDK component tokens (`--osdk-*`) for component-specific changes
   - Override Blueprint tokens (`--bp-*`) for system-wide design changes

3. **Leverage the mapping**: Since OSDK tokens map to Blueprint tokens, changing a Blueprint token will automatically affect all OSDK tokens that reference it.

### Complete Theme Example

```css
@layer osdk.tokens, brand.theme;

@import "@osdk/react-components-styles" layer(osdk.tokens);

@layer brand.theme {
  :root {
    /* Brand colors via Blueprint system */
    --bp-intent-primary-rest: #0066cc;
    --bp-intent-primary-hover: #0052a3;
    --bp-intent-primary-active: #003d7a;
    --bp-intent-primary-foreground: white;

    /* Surface customization */
    --bp-surface-border-radius: 6px;
    --bp-surface-spacing: 6px;
    --bp-surface-border-color-default: #d0d0d0;

    /* Typography */
    --bp-typography-family-default: "Inter", system-ui, sans-serif;
    --bp-typography-size-body-medium: 14px;

    /* Table-specific overrides */
    --osdk-table-header-bg: #f8f9fa;
    --osdk-table-row-bg-default: white;
    --osdk-table-cell-padding: 16px 12px;
  }
}
```

This approach gives you full control over the visual appearance while maintaining consistency with the design system.
