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
  - [Emphasis Tokens](#emphasis-tokens)
  - [Palette Tokens](#palette-tokens)
- [OSDK Component Tokens](#osdk-component-tokens)
  - [Shared Styling](#shared-styling)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [Dialog](#dialog)
  - [Draggable](#draggable)
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

| Variable                                         | Maps to Blueprint Token                        | Description                                |
| ------------------------------------------------ | ---------------------------------------------- | ------------------------------------------ |
| `--osdk-surface-z-index-1`                       | `--bp-surface-z-index-1`                       |                                            |
| `--osdk-surface-z-index-2`                       | `--bp-surface-z-index-2`                       |                                            |
| `--osdk-surface-border-radius`                   | `--bp-surface-border-radius`                   | Standard border radius (4px)               |
| `--osdk-surface-border-width`                    | `--bp-surface-border-width`                    | Standard border width (1px)                |
| `--osdk-surface-border-color-default`            | `--bp-surface-border-color-default`            | Default border color                       |
| `--osdk-surface-background-color-default-rest`   | `--bp-surface-background-color-default-rest`   | Default rest state background for surfaces |
| `--osdk-surface-background-color-default-hover`  | `--bp-surface-background-color-default-hover`  | Hover state background for surfaces        |
| `--osdk-surface-background-color-default-active` | `--bp-surface-background-color-default-active` | Active state background for surfaces       |
| `--osdk-surface-background-color-danger-rest`    | `--bp-surface-background-color-danger-rest`    | Danger rest state background               |
| `--osdk-surface-background-color-danger-hover`   | `--bp-surface-background-color-danger-hover`   | Danger hover state background              |
| `--osdk-surface-background-color-danger-active`  | `--bp-surface-background-color-danger-active`  | Danger active state background             |
| `--osdk-surface-spacing`                         | `--bp-surface-spacing`                         | Base spacing unit (4px)                    |
| `--osdk-surface-shadow-2`                        | `--bp-surface-shadow-2`                        | Shadow for tooltips and popovers           |

### Typography Tokens

Control text appearance.

| Variable                                | Maps to Blueprint Token               | Description                  |
| --------------------------------------- | ------------------------------------- | ---------------------------- |
| `--osdk-typography-color-muted`         | `--bp-typography-color-muted`         | Muted/subtle text color      |
| `--osdk-typography-color-default-rest`  | `--bp-typography-color-default-rest`  | Default text color           |
| `--osdk-typography-color-danger-rest`   | `--bp-typography-color-danger-rest`   | Danger text color            |
| `--osdk-typography-color-danger-active` | `--bp-typography-color-danger-active` | Danger active text color     |
| `--osdk-typography-size-body-x-small`   | `--bp-typography-size-body-x-small`   | Extra-small body text size   |
| `--osdk-typography-size-body-small`     | `--bp-typography-size-body-small`     | Small body text size         |
| `--osdk-typography-size-body-medium`    | `--bp-typography-size-body-medium`    | Medium body text size (13px) |
| `--osdk-typography-weight-bold`         | `600`                                 | Bold font weight             |

### Intent Tokens

Semantic colors for interactive elements and states.

| Variable                           | Maps to Blueprint Token          | Description                       |
| ---------------------------------- | -------------------------------- | --------------------------------- |
| `--osdk-intent-default-rest`       | `--bp-intent-default-rest`       | Default rest state                |
| `--osdk-intent-primary-rest`       | `--bp-intent-primary-rest`       | Primary rest state                |
| `--osdk-intent-primary-foreground` | `--bp-intent-primary-foreground` | Text color on primary backgrounds |
| `--osdk-intent-primary-hover`      | `--bp-intent-primary-hover`      | Primary hover state               |
| `--osdk-intent-primary-active`     | `--bp-intent-primary-active`     | Primary active/pressed state      |
| `--osdk-intent-danger-rest`        | `--bp-intent-danger-rest`        | Danger rest state                 |
| `--osdk-intent-danger-hover`       | `--bp-intent-danger-hover`       | Danger hover state                |

### Iconography Tokens

Control icon sizing.

| Variable                        | Maps to Blueprint Token       | Description            |
| ------------------------------- | ----------------------------- | ---------------------- |
| `--osdk-iconography-size-small` | `--bp-iconography-size-small` | Small icon size (16px) |

### Emphasis Tokens

Control focus ring and emphasis styling.

| Variable                       | Maps to Blueprint Token      | Description                    |
| ------------------------------ | ---------------------------- | ------------------------------ |
| `--osdk-emphasis-focus-width`  | `--bp-emphasis-focus-width`  | Focus ring width               |
| `--osdk-emphasis-focus-color`  | `--bp-emphasis-focus-color`  | Focus ring color               |
| `--osdk-emphasis-focus-offset` | `--bp-emphasis-focus-offset` | Focus ring offset from element |

### Palette Tokens

Raw color palette tokens.

| Variable                      | Maps to Blueprint Token     | Description  |
| ----------------------------- | --------------------------- | ------------ |
| `--osdk-palette-gray-1`       | `--bp-palette-gray-1`       | Gray 1       |
| `--osdk-palette-gray-2`       | `--bp-palette-gray-2`       | Gray 2       |
| `--osdk-palette-light-gray-1` | `--bp-palette-light-gray-1` | Light gray 1 |
| `--osdk-palette-light-gray-3` | `--bp-palette-light-gray-3` | Light gray 3 |
| `--osdk-palette-light-gray-4` | `--bp-palette-light-gray-4` | Light gray 4 |
| `--osdk-palette-light-gray-5` | `--bp-palette-light-gray-5` | Light gray 5 |
| `--osdk-palette-white`        | `--bp-palette-white`        | White        |
| `--osdk-palette-black`        | `--bp-palette-black`        | Black        |

## OSDK Component Tokens

Component-specific semantic tokens that may reference Blueprint tokens or define custom values.

### Shared Styling

| Variable                              | Default Value                                                                     | Description                    |
| ------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| `--osdk-focus-outline`                | `var(--osdk-emphasis-focus-width) solid var(--osdk-emphasis-focus-color)`         | Focus ring style               |
| `--osdk-focus-visible-outline-offset` | `var(--osdk-emphasis-focus-offset)`                                               | Focus ring offset from element |
| `--osdk-surface-border`               | `var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)` | Reusable border shorthand      |

### Button

Styling for button components.

#### Primary Button

| Variable                          | Default Value                           | Description                      |
| --------------------------------- | --------------------------------------- | -------------------------------- |
| `--osdk-button-primary-color`     | `var(--osdk-intent-primary-foreground)` | Primary button text color        |
| `--osdk-button-primary-bg`        | `var(--osdk-intent-primary-rest)`       | Primary button background        |
| `--osdk-button-primary-bg-hover`  | `var(--osdk-intent-primary-hover)`      | Primary button hover background  |
| `--osdk-button-primary-bg-active` | `var(--osdk-intent-primary-active)`     | Primary button active background |

#### Secondary Button

| Variable                           | Default Value                                        | Description                       |
| ---------------------------------- | ---------------------------------------------------- | --------------------------------- |
| `--osdk-button-secondary-color`    | `var(--osdk-typography-color-muted)`                 | Secondary button text color       |
| `--osdk-button-secondary-bg`       | `var(--osdk-palette-light-gray-5)`                   | Secondary button background       |
| `--osdk-button-secondary-bg-hover` | `var(--osdk-surface-background-color-default-hover)` | Secondary button hover background |

### Checkbox

Styling for checkbox components.

| Variable                             | Default Value                                         | Description                 |
| ------------------------------------ | ----------------------------------------------------- | --------------------------- |
| `--osdk-checkbox-icon-size`          | `var(--osdk-iconography-size-small)`                  | Size of checkmark icon      |
| `--osdk-checkbox-padding`            | `calc(var(--osdk-surface-spacing) * 0.5)`             | Internal padding            |
| `--osdk-checkbox-border`             | `var(--osdk-surface-border)`                          | Border style                |
| `--osdk-checkbox-bg`                 | `transparent`                                         | Unchecked background        |
| `--osdk-checkbox-bg-hover`           | `var(--osdk-surface-background-color-default-hover)`  | Unchecked hover background  |
| `--osdk-checkbox-bg-active`          | `var(--osdk-surface-background-color-default-active)` | Unchecked active background |
| `--osdk-checkbox-bg-checked`         | `var(--osdk-intent-primary-rest)`                     | Checked background          |
| `--osdk-checkbox-bg-checked-hover`   | `var(--osdk-intent-primary-hover)`                    | Checked hover background    |
| `--osdk-checkbox-bg-checked-active`  | `var(--osdk-intent-primary-active)`                   | Checked active background   |
| `--osdk-checkbox-checked-foreground` | `var(--osdk-intent-primary-foreground)`               | Checkmark color             |

### Dialog

Styling for dialog/modal components.

| Variable                          | Default Value                                                                 | Description              |
| --------------------------------- | ----------------------------------------------------------------------------- | ------------------------ |
| `--osdk-dialog-padding`           | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 4)` | Base dialog padding      |
| `--osdk-dialog-backdrop-bg`       | `oklch(from var(--osdk-palette-black) l c h / 0.5)`                           | Backdrop overlay color   |
| `--osdk-dialog-header-padding`    | `var(--osdk-dialog-padding)`                                                  | Header section padding   |
| `--osdk-dialog-title-font-size`   | `var(--osdk-typography-size-body-medium)`                                     | Dialog title font size   |
| `--osdk-dialog-title-font-weight` | `var(--osdk-typography-weight-bold)`                                          | Dialog title font weight |
| `--osdk-dialog-bg`                | `var(--osdk-palette-white)`                                                   | Dialog background color  |
| `--osdk-dialog-shadow`            | `var(--osdk-surface-shadow-2)`                                                | Dialog box shadow        |
| `--osdk-dialog-min-width`         | `500px`                                                                       | Minimum dialog width     |
| `--osdk-dialog-min-height`        | `300px`                                                                       | Minimum dialog height    |
| `--osdk-dialog-max-width`         | `1000px`                                                                      | Maximum dialog width     |
| `--osdk-dialog-max-height`        | `600px`                                                                       | Maximum dialog height    |
| `--osdk-dialog-body-padding`      | `var(--osdk-dialog-padding)`                                                  | Body section padding     |
| `--osdk-dialog-footer-padding`    | `var(--osdk-dialog-padding)`                                                  | Footer section padding   |

### Draggable

Styling for draggable list item components.

| Variable                                      | Default Value                                                                 | Description                  |
| --------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------- |
| `--osdk-draggable-item-bg`                    | `var(--osdk-palette-white)`                                                   | Draggable item background    |
| `--osdk-draggable-item-border`                | `var(--osdk-surface-border)`                                                  | Draggable item border        |
| `--osdk-draggable-item-border-radius`         | `var(--osdk-surface-border-radius)`                                           | Draggable item border radius |
| `--osdk-draggable-item-padding`               | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 3)` | Draggable item padding       |
| `--osdk-draggable-item-gap`                   | `var(--osdk-surface-spacing)`                                                 | Gap between item elements    |
| `--osdk-draggable-item-drag-icon-color`       | `var(--osdk-typography-color-muted)`                                          | Drag handle icon color       |
| `--osdk-draggable-item-drag-icon-color-hover` | `var(--osdk-typography-color-default-rest)`                                   | Drag handle icon hover color |
| `--osdk-draggable-item-icon-size`             | `var(--osdk-iconography-size-small)`                                          | Drag handle icon size        |

### Table

Styling for table components including headers, rows, and cells.

#### Base Border Properties

| Variable                    | Default Value                              | Description                      |
| --------------------------- | ------------------------------------------ | -------------------------------- |
| `--osdk-table-border-color` | `var(--osdk-surface-border-color-default)` | Base color for all table borders |
| `--osdk-table-border-width` | `var(--osdk-surface-border-width)`         | Base width for all table borders |

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

| Variable                         | Default Value                            | Description                   |
| -------------------------------- | ---------------------------------------- | ----------------------------- |
| `--osdk-table-header-height`     | `50px`                                   | Table header row height       |
| `--osdk-table-header-bg`         | `var(--osdk-palette-light-gray-5)`       | Table header background color |
| `--osdk-table-header-fontWeight` | `var(--osdk-typography-weight-bold)`     | Header text weight            |
| `--osdk-table-header-fontSize`   | `var(--osdk-typography-size-body-small)` | Header text size              |
| `--osdk-table-header-color`      | `var(--osdk-typography-color-muted)`     | Header text color             |

#### Row Backgrounds

| Variable                        | Default Value                                                                         | Description                           |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------- |
| `--osdk-table-row-bg-default`   | `var(--osdk-palette-white)`                                                           | Default row background                |
| `--osdk-table-row-bg-alternate` | `var(--osdk-palette-light-gray-4)`                                                    | Alternate row background for striping |
| `--osdk-table-row-bg-hover`     | `color-mix(in srgb, var(--osdk-intent-primary-hover) 10%, var(--osdk-palette-white))` | Row hover background                  |
| `--osdk-table-row-bg-active`    | `color-mix(in srgb, var(--osdk-intent-primary-hover) 10%, var(--osdk-palette-white))` | Active/selected row background        |

#### Row Border Colors (Hover/Active States)

| Variable                               | Default Value                     | Description                    |
| -------------------------------------- | --------------------------------- | ------------------------------ |
| `--osdk-table-row-border-color-hover`  | `var(--osdk-intent-primary-rest)` | Border color for hovered rows  |
| `--osdk-table-row-border-color-active` | `var(--osdk-intent-primary-rest)` | Border color for selected rows |

#### Cell Styling

| Variable                     | Default Value                               | Description     |
| ---------------------------- | ------------------------------------------- | --------------- |
| `--osdk-table-cell-padding`  | `0 calc(var(--osdk-surface-spacing) * 2)`   | Cell padding    |
| `--osdk-table-cell-fontSize` | `var(--osdk-typography-size-body-medium)`   | Cell text size  |
| `--osdk-table-cell-color`    | `var(--osdk-typography-color-default-rest)` | Cell text color |

#### Header Menu

Styling for the column header dropdown menu.

| Variable                                | Default Value                                                                               | Description                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------- |
| `--osdk-table-header-menu-padding`      | `calc(var(--osdk-surface-spacing) * 0.25)`                                                  | Menu button padding           |
| `--osdk-table-header-menu-bg`           | `oklch(from var(--osdk-palette-light-gray-5) l c h / 0.5)`                                  | Menu button background        |
| `--osdk-table-header-menu-border`       | `var(--osdk-surface-border-width) solid oklch(from var(--osdk-palette-gray-1) l c h / 0.2)` | Menu button border            |
| `--osdk-table-header-menu-color`        | `var(--osdk-typography-color-muted)`                                                        | Menu icon color               |
| `--osdk-table-header-menu-color-active` | `var(--osdk-typography-color-default-rest)`                                                 | Menu icon active color        |
| `--osdk-table-header-menu-bg-hover`     | `oklch(from var(--osdk-palette-gray-1) l c h / 0.05)`                                       | Menu button hover background  |
| `--osdk-table-header-menu-bg-active`    | `oklch(from var(--osdk-palette-gray-1) l c h / 0.08)`                                       | Menu button active background |

#### Resizer

Styling for column resize handles.

| Variable                            | Default Value                                             | Description                |
| ----------------------------------- | --------------------------------------------------------- | -------------------------- |
| `--osdk-table-resizer-color-hover`  | `oklch(from var(--osdk-intent-primary-rest) l c h / 0.5)` | Resize handle hover color  |
| `--osdk-table-resizer-color-active` | `var(--osdk-intent-primary-rest)`                         | Resize handle active color |

#### Skeleton Loading

| Variable                             | Default Value                                              | Description                                                |
| ------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `--osdk-table-skeleton-color-from`   | `oklch(from var(--osdk-palette-light-gray-1) l c h / 0.4)` | Skeleton animation start color (light gray at 40% opacity) |
| `--osdk-table-skeleton-color-to`     | `oklch(from var(--osdk-palette-gray-1) l c h / 0.4)`       | Skeleton animation end color (medium gray at 40% opacity)  |
| `--osdk-table-skeleton-border-color` | `oklch(from var(--osdk-palette-light-gray-1) l c h / 0.6)` | Skeleton cell border color (light gray at 60% opacity)     |

#### Column Config Dialog

| Variable                                       | Default Value | Description                             |
| ---------------------------------------------- | ------------- | --------------------------------------- |
| `--osdk-table-column-config-dialog-min-width`  | `800px`       | Minimum width for column config dialog  |
| `--osdk-table-column-config-dialog-min-height` | `400px`       | Minimum height for column config dialog |

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
