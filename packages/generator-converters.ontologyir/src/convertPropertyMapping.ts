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

import type { PropertyTypeMappingInfo } from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

import type { ApiName } from "./ApiName.js";

/**
 * Converts a datasource's `PropertyTypeMappingInfo` map (the shared IR/block-data
 * mapping union) into the wire `PropertyTypeMappingInfo` map. Keys are normalized
 * to property api names via `toApiName` — the IR keys by api name (identity
 * default) while block-data keys by property rid.
 */
export function convertPropertyMapping(
  mapping: Record<string, PropertyTypeMappingInfo>,
  toApiName: (key: string) => string,
): Record<ApiName, Ontologies.PropertyTypeMappingInfo> {
  const result: Record<ApiName, Ontologies.PropertyTypeMappingInfo> = {};
  for (const [key, info] of Object.entries(mapping)) {
    result[toApiName(key)] = convertMappingInfo(info);
  }
  return result;
}

/**
 * Converts a legacy datasource's plain column-name map (property key -> column
 * name) into the wire `PropertyTypeMappingInfo` map, wrapping each entry as a
 * `column` mapping. Keys are normalized to property api names via `toApiName` —
 * the IR keys by api name (identity default) while block-data keys by property
 * rid.
 */
export function convertColumnMapping(
  mapping: Record<string, string>,
  toApiName: (key: string) => string,
): Record<ApiName, Ontologies.PropertyTypeMappingInfo> {
  const result: Record<ApiName, Ontologies.PropertyTypeMappingInfo> = {};
  for (const [key, column] of Object.entries(mapping)) {
    result[toApiName(key)] = { type: "column", column };
  }
  return result;
}
function convertMappingInfo(
  info: PropertyTypeMappingInfo,
): Ontologies.PropertyTypeMappingInfo {
  switch (info.type) {
    case "column":
      return { type: "column", column: info.column };
    case "editOnly":
      return { type: "editOnly" };
    case "struct": {
      const fields: Record<string, { apiName: string }> = {};
      for (const [fieldName, nested] of Object.entries(info.struct.mapping)) {
        fields[fieldName] = { apiName: nested.apiName };
      }
      return { type: "struct", column: info.struct.column, fields };
    }
  }
}
