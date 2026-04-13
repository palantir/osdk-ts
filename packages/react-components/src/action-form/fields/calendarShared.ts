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
 * Shared constants and utilities for DateCalendar, DateRangeCalendar,
 * DatetimePickerField, and DateRangeInputField.
 */

import type React from "react";
import type { DateAfter, DateBefore, Matcher } from "react-day-picker";

/** Fallback year range for the month/year dropdown when no min/max is provided. */
export const DEFAULT_FROM_YEAR: number = new Date().getFullYear() - 10;
export const DEFAULT_TO_YEAR: number = new Date().getFullYear() + 10;

/**
 * Builds the `disabled` matcher array for react-day-picker from optional
 * min/max date constraints. Dates before min or after max are disabled.
 */
export function buildDisabledMatchers(
  min: Date | undefined,
  max: Date | undefined,
): Matcher[] {
  const matchers: Matcher[] = [];
  if (min != null) {
    const before: DateBefore = { before: min };
    matchers.push(before);
  }
  if (max != null) {
    const after: DateAfter = { after: max };
    matchers.push(after);
  }
  return matchers;
}

/**
 * Stable click handler that stops event propagation. Used on date inputs
 * inside Popover.Trigger to prevent the trigger's click handler from
 * toggling the popover closed when the user clicks the already-open input.
 */
export const stopPropagation: (e: React.MouseEvent) => void = (e) => {
  e.stopPropagation();
};
