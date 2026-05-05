# CSS Variables API Reference

Complete reference of all CSS custom properties (variables) used in `@osdk/react-components`.

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
- [Semantic Color Tokens](#semantic-color-tokens)
  - [Background Colors](#background-colors)
  - [Custom Colors](#custom-colors)
- [OSDK Component Tokens](#osdk-component-tokens)
  - [Shared Styling](#shared-styling)
  - [Drag Handle](#drag-handle)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [CBAC Picker](#cbac-picker)
  - [DateTime Picker](#datetime-picker)
  - [Dialog](#dialog)
  - [Draggable](#draggable)
  - [File Picker](#file-picker)
  - [Filter List](#filter-list)
  - [Form](#form)
  - [Input](#input)
  - [Markdown Renderer](#markdown-renderer)
  - [Object Set](#object-set)
  - [PDF Viewer](#pdf-viewer)
  - [Radio](#radio)
  - [Switch](#switch)
  - [Table](#table)
  - [Time Picker](#time-picker)
  - [Tooltip](#tooltip)
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
| `--osdk-surface-z-index-1`                       | `--bp-surface-z-index-1`                       | Z-index layer 1                            |
| `--osdk-surface-z-index-2`                       | `--bp-surface-z-index-2`                       | Z-index layer 2                            |
| `--osdk-surface-z-index-3`                       | `--bp-surface-z-index-3`                       | Z-index layer 3                            |
| `--osdk-surface-z-index-4`                       | `--bp-surface-z-index-4`                       | Z-index layer 4                            |
| `--osdk-surface-border-radius`                   | `--bp-surface-border-radius`                   | Standard border radius (4px)               |
| `--osdk-surface-layer-primary`                   | `--bp-surface-layer-primary`                   | Primary surface layer color                |
| `--osdk-surface-border-width`                    | `--bp-surface-border-width`                    | Standard border width (1px)                |
| `--osdk-surface-border-color-default`            | `--bp-surface-border-color-default`            | Default border color                       |
| `--osdk-surface-border-color-strong`             | `--bp-surface-border-color-strong`             | Strong/emphasized border color             |
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
| `--osdk-typography-family-default`      | `--bp-typography-family-default`      | Default font family          |
| `--osdk-typography-color-muted`         | `--bp-typography-color-muted`         | Muted/subtle text color      |
| `--osdk-typography-color-default-rest`  | `--bp-typography-color-default-rest`  | Default text color           |
| `--osdk-typography-color-danger-rest`   | `--bp-typography-color-danger-rest`   | Danger text color            |
| `--osdk-typography-color-danger-active` | `--bp-typography-color-danger-active` | Danger active text color     |
| `--osdk-typography-size-body-x-small`   | `--bp-typography-size-body-x-small`   | Extra-small body text size   |
| `--osdk-typography-size-body-small`     | `--bp-typography-size-body-small`     | Small body text size         |
| `--osdk-typography-size-body-medium`    | `--bp-typography-size-body-medium`    | Medium body text size (13px) |
| `--osdk-typography-size-body-large`     | `--bp-typography-size-body-large`     | Large body text size         |
| `--osdk-typography-line-height-default` | `--bp-typography-line-height-default` | Default line height          |
| `--osdk-typography-weight-default`      | `--bp-typography-weight-default`      | Default font weight          |
| `--osdk-typography-weight-bold`         | `--bp-typography-weight-bold`         | Bold font weight             |

### Intent Tokens

Semantic colors for interactive elements and states.

| Variable                           | Maps to Blueprint Token          | Description                       |
| ---------------------------------- | -------------------------------- | --------------------------------- |
| `--osdk-intent-default-rest`       | `--bp-intent-default-rest`       | Default rest state                |
| `--osdk-intent-default-hover`      | `--bp-intent-default-hover`      | Default hover state               |
| `--osdk-intent-default-active`     | `--bp-intent-default-active`     | Default active/pressed state      |
| `--osdk-intent-default-disabled`   | `--bp-intent-default-disabled`   | Default disabled state            |
| `--osdk-intent-default-foreground` | `--bp-intent-default-foreground` | Text color on default backgrounds |
| `--osdk-intent-primary-rest`       | `--bp-intent-primary-rest`       | Primary rest state                |
| `--osdk-intent-primary-hover`      | `--bp-intent-primary-hover`      | Primary hover state               |
| `--osdk-intent-primary-active`     | `--bp-intent-primary-active`     | Primary active/pressed state      |
| `--osdk-intent-primary-disabled`   | `--bp-intent-primary-disabled`   | Primary disabled state            |
| `--osdk-intent-primary-foreground` | `--bp-intent-primary-foreground` | Text color on primary backgrounds |
| `--osdk-intent-success-rest`       | `--bp-intent-success-rest`       | Success rest state                |
| `--osdk-intent-success-hover`      | `--bp-intent-success-hover`      | Success hover state               |
| `--osdk-intent-success-active`     | `--bp-intent-success-active`     | Success active/pressed state      |
| `--osdk-intent-success-disabled`   | `--bp-intent-success-disabled`   | Success disabled state            |
| `--osdk-intent-success-foreground` | `--bp-intent-success-foreground` | Text color on success backgrounds |
| `--osdk-intent-warning-rest`       | `--bp-intent-warning-rest`       | Warning rest state                |
| `--osdk-intent-warning-hover`      | `--bp-intent-warning-hover`      | Warning hover state               |
| `--osdk-intent-warning-active`     | `--bp-intent-warning-active`     | Warning active/pressed state      |
| `--osdk-intent-warning-disabled`   | `--bp-intent-warning-disabled`   | Warning disabled state            |
| `--osdk-intent-warning-foreground` | `--bp-intent-warning-foreground` | Text color on warning backgrounds |
| `--osdk-intent-danger-rest`        | `--bp-intent-danger-rest`        | Danger rest state                 |
| `--osdk-intent-danger-hover`       | `--bp-intent-danger-hover`       | Danger hover state                |
| `--osdk-intent-danger-active`      | `--bp-intent-danger-active`      | Danger active/pressed state       |
| `--osdk-intent-danger-disabled`    | `--bp-intent-danger-disabled`    | Danger disabled state             |
| `--osdk-intent-danger-foreground`  | `--bp-intent-danger-foreground`  | Text color on danger backgrounds  |

### Iconography Tokens

Control icon sizing and color.

| Variable                         | Default Value                            | Description      |
| -------------------------------- | ---------------------------------------- | ---------------- |
| `--osdk-iconography-size-small`  | `var(--osdk-typography-size-body-large)` | Small icon size  |
| `--osdk-iconography-color-muted` | `var(--osdk-intent-default-rest)`        | Muted icon color |

### Emphasis Tokens

Control focus ring, transitions, and emphasis styling.

| Variable                              | Maps to Blueprint Token             | Description                 |
| ------------------------------------- | ----------------------------------- | --------------------------- |
| `--osdk-emphasis-focus-width`         | `--bp-emphasis-focus-width`         | Focus ring width            |
| `--osdk-emphasis-focus-color`         | `--bp-emphasis-focus-color`         | Focus ring color            |
| `--osdk-emphasis-focus-offset`        | `--bp-emphasis-focus-offset`        | Focus ring offset           |
| `--osdk-emphasis-transition-duration` | `--bp-emphasis-transition-duration` | Default transition duration |
| `--osdk-emphasis-ease-default`        | `--bp-emphasis-ease-default`        | Default easing function     |

### Palette Tokens

Raw color palette tokens.

| Variable                      | Maps to Blueprint Token     | Description  |
| ----------------------------- | --------------------------- | ------------ |
| `--osdk-palette-gray-1`       | `--bp-palette-gray-1`       | Gray 1       |
| `--osdk-palette-gray-2`       | `--bp-palette-gray-2`       | Gray 2       |
| `--osdk-palette-gray-4`       | `--bp-palette-gray-4`       | Gray 4       |
| `--osdk-palette-dark-gray-2`  | `--bp-palette-dark-gray-2`  | Dark gray 2  |
| `--osdk-palette-dark-gray-3`  | `--bp-palette-dark-gray-3`  | Dark gray 3  |
| `--osdk-palette-light-gray-1` | `--bp-palette-light-gray-1` | Light gray 1 |
| `--osdk-palette-light-gray-3` | `--bp-palette-light-gray-3` | Light gray 3 |
| `--osdk-palette-light-gray-4` | `--bp-palette-light-gray-4` | Light gray 4 |
| `--osdk-palette-light-gray-5` | `--bp-palette-light-gray-5` | Light gray 5 |
| `--osdk-palette-white`        | `--bp-palette-white`        | White        |
| `--osdk-palette-black`        | `--bp-palette-black`        | Black        |

## Semantic Color Tokens

Semantic tokens that abstract palette usage for better maintainability.

### Background Colors

| Variable                          | Default Value                                                     | Description                                |
| --------------------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| `--osdk-background-primary`       | `var(--osdk-palette-white)`                                       | Primary background color (white)           |
| `--osdk-background-secondary`     | `var(--osdk-palette-light-gray-5)`                                | Secondary background color (light gray)    |
| `--osdk-background-tertiary`      | `var(--osdk-palette-light-gray-4)`                                | Tertiary background color (alternate rows) |
| `--osdk-background-skeleton-from` | `color-mix(in srgb, var(--osdk-palette-gray-1) 5%, transparent)`  | Skeleton loading animation start color     |
| `--osdk-background-skeleton-to`   | `color-mix(in srgb, var(--osdk-palette-gray-1) 40%, transparent)` | Skeleton loading animation end color       |
| `--osdk-background-backdrop`      | `color-mix(in srgb, var(--osdk-palette-black) 50%, transparent)`  | Modal backdrop base color                  |

### Custom Colors

These tokens are pre-calculated colors with opacity for specific UI effects.

| Variable                           | Default Value                                                           | Description                  |
| ---------------------------------- | ----------------------------------------------------------------------- | ---------------------------- |
| `--osdk-custom-color-gray-1`       | `color-mix(in srgb, var(--osdk-palette-gray-1) 5%, transparent)`        | Gray at 5% opacity           |
| `--osdk-custom-color-gray-2`       | `color-mix(in srgb, var(--osdk-palette-gray-1) 8%, transparent)`        | Gray at 8% opacity           |
| `--osdk-custom-color-gray-3`       | `color-mix(in srgb, var(--osdk-palette-gray-1) 10%, transparent)`       | Gray at 10% opacity          |
| `--osdk-custom-color-gray-4`       | `color-mix(in srgb, var(--osdk-palette-gray-1) 20%, transparent)`       | Gray at 20% opacity          |
| `--osdk-custom-color-light-gray-1` | `color-mix(in srgb, var(--osdk-palette-light-gray-1) 60%, transparent)` | Light gray at 60% opacity    |
| `--osdk-custom-color-light-gray-2` | `color-mix(in srgb, var(--osdk-palette-light-gray-5) 50%, transparent)` | Light gray at 50% opacity    |
| `--osdk-custom-color-primary-1`    | `color-mix(in srgb, var(--osdk-intent-primary-rest) 50%, transparent)`  | Primary color at 50% opacity |

## OSDK Component Tokens

Component-specific semantic tokens that may reference Blueprint tokens or define custom values.

### Shared Styling

| Variable                              | Default Value                                                                     | Description                    |
| ------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| `--osdk-focus-outline`                | `var(--osdk-emphasis-focus-width) solid var(--osdk-emphasis-focus-color)`         | Focus ring style               |
| `--osdk-focus-visible-outline-offset` | `var(--osdk-emphasis-focus-offset)`                                               | Focus ring offset from element |
| `--osdk-surface-border`               | `var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)` | Reusable border shorthand      |

### AIP Agent Chat

Tokens for the `AipAgentChat` chat surface (container, message bubbles, composer, empty state, loader, error banner).

| Variable                                             | Default Value                                       | Description                                 |
| ---------------------------------------------------- | --------------------------------------------------- | ------------------------------------------- |
| `--osdk-aip-agent-chat-background`                   | `var(--osdk-background-primary)`                    | Chat container background                   |
| `--osdk-aip-agent-chat-border-color`                 | `var(--osdk-surface-border-color-default)`          | Container, error, composer separator color  |
| `--osdk-aip-agent-chat-border-radius`                | `var(--osdk-surface-border-radius)`                 | Container and bubble corner radius          |
| `--osdk-aip-agent-chat-padding`                      | `calc(var(--osdk-surface-spacing) * 5)`             | Outer padding for message list and composer |
| `--osdk-aip-agent-chat-message-gap`                  | `calc(var(--osdk-surface-spacing) * 5)`             | Vertical gap between messages               |
| `--osdk-aip-agent-chat-section-gap`                  | `calc(var(--osdk-surface-spacing) * 2.5)`           | Gap between composer rows / footer items    |
| `--osdk-aip-agent-chat-bubble-padding`               | `calc(var(--osdk-surface-spacing) * 3)`             | Padding inside each message bubble          |
| `--osdk-aip-agent-chat-bubble-border-radius`         | `var(--osdk-surface-border-radius)`                 | Bubble corner radius                        |
| `--osdk-aip-agent-chat-bubble-max-width`             | `80%`                                               | Maximum bubble width                        |
| `--osdk-aip-agent-chat-user-bubble-background`       | `var(--osdk-intent-primary-rest)`                   | User-message bubble background              |
| `--osdk-aip-agent-chat-user-bubble-color`            | `var(--osdk-intent-primary-foreground)`             | User-message text color                     |
| `--osdk-aip-agent-chat-assistant-bubble-background`  | `var(--osdk-background-secondary)`                  | Assistant-message bubble background         |
| `--osdk-aip-agent-chat-assistant-bubble-color`       | `var(--osdk-typography-color-default-rest)`         | Assistant-message text color                |
| `--osdk-aip-agent-chat-composer-background`          | `var(--osdk-surface-background-color-default-rest)` | Composer background                         |
| `--osdk-aip-agent-chat-composer-border-color`        | `var(--osdk-surface-border-color-default)`          | Composer top-border color                   |
| `--osdk-aip-agent-chat-composer-textarea-min-height` | `calc(var(--osdk-surface-spacing) * 14)`            | Textarea minimum height                     |
| `--osdk-aip-agent-chat-composer-textarea-max-height` | `200px`                                             | Textarea maximum height                     |
| `--osdk-aip-agent-chat-empty-color`                  | `var(--osdk-typography-color-muted)`                | Empty-state subtext color                   |
| `--osdk-aip-agent-chat-empty-icon-color`             | `var(--osdk-intent-primary-rest)`                   | Empty-state icon color                      |
| `--osdk-aip-agent-chat-empty-icon-size`              | `calc(var(--osdk-surface-spacing) * 12)`            | Empty-state icon size                       |
| `--osdk-aip-agent-chat-loader-color`                 | `var(--osdk-typography-color-muted)`                | 3-dot streaming loader color                |
| `--osdk-aip-agent-chat-loader-dot-size`              | `calc(var(--osdk-surface-spacing) * 1.5)`           | Loader dot diameter                         |
| `--osdk-aip-agent-chat-loader-dot-gap`               | `calc(var(--osdk-surface-spacing) * 0.5)`           | Loader dot gap                              |
| `--osdk-aip-agent-chat-error-color`                  | `var(--osdk-typography-color-danger-rest)`          | Error banner text color                     |
| `--osdk-aip-agent-chat-error-background`             | `var(--osdk-surface-background-color-danger-rest)`  | Error banner background                     |

### Drag Handle

Shared tokens for drag handle styling across components.

| Variable                           | Default Value                               | Description               |
| ---------------------------------- | ------------------------------------------- | ------------------------- |
| `--osdk-drag-handle-color`         | `var(--osdk-typography-color-muted)`        | Drag handle icon color    |
| `--osdk-drag-handle-color-hover`   | `var(--osdk-typography-color-default-rest)` | Drag handle hover color   |
| `--osdk-drag-handle-cursor`        | `grab`                                      | Drag handle cursor        |
| `--osdk-drag-handle-cursor-active` | `grabbing`                                  | Drag handle active cursor |

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

| Variable                            | Default Value                                         | Description                        |
| ----------------------------------- | ----------------------------------------------------- | ---------------------------------- |
| `--osdk-button-secondary-color`     | `var(--osdk-typography-color-default-rest)`           | Secondary button text color        |
| `--osdk-button-secondary-bg`        | `var(--osdk-background-secondary)`                    | Secondary button background        |
| `--osdk-button-secondary-bg-hover`  | `var(--osdk-surface-background-color-default-hover)`  | Secondary button hover background  |
| `--osdk-button-secondary-bg-active` | `var(--osdk-surface-background-color-default-active)` | Secondary button active background |

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

### CBAC Picker

Styling for classification-based access control picker components.

#### Banner

| Variable                               | Default Value                                                                 | Description                   |
| -------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------- |
| `--osdk-cbac-banner-padding`           | `calc(var(--osdk-surface-spacing) * 1) calc(var(--osdk-surface-spacing) * 2)` | Banner padding                |
| `--osdk-cbac-banner-font-size`         | `var(--osdk-typography-size-body-small)`                                      | Banner font size              |
| `--osdk-cbac-banner-font-weight`       | `var(--osdk-typography-weight-bold)`                                          | Banner font weight            |
| `--osdk-cbac-banner-text-align`        | `center`                                                                      | Banner text alignment         |
| `--osdk-cbac-banner-border-radius`     | `var(--osdk-surface-border-radius)`                                           | Banner border radius          |
| `--osdk-cbac-banner-border-color`      | `var(--osdk-surface-border-color-default)`                                    | Banner border color           |
| `--osdk-cbac-banner-placeholder-bg`    | `var(--osdk-intent-default-disabled)`                                         | Placeholder banner background |
| `--osdk-cbac-banner-placeholder-color` | `var(--osdk-typography-color-default-rest)`                                   | Placeholder banner text color |

#### Marking Button

| Variable                                             | Default Value                                                                     | Description                   |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------- |
| `--osdk-cbac-marking-button-padding`                 | `calc(var(--osdk-surface-spacing) * 0.5) calc(var(--osdk-surface-spacing) * 1.5)` | Marking button padding        |
| `--osdk-cbac-marking-button-border-radius`           | `0`                                                                               | Marking button border radius  |
| `--osdk-cbac-marking-button-font-size`               | `var(--osdk-typography-size-body-small)`                                          | Marking button font size      |
| `--osdk-cbac-marking-button-gap`                     | `var(--osdk-surface-spacing)`                                                     | Marking button gap            |
| `--osdk-cbac-marking-button-color-default`           | `var(--osdk-typography-color-default-rest)`                                       | Default state text color      |
| `--osdk-cbac-marking-button-bg-default`              | `transparent`                                                                     | Default state background      |
| `--osdk-cbac-marking-button-border-color-default`    | `var(--osdk-surface-border-color-default)`                                        | Default state border color    |
| `--osdk-cbac-marking-button-color-selected`          | `var(--osdk-intent-primary-foreground)`                                           | Selected state text color     |
| `--osdk-cbac-marking-button-bg-selected`             | `var(--osdk-intent-primary-rest)`                                                 | Selected state background     |
| `--osdk-cbac-marking-button-border-color-selected`   | `var(--osdk-intent-primary-rest)`                                                 | Selected state border color   |
| `--osdk-cbac-marking-button-bg-selected-hover`       | `var(--osdk-cbac-marking-button-bg-selected)`                                     | Selected hover background     |
| `--osdk-cbac-marking-button-color-implied`           | `var(--osdk-intent-primary-rest)`                                                 | Implied state text color      |
| `--osdk-cbac-marking-button-bg-implied`              | `transparent`                                                                     | Implied state background      |
| `--osdk-cbac-marking-button-border-color-implied`    | `var(--osdk-surface-border-color-default)`                                        | Implied state border color    |
| `--osdk-cbac-marking-button-color-disallowed`        | `var(--osdk-intent-default-disabled)`                                             | Disallowed state text color   |
| `--osdk-cbac-marking-button-bg-disallowed`           | `transparent`                                                                     | Disallowed state background   |
| `--osdk-cbac-marking-button-border-color-disallowed` | `var(--osdk-intent-default-disabled)`                                             | Disallowed state border color |

#### Picker Layout

| Variable                                           | Default Value                               | Description                       |
| -------------------------------------------------- | ------------------------------------------- | --------------------------------- |
| `--osdk-cbac-picker-padding`                       | `calc(var(--osdk-surface-spacing) * 2)`     | Picker container padding          |
| `--osdk-cbac-picker-category-gap`                  | `calc(var(--osdk-surface-spacing) * 3)`     | Gap between categories            |
| `--osdk-cbac-picker-category-title-font-size`      | `var(--osdk-typography-size-body-small)`    | Category title font size          |
| `--osdk-cbac-picker-category-title-font-weight`    | `var(--osdk-typography-weight-default)`     | Category title font weight        |
| `--osdk-cbac-picker-category-title-color`          | `var(--osdk-typography-color-default-rest)` | Category title color              |
| `--osdk-cbac-picker-category-title-letter-spacing` | `normal`                                    | Category title letter spacing     |
| `--osdk-cbac-picker-marking-grid-columns`          | `4`                                         | Number of columns in marking grid |
| `--osdk-cbac-picker-marking-grid-border-color`     | `var(--osdk-surface-border-color-default)`  | Marking grid border color         |

#### Info Banner

| Variable                                | Default Value                                                                   | Description               |
| --------------------------------------- | ------------------------------------------------------------------------------- | ------------------------- |
| `--osdk-cbac-info-banner-bg`            | `var(--osdk-intent-primary-subtle)`                                             | Info banner background    |
| `--osdk-cbac-info-banner-color`         | `var(--osdk-intent-primary-rest)`                                               | Info banner text color    |
| `--osdk-cbac-info-banner-padding`       | `calc(var(--osdk-surface-spacing) * 1.5) calc(var(--osdk-surface-spacing) * 2)` | Info banner padding       |
| `--osdk-cbac-info-banner-font-size`     | `var(--osdk-typography-size-body-small)`                                        | Info banner font size     |
| `--osdk-cbac-info-banner-border-radius` | `var(--osdk-surface-border-radius)`                                             | Info banner border radius |

#### Validation Warning

| Variable                                           | Default Value                                                                   | Description               |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------- |
| `--osdk-cbac-validation-warning-bg`                | `var(--osdk-intent-warning-subtle)`                                             | Warning background        |
| `--osdk-cbac-validation-warning-color`             | `var(--osdk-intent-warning-rest)`                                               | Warning text color        |
| `--osdk-cbac-validation-warning-padding`           | `calc(var(--osdk-surface-spacing) * 1.5) calc(var(--osdk-surface-spacing) * 2)` | Warning padding           |
| `--osdk-cbac-validation-warning-font-size`         | `var(--osdk-typography-size-body-small)`                                        | Warning font size         |
| `--osdk-cbac-validation-warning-border-radius`     | `var(--osdk-surface-border-radius)`                                             | Warning border radius     |
| `--osdk-cbac-validation-warning-chip-bg`           | `var(--osdk-surface-background-color-default)`                                  | Warning chip background   |
| `--osdk-cbac-validation-warning-max-height`        | `200px`                                                                         | Warning max height        |
| `--osdk-cbac-validation-warning-chip-border-color` | `var(--osdk-surface-border-color-default)`                                      | Warning chip border color |

#### Popover

| Variable                                 | Default Value                                                                     | Description                  |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------- |
| `--osdk-cbac-popover-max-width`          | `400px`                                                                           | Popover max width            |
| `--osdk-cbac-popover-padding`            | `calc(var(--osdk-surface-spacing) * 3)`                                           | Popover padding              |
| `--osdk-cbac-popover-section-gap`        | `calc(var(--osdk-surface-spacing) * 2)`                                           | Gap between popover sections |
| `--osdk-cbac-popover-pill-padding`       | `calc(var(--osdk-surface-spacing) * 0.5) calc(var(--osdk-surface-spacing) * 1.5)` | Pill padding                 |
| `--osdk-cbac-popover-pill-border-radius` | `var(--osdk-surface-border-radius)`                                               | Pill border radius           |

#### Skeleton

| Variable                                 | Default Value | Description                |
| ---------------------------------------- | ------------- | -------------------------- |
| `--osdk-cbac-skeleton-pill-width`        | `120px`       | Skeleton pill width        |
| `--osdk-cbac-skeleton-pill-height`       | `24px`        | Skeleton pill height       |
| `--osdk-cbac-skeleton-line-height`       | `16px`        | Skeleton line height       |
| `--osdk-cbac-skeleton-line-narrow-width` | `80%`         | Skeleton narrow line width |

#### Warning Callout

| Variable                                    | Default Value                                                                   | Description                   |
| ------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `--osdk-cbac-warning-callout-bg`            | `var(--osdk-intent-warning-subtle)`                                             | Warning callout background    |
| `--osdk-cbac-warning-callout-color`         | `var(--osdk-intent-warning-rest)`                                               | Warning callout text color    |
| `--osdk-cbac-warning-callout-padding`       | `calc(var(--osdk-surface-spacing) * 1.5) calc(var(--osdk-surface-spacing) * 2)` | Warning callout padding       |
| `--osdk-cbac-warning-callout-border-radius` | `var(--osdk-surface-border-radius)`                                             | Warning callout border radius |
| `--osdk-cbac-warning-callout-font-size`     | `var(--osdk-typography-size-body-small)`                                        | Warning callout font size     |

#### Marking Tooltip

| Variable                                | Default Value                             | Description               |
| --------------------------------------- | ----------------------------------------- | ------------------------- |
| `--osdk-cbac-marking-tooltip-max-width` | `280px`                                   | Marking tooltip max width |
| `--osdk-cbac-marking-tooltip-padding`   | `calc(var(--osdk-surface-spacing) * 1.5)` | Marking tooltip padding   |
| `--osdk-cbac-marking-tooltip-font-size` | `var(--osdk-typography-size-body-small)`  | Marking tooltip font size |
| `--osdk-cbac-marking-tooltip-z-index`   | `var(--osdk-tooltip-z-index)`             | Marking tooltip z-index   |

#### Miscellaneous

| Variable                                | Default Value                               | Description               |
| --------------------------------------- | ------------------------------------------- | ------------------------- |
| `--osdk-cbac-expand-icon-color`         | `var(--osdk-typography-color-muted)`        | Expand icon color         |
| `--osdk-cbac-disabled-opacity`          | `0.6`                                       | Disabled state opacity    |
| `--osdk-cbac-overflow-button-padding`   | `var(--osdk-cbac-marking-button-padding)`   | Overflow button padding   |
| `--osdk-cbac-overflow-button-font-size` | `var(--osdk-cbac-marking-button-font-size)` | Overflow button font size |
| `--osdk-cbac-overflow-list-max-height`  | `240px`                                     | Overflow list max height  |

### DateTime Picker

Styling for date and time picker components.

#### Input

| Variable                                    | Default Value                                                               | Description                |
| ------------------------------------------- | --------------------------------------------------------------------------- | -------------------------- |
| `--osdk-datetime-input-error-border-color`  | `var(--osdk-intent-danger-rest)`                                            | Input error border color   |
| `--osdk-datetime-input-min-height`          | `var(--osdk-input-min-height)`                                              | Input minimum height       |
| `--osdk-datetime-input-padding`             | `var(--osdk-input-padding)`                                                 | Input padding              |
| `--osdk-datetime-input-border-radius`       | `var(--osdk-input-border-radius)`                                           | Input border radius        |
| `--osdk-datetime-input-bg`                  | `var(--osdk-input-bg)`                                                      | Input background           |
| `--osdk-datetime-input-bg-hover`            | `var(--osdk-input-bg-hover)`                                                | Input hover background     |
| `--osdk-datetime-input-color`               | `var(--osdk-input-color)`                                                   | Input text color           |
| `--osdk-datetime-input-font-family`         | `var(--osdk-input-font-family)`                                             | Input font family          |
| `--osdk-datetime-input-font-size`           | `var(--osdk-input-font-size)`                                               | Input font size            |
| `--osdk-datetime-input-line-height`         | `var(--osdk-input-line-height, var(--osdk-typography-line-height-default))` | Input line height          |
| `--osdk-datetime-input-placeholder-color`   | `var(--osdk-input-placeholder-color)`                                       | Input placeholder color    |
| `--osdk-datetime-input-border-width`        | `var(--osdk-input-border-width)`                                            | Input border width         |
| `--osdk-datetime-input-border-color`        | `var(--osdk-input-border-color)`                                            | Input border color         |
| `--osdk-datetime-input-border-color-focus`  | `var(--osdk-input-border-color-focus)`                                      | Input focused border color |
| `--osdk-datetime-input-focus-width`         | `var(--osdk-input-focus-width)`                                             | Input focus ring width     |
| `--osdk-datetime-input-focus-color`         | `var(--osdk-input-focus-color)`                                             | Input focus ring color     |
| `--osdk-datetime-input-focus-offset`        | `var(--osdk-input-focus-offset)`                                            | Input focus ring offset    |
| `--osdk-datetime-input-transition-duration` | `var(--osdk-input-transition-duration)`                                     | Input transition duration  |
| `--osdk-datetime-input-transition-ease`     | `var(--osdk-input-transition-ease)`                                         | Input transition easing    |

#### Popover

| Variable                          | Default Value                           | Description        |
| --------------------------------- | --------------------------------------- | ------------------ |
| `--osdk-datetime-popover-bg`      | `var(--osdk-background-primary)`        | Popover background |
| `--osdk-datetime-popover-padding` | `calc(var(--osdk-surface-spacing) * 2)` | Popover padding    |
| `--osdk-datetime-popover-z-index` | `var(--osdk-surface-z-index-3)`         | Popover z-index    |
| `--osdk-datetime-popover-shadow`  | `var(--osdk-surface-shadow-2)`          | Popover shadow     |

#### Calendar

| Variable                                            | Default Value                                                          | Description                   |
| --------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------- |
| `--osdk-datetime-calendar-font-family`              | `var(--osdk-typography-family-default)`                                | Calendar font family          |
| `--osdk-datetime-calendar-font-size`                | `var(--osdk-typography-size-body-small)`                               | Calendar font size            |
| `--osdk-datetime-calendar-cell-size`                | `calc(var(--osdk-surface-spacing) * 8)`                                | Calendar cell size            |
| `--osdk-datetime-calendar-gap`                      | `2px`                                                                  | Calendar grid gap             |
| `--osdk-datetime-calendar-caption-font-size`        | `var(--osdk-typography-size-body-medium)`                              | Caption font size             |
| `--osdk-datetime-calendar-caption-font-weight`      | `var(--osdk-typography-weight-bold)`                                   | Caption font weight           |
| `--osdk-datetime-calendar-caption-gap`              | `var(--osdk-surface-spacing)`                                          | Caption dropdowns gap         |
| `--osdk-datetime-calendar-weekday-color`            | `var(--osdk-typography-color-muted)`                                   | Weekday header color          |
| `--osdk-datetime-calendar-weekday-font-size`        | `var(--osdk-typography-size-body-x-small)`                             | Weekday header font size      |
| `--osdk-datetime-calendar-day-color`                | `var(--osdk-typography-color-default)`                                 | Day text color                |
| `--osdk-datetime-calendar-day-hover-bg`             | `var(--osdk-surface-background-color-default-hover)`                   | Day hover background          |
| `--osdk-datetime-calendar-day-hover-color`          | `var(--osdk-typography-color-default)`                                 | Day hover text color          |
| `--osdk-datetime-calendar-day-active-bg`            | `var(--osdk-surface-background-color-default-active)`                  | Day active background         |
| `--osdk-datetime-calendar-day-border-radius`        | `var(--osdk-surface-border-radius)`                                    | Day border radius             |
| `--osdk-datetime-calendar-selected-bg`              | `var(--osdk-intent-primary-rest)`                                      | Selected day background       |
| `--osdk-datetime-calendar-selected-color`           | `var(--osdk-intent-primary-foreground)`                                | Selected day text color       |
| `--osdk-datetime-calendar-selected-hover-bg`        | `var(--osdk-intent-primary-hover)`                                     | Selected day hover background |
| `--osdk-datetime-calendar-today-font-weight`        | `var(--osdk-typography-weight-bold)`                                   | Today font weight             |
| `--osdk-datetime-calendar-range-middle-bg`          | `color-mix(in srgb, var(--osdk-intent-primary-rest) 15%, transparent)` | Range middle background       |
| `--osdk-datetime-calendar-disabled-color`           | `var(--osdk-intent-default-disabled)`                                  | Disabled day color            |
| `--osdk-datetime-calendar-outside-color`            | `var(--osdk-typography-color-muted)`                                   | Outside month day color       |
| `--osdk-datetime-calendar-outside-opacity`          | `0.4`                                                                  | Outside month day opacity     |
| `--osdk-datetime-calendar-nav-button-size`          | `calc(var(--osdk-surface-spacing) * 5)`                                | Nav button size               |
| `--osdk-datetime-calendar-nav-button-border-radius` | `var(--osdk-surface-border-radius)`                                    | Nav button border radius      |
| `--osdk-datetime-calendar-nav-button-hover-bg`      | `var(--osdk-surface-background-color-default-hover)`                   | Nav button hover background   |
| `--osdk-datetime-calendar-nav-disabled-color`       | `var(--osdk-typography-color-muted)`                                   | Nav disabled color            |
| `--osdk-datetime-calendar-focus-outline`            | `1px solid var(--osdk-input-border-color-focus)`                       | Calendar focus outline        |
| `--osdk-datetime-calendar-months-gap`               | `calc(var(--osdk-surface-spacing) * 4)`                                | Gap between calendar months   |
| `--osdk-datetime-calendar-dropdown-padding`         | `2px var(--osdk-surface-spacing)`                                      | Dropdown padding              |
| `--osdk-datetime-calendar-dropdown-border-radius`   | `var(--osdk-input-border-radius)`                                      | Dropdown border radius        |
| `--osdk-datetime-calendar-fallback-width`           | `280px`                                                                | Fallback/loading width        |
| `--osdk-datetime-calendar-fallback-height`          | `300px`                                                                | Fallback/loading height       |

### Dialog

Styling for dialog/modal components.

| Variable                          | Default Value                                                                 | Description              |
| --------------------------------- | ----------------------------------------------------------------------------- | ------------------------ |
| `--osdk-dialog-padding`           | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 4)` | Base dialog padding      |
| `--osdk-dialog-backdrop-bg`       | `var(--osdk-background-backdrop)`                                             | Backdrop overlay color   |
| `--osdk-dialog-header-padding`    | `var(--osdk-dialog-padding)`                                                  | Header section padding   |
| `--osdk-dialog-title-font-size`   | `var(--osdk-typography-size-body-medium)`                                     | Dialog title font size   |
| `--osdk-dialog-title-font-weight` | `var(--osdk-typography-weight-bold)`                                          | Dialog title font weight |
| `--osdk-dialog-title-color`       | `var(--osdk-typography-color-default-rest)`                                   | Dialog title color       |
| `--osdk-dialog-bg`                | `var(--osdk-background-primary)`                                              | Dialog background color  |
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
| `--osdk-draggable-item-bg`                    | `var(--osdk-background-primary)`                                              | Draggable item background    |
| `--osdk-draggable-item-border`                | `var(--osdk-surface-border)`                                                  | Draggable item border        |
| `--osdk-draggable-item-border-radius`         | `var(--osdk-surface-border-radius)`                                           | Draggable item border radius |
| `--osdk-draggable-item-padding`               | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 3)` | Draggable item padding       |
| `--osdk-draggable-item-gap`                   | `var(--osdk-surface-spacing)`                                                 | Gap between item elements    |
| `--osdk-draggable-item-drag-icon-color`       | `var(--osdk-drag-handle-color)`                                               | Drag handle icon color       |
| `--osdk-draggable-item-drag-icon-color-hover` | `var(--osdk-drag-handle-color-hover)`                                         | Drag handle icon hover color |
| `--osdk-draggable-item-icon-size`             | `var(--osdk-iconography-size-small)`                                          | Drag handle icon size        |

### File Picker

Styling for file picker components.

#### Trigger

| Variable                                        | Default Value                                                         | Description                  |
| ----------------------------------------------- | --------------------------------------------------------------------- | ---------------------------- |
| `--osdk-file-picker-trigger-height`             | `var(--osdk-input-min-height)`                                        | Trigger height               |
| `--osdk-file-picker-trigger-padding`            | `var(--osdk-input-padding)`                                           | Trigger padding              |
| `--osdk-file-picker-trigger-border-radius`      | `var(--osdk-input-border-radius)`                                     | Trigger border radius        |
| `--osdk-file-picker-trigger-border`             | `var(--osdk-input-border-width) solid var(--osdk-input-border-color)` | Trigger border               |
| `--osdk-file-picker-trigger-border-color-focus` | `var(--osdk-input-border-color-focus)`                                | Trigger focused border color |
| `--osdk-file-picker-trigger-border-color-error` | `var(--osdk-input-border-color-error)`                                | Trigger error border color   |
| `--osdk-file-picker-trigger-bg`                 | `var(--osdk-input-bg)`                                                | Trigger background           |
| `--osdk-file-picker-trigger-bg-hover`           | `var(--osdk-input-bg-hover)`                                          | Trigger hover background     |
| `--osdk-file-picker-trigger-color`              | `var(--osdk-input-color)`                                             | Trigger text color           |
| `--osdk-file-picker-trigger-font-size`          | `var(--osdk-input-font-size)`                                         | Trigger font size            |
| `--osdk-file-picker-trigger-font-family`        | `var(--osdk-input-font-family)`                                       | Trigger font family          |
| `--osdk-file-picker-trigger-placeholder-color`  | `var(--osdk-input-placeholder-color)`                                 | Trigger placeholder color    |

#### Focus Ring

| Variable                                  | Default Value                    | Description       |
| ----------------------------------------- | -------------------------------- | ----------------- |
| `--osdk-file-picker-trigger-focus-width`  | `var(--osdk-input-focus-width)`  | Focus ring width  |
| `--osdk-file-picker-trigger-focus-color`  | `var(--osdk-input-focus-color)`  | Focus ring color  |
| `--osdk-file-picker-trigger-focus-offset` | `var(--osdk-input-focus-offset)` | Focus ring offset |

#### Transitions

| Variable                                 | Default Value                           | Description         |
| ---------------------------------------- | --------------------------------------- | ------------------- |
| `--osdk-file-picker-transition-duration` | `var(--osdk-input-transition-duration)` | Transition duration |
| `--osdk-file-picker-transition-ease`     | `var(--osdk-input-transition-ease)`     | Transition easing   |

#### Clear Button

| Variable                               | Default Value                               | Description              |
| -------------------------------------- | ------------------------------------------- | ------------------------ |
| `--osdk-file-picker-clear-size`        | `calc(var(--osdk-surface-spacing) * 4)`     | Clear button size        |
| `--osdk-file-picker-clear-margin`      | `0 calc(var(--osdk-surface-spacing) * 1)`   | Clear button margin      |
| `--osdk-file-picker-clear-color`       | `var(--osdk-typography-color-muted)`        | Clear button color       |
| `--osdk-file-picker-clear-color-hover` | `var(--osdk-typography-color-default-rest)` | Clear button hover color |

#### Browse Button

| Variable                                | Default Value                                                                   | Description                     |
| --------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------- |
| `--osdk-file-picker-browse-bg`          | `var(--osdk-button-secondary-bg)`                                               | Browse button background        |
| `--osdk-file-picker-browse-bg-hover`    | `var(--osdk-button-secondary-bg-hover)`                                         | Browse button hover background  |
| `--osdk-file-picker-browse-bg-active`   | `var(--osdk-button-secondary-bg-active)`                                        | Browse button active background |
| `--osdk-file-picker-browse-color`       | `var(--osdk-button-secondary-color)`                                            | Browse button text color        |
| `--osdk-file-picker-browse-padding`     | `calc(var(--osdk-surface-spacing) * 1.5) calc(var(--osdk-surface-spacing) * 3)` | Browse button padding           |
| `--osdk-file-picker-browse-border-left` | `var(--osdk-input-border-width) solid var(--osdk-input-border-color)`           | Browse button left border       |

### Filter List

Styling for filter list components including search, checkboxes, listogram, and range inputs.

#### Container

| Variable                                            | Default Value                                                                 | Description                     |
| --------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------- |
| `--osdk-filter-list-bg`                             | `var(--osdk-background-primary)`                                              | Container background            |
| `--osdk-filter-list-border`                         | `var(--osdk-surface-border)`                                                  | Container border                |
| `--osdk-filter-list-border-radius`                  | `var(--osdk-surface-border-radius)`                                           | Container border radius         |
| `--osdk-filter-list-padding`                        | `0`                                                                           | Container padding               |
| `--osdk-filter-list-gap`                            | `0`                                                                           | Container gap                   |
| `--osdk-filter-list-shadow`                         | `0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)`     | Container shadow                |
| `--osdk-filter-list-addButton-padding-top`          | `0`                                                                           | Add button top padding          |
| `--osdk-filter-list-addButton-container-bg`         | `var(--osdk-background-primary)`                                              | Add button container background |
| `--osdk-filter-list-addButton-container-padding`    | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 3)` | Add button container padding    |
| `--osdk-filter-list-addButton-container-border-top` | `var(--osdk-surface-border)`                                                  | Add button container top border |
| `--osdk-filter-list-addButton-border`               | `var(--osdk-surface-border)`                                                  | Add button border               |
| `--osdk-filter-list-addButton-height`               | `calc(var(--osdk-surface-spacing) * 7.5)`                                     | Add button height               |

#### Content

| Variable                              | Default Value                            | Description            |
| ------------------------------------- | ---------------------------------------- | ---------------------- |
| `--osdk-filter-list-content-gap`      | `0`                                      | Content gap            |
| `--osdk-filter-list-empty-text-color` | `var(--osdk-typography-color-muted)`     | Empty state text color |
| `--osdk-filter-list-empty-font-size`  | `var(--osdk-typography-size-body-small)` | Empty state font size  |

#### Collapsed

| Variable                                         | Default Value                               | Description                 |
| ------------------------------------------------ | ------------------------------------------- | --------------------------- |
| `--osdk-filter-list-collapsed-width`             | `calc(var(--osdk-surface-spacing) * 10)`    | Collapsed state width       |
| `--osdk-filter-list-collapsed-label-font-family` | `var(--osdk-typography-family-default)`     | Collapsed label font family |
| `--osdk-filter-list-collapsed-label-font-size`   | `var(--osdk-typography-size-body-small)`    | Collapsed label font size   |
| `--osdk-filter-list-collapsed-label-color`       | `var(--osdk-typography-color-default-rest)` | Collapsed label color       |

#### Header

| Variable                                          | Default Value                                                                   | Description                     |
| ------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------- |
| `--osdk-filter-header-padding`                    | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 3)`   | Header padding                  |
| `--osdk-filter-header-padding-bottom`             | `0`                                                                             | Header bottom padding           |
| `--osdk-filter-header-border-bottom`              | `var(--osdk-surface-border)`                                                    | Header bottom border            |
| `--osdk-filter-header-gap`                        | `calc(var(--osdk-surface-spacing) * 2)`                                         | Header gap                      |
| `--osdk-filter-header-titleContainer-gap`         | `var(--osdk-surface-spacing)`                                                   | Title container gap             |
| `--osdk-filter-header-font-family`                | `var(--osdk-typography-family-default)`                                         | Header font family              |
| `--osdk-filter-header-font-size`                  | `var(--osdk-typography-size-body-medium)`                                       | Header font size                |
| `--osdk-filter-header-font-weight`                | `var(--osdk-typography-weight-bold)`                                            | Header font weight              |
| `--osdk-filter-header-color`                      | `var(--osdk-typography-color-default-rest)`                                     | Header text color               |
| `--osdk-filter-header-icon-color`                 | `var(--osdk-typography-color-muted)`                                            | Header icon color               |
| `--osdk-filter-header-activeCount-font-size`      | `var(--osdk-typography-size-body-small)`                                        | Active count font size          |
| `--osdk-filter-header-activeCount-color`          | `var(--osdk-typography-color-muted)`                                            | Active count color              |
| `--osdk-filter-header-button-padding`             | `calc(var(--osdk-surface-spacing) * 1)`                                         | Header button padding           |
| `--osdk-filter-header-button-bg`                  | `transparent`                                                                   | Header button background        |
| `--osdk-filter-header-button-border-radius`       | `var(--osdk-surface-border-radius)`                                             | Header button border radius     |
| `--osdk-filter-header-button-transition`          | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)`    | Header button transition        |
| `--osdk-filter-header-button-bg-hover`            | `var(--osdk-custom-color-gray-1)`                                               | Header button hover background  |
| `--osdk-filter-header-button-bg-active`           | `var(--osdk-custom-color-gray-2)`                                               | Header button active background |
| `--osdk-filter-header-reset-font-size`            | `var(--osdk-typography-size-body-small)`                                        | Reset button font size          |
| `--osdk-filter-header-reset-color`                | `var(--osdk-intent-primary-rest)`                                               | Reset button color              |
| `--osdk-filter-header-reset-color-disabled`       | `var(--osdk-typography-color-muted)`                                            | Reset button disabled color     |
| `--osdk-filter-header-reset-padding`              | `calc(var(--osdk-surface-spacing) * 1) calc(var(--osdk-surface-spacing) * 1.5)` | Reset button padding            |
| `--osdk-filter-header-reset-border`               | `var(--osdk-surface-border-width) solid var(--osdk-intent-primary-rest)`        | Reset button border             |
| `--osdk-filter-header-reset-border-disabled`      | `var(--osdk-surface-border-width) solid var(--osdk-typography-color-muted)`     | Reset button disabled border    |
| `--osdk-filter-header-reset-border-radius`        | `var(--osdk-surface-border-radius)`                                             | Reset button border radius      |
| `--osdk-filter-header-collapse-icon-size`         | `calc(var(--osdk-surface-spacing) * 1.5)`                                       | Collapse icon size              |
| `--osdk-filter-header-collapse-icon-border-width` | `var(--osdk-surface-border-width)`                                              | Collapse icon border width      |
| `--osdk-filter-header-collapse-icon-color`        | `var(--osdk-typography-color-muted)`                                            | Collapse icon color             |

#### Filter Item

| Variable                               | Default Value                                                                 | Description            |
| -------------------------------------- | ----------------------------------------------------------------------------- | ---------------------- |
| `--osdk-filter-item-gap`               | `calc(var(--osdk-surface-spacing) * 1)`                                       | Item gap               |
| `--osdk-filter-item-border-radius`     | `var(--osdk-surface-border-radius)`                                           | Item border radius     |
| `--osdk-filter-item-padding`           | `calc(var(--osdk-surface-spacing) * 3) calc(var(--osdk-surface-spacing) * 3)` | Item padding           |
| `--osdk-filter-item-label-font-family` | `var(--osdk-typography-family-default)`                                       | Item label font family |
| `--osdk-filter-item-label-font-size`   | `var(--osdk-typography-size-body-small)`                                      | Item label font size   |
| `--osdk-filter-item-label-font-weight` | `var(--osdk-typography-weight-bold)`                                          | Item label font weight |
| `--osdk-filter-item-label-color`       | `var(--osdk-typography-color-muted)`                                          | Item label color       |

#### Filter Item Drag Handle

| Variable                                             | Default Value                             | Description                     |
| ---------------------------------------------------- | ----------------------------------------- | ------------------------------- |
| `--osdk-filter-item-drag-handle-padding`             | `calc(var(--osdk-surface-spacing) * 0.5)` | Drag handle padding             |
| `--osdk-filter-item-drag-handle-bg`                  | `transparent`                             | Drag handle background          |
| `--osdk-filter-item-drag-handle-border-radius`       | `var(--osdk-surface-border-radius)`       | Drag handle border radius       |
| `--osdk-filter-item-drag-handle-color`               | `var(--osdk-drag-handle-color)`           | Drag handle color               |
| `--osdk-filter-item-drag-handle-color-hover`         | `var(--osdk-drag-handle-color-hover)`     | Drag handle hover color         |
| `--osdk-filter-item-drag-handle-bg-hover`            | `var(--osdk-custom-color-gray-1)`         | Drag handle hover background    |
| `--osdk-filter-item-drag-handle-focus-outline-color` | `var(--osdk-emphasis-focus-color)`        | Drag handle focus outline color |
| `--osdk-filter-item-dragging-opacity`                | `0.5`                                     | Dragging item opacity           |
| `--osdk-filter-item-drag-overlay-shadow`             | `var(--osdk-surface-shadow-2)`            | Drag overlay shadow             |
| `--osdk-filter-item-drag-overlay-border-radius`      | `var(--osdk-surface-border-radius)`       | Drag overlay border radius      |
| `--osdk-filter-item-drag-overlay-bg`                 | `var(--osdk-background-primary)`          | Drag overlay background         |

#### Filter Item Header Actions

| Variable                                         | Default Value                             | Description                    |
| ------------------------------------------------ | ----------------------------------------- | ------------------------------ |
| `--osdk-filter-item-header-action-padding`       | `calc(var(--osdk-surface-spacing) * 0.5)` | Action button padding          |
| `--osdk-filter-item-header-action-color`         | `var(--osdk-typography-color-muted)`      | Action button color            |
| `--osdk-filter-item-header-action-bg-hover`      | `var(--osdk-custom-color-gray-1)`         | Action button hover background |
| `--osdk-filter-item-header-action-border-radius` | `var(--osdk-surface-border-radius)`       | Action button border radius    |

#### Exclude Dropdown

| Variable                                                    | Default Value                               | Description                    |
| ----------------------------------------------------------- | ------------------------------------------- | ------------------------------ |
| `--osdk-filter-item-exclude-dropdown-font-family`           | `var(--osdk-typography-family-default)`     | Dropdown font family           |
| `--osdk-filter-item-exclude-dropdown-font-size`             | `var(--osdk-typography-size-body-small)`    | Dropdown font size             |
| `--osdk-filter-item-exclude-dropdown-color`                 | `var(--osdk-typography-color-default-rest)` | Dropdown text color            |
| `--osdk-filter-item-exclude-dropdown-trigger-color`         | `var(--osdk-intent-primary-rest)`           | Dropdown trigger color         |
| `--osdk-filter-item-exclude-dropdown-trigger-border-radius` | `var(--osdk-surface-border-radius)`         | Dropdown trigger border radius |
| `--osdk-filter-item-exclude-dropdown-separator-color`       | `var(--osdk-surface-border-color)`          | Dropdown separator color       |
| `--osdk-filter-item-exclude-dropdown-min-width`             | `calc(var(--osdk-surface-spacing) * 30)`    | Dropdown minimum width         |

#### Overflow / Dropdown Menu

| Variable                                     | Default Value                                                                 | Description                |
| -------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------- |
| `--osdk-filter-item-menu-bg`                 | `var(--osdk-background-primary)`                                              | Menu background            |
| `--osdk-filter-item-menu-shadow`             | `var(--osdk-surface-shadow-2)`                                                | Menu shadow                |
| `--osdk-filter-item-menu-border`             | `var(--osdk-surface-border)`                                                  | Menu border                |
| `--osdk-filter-item-menu-border-radius`      | `var(--osdk-surface-border-radius)`                                           | Menu border radius         |
| `--osdk-filter-item-menu-padding`            | `calc(var(--osdk-surface-spacing) * 0.5)`                                     | Menu padding               |
| `--osdk-filter-item-menu-item-padding`       | `calc(var(--osdk-surface-spacing) * 1) calc(var(--osdk-surface-spacing) * 2)` | Menu item padding          |
| `--osdk-filter-item-menu-item-font-family`   | `var(--osdk-typography-family-default)`                                       | Menu item font family      |
| `--osdk-filter-item-menu-item-font-size`     | `var(--osdk-typography-size-body-small)`                                      | Menu item font size        |
| `--osdk-filter-item-menu-item-color`         | `var(--osdk-typography-color-default-rest)`                                   | Menu item text color       |
| `--osdk-filter-item-menu-item-bg-hover`      | `var(--osdk-custom-color-gray-1)`                                             | Menu item hover background |
| `--osdk-filter-item-menu-item-border-radius` | `var(--osdk-surface-border-radius)`                                           | Menu item border radius    |
| `--osdk-filter-item-menu-separator-color`    | `var(--osdk-surface-border-color)`                                            | Menu separator color       |
| `--osdk-filter-item-menu-check-size`         | `calc(var(--osdk-surface-spacing) * 3)`                                       | Menu check icon size       |

#### Shared Input Tokens

| Variable                                   | Default Value                                                                 | Description                |
| ------------------------------------------ | ----------------------------------------------------------------------------- | -------------------------- |
| `--osdk-filter-input-bg`                   | `var(--osdk-background-primary)`                                              | Input background           |
| `--osdk-filter-input-border`               | `var(--osdk-surface-border)`                                                  | Input border               |
| `--osdk-filter-input-border-radius`        | `var(--osdk-surface-border-radius)`                                           | Input border radius        |
| `--osdk-filter-input-padding`              | `calc(var(--osdk-surface-spacing) * 1) calc(var(--osdk-surface-spacing) * 2)` | Input padding              |
| `--osdk-filter-input-gap`                  | `var(--osdk-surface-spacing)`                                                 | Input gap                  |
| `--osdk-filter-input-transition`           | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)`  | Input transition           |
| `--osdk-filter-input-focus-border`         | `var(--osdk-intent-primary-rest)`                                             | Input focused border       |
| `--osdk-filter-input-focus-outline-width`  | `var(--osdk-emphasis-focus-width)`                                            | Focus outline width        |
| `--osdk-filter-input-focus-outline-color`  | `var(--osdk-emphasis-focus-color)`                                            | Focus outline color        |
| `--osdk-filter-input-focus-outline-offset` | `var(--osdk-emphasis-focus-offset)`                                           | Focus outline offset       |
| `--osdk-filter-input-icon-color`           | `var(--osdk-typography-color-muted)`                                          | Input icon color           |
| `--osdk-filter-input-font-family`          | `var(--osdk-typography-family-default)`                                       | Input font family          |
| `--osdk-filter-input-font-size`            | `var(--osdk-typography-size-body-small)`                                      | Input font size            |
| `--osdk-filter-input-color`                | `var(--osdk-typography-color-default-rest)`                                   | Input text color           |
| `--osdk-filter-input-placeholder-color`    | `var(--osdk-typography-color-muted)`                                          | Input placeholder color    |
| `--osdk-filter-input-clear-padding`        | `calc(var(--osdk-surface-spacing) * 0.5)`                                     | Clear button padding       |
| `--osdk-filter-input-clear-bg`             | `transparent`                                                                 | Clear button background    |
| `--osdk-filter-input-clear-border-radius`  | `var(--osdk-surface-border-radius)`                                           | Clear button border radius |
| `--osdk-filter-input-clear-bg-hover`       | `var(--osdk-custom-color-gray-1)`                                             | Clear hover background     |
| `--osdk-filter-input-clear-bg-active`      | `var(--osdk-custom-color-gray-2)`                                             | Clear active background    |

#### Shared Message Tokens

| Variable                             | Default Value                            | Description          |
| ------------------------------------ | ---------------------------------------- | -------------------- |
| `--osdk-filter-message-font-family`  | `var(--osdk-typography-family-default)`  | Message font family  |
| `--osdk-filter-message-font-size`    | `var(--osdk-typography-size-body-small)` | Message font size    |
| `--osdk-filter-message-padding`      | `var(--osdk-surface-spacing)`            | Message padding      |
| `--osdk-filter-message-color-muted`  | `var(--osdk-typography-color-muted)`     | Muted message color  |
| `--osdk-filter-message-color-danger` | `var(--osdk-intent-danger-rest)`         | Danger message color |

#### Tag Tokens

| Variable                               | Default Value                                                                   | Description                 |
| -------------------------------------- | ------------------------------------------------------------------------------- | --------------------------- |
| `--osdk-filter-tag-container-gap`      | `calc(var(--osdk-surface-spacing) * 1)`                                         | Tag container gap           |
| `--osdk-filter-tag-gap`                | `calc(var(--osdk-surface-spacing) * 0.5)`                                       | Tag internal gap            |
| `--osdk-filter-tag-padding`            | `calc(var(--osdk-surface-spacing) * 0.5) calc(var(--osdk-surface-spacing) * 1)` | Tag padding                 |
| `--osdk-filter-tag-border-radius`      | `var(--osdk-surface-border-radius)`                                             | Tag border radius           |
| `--osdk-filter-tag-bg`                 | `var(--osdk-custom-color-gray-1)`                                               | Tag background              |
| `--osdk-filter-tag-font-family`        | `var(--osdk-typography-family-default)`                                         | Tag font family             |
| `--osdk-filter-tag-font-size`          | `var(--osdk-typography-size-body-small)`                                        | Tag font size               |
| `--osdk-filter-tag-line-height`        | `1.4`                                                                           | Tag line height             |
| `--osdk-filter-tag-color`              | `var(--osdk-typography-color-default-rest)`                                     | Tag text color              |
| `--osdk-filter-tag-remove-color`       | `var(--osdk-typography-color-muted)`                                            | Tag remove button color     |
| `--osdk-filter-tag-remove-font-size`   | `var(--osdk-typography-size-body-medium)`                                       | Tag remove button font size |
| `--osdk-filter-tag-remove-transition`  | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)`    | Tag remove transition       |
| `--osdk-filter-tag-remove-color-hover` | `var(--osdk-typography-color-default-rest)`                                     | Tag remove hover color      |

#### Error Boundary Tokens

| Variable                                     | Default Value                                                                 | Description                   |
| -------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------- |
| `--osdk-error-boundary-gap`                  | `calc(var(--osdk-surface-spacing) * 2)`                                       | Error boundary gap            |
| `--osdk-error-boundary-padding`              | `calc(var(--osdk-surface-spacing) * 2)`                                       | Error boundary padding        |
| `--osdk-error-boundary-border-radius`        | `var(--osdk-surface-border-radius)`                                           | Error boundary border radius  |
| `--osdk-error-boundary-bg`                   | `var(--osdk-surface-background-color-danger-rest)`                            | Error boundary background     |
| `--osdk-error-boundary-font-size`            | `var(--osdk-typography-size-body-small)`                                      | Error boundary font size      |
| `--osdk-error-boundary-text-color`           | `var(--osdk-typography-color-danger-rest)`                                    | Error boundary text color     |
| `--osdk-error-boundary-button-padding`       | `calc(var(--osdk-surface-spacing) * 1) calc(var(--osdk-surface-spacing) * 2)` | Retry button padding          |
| `--osdk-error-boundary-button-border-color`  | `currentColor`                                                                | Retry button border color     |
| `--osdk-error-boundary-button-border-radius` | `var(--osdk-surface-border-radius)`                                           | Retry button border radius    |
| `--osdk-error-boundary-button-font-size`     | `var(--osdk-typography-size-body-x-small)`                                    | Retry button font size        |
| `--osdk-error-boundary-button-color`         | `inherit`                                                                     | Retry button text color       |
| `--osdk-error-boundary-button-hover-bg`      | `var(--osdk-custom-color-gray-1)`                                             | Retry button hover background |

#### Checkbox List Tokens

| Variable                                   | Default Value                                        | Description                   |
| ------------------------------------------ | ---------------------------------------------------- | ----------------------------- |
| `--osdk-filter-checkbox-list-gap`          | `calc(var(--osdk-surface-spacing) * 0.5)`            | Checkbox list gap             |
| `--osdk-filter-checkbox-row-padding`       | `calc(var(--osdk-surface-spacing) * 0.5) 0`          | Checkbox row padding          |
| `--osdk-filter-checkbox-row-bg-hover`      | `var(--osdk-surface-background-color-default-hover)` | Checkbox row hover background |
| `--osdk-filter-checkbox-row-border-radius` | `var(--osdk-surface-border-radius)`                  | Checkbox row border radius    |
| `--osdk-filter-checkbox-label-gap`         | `var(--osdk-surface-spacing)`                        | Checkbox label gap            |
| `--osdk-filter-checkbox-value-font-family` | `var(--osdk-typography-family-default)`              | Checkbox value font family    |
| `--osdk-filter-checkbox-value-font-size`   | `var(--osdk-typography-size-body-medium)`            | Checkbox value font size      |
| `--osdk-filter-checkbox-value-line-height` | `1.4`                                                | Checkbox value line height    |
| `--osdk-filter-checkbox-value-color`       | `var(--osdk-typography-color-default-rest)`          | Checkbox value color          |
| `--osdk-filter-checkbox-color-dot-size`    | `calc(var(--osdk-surface-spacing) * 2)`              | Color dot indicator size      |

#### Toggle Tokens

| Variable                                 | Default Value                               | Description              |
| ---------------------------------------- | ------------------------------------------- | ------------------------ |
| `--osdk-filter-toggle-label-gap`         | `var(--osdk-surface-spacing)`               | Toggle label gap         |
| `--osdk-filter-toggle-label-font-family` | `var(--osdk-typography-family-default)`     | Toggle label font family |
| `--osdk-filter-toggle-label-font-size`   | `var(--osdk-typography-size-body-medium)`   | Toggle label font size   |
| `--osdk-filter-toggle-label-line-height` | `1.4`                                       | Toggle label line height |
| `--osdk-filter-toggle-label-color`       | `var(--osdk-typography-color-default-rest)` | Toggle label color       |

#### Listogram Tokens

| Variable                                      | Default Value                                                                | Description                     |
| --------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------- |
| `--osdk-filter-listogram-gap`                 | `var(--osdk-surface-spacing)`                                                | Listogram gap                   |
| `--osdk-filter-listogram-row-gap`             | `calc(var(--osdk-surface-spacing) * 2)`                                      | Listogram row gap               |
| `--osdk-filter-listogram-row-padding`         | `var(--osdk-surface-spacing)`                                                | Listogram row padding           |
| `--osdk-filter-listogram-row-border-radius`   | `var(--osdk-surface-border-radius)`                                          | Listogram row border radius     |
| `--osdk-filter-listogram-row-transition`      | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)` | Listogram row transition        |
| `--osdk-filter-listogram-row-bg-hover`        | `var(--osdk-surface-background-color-default-hover)`                         | Listogram row hover background  |
| `--osdk-filter-listogram-row-bg-active`       | `var(--osdk-surface-background-color-default-active)`                        | Listogram row active background |
| `--osdk-filter-listogram-row-focus-outline`   | `var(--osdk-emphasis-focus-width) solid var(--osdk-emphasis-focus-color)`    | Listogram row focus outline     |
| `--osdk-filter-listogram-row-focus-offset`    | `var(--osdk-emphasis-focus-offset)`                                          | Listogram row focus offset      |
| `--osdk-filter-listogram-label-font-family`   | `var(--osdk-typography-family-default)`                                      | Listogram label font family     |
| `--osdk-filter-listogram-label-font-size`     | `var(--osdk-typography-size-body-medium)`                                    | Listogram label font size       |
| `--osdk-filter-listogram-label-color`         | `var(--osdk-typography-color-default-rest)`                                  | Listogram label color           |
| `--osdk-filter-listogram-bar-height`          | `calc(var(--osdk-surface-spacing) * 2)`                                      | Bar height                      |
| `--osdk-filter-listogram-bar-width`           | `calc(var(--osdk-surface-spacing) * 12.5)`                                   | Bar width                       |
| `--osdk-filter-listogram-bar-bg`              | `var(--osdk-palette-gray-100)`                                               | Bar background                  |
| `--osdk-filter-listogram-bar-border-radius`   | `var(--osdk-surface-border-radius)`                                          | Bar border radius               |
| `--osdk-filter-listogram-bar-color`           | `var(--osdk-intent-primary-rest)`                                            | Bar fill color                  |
| `--osdk-filter-listogram-bar-fill-transition` | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)` | Bar fill transition             |
| `--osdk-filter-listogram-count-font-family`   | `var(--osdk-typography-family-default)`                                      | Count font family               |
| `--osdk-filter-listogram-count-font-size`     | `var(--osdk-typography-size-body-small)`                                     | Count font size                 |
| `--osdk-filter-listogram-count-color`         | `var(--osdk-typography-color-muted)`                                         | Count color                     |
| `--osdk-filter-listogram-view-all-font-size`  | `var(--osdk-typography-size-body-small)`                                     | View all font size              |
| `--osdk-filter-listogram-view-all-color`      | `var(--osdk-typography-color-muted)`                                         | View all color                  |
| `--osdk-filter-listogram-selected-color`      | `var(--osdk-intent-primary-rest)`                                            | Selected item color             |

#### Range Input Tokens

| Variable                                         | Default Value                                                                | Description                 |
| ------------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------- |
| `--osdk-filter-range-gap`                        | `calc(var(--osdk-surface-spacing) * 2.5)`                                    | Range gap                   |
| `--osdk-filter-range-histogram-padding-bottom`   | `calc(var(--osdk-surface-spacing) * 1)`                                      | Histogram bottom padding    |
| `--osdk-filter-range-histogram-padding-inline`   | `calc(var(--osdk-surface-spacing) * 2)`                                      | Histogram inline padding    |
| `--osdk-filter-range-histogram-height`           | `calc(var(--osdk-surface-spacing) * 15)`                                     | Histogram height            |
| `--osdk-filter-range-histogram-bar-gap`          | `calc(var(--osdk-surface-spacing) * 0.5)`                                    | Histogram bar gap           |
| `--osdk-filter-range-histogram-bar-min-width`    | `var(--osdk-surface-spacing)`                                                | Histogram bar minimum width |
| `--osdk-filter-range-histogram-bar-color`        | `var(--osdk-palette-gray-200)`                                               | Histogram bar color         |
| `--osdk-filter-range-histogram-bar-active-color` | `var(--osdk-intent-primary-rest)`                                            | Histogram active bar color  |
| `--osdk-filter-range-histogram-bar-transition`   | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)` | Histogram bar transition    |
| `--osdk-filter-range-inputs-gap`                 | `calc(var(--osdk-surface-spacing) * 0.5)`                                    | Range inputs gap            |
| `--osdk-filter-range-input-wrapper-gap`          | `var(--osdk-surface-spacing)`                                                | Input wrapper gap           |
| `--osdk-filter-range-label-font-family`          | `var(--osdk-typography-family-default)`                                      | Range label font family     |
| `--osdk-filter-range-label-font-size`            | `var(--osdk-typography-size-body-small)`                                     | Range label font size       |
| `--osdk-filter-range-label-color`                | `var(--osdk-typography-color-muted)`                                         | Range label color           |
| `--osdk-filter-range-separator-color`            | `var(--osdk-typography-color-muted)`                                         | Range separator color       |

#### Timeline Input Tokens

| Variable                                      | Default Value                                        | Description                      |
| --------------------------------------------- | ---------------------------------------------------- | -------------------------------- |
| `--osdk-filter-timeline-labels-gap`           | `var(--osdk-surface-spacing)`                        | Timeline labels gap              |
| `--osdk-filter-timeline-labels-font-family`   | `var(--osdk-typography-family-default)`              | Timeline labels font family      |
| `--osdk-filter-timeline-labels-font-size`     | `var(--osdk-typography-size-body-small)`             | Timeline labels font size        |
| `--osdk-filter-timeline-labels-color`         | `var(--osdk-typography-color-muted)`                 | Timeline labels color            |
| `--osdk-filter-timeline-button-padding`       | `calc(var(--osdk-surface-spacing) * 0.5)`            | Timeline button padding          |
| `--osdk-filter-timeline-button-color`         | `var(--osdk-iconography-color-muted)`                | Timeline button color            |
| `--osdk-filter-timeline-button-border-radius` | `var(--osdk-surface-border-radius)`                  | Timeline button border radius    |
| `--osdk-filter-timeline-button-bg-hover`      | `var(--osdk-surface-background-color-default-hover)` | Timeline button hover background |
| `--osdk-filter-timeline-button-color-hover`   | `var(--osdk-typography-color-default-rest)`          | Timeline button hover color      |
| `--osdk-filter-timeline-brush-color`          | `var(--osdk-typography-color-muted)`                 | Timeline brush color             |
| `--osdk-filter-timeline-input-font-size`      | `var(--osdk-typography-size-body-medium)`            | Timeline input font size         |

#### Null Value Wrapper Tokens

| Variable                               | Default Value                               | Description            |
| -------------------------------------- | ------------------------------------------- | ---------------------- |
| `--osdk-filter-null-wrapper-gap`       | `var(--osdk-surface-spacing)`               | Null wrapper gap       |
| `--osdk-filter-null-row-padding`       | `calc(var(--osdk-surface-spacing) * 1) 0`   | Null row padding       |
| `--osdk-filter-null-row-border-top`    | `none`                                      | Null row top border    |
| `--osdk-filter-null-label-gap`         | `var(--osdk-surface-spacing)`               | Null label gap         |
| `--osdk-filter-null-label-font-family` | `var(--osdk-typography-family-default)`     | Null label font family |
| `--osdk-filter-null-label-font-size`   | `var(--osdk-typography-size-body-medium)`   | Null label font size   |
| `--osdk-filter-null-label-line-height` | `1.4`                                       | Null label line height |
| `--osdk-filter-null-label-color`       | `var(--osdk-typography-color-default-rest)` | Null label color       |
| `--osdk-filter-null-count-font-family` | `var(--osdk-typography-family-default)`     | Null count font family |
| `--osdk-filter-null-count-font-size`   | `var(--osdk-typography-size-body-small)`    | Null count font size   |
| `--osdk-filter-null-count-color`       | `var(--osdk-typography-color-muted)`        | Null count color       |

#### Multi-Select Tokens

| Variable                                      | Default Value                            | Description                |
| --------------------------------------------- | ---------------------------------------- | -------------------------- |
| `--osdk-filter-multiselect-gap`               | `calc(var(--osdk-surface-spacing) * 2)`  | Multi-select gap           |
| `--osdk-filter-multiselect-inputRow-gap`      | `var(--osdk-surface-spacing)`            | Multi-select input row gap |
| `--osdk-filter-multiselect-count-font-family` | `var(--osdk-typography-family-default)`  | Count font family          |
| `--osdk-filter-multiselect-count-font-size`   | `var(--osdk-typography-size-body-small)` | Count font size            |
| `--osdk-filter-multiselect-count-color`       | `var(--osdk-typography-color-muted)`     | Count color                |

#### Date Filter Tokens

| Variable                               | Default Value                             | Description            |
| -------------------------------------- | ----------------------------------------- | ---------------------- |
| `--osdk-filter-select-container-gap`   | `var(--osdk-surface-spacing)`             | Select container gap   |
| `--osdk-filter-date-clear-font-family` | `var(--osdk-typography-family-default)`   | Date clear font family |
| `--osdk-filter-date-clear-font-size`   | `var(--osdk-typography-size-body-small)`  | Date clear font size   |
| `--osdk-filter-date-clear-color`       | `var(--osdk-intent-primary-rest)`         | Date clear color       |
| `--osdk-filter-date-clear-padding`     | `calc(var(--osdk-surface-spacing) * 0.5)` | Date clear padding     |

#### Single Select Tokens

| Variable                                   | Default Value                                                                | Description                   |
| ------------------------------------------ | ---------------------------------------------------------------------------- | ----------------------------- |
| `--osdk-filter-select-clear-padding`       | `calc(var(--osdk-surface-spacing) * 0.5)`                                    | Select clear padding          |
| `--osdk-filter-select-clear-color`         | `var(--osdk-typography-color-muted)`                                         | Select clear color            |
| `--osdk-filter-select-clear-border-radius` | `var(--osdk-surface-border-radius)`                                          | Select clear border radius    |
| `--osdk-filter-select-clear-transition`    | `var(--osdk-emphasis-transition-duration) var(--osdk-emphasis-ease-default)` | Select clear transition       |
| `--osdk-filter-select-clear-color-hover`   | `var(--osdk-typography-color-default-rest)`                                  | Select clear hover color      |
| `--osdk-filter-select-clear-bg-hover`      | `var(--osdk-custom-color-gray-1)`                                            | Select clear hover background |

#### Text Tags Tokens

| Variable                     | Default Value                 | Description   |
| ---------------------------- | ----------------------------- | ------------- |
| `--osdk-filter-texttags-gap` | `var(--osdk-surface-spacing)` | Text tags gap |

#### Skeleton Loading

| Variable                              | Default Value                              | Description                      |
| ------------------------------------- | ------------------------------------------ | -------------------------------- |
| `--osdk-filter-skeleton-text-height`  | `calc(var(--osdk-surface-spacing) * 1.5)`  | Skeleton text height             |
| `--osdk-filter-skeleton-count-width`  | `calc(var(--osdk-surface-spacing) * 2.5)`  | Skeleton count width             |
| `--osdk-filter-content-fade-duration` | `var(--osdk-emphasis-transition-duration)` | Content fade transition duration |

### Form

Styling for form components.

#### Layout

| Variable                      | Default Value                           | Description          |
| ----------------------------- | --------------------------------------- | -------------------- |
| `--osdk-form-content-padding` | `calc(var(--osdk-surface-spacing) * 4)` | Form content padding |
| `--osdk-form-field-gap`       | `calc(var(--osdk-surface-spacing) * 4)` | Gap between fields   |

#### Header

| Variable                            | Default Value                               | Description           |
| ----------------------------------- | ------------------------------------------- | --------------------- |
| `--osdk-form-header-border-color`   | `var(--osdk-surface-border-color-default)`  | Header border color   |
| `--osdk-form-header-font-size`      | `var(--osdk-typography-size-body-large)`    | Header font size      |
| `--osdk-form-header-font-weight`    | `var(--osdk-typography-weight-bold)`        | Header font weight    |
| `--osdk-form-header-color`          | `var(--osdk-typography-color-default-rest)` | Header text color     |
| `--osdk-form-header-block-padding`  | `calc(var(--osdk-surface-spacing) * 3)`     | Header block padding  |
| `--osdk-form-header-inline-padding` | `var(--osdk-form-content-padding)`          | Header inline padding |

#### Footer

| Variable                             | Default Value                              | Description                  |
| ------------------------------------ | ------------------------------------------ | ---------------------------- |
| `--osdk-form-footer-border-color`    | `var(--osdk-surface-border-color-default)` | Footer border color          |
| `--osdk-form-footer-error-color`     | `var(--osdk-form-error-color)`             | Footer error indicator color |
| `--osdk-form-footer-error-font-size` | `var(--osdk-typography-size-body-medium)`  | Footer error font size       |

#### Labels

| Variable                        | Default Value                               | Description                 |
| ------------------------------- | ------------------------------------------- | --------------------------- |
| `--osdk-form-label-font-size`   | `var(--osdk-typography-size-body-medium)`   | Label font size             |
| `--osdk-form-label-font-weight` | `var(--osdk-typography-weight-bold)`        | Label font weight           |
| `--osdk-form-label-color`       | `var(--osdk-typography-color-default-rest)` | Label text color            |
| `--osdk-form-label-field-gap`   | `calc(var(--osdk-surface-spacing) * 1.5)`   | Gap between label and field |

#### Validation

| Variable                      | Default Value                              | Description              |
| ----------------------------- | ------------------------------------------ | ------------------------ |
| `--osdk-form-required-color`  | `var(--osdk-intent-danger-rest)`           | Required indicator color |
| `--osdk-form-error-font-size` | `var(--osdk-typography-size-body-small)`   | Error message font size  |
| `--osdk-form-error-color`     | `var(--osdk-typography-color-danger-rest)` | Error message color      |

### Input

Shared styling for input components.

| Variable                           | Default Value                                                                     | Description             |
| ---------------------------------- | --------------------------------------------------------------------------------- | ----------------------- |
| `--osdk-input-min-height`          | `30px`                                                                            | Input minimum height    |
| `--osdk-input-padding`             | `calc(var(--osdk-surface-spacing) * 1.5) calc(var(--osdk-surface-spacing) * 2.5)` | Input padding           |
| `--osdk-input-border-radius`       | `var(--osdk-surface-border-radius)`                                               | Input border radius     |
| `--osdk-input-border-width`        | `var(--osdk-surface-border-width)`                                                | Input border width      |
| `--osdk-input-border-color`        | `var(--osdk-surface-border-color-default)`                                        | Input border color      |
| `--osdk-input-border-color-focus`  | `var(--osdk-intent-primary-rest)`                                                 | Input focused border    |
| `--osdk-input-border-color-error`  | `var(--osdk-intent-danger-rest)`                                                  | Input error border      |
| `--osdk-input-bg`                  | `var(--osdk-surface-background-color-default-rest)`                               | Input background        |
| `--osdk-input-bg-hover`            | `var(--osdk-surface-background-color-default-hover)`                              | Input hover background  |
| `--osdk-input-color`               | `var(--osdk-typography-color-default-rest)`                                       | Input text color        |
| `--osdk-input-placeholder-color`   | `var(--osdk-typography-color-muted)`                                              | Input placeholder color |
| `--osdk-input-font-size`           | `var(--osdk-typography-size-body-medium)`                                         | Input font size         |
| `--osdk-input-font-family`         | `var(--osdk-typography-family-default)`                                           | Input font family       |
| `--osdk-input-transition-duration` | `var(--osdk-emphasis-transition-duration)`                                        | Transition duration     |
| `--osdk-input-transition-ease`     | `var(--osdk-emphasis-ease-default)`                                               | Transition easing       |
| `--osdk-input-focus-width`         | `var(--osdk-emphasis-focus-width)`                                                | Focus ring width        |
| `--osdk-input-focus-color`         | `var(--osdk-emphasis-focus-color)`                                                | Focus ring color        |
| `--osdk-input-focus-offset`        | `var(--osdk-emphasis-focus-offset)`                                               | Focus ring offset       |
| `--osdk-input-disabled-opacity`    | `0.5`                                                                             | Disabled opacity        |

### Markdown Renderer

Styling for markdown renderer components.

| Variable                                             | Default Value                               | Description               |
| ---------------------------------------------------- | ------------------------------------------- | ------------------------- |
| `--osdk-markdown-renderer-bg`                        | `var(--osdk-background-primary)`            | Container background      |
| `--osdk-markdown-renderer-border`                    | `var(--osdk-surface-border)`                | Container border          |
| `--osdk-markdown-renderer-padding`                   | `calc(var(--osdk-surface-spacing) * 3)`     | Container padding         |
| `--osdk-markdown-renderer-line-height`               | `1.6`                                       | Content line height       |
| `--osdk-markdown-renderer-heading-margin-top`        | `1.5em`                                     | Heading top margin        |
| `--osdk-markdown-renderer-heading-margin-bottom`     | `0.5em`                                     | Heading bottom margin     |
| `--osdk-markdown-renderer-paragraph-spacing`         | `1em`                                       | Paragraph spacing         |
| `--osdk-markdown-renderer-code-bg`                   | `var(--osdk-background-secondary)`          | Code block background     |
| `--osdk-markdown-renderer-code-inline-padding`       | `2px 6px`                                   | Inline code padding       |
| `--osdk-markdown-renderer-code-inline-border-radius` | `3px`                                       | Inline code border radius |
| `--osdk-markdown-renderer-blockquote-border`         | `3px solid var(--osdk-intent-primary-rest)` | Blockquote border         |
| `--osdk-markdown-renderer-link-color`                | `var(--osdk-intent-primary-rest)`           | Link color                |
| `--osdk-markdown-renderer-table-border`              | `var(--osdk-surface-border-color)`          | Table border color        |

### Object Set

Styling for object set display components.

| Variable                                 | Default Value                                | Description            |
| ---------------------------------------- | -------------------------------------------- | ---------------------- |
| `--osdk-object-set-gap`                  | `calc(var(--osdk-surface-spacing) * 2)`      | Object set gap         |
| `--osdk-object-set-min-height`           | `30px`                                       | Minimum height         |
| `--osdk-object-set-padding`              | `calc(var(--osdk-surface-spacing) * 1.5) 0`  | Object set padding     |
| `--osdk-object-set-color`                | `var(--osdk-typography-color-default-rest)`  | Text color             |
| `--osdk-object-set-placeholder-color`    | `var(--osdk-typography-color-muted)`         | Placeholder text color |
| `--osdk-object-set-font-family`          | `var(--osdk-typography-family-default)`      | Font family            |
| `--osdk-object-set-font-size`            | `var(--osdk-typography-size-body-medium)`    | Font size              |
| `--osdk-object-set-line-height`          | `var(--osdk-typography-line-height-default)` | Line height            |
| `--osdk-object-set-error-color`          | `var(--osdk-intent-danger-rest)`             | Error state color      |
| `--osdk-object-set-icon-skeleton-width`  | `calc(var(--osdk-surface-spacing) * 4)`      | Icon skeleton width    |
| `--osdk-object-set-label-skeleton-width` | `calc(var(--osdk-surface-spacing) * 30)`     | Label skeleton width   |

### PDF Viewer

Styling for PDF viewer components.

#### Container

| Variable                   | Default Value                    | Description       |
| -------------------------- | -------------------------------- | ----------------- |
| `--osdk-pdf-viewer-bg`     | `var(--osdk-background-primary)` | Viewer background |
| `--osdk-pdf-viewer-border` | `var(--osdk-surface-border)`     | Viewer border     |

#### Toolbar

| Variable                           | Default Value                               | Description        |
| ---------------------------------- | ------------------------------------------- | ------------------ |
| `--osdk-pdf-viewer-toolbar-bg`     | `var(--osdk-background-secondary)`          | Toolbar background |
| `--osdk-pdf-viewer-toolbar-border` | `var(--osdk-surface-border)`                | Toolbar border     |
| `--osdk-pdf-viewer-toolbar-color`  | `var(--osdk-typography-color-default-rest)` | Toolbar text color |
| `--osdk-pdf-viewer-toolbar-gap`    | `var(--osdk-surface-spacing)`               | Toolbar gap        |

#### Search

| Variable                             | Default Value                                                          | Description                |
| ------------------------------------ | ---------------------------------------------------------------------- | -------------------------- |
| `--osdk-pdf-viewer-search-highlight` | `color-mix(in srgb, var(--osdk-intent-warning-rest) 40%, transparent)` | Search highlight color     |
| `--osdk-pdf-viewer-search-active`    | `color-mix(in srgb, var(--osdk-intent-warning-rest) 70%, transparent)` | Active search result color |
| `--osdk-pdf-viewer-search-bar-bg`    | `var(--osdk-background-primary)`                                       | Search bar background      |

#### Annotations

| Variable                                 | Default Value                                                          | Description                |
| ---------------------------------------- | ---------------------------------------------------------------------- | -------------------------- |
| `--osdk-pdf-viewer-annotation-highlight` | `color-mix(in srgb, var(--osdk-intent-primary-rest) 30%, transparent)` | Annotation highlight color |
| `--osdk-pdf-viewer-annotation-underline` | `var(--osdk-intent-primary-rest)`                                      | Annotation underline color |
| `--osdk-pdf-viewer-annotation-comment`   | `var(--osdk-intent-warning-rest)`                                      | Annotation comment color   |
| `--osdk-pdf-viewer-annotation-pin`       | `var(--osdk-intent-danger-rest)`                                       | Annotation pin color       |

#### Page

| Variable                        | Default Value                  | Description       |
| ------------------------------- | ------------------------------ | ----------------- |
| `--osdk-pdf-viewer-page-shadow` | `var(--osdk-surface-shadow-2)` | Page shadow       |
| `--osdk-pdf-viewer-page-gap`    | `var(--osdk-surface-spacing)`  | Gap between pages |

#### Sidebar

| Variable                                  | Default Value                      | Description             |
| ----------------------------------------- | ---------------------------------- | ----------------------- |
| `--osdk-pdf-viewer-sidebar-width`         | `200px`                            | Sidebar width           |
| `--osdk-pdf-viewer-sidebar-bg`            | `var(--osdk-background-secondary)` | Sidebar background      |
| `--osdk-pdf-viewer-sidebar-border`        | `var(--osdk-surface-border)`       | Sidebar border          |
| `--osdk-pdf-viewer-sidebar-active-border` | `var(--osdk-intent-primary-rest)`  | Active thumbnail border |
| `--osdk-pdf-viewer-sidebar-thumbnail-gap` | `var(--osdk-surface-spacing)`      | Thumbnail gap           |

### Radio

Styling for radio button components.

| Variable                         | Default Value                                        | Description                 |
| -------------------------------- | ---------------------------------------------------- | --------------------------- |
| `--osdk-radio-size`              | `calc(var(--osdk-surface-spacing) * 4)`              | Radio button size           |
| `--osdk-radio-indicator-size`    | `calc(var(--osdk-surface-spacing) * 2)`              | Radio indicator dot size    |
| `--osdk-radio-gap`               | `calc(var(--osdk-surface-spacing) * 2)`              | Gap between radio and label |
| `--osdk-radio-item-gap`          | `calc(var(--osdk-surface-spacing) * 2)`              | Gap between radio items     |
| `--osdk-radio-border`            | `var(--osdk-surface-border)`                         | Radio border style          |
| `--osdk-radio-bg`                | `transparent`                                        | Unchecked background        |
| `--osdk-radio-bg-hover`          | `var(--osdk-surface-background-color-default-hover)` | Unchecked hover background  |
| `--osdk-radio-bg-checked`        | `var(--osdk-intent-primary-rest)`                    | Checked background          |
| `--osdk-radio-bg-checked-hover`  | `var(--osdk-intent-primary-hover)`                   | Checked hover background    |
| `--osdk-radio-bg-checked-active` | `var(--osdk-intent-primary-active)`                  | Checked active background   |
| `--osdk-radio-indicator-color`   | `var(--osdk-intent-primary-foreground)`              | Indicator dot color         |

### Switch

Styling for toggle switch components. These tokens use CSS fallback values with override tokens.

| Variable                     | Default Value                                    | Description                  |
| ---------------------------- | ------------------------------------------------ | ---------------------------- |
| `--osdk-switch-track-width`  | `var(--osdk-switch-track-width-override, 28px)`  | Track width                  |
| `--osdk-switch-track-height` | `var(--osdk-switch-track-height-override, 16px)` | Track height                 |
| `--osdk-switch-thumb-size`   | `var(--osdk-switch-thumb-size-override, 12px)`   | Thumb size                   |
| `--osdk-switch-thumb-offset` | `var(--osdk-switch-thumb-offset-override, 2px)`  | Thumb offset from track edge |

The switch component also supports additional override tokens via CSS fallback values:

| Override Token                          | Fallback                                   | Description                       |
| --------------------------------------- | ------------------------------------------ | --------------------------------- |
| `--osdk-switch-border-radius`           | `var(--osdk-surface-border-radius)`        | Track border radius               |
| `--osdk-switch-transition-duration`     | `var(--osdk-emphasis-transition-duration)` | Transition duration               |
| `--osdk-switch-transition-ease`         | `var(--osdk-emphasis-ease-default)`        | Transition easing                 |
| `--osdk-switch-track-bg`                | `var(--osdk-intent-default-rest)`          | Unchecked track background        |
| `--osdk-switch-track-bg-hover`          | `var(--osdk-intent-default-hover)`         | Unchecked track hover background  |
| `--osdk-switch-track-bg-active`         | `var(--osdk-intent-default-active)`        | Unchecked track active background |
| `--osdk-switch-track-bg-checked`        | `var(--osdk-intent-primary-rest)`          | Checked track background          |
| `--osdk-switch-track-bg-checked-hover`  | `var(--osdk-intent-primary-hover)`         | Checked track hover background    |
| `--osdk-switch-track-bg-checked-active` | `var(--osdk-intent-primary-active)`        | Checked track active background   |
| `--osdk-switch-thumb-bg`                | `var(--osdk-palette-white)`                | Thumb background                  |
| `--osdk-switch-focus-width`             | `var(--osdk-emphasis-focus-width)`         | Focus ring width                  |
| `--osdk-switch-focus-color`             | `var(--osdk-emphasis-focus-color)`         | Focus ring color                  |
| `--osdk-switch-focus-offset`            | `var(--osdk-emphasis-focus-offset)`        | Focus ring offset                 |

### Table

Styling for table components including headers, rows, and cells.

#### Base Border Properties

| Variable                    | Default Value                              | Description                      |
| --------------------------- | ------------------------------------------ | -------------------------------- |
| `--osdk-table-border-color` | `var(--osdk-surface-border-color-default)` | Base color for all table borders |
| `--osdk-table-border-width` | `var(--osdk-surface-border-width)`         | Base width for all table borders |

#### Semantic Border Variables

| Variable                            | Default Value                                                         | Description                           |
| ----------------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| `--osdk-table-border`               | `var(--osdk-table-border-width) solid var(--osdk-table-border-color)` | Base table border (outermost edges)   |
| `--osdk-table-header-divider`       | `var(--osdk-table-border)`                                            | Vertical divider between header cells |
| `--osdk-table-cell-divider`         | `var(--osdk-table-border-width) solid transparent`                    | Vertical divider between row cells    |
| `--osdk-table-row-divider`          | `var(--osdk-table-border)`                                            | Horizontal divider between rows       |
| `--osdk-table-pinned-column-border` | `var(--osdk-table-border)`                                            | Border for pinned columns             |

#### Header Styling

| Variable                         | Default Value                            | Description                   |
| -------------------------------- | ---------------------------------------- | ----------------------------- |
| `--osdk-table-header-height`     | `50px`                                   | Table header row height       |
| `--osdk-table-header-bg`         | `var(--osdk-background-secondary)`       | Table header background color |
| `--osdk-table-header-fontWeight` | `var(--osdk-typography-weight-bold)`     | Header text weight            |
| `--osdk-table-header-fontSize`   | `var(--osdk-typography-size-body-small)` | Header text size              |
| `--osdk-table-header-color`      | `var(--osdk-typography-color-muted)`     | Header text color             |

#### Row Backgrounds

| Variable                        | Default Value                                                                              | Description                           |
| ------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------- |
| `--osdk-table-row-bg-default`   | `var(--osdk-background-primary)`                                                           | Default row background                |
| `--osdk-table-row-bg-alternate` | `var(--osdk-background-tertiary)`                                                          | Alternate row background for striping |
| `--osdk-table-row-bg-hover`     | `color-mix(in srgb, var(--osdk-intent-primary-hover) 10%, var(--osdk-background-primary))` | Row hover background                  |
| `--osdk-table-row-bg-active`    | `color-mix(in srgb, var(--osdk-intent-primary-hover) 10%, var(--osdk-background-primary))` | Active/selected row background        |

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

#### Editable Cell Styling

| Variable                                | Default Value                                                                    | Description                                  |
| --------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| `--osdk-table-cell-editable-border`     | `var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-strong)` | Border for editable cells in edit mode       |
| `--osdk-table-cell-edited-border`       | `var(--osdk-surface-border-width) solid var(--osdk-intent-primary-rest)`         | Border for edited cells with pending changes |
| `--osdk-table-cell-edited-border-error` | `var(--osdk-surface-border-width) solid var(--osdk-intent-danger-rest)`          | Border for cells with validation errors      |
| `--osdk-table-cell-editable-bg`         | `var(--osdk-background-primary)`                                                 | Background for editable cells                |

#### Edit Container

| Variable                                 | Default Value                                                                 | Description                                |
| ---------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| `--osdk-table-edit-container-padding`    | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 4)` | Padding for the edit controls container    |
| `--osdk-table-edit-container-min-height` | `calc(var(--osdk-surface-spacing) * 12)`                                      | Minimum height for edit controls container |

#### Header Menu

Styling for the column header dropdown menu.

| Variable                                | Default Value                                                            | Description                   |
| --------------------------------------- | ------------------------------------------------------------------------ | ----------------------------- |
| `--osdk-table-header-menu-padding`      | `calc(var(--osdk-surface-spacing) * 0.25)`                               | Menu button padding           |
| `--osdk-table-header-menu-bg`           | `var(--osdk-custom-color-light-gray-2)`                                  | Menu button background        |
| `--osdk-table-header-menu-border`       | `var(--osdk-surface-border-width) solid var(--osdk-custom-color-gray-4)` | Menu button border            |
| `--osdk-table-header-menu-color`        | `var(--osdk-typography-color-muted)`                                     | Menu icon color               |
| `--osdk-table-header-menu-color-active` | `var(--osdk-typography-color-default-rest)`                              | Menu icon active color        |
| `--osdk-table-header-menu-icon-color`   | `var(--osdk-table-header-menu-color)`                                    | Menu icon color (chevron)     |
| `--osdk-table-header-menu-bg-hover`     | `var(--osdk-custom-color-gray-1)`                                        | Menu button hover background  |
| `--osdk-table-header-menu-bg-active`    | `var(--osdk-custom-color-gray-2)`                                        | Menu button active background |

#### Resizer

Styling for column resize handles.

| Variable                            | Default Value                        | Description                |
| ----------------------------------- | ------------------------------------ | -------------------------- |
| `--osdk-table-resizer-color-hover`  | `var(--osdk-custom-color-primary-1)` | Resize handle hover color  |
| `--osdk-table-resizer-color-active` | `var(--osdk-intent-primary-rest)`    | Resize handle active color |

#### Skeleton Loading

| Variable                           | Default Value                          | Description                    |
| ---------------------------------- | -------------------------------------- | ------------------------------ |
| `--osdk-table-skeleton-color-from` | `var(--osdk-background-skeleton-from)` | Skeleton animation start color |
| `--osdk-table-skeleton-color-to`   | `var(--osdk-background-skeleton-to)`   | Skeleton animation end color   |

#### Column Config Dialog

| Variable                                        | Default Value                      | Description                             |
| ----------------------------------------------- | ---------------------------------- | --------------------------------------- |
| `--osdk-table-column-config-dialog-min-width`   | `800px`                            | Minimum width for column config dialog  |
| `--osdk-table-column-config-dialog-min-height`  | `400px`                            | Minimum height for column config dialog |
| `--osdk-table-column-config-visible-columns-bg` | `var(--osdk-background-secondary)` | Background for visible columns section  |

### Time Picker

Styling for time picker components.

| Variable                                      | Default Value                                                         | Description          |
| --------------------------------------------- | --------------------------------------------------------------------- | -------------------- |
| `--osdk-time-picker-margin-top`               | `calc(var(--osdk-surface-spacing) * 2)`                               | Top margin           |
| `--osdk-time-picker-padding-top`              | `calc(var(--osdk-surface-spacing) * 2)`                               | Top padding          |
| `--osdk-time-picker-border-top`               | `var(--osdk-surface-border)`                                          | Top border           |
| `--osdk-time-picker-gap`                      | `calc(var(--osdk-surface-spacing) * 4)`                               | Gap between elements |
| `--osdk-time-picker-input-font-family`        | `var(--osdk-input-font-family)`                                       | Input font family    |
| `--osdk-time-picker-input-font-size`          | `var(--osdk-input-font-size)`                                         | Input font size      |
| `--osdk-time-picker-input-padding`            | `var(--osdk-input-padding)`                                           | Input padding        |
| `--osdk-time-picker-input-border`             | `var(--osdk-input-border-width) solid var(--osdk-input-border-color)` | Input border         |
| `--osdk-time-picker-input-border-radius`      | `var(--osdk-input-border-radius)`                                     | Input border radius  |
| `--osdk-time-picker-input-bg`                 | `var(--osdk-input-bg)`                                                | Input background     |
| `--osdk-time-picker-input-color`              | `var(--osdk-input-color)`                                             | Input text color     |
| `--osdk-time-picker-input-border-color-focus` | `var(--osdk-input-border-color-focus)`                                | Focused border color |
| `--osdk-time-picker-input-focus-outline`      | `var(--osdk-input-focus-width) solid var(--osdk-input-focus-color)`   | Focus outline        |
| `--osdk-time-picker-input-focus-offset`       | `var(--osdk-input-focus-offset)`                                      | Focus offset         |

### Tooltip

Styling for tooltip components.

| Variable                      | Default Value                                                                 | Description          |
| ----------------------------- | ----------------------------------------------------------------------------- | -------------------- |
| `--osdk-tooltip-z-index`      | `var(--osdk-surface-z-index-4)`                                               | Tooltip z-index      |
| `--osdk-tooltip-padding`      | `calc(var(--osdk-surface-spacing) * 2) calc(var(--osdk-surface-spacing) * 4)` | Tooltip padding      |
| `--osdk-tooltip-bg`           | `var(--osdk-background-primary)`                                              | Tooltip background   |
| `--osdk-tooltip-border-color` | `var(--osdk-palette-gray-4)`                                                  | Tooltip border color |
| `--osdk-tooltip-shadow`       | `var(--osdk-surface-shadow-2)`                                                | Tooltip shadow       |
| `--osdk-tooltip-max-width`    | `300px`                                                                       | Tooltip max width    |

## Creating a Custom Theme

To create a custom theme, override the tokens at the appropriate level. You can either:

1. **Override OSDK tokens directly** for quick customization
2. **Override Blueprint tokens** to change the entire design system

### Example: Override OSDK Tokens

```css
@layer osdk.styles, custom.theme;

@import "@osdk/react-components/styles.css" layer(osdk.styles);

@layer custom.theme {
  :root {
    /* Change table styling */
    --osdk-table-header-bg: #f0f0f0;
    --osdk-table-row-bg-default: white;
    --osdk-table-border-color: #e0e0e0;
    
    /* Customize editable table styling */
    --osdk-table-cell-editable-border: 1px solid #3b82f6;
    --osdk-table-cell-edited-border: 2px solid #10b981;
    --osdk-table-cell-edited-border-error: 2px solid #ef4444;
    --osdk-table-cell-editable-bg: #f0f9ff;

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
@layer osdk.styles, custom.theme;

@import "@osdk/react-components/styles.css" layer(osdk.styles);

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
