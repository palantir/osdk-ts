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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { getWireObjectSet } from "../../objectSet/createObjectSet.js";
import type { Canonical } from "./Canonical.js";
import { WeakRefTrie } from "./WeakRefTrie.js";

export class ObjectSetArrayCanonicalizer {
  #unionTrie = new WeakRefTrie((array: string[]) =>
    [...array] as Canonical<string[]>
  );
  #intersectTrie = new WeakRefTrie((array: string[]) =>
    [...array] as Canonical<string[]>
  );
  #subtractTrie = new WeakRefTrie((array: string[]) =>
    [...array] as Canonical<string[]>
  );

  canonicalizeUnion<T extends ObjectTypeDefinition>(
    objectSets: ObjectSet<T>[],
  ): Canonical<string[]> {
    const wires = objectSets.map(os => JSON.stringify(getWireObjectSet(os)));
    const sorted = [...wires].sort();
    return this.#unionTrie.lookupArray(sorted);
  }

  canonicalizeIntersect<T extends ObjectTypeDefinition>(
    objectSets: ObjectSet<T>[],
  ): Canonical<string[]> {
    const wires = objectSets.map(os => JSON.stringify(getWireObjectSet(os)));
    const sorted = [...wires].sort();
    return this.#intersectTrie.lookupArray(sorted);
  }

  canonicalizeSubtract<T extends ObjectTypeDefinition>(
    objectSets: ObjectSet<T>[],
  ): Canonical<string[]> {
    const wires = objectSets.map(os => JSON.stringify(getWireObjectSet(os)));
    return this.#subtractTrie.lookupArray(wires);
  }
}
