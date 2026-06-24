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

import type { Client } from "@osdk/client";
import type * as UnstableClient from "@osdk/client/unstable-do-not-use";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type ObservableClient = UnstableClient.ObservableClient;
type Observer<T> = UnstableClient.Observer<T>;

// Mock the async object-set builder so we don't need a real client ontology
// provider. Shape transformation helpers stay real.
vi.mock("@osdk/client/unstable-do-not-use", async (importOriginal) => {
  const actual = (await importOriginal()) as typeof UnstableClient;
  return {
    ...actual,
    buildObjectSetFromLinkDefByType: vi.fn(() =>
      Promise.resolve({ __fakeObjectSet: true })
    ),
  };
});

import { createBatchedDerivedLinksStore } from "../batchedDerivedLinksStore.js";
import type { AnyShapeInstance } from "../types.js";

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
  } as unknown as Parameters<typeof createBatchedDerivedLinksStore>[0];
}

function makeTargetShape() {
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
    __derivedLinks: Object.freeze([]),
    __selectedPropsType: {},
    __derivedLinksType: {},
  };
}

function batchableLink(name: string) {
  return {
    name,
    targetShape: makeTargetShape(),
    objectSetDef: {
      segments: [{ type: "pivotTo", linkName: name }],
    },
    config: {},
  };
}

function nonBatchableLink(name: string) {
  return {
    name,
    targetShape: makeTargetShape(),
    objectSetDef: {
      segments: [{ type: "pivotTo", linkName: name }],
      where: { status: "active" },
    },
    config: {},
  };
}

function makeInstance(pk: string) {
  return { $primaryKey: pk, $apiName: "Parent" } as unknown as AnyShapeInstance;
}

describe("createBatchedDerivedLinksStore", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("routes batchable links through observeLinks and non-batchable through observeObjectSet", async () => {
    const observeLinks = vi.fn(
      (
        _objs: unknown,
        _linkName: unknown,
        _opts: unknown,
        _obs: Observer<unknown>,
      ) => ({
        unsubscribe: vi.fn(),
      }),
    );
    const observeObjectSet = vi.fn(
      (_os: unknown, _opts: unknown, _obs: Observer<unknown>) => ({
        unsubscribe: vi.fn(),
      }),
    );

    const observableClient = {
      observeLinks,
      observeObjectSet,
    } as unknown as ObservableClient;

    const shape = makeShape([
      batchableLink("employees"),
      nonBatchableLink("activeEmployees"),
    ]);

    const store = createBatchedDerivedLinksStore(
      shape,
      shape.__derivedLinks as Parameters<
        typeof createBatchedDerivedLinksStore
      >[1],
      observableClient,
      {} as Client,
      {},
    );

    const unsubscribe = store.subscribe(() => {});
    const sources = [makeInstance("pk-1"), makeInstance("pk-2")];
    store.updateSourceObjects(sources as never, sources);

    // Flush the async buildObjectSetFromLinkDefByType promises for non-batchable.
    await vi.waitFor(() => {
      expect(observeLinks).toHaveBeenCalledTimes(1);
      expect(observeObjectSet).toHaveBeenCalledTimes(2);
    });

    expect(observeLinks.mock.calls[0][1]).toBe("employees");
    unsubscribe();
  });

  it("restarts batched observation when source objects change", () => {
    const unsubscribes: Array<ReturnType<typeof vi.fn>> = [];
    const observeLinks = vi.fn(
      (
        _objs: unknown,
        _linkName: unknown,
        _opts: unknown,
        _obs: Observer<unknown>,
      ) => {
        const unsub = vi.fn();
        unsubscribes.push(unsub);
        return { unsubscribe: unsub };
      },
    );

    const observableClient = {
      observeLinks,
      observeObjectSet: vi.fn(),
    } as unknown as ObservableClient;

    const shape = makeShape([batchableLink("employees")]);

    const store = createBatchedDerivedLinksStore(
      shape,
      shape.__derivedLinks as Parameters<
        typeof createBatchedDerivedLinksStore
      >[1],
      observableClient,
      {} as Client,
      {},
    );

    store.subscribe(() => {});

    store.updateSourceObjects([makeInstance("pk-1")] as never, [
      makeInstance("pk-1"),
    ]);
    expect(observeLinks).toHaveBeenCalledTimes(1);

    store.updateSourceObjects(
      [makeInstance("pk-1"), makeInstance("pk-2")] as never,
      [makeInstance("pk-1"), makeInstance("pk-2")],
    );

    expect(observeLinks).toHaveBeenCalledTimes(2);
    expect(unsubscribes[0]).toHaveBeenCalled();
  });
});
