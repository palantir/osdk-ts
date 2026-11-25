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
 * Names the type of a stored value, e.g. "string", or "array<number>" for an
 * array, listing each distinct item type once.
 */
export function getValueType(value: unknown): string {
  if (!Array.isArray(value)) {
    return getScalarType(value);
  }
  if (value.length === 0) {
    return "array";
  }
  // One level deep: an item that is itself an array is named "array".
  const itemTypes = new Set(value.map(getScalarType));
  return `array<${[...itemTypes].join(" | ")}>`;
}

function getScalarType(value: unknown): string {
  if (Array.isArray(value)) {
    return "array";
  }
  if (value instanceof Date) {
    return "date";
  }
  if (typeof File !== "undefined" && value instanceof File) {
    return "file";
  }
  return typeof value;
}
