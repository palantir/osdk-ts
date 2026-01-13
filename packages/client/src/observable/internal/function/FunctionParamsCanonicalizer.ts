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
import {
  getWireObjectSet,
  isObjectSet,
} from "../../../objectSet/createObjectSet.js";
import { isObjectSpecifiersObject } from "../../../util/isObjectSpecifiersObject.js";
import type { Canonical } from "../Canonical.js";

export type CanonicalFunctionParams = Record<string, unknown>;

export class FunctionParamsCanonicalizer {
  /**
   * WeakMap cache for input object identity.
   * If we see the same input object reference, return the same canonical form.
   */
  #cache = new WeakMap<
    Record<string, unknown>,
    Canonical<CanonicalFunctionParams>
  >();

  /**
   * Trie for efficient lookup based on sorted keys.
   */
  #trie = new Trie<object>();

  /**
   * Maps trie cache keys to arrays of WeakRefs to canonical forms.
   */
  #existingOptions: Map<object, {
    options: WeakRef<Canonical<CanonicalFunctionParams>>[];
  }> = new Map();

  public canonicalize(
    params: Record<string, unknown> | undefined | null,
  ): Canonical<CanonicalFunctionParams> | undefined {
    if (params == null) {
      return undefined;
    }

    // Fast path: seen this exact object before
    if (this.#cache.has(params)) {
      return this.#cache.get(params)!;
    }

    // Canonicalize the params structure
    const keysSet = new Set<string>();
    const calculatedCanon = this.#toCanon(
      params,
      keysSet,
    ) as Canonical<CanonicalFunctionParams>;

    // Use trie for efficient lookup
    const cacheKey = this.#trie.lookupArray(Array.from(keysSet).sort());
    const lookupEntry = this.#existingOptions.get(cacheKey)
      ?? { options: [] as WeakRef<Canonical<CanonicalFunctionParams>>[] };
    this.#existingOptions.set(cacheKey, lookupEntry);

    // Clean up dead WeakRef entries to prevent memory leak and performance degradation
    lookupEntry.options = lookupEntry.options.filter(ref =>
      ref.deref() !== undefined
    );

    // Find existing canonical form with same structure
    const existingCanon = lookupEntry.options.find(
      (ref) => deepEqual(ref.deref(), calculatedCanon),
    )?.deref();
    const canon = existingCanon ?? calculatedCanon;

    if (canon === calculatedCanon) {
      // New unique structure, store it
      lookupEntry.options.push(new WeakRef(calculatedCanon));
    }

    this.#cache.set(params, canon);
    return canon;
  }

  #toCanon = (
    value: unknown,
    keySet: Set<string>,
    depth: number = 0,
  ): unknown => {
    // Prevent infinite recursion
    if (depth > 50) {
      return value;
    }

    if (value == null) {
      return value;
    }

    // Handle primitives directly
    if (typeof value !== "object") {
      return value;
    }

    // Handle arrays
    if (Array.isArray(value)) {
      return value.map((item) => this.#toCanon(item, keySet, depth + 1));
    }

    // Handle Sets - convert to sorted array for canonical form
    if (value instanceof Set) {
      const items = Array.from(value).map((item) =>
        this.#toCanon(item, keySet, depth + 1)
      );
      // Sort for stability (only works well for primitives)
      return items.sort((a, b) => {
        if (typeof a === "string" && typeof b === "string") {
          return a.localeCompare(b);
        }
        if (typeof a === "number" && typeof b === "number") {
          return a - b;
        }
        return JSON.stringify(a).localeCompare(JSON.stringify(b));
      });
    }

    // Handle Maps - convert to sorted entries
    if (value instanceof Map) {
      const entries = Array.from(value.entries()).map(([k, v]) => [
        this.#toCanon(k, keySet, depth + 1),
        this.#toCanon(v, keySet, depth + 1),
      ]);
      return entries.sort((a, b) =>
        JSON.stringify(a[0]).localeCompare(JSON.stringify(b[0]))
      );
    }

    // Handle Dates
    if (value instanceof Date) {
      return value.toISOString();
    }

    // Handle OSDK objects - extract primary key for identity
    if (isObjectSpecifiersObject(value)) {
      return {
        $apiName: value.$apiName,
        $primaryKey: value.$primaryKey,
      };
    }

    // Handle ObjectSets - serialize to wire format
    if (isObjectSet(value)) {
      return getWireObjectSet(value);
    }

    // Handle plain objects (structs, params)
    const obj = value as Record<string, unknown>;
    const canonObj: Record<string, unknown> = {};

    // Sort keys for consistent ordering
    const sortedKeys = Object.keys(obj).sort();
    for (const key of sortedKeys) {
      keySet.add(key);
      canonObj[key] = this.#toCanon(obj[key], keySet, depth + 1);
    }

    return canonObj as Canonical<CanonicalFunctionParams>;
  };
}
