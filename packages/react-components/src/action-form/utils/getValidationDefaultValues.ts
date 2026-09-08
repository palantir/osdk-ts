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

import type { FieldType } from "../FormFieldApi.js";

export function getValidationDefaultValues(
  parameters: Record<string, { defaultValue?: unknown }>,
  parameterDefinitions: Record<string, { type: FieldType }> | undefined,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(parameters).flatMap(
      ([fieldKey, parameter]): Array<[string, unknown]> => {
        const parameterType = parameterDefinitions?.[fieldKey]?.type;
        if (parameterType == null) {
          return [];
        }
        const defaultValue = getValidationDefaultValue(
          parameterType,
          parameter.defaultValue,
        );
        return defaultValue === undefined ? [] : [[fieldKey, defaultValue]];
      },
    ),
  );
}

function getValidationDefaultValue(
  parameterType: FieldType,
  value: unknown,
): string | number | boolean | undefined {
  if (typeof parameterType !== "string") {
    switch (parameterType.type) {
      // TODO: Support validation defaults for complex parameter types.
      case "interface":
      case "object":
      case "objectSet":
      case "struct":
        return undefined;
      default:
        parameterType satisfies never;
        return undefined;
    }
  }

  switch (parameterType) {
    case "boolean":
      return typeof value === "boolean" ? value : undefined;
    case "double":
    case "integer":
    case "long":
      return typeof value === "number" ? value : undefined;
    case "string":
      return typeof value === "string" ? value : undefined;
    // TODO: Support validation defaults for non-scalar parameter types.
    case "attachment":
    case "datetime":
    case "geohash":
    case "geoshape":
    case "marking":
    case "mediaReference":
    case "objectType":
    case "scenarioReference":
    case "timestamp":
      return undefined;
    default:
      parameterType satisfies never;
      return undefined;
  }
}
