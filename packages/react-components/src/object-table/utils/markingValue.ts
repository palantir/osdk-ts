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
 * Normalize a marking property's cell value into a string[] of marking ids.
 * Marking properties may arrive as a single string (single-valued) or
 * string[] (multi-valued); null/undefined become an empty array.
 *
 * Duplicates are removed so callers (e.g. per-marking pill renderers) can
 * safely use the marking id as a React key.
 */
export function toMarkingIdArray(value: unknown): string[] {
  if (value == null) {
    return [];
  }
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    const ids = value.filter((v): v is string => typeof v === "string");
    return Array.from(new Set(ids));
  }
  return [];
}
