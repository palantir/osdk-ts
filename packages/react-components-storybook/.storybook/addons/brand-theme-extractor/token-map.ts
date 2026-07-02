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
    designMdKey: "canvas",
    designMdSection: "colors",
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
    designMdKey: "surface",
    designMdSection: "colors",
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
    designMdKey: "ink",
    designMdSection: "colors",
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
    designMdKey: "ink-muted",
    designMdSection: "colors",
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
    role: "text-subtle",
    label: "Text Subtle",
    category: "color",
    inputType: "color",
    designMdKey: "ink-subtle",
    designMdSection: "colors",
    cssProperties: [
      "--osdk-typography-color-default-disabled",
      "--bp-typography-color-default-disabled",
    ],
  },
  {
    role: "primary",
    label: "Primary",
    category: "color",
    inputType: "color",
    designMdKey: "primary",
    designMdSection: "colors",
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
    role: "primary-hover",
    label: "Primary Hover",
    category: "color",
    inputType: "color",
    designMdKey: "primary-hover",
    designMdSection: "colors",
    cssProperties: [
      "--osdk-intent-primary-subtle",
      "--osdk-intent-primary-hover",
      "--bp-intent-primary-hover",
    ],
  },
  {
    role: "primary-active",
    label: "Primary Active",
    category: "color",
    inputType: "color",
    designMdKey: "primary-active",
    designMdSection: "colors",
    cssProperties: [
      "--osdk-intent-primary-active",
      "--bp-intent-primary-active",
    ],
  },
  {
    role: "primary-foreground",
    label: "Primary Foreground",
    category: "color",
    inputType: "color",
    designMdKey: "on-primary",
    designMdSection: "colors",
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
    designMdKey: "secondary",
    designMdSection: "colors",
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
    designMdKey: "secondary-foreground",
    designMdSection: "colors",
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
    designMdKey: "icon",
    designMdSection: "colors",
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
    designMdKey: "hairline",
    designMdSection: "colors",
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
      // Input border (transparent by default; shadow provides visual border)
      "--osdk-input-border-color",
    ],
  },
  {
    role: "input-bg",
    label: "Input Background",
    category: "color",
    inputType: "color",
    designMdKey: "input-bg",
    designMdSection: "colors",
    cssProperties: ["--osdk-input-bg", "--osdk-tooltip-bg"],
  },
  {
    role: "overlay",
    label: "Overlay",
    category: "color",
    inputType: "color",
    designMdKey: "semantic-overlay",
    designMdSection: "colors",
    cssProperties: ["--osdk-background-backdrop", "--osdk-dialog-backdrop"],
  },
  {
    role: "danger",
    label: "Danger",
    category: "color",
    inputType: "color",
    designMdKey: "semantic-danger",
    designMdSection: "colors",
    cssProperties: [
      // Rest only — hover/active derive from CSS defaults.
      // Foreground tokens (--osdk-intent-danger-foreground) intentionally
      // excluded — they must stay white (or contrasting) so text/icons
      // remain visible on the danger background.
      "--osdk-intent-danger-rest",
      "--bp-intent-danger-rest",
    ],
  },
  {
    role: "success",
    label: "Success",
    category: "color",
    inputType: "color",
    designMdKey: "semantic-success",
    designMdSection: "colors",
    cssProperties: [
      // Rest only — hover/active derive from CSS defaults.
      // Foreground tokens excluded for the same contrast reason as danger.
      "--osdk-intent-success-rest",
      "--bp-intent-success-rest",
    ],
  },
  {
    role: "warning",
    label: "Warning",
    category: "color",
    inputType: "color",
    designMdKey: "semantic-warning",
    designMdSection: "colors",
    cssProperties: [
      // Foreground tokens excluded for the same contrast reason as danger.
      "--osdk-intent-warning-rest",
      "--bp-intent-warning-rest",
    ],
  },

  // ── Typography ──────────────────────────────────────────
  {
    role: "font-family",
    label: "Font Family",
    category: "typography",
    inputType: "font",
    designMdKey: "fontFamily",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-family-default",
      "--bp-typography-family-default",
    ],
  },
  {
    role: "font-family-mono",
    label: "Font Mono",
    category: "typography",
    inputType: "font",
    designMdKey: "fontFamily-mono",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-family-mono",
      "--bp-typography-family-mono",
    ],
  },
  {
    role: "font-size-xsmall",
    label: "Font Size X-Small",
    category: "typography",
    inputType: "px",
    designMdKey: "fontSize-xs",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-size-body-x-small",
      "--bp-typography-size-body-x-small",
    ],
  },
  {
    role: "font-size-small",
    label: "Font Size Small",
    category: "typography",
    inputType: "px",
    designMdKey: "fontSize-sm",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-size-body-small",
      "--bp-typography-size-body-small",
    ],
  },
  {
    role: "font-size-medium",
    label: "Font Size Medium",
    category: "typography",
    inputType: "px",
    designMdKey: "fontSize",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-size-body-medium",
      "--bp-typography-size-body-medium",
    ],
  },
  {
    role: "font-size-large",
    label: "Font Size Large",
    category: "typography",
    inputType: "px",
    designMdKey: "fontSize-lg",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-size-body-large",
      "--bp-typography-size-body-large",
    ],
  },
  {
    role: "font-weight-default",
    label: "Font Weight Default",
    category: "typography",
    inputType: "number",
    designMdKey: "fontWeight",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-weight-default",
      "--bp-typography-weight-default",
    ],
  },
  {
    role: "font-weight-bold",
    label: "Font Weight Bold",
    category: "typography",
    inputType: "number",
    designMdKey: "fontWeight-bold",
    designMdSection: "typography",
    cssProperties: [
      "--osdk-typography-weight-bold",
      "--bp-typography-weight-bold",
    ],
  },
  {
    role: "line-height",
    label: "Font Line Height",
    category: "typography",
    inputType: "number",
    designMdKey: "lineHeight",
    designMdSection: "typography",
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
    designMdKey: "md",
    designMdSection: "rounded",
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
    designMdKey: "md",
    designMdSection: "spacing",
    cssProperties: ["--osdk-surface-spacing", "--bp-surface-spacing"],
  },
  {
    role: "border-width",
    label: "Border Width",
    category: "surface",
    inputType: "px",
    designMdKey: "border-width",
    designMdSection: "surface",
    cssProperties: ["--osdk-surface-border-width", "--bp-surface-border-width"],
  },
  {
    role: "shadow",
    label: "Shadow",
    category: "surface",
    inputType: "shadow",
    designMdKey: "shadow",
    designMdSection: "surface",
    cssProperties: [
      // Only override shadow-2 (primary level) — other depths (0/1/3/4)
      // are derived by the component library's own depth hierarchy
      "--osdk-surface-shadow-2",
      "--bp-surface-shadow-2",
      // Input shadow
      "--osdk-input-shadow",
    ],
  },

  // ── Emphasis ────────────────────────────────────────────
  {
    role: "focus-width",
    label: "Focus Width",
    category: "emphasis",
    inputType: "px",
    designMdKey: "focus-width",
    designMdSection: "emphasis",
    cssProperties: ["--osdk-emphasis-focus-width", "--bp-emphasis-focus-width"],
  },
  {
    role: "focus-offset",
    label: "Focus Offset",
    category: "emphasis",
    inputType: "px",
    designMdKey: "focus-offset",
    designMdSection: "emphasis",
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
    designMdKey: "transition-duration",
    designMdSection: "emphasis",
    cssProperties: [
      "--osdk-emphasis-transition-duration",
      "--bp-emphasis-transition-duration",
    ],
  },
];

const TOKEN_ROLE_MAP = new Map<string, TokenRoleDefinition>(
  TOKEN_ROLES.map((t) => [t.role, t])
);

/** Lookup a token role definition by role name (O(1) via Map) */
export function getTokenRole(role: string): TokenRoleDefinition | undefined {
  return TOKEN_ROLE_MAP.get(role);
}
