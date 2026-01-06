# Blueprint Variables Export

Auto-generated from Figma on 2025-12-15

## Overview

This export contains Blueprint-compatible SCSS variable files generated from your Figma design tokens. The files follow Blueprint.js naming conventions and structure.

## Files Included

- **_colors.scss** - Color primitives (grayscale, core colors, extended colors)
- **_color-aliases.scss** - Semantic color mappings (intents, text colors, icons, backgrounds)
  - Includes `$pt-dark-*` variants if you selected a dark mode during export
- **_flex.scss** - Flex container mixins (`@mixin pt-flex-container`, `@mixin pt-flex-margin`)
- **_mixins.scss** - Intent color maps and utility mixins/functions
- **_variables.scss** - Main variables (sizing, typography, spacing, component dimensions)
  - Includes hardcoded Blueprint framework constants (spacing, shadows, z-indexes, transitions)
  - Includes `$pt-dark-*` variants if you selected a dark mode during export
- **_variables-extended.scss** - Extended variables and internal Blueprint constants
- **index.scss** - Master import file

## Dark Mode Support

If you selected a dark mode during export, your files will include `$pt-dark-*` variants:
- `$pt-dark-text-color`
- `$pt-dark-app-background-color`
- `$pt-dark-icon-color`
- etc.

If you did NOT select a dark mode, you can re-export and select one from the dropdown.

## Installation

**Option 1: Replace Blueprint's files completely**

Replace Blueprint's variable files in `@blueprintjs/core/lib/scss/common/` with these exports:
- Replace `_colors.scss`
- Replace `_color-aliases.scss`
- Replace `_mixins.scss`
- Replace `_variables.scss`
- Replace `_variables-extended.scss`

**Option 2: Import before Blueprint (override)**

Import your custom variables before Blueprint:

```scss
// Import your custom theme files
@import "path/to/your/colors";
@import "path/to/your/color-aliases";
@import "path/to/your/mixins";
@import "path/to/your/variables";

// Then import Blueprint (it will use your overrides)
@import "@blueprintjs/core/lib/scss/blueprint";
```

**Important:** If you use Option 2, Blueprint may still try to import `@blueprintjs/colors`. To fix this:
1. Make sure your `_mixins.scss` imports your local `_colors.scss` (already configured)
2. Or install `@blueprintjs/colors` package alongside your custom colors

## Usage

### In SCSS:
```scss
.my-component {
  background: $pt-app-color-background;
  color: $pt-text-color;
  padding: $pt-grid-size;
  border-radius: $pt-border-radius;
}
```

### With Intent Colors:
```scss
.my-button {
  background-color: $pt-intent-primary;

  &:hover {
    background-color: darken($pt-intent-primary, 5%);
  }
}
```

### Color Primitives:
```scss
.my-card {
  background: $white;
  border: 1px solid $gray5;
  color: $dark-gray1;
}
```

## File Structure

```
├── _colors.scss           // Color primitives ($blue1-5, $gray1-5, etc.)
├── _color-aliases.scss    // Semantic colors ($pt-intent-primary, $pt-text-color)
├── _variables.scss        // Main variables ($pt-grid-size, $pt-font-size)
├── index.scss            // Import all files
└── README.md             // This file
```

## Variable Naming

- **Color Primitives**: `$blue1`, `$gray3`, `$dark-gray1`, etc.
- **Semantic Colors**: `$pt-intent-primary`, `$pt-text-color`, `$pt-icon-danger`
- **Layout Variables**: `$pt-grid-size`, `$pt-border-radius`, `$pt-spacing`
- **Component Variables**: `$pt-button-height`, `$pt-input-height`, etc.

## Customization

All variables use `!default`, so you can override them:

```scss
// Your overrides
$pt-intent-primary: #0066cc !default;
$pt-grid-size: 12px !default;

// Then import the theme
@import "path/to/variables";
```

## Notes

- Variables are exported from the **CC mode** in Figma
- Color aliases automatically reference color primitives (e.g., `$pt-intent-primary: $blue3`)
- Computed values are exported (Figma doesn't preserve calculations like `$pt-spacing * 4`)
- Blueprint namespace is set to `bp6` (matching Blueprint v6)

---

Generated with CC Theme Exporter for Figma
