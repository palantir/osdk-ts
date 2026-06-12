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

import type { LinkHopDescriptor, ObjectRef } from "@osdk/api";
import { ObjectRefMap } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { ExpandedChild } from "./ClosureExpansion.js";
import { ClosureInvalidationRegistry } from "./ClosureInvalidationRegistry.js";
import { ClosureQuery } from "./ClosureQuery.js";

interface TestInstance {
  $objectType: string;
  $primaryKey: string | number;
  name: string;
}

function ref(pk: string): ObjectRef {
  return { $objectType: "Node", $primaryKey: pk };
}

function child(pk: string): ExpandedChild<TestInstance> {
  return {
    ref: ref(pk),
    instance: { $objectType: "Node", $primaryKey: pk, name: pk },
  };
}

const hop: LinkHopDescriptor = {
  sourceTypeApiName: "Node",
  linkApiName: "children",
  targetTypeApiName: "Node",
  multiplicity: true,
  sourceIsInterface: false,
};

function makeFetch(tree: Record<string, string[]>) {
  const resolveLink = vi.fn().mockResolvedValue({
    concreteLinkApiName: "children",
    targetType: "Node",
    multiplicity: true,
  });

  const fetchLinks = vi.fn().mockImplementation(
    (
      _concreteType: string,
      _concreteLinkApiName: string,
      sources: ReadonlyArray<ObjectRef>,
    ) => {
      const out = new ObjectRefMap<
        ReadonlyArray<ExpandedChild<TestInstance>>
      >();
      for (const source of sources) {
        const pks = tree[String(source.$primaryKey)] ?? [];
        out.set(source, pks.map(child));
      }
      return Promise.resolve(out);
    },
  );

  return { resolveLink, fetchLinks };
}

function pks(refs: ReadonlyArray<ObjectRef>): string[] {
  return refs.map((r) => String(r.$primaryKey));
}

describe("ClosureInvalidationRegistry", () => {
  it("re-expands only the affected parent on a deep edge change", async () => {
    // root -> a -> b -> c : a depth-3 chain.
    const fetch = makeFetch({ root: ["a"], a: ["b"], b: ["c"], c: [] });
    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 3, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: () => {},
    });

    await query.run();

    const registry = new ClosureInvalidationRegistry();
    for (const node of ["root", "a", "b", "c"]) {
      registry.register(ref(node), query);
    }

    const expandSpy = vi.spyOn(query, "expand");
    fetch.fetchLinks.mockClear();

    // A deep edge sourced at "b" changed.
    await registry.invalidateSource(ref("b"));

    // Only "b" re-expanded; the closure was not rebuilt from the root.
    expect(expandSpy).toHaveBeenCalledTimes(1);
    expect(expandSpy).toHaveBeenCalledWith(ref("b"));
    expect(fetch.fetchLinks).toHaveBeenCalledTimes(1);
    const sources = fetch.fetchLinks.mock.calls[0][2] as ReadonlyArray<
      ObjectRef
    >;
    expect(pks(sources)).toEqual(["b"]);
  });

  it("re-expands every live closure containing the edited source", async () => {
    const fetchA = makeFetch({ root: ["x"], x: [] });
    const fetchB = makeFetch({ other: ["x"], x: [] });
    const queryA = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 2, maxNodes: 1000 },
      ...fetchA,
      isOptimistic: () => false,
      emit: () => {},
    });
    const queryB = new ClosureQuery<TestInstance>({
      root: ref("other"),
      hop,
      options: { maxDepth: 2, maxNodes: 1000 },
      ...fetchB,
      isOptimistic: () => false,
      emit: () => {},
    });
    await queryA.run();
    await queryB.run();

    const registry = new ClosureInvalidationRegistry();
    registry.register(ref("x"), queryA);
    registry.register(ref("x"), queryB);

    const spyA = vi.spyOn(queryA, "expand");
    const spyB = vi.spyOn(queryB, "expand");

    await registry.invalidateSource(ref("x"));

    expect(spyA).toHaveBeenCalledExactlyOnceWith(ref("x"));
    expect(spyB).toHaveBeenCalledExactlyOnceWith(ref("x"));
  });

  it("does nothing for a source no live closure contains", async () => {
    const registry = new ClosureInvalidationRegistry();
    await expect(registry.invalidateSource(ref("nope"))).resolves
      .toBeUndefined();
  });

  it("stops routing to a participant after it unregisters", async () => {
    const fetch = makeFetch({ root: ["a"], a: [] });
    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 2, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: () => {},
    });
    await query.run();

    const registry = new ClosureInvalidationRegistry();
    registry.register(ref("a"), query);
    registry.unregister(ref("a"), query);

    const expandSpy = vi.spyOn(query, "expand");
    await registry.invalidateSource(ref("a"));

    expect(expandSpy).not.toHaveBeenCalled();
  });
});
