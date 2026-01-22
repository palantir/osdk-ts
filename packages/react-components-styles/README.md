# @osdk/react-components-styles

Default Blueprint-based styling for `@osdk/react-components`.

## Overview

This package provides CSS tokens that define the default styling for OSDK React components. It follows Blueprint's design system tokens and adds component-specific OSDK tokens.

## Installation

```bash
npm install @osdk/react-components-styles
```

## Usage

Import the CSS tokens in your application's entry point:

```css
/* app/index.css */
@layer osdk.tokens;

/* Import default OSDK tokens (includes Blueprint tokens) */
@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);
```

### With Custom Theme Overrides

```css
/* app/index.css */
@layer osdk.tokens, user.theme;

@import "@osdk/react-components-styles/index.css" layer(osdk.tokens);

/* Override primary intent to green */
@layer user.theme {
  :root {
    --bp-intent-primary-rest: var(--bp-palette-green-500);
    --bp-intent-primary-hover: var(--bp-palette-green-400);
    --bp-intent-primary-active: var(--bp-palette-green-600);
  }
}
```

## Token Levels

### Level 1: Blueprint Core Tokens
Core design tokens from Blueprint (e.g., `--bp-palette-blue-500`, `--bp-intent-primary-rest`)

### Level 2: OSDK Component Tokens
Component-specific tokens that reference Level 1 tokens (e.g., `--osdk-table-header-bg`)

## Customization

You can customize the appearance by:
1. **Overriding Level 1 tokens** - Change core colors, spacing, typography
2. **Overriding Level 2 tokens** - Change component-specific styling
3. **Overriding tokens at component level** - Apply custom styles to specific component instances

## Related Packages

- `@osdk/react-components` - Functional React components (unstyled by default)

## License

Apache-2.0
