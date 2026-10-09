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

import type {
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";

import {
  createDerivedPropertyFromDefinition,
  createWithPropertiesObjectSet,
} from "../../derivedProperties/createWithPropertiesObjectSet.js";
import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";
import { ObjectSetCanonicalizer } from "./objectset/ObjectSetCanonicalizer.js";

export type Rdp = DerivedProperty.Clause<ObjectOrInterfaceDefinition>;

export class RdpCanonicalizer extends CachingCanonicalizer<Rdp, Rdp> {
  private structuralCache = new Map<
    Canonical<Record<string, DerivedPropertyDefinition>>,
    Canonical<Rdp>
  >();

  private builderCache = new Map<
    Canonical<Record<string, DerivedPropertyDefinition>>,
    Canonical<Rdp>
  >();
  private typedInputCache = new WeakMap<Rdp, Map<string, Canonical<Rdp>>>();

  constructor(private objectSetCanonicalizer = new ObjectSetCanonicalizer()) {
    super();
  }

  canonicalizeDefinitions(
    definitions: Record<string, DerivedPropertyDefinition>,
  ): Canonical<Rdp> {
    // Create a canonical key for the computed definitions
    const canonicalDefinitions =
      this.objectSetCanonicalizer.canonicalizeDerivedProperties(definitions);

    // Check if we already have a canonical RDP for these definitions
    let canonical = this.structuralCache.get(canonicalDefinitions);

    if (!canonical) {
      // Sort entries by key for consistent ordering
      const sortedKeys = Object.keys(canonicalDefinitions).sort();

      // Create a canonical RDP object with sorted keys
      const sortedRdp: Rdp = {};
      for (const key of sortedKeys) {
        sortedRdp[key] = (builder) =>
          createDerivedPropertyFromDefinition(
            builder,
            canonicalDefinitions[key],
          );
      }
      canonical = sortedRdp as Canonical<Rdp>;
      this.structuralCache.set(canonicalDefinitions, canonical);
    }

    return canonical;
  }

  canonicalizeForType(
    rdp: Rdp,
    type: ObjectOrInterfaceDefinition,
  ): Canonical<Rdp> {
    let inputs = this.typedInputCache.get(rdp);
    if (!inputs) this.typedInputCache.set(rdp, (inputs = new Map()));
    const key = `${type.type}:${type.apiName}`;
    let canonical = inputs.get(key);
    if (!canonical) {
      canonical = this.canonicalizeDefinitions(this.getDefinitions(rdp, type));
      inputs.set(key, canonical);
    }
    return canonical;
  }

  protected lookupOrCreate(rdp: Rdp): Canonical<Rdp> {
    // Create a wrapper holding object type for the builder to let us extract the definition structure
    const objectTypeHolder = {
      type: "object" as const,
      apiName: "__rdp_canonicalizer_holder__",
    } as ObjectOrInterfaceDefinition;
    const definitions =
      this.objectSetCanonicalizer.canonicalizeDerivedProperties(
        this.getDefinitions(rdp, objectTypeHolder),
      );
    let canonical = this.builderCache.get(definitions);
    if (!canonical) {
      canonical = Object.fromEntries(
        Object.keys(rdp)
          .sort()
          .map((key) => [key, rdp[key]]),
      ) as Canonical<Rdp>;
      this.builderCache.set(definitions, canonical);
    }
    return canonical;
  }

  private getDefinitions(
    rdp: Rdp,
    type: ObjectOrInterfaceDefinition,
  ): Record<string, DerivedPropertyDefinition> {
    // Map from builder result symbols to their definitions
    const definitionMap = new Map<
      DerivedProperty.Definition<
        SimplePropertyDef,
        ObjectOrInterfaceDefinition
      >,
      DerivedPropertyDefinition
    >();
    const computedProperties: Record<string, DerivedPropertyDefinition> = {};
    for (const [key, rdpFunction] of Object.entries(rdp)) {
      const builder = createWithPropertiesObjectSet(
        type,
        { type: "methodInput" },
        definitionMap,
        /* fromBaseObjectSet */ true,
      );
      const result = rdpFunction(builder);
      const definition = definitionMap.get(result);
      if (definition) computedProperties[key] = definition;
    }
    return computedProperties;
  }
}
