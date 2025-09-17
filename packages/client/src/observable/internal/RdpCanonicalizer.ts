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
import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";
import { WeakRefTrie } from "./WeakRefTrie.js";

type DerivedPropertyCreator<
  Q extends ObjectOrInterfaceDefinition,
  T extends SimplePropertyDef,
> = (
  baseObjectSet: DerivedProperty.Builder<Q, false>,
) =>
  | DerivedProperty.Definition<T, Q>
  | DerivedProperty.NumericPropertyDefinition<T, Q>
  | DerivedProperty.DatetimePropertyDefinition<T, Q>;

export type Rdp<T = DerivedPropertyCreator<any, any>> = Record<string, T>;

export class RdpCanonicalizer extends CachingCanonicalizer<Rdp, Rdp> {
  private structuralCache = new WeakRefTrie<Canonical<Rdp>>(
    (array: any[]) => {
      // Reconstruct RDP from flattened key-value pairs
      const pairs: Array<[string, any]> = [];
      for (let i = 0; i < array.length; i += 2) {
        if (i + 1 < array.length) {
          pairs.push([array[i], array[i + 1]]);
        }
      }
      const data = Object.fromEntries(pairs);
      return data as Canonical<Rdp>;
    },
  );

  protected lookupOrCreate(rdp: Rdp): Canonical<Rdp> {
    // Extract sorted keys and their function references as trie path
    // This ensures that RDPs with same structure but different key order
    // map to the same canonical form
    const sortedEntries = Object.entries(rdp).sort(([a], [b]) =>
      a.localeCompare(b)
    );
    return this.structuralCache.lookupArray(sortedEntries.flat());
  }
}
