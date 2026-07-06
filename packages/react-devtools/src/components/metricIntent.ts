/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
 * The intents a `Metric` value — and its `MetricLegend` swatch — can take.
 * Shared by both so they can't diverge on which color means what. `none` is the
 * neutral/no-status case.
 */
export type MetricIntent = "none" | "success" | "warning" | "danger";

/**
 * `MetricIntent` → the Blueprint intent color token it renders with, so colors
 * track the panel theme. `none` maps to `undefined`: a value inherits the
 * surrounding text color; a swatch falls back to its own muted fill.
 */
export const METRIC_INTENT_COLOR: Record<MetricIntent, string | undefined> = {
  none: undefined,
  success: "var(--bp-intent-success-rest)",
  warning: "var(--bp-intent-warning-rest)",
  danger: "var(--bp-intent-danger-rest)",
};
