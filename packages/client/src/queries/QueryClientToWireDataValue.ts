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

import type { QueryDataTypeDefinition } from "@osdk/api";
import {
  attachmentClientToWire,
  objectClientToWire,
  objectSetClientToWire,
  threeDimensionalAggregationClientToWire,
  timestampClientToWire,
  twoDimensionalAggregationClientToWire,
} from "../mapping/DataValueMapping.js";

export function queryClientToWireDataValue(
  dataType: QueryDataTypeDefinition<any>,
  value: any,
): any {
  // if there's no possibility of conversion, skip the whole thing
  if (!requiresConversion(dataType)) {
    return value;
  }

  // handle multiplicity
  if (dataType.multiplicity !== false) {
    const withoutMultiplicity = { ...dataType, multiplicity: false };
    return value.map((v: any) =>
      queryClientToWireDataValue(withoutMultiplicity, v)
    );
  }

  switch (dataType.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
      return value;

    case "attachment":
      return attachmentClientToWire(value);

    case "timestamp":
      return timestampClientToWire(value);

    case "twoDimensionalAggregation":
      return twoDimensionalAggregationClientToWire(value);

    case "threeDimensionalAggregation":
      return threeDimensionalAggregationClientToWire(value);

    case "object":
      return objectClientToWire(value);

    case "objectSet":
      return objectSetClientToWire(value);

    case "set":
      return Array.from(
        value,
        (d) => queryClientToWireDataValue(dataType.set, d),
      );

    case "struct":
      return Object.fromEntries(
        Object.entries(value).map((
          [key, value],
        ) => [key, queryClientToWireDataValue(dataType.struct[key], value)]),
      );

    case "union":
      throw new Error("union type is not supported");

    default:
      const _: never = dataType;
      return value;
  }
}

function requiresConversion(dataType: QueryDataTypeDefinition<any>) {
  switch (dataType.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
      return false;

    case "object":
    case "timestamp":
    case "union":
    case "attachment":
    case "objectSet":
    case "twoDimensionalAggregation":
    case "threeDimensionalAggregation":
      return true;

    case "struct":
      return Object.values(dataType.struct).some(requiresConversion);

    case "set":
      return requiresConversion(dataType.set);

    default:
      const _: never = dataType;
      return false;
  }
}
