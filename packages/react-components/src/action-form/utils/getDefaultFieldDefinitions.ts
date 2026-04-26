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
import type { RendererFieldDefinition } from "../FormFieldApi.js";

/**
 * Derives default field definitions from ActionMetadata.
 *
 * Each parameter type maps to a concrete RendererFieldDefinition with the
 * correct fieldComponent and default fieldComponentProps.
 */
export function getDefaultFieldDefinitions(
  metadata: ActionMetadata,
): ReadonlyArray<RendererFieldDefinition> {
  return Object.entries(metadata.parameters).map(
    ([key, param]) => buildFieldDefinition(key, param),
  );
}

const EMPTY_ITEMS: unknown[] = [];

/**
 * Maps a single action parameter to its default RendererFieldDefinition.
 *
 * Switches on the parameter's data type to select both the field component
 * and its required default props.
 */
function buildFieldDefinition(
  key: string,
  param: ActionMetadata.Parameter,
): RendererFieldDefinition {
  const base = {
    fieldKey: key,
    label: key,
    isRequired: !param.nullable,
    fieldType: param.type,
  };

  const paramType = param.type;

  if (typeof paramType === "object") {
    switch (paramType.type) {
      case "objectSet":
        return {
          ...base,
          fieldComponent: "OBJECT_SET",
          fieldComponentProps: { value: null },
        };
      case "object":
      case "interface":
        // TODO: provide correct items
        return {
          ...base,
          fieldComponent: "DROPDOWN",
          fieldComponentProps: { items: EMPTY_ITEMS },
        };
      case "struct":
        return {
          ...base,
          fieldComponent: "TEXT_INPUT",
          fieldComponentProps: {},
        };
    }
  }

  switch (paramType) {
    case "string":
    case "marking":
    case "geohash":
    case "geoshape":
    case "objectType":
      return {
        ...base,
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      };
    case "boolean":
      return {
        ...base,
        fieldComponent: "RADIO_BUTTONS",
        fieldComponentProps: {
          options: [{ label: "True", value: true }, {
            label: "False",
            value: false,
          }],
        },
      };
    case "integer":
    case "double":
    case "long":
      return {
        ...base,
        fieldComponent: "NUMBER_INPUT",
        fieldComponentProps: {},
      };
    case "datetime":
    case "timestamp":
      return {
        ...base,
        fieldComponent: "DATETIME_PICKER",
        fieldComponentProps: {},
      };
    case "attachment":
    case "mediaReference":
      return {
        ...base,
        fieldComponent: "FILE_PICKER",
        fieldComponentProps: {},
      };
    default:
      return assertUnreachable(paramType);
  }
}
