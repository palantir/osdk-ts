/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type * as Ontology from "@osdk/foundry.ontologies";

import { SeedError } from "./SeedError.js";

/**
 * Minimal schema for one object type — only what the {@link SeedBuilder} needs
 * to derive primary keys and validate property values.
 */
export interface ObjectTypeSchema {
  properties: Map<string, Ontology.ObjectPropertyType["type"]>;
  primaryKeyApiName: string;
}

export interface InterfaceTypeSchema {
  properties: Map<
    string,
    Ontology.ResolvedInterfacePropertyType["dataType"]["type"]
  >;
}

/** Maps object type API name → its schema. */
export type SchemaMap = {
  objects: Map<string, ObjectTypeSchema>;
};

/**
 * Builds a {@link SchemaMap} from an `OntologyFullMetadata` document — the
 * shape produced by the OSDK SDK generator and serialized to
 * `ontology-metadata.json` alongside the generated `@osdk/*` SDK package.
 *
 * @throws {SeedError} if an object type's primary key is not among its
 *         declared properties.
 */
export function schemaFromMetadata(
  metadata: Ontology.OntologyFullMetadata
): SchemaMap {
  const map: SchemaMap = {
    objects: new Map(),
  };

  for (const [apiName, full] of Object.entries(metadata.objectTypes)) {
    const ot = full.objectType;

    const properties: ObjectTypeSchema["properties"] = new Map();
    for (const [propApiName, prop] of Object.entries(ot.properties)) {
      properties.set(propApiName, prop.dataType.type);
    }

    const primaryKeyWireType = properties.get(ot.primaryKey);
    if (primaryKeyWireType === undefined) {
      throw new SeedError(
        `[${apiName}] Primary key '${ot.primaryKey}' is not among the object's properties`
      );
    }
    map.objects.set(apiName, {
      properties,
      primaryKeyApiName: ot.primaryKey,
    });
  }
  return map;
}
