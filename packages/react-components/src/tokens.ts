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


/**
 * OSDK Component Tokens
 *
 * These CSS custom properties can be overridden to customize component appearance.
 */
export interface OSDKTokens {
  // Colors
  "--osdk-color-primary": string;
  "--osdk-color-accent": string;
  "--osdk-color-text": string;
  "--osdk-color-text-muted": string;
  "--osdk-color-background": string;
  "--osdk-color-background-alt": string;
  "--osdk-color-background-hover": string;
  "--osdk-color-border": string;
  "--osdk-color-border-muted": string;
  "--osdk-color-danger": string;

  // Spacing
  "--osdk-spacing-base": string;
  "--osdk-spacing-cell": string;
  "--osdk-spacing-state": string;

  // Typography
  "--osdk-font-family": string;
  "--osdk-font-size-base": string;
  "--osdk-font-size-large": string;
  "--osdk-line-height": string;

  // Borders & Shadows
  "--osdk-border-radius": string;
  "--osdk-shadow-elevation-0": string;

  // Transitions
  "--osdk-transition-duration": string;
  "--osdk-transition-ease": string;
}

/**
 * Helper to apply custom tokens to a DOM element
 *
 * @param tokens - Partial set of token overrides
 * @param target - Target element (defaults to document.documentElement)
 *
 * @example
 * ```typescript
 * applyTokens({
 *   '--osdk-color-primary': '#2563eb',
 *   '--osdk-spacing-base': '5px',
 * });
 * ```
 */
export function applyTokens(
  tokens: Partial<OSDKTokens>,
  target: HTMLElement = document.documentElement,
): void {
  Object.entries(tokens).forEach(([key, value]) => {
    target.style.setProperty(key, value);
  });
}
