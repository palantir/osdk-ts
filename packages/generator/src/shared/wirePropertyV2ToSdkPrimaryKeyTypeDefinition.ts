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

import type { ValidPropertyTypes } from "@osdk/api";
import type { PropertyV2 } from "@osdk/gateway/types";

export function wirePropertyV2ToSdkPrimaryKeyTypeDefinition(
  input: PropertyV2,
): keyof ValidPropertyTypes {
  switch (input.dataType.type) {
    case "integer":
    case "double":
    case "string":
    case "boolean":
    case "attachment":
    case "byte":
    case "decimal":
    case "float":
    case "geopoint":
    case "geoshape":
    case "long":
    case "short": {
      return input.dataType.type;
    }
    case "date": {
      return "datetime";
    }
    case "timestamp": {
      return "timestamp";
    }
    case "timeseries":
    case "array":
      throw new Error(
        `Type not supported for primaryKey: ${input.dataType.type}`,
      );
    default:
      const _: never = input.dataType;
      throw new Error(
        `Unknown type encountered for primaryKey: ${input.dataType}`,
      );
  }
}
