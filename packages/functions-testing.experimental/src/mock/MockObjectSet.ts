/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  AggregateOpts,
  AggregationsResults,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PageResult,
  WhereClause,
} from "@osdk/api";
import invariant from "tiny-invariant";

export type Call = [method: string, args: unknown];

export type Resolver = (calls: Call[]) => unknown;

export function createMockObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  resolver: Resolver,
  calls: Call[] = [],
): ObjectSet<Q> {
  const chain = (method: string, args: unknown): ObjectSet<Q> =>
    createMockObjectSet(objectType, resolver, [...calls, [method, args]]);

  const terminal = <T>(method: string, args: unknown): T =>
    resolver([...calls, [method, args]]) as T;

  return {
    where: (clause: WhereClause<Q>) => chain("where", clause),
    // TODO: Add object set support
    union: () =>
      void invariant(false, "union is not supported in mocks") as any,
    intersect: () =>
      void invariant(false, "intersect is not supported in mocks") as any,
    subtract: () =>
      void invariant(false, "subtract is not supported in mocks") as any,
    pivotTo: (link: string) => chain("pivotTo", link) as any,
    narrowToType: (type: ObjectOrInterfaceDefinition) =>
      chain("narrowToType", type) as any,
    nearestNeighbors: (query: unknown, num: number, prop: string) =>
      chain("nearestNeighbors", { query, num, prop }),
    withProperties: () =>
      // TODO: Add with properties support
      void invariant(false, "withProperties is not supported in mocks") as any,
    fetchPage: async (args?: unknown) =>
      terminal<PageResult<Osdk.Instance<Q>>>("fetchPage", args) as any,
    fetchPageWithErrors: async (args?: unknown) => {
      try {
        return {
          type: "ok" as const,
          value: await terminal("fetchPage", args),
        } as any;
      } catch (error) {
        return { type: "error" as const, error };
      }
    },
    fetchOne:
      (async (pk: unknown) =>
        terminal<Osdk.Instance<Q>>("fetchOne", pk)) as any,
    fetchOneWithErrors: (async (pk: unknown) => {
      try {
        return {
          type: "ok" as const,
          value: await terminal("fetchOne", pk),
        } as any;
      } catch (error) {
        return { type: "error" as const, error } as any;
      }
    }) as any,
    aggregate: async (req: AggregateOpts<Q>) =>
      terminal<AggregationsResults<Q, AggregateOpts<Q>>>(
        "aggregate",
        req,
      ) as any,
    asyncIter: (args?: unknown) => {
      const data = terminal<Osdk.Instance<Q>[]>("asyncIter", args);
      return (async function*() {
        for (const item of data) yield item;
      })();
    },

    subscribe: () =>
      void invariant(false, "subscribe is not supported in mocks") as any,
    experimental_asyncIterLinks: () =>
      void invariant(
        false,
        "experimental_asyncIterLinks is not supported in mocks",
      ) as any,
    $objectSetInternals: {
      def: {} as Q,
    },
  } satisfies ObjectSet<Q>;
}

export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (a == null || b == null) return a === b;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (typeof a === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b as object);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((k) =>
      deepEqual((a as any)[k], (b as Record<string, unknown>)[k])
    );
  }
  return false;
}
