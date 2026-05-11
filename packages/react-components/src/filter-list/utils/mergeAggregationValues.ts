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

import type { PropertyAggregationValue } from "../types/AggregationTypes.js";

/**
 * Ensures every selected value appears in the aggregation data. Values present
 * in `selectedValues` but absent from `data` (e.g. a saved filter for a value
 * that currently has zero matching rows) are appended with `count: 0` so the
 * UI always renders them as visible, checkable items.
 */
export function mergeAggregationValues(
  data: PropertyAggregationValue[],
  selectedValues: string[],
): PropertyAggregationValue[] {
  if (selectedValues.length === 0) {
    return data;
  }

  const existingValues = new Set(data.map((entry) => entry.value));
  const missingEntries: PropertyAggregationValue[] = selectedValues
    .filter((value) => !existingValues.has(value))
    .map((value) => ({ value, count: 0 }));

  if (missingEntries.length === 0) {
    return data;
  }

  return [...data, ...missingEntries];
}
