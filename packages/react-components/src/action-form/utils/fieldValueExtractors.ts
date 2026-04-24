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

import { type DateRange, EMPTY_RANGE } from "../FormFieldApi.js";

/**
 * Shared primitives for extracting typed values from `unknown`.
 *
 * Used by both:
 * - `coerceForRender` (unknown → UI type for component rendering)
 * - `coerceFieldValue` (unknown → wire type for form submission)
 */

export function extractNumber(rawValue: unknown): number | undefined {
  if (typeof rawValue === "number") {
    return rawValue;
  }
  if (typeof rawValue === "string") {
    const trimmed = rawValue.trim();
    if (trimmed === "") return undefined;
    const parsed = Number(trimmed);
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}

export function extractDate(value: unknown): Date | undefined {
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? undefined : new Date(parsed);
  }
  return undefined;
}

export function extractString(value: unknown): string {
  if (value == null) return "";
  return typeof value === "string" ? value : String(value);
}

export function extractDateRange(value: unknown): DateRange {
  if (!Array.isArray(value) || value.length !== 2) return EMPTY_RANGE;
  const start = value[0] instanceof Date ? value[0] : null;
  const end = value[1] instanceof Date ? value[1] : null;
  if (start == null && end == null) return EMPTY_RANGE;
  return [start, end];
}

function isFileArray(value: unknown[]): value is File[] {
  return value.every((v) => v instanceof File);
}

export function extractFile(value: unknown): File | File[] | null {
  if (value instanceof File) {
    return value;
  }
  if (Array.isArray(value) && isFileArray(value)) {
    return value;
  }
  return null;
}
