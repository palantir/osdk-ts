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

import type { ObjectRef } from "@osdk/api";
import { ObjectRefMap } from "@osdk/api";
import type { Client } from "@osdk/client";
import type * as UnstableClient from "@osdk/client/unstable-do-not-use";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type ObservableClient = UnstableClient.ObservableClient;
type Observer<T> = UnstableClient.Observer<T>;

vi.mock("@osdk/client/unstable-do-not-use", async (importOriginal) => {
  const actual = (await importOriginal()) as typeof UnstableClient;
  return {
    ...actual,
    buildObjectSetFromLinkDefByType: vi.fn(() =>
      Promise.resolve({ __fakeObjectSet: true })
    ),
  };
});

import { createDerivedLinksStore } from "../derivedLinksStore.js";

function makeShape(derivedLinks: readonly unknown[]) {
  const baseType = {
    apiName: "Parent",
    primaryKeyType: "string",
    type: "object",
  };
  return {
    __shapeId: "parent-shape",
    __debugName: "ParentShape",
    __baseType: baseType,
    __baseTypeApiName: "Parent",
    __props: Object.freeze({}),
    __derivedLinks: Object.freeze(derivedLinks),
    __selectedPropsType: {},
    __derivedLinksType: {},
  } as unknown as Parameters<typeof createDerivedLinksStore>[0];
}

function leafTargetShape() {
  const baseType = {
    apiName: "Leaf",
    primaryKeyType: "string",
    type: "object",
  };
  return {
    __shapeId: "leaf-shape",
    __debugName: "LeafShape",
    __baseType: baseType,
    __baseTypeApiName: "Leaf",
    __props: Object.freeze({}),
    __derivedLinks: Object.freeze([]),
    __selectedPropsType: {},
    __derivedLinksType: {},
  };
}

function nestingTargetShape(nestedLinks: readonly unknown[]) {
  const baseType = {
    apiName: "Child",
    primaryKeyType: "string",
    type: "object",
  };
  return {
    __shapeId: "child-shape",
    __debugName: "ChildShape",
    __baseType: baseType,
    __baseTypeApiName: "Child",
    __props: Object.freeze({}),
    __derivedLinks: Object.freeze(nestedLinks),
    __selectedPropsType: {},
    __derivedLinksType: {},
  };
}

function linkDef(name: string, targetShape: unknown) {
  return {
    name,
    targetShape,
    objectSetDef: {
      segments: [{ type: "pivotTo", linkName: name }],
    },
    config: {},
  };
}

function recursiveLinkDef(
  name: string,
  linkApiName: string,
  sourceType: string,
  targetShape: unknown,
) {
  return {
    name,
    targetShape,
    objectSetDef: {
      segments: [{
        type: "pivotTo",
        linkName: linkApiName,
        sourceType,
        targetType: sourceType,
      }],
      recursive: { maxDepth: 3, maxNodes: 1000 },
    },
    config: {},
  };
}

function recursiveTargetShape(apiName: string) {
  const baseType = {
    apiName,
    primaryKeyType: "string",
    type: "object",
  };
  return {
    __shapeId: `${apiName}-recursive-shape`,
    __debugName: `${apiName}RecursiveShape`,
    __baseType: baseType,
    __baseTypeApiName: apiName,
    __props: Object.freeze({}),
    __derivedLinks: Object.freeze([]),
    __selectedPropsType: {},
    __derivedLinksType: {},
  };
}

function ref(apiName: string, pk: string): ObjectRef {
  return { $objectType: apiName, $primaryKey: pk };
}

function rawInstance(apiName: string, pk: string): Record<string, unknown> {
  const instance: Record<string, unknown> = {
    $primaryKey: pk,
    $apiName: apiName,
    $objectType: apiName,
  };
  instance.$clone = () => instance;
  return instance;
}

describe("createDerivedLinksStore", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("reflects loaded data in the snapshot after the observer emits", async () => {
    const observers: Array<Observer<unknown>> = [];
    const unsubscribes: Array<ReturnType<typeof vi.fn>> = [];

    const observableClient = {
      observeObjectSet: vi.fn(
        (_os: unknown, _opts: unknown, obs: Observer<unknown>) => {
          observers.push(obs);
          const unsub = vi.fn();
          unsubscribes.push(unsub);
          return { unsubscribe: unsub };
        },
      ),
    } as unknown as ObservableClient;

    const shape = makeShape([linkDef("employees", leafTargetShape())]);
    const sourceObject = rawInstance("Parent", "p1");
    const store = createDerivedLinksStore(
      shape,
      sourceObject as never,
      observableClient,
      {} as Client,
      {},
    );

    const notify = vi.fn();
    const unsubscribe = store.subscribe(notify);

    // The async build+observe pipeline needs the pending promise to settle.
    await vi.waitFor(() => {
      expect(observers).toHaveLength(1);
    });

    observers[0].next({
      resolvedList: [rawInstance("Leaf", "l1"), rawInstance("Leaf", "l2")],
      status: "loaded",
      hasMore: false,
      fetchMore: async () => {},
      isOptimistic: false,
    });

    const snapshot = store.getSnapShot();
    expect(snapshot.links.employees).toHaveLength(2);
    const employeesStatus =
      (snapshot.linkStatus as Record<string, { isLoading: boolean }>).employees;
    expect(employeesStatus?.isLoading).toBe(false);
    expect(snapshot.anyLoading).toBe(false);

    unsubscribe();
    expect(unsubscribes[0]).toHaveBeenCalled();
  });

  it("cascades cleanup through nested links when the store is destroyed", async () => {
    const observers: Array<Observer<unknown>> = [];
    const unsubscribes: Array<ReturnType<typeof vi.fn>> = [];

    const observableClient = {
      observeObjectSet: vi.fn(
        (_os: unknown, _opts: unknown, obs: Observer<unknown>) => {
          observers.push(obs);
          const unsub = vi.fn();
          unsubscribes.push(unsub);
          return { unsubscribe: unsub };
        },
      ),
    } as unknown as ObservableClient;

    const tasksShape = leafTargetShape();
    const employeesShape = nestingTargetShape([linkDef("tasks", tasksShape)]);
    const shape = makeShape([linkDef("employees", employeesShape)]);

    const sourceObject = rawInstance("Parent", "p1");
    const store = createDerivedLinksStore(
      shape,
      sourceObject as never,
      observableClient,
      {} as Client,
      {},
    );

    const unsubscribe = store.subscribe(() => {});
    await vi.waitFor(() => {
      expect(observers).toHaveLength(1);
    });

    // Emit two parent items so nested entries get queued.
    observers[0].next({
      resolvedList: [
        rawInstance("Child", "c1"),
        rawInstance("Child", "c2"),
      ],
      status: "loaded",
      hasMore: false,
      fetchMore: async () => {},
      isOptimistic: false,
    });

    // Advance the 25 ms debounce, then let the nested buildObjectSet promises settle.
    await vi.advanceTimersByTimeAsync(30);
    await vi.waitFor(() => {
      // 1 parent + 2 nested subscriptions
      expect(observers).toHaveLength(3);
    });

    unsubscribe();

    // All subscriptions (parent + both nested) should be torn down by destroy.
    for (const unsub of unsubscribes) {
      expect(unsub).toHaveBeenCalled();
    }
  });

  it("drives a recursive follow via observeLinkClosure and exposes a flat list with a lazy tree view", async () => {
    let closureObserver: Observer<unknown> | undefined;
    const closureUnsub = vi.fn();

    const observableClient = {
      observeLinkClosure: vi.fn(
        (_options: unknown, obs: Observer<unknown>) => {
          closureObserver = obs;
          return { unsubscribe: closureUnsub };
        },
      ),
      observeObjectSet: vi.fn(() => ({ unsubscribe: vi.fn() })),
    } as unknown as ObservableClient;

    const targetShape = recursiveTargetShape("Operation");
    const shape = makeShape([
      recursiveLinkDef(
        "descendants",
        "subOperations",
        "Operation",
        targetShape,
      ),
    ]);
    const sourceObject = rawInstance("Operation", "op1");

    const store = createDerivedLinksStore(
      shape,
      sourceObject as never,
      observableClient,
      {} as Client,
      {},
    );

    const notify = vi.fn();
    store.subscribe(notify);

    await vi.waitFor(() => {
      expect(closureObserver).toBeDefined();
    });

    // op1 -> [op2, op4]; op2 -> [op3]
    const op2 = rawInstance("Operation", "op2");
    const op3 = rawInstance("Operation", "op3");
    const op4 = rawInstance("Operation", "op4");

    const adjacency = new ObjectRefMap<ObjectRef[]>();
    adjacency.set(ref("Operation", "op1"), [
      ref("Operation", "op2"),
      ref("Operation", "op4"),
    ]);
    adjacency.set(ref("Operation", "op2"), [ref("Operation", "op3")]);
    adjacency.set(ref("Operation", "op3"), []);
    adjacency.set(ref("Operation", "op4"), []);

    closureObserver?.next({
      // BFS discovery order, root excluded
      data: [op2, op4, op3],
      adjacency,
      byDepth: new ObjectRefMap(),
      frontier: [],
      depthReached: 2,
      isExpanding: false,
      truncated: { byDepth: false, byNodeBudget: false },
      expand: () => {},
      isOptimistic: false,
      status: "loaded",
      error: undefined,
      lastUpdated: Date.now(),
    });

    const snapshot = store.getSnapShot();
    const flat = snapshot.links.descendants as Array<Record<string, unknown>>;
    expect(flat.map(o => o.$primaryKey).sort()).toEqual(["op2", "op3", "op4"]);

    const descendantsStatus =
      (snapshot.linkStatus as Record<string, { isLoading: boolean }>)
        .descendants;
    expect(descendantsStatus?.isLoading).toBe(false);

    // The lazy tree view reconstructs nesting from adjacency.
    const tree = (flat as unknown as {
      tree: Array<Record<string, unknown>>;
    }).tree;
    expect(tree.map(o => o.$primaryKey).sort()).toEqual(["op2", "op4"]);

    const op2Node = tree.find(o => o.$primaryKey === "op2");
    const op2Children = op2Node?.descendants as
      | Array<Record<string, unknown>>
      | undefined;
    expect(op2Children?.map(o => o.$primaryKey)).toEqual(["op3"]);

    const op4Node = tree.find(o => o.$primaryKey === "op4");
    expect(op4Node?.descendants).toBeUndefined();
  });
});
