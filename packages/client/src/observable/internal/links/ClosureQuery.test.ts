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

import type { LinkHopDescriptor, ObjectRef } from "@osdk/api";
import { ObjectRefMap } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { ExpandedChild } from "./ClosureExpansion.js";
import type { ClosurePayload } from "./ClosureQuery.js";
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

/** Build resolveLink + fetchLinks stubs over a fixed parent->children tree. */
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

describe("ClosureQuery", () => {
  it("runs a BFS to a fixed depth, deduping and excluding the root", async () => {
    const tree: Record<string, string[]> = {
      root: ["a", "b"],
      a: ["a1", "a2"],
      b: ["b1"],
      a1: ["a1x"],
    };
    const fetch = makeFetch(tree);
    let last: ClosurePayload<TestInstance> | undefined;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 2, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    expect(last).toBeDefined();
    const payload = last as ClosurePayload<TestInstance>;
    expect(pks(payload.data).sort()).toEqual(["a", "a1", "a2", "b", "b1"]);
    // root excluded from data
    expect(payload.data.some((r) => r.$primaryKey === "root")).toBe(false);

    expect(payload.byDepth.get(ref("root"))).toBe(0);
    expect(payload.byDepth.get(ref("a"))).toBe(1);
    expect(payload.byDepth.get(ref("b"))).toBe(1);
    expect(payload.byDepth.get(ref("a1"))).toBe(2);
    expect(payload.byDepth.get(ref("b1"))).toBe(2);

    expect(pks(payload.adjacency.get(ref("root")) ?? [])).toEqual(["a", "b"]);
    expect(pks(payload.adjacency.get(ref("a")) ?? [])).toEqual(["a1", "a2"]);
    expect(pks(payload.adjacency.get(ref("b")) ?? [])).toEqual(["b1"]);
    // depth-2 nodes were not expanded
    expect(payload.adjacency.has(ref("a1"))).toBe(false);

    expect(payload.depthReached).toBe(2);
    expect(payload.truncated.byDepth).toBe(true);
    expect(payload.truncated.byNodeBudget).toBe(false);
    expect(payload.isExpanding).toBe(false);
    expect(fetch.fetchLinks).toHaveBeenCalledTimes(2);
  });

  it("stops at the node budget and records byNodeBudget", async () => {
    const wide = Array.from({ length: 10 }, (_, i) => `c${i}`);
    const fetch = makeFetch({ root: wide });
    let last: ClosurePayload<TestInstance> | undefined;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 5, maxNodes: 5 },
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    const payload = last as ClosurePayload<TestInstance>;
    expect(payload.data.length).toBeLessThanOrEqual(5);
    expect(payload.data.length).toBe(5);
    expect(payload.truncated.byNodeBudget).toBe(true);
  });

  it("is cycle-safe: a revisited node is recorded but not re-expanded", async () => {
    // root -> A -> B -> A (back-edge)
    const fetch = makeFetch({ root: ["a"], a: ["b"], b: ["a"] });
    let last: ClosurePayload<TestInstance> | undefined;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 10, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    const payload = last as ClosurePayload<TestInstance>;
    // A appears exactly once in the flat, deduped data
    expect(payload.data.filter((r) => r.$primaryKey === "a")).toHaveLength(1);
    expect(pks(payload.data).sort()).toEqual(["a", "b"]);
    // the back-edge B -> A is recorded in adjacency
    expect(pks(payload.adjacency.get(ref("b")) ?? [])).toEqual(["a"]);
    // A was only expanded once (root, a, b expansions = 3 fetches)
    expect(fetch.fetchLinks).toHaveBeenCalledTimes(3);
  });

  it("streams a snapshot after each level with isExpanding flagging progress", async () => {
    // depth-3 nodes exist so the depth budget stops descent (no trailing
    // empty-fetch level); two levels are expanded for maxDepth: 2.
    const fetch = makeFetch({
      root: ["a", "b"],
      a: ["a1"],
      b: ["b1"],
      a1: ["a1x"],
      b1: ["b1x"],
    });
    const snapshots: Array<ClosurePayload<TestInstance>> = [];

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 2, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        snapshots.push(payload);
      },
    });

    await query.run();

    // one snapshot per expanded level
    expect(snapshots).toHaveLength(2);

    expect(snapshots[0].depthReached).toBe(1);
    expect(snapshots[0].data.length).toBe(2);
    expect(snapshots[0].isExpanding).toBe(true);

    expect(snapshots[1].depthReached).toBe(2);
    expect(snapshots[1].data.length).toBe(4);
    expect(snapshots[1].isExpanding).toBe(false);

    // data grows monotonically across snapshots
    expect(snapshots[1].data.length).toBeGreaterThan(snapshots[0].data.length);
    // earlier snapshot is not mutated by later levels (tear-free)
    expect(snapshots[0].data.length).toBe(2);
  });

  it("expand(ref) extends the closure from one node, reusing visited", async () => {
    const fetch = makeFetch({
      root: ["a", "b"],
      a: ["a1", "a2"],
      b: ["b1"],
    });
    const snapshots: Array<ClosurePayload<TestInstance>> = [];

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 1, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        snapshots.push(payload);
      },
    });

    await query.run();
    const afterRun = snapshots.length;
    // depth-1 closure: a, b discovered but not expanded
    expect(pks(snapshots[afterRun - 1].data).sort()).toEqual(["a", "b"]);
    expect(snapshots[afterRun - 1].adjacency.has(ref("a"))).toBe(false);

    await query.expand(ref("a"));

    // a new snapshot was emitted
    expect(snapshots.length).toBe(afterRun + 1);
    const payload = snapshots[snapshots.length - 1];
    expect(pks(payload.data).sort()).toEqual(["a", "a1", "a2", "b"]);
    expect(pks(payload.adjacency.get(ref("a")) ?? [])).toEqual(["a1", "a2"]);
    expect(payload.byDepth.get(ref("a1"))).toBe(2);

    // expand fetched only the requested leaf
    const lastCall = fetch.fetchLinks.mock.calls.at(-1);
    const sources = lastCall?.[2] as ReadonlyArray<ObjectRef>;
    expect(pks(sources)).toEqual(["a"]);

    // re-expanding a node whose children are already visited adds nothing new
    const beforeRepeat = payload.data.length;
    await query.expand(ref("a"));
    const repeated = snapshots[snapshots.length - 1];
    expect(repeated.data.length).toBe(beforeRepeat);
  });

  it("surfaces an optimistic discovered node through the snapshot", async () => {
    const fetch = makeFetch({ root: ["a", "b"] });
    let last: ClosurePayload<TestInstance> | undefined;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 1, maxNodes: 1000 },
      ...fetch,
      isOptimistic: (r) => r.$primaryKey === "b",
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    const payload = last as ClosurePayload<TestInstance>;
    expect(pks(payload.data).sort()).toEqual(["a", "b"]);
    expect(payload.isOptimistic).toBe(true);
  });

  it("counts an optimistic edit to the root, even though root is excluded from data", async () => {
    const fetch = makeFetch({ root: ["a"] });
    let last: ClosurePayload<TestInstance> | undefined;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 1, maxNodes: 1000 },
      ...fetch,
      isOptimistic: (r) => r.$primaryKey === "root",
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    const payload = last as ClosurePayload<TestInstance>;
    expect(payload.data.some((r) => r.$primaryKey === "root")).toBe(false);
    expect(payload.isOptimistic).toBe(true);
  });

  it("turns optimistic when a node is edited, then clears on rollback", async () => {
    // root -> a -> a1: run discovers "a"; expand(a) re-emits with "a1".
    const fetch = makeFetch({ root: ["a"], a: ["a1"] });
    const snapshots: Array<ClosurePayload<TestInstance>> = [];
    let optimistic = true;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 1, maxNodes: 1000 },
      ...fetch,
      isOptimistic: (r) => optimistic && r.$primaryKey === "a",
      emit: (payload) => {
        snapshots.push(payload);
      },
    });

    await query.run();
    expect(snapshots[snapshots.length - 1].isOptimistic).toBe(true);

    optimistic = false;
    await query.expand(ref("a"));
    expect(snapshots[snapshots.length - 1].isOptimistic).toBe(false);
  });

  it("stays non-optimistic when no discovered node is on an optimistic layer", async () => {
    const fetch = makeFetch({ root: ["a", "b"] });
    let last: ClosurePayload<TestInstance> | undefined;

    const query = new ClosureQuery<TestInstance>({
      root: ref("root"),
      hop,
      options: { maxDepth: 1, maxNodes: 1000 },
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    expect((last as ClosurePayload<TestInstance>).isOptimistic).toBe(false);
  });
});
