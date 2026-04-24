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

import type { DateRange, FieldComponent } from "../FormFieldApi.js";
import {
  extractDate,
  extractDateRange,
  extractFile,
  extractNumber,
  extractString,
} from "./fieldValueExtractors.js";

/**
 * Maps each field component to the value type its UI component expects.
 */
interface CoercedValueMap {
  DATE_RANGE_INPUT: DateRange;
  DATETIME_PICKER: Date | null;
  DROPDOWN: unknown;
  FILE_PICKER: File | File[] | null;
  NUMBER_INPUT: number | null;
  RADIO_BUTTONS: unknown;
  OBJECT_SET: unknown;
  TEXT_AREA: string;
  TEXT_INPUT: string;
  CUSTOM: unknown;
}

/**
 * Coerces an `unknown` form state value into the type each field component
 * expects for rendering.
 *
 * Generic on `FC` so the return type narrows when called with a literal
 * field component string (e.g., `coerceForRender("TEXT_INPUT", v)` → `string`).
 *
 * Keyed on `FieldComponent` (not `FieldType`) because the target type is
 * determined by the UI component, not the wire format.
 *
 * Counterpart to `coerceFieldValue` which coerces for submission (wire types).
 */
export function coerceForRender<FC extends FieldComponent>(
  fieldComponent: FC,
  value: unknown,
): CoercedValueMap[FC] {
  let result: unknown;
  switch (fieldComponent) {
    case "TEXT_INPUT":
    case "TEXT_AREA":
      result = extractString(value);
      break;
    case "NUMBER_INPUT":
      result = extractNumber(value) ?? null;
      break;
    case "DATETIME_PICKER":
      result = extractDate(value) ?? null;
      break;
    case "DATE_RANGE_INPUT":
      result = extractDateRange(value);
      break;
    case "FILE_PICKER":
      result = extractFile(value);
      break;
    case "DROPDOWN":
    case "RADIO_BUTTONS":
    case "CUSTOM":
    case "OBJECT_SET":
      result = value;
      break;
  }
  // Safe: each case above produces the type CoercedValueMap[FC] for that FC.
  return result as CoercedValueMap[FC];
}
