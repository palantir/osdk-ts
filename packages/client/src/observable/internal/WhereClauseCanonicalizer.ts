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

import type { ObjectOrInterfaceDefinition, WhereClause } from "@osdk/api";
import { Trie } from "@wry/trie";
import deepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
import type { Canonical } from "./Canonical.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";

export class WhereClauseCanonicalizer {
  /**
   * This is a shortcut cache for any WhereClause's that we have
   * seen and already canonicalized. The theory behind this
   * is that well behaving React applications will either `useMemo`
   * their where clause, or store it in state or pass it through as
   * props such that we are likely to get the same WhereClause
   * object multiple times and we can skip unnecessary work.
   */
  #cache = new WeakMap<
    WhereClause<any> | SimpleWhereClause,
    Canonical<SimpleWhereClause>
  >();

  /**
   * This is a trie that stores the sorted collapsed keys of a where clause to
   * the cache key for canonicalized options. In theory this keeps the number of
   * deepEqual comparisons down to a minimum but its probably overkill.
   */
  #trie = new Trie<object>();

  /**
   * This is a cache from the cacheKey provided by `this.#trie` to the potential
   * canonicalized options.
   */
  #existingOptions: Map<object, {
    options: WeakRef<Canonical<SimpleWhereClause>>[];
  }> = new Map();

  public canonicalize<T extends ObjectOrInterfaceDefinition>(
    where: WhereClause<T> | SimpleWhereClause,
  ): Canonical<SimpleWhereClause> {
    // fastest shortcut
    if (this.#cache.has(where)) {
      return this.#cache.get(where)!;
    }

    const keysSet = new Set<string>();
    const calculatedCanon = this.#toCanon(where, keysSet);
    const cacheKey = this.#trie.lookupArray(Array.from(keysSet).sort());
    const lookupEntry = this.#existingOptions.get(cacheKey)
      ?? { options: [] as WeakRef<Canonical<SimpleWhereClause>>[] };
    this.#existingOptions.set(cacheKey, lookupEntry);

    const canon =
      lookupEntry.options.find((ref) => deepEqual(ref.deref(), calculatedCanon))
        ?.deref()
        ?? calculatedCanon;

    if (canon === calculatedCanon) {
      // This means no existing options were found
      lookupEntry.options.push(new WeakRef(canon));
    }

    this.#cache.set(where, canon);
    return canon;
  }

  #flattenAndMergeAnd = (
    andArray: SimpleWhereClause[],
    set: Set<string>,
  ): SimpleWhereClause[] => {
    const flattened: SimpleWhereClause[] = [];
    const propertyMergeMap = new Map<string, any>();

    for (const clause of andArray) {
      if ("$and" in clause) {
        // Recursively flatten nested $and
        const nestedFlattened = this.#flattenAndMergeAnd(
          (clause as { $and: SimpleWhereClause[] }).$and,
          set,
        );
        for (const nestedClause of nestedFlattened) {
          this.#mergeIntoPropertyMap(nestedClause, propertyMergeMap, flattened);
        }
      } else {
        this.#mergeIntoPropertyMap(clause, propertyMergeMap, flattened);
      }
    }

    // Add merged properties as a single clause if any exist
    if (propertyMergeMap.size > 0) {
      flattened.unshift(Object.fromEntries(propertyMergeMap));
    }

    return flattened;
  };

  #mergeIntoPropertyMap = (
    clause: SimpleWhereClause,
    propertyMergeMap: Map<string, any>,
    complexClauses: SimpleWhereClause[],
  ): void => {
    // Check if this clause contains only property filters (no logical operators)
    const hasOnlyProperties = !Object.keys(clause).some(key =>
      key === "$and" || key === "$or" || key === "$not"
    );

    if (hasOnlyProperties) {
      // Merge property filters - use consistent ordering for deterministic merging
      const sortedEntries = Object.entries(clause).sort(([a], [b]) =>
        a.localeCompare(b)
      );
      for (const [key, value] of sortedEntries) {
        // For deterministic results, we need a consistent merge strategy
        // We'll keep the "smallest" value when merging duplicate keys
        if (
          !propertyMergeMap.has(key)
          || JSON.stringify(value) < JSON.stringify(propertyMergeMap.get(key))
        ) {
          propertyMergeMap.set(key, value);
        }
      }
    } else {
      // Keep complex clauses separate
      complexClauses.push(clause);
    }
  };

  #flattenOr = (
    orArray: SimpleWhereClause[],
    set: Set<string>,
  ): SimpleWhereClause[] => {
    const flattened: SimpleWhereClause[] = [];

    for (const clause of orArray) {
      if ("$or" in clause) {
        // Recursively flatten nested $or
        const nestedFlattened = this.#flattenOr(
          (clause as { $or: SimpleWhereClause[] }).$or,
          set,
        );
        flattened.push(...nestedFlattened);
      } else {
        flattened.push(clause);
      }
    }

    return flattened;
  };

  #toCanon = <T extends ObjectOrInterfaceDefinition>(
    where: WhereClause<T> | SimpleWhereClause,
    set: Set<string> = new Set<string>(),
  ): Canonical<SimpleWhereClause> => {
    // Handle $and optimization
    if ("$and" in where) {
      if (process.env.NODE_ENV !== "production") {
        invariant(Array.isArray(where.$and), "expected $and to be an array");
        invariant(
          Object.keys(where).length === 1,
          "expected only $and to be present",
        );
      }
      const andArray = (where as { $and: SimpleWhereClause[] }).$and;

      if (andArray.length === 0) {
        // empty $and is a no-op
        return {} as Canonical<SimpleWhereClause>;
      }
      if (andArray.length === 1) {
        return this.#toCanon(andArray[0], set);
      }

      // Flatten nested $and clauses and merge properties
      const flattened = this.#flattenAndMergeAnd(andArray, set);

      if (flattened.length === 1) {
        return this.#toCanon(flattened[0], set);
      }

      set.add("$and");
      const canonicalizedClauses = flattened.map(clause =>
        this.#toCanon(clause, set)
      );
      // Sort clauses by their stringified representation for consistent ordering
      canonicalizedClauses.sort((a, b) =>
        JSON.stringify(a).localeCompare(JSON.stringify(b))
      );
      return { $and: canonicalizedClauses } as unknown as Canonical<
        SimpleWhereClause
      >;
    }

    // Handle $or optimization
    if ("$or" in where) {
      if (process.env.NODE_ENV !== "production") {
        invariant(Array.isArray(where.$or), "expected $or to be an array");
        invariant(
          Object.keys(where).length === 1,
          "expected only $or to be present",
        );
      }
      const orArray = (where as { $or: SimpleWhereClause[] }).$or;

      if (orArray.length === 0) {
        // empty $or is a no-op
        return {} as Canonical<SimpleWhereClause>;
      }
      if (orArray.length === 1) {
        return this.#toCanon(orArray[0], set);
      }

      // Flatten nested $or clauses
      const flattened = this.#flattenOr(orArray, set);

      if (flattened.length === 1) {
        return this.#toCanon(flattened[0], set);
      }

      set.add("$or");
      const canonicalizedClauses = flattened.map(clause =>
        this.#toCanon(clause, set)
      );
      // Sort clauses by their stringified representation for consistent ordering
      canonicalizedClauses.sort((a, b) =>
        JSON.stringify(a).localeCompare(JSON.stringify(b))
      );
      return { $or: canonicalizedClauses } as unknown as Canonical<
        SimpleWhereClause
      >;
    }

    // Handle $not optimization
    if ("$not" in where) {
      if (process.env.NODE_ENV !== "production") {
        invariant(
          Object.keys(where).length === 1,
          "expected only $not to be present",
        );
      }
      const notClause = (where as { $not: SimpleWhereClause }).$not;

      // Handle double negation: $not { $not: X } => X
      if ("$not" in notClause) {
        return this.#toCanon(
          (notClause as { $not: SimpleWhereClause }).$not,
          set,
        );
      }

      set.add("$not");
      return { $not: this.#toCanon(notClause, set) } as unknown as Canonical<
        SimpleWhereClause
      >;
    }

    return Object.fromEntries(
      Object.entries(where)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => {
          set.add(k);
          if (
            k !== "$not" && typeof v === "object" && v != null && "$eq" in v
          ) {
            return [k, v["$eq"]];
          }
          return [k, v];
        }),
    ) as Canonical<SimpleWhereClause>;
  };
}
