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

import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";

export type Rdp<T = any> = Record<string, T>;

/**
 * Canonicalizes RDP definitions to unique identifiers
 * Maps structurally identical RDP definitions to the same canonical ID
 */
export class RdpCanonicalizer extends CachingCanonicalizer<
  DerivedPropertyDefinition,
  string
> {
  private definitionCache = new Map<string, Canonical<string>>();

  protected lookupOrCreate(
    definition: DerivedPropertyDefinition,
  ): Canonical<string> {
    const definitionString = this.serializeDefinition(definition);
    let canonicalId = this.definitionCache.get(definitionString);

    if (!canonicalId) {
      const hash = this.simpleHash(definitionString);
      const id = `rdp_${hash}`;
      canonicalId = id as Canonical<string>;
      this.definitionCache.set(definitionString, canonicalId);
    }

    return canonicalId;
  }

  /**
   * Simple synchronous hash function using djb2 algorithm
   * This is sufficient for our use case of generating unique IDs
   */
  private simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    // Convert to 32bit unsigned integer in base 36 and pad with "0" to ensure length is 7.
    return (hash >>> 0).toString(36).padStart(7, "0");
  }

  /**
   * Creates a deterministic string representation of a DerivedPropertyDefinition
   * This ensures structurally identical definitions map to the same string
   */
  private serializeDefinition(def: DerivedPropertyDefinition): string {
    return JSON.stringify(def, (_key, value) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        return Object.keys(value)
          .sort()
          .reduce<any>((sorted, k) => {
            sorted[k] = value[k];
            return sorted;
          }, {});
      }
      return value;
    });
  }
}
