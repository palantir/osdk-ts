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
import { objectRefKey, ObjectRefMap } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";
import type { ExpandedChild } from "./ClosureExpansion.js";
import type { PathPayload } from "./PathQuery.js";
import { PathQuery } from "./PathQuery.js";

interface TestInstance {
  $objectType: string;
  $primaryKey: string | number;
  name: string;
}

function ref(type: string, pk: string): ObjectRef {
  return { $objectType: type, $primaryKey: pk };
}

function child(type: string, pk: string): ExpandedChild<TestInstance> {
  return {
    ref: ref(type, pk),
    instance: { $objectType: type, $primaryKey: pk, name: `${type}:${pk}` },
  };
}

const hopChild: LinkHopDescriptor = {
  sourceTypeApiName: "SubCategory",
  linkApiName: "child",
  targetTypeApiName: "Segment",
  multiplicity: false,
  sourceIsInterface: false,
};

const hopPriorities: LinkHopDescriptor = {
  sourceTypeApiName: "Segment",
  linkApiName: "segmentItems",
  targetTypeApiName: "Priority",
  multiplicity: true,
  sourceIsInterface: false,
};

const hopChildren: LinkHopDescriptor = {
  sourceTypeApiName: "SubCategory",
  linkApiName: "children",
  targetTypeApiName: "Segment",
  multiplicity: true,
  sourceIsInterface: false,
};

/**
 * Build resolveLink + fetchLinks stubs over a fixed `${refKey}|${link}` edge
 * map. The fetch routes per hop by the concrete link name, so each hop returns
 * only its own children.
 */
function makeFetch(edges: Record<string, ExpandedChild<TestInstance>[]>) {
  const resolveLink = vi.fn().mockImplementation(
    (_concreteType: string, interfaceLinkApiName: string) =>
      Promise.resolve({
        concreteLinkApiName: interfaceLinkApiName,
        targetType: "Node",
        multiplicity: true,
      }),
  );

  const fetchLinks = vi.fn().mockImplementation(
    (
      _concreteType: string,
      concreteLinkApiName: string,
      sources: ReadonlyArray<ObjectRef>,
    ) => {
      const out = new ObjectRefMap<
        ReadonlyArray<ExpandedChild<TestInstance>>
      >();
      for (const source of sources) {
        const key = `${objectRefKey(source)}|${concreteLinkApiName}`;
        out.set(source, edges[key] ?? []);
      }
      return Promise.resolve(out);
    },
  );

  return { resolveLink, fetchLinks };
}

function endpoints(refs: ReadonlyArray<ObjectRef>): string[] {
  return refs.map((r) => `${r.$objectType}:${r.$primaryKey}`);
}

describe("PathQuery", () => {
  it("traverses a two-hop path and returns the deduped endpoint set", async () => {
    const edges: Record<string, ExpandedChild<TestInstance>[]> = {
      [`${objectRefKey(ref("SubCategory", "cat1"))}|child`]: [
        child("Segment", "seg1"),
      ],
      [`${objectRefKey(ref("Segment", "seg1"))}|segmentItems`]: [
        child("Priority", "p1"),
        child("Priority", "p2"),
      ],
    };
    const fetch = makeFetch(edges);
    let last: PathPayload<TestInstance> | undefined;

    const query = new PathQuery<TestInstance>({
      root: ref("SubCategory", "cat1"),
      hops: [hopChild, hopPriorities],
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    expect(last).toBeDefined();
    const payload = last as PathPayload<TestInstance>;

    // endpoints only: the leaf items, never the intermediate Segment
    expect(endpoints(payload.data).sort()).toEqual([
      "Priority:p1",
      "Priority:p2",
    ]);
    expect(payload.data.some((r) => r.$objectType === "Segment")).toBe(false);

    // instances resolved for every endpoint
    for (const r of payload.data) {
      expect(payload.instances.get(r)).toBeDefined();
    }

    expect(payload.status).toBe("loaded");
    expect(payload.error).toBeUndefined();
  });

  it("dedupes an endpoint reachable through multiple branches", async () => {
    // cat1 fans out to two segments; both link to the same shared item,
    // plus one item each. The shared item must appear exactly once.
    const edges: Record<string, ExpandedChild<TestInstance>[]> = {
      [`${objectRefKey(ref("SubCategory", "cat1"))}|children`]: [
        child("Segment", "a"),
        child("Segment", "b"),
      ],
      [`${objectRefKey(ref("Segment", "a"))}|segmentItems`]: [
        child("Priority", "shared"),
        child("Priority", "pa"),
      ],
      [`${objectRefKey(ref("Segment", "b"))}|segmentItems`]: [
        child("Priority", "shared"),
        child("Priority", "pb"),
      ],
    };
    const fetch = makeFetch(edges);
    let last: PathPayload<TestInstance> | undefined;

    const query = new PathQuery<TestInstance>({
      root: ref("SubCategory", "cat1"),
      hops: [hopChildren, hopPriorities],
      ...fetch,
      isOptimistic: () => false,
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    expect(last).toBeDefined();
    const payload = last as PathPayload<TestInstance>;

    expect(endpoints(payload.data).sort()).toEqual([
      "Priority:pa",
      "Priority:pb",
      "Priority:shared",
    ]);
    const sharedCount = payload.data.filter(
      (r) => r.$primaryKey === "shared",
    ).length;
    expect(sharedCount).toBe(1);
  });

  it("surfaces an optimistic endpoint through the path snapshot", async () => {
    const edges: Record<string, ExpandedChild<TestInstance>[]> = {
      [`${objectRefKey(ref("SubCategory", "cat1"))}|child`]: [
        child("Segment", "seg1"),
      ],
      [`${objectRefKey(ref("Segment", "seg1"))}|segmentItems`]: [
        child("Priority", "p1"),
      ],
    };
    const fetch = makeFetch(edges);
    let last: PathPayload<TestInstance> | undefined;

    const query = new PathQuery<TestInstance>({
      root: ref("SubCategory", "cat1"),
      hops: [hopChild, hopPriorities],
      ...fetch,
      isOptimistic: (r) => r.$primaryKey === "p1",
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    const payload = last as PathPayload<TestInstance>;
    expect(endpoints(payload.data)).toEqual(["Priority:p1"]);
    expect(payload.isOptimistic).toBe(true);
  });

  it("ignores optimism on intermediate (non-endpoint) nodes", async () => {
    const edges: Record<string, ExpandedChild<TestInstance>[]> = {
      [`${objectRefKey(ref("SubCategory", "cat1"))}|child`]: [
        child("Segment", "seg1"),
      ],
      [`${objectRefKey(ref("Segment", "seg1"))}|segmentItems`]: [
        child("Priority", "p1"),
      ],
    };
    const fetch = makeFetch(edges);
    let last: PathPayload<TestInstance> | undefined;

    const query = new PathQuery<TestInstance>({
      root: ref("SubCategory", "cat1"),
      hops: [hopChild, hopPriorities],
      ...fetch,
      // only the intermediate Segment is "optimistic"; it is not an endpoint
      isOptimistic: (r) => r.$objectType === "Segment",
      emit: (payload) => {
        last = payload;
      },
    });

    await query.run();

    expect((last as PathPayload<TestInstance>).isOptimistic).toBe(false);
  });

  it("turns optimistic when an endpoint is edited, then clears on rollback", async () => {
    const edges: Record<string, ExpandedChild<TestInstance>[]> = {
      [`${objectRefKey(ref("SubCategory", "cat1"))}|child`]: [
        child("Segment", "seg1"),
      ],
      [`${objectRefKey(ref("Segment", "seg1"))}|segmentItems`]: [
        child("Priority", "p1"),
      ],
    };
    const fetch = makeFetch(edges);
    const snapshots: Array<PathPayload<TestInstance>> = [];
    let optimistic = true;

    const query = new PathQuery<TestInstance>({
      root: ref("SubCategory", "cat1"),
      hops: [hopChild, hopPriorities],
      ...fetch,
      isOptimistic: (r) => optimistic && r.$primaryKey === "p1",
      emit: (payload) => {
        snapshots.push(payload);
      },
    });

    await query.run();
    expect(snapshots[snapshots.length - 1].isOptimistic).toBe(true);

    // rollback: the endpoint is no longer on an optimistic layer; re-run re-emits
    optimistic = false;
    await query.run();
    expect(snapshots[snapshots.length - 1].isOptimistic).toBe(false);
  });
});
