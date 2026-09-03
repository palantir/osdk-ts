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

import type {
  ObjectTypeDefinition,
  OsdkBase,
  PrimaryKeyType,
  LinkTypeApiNamesFor,
} from "@osdk/api";
import { createObjectSpecifierFromPrimaryKey } from "@osdk/client";
import type * as Ontology from "@osdk/foundry.ontologies";
import { consola } from "consola";
import invariant from "tiny-invariant";

import type { LinkTargets } from "./linkTypes.js";
import type { SeedOutput, SeedProps, SeedRef } from "./types.js";
import { validateSeedObject } from "./validation.js";

export type SeedFunction<T> = (seed: SeedBuilder) => T;

interface SeedLinkRecord {
  source: SeedRef<ObjectTypeDefinition>;
  apiName: string;
  target: SeedRef<ObjectTypeDefinition>;
}

function linkIdentity(
  source: SeedRef<ObjectTypeDefinition>,
  apiName: string,
  target: SeedRef<ObjectTypeDefinition>,
): string {
  return [
    source.$apiName,
    String(source.$primaryKey),
    apiName,
    target.$apiName,
    String(target.$primaryKey),
  ].join(":");
}

export class SeedBuilder {
  #metadata: Ontology.OntologyFullMetadata;
  #objectMap: Map<string, Map<string, SeedProps<ObjectTypeDefinition>>>;
  #links: Map<string, SeedLinkRecord>;

  /**
   * Creates a seed builder backed by the given ontology metadata.
   * @param metadata Ontology full metadata describing the object types
   */
  constructor(metadata: Ontology.OntologyFullMetadata) {
    this.#metadata = metadata;
    this.#objectMap = new Map();
    this.#links = new Map();
    for (const { objectType } of Object.values(metadata.objectTypes)) {
      invariant(
        Object.hasOwn(objectType.properties, objectType.primaryKey),
        `[${objectType.apiName}] Primary key '${objectType.primaryKey}' is not among the object's properties`,
      );
    }
  }

  #reset() {
    this.#objectMap = new Map();
    this.#links = new Map();
  }

  /**
   * Resolves the object type metadata for `apiName`.
   * @throws if the object type is not present in the metadata
   */
  #objectType(apiName: string): Ontology.ObjectTypeV2 {
    const full = this.#metadata.objectTypes[apiName];
    invariant(
      full,
      () => `Object type '${apiName}' is not defined in the ontology`,
    );
    return full.objectType;
  }

  /**
   * Merges an existing seed output. Must match the metadata supplied at construction.
   * @param seed Seed output to derive from
   */
  addAll(seed: SeedOutput): void {
    const objectEntries = Object.entries(seed.objects).flatMap(
      ([apiName, objects]) => objects.map((o) => [apiName, o] as const),
    );
    for (const [apiName, object] of objectEntries) {
      this.create(
        {
          type: "object",
          apiName,
        },
        object,
      );
    }
    const linkEntries = seed.links;
    for (const link of linkEntries) {
      const sourceRef = this.#ref(
        {
          type: "object",
          apiName: link.sourceObjectType,
        },
        link.sourceKey,
      );
      const targetRef = this.#ref(
        {
          type: "object",
          apiName: link.targetObjectType,
        },
        link.targetKey,
      );
      this.#recordLink(sourceRef, link.linkType, targetRef);
    }
  }

  /**
   * Set the current state to the provided seed.
   * @param seed Seed output to reset to. Resets the seed builder if undefined.
   */
  set(seed?: SeedOutput): void {
    this.#reset();
    if (typeof seed !== "undefined") {
      this.addAll(seed);
    }
  }

  /**
   * Returns a SeedRef<Q> regardless of the existence of the object.
   * @param o Object Type
   * @param primaryKey
   * @returns SeedRef<Q>
   */
  #ref<Q extends ObjectTypeDefinition>(
    o: Q,
    primaryKey: PrimaryKeyType<Q>,
  ): SeedRef<Q> {
    const objectType = this.#objectType(o.apiName);
    const props = this.#getObjectTypeMap(o.apiName).get(String(primaryKey)) as
      | SeedProps<Q>
      | undefined;
    const base: OsdkBase<Q> = {
      $apiName: o.apiName,
      $objectSpecifier: createObjectSpecifierFromPrimaryKey(o, primaryKey),
      $objectType: o.apiName,
      $primaryKey: primaryKey,
      $title: props?.[objectType.titleProperty as keyof typeof props],
    };
    return Object.freeze({
      ...base,
      ...props,
    }) as SeedRef<Q>;
  }

  /**
   * Returns a reference to a previously created object, or `undefined` if none exists.
   * @param o Object type definition
   * @param primaryKey Primary key value of the object
   * @returns Reference to the object, or `undefined` if not found
   */
  ref<Q extends ObjectTypeDefinition>(
    o: Q,
    primaryKey: PrimaryKeyType<Q>,
  ): SeedRef<Q> | undefined {
    if (!this.#getObjectTypeMap(o.apiName).has(String(primaryKey))) {
      return;
    }
    return this.#ref(o, primaryKey);
  }

  /**
   * Creates an object of the given type, returning a reference to it.
   * @param o Object type definition
   * @param props Object properties, including its primary key
   * @returns Reference to the created object
   */
  create<Q extends ObjectTypeDefinition>(
    o: Q,
    props: SeedProps<Q>,
  ): SeedRef<Q> {
    const objectType = this.#objectType(o.apiName);
    const primaryKeyValue = props[
      objectType.primaryKey as keyof typeof props
    ] as PrimaryKeyType<Q>;
    const stringPrimaryKeyValue = String(primaryKeyValue);
    invariant(
      !this.#getObjectTypeMap(o.apiName).has(stringPrimaryKeyValue),
      `${o.apiName} with primary key ${stringPrimaryKeyValue} already exists.`,
    );
    validateSeedObject(props as Record<string, unknown>, objectType);
    this.#getObjectTypeMap(o.apiName).set(stringPrimaryKeyValue, props);
    const base: OsdkBase<Q> = {
      $apiName: o.apiName,
      $objectSpecifier: createObjectSpecifierFromPrimaryKey(o, primaryKeyValue),
      $objectType: o.apiName,
      $primaryKey: primaryKeyValue,
      $title: props[objectType.titleProperty as keyof typeof props],
    };
    return Object.freeze({
      ...base,
      ...props,
    }) as SeedRef<Q>;
  }

  /**
   * Merges the given props into the referenced object, keeping its primary key.
   * Properties not included in `props` are left unchanged; if the object does
   * not yet exist it is created from `props`.
   * @param ref Reference to the object to update
   * @param props Partial object properties to merge in, excluding the primary key
   * @returns The same reference passed in
   */
  update<Q extends ObjectTypeDefinition>(
    ref: SeedRef<Q>,
    props: Partial<
      Omit<SeedProps<Q>, Exclude<Q["primaryKeyApiName"], undefined>>
    >,
  ): SeedRef<Q> {
    const { $apiName, $primaryKey } = ref;
    const objectType = this.#objectType($apiName);
    const stringPrimaryKeyValue = String($primaryKey);
    const currentValue = this.#getObjectTypeMap($apiName).get(
      stringPrimaryKeyValue,
    );
    if (!currentValue) {
      consola.warn(
        `Updating ${$apiName} with primary key ${stringPrimaryKeyValue} which does not exist. This will create the object regardless.`,
      );
    }
    invariant(
      typeof props[objectType.primaryKey as keyof typeof props] === "undefined",
      `Cannot modify primary key ${objectType.primaryKey}`,
    );
    const merged = {
      ...currentValue,
      ...props,
      [objectType.primaryKey]: $primaryKey,
    };
    validateSeedObject(merged as Record<string, unknown>, objectType);
    this.#getObjectTypeMap($apiName).set(stringPrimaryKeyValue, merged);
    return ref;
  }

  /**
   * Removes the referenced object from the seed.
   * @param ref Reference to the object to delete
   */
  delete<Q extends ObjectTypeDefinition>(ref: SeedRef<Q>): void {
    const { $apiName, $primaryKey } = ref;
    this.#objectType($apiName);
    const stringPrimaryKeyValue = String($primaryKey);
    if (!this.#getObjectTypeMap($apiName).delete(stringPrimaryKeyValue)) {
      consola.warn(
        `Deleting ${$apiName} with primary key ${stringPrimaryKeyValue} which does not exist. This will be a no-op.`,
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
  link<Q extends ObjectTypeDefinition, A extends LinkTypeApiNamesFor<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>,
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
    target: SeedRef<ObjectTypeDefinition>,
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
  unlink<Q extends ObjectTypeDefinition, A extends LinkTypeApiNamesFor<Q>>(
    source: SeedRef<Q>,
    apiName: A,
    target: LinkTargets<Q, A>,
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
      consola.warn(
        `Unlinking ${source.$apiName} with primary key ${String(
          source.$primaryKey,
        )} via '${apiName}' which matches no existing links. This will be a no-op.`,
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
        sourceObjectType: value.source.$apiName,
        sourceKey: String(value.source.$primaryKey),
        linkType: value.apiName,
        targetObjectType: value.target.$apiName,
        targetKey: String(value.target.$primaryKey),
      });
      nextLink = linkEntries.next();
    }
    return { objects, links } as SeedOutput;
  }

  #getObjectTypeMap(
    objectTypeApiName: string,
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
export function createSeedWithMetadata<T>(
  ontologyMetadata: Ontology.OntologyFullMetadata,
  fn: SeedFunction<T>,
): {
  output: SeedOutput;
  context: T;
} {
  const sb = new SeedBuilder(ontologyMetadata);
  const context = fn(sb);
  return {
    output: sb.build(),
    context,
  };
}
