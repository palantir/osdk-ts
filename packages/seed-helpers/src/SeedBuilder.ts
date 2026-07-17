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

import type { ObjectTypeDefinition, PrimaryKeyType } from "@osdk/api";
import type * as Ontology from "@osdk/foundry.ontologies";

import type { LinkApiNames, LinkTargets } from "./linkTypes.js";
import { SeedError } from "./SeedError.js";
import type { SeedOutput, SeedProps } from "./types.js";

export interface SeedRef<Q extends ObjectTypeDefinition> {
  __locator: {
    apiName: string;
    primaryKeyValue: PrimaryKeyType<Q>;
  };
}

interface SeedLinkRecord {
  source: SeedRef<ObjectTypeDefinition>;
  apiName: string;
  target: SeedRef<ObjectTypeDefinition>;
}

/**
 * Stable identity for a (source, apiName, target) triple so link records can be
 * compared for equality when unlinking. The null-byte separator avoids
 * collisions between concatenated apiName / primary-key segments — a primary key
 * containing the separator character could otherwise alias a different triple.
 */
function linkIdentity(
  source: SeedRef<ObjectTypeDefinition>,
  apiName: string,
  target: SeedRef<ObjectTypeDefinition>
): string {
  return [
    source.__locator.apiName,
    String(source.__locator.primaryKeyValue),
    apiName,
    target.__locator.apiName,
    String(target.__locator.primaryKeyValue),
  ].join("\0");
}

interface ObjectTypeSchema {
  properties: Map<string, Ontology.ObjectPropertyType["type"]>;
  primaryKeyApiName: string;
}
type SchemaMap = Map<string, ObjectTypeSchema>;

function schemaFromMetadata(
  metadata: Ontology.OntologyFullMetadata
): SchemaMap {
  const map: SchemaMap = new Map();

  for (const [apiName, full] of Object.entries(metadata.objectTypes)) {
    const ot = full.objectType;

    const properties = new Map<string, Ontology.ObjectPropertyType["type"]>();
    for (const [propApiName, prop] of Object.entries(ot.properties)) {
      properties.set(propApiName, prop.dataType.type);
    }

    const primaryKeyWireType = properties.get(ot.primaryKey);
    if (primaryKeyWireType === undefined) {
      throw new SeedError(
        `[${apiName}] Primary key '${ot.primaryKey}' is not among the object's properties`
      );
    }

    map.set(apiName, {
      properties,
      primaryKeyApiName: ot.primaryKey,
    });
  }

  return map;
}

export class SeedBuilder {
  #schemaMap: SchemaMap;
  #objectMap: Map<string, Map<string, SeedProps<ObjectTypeDefinition>>>;
  #links: Map<string, SeedLinkRecord>;
  #warnings: string[];

  constructor(schemaMap: SchemaMap) {
    this.#schemaMap = schemaMap;
    this.#objectMap = new Map();
    this.#links = new Map();
    this.#warnings = [];
  }

  ref<Q extends ObjectTypeDefinition>(
    o: Q,
    primaryKey: PrimaryKeyType<Q>
  ): SeedRef<Q> | undefined {
    if (!this.#getObjectTypeMap(o.apiName).get(String(primaryKey))) {
      return;
    }
    return Object.freeze({
      __locator: {
        apiName: o.apiName,
        primaryKeyValue: primaryKey,
      },
    });
  }

  create<Q extends ObjectTypeDefinition>(
    o: Q,
    props: SeedProps<Q>
  ): SeedRef<Q> {
    const schema = this.#schemaMap.get(o.apiName);
    if (typeof schema === "undefined") {
      throw new SeedError("Object not found in metadata");
    }
    const primaryKeyValue = props[
      schema.primaryKeyApiName as keyof typeof props
    ] as PrimaryKeyType<Q>;
    const stringPrimaryKeyValue = String(primaryKeyValue);
    if (this.#getObjectTypeMap(o.apiName).has(stringPrimaryKeyValue)) {
      this.#warnings.push(
        `Warning: creating ${o.apiName} with primary key ${stringPrimaryKeyValue} which already exists. This will overwrite the existing creation.`
      );
    }
    this.#getObjectTypeMap(o.apiName).set(stringPrimaryKeyValue, props);
    return Object.freeze({
      __locator: {
        apiName: o.apiName,
        primaryKeyValue,
      },
    });
  }

  update<Q extends ObjectTypeDefinition>(
    ref: SeedRef<Q>,
    props: Omit<SeedProps<Q>, Exclude<Q["primaryKeyApiName"], undefined>>
  ): SeedRef<Q> {
    const { apiName, primaryKeyValue } = ref.__locator;
    const schema = this.#schemaMap.get(apiName);
    if (typeof schema === "undefined") {
      throw new SeedError("Object not found in metadata");
    }
    const stringPrimaryKeyValue = String(primaryKeyValue);
    if (!this.#getObjectTypeMap(apiName).has(stringPrimaryKeyValue)) {
      this.#warnings.push(
        `Warning: updating ${apiName} with primary key ${stringPrimaryKeyValue} which does not exist. This will create the object regardless.`
      );
    }
    this.#getObjectTypeMap(apiName).set(stringPrimaryKeyValue, {
      ...props,
      [schema.primaryKeyApiName]: primaryKeyValue,
    });
    return ref;
  }

  delete<Q extends ObjectTypeDefinition>(ref: SeedRef<Q>): void {
    const { apiName, primaryKeyValue } = ref.__locator;
    const schema = this.#schemaMap.get(apiName);
    if (typeof schema === "undefined") {
      throw new SeedError("Object not found in metadata");
    }
    const stringPrimaryKeyValue = String(primaryKeyValue);
    if (!this.#getObjectTypeMap(apiName).delete(stringPrimaryKeyValue)) {
      this.#warnings.push(
        `Warning: deleting ${apiName} with primary key ${stringPrimaryKeyValue} which does not exist. This will be a no-op.`
      );
      return;
    }
  }

  link<Q extends ObjectTypeDefinition, A extends LinkApiNames<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>
  ): void {
    const targets = (Array.isArray(target) ? target : [target]) as Array<
      SeedRef<ObjectTypeDefinition>
    >;
    for (const t of targets) {
      this.#links.set(linkIdentity(source, apiName, t), {
        source,
        apiName,
        target: t,
      });
    }
  }

  unlink<Q extends ObjectTypeDefinition, A extends LinkApiNames<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>
  ): void {
    const targets = (Array.isArray(target) ? target : [target]) as Array<
      SeedRef<ObjectTypeDefinition>
    >;
    let removed = 0;
    for (const t of targets) {
      if (this.#links.delete(linkIdentity(source, apiName, t))) {
        removed++;
      }
    }
    if (removed === 0) {
      this.#warnings.push(
        `Warning: unlinking ${source.__locator.apiName} with primary key ${String(
          source.__locator.primaryKeyValue
        )} via '${apiName}' which matches no existing links. This will be a no-op.`
      );
    }
  }

  build(): SeedOutput {
    return {} as SeedOutput;
  }

  #getObjectTypeMap(
    objectTypeApiName: string
  ): Map<string, SeedProps<ObjectTypeDefinition>> {
    if (!this.#objectMap.has(objectTypeApiName)) {
      this.#objectMap.set(objectTypeApiName, new Map());
    }
    return this.#objectMap.get(objectTypeApiName)!;
  }
}

export function createSeed(
  ontologyMetadata: Ontology.OntologyFullMetadata,
  fn: (seed: SeedBuilder) => void
): SeedOutput {
  const sb = new SeedBuilder(schemaFromMetadata(ontologyMetadata));
  fn(sb);
  return sb.build();
}
