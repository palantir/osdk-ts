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

import type { QueryDataType } from "@osdk/foundry.ontologies";

export function getInterfaceTypesFromQueryDataType(
  dataType: QueryDataType,
  types: Set<string>,
): void {
  switch (dataType.type) {
    case "array":
    case "set":
      getInterfaceTypesFromQueryDataType(dataType.subType, types);
      return;
    case "interfaceObject":
    case "interfaceObjectSet":
      types.add(dataType.interfaceTypeApiName!);
      return;

    case "struct":
      for (const prop of Object.values(dataType.fields)) {
        getInterfaceTypesFromQueryDataType(prop.fieldType, types);
      }
      return;

    case "union":
      for (const type of dataType.unionTypes) {
        getInterfaceTypesFromQueryDataType(type, types);
      }
      return;

    case "entrySet":
      getInterfaceTypesFromQueryDataType(dataType.keyType, types);
      getInterfaceTypesFromQueryDataType(dataType.valueType, types);
      return;

    case "attachment":
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "null":
    case "string":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
    case "entrySet":
    case "unsupported":
    case "object":
    case "objectSet":
      /* complete no-op */
      return;

    default:
      const _: never = dataType;
      throw new Error(
        `Unknown query data type ${(dataType as any).type}`,
      );
  }
}
