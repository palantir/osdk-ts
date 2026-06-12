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
  LinkHopDescriptor,
  ObjectRef,
  ObjectTypeDefinition,
  Osdk,
  Path,
  RecursiveTraversal,
} from "@osdk/api";
import { ObjectRefMap } from "@osdk/api";
import type { Client } from "@osdk/client";
import { InterfaceLinkNotResolvableError } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/observable";
import { act, renderHook } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkContext } from "../OsdkContext.js";
import { useLinks } from "../useLinks.js";

type Observer = {
  next: (payload: unknown) => void;
  error: (err: unknown) => void;
  complete: () => void;
};

type ObserveLinkClosureCall = {
  options: {
    root: ObjectRef;
    hop: LinkHopDescriptor;
    maxDepth: number | "unbounded";
    maxNodes: number;
  };
  observer: Observer;
};

function createMockObservableClient(): {
  client: ObservableClient;
  calls: ObserveLinkClosureCall[];
} {
  const calls: ObserveLinkClosureCall[] = [];
  const client = {
    observeLinkClosure: vi
      .fn()
      .mockImplementation(
        (options: ObserveLinkClosureCall["options"], observer: Observer) => {
          calls.push({ options, observer });
          return { unsubscribe: vi.fn() };
        },
      ),
  } as unknown as ObservableClient;
  return { client, calls };
}

function createWrapper(observableClient: ObservableClient) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <OsdkContext.Provider
        value={{
          client: {} as Client,
          observableClient,
          devtoolsEnabled: false,
        }}
      >
        {children}
      </OsdkContext.Provider>
    );
  };
}

const hop: LinkHopDescriptor = {
  sourceTypeApiName: "Node",
  linkApiName: "children",
  targetTypeApiName: "Node",
  multiplicity: true,
  sourceIsInterface: false,
};

function recursiveToken(
  maxDepth: number | "unbounded",
  maxNodes: number,
): RecursiveTraversal<ObjectTypeDefinition, ObjectTypeDefinition> {
  return {
    __descriptor: {
      kind: "recursive",
      hops: [hop],
      recursive: { maxDepth, maxNodes },
    },
  } as unknown as RecursiveTraversal<
    ObjectTypeDefinition,
    ObjectTypeDefinition
  >;
}

function ref(pk: string): ObjectRef {
  return { $objectType: "Node", $primaryKey: pk };
}

function instance(pk: string): Osdk.Instance<ObjectTypeDefinition> {
  return {
    $apiName: "Node",
    $objectType: "Node",
    $primaryKey: pk,
  } as unknown as Osdk.Instance<ObjectTypeDefinition>;
}

describe("useLinks recursive overload", () => {
  let observableClient: ObservableClient;
  let calls: ObserveLinkClosureCall[];

  beforeEach(() => {
    ({ client: observableClient, calls } = createMockObservableClient());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const source = instance("root");

  it("forwards the root, hop and recursive options to observeLinkClosure", () => {
    renderHook(() => useLinks(source, recursiveToken(3, 250)), {
      wrapper: createWrapper(observableClient),
    });

    expect(calls).toHaveLength(1);
    expect(calls[0].options.root).toEqual(ref("root"));
    expect(calls[0].options.hop).toEqual(hop);
    expect(calls[0].options.maxDepth).toBe(3);
    expect(calls[0].options.maxNodes).toBe(250);
  });

  it("surfaces the closure payload fields from the engine", () => {
    const { result } = renderHook(
      () => useLinks(source, recursiveToken(10, 1000)),
      { wrapper: createWrapper(observableClient) },
    );

    const adjacency = new ObjectRefMap<ObjectRef[]>();
    adjacency.set(ref("root"), [ref("a"), ref("b")]);
    const byDepth = new ObjectRefMap<number>();
    byDepth.set(ref("a"), 1);
    byDepth.set(ref("b"), 1);

    act(() => {
      calls[0].observer.next({
        data: [instance("a"), instance("b")],
        adjacency,
        byDepth,
        frontier: [ref("a"), ref("b")],
        depthReached: 1,
        isExpanding: false,
        truncated: { byDepth: false, byNodeBudget: false },
        expand: vi.fn(),
        isOptimistic: false,
        status: "loaded",
        error: undefined,
        lastUpdated: 1,
      });
    });

    expect(result.current.data.map((o) => o.$primaryKey)).toEqual(["a", "b"]);
    expect(result.current.frontier).toEqual([ref("a"), ref("b")]);
    expect(result.current.adjacency.get(ref("root"))).toEqual([
      ref("a"),
      ref("b"),
    ]);
    expect(result.current.byDepth.get(ref("a"))).toBe(1);
    expect(result.current.depthReached).toBe(1);
    expect(result.current.isExpanding).toBe(false);
    expect(result.current.truncated).toEqual({
      byDepth: false,
      byNodeBudget: false,
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("delegates expand(ref) to the engine's expand", () => {
    const { result } = renderHook(
      () => useLinks(source, recursiveToken(10, 1000)),
      { wrapper: createWrapper(observableClient) },
    );

    const expand = vi.fn();
    act(() => {
      calls[0].observer.next({
        data: [],
        adjacency: new ObjectRefMap<ObjectRef[]>(),
        byDepth: new ObjectRefMap<number>(),
        frontier: [],
        depthReached: 0,
        isExpanding: true,
        truncated: { byDepth: false, byNodeBudget: false },
        expand,
        isOptimistic: false,
        status: "loading",
        error: undefined,
        lastUpdated: 1,
      });
    });

    result.current.expand(ref("a"));
    expect(expand).toHaveBeenCalledWith(ref("a"));
  });

  it("surfaces a typed interface-link error instance from the payload", () => {
    const { result } = renderHook(
      () => useLinks(source, recursiveToken(10, 1000)),
      { wrapper: createWrapper(observableClient) },
    );

    const typedError = new InterfaceLinkNotResolvableError(
      "Node",
      "children",
    );

    act(() => {
      calls[0].observer.next({
        data: [],
        adjacency: new ObjectRefMap<ObjectRef[]>(),
        byDepth: new ObjectRefMap<number>(),
        frontier: [],
        depthReached: 0,
        isExpanding: false,
        truncated: { byDepth: false, byNodeBudget: false },
        expand: vi.fn(),
        isOptimistic: false,
        status: "error",
        error: typedError,
        lastUpdated: 1,
      });
    });

    // The concrete typed error instance must reach the hook unchanged, not be
    // flattened into a plain Error or a string message.
    expect(result.current.error).toBe(typedError);
    expect(result.current.error).toBeInstanceOf(
      InterfaceLinkNotResolvableError,
    );
    const err = result.current.error;
    if (err instanceof InterfaceLinkNotResolvableError) {
      expect(err.concreteType).toBe("Node");
      expect(err.interfaceLinkApiName).toBe("children");
    }
  });
});

type ObservePathCall = {
  options: { root: ObjectRef; hops: ReadonlyArray<LinkHopDescriptor> };
  observer: Observer;
};

function createMockPathClient(): {
  client: ObservableClient;
  calls: ObservePathCall[];
} {
  const calls: ObservePathCall[] = [];
  const client = {
    observePath: vi
      .fn()
      .mockImplementation(
        (options: ObservePathCall["options"], observer: Observer) => {
          calls.push({ options, observer });
          return { unsubscribe: vi.fn() };
        },
      ),
  } as unknown as ObservableClient;
  return { client, calls };
}

const hopOne: LinkHopDescriptor = {
  sourceTypeApiName: "SubCategory",
  linkApiName: "child",
  targetTypeApiName: "Segment",
  multiplicity: false,
  sourceIsInterface: false,
};

const hopMany: LinkHopDescriptor = {
  sourceTypeApiName: "Segment",
  linkApiName: "segmentItems",
  targetTypeApiName: "Priority",
  multiplicity: true,
  sourceIsInterface: false,
};

const hopOne2: LinkHopDescriptor = {
  sourceTypeApiName: "Segment",
  linkApiName: "owner",
  targetTypeApiName: "Person",
  multiplicity: false,
  sourceIsInterface: false,
};

function pathToken(
  hops: ReadonlyArray<LinkHopDescriptor>,
): Path<ObjectTypeDefinition, ObjectTypeDefinition, "many"> {
  return {
    __descriptor: { kind: "path", hops },
  } as unknown as Path<ObjectTypeDefinition, ObjectTypeDefinition, "many">;
}

describe("useLinks path overload", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const source = instance("cat1");

  it("routes a multi-hop path token to observePath with root and hops", () => {
    const { client, calls } = createMockPathClient();
    renderHook(() => useLinks(source, pathToken([hopOne, hopMany])), {
      wrapper: createWrapper(client),
    });

    expect(calls).toHaveLength(1);
    expect(calls[0].options.root).toEqual(ref("cat1"));
    expect(calls[0].options.hops).toEqual([hopOne, hopMany]);
  });

  it("surfaces deduped endpoints as the many-shape result", () => {
    const { client, calls } = createMockPathClient();
    const { result } = renderHook(
      () => useLinks(source, pathToken([hopOne, hopMany])),
      { wrapper: createWrapper(client) },
    );

    act(() => {
      calls[0].observer.next({
        data: [instance("p1"), instance("p2")],
        isOptimistic: false,
        status: "loaded",
        error: undefined,
        lastUpdated: 1,
      });
    });

    const endpoints = result.current.data as
      | Osdk.Instance<ObjectTypeDefinition>[]
      | null
      | undefined;
    expect(endpoints?.map((o) => o.$primaryKey)).toEqual([
      "p1",
      "p2",
    ]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("returns the one-shape when every hop is cardinality one", () => {
    const { client, calls } = createMockPathClient();
    const { result } = renderHook(
      () => useLinks(source, pathToken([hopOne, hopOne2])),
      { wrapper: createWrapper(client) },
    );

    act(() => {
      calls[0].observer.next({
        data: [instance("person1")],
        isOptimistic: false,
        status: "loaded",
        error: undefined,
        lastUpdated: 1,
      });
    });

    const data = result.current.data as
      | Osdk.Instance<ObjectTypeDefinition>
      | null
      | undefined;
    expect(data?.$primaryKey).toBe("person1");
  });

  it("resolves the one-shape to null when the path is empty", () => {
    const { client, calls } = createMockPathClient();
    const { result } = renderHook(
      () => useLinks(source, pathToken([hopOne, hopOne2])),
      { wrapper: createWrapper(client) },
    );

    act(() => {
      calls[0].observer.next({
        data: [],
        isOptimistic: false,
        status: "loaded",
        error: undefined,
        lastUpdated: 1,
      });
    });

    expect(result.current.data).toBeNull();
  });
});

describe("useLinks structural-hash subscriptions", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const source = instance("root");

  // Each call builds brand-new descriptor/hop objects, mirroring an inline
  // `Type.links.X.recursive({...})` token rebuilt on every render.
  function freshRecursiveToken(): RecursiveTraversal<
    ObjectTypeDefinition,
    ObjectTypeDefinition
  > {
    return {
      __descriptor: {
        kind: "recursive",
        hops: [{
          sourceTypeApiName: "Node",
          linkApiName: "children",
          targetTypeApiName: "Node",
          multiplicity: true,
          sourceIsInterface: false,
        }],
        recursive: { maxDepth: 3, maxNodes: 250 },
      },
    } as unknown as RecursiveTraversal<
      ObjectTypeDefinition,
      ObjectTypeDefinition
    >;
  }

  it("reuses the subscription across structurally identical tokens", () => {
    const { client, calls } = createMockObservableClient();
    const { rerender } = renderHook(
      () => useLinks(source, freshRecursiveToken()),
      { wrapper: createWrapper(client) },
    );

    expect(calls).toHaveLength(1);
    rerender();
    rerender();
    expect(calls).toHaveLength(1);
  });
});
