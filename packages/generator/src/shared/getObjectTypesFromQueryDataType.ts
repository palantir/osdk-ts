/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { QueryDataType } from "@osdk/gateway/types";

export function getObjectTypesFromQueryDataType(
  dataType: QueryDataType,
  types: Set<string>,
) {
  switch (dataType.type) {
    case "array":
    case "set":
      getObjectTypesFromQueryDataType(dataType.subType, types);
      return;

    case "object":
      types.add(dataType.objectTypeApiName);
      return;

    case "objectSet":
      types.add(dataType.objectTypeApiName!);
      return;

    case "struct":
      for (const prop of Object.values(dataType.fields)) {
        getObjectTypesFromQueryDataType(prop.fieldType, types);
      }
      return;

    case "union":
      for (const type of dataType.unionTypes) {
        getObjectTypesFromQueryDataType(type, types);
      }
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
    case "unsupported":
      /* complete no-op */
      return;

    default:
      const _: never = dataType;
      throw new Error(
        `Cannot find object types from unsupported QueryDataType ${
          (dataType as any).type
        }`,
      );
  }
}
