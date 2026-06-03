# Spacing Tokens

Spacing, border, shadow, and z-index tokens used across
`@osdk/react-components`. These tokens are a subset of the full
[CSS Variables reference](./CSSVariables.md), which documents every
custom property including per-component tokens.

## Surface Spacing

| Token                          | Maps to                      |
| ------------------------------ | ---------------------------- |
| `--osdk-surface-spacing`       | `--bp-surface-spacing`       |
| `--osdk-surface-border-radius` | `--bp-surface-border-radius` |
| `--osdk-surface-border-width`  | `--bp-surface-border-width`  |
| `--osdk-surface-layer-primary` | `--bp-surface-layer-primary` |

## Borders

| Token                                 | Default                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------- |
| `--osdk-surface-border`               | `var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)` |
| `--osdk-surface-border-color-default` | `--bp-surface-border-color-default`                                               |
| `--osdk-surface-border-color-strong`  | `--bp-surface-border-color-strong`                                                |

## Shadows

| Token                     | Maps to                 |
| ------------------------- | ----------------------- |
| `--osdk-surface-shadow-2` | `--bp-surface-shadow-2` |

## Z-Index

Four z-index layers provide consistent stacking across components.

| Token                      | Maps to                  | Typical use                       |
| -------------------------- | ------------------------ | --------------------------------- |
| `--osdk-surface-z-index-1` | `--bp-surface-z-index-1` | Base content                      |
| `--osdk-surface-z-index-2` | `--bp-surface-z-index-2` | Sticky headers, floating elements |
| `--osdk-surface-z-index-3` | `--bp-surface-z-index-3` | Overlays, dropdowns               |
| `--osdk-surface-z-index-4` | `--bp-surface-z-index-4` | Modals, dialogs                   |

## Focus Tokens

| Token                                 | Maps to                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------- |
| `--osdk-emphasis-focus-width`         | `--bp-emphasis-focus-width`                                               |
| `--osdk-emphasis-focus-color`         | `--bp-emphasis-focus-color`                                               |
| `--osdk-emphasis-focus-offset`        | `--bp-emphasis-focus-offset`                                              |
| `--osdk-focus-outline`                | `var(--osdk-emphasis-focus-width) solid var(--osdk-emphasis-focus-color)` |
| `--osdk-focus-visible-outline-offset` | `var(--osdk-emphasis-focus-offset)`                                       |

## Transition Tokens

| Token                                 | Maps to                             |
| ------------------------------------- | ----------------------------------- |
| `--osdk-emphasis-transition-duration` | `--bp-emphasis-transition-duration` |
| `--osdk-emphasis-ease-default`        | `--bp-emphasis-ease-default`        |

## Miscellaneous

| Token                     | Default |
| ------------------------- | ------- |
| `--osdk-disabled-opacity` | `0.5`   |

## Override Example

```css
/* Increase border radius for a softer look */
:root {
  --osdk-surface-border-radius: 8px;
  --osdk-surface-spacing: 12px;
}
```
