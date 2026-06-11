/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { TokenRoleDefinition } from "./types.js";

/**
 * Complete token role definitions mapping friendly role names
 * to actual OSDK/Blueprint CSS custom properties.
 *
 * Each role cascades into ALL component-level tokens that derive
 * from it, ensuring a complete theme when colors are set.
 *
 * NOTE: Only override semantic tokens here — avoid palette primitives
 * (e.g. --bp-palette-black) as they feed into oklch derivation chains.
 * Only override rest-state intent tokens — hover/active are derived
 * from rest via CSS defaults or oklch formulas.
 */
export const TOKEN_ROLES: TokenRoleDefinition[] = [
  // ── Colors ──────────────────────────────────────────────
  {
    role: "background",
    label: "Background",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Semantic background
      "--osdk-background-primary",
      // Table row backgrounds (both default and alternate use the same color)
      "--osdk-table-row-bg-default",
      "--osdk-table-row-bg-alternate",
      // Surface default rest / disabled
      "--osdk-surface-background-color-default-rest",
      "--bp-surface-background-color-default-rest",
      "--bp-surface-background-color-default-disabled",
    ],
  },
  {
    role: "surface",
    label: "Surface",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Semantic backgrounds
      "--osdk-background-secondary",
      "--osdk-background-tertiary",
      // Surface hover/active (needed for filter list, select, combobox states)
      "--osdk-surface-background-color-default-hover",
      "--bp-surface-background-color-default-hover",
      "--osdk-surface-background-color-default-active",
      "--bp-surface-background-color-default-active",
      // Table header
      "--osdk-table-header-bg",
      // Checkbox hover background
      "--osdk-checkbox-bg-hover",
    ],
  },
  {
    role: "text",
    label: "Text",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Typography (semantic only — palette primitives excluded
      // to preserve oklch derivation chains)
      "--osdk-typography-color-default-rest",
      "--bp-typography-color-default-rest",
      // Tooltip text
      "--osdk-tooltip-color",
      // Table text
      "--osdk-table-header-color",
      "--osdk-table-cell-color",
    ],
  },
  {
    role: "text-muted",
    label: "Text Muted",
    category: "color",
    inputType: "color",
    cssProperties: [
      "--osdk-typography-color-muted",
      "--bp-typography-color-muted",
      // Intent default (used for muted/secondary UI)
      "--osdk-intent-default-rest",
      "--bp-intent-default-rest",
      // Table header menu color
      "--osdk-table-header-menu-color",
    ],
  },
  {
    role: "primary",
    label: "Primary",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Intent primary (rest only — hover/active derive from CSS defaults)
      "--osdk-intent-primary-rest",
      "--bp-intent-primary-rest",
      // Focus ring
      "--osdk-emphasis-focus-color",
      "--bp-emphasis-focus-color",
      // Checkbox checked
      "--osdk-checkbox-bg-checked",
    ],
  },
  {
    role: "primary-foreground",
    label: "Primary Foreground",
    category: "color",
    inputType: "color",
    cssProperties: [
      "--osdk-intent-primary-foreground",
      "--bp-intent-primary-foreground",
      // Checkbox tick color
      "--osdk-checkbox-checked-foreground",
    ],
  },
  {
    role: "secondary",
    label: "Secondary",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Secondary button background only — intent-default-hover
      // intentionally excluded to preserve oklch derivation chain
      "--osdk-button-secondary-bg",
    ],
  },
  {
    role: "secondary-foreground",
    label: "Secondary Foreground",
    category: "color",
    inputType: "color",
    cssProperties: [
      "--osdk-button-secondary-color",
      "--osdk-intent-default-foreground",
      "--bp-intent-default-foreground",
    ],
  },
  {
    role: "icon-color",
    label: "Icon Color",
    category: "color",
    inputType: "color",
    cssProperties: [
      "--osdk-iconography-color-muted",
      "--osdk-drag-handle-color",
    ],
  },
  {
    role: "border",
    label: "Border",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Surface border (default + strong)
      "--osdk-surface-border-color-default",
      "--bp-surface-border-color-default",
      "--osdk-surface-border-color-strong",
      "--bp-surface-border-color-strong",
      // Table border
      "--osdk-table-border-color",
      // Checkbox border color
      "--osdk-checkbox-border-color",
    ],
  },
  {
    role: "danger",
    label: "Danger",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Rest only — hover/active derive from CSS defaults
      "--osdk-intent-danger-rest",
      "--bp-intent-danger-rest",
      "--osdk-intent-danger-foreground",
      "--bp-intent-danger-foreground",
    ],
  },
  {
    role: "success",
    label: "Success",
    category: "color",
    inputType: "color",
    cssProperties: [
      // Rest only — hover/active derive from CSS defaults
      "--osdk-intent-success-rest",
      "--bp-intent-success-rest",
      "--osdk-intent-success-foreground",
      "--bp-intent-success-foreground",
    ],
  },
  {
    role: "warning",
    label: "Warning",
    category: "color",
    inputType: "color",
    cssProperties: [
      "--osdk-intent-warning-rest",
      "--bp-intent-warning-rest",
      "--osdk-intent-warning-foreground",
      "--bp-intent-warning-foreground",
    ],
  },

  // ── Typography ──────────────────────────────────────────
  {
    role: "font-family",
    label: "Font Family",
    category: "typography",
    inputType: "font",
    cssProperties: [
      "--osdk-typography-family-default",
      "--bp-typography-family-default",
    ],
  },
  {
    role: "font-size-small",
    label: "Size Small",
    category: "typography",
    inputType: "px",
    cssProperties: [
      "--osdk-typography-size-body-small",
      "--bp-typography-size-body-small",
    ],
  },
  {
    role: "font-size-medium",
    label: "Size Medium",
    category: "typography",
    inputType: "px",
    cssProperties: [
      "--osdk-typography-size-body-medium",
      "--bp-typography-size-body-medium",
    ],
  },
  {
    role: "font-size-large",
    label: "Size Large",
    category: "typography",
    inputType: "px",
    cssProperties: [
      "--osdk-typography-size-body-large",
      "--bp-typography-size-body-large",
    ],
  },
  {
    role: "font-weight-default",
    label: "Weight Default",
    category: "typography",
    inputType: "number",
    cssProperties: [
      "--osdk-typography-weight-default",
      "--bp-typography-weight-default",
    ],
  },
  {
    role: "font-weight-bold",
    label: "Weight Bold",
    category: "typography",
    inputType: "number",
    cssProperties: [
      "--osdk-typography-weight-bold",
      "--bp-typography-weight-bold",
    ],
  },
  {
    role: "line-height",
    label: "Line Height",
    category: "typography",
    inputType: "number",
    cssProperties: [
      "--osdk-typography-line-height-default",
      "--bp-typography-line-height-default",
    ],
  },

  // ── Surface ─────────────────────────────────────────────
  {
    role: "border-radius",
    label: "Border Radius",
    category: "surface",
    inputType: "px",
    cssProperties: [
      "--osdk-surface-border-radius",
      "--bp-surface-border-radius",
    ],
  },
  {
    role: "spacing",
    label: "Spacing",
    category: "surface",
    inputType: "px",
    cssProperties: [
      "--osdk-surface-spacing",
      "--bp-surface-spacing",
    ],
  },
  {
    role: "border-width",
    label: "Border Width",
    category: "surface",
    inputType: "px",
    cssProperties: [
      "--osdk-surface-border-width",
      "--bp-surface-border-width",
    ],
  },
  {
    role: "shadow",
    label: "Shadow",
    category: "surface",
    inputType: "shadow",
    cssProperties: [
      // Only override shadow-2 (primary level) — other depths (0/1/3/4)
      // are derived by the component library's own depth hierarchy
      "--osdk-surface-shadow-2",
      "--bp-surface-shadow-2",
    ],
  },

  // ── Emphasis ────────────────────────────────────────────
  {
    role: "focus-width",
    label: "Focus Width",
    category: "emphasis",
    inputType: "px",
    cssProperties: [
      "--osdk-emphasis-focus-width",
      "--bp-emphasis-focus-width",
    ],
  },
  {
    role: "focus-offset",
    label: "Focus Offset",
    category: "emphasis",
    inputType: "px",
    cssProperties: [
      "--osdk-emphasis-focus-offset",
      "--bp-emphasis-focus-offset",
    ],
  },
  {
    role: "transition-duration",
    label: "Transition",
    category: "emphasis",
    inputType: "ms",
    cssProperties: [
      "--osdk-emphasis-transition-duration",
      "--bp-emphasis-transition-duration",
    ],
  },
];

/** Lookup a token role definition by role name */
export function getTokenRole(
  role: string,
): TokenRoleDefinition | undefined {
  return TOKEN_ROLES.find((t) => t.role === role);
}
