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

import type React from "react";
import type { DateAfter, DateBefore, Matcher } from "react-day-picker";

export const DEFAULT_FROM_YEAR: number = new Date().getFullYear() - 100;
export const DEFAULT_TO_YEAR: number = new Date().getFullYear() + 10;

export const CALENDAR_ICON_SIZE = 16;

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

export const stopPropagation: (e: React.MouseEvent) => void = (e) => {
  e.stopPropagation();
};
