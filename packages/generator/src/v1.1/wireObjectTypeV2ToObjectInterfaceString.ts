/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectPropertyType, ObjectTypeV2 } from "@osdk/gateway/types";

export function wireObjectTypeV2ToObjectInterfaceStringV1(
  input: ObjectTypeV2,
) {
  return /* TypeScript */ `
import { OntologyObject } from "@osdk/legacy-client";
/**
 * ${input.description}
 */
export interface ${input.apiName} extends OntologyObject {
  readonly __apiName: "${input.apiName}";
  readonly __primaryKey: ${
    wirePropertyTypeV2ToTypeScriptType(
      input.properties[input.primaryKey].dataType,
    )
  };
${
    Object.entries(input.properties).map((
      [propertyName, propertyDefinition],
    ) =>
      `  readonly ${propertyName}: ${
        wirePropertyTypeV2ToTypeScriptType(propertyDefinition.dataType)
      } | undefined`
    ).join(";\n")
  }
}
  `;
}

function wirePropertyTypeV2ToTypeScriptType(
  property: ObjectPropertyType,
): string {
  switch (property.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "array":
      return wirePropertyTypeV2ToTypeScriptType(property.subType) + "[]";
    case "integer":
      return "number";
    case "attachment":
    case "byte":
    case "date":
    case "decimal":
    case "double":
    case "float":
    case "geopoint":
    case "geoshape":
    case "long":
    case "short":
    case "timestamp":
    case "timeseries":
    default:
      throw new Error("not implemented");
  }
}
