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
import { consola } from "consola";

import type { LinkApiNames, LinkTargets } from "./linkTypes.js";
import { type SchemaMap, schemaFromMetadata } from "./schema.js";
import { SeedError } from "./SeedError.js";
import type { SeedOutput, SeedProps, SeedRef } from "./types.js";
import { validateSeedObjects } from "./validation.js";

interface SeedLinkRecord {
  source: SeedRef<ObjectTypeDefinition>;
  apiName: string;
  target: SeedRef<ObjectTypeDefinition>;
}

function linkIdentity(
  source: SeedRef<ObjectTypeDefinition>,
  apiName: string,
  target: SeedRef<ObjectTypeDefinition>
): string {
  return [
    source.$locator.apiName,
    String(source.$locator.primaryKeyValue),
    apiName,
    target.$locator.apiName,
    String(target.$locator.primaryKeyValue),
  ].join(":");
}

export class SeedBuilder {
  #schemaMap: SchemaMap;
  #objectMap: Map<string, Map<string, SeedProps<ObjectTypeDefinition>>>;
  #links: Map<string, SeedLinkRecord>;
  #warnings: string[];

  /**
   * Creates a seed builder backed by the given schema map.
   * @param schemaMap Schema map derived from ontology metadata
   */
  constructor(schemaMap: SchemaMap) {
    this.#schemaMap = schemaMap;
    this.#objectMap = new Map();
    this.#links = new Map();
    this.#warnings = [];
  }

  /**
   * Creates a derived seed from an existing seed output. Must match the schema map metadata supplied at construction.
   * @param seed Seed output to derive from
   */
  from(seed: SeedOutput): void {
    const objectEntries = Object.entries(seed.objects).flatMap(
      ([apiName, objects]) => objects.map((o) => [apiName, o] as const)
    );
    for (const [apiName, object] of objectEntries) {
      this.create(
        {
          type: "object",
          apiName,
        },
        object
      );
    }
    const linkEntries = seed.links;
    for (const link of linkEntries) {
      const sourceRef = this.ref(
        {
          type: "object",
          apiName: link.sourceObjectType,
        },
        link.sourceKey
      );
      const targetRef = this.ref(
        {
          type: "object",
          apiName: link.targetObjectType,
        },
        link.targetKey
      );
      if (!sourceRef) {
        this.#warnings.push(
          `Source reference to ${link.sourceObjectType} of key ${link.sourceKey} was not found. Omitting link.`
        );
        continue;
      }
      if (!targetRef) {
        this.#warnings.push(
          `Target reference to ${link.targetObjectType} of key ${link.targetKey} was not found. Omitting link.`
        );
        continue;
      }
      this.#recordLink(sourceRef, link.linkType, targetRef);
    }
  }

  /**
   * Returns a reference to a previously created object, or `undefined` if none exists.
   * @param o Object type definition
   * @param primaryKey Primary key value of the object
   * @returns Reference to the object, or `undefined` if not found
   */
  ref<Q extends ObjectTypeDefinition>(
    o: Q,
    primaryKey: PrimaryKeyType<Q>
  ): SeedRef<Q> | undefined {
    const object = this.#getObjectTypeMap(o.apiName).get(String(primaryKey)) as
      | SeedProps<Q>
      | undefined;
    if (!object) {
      return;
    }
    return Object.freeze({
      $locator: {
        apiName: o.apiName,
        primaryKeyValue: primaryKey,
      },
      ...object,
    }) as SeedRef<Q>;
  }

  /**
   * Creates an object of the given type, returning a reference to it.
   * @param o Object type definition
   * @param props Object properties, including its primary key
   * @returns Reference to the created object
   */
  create<Q extends ObjectTypeDefinition>(
    o: Q,
    props: SeedProps<Q>
  ): SeedRef<Q> {
    const schema = this.#schemaMap.objects.get(o.apiName);
    if (typeof schema === "undefined") {
      throw new SeedError("Object not found in metadata");
    }
    const primaryKeyValue = props[
      schema.primaryKeyApiName as keyof typeof props
    ] as PrimaryKeyType<Q>;
    const stringPrimaryKeyValue = String(primaryKeyValue);
    if (this.#getObjectTypeMap(o.apiName).has(stringPrimaryKeyValue)) {
      this.#warnings.push(
        `Creating ${o.apiName} with primary key ${stringPrimaryKeyValue} which already exists. This will overwrite the existing creation.`
      );
    }
    this.#getObjectTypeMap(o.apiName).set(stringPrimaryKeyValue, props);
    return Object.freeze({
      $locator: {
        apiName: o.apiName,
        primaryKeyValue,
      },
      ...props,
    }) as SeedRef<Q>;
  }

  /**
   * Overwrites the props of the referenced object, keeping its primary key.
   * @param ref Reference to the object to update
   * @param props New object properties, excluding the primary key
   * @returns The same reference passed in
   */
  update<Q extends ObjectTypeDefinition>(
    ref: SeedRef<Q>,
    props: Q extends ObjectTypeDefinition
      ? Omit<SeedProps<Q>, Exclude<Q["primaryKeyApiName"], undefined>>
      : SeedProps<Q>
  ): SeedRef<Q> {
    const { apiName, primaryKeyValue } = ref.$locator;
    const schema = this.#schemaMap.objects.get(apiName);
    if (typeof schema === "undefined") {
      throw new SeedError("Object not found in metadata");
    }
    const stringPrimaryKeyValue = String(primaryKeyValue);
    if (!this.#getObjectTypeMap(apiName).has(stringPrimaryKeyValue)) {
      this.#warnings.push(
        `Updating ${apiName} with primary key ${stringPrimaryKeyValue} which does not exist. This will create the object regardless.`
      );
    }
    this.#getObjectTypeMap(apiName).set(stringPrimaryKeyValue, {
      ...props,
      [schema.primaryKeyApiName]: primaryKeyValue,
    });
    return ref;
  }

  /**
   * Removes the referenced object from the seed.
   * @param ref Reference to the object to delete
   */
  delete<Q extends ObjectTypeDefinition>(ref: SeedRef<Q>): void {
    const { apiName, primaryKeyValue } = ref.$locator;
    const schema = this.#schemaMap.objects.get(apiName);
    if (typeof schema === "undefined") {
      throw new SeedError("Object not found in metadata");
    }
    const stringPrimaryKeyValue = String(primaryKeyValue);
    if (!this.#getObjectTypeMap(apiName).delete(stringPrimaryKeyValue)) {
      this.#warnings.push(
        `Deleting ${apiName} with primary key ${stringPrimaryKeyValue} which does not exist. This will be a no-op.`
      );
      return;
    }
  }

  /**
   * Links the source object to one or more targets via the given link type.
   * @param source Reference to the source object
   * @param apiName Link type API name
   * @param target Reference (or references) to the target object(s)
   */
  link<Q extends ObjectTypeDefinition, A extends LinkApiNames<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>
  ): void {
    const targets = (Array.isArray(target) ? target : [target]) as Array<
      SeedRef<ObjectTypeDefinition>
    >;
    for (const t of targets) {
      this.#recordLink(source, apiName, t);
    }
  }

  #recordLink(
    source: SeedRef<ObjectTypeDefinition>,
    apiName: string,
    target: SeedRef<ObjectTypeDefinition>
  ): void {
    this.#links.set(linkIdentity(source, apiName, target), {
      source,
      apiName,
      target,
    });
  }

  /**
   * Removes links from the source object to the given targets via the link type.
   * @param source Reference to the source object
   * @param apiName Link type API name
   * @param target Reference (or references) to the target object(s)
   */
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
        `Unlinking ${source.$locator.apiName} with primary key ${String(
          source.$locator.primaryKeyValue
        )} via '${apiName}' which matches no existing links. This will be a no-op.`
      );
    }
  }

  /**
   * Validates the accumulated objects and links and returns the seed output.
   * @returns The built seed output
   */
  build(): SeedOutput {
    const objects: SeedOutput["objects"] = {};
    const entries = this.#objectMap.entries();
    let nextEntry = entries.next();
    while (!nextEntry.done) {
      const objectTypeApiName = nextEntry.value[0];
      objects[objectTypeApiName] = [];
      const objectMap = nextEntry.value[1];
      const objectEntries = objectMap.entries();
      let nextObjectEntry = objectEntries.next();
      while (!nextObjectEntry.done) {
        objects[objectTypeApiName].push(nextObjectEntry.value[1]);
        nextObjectEntry = objectEntries.next();
      }
      nextEntry = entries.next();
    }
    const links: SeedOutput["links"] = [];
    const linkEntries = this.#links.entries();
    let nextLink = linkEntries.next();
    while (!nextLink.done) {
      const [key, value] = nextLink.value;
      links.push({
        name: key,
        sourceObjectType: value.source.$locator.apiName,
        sourceKey: String(value.source.$locator.primaryKeyValue),
        linkType: value.apiName,
        targetObjectType: value.target.$locator.apiName,
        targetKey: String(value.target.$locator.primaryKeyValue),
      });
      nextLink = linkEntries.next();
    }
    for (const warning of this.#warnings) {
      consola.warn(warning);
    }
    validateSeedObjects(objects, this.#schemaMap);
    return { objects, links } as SeedOutput;
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

/**
 * Utility handle for building seeds from a metadata
 * @param ontologyMetadata Ontology metadata to instantiate seed builder from
 * @param fn handle to create seeds, may return an arbitrary value
 * @returns Tuple of [SeedOutput, T]: Seed output and arbitrary value returned from fn
 */
export function createSeed<T>(
  ontologyMetadata: Ontology.OntologyFullMetadata,
  fn: (seed: SeedBuilder) => T
): [SeedOutput, T] {
  const sb = new SeedBuilder(schemaFromMetadata(ontologyMetadata));
  const result = fn(sb);
  return [sb.build(), result];
}
