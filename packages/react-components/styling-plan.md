# CSS Variable System Plan for ObjectTable

## Overview

Create a CSS variable system using the **exact Blueprint tokenization from Figma** (provided by designer). Convert SCSS variables to CSS custom properties while preserving Blueprint's naming conventions. Users can import CSS separately and swap between light/dark modes.

## Design Principles

- **Use designer's tokens**: Follow exact naming from `/Users/zpoh/Downloads/Tokenization/`
- **SCSS to CSS conversion**: Convert `$pt-*` variables to `--pt-*` CSS custom properties
- **Dual-mode system**: Each theme defines both light and dark modes (tweakcn pattern)
- **Class-based switching**: Use `.dark` class on root element
- **Blueprint compatibility**: Maintain Blueprint naming for easy reference

## CSS Variable System Architecture

### Two-Layer System

**Layer 1: Blueprint Global Tokens** (`--pt-*`)

- Convert designer's SCSS variables (`$pt-*`) to CSS custom properties (`--pt-*`)
- ~200+ variables covering typography, spacing, colors, effects
- Used directly from `/Users/zpoh/Downloads/Tokenization/`
- Shared across all components

**Layer 2: Component-Specific Variables** (`--pt-components-*`)

- Table: `--pt-components-table-*`
- Reference Layer 1 Blueprint tokens via `var()`

### Blueprint Design Tokens (from Figma)

Source: `/Users/zpoh/Downloads/Tokenization/`

#### Core Variables (Light Mode - `:root`)

**Typography**

```css
--pt-font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif;
--pt-font-family-monospace: monospace;
--pt-font-size: 12px;
--pt-font-size-large: 14px;
--pt-font-size-small: 10px;
--pt-line-height: 1.2858099937438965;
```

**Spacing**

```css
--pt-spacing: 4px;  /* Base unit */
--pt-grid-size: 10px;
```

**Border & Effects**

```css
--pt-border-radius: 4px;
--pt-transition-duration: 100ms;
--pt-transition-ease: cubic-bezier(0.4, 1, 0.75, 0.9);
```

**Z-Index**

```css
--pt-z-index-base: 0;
--pt-z-index-content: 10;
--pt-z-index-overlay: 20;
--pt-z-index-dialog-header: 30;
```

**Text Colors**

```css
--pt-text-color: #1C2329;  /* $dark-gray1 */
--pt-text-color-muted: #6B7B87;  /* $gray1 */
--pt-text-color-disabled: rgba(95, 107, 124, 0.6);
```

**Background Colors**

```css
--pt-app-background-color: #F7F9FA;  /* $light-gray5 */
--pt-primary-background: #FFFFFF;
--pt-elevated-background: #FFFFFF;
--pt-secondary-background: #F7F9FA;
```

**Border & Dividers**

```css
--pt-divider-black: rgba(17, 20, 24, 0.15);
--pt-divider-black-muted: rgba(17, 20, 24, 0.1);
--pt-border-border: rgba(17, 20, 24, 0.15);
--pt-border-border-muted: rgba(17, 20, 24, 0.1);
```

**Intent Colors**

```css
--pt-intent-primary: #0067C7;  /* $blue3 */
--pt-intent-success: #27AE60;  /* $green3 */
--pt-intent-warning: #C87619;  /* $orange3 */
--pt-intent-danger: #D5281B;   /* $red3 */
```

**Interactive States**

```css
--pt-components-background-hover: #F7F9FA;
--pt-components-button-background-minimal-default-hovered: rgba(149, 161, 172, 0.15);
--pt-components-button-background-minimal-default-active: rgba(149, 161, 172, 0.3);
```

#### Dark Mode (`.dark`)

**Typography** (same as light)

```css
--pt-dark-font-size: 14px;
--pt-dark-font-size-large: 16px;
--pt-dark-font-size-small: 12px;
```

**Text Colors**

```css
--pt-dark-text-color: #F7F9FA;  /* $light-gray5 */
--pt-dark-text-color-muted: #AAB5BF;  /* $gray4 */
--pt-dark-text-color-disabled: rgba(171, 179, 191, 0.6);
```

**Background Colors**

```css
--pt-dark-app-background-color: #1C2329;  /* $dark-gray1 */
--pt-dark-primary-background: #1C2329;
--pt-dark-elevated-background: #3A4B59;  /* $dark-gray3 */
--pt-dark-secondary-background: #212B32;  /* $black */
```

**Border & Dividers**

```css
--pt-dark-divider-black: rgba(17, 20, 24, 0.4);
--pt-dark-divider-white: rgba(255, 255, 255, 0.2);
--pt-dark-border-border: rgba(17, 20, 24, 0.4);
--pt-dark-border-border-white: rgba(255, 255, 255, 0.2);
```

**Interactive States**

```css
--pt-dark-components-background-hover: #3A4B59;  /* $dark-gray3 */
--pt-dark-components-button-background-minimal-default-hovered: rgba(143, 153, 168, 0.15);
--pt-dark-components-button-background-minimal-default-active: rgba(143, 153, 168, 0.3);
```

### Table Component Variables

Table-specific variables that reference Blueprint tokens:

```css
/* Table structure (component-specific) */
--pt-components-table-row-height: 40px;
--pt-components-table-header-height: 40px;

/* Header styling */
--pt-components-table-header-bg: var(--pt-secondary-background);
--pt-components-table-header-text: var(--pt-text-color);
--pt-components-table-header-border: var(--pt-divider-black);

/* Row styling - primary (default) */
--pt-components-table-row-bg-primary: var(--pt-primary-background);
--pt-components-table-row-text: var(--pt-text-color);
--pt-components-table-row-border: var(--pt-divider-black-muted);

/* Row styling - alternating (for striped tables) */
--pt-components-table-row-bg-secondary: var(--pt-secondary-background);

/* Row interactive states */
--pt-components-table-row-hover-bg: var(--pt-components-background-hover);
--pt-components-table-row-selected-bg: rgba(45, 114, 210, 0.1);  /* Blueprint blue */

/* Cell styling */
--pt-components-table-cell-padding-x: calc(var(--pt-spacing) * 3);  /* 12px */
--pt-components-table-cell-padding-y: calc(var(--pt-spacing) * 2);  /* 8px */
```

**Usage in table.css**:

```css
/* Default: all rows use primary background */
.osdk-table-row {
  background-color: var(--pt-components-table-row-bg-primary);
}

/* Alternating rows: add .osdk-table-striped to container */
.osdk-table-striped .osdk-table-row:nth-child(even) {
  background-color: var(--pt-components-table-row-bg-secondary);
}
```

**Note**: This is a subset of ~200+ Blueprint variables. The full list will be in `tokens.css`.

## File Structure

```
packages/react-components/
├── src/
│   ├── object-table/
│   │   ├── ObjectTable.tsx          [MODIFY] Add className props
│   │   ├── Table.tsx                [MODIFY] Apply CSS classes
│   │   ├── TableHeader.tsx          [MODIFY] Apply CSS classes
│   │   ├── TableBody.tsx            [MODIFY] Apply CSS classes, use CSS variable for height
│   │   ├── TableRow.tsx             [MODIFY] Apply CSS classes
│   │   └── ObjectTableApi.ts        [MODIFY] Add className prop types
│   └── styles/
│       ├── tokens.css               [CREATE] Layer 1: Global design token declarations
│       ├── components/
│       │   └── table.css            [CREATE] Layer 2: Table component styles
│       ├── themes/
│       │   └── blueprint.css        [CREATE] Blueprint theme (light + dark modes)
│       └── index.css                [CREATE] Barrel file (tokens + blueprint theme)
```

## Implementation Steps

### 1. Convert Blueprint SCSS to CSS Variables (`src/styles/tokens.css`)

- Parse `/Users/zpoh/Downloads/Tokenization/_variables.scss` and `_color-aliases.scss`
- Convert SCSS variables to CSS custom properties:
  - `$pt-font-size` → `--pt-font-size`
  - `$pt-text-color` → `--pt-text-color`
  - `$pt-dark-text-color` → `--pt-dark-text-color`
- Keep Blueprint's organization: typography, spacing, colors, components, etc.
- Include ~200+ variables from designer's export
- **Structure**: Declare variables with NO VALUES (values come from theme file)

### 2. Create Blueprint Theme File (`themes/blueprint.css`)

**IMPORTANT**: Following tweakcn's pattern (Option 1), we use the SAME CSS variable names in both modes, but with different values.

**SCSS → CSS Mapping Logic**:

```scss
// SCSS Source (from designer)
$pt-text-color: $dark-gray1 !default;          // #1C2329
$pt-dark-text-color: $light-gray5 !default;    // #F7F9FA
```

```css
/* CSS Output - Same variable name, different values */
:root {
  --pt-text-color: #1C2329;  /* from $pt-text-color */
}

.dark {
  --pt-text-color: #F7F9FA;  /* from $pt-dark-text-color (strip -dark- prefix!) */
}
```

**Conversion Rules**:

1. **For `:root`**: Use `$pt-*` values → `--pt-*` variable names
2. **For `.dark`**: Use `$pt-dark-*` values → `--pt-*` variable names (strip `-dark-` from name)
3. **If no `$pt-dark-*` exists**: Copy the `$pt-*` value (e.g., intents, spacing stay same)

**Structure**:

```css
/* Light mode (default) - ~200+ variables */
:root {
  /* Typography - from $pt-* */
  --pt-font-size: 12px;
  --pt-spacing: 4px;
  --pt-border-radius: 4px;

  /* Colors - from $pt-* */
  --pt-text-color: #1C2329;                    /* from $pt-text-color */
  --pt-app-background-color: #F7F9FA;          /* from $pt-app-background-color */
  --pt-divider-black: rgba(17, 20, 24, 0.15);  /* from $pt-divider-black */

  /* Intents - from $pt-intent-* (no dark variant) */
  --pt-intent-primary: #0067C7;
  /* ... ~200 more variables ... */
}

/* Dark mode - ~200+ variables with SAME names */
.dark {
  /* Typography - from $pt-dark-* (strip -dark-) */
  --pt-font-size: 14px;              /* from $pt-dark-font-size */
  --pt-spacing: 4px;                 /* from $pt-dark-spacing (same value) */
  --pt-border-radius: 2;             /* from $pt-dark-border-radius */

  /* Colors - from $pt-dark-* (strip -dark-) */
  --pt-text-color: #F7F9FA;                    /* from $pt-dark-text-color */
  --pt-app-background-color: #1C2329;          /* from $pt-dark-app-background-color */
  --pt-divider-black: rgba(17, 20, 24, 0.4);   /* from $pt-dark-divider-black */

  /* Intents - copy from light (no $pt-dark-intent-* in SCSS) */
  --pt-intent-primary: #0067C7;      /* Same as light */
  /* ... ~200 more variables ... */
}
```

**Key Benefits**:

- Components only reference `var(--pt-text-color)` - automatically light or dark
- No conditional logic needed in component CSS
- Clean, simple component code

### 3. Create Component-Specific Styles (`src/styles/components/table.css`)

**Define component variables** that reference Blueprint tokens:

```css
.osdk-table-container {
  /* Table-specific dimensions */
  --pt-components-table-row-height: 40px;
  --pt-components-table-header-height: 40px;

  /* Header styling */
  --pt-components-table-header-bg: var(--pt-secondary-background);
  --pt-components-table-header-text: var(--pt-text-color);
  --pt-components-table-header-border: var(--pt-divider-black);

  /* Row styling */
  --pt-components-table-row-bg-primary: var(--pt-primary-background);
  --pt-components-table-row-bg-secondary: var(--pt-secondary-background);
  --pt-components-table-row-text: var(--pt-text-color);
  --pt-components-table-row-border: var(--pt-divider-black-muted);
  --pt-components-table-row-hover-bg: var(--pt-components-background-hover);
  --pt-components-table-row-selected-bg: rgba(45, 114, 210, 0.1);

  /* Cell styling */
  --pt-components-table-cell-padding-x: calc(var(--pt-spacing) * 3);
  --pt-components-table-cell-padding-y: calc(var(--pt-spacing) * 2);
}
```

**Apply structural styles** using component variables:

```css
/* Container */
.osdk-table-container {
  position: relative;
  height: 100%;
  overflow: auto;
}

/* Table */
.osdk-table {
  display: grid;
}

/* Header */
.osdk-table-header {
  display: grid;
  position: sticky;
  top: 0;
  z-index: var(--pt-z-index-content);
  background-color: var(--pt-components-table-header-bg);
  color: var(--pt-components-table-header-text);
  border-bottom: 1px solid var(--pt-components-table-header-border);
}

/* Rows - default all use primary background */
.osdk-table-row {
  display: flex;
  background-color: var(--pt-components-table-row-bg-primary);
  color: var(--pt-components-table-row-text);
  border-bottom: 1px solid var(--pt-components-table-row-border);
}

.osdk-table-row:hover {
  background-color: var(--pt-components-table-row-hover-bg);
}

/* Alternating row backgrounds */
.osdk-table-striped .osdk-table-row:nth-child(even) {
  background-color: var(--pt-components-table-row-bg-secondary);
}

/* Cells */
.osdk-table-cell {
  display: flex;
  align-items: center;
  padding: var(--pt-components-table-cell-padding-y) var(--pt-components-table-cell-padding-x);
}
```

### 4. Update Component TypeScript Interface _(FUTURE - NOT IMPLEMENTING NOW)_

**NOTE**: These TypeScript interface changes are documented for future implementation but will NOT be done in this initial CSS variable system implementation.

Add `classNames` and `striped` props to `ObjectTableApi.ts`:

```typescript
export interface ObjectTableProps<T> {
  // ... existing props

  /** Enable alternating row background colors */
  striped?: boolean;

  /** Custom class names for table elements */
  classNames?: {
    container?: string;
    table?: string;
    header?: string;
    headerRow?: string;
    headerCell?: string;
    body?: string;
    row?: string;
    cell?: string;
  };
}
```

### 5. Apply CSS Classes to React Components _(FUTURE - NOT IMPLEMENTING NOW)_

**NOTE**: These React component changes are documented for future implementation but will NOT be done in this initial CSS variable system implementation.

**Table.tsx**:

- Add `.osdk-table-container` to wrapper div
- Conditionally add `.osdk-table-striped` if `striped` prop is true
- Add `.osdk-table` to table element
- Merge user `classNames.container` and `classNames.table`
  ```typescript
  const containerClass = [
    "osdk-table-container",
    striped && "osdk-table-striped",
    classNames?.container,
  ].filter(Boolean).join(" ");
  ```

**TableHeader.tsx**:

- Add `.osdk-table-header` to thead
- Add `.osdk-table-header-row` to tr
- Add `.osdk-table-header-cell` to th
- Merge user `classNames`

**TableBody.tsx**:

- Add `.osdk-table-body` to tbody
- Read `--pt-components-table-row-height` from CSS:
  ```typescript
  const rowHeight = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--pt-components-table-row-height"),
  ) || 40;
  ```

**TableRow.tsx**:

- Add `.osdk-table-row` to tr
- Add `.osdk-table-cell` to td
- Support hover states via CSS class

### 6. Create Index File (`src/styles/index.css`)

```css
/* Import global tokens (declarations only) */
@import './tokens.css';

/* Import component styles */
@import './components/table.css';

/* Import default Blueprint theme (includes light + dark) */
@import './themes/blueprint.css';
```

### 7. Create Theme Generator CLI (`bin/osdk-generate-theme.js` + `scripts/theme-generator.js`)

**CLI Entry Point** (`bin/osdk-generate-theme.js`):

```javascript
#!/usr/bin/env node
const { generateTheme } = require("../scripts/theme-generator");
const fs = require("fs");
const path = require("path");

// Parse CLI arguments
const args = process.argv.slice(2);
let tokenizationPath, outputPath;

if (args.includes("--output")) {
  const outputIndex = args.indexOf("--output");
  outputPath = args[outputIndex + 1];
  tokenizationPath = args[0];
} else {
  tokenizationPath = args[0];
}

if (!tokenizationPath) {
  console.error(
    "Usage: npx osdk-generate-theme <tokenization-folder> [--output <output-file>]",
  );
  process.exit(1);
}

// Generate theme
try {
  const css = generateTheme(tokenizationPath);

  if (outputPath) {
    fs.writeFileSync(outputPath, css);
    console.log(`✓ Theme generated successfully: ${outputPath}`);
  } else {
    console.log(css);
  }
} catch (error) {
  console.error("Error generating theme:", error.message);
  process.exit(1);
}
```

**Core Logic** (`scripts/theme-generator.js`):

```javascript
const fs = require("fs");
const path = require("path");

/**
 * Parse SCSS file and extract variables
 * @param {string} scss - SCSS content
 * @param {RegExp} pattern - Variable pattern to match
 * @returns {Map<string, string>} Map of variable names to values
 */
function extractVariables(scss, pattern) {
  const variables = new Map();
  let match;

  while ((match = pattern.exec(scss)) !== null) {
    const [, name, value] = match;
    variables.set(name, value.trim());
  }

  return variables;
}

/**
 * Resolve SCSS variable references
 * @param {string} value - Variable value (may contain $references)
 * @param {Map} allVars - All available variables
 * @returns {string} Resolved value
 */
function resolveReferences(value, allVars) {
  // Match $variable-name patterns
  const refPattern = /\$([a-zA-Z0-9-]+)/g;
  let resolved = value;

  let match;
  while ((match = refPattern.exec(value)) !== null) {
    const refName = match[1];
    if (allVars.has(refName)) {
      resolved = resolved.replace(match[0], allVars.get(refName));
    }
  }

  return resolved;
}

/**
 * Generate CSS theme from SCSS tokenization folder
 * @param {string} tokenizationPath - Path to tokenization folder
 * @returns {string} Generated CSS
 */
function generateTheme(tokenizationPath) {
  // Read SCSS files
  const variablesPath = path.join(tokenizationPath, "_variables.scss");
  const aliasesPath = path.join(tokenizationPath, "_color-aliases.scss");
  const colorsPath = path.join(tokenizationPath, "_colors.scss");

  if (!fs.existsSync(variablesPath)) {
    throw new Error(`_variables.scss not found in ${tokenizationPath}`);
  }

  let scss = "";
  if (fs.existsSync(colorsPath)) {
    scss += fs.readFileSync(colorsPath, "utf-8") + "\n";
  }
  if (fs.existsSync(aliasesPath)) {
    scss += fs.readFileSync(aliasesPath, "utf-8") + "\n";
  }
  scss += fs.readFileSync(variablesPath, "utf-8");

  // Extract all color primitives first (for reference resolution)
  const colorPrimitives = extractVariables(
    scss,
    /\$([a-z0-9-]+):\s*#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\s*!default;/g,
  );
  const colorPrimitivesRgba = extractVariables(
    scss,
    /\$([a-z0-9-]+):\s*(rgba?\([^)]+\))\s*!default;/g,
  );
  const allColors = new Map([...colorPrimitives, ...colorPrimitivesRgba]);

  // Extract light mode variables ($pt-*)
  const lightVars = extractVariables(
    scss,
    /\$pt-([^:]+):\s*(.+?)\s*!default;/g,
  );

  // Extract dark mode variables ($pt-dark-*)
  const darkVarsRaw = extractVariables(
    scss,
    /\$pt-dark-([^:]+):\s*(.+?)\s*!default;/g,
  );

  // Combine all variables for reference resolution
  const allVars = new Map([...allColors, ...lightVars, ...darkVarsRaw]);

  // Resolve references and generate CSS
  const timestamp = new Date().toISOString();
  let css =
    `/**\n * Custom Theme\n * Generated from: ${tokenizationPath}\n * Generated at: ${timestamp}\n */\n\n`;

  // Light mode (:root)
  css += "/* Light Mode */\n:root {\n";
  for (const [name, value] of lightVars) {
    const resolved = resolveReferences(value, allVars);
    css += `  --pt-${name}: ${resolved};\n`;
  }
  css += "}\n\n";

  // Dark mode (.dark)
  css += "/* Dark Mode */\n.dark {\n";
  for (const [name, value] of lightVars) {
    // Check if dark variant exists
    if (darkVarsRaw.has(name)) {
      const resolved = resolveReferences(darkVarsRaw.get(name), allVars);
      css += `  --pt-${name}: ${resolved};\n`;
    } else {
      // No dark variant, use light value
      const resolved = resolveReferences(value, allVars);
      css += `  --pt-${name}: ${resolved};\n`;
    }
  }
  css += "}\n";

  return css;
}

module.exports = { generateTheme };
```

**Key Features:**

- Auto-detect SCSS files in tokenization folder
- Parse `$pt-*` and `$pt-dark-*` variables
- Resolve SCSS variable references (e.g., `$pt-text-color: $dark-gray1`)
- Generate complete CSS with `:root` and `.dark` selectors
- Add helpful header comments with generation timestamp

### 8. Update Package Exports

Modify `package.json`:

```json
{
  "bin": {
    "osdk-generate-theme": "./bin/osdk-generate-theme.js"
  },
  "exports": {
    "./styles": "./src/styles/index.css",
    "./styles/tokens": "./src/styles/tokens.css",
    "./styles/components/table": "./src/styles/components/table.css",
    "./styles/themes/blueprint": "./src/styles/themes/blueprint.css"
  }
}
```

### 9. Documentation

Add to README:

````markdown
## Styling & Theming

### Using Default Blueprint Theme

```tsx
import { ObjectTable } from "@osdk/react-components";
import "@osdk/react-components/styles";

function App() {
  return <ObjectTable data={data} columns={columns} />;
}

// Dark mode - toggle .dark class
document.documentElement.classList.toggle("dark");
```
````

### Creating Custom Themes

#### Option 1: CLI Generator (Recommended)

If your designer provides Blueprint-compatible tokenization (SCSS files with `$pt-*` variables):

```bash
# Generate theme from designer's tokenization folder
npx osdk-generate-theme ./design-tokens/ --output ./src/my-theme.css
```

Then import the generated theme:

```tsx
import "@osdk/react-components/styles/tokens";
import "@osdk/react-components/styles/components/table";
import "./my-theme.css"; // Your generated theme

function App() {
  return <ObjectTable data={data} columns={columns} />;
}
```

#### Option 2: Manual Theme Creation

Create a theme file that defines ALL CSS variables for both light and dark modes:

```css
/* my-custom-theme.css */
:root {
  --pt-font-size: 14px;
  --pt-text-color: #000000;
  --pt-app-background-color: #FFFFFF;
  /* ... define ALL ~200+ variables ... */
}

.dark {
  --pt-font-size: 14px;
  --pt-text-color: #E0E0E0;
  --pt-app-background-color: #121212;
  /* ... define ALL ~200+ variables ... */
}
```

**Requirements:**

- Must define complete set of all variables (~200+)
- Both `:root` and `.dark` must be complete
- No partial overrides to avoid specificity issues

### Dark Mode Switching

```tsx
// Programmatic toggle
document.documentElement.classList.toggle("dark");

// React state-based
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Dark Mode
      </button>
      <ObjectTable data={data} columns={columns} />
    </div>
  );
}
```

### Available CSS Imports

```tsx
// Full package (tokens + blueprint theme + all components)
import "@osdk/react-components/styles";

// Tokens only (declarations, no values)
import "@osdk/react-components/styles/tokens";

// Specific component styles
import "@osdk/react-components/styles/components/table";

// Blueprint theme only
import "@osdk/react-components/styles/themes/blueprint";
```

````
## Key Technical Decisions

1. **Two-Layer Architecture**:
   - **Layer 1**: Blueprint global tokens (`--pt-*`) from designer's Figma export
   - **Layer 2**: Component tokens (`--pt-components-table-*`) specific to table
   - Component tokens reference Layer 1 via `var()`
   - Future components: `--pt-components-button-*`, `--pt-components-modal-*`

2. **CSS Variable for Row Height**:
   Replace hardcoded `ROW_HEIGHT = 40` in TableBody.tsx:
   ```typescript
   const rowHeight = parseInt(
     getComputedStyle(document.documentElement)
       .getPropertyValue('--pt-components-table-row-height')
   ) || 40;
````

3. **Class Name Merging**:
   Merge default and user-provided classes:
   ```typescript
   const rowClass = [
     "osdk-table-row",
     classNames?.row,
   ].filter(Boolean).join(" ");
   ```

4. **SCSS to CSS Conversion (Option 1 - tweakcn pattern)**:
   Strip `-dark-` from variable names for `.dark` selector:
   ```scss
   // SCSS Input (from designer)
   $pt-text-color: $dark-gray1 !default;          // #1C2329
   $pt-dark-text-color: $light-gray5 !default;    // #F7F9FA
   ```
   ```css
   /* CSS Output - Same variable name */
   :root {
     --pt-text-color: #1C2329;  /* value from $pt-text-color */
   }
   .dark {
     --pt-text-color: #F7F9FA;  /* value from $pt-dark-text-color, name strips -dark- */
   }
   ```
   **Component Usage** (no conditional logic needed):
   ```css
   .osdk-table-row {
     color: var(--pt-text-color);  /* Automatically light or dark! */
   }
   ```

5. **Theme Switching** (tweakcn approach):
   - User toggles `.dark` class on root element (`<html>` or `document.documentElement`)
   - Standard convention used by Tailwind, shadcn/ui, and tweakcn
   - Can optionally support `prefers-color-scheme` media query in future
   - Example: `document.documentElement.classList.toggle('dark')`

6. **Preserve Layout**:
   - Keep existing grid/flex display logic
   - Only add classes and CSS variables for themeable properties
   - Don't change virtualization logic

7. **Semantic Token Names**:
   - Use semantic names (`--osdk-text-primary`) not literal (`--osdk-gray-1`)
   - Allows themes to map different colors to same semantic meaning

## Testing Strategy

1. **Visual Tests**: Verify Blueprint light/dark themes match Blueprint Table component
2. **Custom Theme Test**: Apply minimal theme and override variables
3. **Dynamic Theme Switching**: Toggle `data-theme` attribute at runtime
4. **SSR Compatibility**: Ensure CSS variables work with server-side rendering

## Future Enhancements (Out of Scope for Initial Implementation)

- Additional theme presets (compact, comfortable, etc.)
- Blueprint intent colors (success, warning, danger rows)
- Sorting/filtering indicator styles
- Loading skeleton styles
- Empty state styling
- Responsive table styles

## Files to Create/Modify

**Create:**

- `src/styles/tokens.css` (250 lines) - All Blueprint variable declarations from Figma export (no values)
- `src/styles/components/table.css` (150 lines) - Table component styles
- `src/styles/themes/blueprint.css` (500 lines) - Complete Blueprint theme: `:root` (light ~250 vars) + `.dark` (dark ~250 vars)
- `src/styles/index.css` (10 lines) - Barrel file (imports tokens + blueprint theme)
- `bin/osdk-generate-theme.js` (50 lines) - CLI entry point
- `scripts/theme-generator.js` (300 lines) - SCSS → CSS conversion logic

**Modify:**

- `package.json` - Add CSS exports under "exports", add "bin" field for CLI

**Future Modifications** (not in initial implementation):

- `src/object-table/ObjectTableApi.ts` - Add `classNames` and `striped` props
- `src/object-table/Table.tsx` - Apply container/table classes, handle striped prop
- `src/object-table/TableHeader.tsx` - Apply header classes
- `src/object-table/TableBody.tsx` - Apply body class, read CSS variable for row height
- `src/object-table/TableRow.tsx` - Apply row/cell classes

**Document:**

- `README.md` - Add "Styling & Theming" section with examples

## Custom Theme Creation Workflow (Simplified)

Users who have their own designer-provided tokenization files (similar structure to the Blueprint Tokenization folder at `src/Tokenization/`) can create custom themes with the same variable names but different values.

### Design Philosophy: Designer Tokens First

The starting point is ALWAYS the designer's exported SCSS files. To simplify the user experience:

1. Provide a **theme generator CLI tool** shipped with `@osdk/react-components`
2. Users point the CLI at their designer's tokenization folder
3. CLI automatically converts SCSS → CSS with proper structure
4. Users import the generated theme file

### Prerequisites

- Designer provides SCSS files similar to Blueprint structure:
  - `_variables.scss` - Main variables with `$pt-*` and `$pt-dark-*` prefixes
  - `_color-aliases.scss` - Semantic color mappings
  - `_colors.scss` - Color primitives
- Variables use the same Blueprint naming convention (`$pt-*` and `$pt-dark-*`)
- Values differ from Blueprint (custom brand colors, spacing, typography)

### Simplified Workflow (Recommended)

**Step 1: Use Theme Generator CLI**

Ship a theme generator CLI with `@osdk/react-components`:

```bash
# Install (already included with @osdk/react-components)
npm install @osdk/react-components

# Generate theme from designer's tokenization folder
npx osdk-generate-theme ./path/to/tokenization/ --output ./src/custom-theme.css

# Or interactively
npx osdk-generate-theme
? Path to tokenization folder: ./design-tokens/
? Output file path: ./src/my-brand-theme.css
✓ Theme generated successfully!
```

**Step 2: Import Generated Theme**

```tsx
// Import library structure (no theme)
import "@osdk/react-components/styles/tokens";
import "@osdk/react-components/styles/components/table";

// Import your generated theme
import "./custom-theme.css";

// Use components - automatically styled
import { ObjectTable } from "@osdk/react-components";
```

**Step 3: Toggle Dark Mode**

```typescript
// Same as Blueprint theme
document.documentElement.classList.toggle("dark");
```

### CLI Tool Implementation Details

**Package Structure:**

```
packages/react-components/
├── bin/
│   └── osdk-generate-theme.js       [CREATE] CLI entry point
├── scripts/
│   └── theme-generator.js           [CREATE] Core conversion logic
└── package.json                     [MODIFY] Add bin field
```

**CLI Features:**

1. **Auto-detect files**: Scan tokenization folder for `_variables.scss`, `_color-aliases.scss`, `_colors.scss`
2. **Parse SCSS**: Extract `$pt-*` and `$pt-dark-*` variables with values
3. **Resolve references**: Follow SCSS variable references (e.g., `$pt-text-color: $dark-gray1`)
4. **Generate CSS**: Create theme file with `:root` and `.dark` selectors using Option 1 pattern
5. **Validation**: Warn if required variables are missing
6. **Comments**: Preserve structure comments from SCSS

**CLI Output:**

```css
/**
 * Custom Theme
 * Generated from: ./design-tokens/
 * Generated at: 2025-01-06T10:30:00Z
 */

/* Light Mode */
:root {
  /* Typography */
  --pt-font-family: -apple-system, "BlinkMacSystemFont", ...;
  --pt-font-size: 12px;

  /* Colors */
  --pt-text-color: #000000;
  --pt-app-background-color: #FAFAFA;

  /* ... all ~200+ variables ... */
}

/* Dark Mode */
.dark {
  /* Typography */
  --pt-font-family: -apple-system, "BlinkMacSystemFont", ...;
  --pt-font-size: 14px;

  /* Colors */
  --pt-text-color: #E0E0E0;
  --pt-app-background-color: #121212;

  /* ... all ~200+ variables ... */
}
```

### Manual Workflow (Advanced Users)

For users who prefer manual control or have custom build processes:

**Conversion Rules:**

1. **For `:root` (light mode)**: Parse `$pt-*` variables → convert to `--pt-*` CSS custom properties with their values
2. **For `.dark` (dark mode)**: Parse `$pt-dark-*` variables → convert to `--pt-*` CSS custom properties (strip `-dark-` from name) with their values
3. **If no `$pt-dark-*` exists for a variable**: Copy the `$pt-*` value to both `:root` and `.dark`

**Example Conversion:**

```scss
// Designer's SCSS (_variables.scss)
$pt-text-color: #000000 !default;              // Custom black
$pt-dark-text-color: #E0E0E0 !default;         // Custom light gray
$pt-app-background-color: #FAFAFA !default;    // Custom off-white
$pt-dark-app-background-color: #121212 !default; // Custom dark
$pt-spacing: 8px !default;                     // Custom spacing (no dark variant)
```

```css
/* Generated CSS (my-custom-theme.css) */
:root {
  /* Typography */
  --pt-text-color: #000000;              /* from $pt-text-color */

  /* Background */
  --pt-app-background-color: #FAFAFA;    /* from $pt-app-background-color */

  /* Spacing */
  --pt-spacing: 8px;                     /* from $pt-spacing */

  /* ... all ~200+ variables ... */
}

.dark {
  /* Typography */
  --pt-text-color: #E0E0E0;              /* from $pt-dark-text-color (stripped -dark-) */

  /* Background */
  --pt-app-background-color: #121212;    /* from $pt-dark-app-background-color (stripped -dark-) */

  /* Spacing - no dark variant, copy from light */
  --pt-spacing: 8px;                     /* same as light */

  /* ... all ~200+ variables ... */
}
```

**Theme Structure Requirements:**

- **`:root` selector** - ALL ~200+ variables for light mode
- **`.dark` selector** - ALL ~200+ variables for dark mode (same names, different values)
- Complete definitions required (no partial overrides)

### Summary

**Recommended Approach (CLI):**

1. Run `npx osdk-generate-theme ./tokenization/ --output ./my-theme.css`
2. Import library structure: `@osdk/react-components/styles/tokens` and `styles/components/table`
3. Import generated theme: `./my-theme.css`
4. Toggle dark mode: `document.documentElement.classList.toggle('dark')`

**Manual Approach (Advanced):**

1. Convert SCSS (`$pt-*` and `$pt-dark-*`) to CSS (`--pt-*` in `:root` and `.dark`)
2. Strip `-dark-` from variable names in `.dark` selector
3. Create complete theme file with ALL variables in both selectors
4. Import library's `tokens.css` and `components/table.css` without theme
5. Import custom theme file
6. Use `.dark` class for mode switching

**Result:** ObjectTable and future components automatically use custom brand styling with light/dark mode support.

### Benefits of CLI Approach

1. **Zero Configuration**: Users don't need to understand SCSS → CSS conversion rules
2. **Designer-First**: Natural workflow starting from designer's export
3. **Validation**: CLI validates required variables and warns about issues
4. **Consistency**: Ensures proper Option 1 pattern implementation
5. **Documentation**: Generated files include helpful comments
6. **Future-Proof**: CLI can be updated to support new variables without user changes
