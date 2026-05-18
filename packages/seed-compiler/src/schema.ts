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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";

/**
 * Minimal schema for one object type — only what the compiler needs.
 *
 * - `properties`: property API name → wire type (e.g. `"timestamp"`, `"long"`),
 *   used by the validator to enforce property existence, JS-type expectations,
 *   and string format regexes.
 * - `primaryKeyApiName`: PK field name (for cross-file duplicate detection in merge).
 */
export interface ObjectTypeSchema {
  properties: Map<string, string>;
  primaryKeyApiName: string;
}

/** Maps object type API name → its schema. */
export type SchemaMap = Map<string, ObjectTypeSchema>;

/**
 * Builds a {@link SchemaMap} from an `OntologyFullMetadata` document — the
 * shape produced by the OSDK SDK generator and serialized to
 * `ontology-metadata.json` alongside the generated `@ontology/sdk` package.
 *
 * Only `objectTypes` are read; the other top-level fields (action types,
 * query types, interfaces, etc.) are not relevant to seed validation.
 */
export function schemaFromMetadata(
  metadata: OntologyFullMetadata,
): SchemaMap {
  const map: SchemaMap = new Map();

  for (const [apiName, full] of Object.entries(metadata.objectTypes)) {
    const ot = full.objectType;

    const properties = new Map<string, string>();
    for (const [propApiName, prop] of Object.entries(ot.properties)) {
      properties.set(propApiName, prop.dataType.type);
    }

    map.set(apiName, {
      properties,
      primaryKeyApiName: ot.primaryKey,
    });
  }

  return map;
}
