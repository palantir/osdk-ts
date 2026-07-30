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

import { consola } from "consola";
import type { ApiName } from "./ApiName.js";

/**
 * Resolves a datasource's property reference to the api name it backs, or
 * `undefined` when it does not name a property of the object type. Callers drop
 * unresolved references: the wire keys are `PropertyApiName`, so a raw rid would
 * name a property absent from `objectType.properties`.
 */
export type ResolvePropertyApiName = (key: string) => ApiName | undefined;

/**
 * Converts a datasource's `PropertyTypeMappingInfo` map to the wire equivalent,
 * keyed by api name. Entries whose property reference does not resolve, or whose
 * mapping has no wire representation, are omitted.
 */
export function convertPropertyMapping(
  mapping: Record<string, PropertyTypeMappingInfo>,
  resolveApiName: ResolvePropertyApiName,
): Record<ApiName, Ontologies.PropertyTypeMappingInfo> {
  const result: Record<ApiName, Ontologies.PropertyTypeMappingInfo> = {};
  for (const [key, info] of Object.entries(mapping)) {
    const apiName = resolveApiName(key);
    if (apiName == null) {
      continue;
    }
    const converted = convertMappingInfo(info);
    if (converted == null) {
      continue;
    }
    result[apiName] = converted;
  }
  return result;
}

/**
 * Converts a legacy datasource's plain column-name map to the wire
 * `PropertyTypeMappingInfo` map, wrapping each entry as a `column` mapping.
 * Entries whose property reference does not resolve are omitted.
 */
export function convertColumnMapping(
  mapping: Record<string, string>,
  resolveApiName: ResolvePropertyApiName,
): Record<ApiName, Ontologies.PropertyTypeMappingInfo> {
  const result: Record<ApiName, Ontologies.PropertyTypeMappingInfo> = {};
  for (const [key, column] of Object.entries(mapping)) {
    const apiName = resolveApiName(key);
    if (apiName == null) {
      continue;
    }
    result[apiName] = { type: "column", column };
  }
  return result;
}

function convertMappingInfo(
  info: PropertyTypeMappingInfo,
): Ontologies.PropertyTypeMappingInfo | undefined {
  const sourceType: string = info.type;
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
    default: {
      // Omitted rather than guessed at; the datasource itself is still emitted.
      // The `never` guard makes a future variant a compile error here.
      const _: never = info;
      consola.warn(
        `Unknown property mapping variant "${sourceType}"; omitting the mapping.`,
      );
      return undefined;
    }
  }
}
