# Filter List Styling Token Integration Plan

## Overview

Apply styling tokens to the filter list components following the pattern from `module-css` (PR #2375). This ensures the filter list uses the OSDK token system for consistent, themeable styling.

**Branch to merge first:** `origin/module-css`

---

## Token Architecture (from PR #2375)

### Three Layers:

1. **Blueprint Level 1 Tokens** (`blueprint-tokens.css`)
   - Auto-generated palette colors, typography, surface, iconography, emphasis
   - Location: `react-components-styles/src/blueprint-tokens.css`

2. **OSDK Level 2 Tokens** (`index.css`)
   - Component-specific tokens that reference Level 1 tokens
   - Location: `react-components-styles/src/index.css`
   - Example: `--osdk-table-header-bg: var(--bp-palette-gray-100);`

3. **App-Level Theme Overrides** (e2e sandbox)
   - CSS layer setup for proper cascade
   - Theme overrides for palette customization
   - Component instance overrides via CSS modules + `className` prop
   - Location: `e2e.sandbox.peopleapp/src/index.css`, `theme-overrides.css`

### CSS Layer Pattern (from e2e.sandbox.peopleapp/src/index.css):
```css
@layer osdk.tokens, custom.theme;

@import "@osdk/react-components-styles" layer(osdk.tokens);
@import "./theme-overrides.css" layer(custom.theme);

@import 'tailwindcss';
```

### Component Instance Override Pattern (from OfficeTable.module.css):
```css
.officeTable {
  --osdk-table-header-bg: var(--bp-palette-blue-100);
}
```

Usage in TSX:
```tsx
<ObjectTable className={styles.officeTable} ... />
```

---

## Implementation Steps

### Step 1: Merge `module-css`
```bash
git fetch origin module-css
git merge origin/module-css --no-gpg-sign
```

### Step 2: Add Filter Tokens to `react-components-styles/src/index.css`

Add after existing table tokens in the `:root` block:
```css
/* Filter List */
--osdk-filter-list-bg: var(--bp-surface-colorRest-default);
--osdk-filter-list-border: var(--bp-surface-borderWidth) solid var(--bp-surface-borderColor-default);
--osdk-filter-list-border-radius: var(--bp-surface-borderRadius);
--osdk-filter-list-padding: calc(var(--bp-surface-spacing) * 3);
--osdk-filter-list-gap: calc(var(--bp-surface-spacing) * 3);

/* Filter List Header */
--osdk-filter-header-color: var(--bp-typography-colorRest-default);
--osdk-filter-header-font-size: var(--bp-typography-size-bodyLarge);
--osdk-filter-header-font-weight: var(--bp-typography-weight-bold);
--osdk-filter-header-padding-bottom: calc(var(--bp-surface-spacing) * 2);
--osdk-filter-header-border-bottom: var(--bp-surface-borderWidth) solid var(--bp-surface-borderColor-default);

/* Filter List Item */
--osdk-filter-item-gap: calc(var(--bp-surface-spacing) * 2);
--osdk-filter-item-label-color: var(--bp-typography-colorRest-default);
--osdk-filter-item-label-font-size: var(--bp-typography-size-bodyMedium);
--osdk-filter-item-label-font-weight: var(--bp-typography-weight-bold);

/* Filter Text Input */
--osdk-filter-input-bg: var(--bp-surface-colorRest-default);
--osdk-filter-input-border: var(--bp-surface-borderWidth) solid var(--bp-surface-borderColor-default);
--osdk-filter-input-border-radius: var(--bp-surface-borderRadius);
--osdk-filter-input-color: var(--bp-typography-colorRest-default);
--osdk-filter-input-placeholder-color: var(--bp-typography-colorDisabled-default);
--osdk-filter-input-focus-border: var(--bp-emphasis-focusColor);
--osdk-filter-input-icon-color: var(--bp-iconography-colorRest-default);
```

### Step 3: Create CSS Modules in react-components

**`src/filter-list/base/FilterList.module.css`:**
```css
.filterList {
  display: flex;
  flex-direction: column;
  background: var(--osdk-filter-list-bg);
  border: var(--osdk-filter-list-border);
  border-radius: var(--osdk-filter-list-border-radius);
  padding: var(--osdk-filter-list-padding);
  gap: var(--osdk-filter-list-gap);
}
```

**`src/filter-list/base/FilterListHeader.module.css`:**
```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--osdk-filter-header-padding-bottom);
  border-bottom: var(--osdk-filter-header-border-bottom);
}

.titleContainer {
  display: flex;
  align-items: center;
  gap: calc(var(--bp-surface-spacing) * 2);
}

.title {
  font-family: var(--bp-typography-family-default);
  font-size: var(--osdk-filter-header-font-size);
  font-weight: var(--osdk-filter-header-font-weight);
  color: var(--osdk-filter-header-color);
  margin: 0;
}

.titleIcon {
  color: var(--bp-iconography-colorRest-default);
}

.actions {
  display: flex;
  align-items: center;
  gap: calc(var(--bp-surface-spacing) * 2);
}

.activeCount {
  font-family: var(--bp-typography-family-default);
  font-size: var(--bp-typography-size-bodySmall);
  color: var(--bp-typography-colorRest-default);
}
```

**`src/filter-list/base/FilterListItem.module.css`:**
```css
.filterItem {
  display: flex;
  flex-direction: column;
  gap: var(--osdk-filter-item-gap);
}

.itemHeader {
  display: flex;
  align-items: center;
}

.itemLabel {
  font-family: var(--bp-typography-family-default);
  font-size: var(--osdk-filter-item-label-font-size);
  font-weight: var(--osdk-filter-item-label-font-weight);
  color: var(--osdk-filter-item-label-color);
}
```

**`src/filter-list/base/inputs/ContainsTextInput.module.css`:**
```css
.textInput {
  position: relative;
}

.inputGroup {
  display: flex;
  align-items: center;
  background: var(--osdk-filter-input-bg);
  border: var(--osdk-filter-input-border);
  border-radius: var(--osdk-filter-input-border-radius);
  padding: calc(var(--bp-surface-spacing) * 1.5) calc(var(--bp-surface-spacing) * 2);
  gap: calc(var(--bp-surface-spacing) * 2);
  transition: border-color var(--bp-emphasis-transitionDuration) var(--bp-emphasis-ease-default);

  &:focus-within {
    border-color: var(--osdk-filter-input-focus-border);
    outline: var(--bp-emphasis-focusWidth) solid var(--bp-emphasis-focusColor);
    outline-offset: var(--bp-emphasis-focusOffset);
  }
}

.searchIcon {
  color: var(--osdk-filter-input-icon-color);
  flex-shrink: 0;
}

.input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--bp-typography-family-default);
  font-size: var(--bp-typography-size-bodyMedium);
  color: var(--osdk-filter-input-color);
  outline: none;

  &::placeholder {
    color: var(--osdk-filter-input-placeholder-color);
  }
}

.clearButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--bp-surface-spacing) * 0.5);
  border: none;
  background: transparent;
  color: var(--osdk-filter-input-icon-color);
  cursor: pointer;
  border-radius: var(--bp-surface-borderRadius);
  transition: background-color var(--bp-emphasis-transitionDuration) var(--bp-emphasis-ease-default);

  &:hover {
    background: var(--bp-surface-colorHover-default);
  }

  &:active {
    background: var(--bp-surface-colorActive-default);
  }
}
```

### Step 4: Update TSX Files to Use CSS Modules

**Pattern from PR (Table.tsx):**
```tsx
import classNames from "classnames";
import styles from "./Table.module.css";

// In component:
<div className={classNames(styles.osdkTableContainer, className)}>
```

Apply to:
1. **FilterList.tsx** - Add `className` prop, use `styles.filterList`
2. **FilterListHeader.tsx** - Use header styles
3. **FilterListItem.tsx** - Use item styles
4. **ContainsTextInput.tsx** - Replace `bp6-*` classes with CSS module + Blueprint icons

### Step 5: Add Example Override in e2e.sandbox.peopleapp

**Create `e2e.sandbox.peopleapp/src/app/employees/EmployeeFilterList.module.css`:**
```css
/**
 * Component-specific style overrides for FilterList
 */

.employeeFilterList {
  /* Example: Override filter list background for this instance */
  --osdk-filter-list-bg: var(--bp-palette-gray-100);
}
```

**Usage in component (following OfficesPage pattern):**
```tsx
import styles from "./EmployeeFilterList.module.css";

<FilterList className={styles.employeeFilterList} ... />
```

---

## Files to Create/Modify

### react-components-styles package
| File | Action |
|------|--------|
| `src/index.css` | Add 15 filter tokens inside `:root` block |

### react-components package
| File | Action |
|------|--------|
| `src/filter-list/base/FilterList.module.css` | Create |
| `src/filter-list/base/FilterList.tsx` | Add `className` prop, use CSS module |
| `src/filter-list/base/FilterListHeader.module.css` | Create |
| `src/filter-list/base/FilterListHeader.tsx` | Use CSS module |
| `src/filter-list/base/FilterListItem.module.css` | Create |
| `src/filter-list/base/FilterListItem.tsx` | Use CSS module |
| `src/filter-list/base/inputs/ContainsTextInput.module.css` | Create |
| `src/filter-list/base/inputs/ContainsTextInput.tsx` | Replace `bp6-*` classes with CSS module |

### e2e.sandbox.peopleapp package
| File | Action |
|------|--------|
| `src/app/employees/EmployeeFilterList.module.css` | Create (example override) |
| Component using FilterList | Pass `className={styles.employeeFilterList}` |

---

## Verification

1. **Merge check:** `git status` shows clean merge
2. **Typecheck:** `cd packages/react-components && pnpm turbo typecheck`
3. **Visual test:** Run e2e sandbox peopleapp (`pnpm dev` in e2e.sandbox.peopleapp), verify:
   - Filter list renders with proper token-based styling
   - EmployeeFilterList override changes background color
4. **Token cascade:** Inspect in browser DevTools, verify CSS variables resolve correctly

---

## Summary

- Merge `module-css` branch (brings in token architecture + CSS layers)
- Add 15 filter-specific tokens to `react-components-styles/src/index.css`
- Create 4 CSS modules in react-components for container/input components
- Update 4 TSX files to use CSS modules with `classNames` utility
- Replace all `bp6-*` classes in ContainsTextInput
- Add example override in e2e sandbox demonstrating per-instance customization
