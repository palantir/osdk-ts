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

import { Trie } from "@wry/trie";
import deepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
export class WhereClauseCanonicalizer {
  /**
   * This is a shortcut cache for any WhereClause's that we have
   * seen and already canonicalized. The theory behind this
   * is that well behaving React applications will either `useMemo`
   * their where clause, or store it in state or pass it through as
   * props such that we are likely to get the same WhereClause
   * object multiple times and we can skip unnecessary work.
   */
  #cache = new WeakMap();

  /**
   * This is a trie that stores the sorted collapsed keys of a where clause to
   * the cache key for canonicalized options. In theory this keeps the number of
   * deepEqual comparisons down to a minimum but its probably overkill.
   */
  #trie = new Trie();

  /**
   * This is a cache from the cacheKey provided by `this.#trie` to the potential
   * canonicalized options.
   */
  #existingOptions = new Map();
  canonicalize(where) {
    // fastest shortcut
    if (this.#cache.has(where)) {
      return this.#cache.get(where);
    }
    const keysSet = new Set();
    const calculatedCanon = this.#toCanon(where, keysSet);
    const cacheKey = this.#trie.lookupArray(Array.from(keysSet).sort());
    const lookupEntry = this.#existingOptions.get(cacheKey) ?? {
      options: []
    };
    this.#existingOptions.set(cacheKey, lookupEntry);
    const canon = lookupEntry.options.find(ref => deepEqual(ref.deref(), calculatedCanon))?.deref() ?? calculatedCanon;
    if (canon === calculatedCanon) {
      // This means no existing options were found
      lookupEntry.options.push(new WeakRef(canon));
    }
    this.#cache.set(where, canon);
    return canon;
  }
  #toCanon = (where, set = new Set()) => {
    if ("$and" in where) {
      if (process.env.NODE_ENV !== "production") {
        !Array.isArray(where.$and) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected $and to be an array") : invariant(false) : void 0;
        !(Object.keys(where).length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected only $and to be present") : invariant(false) : void 0;
      }
      if (where.$and.length === 0) {
        // empty $and is a no-op
        return {};
      }
      if (where.$and.length === 1) {
        return this.#toCanon(where.$and[0], set);
      }
    }
    // This is incomplete for all the cases possible but it gets us started

    return Object.fromEntries(Object.entries(where).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => {
      set.add(k);
      if (k === "$and" || k === "$or") {
        return [k, v.map(x => this.#toCanon(x, set))];
      }
      if (k !== "$not" && typeof v === "object" && "$eq" in v) {
        return [k, v["$eq"]];
      }
      return [k, v];
    }));
  };
}
//# sourceMappingURL=WhereClauseCanonicalizer.js.map