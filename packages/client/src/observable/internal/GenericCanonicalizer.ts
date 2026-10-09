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

import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";

// Limits how deep we recurse into nested objects when building the trie
// fingerprint. Beyond this depth, objects land in the same trie bucket and
// deepEqual handles disambiguation.
const MAX_FINGERPRINT_DEPTH = 5;

export class GenericCanonicalizer extends CachingCanonicalizer<object, object> {
  #trie = new Trie<object>();
  #existingValues: Map<object, { values: WeakRef<Canonical<object>>[] }> =
    new Map();

  #finalizer = new FinalizationRegistry<{
    structuralKey: unknown[];
    cacheKey: object;
  }>(({ structuralKey, cacheKey }) => {
    const entry = this.#existingValues.get(cacheKey);
    if (!entry) return;
    entry.values = entry.values.filter((value) => value.deref() !== undefined);
    if (entry.values.length > 0) return;
    this.#existingValues.delete(cacheKey);
    if (this.#trie.peekArray(structuralKey) === cacheKey) {
      this.#trie.removeArray(structuralKey);
    }
  });

  constructor(private options: { fullFingerprint?: boolean } = {}) {
    super();
  }

  canonicalize<T extends object>(input: T): Canonical<T>;
  canonicalize<T extends object>(
    input: T | undefined,
  ): Canonical<T> | undefined;
  canonicalize<T extends object>(
    input: T | undefined,
  ): Canonical<T> | undefined {
    return super.canonicalize(input as object) as Canonical<T> | undefined;
  }

  protected lookupOrCreate(input: object): Canonical<object> {
    const structuralKey = this.#collectSortedKeys(input);
    const cacheKey = this.#trie.lookupArray(structuralKey);
    const entry = this.#existingValues.get(cacheKey) ?? {
      values: [] as WeakRef<Canonical<object>>[],
    };
    this.#existingValues.set(cacheKey, entry);

    for (let i = entry.values.length - 1; i >= 0; i--) {
      const existing = entry.values[i].deref();
      if (!existing) {
        entry.values.splice(i, 1);
        continue;
      }
      if (deepEqual(existing, input)) {
        return existing;
      }
    }

    const canonical = input as Canonical<object>;
    entry.values.push(new WeakRef(canonical));
    if (this.options.fullFingerprint) {
      this.#finalizer.register(canonical, { structuralKey, cacheKey });
    }
    return canonical;
  }

  #collectSortedKeys(obj: unknown, depth = 0): unknown[] {
    if (depth > MAX_FINGERPRINT_DEPTH && !this.options.fullFingerprint) {
      return [];
    }
    if (!obj || typeof obj !== "object") {
      return this.options.fullFingerprint ? [obj] : [];
    }
    if (Array.isArray(obj)) {
      const result: unknown[] = ["[]", String(obj.length)];
      for (const item of obj) {
        result.push(...this.#collectSortedKeys(item, depth + 1));
      }
      return result;
    }
    const record = obj as Record<string, unknown>;
    const result: unknown[] = [];
    for (const key of Object.keys(record).sort()) {
      result.push(key);
      result.push(...this.#collectSortedKeys(record[key], depth + 1));
    }
    return result;
  }
}
