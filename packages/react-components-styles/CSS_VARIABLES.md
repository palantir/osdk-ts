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

- **Level 1 (Blueprint Core)**: Low-level design tokens (colors, spacing, typography)
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

### Emphasis & Animation

Controls focus states, transitions, and motion preferences.

| Variable                           | Default Value                          | Description                                    |
| ---------------------------------- | -------------------------------------- | ---------------------------------------------- |
| `--bp-emphasis-transitionDuration` | `100ms`                                | Standard transition duration for state changes |
| `--bp-emphasis-ease-default`       | `cubic-bezier(0.4, 1, 0.75, 0.9)`      | Default easing function                        |
| `--bp-emphasis-ease-bounce`        | `cubic-bezier(0.54, 1.12, 0.38, 1.11)` | Bounce easing function                         |
| `--bp-emphasis-focusColor`         | `var(--bp-intent-primary-rest)`        | Color of focus rings                           |
| `--bp-emphasis-focusWidth`         | `2px`                                  | Width of focus rings                           |
| `--bp-emphasis-focusOffset`        | `2px`                                  | Offset of focus rings from element             |
| `--bp-emphasis-motionReduced`      | `0`                                    | Motion preference (0 = allowed, 1 = reduced)   |

### Iconography

Icon sizing and color states.

#### Size

| Variable                        | Default Value | Description       |
| ------------------------------- | ------------- | ----------------- |
| `--bp-iconography-size-small`   | `16px`        | Small icon size   |
| `--bp-iconography-size-default` | `20px`        | Default icon size |

#### Colors

| Variable                      | Default Value                   | Description             |
| ----------------------------- | ------------------------------- | ----------------------- |
| `--bp-iconography-colorMuted` | `var(--bp-intent-default-rest)` | Muted/subtle icon color |

**Rest State:**
| Variable | References |
|----------|-----------|
| `--bp-iconography-colorRest-default` | `var(--bp-palette-gray-800)` |
| `--bp-iconography-colorRest-primary` | `var(--bp-intent-primary-rest)` |
| `--bp-iconography-colorRest-success` | `var(--bp-intent-success-rest)` |
| `--bp-iconography-colorRest-warning` | `var(--bp-intent-warning-rest)` |
| `--bp-iconography-colorRest-danger` | `var(--bp-intent-danger-rest)` |

**Hover State:**
| Variable | References |
|----------|-----------|
| `--bp-iconography-colorHover-default` | `var(--bp-palette-gray-900)` |
| `--bp-iconography-colorHover-primary` | `var(--bp-intent-primary-hover)` |
| `--bp-iconography-colorHover-success` | `var(--bp-intent-success-hover)` |
| `--bp-iconography-colorHover-warning` | `var(--bp-intent-warning-hover)` |
| `--bp-iconography-colorHover-danger` | `var(--bp-intent-danger-hover)` |

**Active State:**
| Variable | References |
|----------|-----------|
| `--bp-iconography-colorActive-default` | `var(--bp-palette-gray-1000)` |
| `--bp-iconography-colorActive-primary` | `var(--bp-intent-primary-active)` |
| `--bp-iconography-colorActive-success` | `var(--bp-intent-success-active)` |
| `--bp-iconography-colorActive-warning` | `var(--bp-intent-warning-active)` |
| `--bp-iconography-colorActive-danger` | `var(--bp-intent-danger-active)` |

**Disabled State:**
| Variable | References |
|----------|-----------|
| `--bp-iconography-colorDisabled-default` | `var(--bp-palette-gray-400)` |
| `--bp-iconography-colorDisabled-primary` | `var(--bp-intent-primary-disabled)` |
| `--bp-iconography-colorDisabled-success` | `var(--bp-intent-success-disabled)` |
| `--bp-iconography-colorDisabled-warning` | `var(--bp-intent-warning-disabled)` |
| `--bp-iconography-colorDisabled-danger` | `var(--bp-intent-danger-disabled)` |

### Intent Colors

Semantic color system with 5 states per intent. These are the primary tokens for interactive elements.

#### Default Intent (Neutral)

| Variable                         | Default Value                | Description                      |
| -------------------------------- | ---------------------------- | -------------------------------- |
| `--bp-intent-default-rest`       | `var(--bp-palette-gray-700)` | Default/neutral rest state       |
| `--bp-intent-default-hover`      | `var(--bp-palette-gray-600)` | Default/neutral hover state      |
| `--bp-intent-default-active`     | `var(--bp-palette-gray-800)` | Default/neutral active state     |
| `--bp-intent-default-disabled`   | `var(--bp-palette-gray-400)` | Default/neutral disabled state   |
| `--bp-intent-default-foreground` | `var(--bp-palette-gray-100)` | Text color on default background |

#### Primary Intent

| Variable                         | Default Value                | Description                      |
| -------------------------------- | ---------------------------- | -------------------------------- |
| `--bp-intent-primary-rest`       | `var(--bp-palette-blue-500)` | Primary rest state               |
| `--bp-intent-primary-hover`      | `var(--bp-palette-blue-400)` | Primary hover state              |
| `--bp-intent-primary-active`     | `var(--bp-palette-blue-600)` | Primary active state             |
| `--bp-intent-primary-disabled`   | `var(--bp-palette-blue-300)` | Primary disabled state           |
| `--bp-intent-primary-foreground` | `var(--bp-palette-gray-100)` | Text color on primary background |

#### Success Intent

| Variable                         | Default Value                 | Description                      |
| -------------------------------- | ----------------------------- | -------------------------------- |
| `--bp-intent-success-rest`       | `var(--bp-palette-green-500)` | Success rest state               |
| `--bp-intent-success-hover`      | `var(--bp-palette-green-400)` | Success hover state              |
| `--bp-intent-success-active`     | `var(--bp-palette-green-600)` | Success active state             |
| `--bp-intent-success-disabled`   | `var(--bp-palette-green-300)` | Success disabled state           |
| `--bp-intent-success-foreground` | `var(--bp-palette-gray-100)`  | Text color on success background |

#### Warning Intent

| Variable                         | Default Value                  | Description                      |
| -------------------------------- | ------------------------------ | -------------------------------- |
| `--bp-intent-warning-rest`       | `var(--bp-palette-orange-500)` | Warning rest state               |
| `--bp-intent-warning-hover`      | `var(--bp-palette-orange-400)` | Warning hover state              |
| `--bp-intent-warning-active`     | `var(--bp-palette-orange-600)` | Warning active state             |
| `--bp-intent-warning-disabled`   | `var(--bp-palette-orange-300)` | Warning disabled state           |
| `--bp-intent-warning-foreground` | `var(--bp-palette-gray-100)`   | Text color on warning background |

#### Danger Intent

| Variable                        | Default Value                | Description                     |
| ------------------------------- | ---------------------------- | ------------------------------- |
| `--bp-intent-danger-rest`       | `var(--bp-palette-red-500)`  | Danger rest state               |
| `--bp-intent-danger-hover`      | `var(--bp-palette-red-400)`  | Danger hover state              |
| `--bp-intent-danger-active`     | `var(--bp-palette-red-600)`  | Danger active state             |
| `--bp-intent-danger-disabled`   | `var(--bp-palette-red-300)`  | Danger disabled state           |
| `--bp-intent-danger-foreground` | `var(--bp-palette-gray-100)` | Text color on danger background |

### Color Palettes

All colors use OKLCH color space for perceptually uniform color scales. Each palette has 10 shades (100-1000), where 100 is the lightest shade and 1000 is the darkest shade.

#### Gray Palette

| Variable                 | Value                         |
| ------------------------ | ----------------------------- |
| `--bp-palette-gray-100`  | `oklch(1 0 256.73)`           |
| `--bp-palette-gray-200`  | `oklch(0.8765 0.0034 256.73)` |
| `--bp-palette-gray-300`  | `oklch(0.7581 0.0066 256.73)` |
| `--bp-palette-gray-400`  | `oklch(0.6447 0.0096 256.73)` |
| `--bp-palette-gray-500`  | `oklch(0.5363 0.0125 256.73)` |
| `--bp-palette-gray-600`  | `oklch(0.4329 0.0153 256.73)` |
| `--bp-palette-gray-700`  | `oklch(0.3346 0.0179 256.73)` |
| `--bp-palette-gray-800`  | `oklch(0.2412 0.0203 256.73)` |
| `--bp-palette-gray-900`  | `oklch(0.1529 0.0227 256.73)` |
| `--bp-palette-gray-1000` | `oklch(0.0697 0.0247 256.94)` |

#### Blue Palette

| Variable                 | Value                         |
| ------------------------ | ----------------------------- |
| `--bp-palette-blue-100`  | `oklch(0.9146 0.031 257.52)`  |
| `--bp-palette-blue-200`  | `oklch(0.8301 0.0806 257.52)` |
| `--bp-palette-blue-300`  | `oklch(0.7441 0.1179 257.52)` |
| `--bp-palette-blue-400`  | `oklch(0.6567 0.1428 257.52)` |
| `--bp-palette-blue-500`  | `oklch(0.5678 0.1553 257.52)` |
| `--bp-palette-blue-600`  | `oklch(0.4774 0.1555 257.52)` |
| `--bp-palette-blue-700`  | `oklch(0.3861 0.1426 257.95)` |
| `--bp-palette-blue-800`  | `oklch(0.2942 0.1167 259.47)` |
| `--bp-palette-blue-900`  | `oklch(0.199 0.0801 259.76)`  |
| `--bp-palette-blue-1000` | `oklch(0.1012 0.0323 257.52)` |

#### Green Palette

| Variable                  | Value                         |
| ------------------------- | ----------------------------- |
| `--bp-palette-green-100`  | `oklch(0.9225 0.0295 152.83)` |
| `--bp-palette-green-200`  | `oklch(0.8373 0.0768 152.83)` |
| `--bp-palette-green-300`  | `oklch(0.7506 0.1123 152.83)` |
| `--bp-palette-green-400`  | `oklch(0.6624 0.1361 152.83)` |
| `--bp-palette-green-500`  | `oklch(0.5727 0.1479 152.83)` |
| `--bp-palette-green-600`  | `oklch(0.4888 0.1367 149.38)` |
| `--bp-palette-green-700`  | `oklch(0.3979 0.1158 147.8)`  |
| `--bp-palette-green-800`  | `oklch(0.3037 0.0914 146.52)` |
| `--bp-palette-green-900`  | `oklch(0.207 0.065 145.04)`   |
| `--bp-palette-green-1000` | `oklch(0.1034 0.0286 149.78)` |

#### Orange Palette

| Variable                   | Value                        |
| -------------------------- | ---------------------------- |
| `--bp-palette-orange-100`  | `oklch(0.9149 0.0279 55.46)` |
| `--bp-palette-orange-200`  | `oklch(0.8303 0.0726 55.46)` |
| `--bp-palette-orange-300`  | `oklch(0.7443 0.1062 55.46)` |
| `--bp-palette-orange-400`  | `oklch(0.6569 0.1286 55.46)` |
| `--bp-palette-orange-500`  | `oklch(0.5679 0.1399 55.46)` |
| `--bp-palette-orange-600`  | `oklch(0.4793 0.1301 48.21)` |
| `--bp-palette-orange-700`  | `oklch(0.3874 0.1079 46.57)` |
| `--bp-palette-orange-800`  | `oklch(0.294 0.0853 44.16)`  |
| `--bp-palette-orange-900`  | `oklch(0.1991 0.0626 39.91)` |
| `--bp-palette-orange-1000` | `oklch(0.1015 0.0272 49.06)` |

#### Red Palette

| Variable                | Value                        |
| ----------------------- | ---------------------------- |
| `--bp-palette-red-100`  | `oklch(0.9129 0.0311 23.02)` |
| `--bp-palette-red-200`  | `oklch(0.8285 0.0808 23.02)` |
| `--bp-palette-red-300`  | `oklch(0.7427 0.1182 23.02)` |
| `--bp-palette-red-400`  | `oklch(0.6554 0.1431 23.02)` |
| `--bp-palette-red-500`  | `oklch(0.5667 0.1557 23.02)` |
| `--bp-palette-red-600`  | `oklch(0.4765 0.1558 23.02)` |
| `--bp-palette-red-700`  | `oklch(0.3848 0.1436 23.02)` |
| `--bp-palette-red-800`  | `oklch(0.2924 0.1181 23.31)` |
| `--bp-palette-red-900`  | `oklch(0.1985 0.0803 23.83)` |
| `--bp-palette-red-1000` | `oklch(0.101 0.0324 23.02)`  |

#### Vermillion Palette

| Variable                       | Value                        |
| ------------------------------ | ---------------------------- |
| `--bp-palette-vermillion-100`  | `oklch(0.9155 0.0312 34.4)`  |
| `--bp-palette-vermillion-200`  | `oklch(0.8309 0.0811 34.4)`  |
| `--bp-palette-vermillion-300`  | `oklch(0.7448 0.1186 34.4)`  |
| `--bp-palette-vermillion-400`  | `oklch(0.6573 0.1436 34.4)`  |
| `--bp-palette-vermillion-500`  | `oklch(0.5683 0.1562 34.4)`  |
| `--bp-palette-vermillion-600`  | `oklch(0.4778 0.1563 34.4)`  |
| `--bp-palette-vermillion-700`  | `oklch(0.3863 0.1431 32.85)` |
| `--bp-palette-vermillion-800`  | `oklch(0.2933 0.1175 30.04)` |
| `--bp-palette-vermillion-900`  | `oklch(0.1982 0.0807 29.49)` |
| `--bp-palette-vermillion-1000` | `oklch(0.1013 0.0325 34.4)`  |

#### Rose Palette

| Variable                 | Value                       |
| ------------------------ | --------------------------- |
| `--bp-palette-rose-100`  | `oklch(0.9147 0.0314 3.99)` |
| `--bp-palette-rose-200`  | `oklch(0.8302 0.0816 3.99)` |
| `--bp-palette-rose-300`  | `oklch(0.7442 0.1193 3.99)` |
| `--bp-palette-rose-400`  | `oklch(0.6568 0.1445 3.99)` |
| `--bp-palette-rose-500`  | `oklch(0.5678 0.1571 3.99)` |
| `--bp-palette-rose-600`  | `oklch(0.4774 0.1573 3.99)` |
| `--bp-palette-rose-700`  | `oklch(0.3856 0.1449 3.99)` |
| `--bp-palette-rose-800`  | `oklch(0.2937 0.1181 4.4)`  |
| `--bp-palette-rose-900`  | `oklch(0.1993 0.0801 4.77)` |
| `--bp-palette-rose-1000` | `oklch(0.1012 0.0327 3.99)` |

#### Violet Palette

| Variable                   | Value                         |
| -------------------------- | ----------------------------- |
| `--bp-palette-violet-100`  | `oklch(0.9143 0.031 327.38)`  |
| `--bp-palette-violet-200`  | `oklch(0.8298 0.0807 327.38)` |
| `--bp-palette-violet-300`  | `oklch(0.7439 0.118 327.38)`  |
| `--bp-palette-violet-400`  | `oklch(0.6564 0.143 327.38)`  |
| `--bp-palette-violet-500`  | `oklch(0.5675 0.1555 327.38)` |
| `--bp-palette-violet-600`  | `oklch(0.4772 0.1557 327.38)` |
| `--bp-palette-violet-700`  | `oklch(0.3854 0.1434 327.38)` |
| `--bp-palette-violet-800`  | `oklch(0.2921 0.1188 327.38)` |
| `--bp-palette-violet-900`  | `oklch(0.1973 0.0818 327.38)` |
| `--bp-palette-violet-1000` | `oklch(0.1011 0.0324 327.38)` |

#### Indigo Palette

| Variable                   | Value                         |
| -------------------------- | ----------------------------- |
| `--bp-palette-indigo-100`  | `oklch(0.9151 0.0312 288.26)` |
| `--bp-palette-indigo-200`  | `oklch(0.8305 0.0812 288.26)` |
| `--bp-palette-indigo-300`  | `oklch(0.7445 0.1188 288.26)` |
| `--bp-palette-indigo-400`  | `oklch(0.657 0.1438 288.26)`  |
| `--bp-palette-indigo-500`  | `oklch(0.568 0.1565 288.26)`  |
| `--bp-palette-indigo-600`  | `oklch(0.4776 0.1566 288.26)` |
| `--bp-palette-indigo-700`  | `oklch(0.3857 0.1443 288.26)` |
| `--bp-palette-indigo-800`  | `oklch(0.2923 0.1195 288.26)` |
| `--bp-palette-indigo-900`  | `oklch(0.1975 0.0823 288.26)` |
| `--bp-palette-indigo-1000` | `oklch(0.1012 0.0326 288.26)` |

#### Cerulean Palette

| Variable                     | Value                         |
| ---------------------------- | ----------------------------- |
| `--bp-palette-cerulean-100`  | `oklch(0.9282 0.0278 242.96)` |
| `--bp-palette-cerulean-200`  | `oklch(0.8425 0.0723 242.96)` |
| `--bp-palette-cerulean-300`  | `oklch(0.7552 0.1057 242.96)` |
| `--bp-palette-cerulean-400`  | `oklch(0.6664 0.128 242.96)`  |
| `--bp-palette-cerulean-500`  | `oklch(0.5762 0.1392 242.96)` |
| `--bp-palette-cerulean-600`  | `oklch(0.491 0.1308 247.55)`  |
| `--bp-palette-cerulean-700`  | `oklch(0.3997 0.1131 249.98)` |
| `--bp-palette-cerulean-800`  | `oklch(0.3049 0.0907 251.79)` |
| `--bp-palette-cerulean-900`  | `oklch(0.2071 0.0645 253.32)` |
| `--bp-palette-cerulean-1000` | `oklch(0.1039 0.0273 247.02)` |

#### Turquoise Palette

| Variable                      | Value                         |
| ----------------------------- | ----------------------------- |
| `--bp-palette-turquoise-100`  | `oklch(0.9267 0.0203 184.34)` |
| `--bp-palette-turquoise-200`  | `oklch(0.8411 0.0528 184.34)` |
| `--bp-palette-turquoise-300`  | `oklch(0.754 0.0772 184.34)`  |
| `--bp-palette-turquoise-400`  | `oklch(0.6653 0.0935 184.34)` |
| `--bp-palette-turquoise-500`  | `oklch(0.5753 0.1016 184.34)` |
| `--bp-palette-turquoise-600`  | `oklch(0.491 0.0874 183.12)`  |
| `--bp-palette-turquoise-700`  | `oklch(0.3996 0.0714 182.54)` |
| `--bp-palette-turquoise-800`  | `oklch(0.3049 0.0546 182.05)` |
| `--bp-palette-turquoise-900`  | `oklch(0.2079 0.0374 181.41)` |
| `--bp-palette-turquoise-1000` | `oklch(0.1039 0.0185 183.28)` |

#### Forest Palette

| Variable                   | Value                         |
| -------------------------- | ----------------------------- |
| `--bp-palette-forest-100`  | `oklch(0.9141 0.0313 144.05)` |
| `--bp-palette-forest-200`  | `oklch(0.8297 0.0813 144.05)` |
| `--bp-palette-forest-300`  | `oklch(0.7437 0.1189 144.05)` |
| `--bp-palette-forest-400`  | `oklch(0.6563 0.144 144.05)`  |
| `--bp-palette-forest-500`  | `oklch(0.5674 0.1567 144.05)` |
| `--bp-palette-forest-600`  | `oklch(0.4777 0.1559 143.78)` |
| `--bp-palette-forest-700`  | `oklch(0.3906 0.1329 142.5)`  |
| `--bp-palette-forest-800`  | `oklch(0.299 0.1018 142.5)`   |
| `--bp-palette-forest-900`  | `oklch(0.2025 0.0689 142.5)`  |
| `--bp-palette-forest-1000` | `oklch(0.1011 0.0326 144.05)` |

#### Lime Palette

| Variable                 | Value                         |
| ------------------------ | ----------------------------- |
| `--bp-palette-lime-100`  | `oklch(0.9157 0.0283 124.44)` |
| `--bp-palette-lime-200`  | `oklch(0.8311 0.0737 124.44)` |
| `--bp-palette-lime-300`  | `oklch(0.745 0.1077 124.44)`  |
| `--bp-palette-lime-400`  | `oklch(0.6575 0.1304 124.44)` |
| `--bp-palette-lime-500`  | `oklch(0.5684 0.1419 124.44)` |
| `--bp-palette-lime-600`  | `oklch(0.4798 0.1224 126.19)` |
| `--bp-palette-lime-700`  | `oklch(0.3878 0.0995 126.58)` |
| `--bp-palette-lime-800`  | `oklch(0.2943 0.0761 127.19)` |
| `--bp-palette-lime-900`  | `oklch(0.1993 0.0524 128.33)` |
| `--bp-palette-lime-1000` | `oklch(0.1016 0.0259 125.98)` |

#### Gold Palette

| Variable                 | Value                        |
| ------------------------ | ---------------------------- |
| `--bp-palette-gold-100`  | `oklch(0.9168 0.0238 76.81)` |
| `--bp-palette-gold-200`  | `oklch(0.8321 0.0619 76.81)` |
| `--bp-palette-gold-300`  | `oklch(0.7459 0.0905 76.81)` |
| `--bp-palette-gold-400`  | `oklch(0.6583 0.1096 76.81)` |
| `--bp-palette-gold-500`  | `oklch(0.5691 0.1192 76.81)` |
| `--bp-palette-gold-600`  | `oklch(0.4803 0.1038 70.44)` |
| `--bp-palette-gold-700`  | `oklch(0.3883 0.0847 68.91)` |
| `--bp-palette-gold-800`  | `oklch(0.2947 0.0653 66.51)` |
| `--bp-palette-gold-900`  | `oklch(0.1995 0.0459 61.95)` |
| `--bp-palette-gold-1000` | `oklch(0.1017 0.0219 71.31)` |

#### Sepia Palette

| Variable                  | Value                        |
| ------------------------- | ---------------------------- |
| `--bp-palette-sepia-100`  | `oklch(0.9184 0.0272 58.06)` |
| `--bp-palette-sepia-200`  | `oklch(0.8336 0.0708 58.06)` |
| `--bp-palette-sepia-300`  | `oklch(0.7472 0.1035 58.06)` |
| `--bp-palette-sepia-400`  | `oklch(0.6594 0.1254 58.06)` |
| `--bp-palette-sepia-500`  | `oklch(0.5701 0.1363 58.06)` |
| `--bp-palette-sepia-600`  | `oklch(0.4812 0.1258 50.76)` |
| `--bp-palette-sepia-700`  | `oklch(0.3889 0.1041 49.14)` |
| `--bp-palette-sepia-800`  | `oklch(0.2952 0.0821 46.68)` |
| `--bp-palette-sepia-900`  | `oklch(0.1999 0.0599 42.33)` |
| `--bp-palette-sepia-1000` | `oklch(0.1019 0.0263 51.63)` |

### Surface

Borders, shadows, spacing, z-index, and surface colors for cards, panels, and backgrounds.

#### Border & Shape

| Variable                           | Default Value                                            | Description            |
| ---------------------------------- | -------------------------------------------------------- | ---------------------- |
| `--bp-surface-borderColor-default` | `oklch(from var(--bp-intent-default-rest) l c h / 0.12)` | Default border color   |
| `--bp-surface-borderColor-strong`  | `oklch(from var(--bp-intent-default-rest) l c h / 0.25)` | Strong border color    |
| `--bp-surface-borderWidth`         | `1px`                                                    | Standard border width  |
| `--bp-surface-borderRadius`        | `4px`                                                    | Standard border radius |

#### Elevation (Shadows)

| Variable                | Default Value                                                                  | Description                         |
| ----------------------- | ------------------------------------------------------------------------------ | ----------------------------------- |
| `--bp-surface-shadow-0` | `0px 0px 5px 0px oklch(0 0 0 / 0.1)`                                           | Card elevation (z-index 100)        |
| `--bp-surface-shadow-1` | `0px 1px 3px 0px oklch(0 0 0 / 0.2), 0px 1px 2px -1px oklch(0 0 0 / 0.2)`      | Interactive elevation (z-index 200) |
| `--bp-surface-shadow-2` | `0px 4px 6px -4px oklch(0 0 0 / 0.2), 0px 10px 15px -3px oklch(0 0 0 / 0.2)`   | Tooltip elevation (z-index 300)     |
| `--bp-surface-shadow-3` | `0px 20px 25px -5px oklch(0 0 0 / 0.2), 0px 10px 15px -3px oklch(0 0 0 / 0.2)` | Panel elevation (z-index 400)       |
| `--bp-surface-shadow-4` | `0px 25px 50px -12px oklch(0 0 0 / 0.4)`                                       | Modal elevation (z-index 500)       |

#### Spacing & Z-Index

| Variable                | Default Value | Description                                     |
| ----------------------- | ------------- | ----------------------------------------------- |
| `--bp-surface-spacing`  | `4px`         | Base spacing unit (multiply for larger spacing) |
| `--bp-surface-zIndex-0` | `0`           | Base layer                                      |
| `--bp-surface-zIndex-1` | `10`          | Interactive elements                            |
| `--bp-surface-zIndex-2` | `20`          | Tooltips                                        |
| `--bp-surface-zIndex-3` | `30`          | Panels                                          |
| `--bp-surface-zIndex-4` | `40`          | Modals                                          |

#### Colors

| Variable                 | Default Value          | Description           |
| ------------------------ | ---------------------- | --------------------- |
| `--bp-surface-colorCode` | `oklch(0.95 0.01 264)` | Code block background |

**Rest State:**
| Variable | References |
|----------|-----------|
| `--bp-surface-colorRest-default` | `var(--bp-palette-gray-100)` |
| `--bp-surface-colorRest-primary` | `var(--bp-intent-primary-rest)` |
| `--bp-surface-colorRest-success` | `var(--bp-intent-success-rest)` |
| `--bp-surface-colorRest-warning` | `var(--bp-intent-warning-rest)` |
| `--bp-surface-colorRest-danger` | `var(--bp-intent-danger-rest)` |

**Hover State:**
| Variable | References |
|----------|-----------|
| `--bp-surface-colorHover-default` | `var(--bp-palette-gray-200)` |
| `--bp-surface-colorHover-primary` | `var(--bp-intent-primary-hover)` |
| `--bp-surface-colorHover-success` | `var(--bp-intent-success-hover)` |
| `--bp-surface-colorHover-warning` | `var(--bp-intent-warning-hover)` |
| `--bp-surface-colorHover-danger` | `var(--bp-intent-danger-hover)` |

**Active State:**
| Variable | References |
|----------|-----------|
| `--bp-surface-colorActive-default` | `var(--bp-palette-gray-300)` |
| `--bp-surface-colorActive-primary` | `var(--bp-intent-primary-active)` |
| `--bp-surface-colorActive-success` | `var(--bp-intent-success-active)` |
| `--bp-surface-colorActive-warning` | `var(--bp-intent-warning-active)` |
| `--bp-surface-colorActive-danger` | `var(--bp-intent-danger-active)` |

**Disabled State:**
| Variable | References |
|----------|-----------|
| `--bp-surface-colorDisabled-default` | `var(--bp-palette-gray-100)` |
| `--bp-surface-colorDisabled-primary` | `var(--bp-intent-primary-disabled)` |
| `--bp-surface-colorDisabled-success` | `var(--bp-intent-success-disabled)` |
| `--bp-surface-colorDisabled-warning` | `var(--bp-intent-warning-disabled)` |
| `--bp-surface-colorDisabled-danger` | `var(--bp-intent-danger-disabled)` |

**Depth Layers (Subtle Background Tints):**
| Variable | References | Description |
|----------|-----------|-------------|
| `--bp-surface-depthLayer-default` | `oklch(from var(--bp-intent-default-rest) l c h / 0.05)` | 5% opacity tint |
| `--bp-surface-depthLayer-primary` | `oklch(from var(--bp-intent-primary-rest) l c h / 0.05)` | 5% opacity tint |
| `--bp-surface-depthLayer-success` | `oklch(from var(--bp-intent-success-rest) l c h / 0.05)` | 5% opacity tint |
| `--bp-surface-depthLayer-warning` | `oklch(from var(--bp-intent-warning-rest) l c h / 0.05)` | 5% opacity tint |
| `--bp-surface-depthLayer-danger` | `oklch(from var(--bp-intent-danger-rest) l c h / 0.05)` | 5% opacity tint |

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
| `--bp-typography-size-bodyXSmall` | `9px` | Extra small body text |
| `--bp-typography-size-bodySmall` | `11px` | Small body text |
| `--bp-typography-size-bodyMedium` | `13px` | Medium body text (most common) |
| `--bp-typography-size-bodyLarge` | `14px` | Large body text |

**Heading Sizes:**
| Variable | Default Value | Use Case |
|----------|---------------|----------|
| `--bp-typography-size-headingSmall` | `16px` | Small heading (H5) |
| `--bp-typography-size-headingMedium` | `20px` | Medium heading (H4) |
| `--bp-typography-size-headingLarge` | `24px` | Large heading (H3) |
| `--bp-typography-size-headingXLarge` | `28px` | Extra large heading (H2) |
| `--bp-typography-size-headingDisplay` | `46px` | Display heading (H1) |

**Code Sizes:**
| Variable | Default Value |
|----------|---------------|
| `--bp-typography-size-codeSmall` | `11px` |
| `--bp-typography-size-codeMedium` | `12px` |
| `--bp-typography-size-codeLarge` | `14px` |

#### Font Weights & Line Heights

| Variable                             | Default Value | Description                        |
| ------------------------------------ | ------------- | ---------------------------------- |
| `--bp-typography-weight-default`     | `450`         | Regular weight                     |
| `--bp-typography-weight-bold`        | `550`         | Bold weight                        |
| `--bp-typography-lineHeight-default` | `1.5`         | Standard line height               |
| `--bp-typography-lineHeight-large`   | `1.75`        | Larger line height for readability |

#### Colors

| Variable                     | Default Value                   | Description             |
| ---------------------------- | ------------------------------- | ----------------------- |
| `--bp-typography-colorMuted` | `var(--bp-intent-default-rest)` | Muted/subtle text color |

**Rest State:**
| Variable | References |
|----------|-----------|
| `--bp-typography-colorRest-default` | `var(--bp-palette-gray-900)` |
| `--bp-typography-colorRest-primary` | `var(--bp-intent-primary-rest)` |
| `--bp-typography-colorRest-success` | `var(--bp-intent-success-rest)` |
| `--bp-typography-colorRest-warning` | `var(--bp-intent-warning-rest)` |
| `--bp-typography-colorRest-danger` | `var(--bp-intent-danger-rest)` |

**Hover State:**
| Variable | References |
|----------|-----------|
| `--bp-typography-colorHover-default` | `var(--bp-palette-gray-1000)` |
| `--bp-typography-colorHover-primary` | `var(--bp-intent-primary-hover)` |
| `--bp-typography-colorHover-success` | `var(--bp-intent-success-hover)` |
| `--bp-typography-colorHover-warning` | `var(--bp-intent-warning-hover)` |
| `--bp-typography-colorHover-danger` | `var(--bp-intent-danger-hover)` |

**Active State:**
| Variable | References |
|----------|-----------|
| `--bp-typography-colorActive-default` | `var(--bp-palette-gray-800)` |
| `--bp-typography-colorActive-primary` | `var(--bp-intent-primary-active)` |
| `--bp-typography-colorActive-success` | `var(--bp-intent-success-active)` |
| `--bp-typography-colorActive-warning` | `var(--bp-intent-warning-active)` |
| `--bp-typography-colorActive-danger` | `var(--bp-intent-danger-active)` |

**Disabled State:**
| Variable | References |
|----------|-----------|
| `--bp-typography-colorDisabled-default` | `var(--bp-palette-gray-400)` |
| `--bp-typography-colorDisabled-primary` | `var(--bp-intent-primary-disabled)` |
| `--bp-typography-colorDisabled-success` | `var(--bp-intent-success-disabled)` |
| `--bp-typography-colorDisabled-warning` | `var(--bp-intent-warning-disabled)` |
| `--bp-typography-colorDisabled-danger` | `var(--bp-intent-danger-disabled)` |

## OSDK Component Tokens (Level 2)

Component-specific tokens that compose Blueprint Level 1 tokens.

### Checkbox

Styling for checkbox components.

| Variable                             | Default Value                                                               | Description                 |
| ------------------------------------ | --------------------------------------------------------------------------- | --------------------------- |
| `--osdk-checkbox-icon-size`          | `var(--bp-iconography-size-small)`                                          | Size of checkmark icon      |
| `--osdk-checkbox-padding`            | `calc(var(--bp-surface-spacing) / 2)`                                       | Internal padding            |
| `--osdk-checkbox-border`             | `var(--bp-surface-borderWidth) solid var(--bp-surface-borderColor-default)` | Border style                |
| `--osdk-checkbox-bg`                 | `transparent`                                                               | Unchecked background        |
| `--osdk-checkbox-bg-hover`           | `var(--bp-surface-colorHover-default)`                                      | Unchecked hover background  |
| `--osdk-checkbox-bg-active`          | `var(--bp-surface-colorActive-default)`                                     | Unchecked active background |
| `--osdk-checkbox-bg-checked`         | `var(--bp-intent-primary-rest)`                                             | Checked background          |
| `--osdk-checkbox-bg-checked-hover`   | `var(--bp-intent-primary-hover)`                                            | Checked hover background    |
| `--osdk-checkbox-bg-checked-active`  | `var(--bp-intent-primary-active)`                                           | Checked active background   |
| `--osdk-checkbox-checked-foreground` | `var(--bp-intent-primary-foreground)`                                       | Checkmark color             |

### Table

Styling for table components including headers, rows, and cells.

#### Base Border Properties

| Variable                    | Default Value                           | Description                      |
| --------------------------- | --------------------------------------- | -------------------------------- |
| `--osdk-table-border-color` | `var(--bp-surface-borderColor-default)` | Base color for all table borders |
| `--osdk-table-border-width` | `var(--bp-surface-borderWidth)`         | Base width for all table borders |

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

| Variable                         | Default Value                          | Description                   |
| -------------------------------- | -------------------------------------- | ----------------------------- |
| `--osdk-table-header-bg`         | `var(--bp-palette-gray-100)`           | Table header background color |
| `--osdk-table-header-fontWeight` | `var(--bp-typography-weight-bold)`     | Header text weight            |
| `--osdk-table-header-fontSize`   | `var(--bp-typography-size-bodyMedium)` | Header text size              |
| `--osdk-table-header-color`      | `var(--bp-typography-colorMuted)`      | Header text color             |

#### Row Backgrounds

| Variable                        | Default Value                                        | Description                               |
| ------------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| `--osdk-table-row-bg-default`   | `var(--bp-palette-gray-100)`                         | Default row background                    |
| `--osdk-table-row-bg-alternate` | (falls back to `--osdk-table-row-bg-default`)        | Alternate row background (zebra striping) |
| `--osdk-table-row-bg-hover`     | `oklch(from var(--bp-palette-blue-100) l c h / 0.2)` | Row hover background                      |
| `--osdk-table-row-bg-active`    | `var(--bp-palette-blue-100)`                         | Active/selected row background            |

#### Row Border Colors (Hover/Active States)

| Variable                               | Default Value                   | Description                    |
| -------------------------------------- | ------------------------------- | ------------------------------ |
| `--osdk-table-row-border-color-hover`  | `var(--bp-intent-primary-rest)` | Border color for hovered rows  |
| `--osdk-table-row-border-color-active` | `var(--bp-intent-primary-rest)` | Border color for selected rows |

#### Cell Styling

| Variable                     | Default Value                                                             | Description     |
| ---------------------------- | ------------------------------------------------------------------------- | --------------- |
| `--osdk-table-cell-padding`  | `calc(var(--bp-surface-spacing) * 3) calc(var(--bp-surface-spacing) * 2)` | Cell padding    |
| `--osdk-table-cell-fontSize` | `var(--bp-typography-size-bodyMedium)`                                    | Cell text size  |
| `--osdk-table-cell-color`    | `var(--bp-typography-colorRest-default)`                                  | Cell text color |

## Creating a Complete Custom Theme

To create a complete custom theme, override the tokens at the appropriate level:

```css
@layer osdk.tokens, custom.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

@layer custom.theme {
  :root {
    /* Override color palettes to change the entire color system */
    --bp-palette-blue-500: oklch(0.6 0.15 180); /* Change primary to teal */

    /* Or directly override intent colors */
    --bp-intent-primary-rest: var(--bp-palette-green-500);
    --bp-intent-primary-hover: var(--bp-palette-green-400);
    --bp-intent-primary-active: var(--bp-palette-green-600);

    /* Override typography */
    --bp-typography-family-default: "Helvetica Neue", sans-serif;
    --bp-typography-size-bodyMedium: 14px;

    /* Override surface properties */
    --bp-surface-borderRadius: 8px;
    --bp-surface-spacing: 8px;

    /* Override component tokens for fine-grained control */
    --osdk-checkbox-border: 2px solid var(--bp-palette-gray-500);
  }
}
```

### Theme Checklist

To create a fully custom theme, consider overriding these key token groups:

- [ ] **Color Palettes** (`--bp-palette-*`) - Base color scales for the entire system
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
