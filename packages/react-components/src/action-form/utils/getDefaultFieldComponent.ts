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
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import type { FieldComponent } from "../FormFieldApi.js";

/**
 * Maps an ActionMetadata parameter type to the default FieldComponent.
 */
export function getDefaultFieldComponent(
  paramType: ActionMetadata.Parameter["type"],
): FieldComponent {
  if (typeof paramType === "object") {
    switch (paramType.type) {
      case "objectSet":
        return "OBJECT_SET";
      case "object":
      case "interface":
        return "DROPDOWN";
      case "struct":
        return "TEXT_INPUT";
    }
    // All 4 DataType object variants handled above; if a new one is
    // added the outer switch's assertUnreachable will catch it.
  }

  switch (paramType) {
    case "string":
    case "marking":
    case "geohash":
    case "geoshape":
    case "objectType":
      return "TEXT_INPUT";
    case "boolean":
      return "DROPDOWN";
    case "integer":
    case "double":
    case "long":
      return "NUMBER_INPUT";
    case "datetime":
    case "timestamp":
      return "DATETIME_PICKER";
    case "attachment":
    case "mediaReference":
      return "FILE_PICKER";
    default:
      return assertUnreachable(paramType);
  }
}
