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

import type { FieldType } from "../FormFieldApi.js";
import { extractNumber } from "./fieldValueExtractors.js";

/**
 * Coerces a raw form field value to match the expected wire type for the given
 * field type. Returns `undefined` when coercion fails
 * (e.g. non-numeric string for a number field).
 *
 * Keyed on `FieldType` (not `FieldComponent`) because the target type is
 * determined by the wire format, not the UI component.
 *
 * Counterpart to `coerceForRender` which coerces for rendering (UI types).
 *
 * Complex types (object, objectSet, struct, interface) are passed through
 * unchanged since they cannot be meaningfully coerced.
 */
export function coerceFieldValue(
  parameterType: FieldType | undefined,
  rawValue: unknown,
): unknown {
  if (rawValue == null) {
    return undefined;
  }

  if (parameterType == null) {
    return rawValue;
  }

  // TODO: Handle complex object types later
  if (typeof parameterType === "object") {
    return rawValue;
  }

  switch (parameterType) {
    case "string":
    case "marking":
    case "geohash":
    case "geoshape":
    case "objectType":
      return typeof rawValue === "string" ? rawValue : String(rawValue);

    case "integer":
    case "long": {
      const maybeNumber = extractNumber(rawValue);
      return maybeNumber != null ? Math.trunc(maybeNumber) : undefined;
    }

    case "double": {
      return extractNumber(rawValue);
    }

    case "boolean": {
      if (typeof rawValue === "boolean") {
        return rawValue;
      }
      if (rawValue === "true") return true;
      if (rawValue === "false") return false;
      return undefined;
    }

    case "datetime":
    case "timestamp": {
      if (typeof rawValue === "string") {
        return Number.isNaN(Date.parse(rawValue)) ? undefined : rawValue;
      }
      if (rawValue instanceof Date) {
        return rawValue.toISOString();
      }
      return undefined;
    }

    case "attachment":
    case "mediaReference":
      return rawValue;

    default:
      return rawValue;
  }
}
