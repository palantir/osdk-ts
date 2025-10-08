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
import { createWithPropertiesObjectSet } from "../../derivedProperties/createWithPropertiesObjectSet.js";
import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";

export type Rdp = DerivedProperty.Clause<ObjectOrInterfaceDefinition>;

export class RdpCanonicalizer extends CachingCanonicalizer<Rdp, Rdp> {
  private structuralCache = new Map<string, Canonical<Rdp>>();

  protected lookupOrCreate(rdp: Rdp): Canonical<Rdp> {
    // Map from builder result symbols to their definitions
    const definitionMap = new Map<
      DerivedProperty.Definition<SimplePropertyDef, ObjectOrInterfaceDefinition>,
      DerivedPropertyDefinition
    >();
    const computedProperties: Record<string, DerivedPropertyDefinition> = {};

    // Create a wrapper holding object type for the builder to let us extract the definition structure
    const objectTypeHolder = {
      type: "object" as const,
      apiName: "__rdp_canonicalizer_holder__",
    } as ObjectOrInterfaceDefinition;

    for (const [key, rdpFunction] of Object.entries(rdp)) {
      const builder = createWithPropertiesObjectSet(
        objectTypeHolder,
        { type: "methodInput" },
        definitionMap,
        /* fromBaseObjectSet */ true, 
      );

      const result = rdpFunction(builder);
      const definition = definitionMap.get(result);

      if (definition) {
        computedProperties[key] = definition;
      }
    }

    // Sort entries by key for consistent ordering
    const sortedKeys = Object.keys(computedProperties).sort();

    // Create a serialized key for the computed definitions
    const sortedDefinitions: Record<string, DerivedPropertyDefinition> = {};
    for (const key of sortedKeys) {
      sortedDefinitions[key] = computedProperties[key];
    }
    const definitionsKey = JSON.stringify(sortedDefinitions);

    // Check if we already have a canonical RDP for these definitions
    let canonical = this.structuralCache.get(definitionsKey);

    if (!canonical) {
      // Create a canonical RDP object with sorted keys
      const sortedRdp: Rdp = {};
      for (const key of Object.keys(rdp).sort()) {
        sortedRdp[key] = rdp[key];
      }
      canonical = sortedRdp as Canonical<Rdp>;
      this.structuralCache.set(definitionsKey, canonical);
    }

    return canonical;
  }
}
