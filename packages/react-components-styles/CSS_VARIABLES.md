# CSS Variables API Reference

Complete reference of all CSS custom properties (variables) available in `@osdk/react-components-styles`.

## Table of Contents

- [Overview](#overview)
- [Token Architecture](#token-architecture)
- [Blueprint Core Tokens (Level 1)](#blueprint-core-tokens-level-1)
  - [Emphasis & Animation](#emphasis--animation)
  - [Iconography](#iconography)
  - [Intent Colors](#intent-colors)
  - [Color Palettes](#color-palettes)
  - [Surface](#surface)
  - [Typography](#typography)
- [OSDK Component Tokens (Level 2)](#osdk-component-tokens-level-2)
  - [Checkbox](#checkbox)
  - [Table](#table)
- [Creating a Complete Custom Theme](#creating-a-complete-custom-theme)

## Overview

This package provides a two-tier token system for theming OSDK React components:

- **Level 1 (Blueprint Core)**: Low-level design tokens (colors, spacing, typography) from `@blueprintjs/core`
- **Level 2 (OSDK Components)**: Component-specific tokens that compose Level 1 tokens

All tokens can be overridden using CSS custom properties to create custom themes.

## Token Architecture

```
Blueprint Core Tokens (--bp-*)
    ↓ (referenced by)
OSDK Component Tokens (--osdk-*)
    ↓ (applied to)
React Components
```

## Blueprint Core Tokens (Level 1)

These tokens are provided by `@blueprintjs/core` and are imported automatically.

### Emphasis & Animation

Controls focus states, transitions, and motion preferences.

| Variable                            | Default Value                          | Description                                    |
| ----------------------------------- | -------------------------------------- | ---------------------------------------------- |
| `--bp-emphasis-transition-duration` | `100ms`                                | Standard transition duration for state changes |
| `--bp-emphasis-ease-default`        | `cubic-bezier(0.4, 1, 0.75, 0.9)`      | Default easing function                        |
| `--bp-emphasis-ease-bounce`         | `cubic-bezier(0.54, 1.12, 0.38, 1.11)` | Bounce easing function                         |
| `--bp-emphasis-focus-color`         | `var(--bp-intent-primary-rest)`        | Color of focus rings                           |
| `--bp-emphasis-focus-width`         | `2px`                                  | Width of focus rings                           |
| `--bp-emphasis-focus-offset`        | `2px`                                  | Offset of focus rings from element             |
| `--bp-emphasis-motion-reduced`      | `0`                                    | Motion preference (0 = allowed, 1 = reduced)   |

### Iconography

Icon sizing and color states.

#### Size

| Variable                        | Default Value | Description       |
| ------------------------------- | ------------- | ----------------- |
| `--bp-iconography-size-small`   | `16px`        | Small icon size   |
| `--bp-iconography-size-default` | `20px`        | Default icon size |

#### Colors

| Variable                       | Default Value                   | Description             |
| ------------------------------ | ------------------------------- | ----------------------- |
| `--bp-iconography-color-muted` | `var(--bp-intent-default-rest)` | Muted/subtle icon color |

**State Colors (per intent: default, primary, success, warning, danger):**
| Variable Pattern | Description |
|------------------|-------------|
| `--bp-iconography-color-{intent}-rest` | Rest state color |
| `--bp-iconography-color-{intent}-hover` | Hover state color |
| `--bp-iconography-color-{intent}-active` | Active state color |
| `--bp-iconography-color-{intent}-disabled` | Disabled state color |

### Intent Colors

Semantic color system with 5 states per intent. These are the primary tokens for interactive elements.

#### Default Intent (Neutral)

| Variable                         | Default Value               | Description                      |
| -------------------------------- | --------------------------- | -------------------------------- |
| `--bp-intent-default-rest`       | `var(--bp-palette-gray-1)`  | Default/neutral rest state       |
| `--bp-intent-default-hover`      | `var(--bp-palette-dark-gray-5)` | Default/neutral hover state      |
| `--bp-intent-default-active`     | `var(--bp-palette-dark-gray-4)` | Default/neutral active state     |
| `--bp-intent-default-disabled`   | `var(--bp-palette-gray-3)`  | Default/neutral disabled state   |
| `--bp-intent-default-foreground` | `var(--bp-palette-white)`   | Text color on default background |

#### Primary Intent

| Variable                         | Default Value               | Description                      |
| -------------------------------- | --------------------------- | -------------------------------- |
| `--bp-intent-primary-rest`       | `var(--bp-palette-blue-3)`  | Primary rest state               |
| `--bp-intent-primary-hover`      | `var(--bp-palette-blue-2)`  | Primary hover state              |
| `--bp-intent-primary-active`     | `var(--bp-palette-blue-1)`  | Primary active state             |
| `--bp-intent-primary-disabled`   | `var(--bp-palette-blue-4)`  | Primary disabled state           |
| `--bp-intent-primary-foreground` | `var(--bp-palette-white)`   | Text color on primary background |

#### Success Intent

| Variable                         | Default Value               | Description                      |
| -------------------------------- | --------------------------- | -------------------------------- |
| `--bp-intent-success-rest`       | `var(--bp-palette-green-3)` | Success rest state               |
| `--bp-intent-success-hover`      | `var(--bp-palette-green-2)` | Success hover state              |
| `--bp-intent-success-active`     | `var(--bp-palette-green-1)` | Success active state             |
| `--bp-intent-success-disabled`   | `var(--bp-palette-green-4)` | Success disabled state           |
| `--bp-intent-success-foreground` | `var(--bp-palette-white)`   | Text color on success background |

#### Warning Intent

| Variable                         | Default Value                | Description                      |
| -------------------------------- | ---------------------------- | -------------------------------- |
| `--bp-intent-warning-rest`       | `var(--bp-palette-orange-3)` | Warning rest state               |
| `--bp-intent-warning-hover`      | `var(--bp-palette-orange-2)` | Warning hover state              |
| `--bp-intent-warning-active`     | `var(--bp-palette-orange-1)` | Warning active state             |
| `--bp-intent-warning-disabled`   | `var(--bp-palette-orange-4)` | Warning disabled state           |
| `--bp-intent-warning-foreground` | `var(--bp-palette-black)`    | Text color on warning background |

#### Danger Intent

| Variable                        | Default Value              | Description                     |
| ------------------------------- | -------------------------- | ------------------------------- |
| `--bp-intent-danger-rest`       | `var(--bp-palette-red-3)`  | Danger rest state               |
| `--bp-intent-danger-hover`      | `var(--bp-palette-red-2)`  | Danger hover state              |
| `--bp-intent-danger-active`     | `var(--bp-palette-red-1)`  | Danger active state             |
| `--bp-intent-danger-disabled`   | `var(--bp-palette-red-4)`  | Danger disabled state           |
| `--bp-intent-danger-foreground` | `var(--bp-palette-white)`  | Text color on danger background |

### Color Palettes

Blueprint uses a 1-5 scale for color palettes, where 1 is the darkest shade and 5 is the lightest shade. For grays, there are three ranges: `dark-gray`, `gray`, and `light-gray`.

#### Black & White

| Variable            | Value     |
| ------------------- | --------- |
| `--bp-palette-black` | `#111418` |
| `--bp-palette-white` | `#ffffff` |

#### Gray Palettes

**Dark Gray (darkest):**
| Variable | Value |
|----------|-------|
| `--bp-palette-dark-gray-1` | `#1c2127` |
| `--bp-palette-dark-gray-2` | `#252a31` |
| `--bp-palette-dark-gray-3` | `#2f343c` |
| `--bp-palette-dark-gray-4` | `#383e47` |
| `--bp-palette-dark-gray-5` | `#404854` |

**Gray (medium):**
| Variable | Value |
|----------|-------|
| `--bp-palette-gray-1` | `#5f6b7c` |
| `--bp-palette-gray-2` | `#738091` |
| `--bp-palette-gray-3` | `#8f99a8` |
| `--bp-palette-gray-4` | `#abb3bf` |
| `--bp-palette-gray-5` | `#c5cbd3` |

**Light Gray (lightest):**
| Variable | Value |
|----------|-------|
| `--bp-palette-light-gray-1` | `#d3d8de` |
| `--bp-palette-light-gray-2` | `#dce0e5` |
| `--bp-palette-light-gray-3` | `#e5e8eb` |
| `--bp-palette-light-gray-4` | `#edeff2` |
| `--bp-palette-light-gray-5` | `#f6f7f9` |

#### Blue Palette

| Variable              | Value     |
| --------------------- | --------- |
| `--bp-palette-blue-1` | `#184a90` |
| `--bp-palette-blue-2` | `#215db0` |
| `--bp-palette-blue-3` | `#2d72d2` |
| `--bp-palette-blue-4` | `#4c90f0` |
| `--bp-palette-blue-5` | `#8abbff` |

#### Green Palette

| Variable               | Value     |
| ---------------------- | --------- |
| `--bp-palette-green-1` | `#165a36` |
| `--bp-palette-green-2` | `#1c6e42` |
| `--bp-palette-green-3` | `#238551` |
| `--bp-palette-green-4` | `#32a467` |
| `--bp-palette-green-5` | `#72ca9b` |

#### Orange Palette

| Variable                | Value     |
| ----------------------- | --------- |
| `--bp-palette-orange-1` | `#77450d` |
| `--bp-palette-orange-2` | `#935610` |
| `--bp-palette-orange-3` | `#c87619` |
| `--bp-palette-orange-4` | `#ec9a3c` |
| `--bp-palette-orange-5` | `#fbb360` |

#### Red Palette

| Variable             | Value     |
| -------------------- | --------- |
| `--bp-palette-red-1` | `#8e292c` |
| `--bp-palette-red-2` | `#ac2f33` |
| `--bp-palette-red-3` | `#cd4246` |
| `--bp-palette-red-4` | `#e76a6e` |
| `--bp-palette-red-5` | `#fa999c` |

#### Additional Palettes

The following palettes are also available with the same 1-5 scale:
- `--bp-palette-vermilion-{1-5}`
- `--bp-palette-rose-{1-5}`
- `--bp-palette-violet-{1-5}`
- `--bp-palette-indigo-{1-5}`
- `--bp-palette-cerulean-{1-5}`
- `--bp-palette-turquoise-{1-5}`
- `--bp-palette-forest-{1-5}`
- `--bp-palette-lime-{1-5}`
- `--bp-palette-gold-{1-5}`
- `--bp-palette-sepia-{1-5}`

### Surface

Borders, shadows, spacing, z-index, and surface colors for cards, panels, and backgrounds.

#### Border & Shape

| Variable                        | Default Value                                            | Description            |
| ------------------------------- | -------------------------------------------------------- | ---------------------- |
| `--bp-surface-border-color-default` | `oklch(from var(--bp-intent-default-rest) l c h / 0.12)` | Default border color   |
| `--bp-surface-border-color-strong`  | `oklch(from var(--bp-intent-default-rest) l c h / 0.25)` | Strong border color    |
| `--bp-surface-border-width`         | `1px`                                                    | Standard border width  |
| `--bp-surface-border-radius`        | `4px`                                                    | Standard border radius |

#### Elevation (Shadows)

| Variable                | Default Value                                                                  | Description                         |
| ----------------------- | ------------------------------------------------------------------------------ | ----------------------------------- |
| `--bp-surface-shadow-0` | `0px 0px 5px 0px oklch(0 0 0 / 0.1)`                                           | Card elevation (z-index 100)        |
| `--bp-surface-shadow-1` | `0px 1px 3px 0px oklch(0 0 0 / 0.2), 0px 1px 2px -1px oklch(0 0 0 / 0.2)`      | Interactive elevation (z-index 200) |
| `--bp-surface-shadow-2` | `0px 4px 6px -4px oklch(0 0 0 / 0.2), 0px 10px 15px -3px oklch(0 0 0 / 0.2)`   | Tooltip elevation (z-index 300)     |
| `--bp-surface-shadow-3` | `0px 20px 25px -5px oklch(0 0 0 / 0.2), 0px 10px 15px -3px oklch(0 0 0 / 0.2)` | Panel elevation (z-index 400)       |
| `--bp-surface-shadow-4` | `0px 25px 50px -12px oklch(0 0 0 / 0.4)`                                       | Modal elevation (z-index 500)       |

#### Spacing & Z-Index

| Variable                  | Default Value | Description                                     |
| ------------------------- | ------------- | ----------------------------------------------- |
| `--bp-surface-spacing`    | `4px`         | Base spacing unit (multiply for larger spacing) |
| `--bp-surface-z-index-0`  | `0`           | Base layer                                      |
| `--bp-surface-z-index-1`  | `10`          | Interactive elements                            |
| `--bp-surface-z-index-2`  | `20`          | Tooltips                                        |
| `--bp-surface-z-index-3`  | `30`          | Panels                                          |
| `--bp-surface-z-index-4`  | `40`          | Modals                                          |

#### Colors

| Variable                  | Default Value          | Description           |
| ------------------------- | ---------------------- | --------------------- |
| `--bp-surface-color-code` | `oklch(0.95 0.01 264)` | Code block background |

**Background Colors (per intent: default, primary, success, warning, danger):**
| Variable Pattern | Description |
|------------------|-------------|
| `--bp-surface-background-color-{intent}-rest` | Rest state background |
| `--bp-surface-background-color-{intent}-hover` | Hover state background |
| `--bp-surface-background-color-{intent}-active` | Active state background |
| `--bp-surface-background-color-{intent}-disabled` | Disabled state background |

**Layer Colors (subtle background tints):**
| Variable Pattern | Description |
|------------------|-------------|
| `--bp-surface-layer-{intent}` | Subtle 5% opacity tint |

### Typography

Font families, sizes, weights, line heights, and text colors.

#### Font Families

| Variable                         | Default Value                                                                                                                             | Description             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `--bp-typography-family-default` | `Inter, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", blueprint-icons-16, sans-serif` | Default font stack      |
| `--bp-typography-family-mono`    | `"JetBrains Mono", monospace`                                                                                                             | Monospace font for code |

#### Font Sizes

**Body Sizes:**
| Variable | Default Value | Use Case |
|----------|---------------|----------|
| `--bp-typography-size-body-x-small` | `9px` | Extra small body text |
| `--bp-typography-size-body-small` | `11px` | Small body text |
| `--bp-typography-size-body-medium` | `13px` | Medium body text (most common) |
| `--bp-typography-size-body-large` | `14px` | Large body text |

**Heading Sizes:**
| Variable | Default Value | Use Case |
|----------|---------------|----------|
| `--bp-typography-size-heading-small` | `16px` | Small heading (H5) |
| `--bp-typography-size-heading-medium` | `20px` | Medium heading (H4) |
| `--bp-typography-size-heading-large` | `24px` | Large heading (H3) |
| `--bp-typography-size-heading-x-large` | `28px` | Extra large heading (H2) |
| `--bp-typography-size-heading-display` | `46px` | Display heading (H1) |

**Code Sizes:**
| Variable | Default Value |
|----------|---------------|
| `--bp-typography-size-code-small` | `11px` |
| `--bp-typography-size-code-medium` | `12px` |
| `--bp-typography-size-code-large` | `14px` |

#### Font Weights & Line Heights

| Variable                            | Default Value | Description                        |
| ----------------------------------- | ------------- | ---------------------------------- |
| `--bp-typography-weight-default`    | `450`         | Regular weight                     |
| `--bp-typography-weight-bold`       | `550`         | Bold weight                        |
| `--bp-typography-line-height-default` | `1.5`       | Standard line height               |
| `--bp-typography-line-height-large`   | `1.75`      | Larger line height for readability |

#### Colors

| Variable                      | Default Value                   | Description             |
| ----------------------------- | ------------------------------- | ----------------------- |
| `--bp-typography-color-muted` | `var(--bp-intent-default-rest)` | Muted/subtle text color |

**Text Colors (per intent: default, primary, success, warning, danger):**
| Variable Pattern | Description |
|------------------|-------------|
| `--bp-typography-color-{intent}-rest` | Rest state text color |
| `--bp-typography-color-{intent}-hover` | Hover state text color |
| `--bp-typography-color-{intent}-active` | Active state text color |
| `--bp-typography-color-{intent}-disabled` | Disabled state text color |

## OSDK Component Tokens (Level 2)

Component-specific tokens that compose Blueprint Level 1 tokens.

### Checkbox

Styling for checkbox components.

| Variable                             | Default Value                                                                   | Description                 |
| ------------------------------------ | ------------------------------------------------------------------------------- | --------------------------- |
| `--osdk-checkbox-icon-size`          | `var(--bp-iconography-size-small)`                                              | Size of checkmark icon      |
| `--osdk-checkbox-padding`            | `calc(var(--bp-surface-spacing) / 2)`                                           | Internal padding            |
| `--osdk-checkbox-border`             | `var(--bp-surface-border-width) solid var(--bp-surface-border-color-default)`   | Border style                |
| `--osdk-checkbox-bg`                 | `transparent`                                                                   | Unchecked background        |
| `--osdk-checkbox-bg-hover`           | `var(--bp-surface-background-color-default-hover)`                              | Unchecked hover background  |
| `--osdk-checkbox-bg-active`          | `var(--bp-surface-background-color-default-active)`                             | Unchecked active background |
| `--osdk-checkbox-bg-checked`         | `var(--bp-intent-primary-rest)`                                                 | Checked background          |
| `--osdk-checkbox-bg-checked-hover`   | `var(--bp-intent-primary-hover)`                                                | Checked hover background    |
| `--osdk-checkbox-bg-checked-active`  | `var(--bp-intent-primary-active)`                                               | Checked active background   |
| `--osdk-checkbox-checked-foreground` | `var(--bp-intent-primary-foreground)`                                           | Checkmark color             |

### Table

Styling for table components including headers, rows, and cells.

#### Base Border Properties

| Variable                    | Default Value                            | Description                      |
| --------------------------- | ---------------------------------------- | -------------------------------- |
| `--osdk-table-border-color` | `var(--bp-surface-border-color-default)` | Base color for all table borders |
| `--osdk-table-border-width` | `var(--bp-surface-border-width)`         | Base width for all table borders |

#### Semantic Border Variables

These variables define the purpose of each border type, making it easier to customize specific borders without affecting others.

| Variable                            | Default Value                                                                   | Description                                                 |
| ----------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `--osdk-table-border`               | `var(--osdk-table-border-width) solid var(--osdk-table-border-color)`           | Base table border (outermost edges)                         |
| `--osdk-table-header-divider`       | `var(--osdk-table-border)`                                                      | Vertical divider between header cells                       |
| `--osdk-table-cell-divider`         | `var(--osdk-table-border-width) solid transparent`                              | Vertical divider between row cells (transparent by default) |
| `--osdk-table-row-divider`          | `var(--osdk-table-border)`                                                      | Horizontal divider between rows                             |
| `--osdk-table-pinned-column-border` | `calc(var(--osdk-table-border-width) * 2) solid var(--osdk-table-border-color)` | Border for pinned columns (thicker for emphasis)            |

#### Header Styling

| Variable                         | Default Value                           | Description                   |
| -------------------------------- | --------------------------------------- | ----------------------------- |
| `--osdk-table-header-bg`         | `var(--bp-palette-light-gray-5)`        | Table header background color |
| `--osdk-table-header-fontWeight` | `var(--bp-typography-weight-bold)`      | Header text weight            |
| `--osdk-table-header-fontSize`   | `var(--bp-typography-size-body-medium)` | Header text size              |
| `--osdk-table-header-color`      | `var(--bp-typography-color-muted)`      | Header text color             |

#### Row Backgrounds

| Variable                        | Default Value                                       | Description                               |
| ------------------------------- | --------------------------------------------------- | ----------------------------------------- |
| `--osdk-table-row-bg-default`   | `var(--bp-palette-light-gray-5)`                    | Default row background                    |
| `--osdk-table-row-bg-alternate` | (falls back to `--osdk-table-row-bg-default`)       | Alternate row background (zebra striping) |
| `--osdk-table-row-bg-hover`     | `oklch(from var(--bp-palette-blue-5) l c h / 0.2)`  | Row hover background                      |
| `--osdk-table-row-bg-active`    | `var(--bp-palette-blue-5)`                          | Active/selected row background            |

#### Row Border Colors (Hover/Active States)

| Variable                               | Default Value                   | Description                    |
| -------------------------------------- | ------------------------------- | ------------------------------ |
| `--osdk-table-row-border-color-hover`  | `var(--bp-intent-primary-rest)` | Border color for hovered rows  |
| `--osdk-table-row-border-color-active` | `var(--bp-intent-primary-rest)` | Border color for selected rows |

#### Cell Styling

| Variable                     | Default Value                                                             | Description     |
| ---------------------------- | ------------------------------------------------------------------------- | --------------- |
| `--osdk-table-cell-padding`  | `calc(var(--bp-surface-spacing) * 3) calc(var(--bp-surface-spacing) * 2)` | Cell padding    |
| `--osdk-table-cell-fontSize` | `var(--bp-typography-size-body-medium)`                                   | Cell text size  |
| `--osdk-table-cell-color`    | `var(--bp-typography-color-default-rest)`                                 | Cell text color |

## Creating a Complete Custom Theme

To create a complete custom theme, override the tokens at the appropriate level:

```css
@layer osdk.tokens, custom.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer custom.theme {
  :root {
    /* Override color palettes to change the entire color system */
    --bp-palette-blue-3: oklch(0.6 0.15 180); /* Change primary to teal */

    /* Or directly override intent colors */
    --bp-intent-primary-rest: var(--bp-palette-green-3);
    --bp-intent-primary-hover: var(--bp-palette-green-2);
    --bp-intent-primary-active: var(--bp-palette-green-1);

    /* Override typography */
    --bp-typography-family-default: "Helvetica Neue", sans-serif;
    --bp-typography-size-body-medium: 14px;

    /* Override surface properties */
    --bp-surface-border-radius: 8px;
    --bp-surface-spacing: 8px;

    /* Override component tokens for fine-grained control */
    --osdk-checkbox-border: 2px solid var(--bp-palette-gray-3);
  }
}
```

### Theme Checklist

To create a fully custom theme, consider overriding these key token groups:

- [ ] **Color Palettes** (`--bp-palette-*`) - Base color scales (1-5) for the entire system
- [ ] **Intent Colors** (`--bp-intent-*`) - Primary, success, warning, danger semantic colors
- [ ] **Typography** (`--bp-typography-*`) - Font families, sizes, weights
- [ ] **Surface** (`--bp-surface-*`) - Borders, spacing, shadows, background colors
- [ ] **Iconography** (`--bp-iconography-*`) - Icon sizes and colors
- [ ] **Component Tokens** (`--osdk-*`) - Component-specific overrides

### Using CSS Layers

The package uses CSS `@layer` for cascade management. Always import the default tokens into a layer, then add your custom overrides in a higher-priority layer:

```css
@layer osdk.tokens, user.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer user.theme {
  /* Your overrides here */
}
```

This ensures your custom theme takes precedence without specificity issues.
