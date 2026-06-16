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

import type { Canonical } from "./Canonical.js";
import { WeakRefTrie } from "./WeakRefTrie.js";

export class ObjectSetArrayCanonicalizer {
  #unionTrie = new WeakRefTrie<string[]>();
  #intersectTrie = new WeakRefTrie<string[]>();
  #subtractTrie = new WeakRefTrie<string[]>();

  canonicalizeUnion(items: string[]): Canonical<string[]> {
    const sorted = [...items].sort();
    return this.#unionTrie.lookupArray(sorted) as Canonical<string[]>;
  }

  canonicalizeIntersect(items: string[]): Canonical<string[]> {
    const sorted = [...items].sort();
    return this.#intersectTrie.lookupArray(sorted) as Canonical<string[]>;
  }

  canonicalizeSubtract(items: string[]): Canonical<string[]> {
    return this.#subtractTrie.lookupArray(items) as Canonical<string[]>;
  }
}
