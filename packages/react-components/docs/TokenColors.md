# Color Tokens

All color values in `@osdk/react-components` are exposed as CSS custom
properties. Override them to theme components without touching source code.

## Palette Tokens

Raw color primitives mapped from Blueprint. Use these as building blocks for
semantic tokens.

| Token                         | Maps to                     |
| ----------------------------- | --------------------------- |
| `--osdk-palette-white`        | `--bp-palette-white`        |
| `--osdk-palette-black`        | `--bp-palette-black`        |
| `--osdk-palette-gray-1`       | `--bp-palette-gray-1`       |
| `--osdk-palette-gray-2`       | `--bp-palette-gray-2`       |
| `--osdk-palette-gray-4`       | `--bp-palette-gray-4`       |
| `--osdk-palette-dark-gray-2`  | `--bp-palette-dark-gray-2`  |
| `--osdk-palette-dark-gray-3`  | `--bp-palette-dark-gray-3`  |
| `--osdk-palette-light-gray-1` | `--bp-palette-light-gray-1` |
| `--osdk-palette-light-gray-3` | `--bp-palette-light-gray-3` |
| `--osdk-palette-light-gray-4` | `--bp-palette-light-gray-4` |
| `--osdk-palette-light-gray-5` | `--bp-palette-light-gray-5` |

## Semantic Background Tokens

Higher-level tokens that abstract palette usage into meaningful roles.

| Token                             | Default                            |
| --------------------------------- | ---------------------------------- |
| `--osdk-background-primary`       | `var(--osdk-palette-white)`        |
| `--osdk-background-secondary`     | `var(--osdk-palette-light-gray-5)` |
| `--osdk-background-tertiary`      | `var(--osdk-palette-light-gray-4)` |
| `--osdk-background-skeleton-from` | `color-mix(gray-1, 5%)`            |
| `--osdk-background-skeleton-to`   | `color-mix(gray-1, 40%)`           |
| `--osdk-background-backdrop`      | `color-mix(black, 50%)`            |

## Intent Tokens

Intent tokens define interactive color states. Each intent has five states:
`rest`, `hover`, `active`, `disabled`, and `foreground`.

### Default

| Token                              | Maps to                          |
| ---------------------------------- | -------------------------------- |
| `--osdk-intent-default-rest`       | `--bp-intent-default-rest`       |
| `--osdk-intent-default-hover`      | `--bp-intent-default-hover`      |
| `--osdk-intent-default-active`     | `--bp-intent-default-active`     |
| `--osdk-intent-default-disabled`   | `--bp-intent-default-disabled`   |
| `--osdk-intent-default-foreground` | `--bp-intent-default-foreground` |

### Primary

| Token                              | Maps to                          |
| ---------------------------------- | -------------------------------- |
| `--osdk-intent-primary-rest`       | `--bp-intent-primary-rest`       |
| `--osdk-intent-primary-hover`      | `--bp-intent-primary-hover`      |
| `--osdk-intent-primary-active`     | `--bp-intent-primary-active`     |
| `--osdk-intent-primary-disabled`   | `--bp-intent-primary-disabled`   |
| `--osdk-intent-primary-foreground` | `--bp-intent-primary-foreground` |

### Success

| Token                              | Maps to                          |
| ---------------------------------- | -------------------------------- |
| `--osdk-intent-success-rest`       | `--bp-intent-success-rest`       |
| `--osdk-intent-success-hover`      | `--bp-intent-success-hover`      |
| `--osdk-intent-success-active`     | `--bp-intent-success-active`     |
| `--osdk-intent-success-disabled`   | `--bp-intent-success-disabled`   |
| `--osdk-intent-success-foreground` | `--bp-intent-success-foreground` |

### Warning

| Token                              | Maps to                          |
| ---------------------------------- | -------------------------------- |
| `--osdk-intent-warning-rest`       | `--bp-intent-warning-rest`       |
| `--osdk-intent-warning-hover`      | `--bp-intent-warning-hover`      |
| `--osdk-intent-warning-active`     | `--bp-intent-warning-active`     |
| `--osdk-intent-warning-disabled`   | `--bp-intent-warning-disabled`   |
| `--osdk-intent-warning-foreground` | `--bp-intent-warning-foreground` |

### Danger

| Token                             | Maps to                         |
| --------------------------------- | ------------------------------- |
| `--osdk-intent-danger-rest`       | `--bp-intent-danger-rest`       |
| `--osdk-intent-danger-hover`      | `--bp-intent-danger-hover`      |
| `--osdk-intent-danger-active`     | `--bp-intent-danger-active`     |
| `--osdk-intent-danger-disabled`   | `--bp-intent-danger-disabled`   |
| `--osdk-intent-danger-foreground` | `--bp-intent-danger-foreground` |

## Surface Tokens

| Token                                            | Maps to                                        |
| ------------------------------------------------ | ---------------------------------------------- |
| `--osdk-surface-background-color-default-rest`   | `--bp-surface-background-color-default-rest`   |
| `--osdk-surface-background-color-default-hover`  | `--bp-surface-background-color-default-hover`  |
| `--osdk-surface-background-color-default-active` | `--bp-surface-background-color-default-active` |
| `--osdk-surface-background-color-danger-rest`    | `--bp-surface-background-color-danger-rest`    |
| `--osdk-surface-background-color-danger-hover`   | `--bp-surface-background-color-danger-hover`   |
| `--osdk-surface-background-color-danger-active`  | `--bp-surface-background-color-danger-active`  |
| `--osdk-surface-border-color-default`            | `--bp-surface-border-color-default`            |
| `--osdk-surface-border-color-strong`             | `--bp-surface-border-color-strong`             |

## Custom Color Tokens

Derived colors using `color-mix()` for opacity effects.

| Token                              | Definition                            |
| ---------------------------------- | ------------------------------------- |
| `--osdk-custom-color-gray-1`       | `color-mix(gray-1, 5%)`               |
| `--osdk-custom-color-gray-2`       | `color-mix(gray-1, 8%)`               |
| `--osdk-custom-color-gray-3`       | `color-mix(gray-1, 10%)`              |
| `--osdk-custom-color-gray-4`       | `color-mix(gray-1, 20%)`              |
| `--osdk-custom-color-light-gray-1` | `color-mix(light-gray-1, 60%)`        |
| `--osdk-custom-color-light-gray-2` | `color-mix(light-gray-5, 50%)`        |
| `--osdk-custom-color-primary-1`    | `color-mix(intent-primary-rest, 50%)` |

## Typography Color Tokens

| Token                                      | Maps to                                  |
| ------------------------------------------ | ---------------------------------------- |
| `--osdk-typography-color-default-rest`     | `--bp-typography-color-default-rest`     |
| `--osdk-typography-color-default-hover`    | `--bp-typography-color-default-hover`    |
| `--osdk-typography-color-default-active`   | `--bp-typography-color-default-active`   |
| `--osdk-typography-color-default-disabled` | `--bp-typography-color-default-disabled` |
| `--osdk-typography-color-muted`            | `--bp-typography-color-muted`            |
| `--osdk-typography-color-danger-rest`      | `--bp-typography-color-danger-rest`      |
| `--osdk-typography-color-danger-active`    | `--bp-typography-color-danger-active`    |
