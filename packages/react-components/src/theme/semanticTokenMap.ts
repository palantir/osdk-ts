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

export const SEMANTIC_TOKEN_MAP = {
  background: [
    "--osdk-background-primary",
    "--osdk-table-row-bg-default",
    "--osdk-table-row-bg-alternate",
    "--osdk-surface-background-color-default-rest",
    "--bp-surface-background-color-default-rest",
    "--bp-surface-background-color-default-disabled",
  ],
  surface: [
    "--osdk-background-secondary",
    "--osdk-background-tertiary",
    "--osdk-surface-background-color-default-hover",
    "--bp-surface-background-color-default-hover",
    "--osdk-surface-background-color-default-active",
    "--bp-surface-background-color-default-active",
    "--osdk-table-header-bg",
    "--osdk-checkbox-bg-hover",
  ],
  text: [
    "--osdk-typography-color-default-rest",
    "--bp-typography-color-default-rest",
    "--osdk-tooltip-color",
    "--osdk-table-header-color",
    "--osdk-table-cell-color",
  ],
  "text-muted": [
    "--osdk-typography-color-muted",
    "--bp-typography-color-muted",
    "--osdk-intent-default-rest",
    "--bp-intent-default-rest",
    "--osdk-table-header-menu-color",
  ],
  primary: [
    "--osdk-intent-primary-rest",
    "--bp-intent-primary-rest",
    "--osdk-emphasis-focus-color",
    "--bp-emphasis-focus-color",
    "--osdk-checkbox-bg-checked",
  ],
  "primary-foreground": [
    "--osdk-intent-primary-foreground",
    "--bp-intent-primary-foreground",
    "--osdk-checkbox-checked-foreground",
  ],
  secondary: ["--osdk-button-secondary-bg"],
  "secondary-foreground": [
    "--osdk-button-secondary-color",
    "--osdk-intent-default-foreground",
    "--bp-intent-default-foreground",
  ],
  "icon-color": ["--osdk-iconography-color-muted", "--osdk-drag-handle-color"],
  border: [
    "--osdk-surface-border-color-default",
    "--bp-surface-border-color-default",
    "--osdk-surface-border-color-strong",
    "--bp-surface-border-color-strong",
    "--osdk-table-border-color",
    "--osdk-checkbox-border-color",
  ],
  danger: [
    "--osdk-intent-danger-rest",
    "--bp-intent-danger-rest",
    "--osdk-intent-danger-foreground",
    "--bp-intent-danger-foreground",
  ],
  success: [
    "--osdk-intent-success-rest",
    "--bp-intent-success-rest",
    "--osdk-intent-success-foreground",
    "--bp-intent-success-foreground",
  ],
  warning: [
    "--osdk-intent-warning-rest",
    "--bp-intent-warning-rest",
    "--osdk-intent-warning-foreground",
    "--bp-intent-warning-foreground",
  ],
  "font-family": [
    "--osdk-typography-family-default",
    "--bp-typography-family-default",
  ],
  "font-size-small": [
    "--osdk-typography-size-body-small",
    "--bp-typography-size-body-small",
  ],
  "font-size-medium": [
    "--osdk-typography-size-body-medium",
    "--bp-typography-size-body-medium",
  ],
  "font-size-large": [
    "--osdk-typography-size-body-large",
    "--bp-typography-size-body-large",
  ],
  "font-weight-default": [
    "--osdk-typography-weight-default",
    "--bp-typography-weight-default",
  ],
  "font-weight-bold": [
    "--osdk-typography-weight-bold",
    "--bp-typography-weight-bold",
  ],
  "line-height": [
    "--osdk-typography-line-height-default",
    "--bp-typography-line-height-default",
  ],
  "border-radius": [
    "--osdk-surface-border-radius",
    "--bp-surface-border-radius",
  ],
  spacing: ["--osdk-surface-spacing", "--bp-surface-spacing"],
  "border-width": ["--osdk-surface-border-width", "--bp-surface-border-width"],
  shadow: [
    "--osdk-surface-shadow-2",
    "--bp-surface-shadow-2",
    "--osdk-input-shadow",
  ],
  "focus-width": ["--osdk-emphasis-focus-width", "--bp-emphasis-focus-width"],
  "focus-offset": [
    "--osdk-emphasis-focus-offset",
    "--bp-emphasis-focus-offset",
  ],
  "transition-duration": [
    "--osdk-emphasis-transition-duration",
    "--bp-emphasis-transition-duration",
  ],
} as const;

export type SemanticTokenRole = keyof typeof SEMANTIC_TOKEN_MAP;
