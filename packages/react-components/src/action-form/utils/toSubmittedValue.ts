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
 * Turns a stored parameter value into the value ActionForm submits.
 *
 * The date picker stores a `Date`, but the backend accepts dates as ISO
 * strings. Storing strings instead would be a breaking change for BaseForm
 * and controlled `formState` consumers, so the conversion happens here, at
 * submit. Every other value, including user-provided strings, is submitted
 * unchanged; invalid values are left for validation to flag.
 */
export function toSubmittedValue(value: unknown): unknown {
  if (value == null) {
    return undefined;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (Array.isArray(value)) {
    const submittedValues = value.map(toSubmittedValue);
    return submittedValues.some((member) => member === undefined)
      ? undefined
      : submittedValues;
  }
  return value;
}
