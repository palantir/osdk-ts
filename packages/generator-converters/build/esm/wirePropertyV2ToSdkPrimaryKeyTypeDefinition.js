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

export function wirePropertyV2ToSdkPrimaryKeyTypeDefinition(input) {
  switch (input.dataType.type) {
    case "integer":
    case "double":
    case "string":
    case "boolean":
    case "byte":
    case "long":
    case "short":
      {
        return input.dataType.type;
      }
    case "date":
      {
        return "datetime";
      }
    case "timestamp":
      {
        return "timestamp";
      }
    case "geopoint":
    case "geoshape":
    case "decimal":
    case "attachment":
    case "timeseries":
    case "array":
    case "marking":
    case "float":
    case "geotimeSeriesReference":
    case "mediaReference":
    case "struct":
    case "cipherText":
    case "vector":
      throw new Error(`Type not supported for primaryKey: ${input.dataType.type}`);
    default:
      input.dataType;
      throw new Error(`Unknown type encountered for primaryKey: ${input.dataType}`);
  }
}
//# sourceMappingURL=wirePropertyV2ToSdkPrimaryKeyTypeDefinition.js.map