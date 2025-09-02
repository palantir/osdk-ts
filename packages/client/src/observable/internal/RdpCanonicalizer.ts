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

import deepEqual from "fast-deep-equal";
import type { Canonical } from "./Canonical.js";

// RDPs are Record<string, SimplePropertyDef> as seen in SubSelectRDPs type
export type Rdp<T = any> = Record<string, T>;

export class RdpCanonicalizer {
  /**
   * This is a shortcut cache for any RDP that we have
   * seen and already canonicalized. The theory behind this
   * is that well behaving React applications will either `useMemo`
   * their RDP, or store it in state or pass it through as
   * props such that we are likely to get the same RDP
   * object multiple times and we can skip unnecessary work.
   */
  #cache = new WeakMap<
    Rdp,
    Canonical<Rdp>
  >();

  /**
   * This is a map that stores keys of an RDP to
   * the cache key for canonicalized options.
   */
  #keyCache = new Map<string, object>();

  /**
   * This is a cache from the cacheKey to the potential
   * canonicalized options.
   */
  #existingOptions: Map<object, {
    options: WeakRef<Canonical<Rdp>>[];
  }> = new Map();

  public canonicalize(
    rdp: Rdp | undefined,
  ): Canonical<Rdp> | undefined {
    if (!rdp) {
      return undefined;
    }
    // fastest shortcut
    if (this.#cache.has(rdp)) {
      return this.#cache.get(rdp)!;
    }

    const calculatedCanon = this.#toCanon(rdp);
    const cacheKeyStr = JSON.stringify(calculatedCanon);
    let cacheKey = this.#keyCache.get(cacheKeyStr);
    if (!cacheKey) {
      cacheKey = {};
      this.#keyCache.set(cacheKeyStr, cacheKey);
    }
    const lookupEntry = this.#existingOptions.get(cacheKey)
      ?? { options: [] as WeakRef<Canonical<Rdp>>[] };
    this.#existingOptions.set(cacheKey, lookupEntry);

    const canon =
      this.#getCachedOrNewCanonicalizedOpts(lookupEntry, calculatedCanon);
    this.#cache.set(rdp, canon);
    return canon;
  }

  #getCachedOrNewCanonicalizedOpts(
    lookupEntry: { options: WeakRef<Canonical<Rdp>>[] },
    canon: object,
  ): Canonical<Rdp> {
    const derefed: Canonical<Rdp>[] = [];
    for (let i = 0; i < lookupEntry.options.length; i++) {
      const option = lookupEntry.options[i].deref();
      if (option == null) {
        // later on we'll repack. we _could_ do it here but will need to
        // double check to make sure the references are updated.
        continue;
      }
      derefed.push(option);
      if (deepEqual(canon, option)) {
        return option;
      }
    }

    const ret = Object.freeze(canon) as Canonical<Rdp>;
    lookupEntry.options = [...derefed.map(d => new WeakRef(d)), new WeakRef(ret)];
    return ret;
  }

  #toCanon(
    rdp: Rdp,
  ): any {
    // Sort keys for consistent canonicalization
    const sorted: Record<string, any> = {};
    const keys = Object.keys(rdp).sort();
    for (const key of keys) {
      sorted[key] = rdp[key];
    }
    return sorted;
  }
}