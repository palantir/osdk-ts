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

import type { ActionMetadata } from "@osdk/api";
import { formatISO } from "date-fns";

/**
 * Turns a stored parameter value into the value ActionForm submits.
 *
 * The date picker stores a `Date`, but the backend accepts date-only values
 * as local YYYY-MM-DD strings and timestamps as ISO strings. Storing strings
 * instead would be a breaking change for BaseForm
 * and controlled `formState` consumers, so the conversion happens here, at
 * submit. Every other value, including user-provided strings, is submitted
 * unchanged; invalid values are left for validation to flag.
 *
 * TODO: Store submit-ready values (e.g. ISO date strings) so this conversion
 * can be dropped, as a breaking change before v1.x.
 */
export function toSubmittedValue(
  value: unknown,
  fieldType?: ActionMetadata.Parameter["type"],
): unknown {
  if (value == null) {
    return undefined;
  }
  if (value instanceof Date) {
    if (fieldType === "datetime") {
      return formatISO(value, { representation: "date" });
    }
    return value.toISOString();
  }
  if (Array.isArray(value)) {
    // TODO: Revisit omitting the whole parameter when any item is nullish.
    // This preserves the previous behavior.
    const submittedValues = value.map((member) =>
      toSubmittedValue(member, fieldType),
    );
    return submittedValues.some((member) => member === undefined)
      ? undefined
      : submittedValues;
  }
  return value;
}
