# @osdk/react-components-styles

Default Blueprint-based styling for `@osdk/react-components`.

## Overview

This package provides CSS tokens that define the default styling for OSDK React components. It follows Blueprint's design system tokens and adds component-specific OSDK tokens.

## Installation

```bash
npm install @osdk/react-components-styles
```

## Usage

Import the CSS files in your application's entry point:

```css
/* app/index.css */
@layer osdk.components, osdk.tokens;

/* Import OSDK components structural styles */
@import "@osdk/react-components/styles.css" layer(osdk.components);
/* Import OSDK tokens (includes Blueprint tokens) */
@import "@osdk/react-components-styles" layer(osdk.tokens);
```

### With Custom Theme Overrides

```css
/* app/index.css */
@layer osdk.components, osdk.tokens, user.theme;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/react-components-styles" layer(osdk.tokens);

/* Override primary intent to green */
@layer user.theme {
  :root {
    --bp-intent-primary-rest: var(--bp-palette-green-500);
    --bp-intent-primary-hover: var(--bp-palette-green-400);
    --bp-intent-primary-active: var(--bp-palette-green-600);
  }
}
```

## Understanding Token Scopes

**OSDK Tokens (`--osdk-*`):**

- All tokens used in OSDK components are prefixed with --osdk.
- Any blueprint token used in OSDK components is mapped to an --osdk-* token, e.g. `--osdk-surface-spacing: var(--bp-surface-spacing);`
- Override these to theme **OSDK components only**
- Safe to customize without affecting other Blueprint components in your app

**Blueprint Tokens (`--bp-*`):**

- Core design tokens from Blueprint
- Override these to theme **both Blueprint and OSDK components**
- Use this for consistent theming across your entire application

## API Documentation

For a complete reference of all available OSDK tokens, see [CSS_VARIABLES.md](./CSS_VARIABLES.md).

## Customization

You can customize the appearance by overriding CSS custom properties at different levels:

### Customization Strategies

1. **Override OSDK tokens** - Change OSDK component styling without affecting Blueprint components
   ```css
   @layer user.theme {
     :root {
       /* Only affects OSDK table headers */
       --osdk-table-header-bg: #f0f0f0;
       --osdk-table-border-color: #e0e0e0;

       /* Only affects OSDK components using primary intent */
       --osdk-intent-primary-rest: #2563eb;
       --osdk-intent-primary-hover: #1d4ed8;
     }
   }
   ```

2. **Override Blueprint tokens** - Change both Blueprint and OSDK components for consistent theming
   ```css
   @layer user.theme {
     :root {
       /* Affects ALL components (Blueprint + OSDK) using primary intent */
       --bp-intent-primary-rest: #2563eb;
       --bp-intent-primary-hover: #1d4ed8;
       --bp-intent-primary-active: #1e40af;

       /* Affects all spacing and borders across the design system */
       --bp-surface-spacing: 8px;
       --bp-surface-border-radius: 8px;
     }
   }
   ```

3. **Scoped overrides** - Apply custom styles to specific component instances using data attributes or classes

See [CSS_VARIABLES.md](./CSS_VARIABLES.md#creating-a-custom-theme) for detailed examples and complete token reference.

### Accessibility Note

When overriding theme tokens, you are responsible for ensuring that your custom colors meet accessibility standards, including:

- Sufficient color contrast ratios (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
- Readable text on all background colors
- Clear visual distinction between interactive states (rest, hover, active, disabled)

The default tokens are designed to meet WCAG AA standards.

## Related Packages

- `@osdk/react-components` - Functional React components (unstyled by default)

## License

Apache-2.0
