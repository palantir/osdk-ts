# OSDK Components Theming

A framework-agnostic theming system for OSDK components using CSS variables, inspired by Radix Themes.

## Overview

OSDK Components use CSS variables (custom properties) for theming, allowing you to customize the appearance without modifying component code. The system is built on two layers:

1. **Global Design Tokens** - Foundation tokens for spacing, colors, typography, etc.
2. **Component Tokens** - Component-specific variables that reference global tokens

## Installation & Usage

### Basic Import

Import the styles in your application entry point:

```tsx
import "@osdk/components/styles";
```

This imports both global tokens and all component styles.

### Selective Imports

You can also import styles selectively:

```tsx
import "@osdk/components/styles/tokens"; // Global tokens only
import "@osdk/components/styles/object-table"; // ObjectTable styles only
```

## CSS Variables Reference

### Global Design Tokens

#### Spacing Scale

```css
--osdk-space-1: 0.25rem;   /* 4px */
--osdk-space-2: 0.5rem;    /* 8px */
--osdk-space-3: 0.75rem;   /* 12px */
--osdk-space-4: 1rem;      /* 16px */
--osdk-space-5: 1.5rem;    /* 24px */
--osdk-space-6: 2rem;      /* 32px */
--osdk-space-7: 3rem;      /* 48px */
--osdk-space-8: 4rem;      /* 64px */
--osdk-space-9: 6rem;      /* 96px */
```

#### Typography

```css
/* Font sizes */
--osdk-font-size-1: 0.75rem;    /* 12px */
--osdk-font-size-2: 0.875rem;   /* 14px */
--osdk-font-size-3: 1rem;       /* 16px */
--osdk-font-size-4: 1.125rem;   /* 18px */
--osdk-font-size-5: 1.25rem;    /* 20px */

/* Font weights */
--osdk-font-weight-regular: 400;
--osdk-font-weight-medium: 500;
--osdk-font-weight-semibold: 600;
--osdk-font-weight-bold: 700;

/* Line heights */
--osdk-line-height-normal: 1.5;
--osdk-line-height-tight: 1.25;
```

#### Border Radius

```css
--osdk-radius-1: 0.125rem;  /* 2px */
--osdk-radius-2: 0.25rem;   /* 4px */
--osdk-radius-3: 0.375rem;  /* 6px */
--osdk-radius-4: 0.5rem;    /* 8px */
--osdk-radius-5: 0.75rem;   /* 12px */
--osdk-radius-6: 1rem;      /* 16px */
```

#### Colors (Light Mode)

```css
/* Background & Surface */
--osdk-color-background: #ffffff;
--osdk-color-surface: #fafafa;
--osdk-color-surface-hover: #f5f5f5;

/* Borders */
--osdk-color-border: #e5e5e5;
--osdk-color-border-hover: #d4d4d4;

/* Text */
--osdk-color-text: #171717;
--osdk-color-text-secondary: #737373;
--osdk-color-text-tertiary: #a3a3a3;

/* Accent */
--osdk-color-accent: #3b82f6;
--osdk-color-accent-hover: #2563eb;
--osdk-color-accent-text: #ffffff;

/* Semantic */
--osdk-color-error: #ef4444;
--osdk-color-error-hover: #dc2626;
--osdk-color-success: #10b981;
--osdk-color-warning: #f59e0b;
--osdk-color-info: #3b82f6;
```

#### Shadows

```css
--osdk-shadow-1: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--osdk-shadow-2: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--osdk-shadow-3: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
```

### ObjectTable Component Tokens

```css
/* Layout */
--osdk-table-width: 100%;
--osdk-table-border-radius: var(--osdk-radius-3);
--osdk-table-border: 1px solid var(--osdk-color-border);

/* Cell dimensions */
--osdk-table-cell-padding-x: var(--osdk-space-3);
--osdk-table-cell-padding-y: var(--osdk-space-3);
--osdk-table-cell-min-height: 2.75rem; /* 44px */

/* Header */
--osdk-table-header-background: var(--osdk-color-surface);
--osdk-table-header-text-color: var(--osdk-color-text);
--osdk-table-header-font-size: var(--osdk-font-size-2);
--osdk-table-header-font-weight: var(--osdk-font-weight-medium);
--osdk-table-header-border-bottom: 2px solid var(--osdk-color-border);
--osdk-table-header-text-transform: none;

/* Body rows */
--osdk-table-row-background: var(--osdk-color-background);
--osdk-table-row-background-hover: var(--osdk-color-surface-hover);
--osdk-table-row-border-bottom: 1px solid var(--osdk-color-border);

/* Body cells */
--osdk-table-cell-text-color: var(--osdk-color-text);
--osdk-table-cell-font-size: var(--osdk-font-size-2);
--osdk-table-cell-line-height: var(--osdk-line-height-normal);

/* States */
--osdk-table-loading-opacity: 0.6;
--osdk-table-state-padding: var(--osdk-space-6);
--osdk-table-state-text-color: var(--osdk-color-text-secondary);
--osdk-table-error-text-color: var(--osdk-color-error);
```

## Customization Examples

### Basic Override

Override specific tokens in your application's CSS:

```css
@import "@osdk/components/styles";

:root {
  /* Change accent color */
  --osdk-color-accent: #8b5cf6;
  --osdk-color-accent-hover: #7c3aed;

  /* Increase spacing */
  --osdk-table-cell-padding-x: 1rem;
  --osdk-table-cell-padding-y: 0.875rem;
}
```

### Component-Specific Customization

Target specific components without affecting global tokens:

```css
@import "@osdk/components/styles";

.osdk-object-table-wrapper {
  /* Customize only the ObjectTable */
  --osdk-table-header-background: #f3f4f6; /* Do not use primitive here */
  --osdk-table-row-background-hover: #fef3c7;
  --osdk-table-border-radius: 0.5rem;
}
```

### Complete Custom Theme

Create a completely custom theme by overriding all tokens:

```css
@import "@osdk/components/styles";

:root {
  /* Custom color palette */
  --osdk-color-background: #fdfcfb;
  --osdk-color-surface: #f8f7f5;
  --osdk-color-border: #e8e5e0;
  --osdk-color-text: #2d2a26;
  --osdk-color-accent: #d97706;
  --osdk-color-accent-hover: #b45309;

  /* Custom spacing */
  --osdk-space-3: 1rem;
  --osdk-space-4: 1.25rem;

  /* Custom typography */
  --osdk-font-size-2: 0.9375rem;
  --osdk-font-weight-medium: 600;
}
```

### Dark Mode

Implement dark mode by overriding color tokens:

```css
@import "@osdk/components/styles";

[data-theme="dark"] {
  /* Dark mode colors */
  --osdk-color-background: #171717;
  --osdk-color-surface: #262626;
  --osdk-color-surface-hover: #404040;
  --osdk-color-border: #404040;
  --osdk-color-border-hover: #525252;
  --osdk-color-text: #fafafa;
  --osdk-color-text-secondary: #a3a3a3;
  --osdk-color-text-tertiary: #737373;
  --osdk-color-accent: #60a5fa;
  --osdk-color-accent-hover: #3b82f6;
}
```

Then apply the theme:

```tsx
<div data-theme="dark">
  <ObjectTable {...props} />
</div>;
```

### Using with CSS Modules

```css
/* styles.module.css */
@import "@osdk/components/styles";

.customTable {
  --osdk-table-header-background: #f0f9ff;
  --osdk-table-row-background-hover: #dbeafe;
}
```

```tsx
import styles from "./styles.module.css";

<div className={styles.customTable}>
  <ObjectTable {...props} />
</div>;
```

## Framework Integration

### Vite

CSS imports work out of the box:

```tsx
import "@osdk/components/styles";
```

### Next.js

Import in your `_app.tsx` or layout:

```tsx
import "@osdk/components/styles";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### Create React App

Import in your `index.tsx`:

```tsx
import "@osdk/components/styles";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

## Troubleshooting

### TypeScript Errors on CSS Imports

If you get TypeScript errors when importing CSS, ensure you have the module declarations:

```ts
// global.d.ts
declare module "@osdk/components/styles" {
  const styles: string;
  export default styles;
}
```

### Styles Not Applying

1. Ensure you've imported the styles: `import "@osdk/components/styles";`
2. Check that imports are before component usage
3. Verify your bundler supports CSS imports (Vite, Webpack 5+, etc.)

### Conflicting Styles

If you have style conflicts:

1. Import OSDK styles before your custom CSS
2. Use more specific selectors or increase specificity
3. Override CSS variables instead of writing new rules

### Build Errors

If you encounter build errors:

1. Ensure your bundler is configured to handle CSS imports
2. For older setups, you may need to add CSS loader configuration
3. Check that `src/styles` directory is accessible in your node_modules

## Browser Support

The theming system uses CSS Custom Properties (CSS Variables), which are supported in:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

For older browsers, consider using a CSS custom properties polyfill.
