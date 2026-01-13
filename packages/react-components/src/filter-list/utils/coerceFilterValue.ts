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
 * Coerces a filter value (string | boolean | number) to a string for display.
 * Returns undefined if the value is null or undefined.
 */
export function coerceToString(value: string | boolean | number | undefined | null): string | undefined {
  if (value == null) return undefined;
  return String(value);
}

/**
 * Coerces an array of filter values (string | boolean | number) to string[] for display.
 * Filters out null/undefined values and converts all others to strings.
 */
export function coerceToStringArray(values: Array<string | boolean | number> | undefined): string[] {
  if (!values) return [];
  return values.map((v) => String(v));
}
