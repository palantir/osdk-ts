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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import { createClient } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import {
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/observable";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";

import { OsdkContext } from "../src/new/OsdkContext.js";
import { useLinks } from "../src/new/useLinks.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const mockObject: Osdk.Instance<typeof MockObjectType> = {
  $objectType: "MockObject",
  $primaryKey: "obj-123",
  $apiName: "MockObject",
} as any;

describe("useLinks enabled option", () => {
  const mockObserveLinks = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeLinks: mockObserveLinks,
      canonicalizeOptions: vitest.fn((opts) => opts),
    } as any;

    return ({ children }: React.PropsWithChildren) =>
      React.createElement(
        OsdkContext.Provider,
        {
          value: {
            client: createClient(
              "https://stack.palantir.com",
              "ri.ontology.main.ontology.test",
              () => Promise.resolve("token"),
            ),
            observableClient,
            devtoolsEnabled: false,
          },
        },
        children,
      );
  };

  beforeEach(() => {
    mockObserveLinks.mockClear();
    mockObserveLinks.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should NOT call observeLinks when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useLinks(mockObject, "relatedObjects", { enabled: false }),
      { wrapper },
    );

    expect(mockObserveLinks).not.toHaveBeenCalled();
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useLinks(mockObject, "relatedObjects", { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveLinks).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
  });

  it("should enable links query when parent object becomes available", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ obj }) => useLinks(obj, "relatedObjects", { enabled: !!obj }),
      {
        wrapper,
        initialProps: { obj: undefined as typeof mockObject | undefined },
      },
    );

    expect(mockObserveLinks).not.toHaveBeenCalled();

    rerender({ obj: mockObject });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
  });

  it("should pass dedupeInterval with default of 2000", () => {
    const wrapper = createWrapper();

    renderHook(() => useLinks(mockObject, "relatedObjects"), { wrapper });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
    const options = mockObserveLinks.mock.calls[0][2];
    expect(options.dedupeInterval).toBe(2_000);
  });

  it("should pass custom dedupeIntervalMs to observeLinks", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useLinks(mockObject, "relatedObjects", {
          dedupeIntervalMs: 5000,
        }),
      { wrapper },
    );

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
    const options = mockObserveLinks.mock.calls[0][2];
    expect(options.dedupeInterval).toBe(5000);
  });

  it("should default linkedObjectsBySourcePrimaryKey to empty map before payload", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useLinks(mockObject, "relatedObjects"),
      { wrapper },
    );

    expect(result.current.linkedObjectsBySourcePrimaryKey).toBeDefined();
    expect(result.current.linkedObjectsBySourcePrimaryKey.size).toBe(0);
  });

  it("should return linkedObjectsBySourcePrimaryKey from observer payload", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useLinks(mockObject, "relatedObjects"),
      { wrapper },
    );

    const observer = mockObserveLinks.mock.calls[0][3];

    const linkedObj = {
      $objectType: "LinkedObject",
      $primaryKey: "linked-1",
      $apiName: "LinkedObject",
    };

    act(() => {
      observer.next({
        resolvedList: [linkedObj],
        linkedObjectsBySourcePrimaryKey: new Map([["obj-123", [linkedObj]]]),
        status: "loaded",
        isOptimistic: false,
        hasMore: false,
      });
    });

    expect(
      result.current.linkedObjectsBySourcePrimaryKey.get("obj-123"),
    ).toEqual([linkedObj]);
  });

  it("should forward $includeAllBaseObjectProperties to observeLinks", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useLinks(mockObject, "relatedObjects", {
          $includeAllBaseObjectProperties: true,
        }),
      { wrapper },
    );

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
    const options = mockObserveLinks.mock.calls[0][2];
    expect(options.$includeAllBaseObjectProperties).toBe(true);
  });

  describe("resolveToObjectType", () => {
    it("should pass resolveToObjectType: true to observeLinks when true", () => {
      const wrapper = createWrapper();

      renderHook(
        () =>
          useLinks(mockObject, "relatedObjects", {
            resolveToObjectType: true,
          }),
        { wrapper },
      );

      expect(mockObserveLinks).toHaveBeenCalledTimes(1);
      const options = mockObserveLinks.mock.calls[0][2];
      expect(options.resolveToObjectType).toBe(true);
    });

    it("should not include resolveToObjectType when not set", () => {
      const wrapper = createWrapper();

      renderHook(() => useLinks(mockObject, "relatedObjects"), { wrapper });

      expect(mockObserveLinks).toHaveBeenCalledTimes(1);
      const options = mockObserveLinks.mock.calls[0][2];
      expect(options.resolveToObjectType).toBeUndefined();
    });
  });
});

describe("useLinks pagination", () => {
  let fauxFoundry: FauxFoundry;
  let observableClient: ObservableClient;
  let sources: Osdk.Instance<Employee>[];
  let wrapper: React.FC<React.PropsWithChildren>;

  beforeEach(async () => {
    fauxFoundry = new FauxFoundry("https://stack.palantir.com/");
    ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
    const dataStore = fauxFoundry.getDefaultDataStore();
    for (const [sourceId, targetIds] of [
      [1, [2, 3, 4, 5]],
      [10, [6, 7, 8]],
    ] as const) {
      const source = dataStore.registerObject(Employee, {
        employeeId: sourceId,
        fullName: "Source",
      });
      for (const employeeId of targetIds) {
        const target = dataStore.registerObject(Employee, {
          employeeId,
          fullName: employeeId === 3 || employeeId === 7 ? "Other" : "Match",
        });
        dataStore.registerLink(source, "peeps", target, "lead");
      }
    }
    const { client, apiServer } = startNodeApiServer(fauxFoundry, createClient);
    observableClient = createObservableClient(client);
    sources = await Promise.all([
      client(Employee).fetchOne(1),
      client(Employee).fetchOne(10),
    ]);
    wrapper = ({ children }) =>
      React.createElement(
        OsdkContext.Provider,
        { value: { client, observableClient, devtoolsEnabled: false } },
        children,
      );
    return () => apiServer.close();
  });

  afterEach(cleanup);

  it("loads, paginates, and refreshes links", async () => {
    const { result } = renderHook(
      () =>
        useLinks(sources[0], "peeps", {
          where: { fullName: "Match" },
          pageSize: 2,
          orderBy: { employeeId: "asc" },
        }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.links?.map((obj) => obj.$primaryKey)).toEqual([2, 4]);
    expect(result.current.hasMore).toBe(true);
    await act(async () => {
      await result.current.fetchMore?.();
    });
    await waitFor(() =>
      expect(result.current.links?.map((obj) => obj.$primaryKey)).toEqual([
        2, 4, 5,
      ]),
    );
    expect(result.current.hasMore).toBe(false);

    const dataStore = fauxFoundry.getDefaultDataStore();
    const source = dataStore.getObjectOrThrow(Employee.apiName, 1);
    dataStore.unregisterLink(
      source,
      "peeps",
      dataStore.getObjectOrThrow(Employee.apiName, 2),
      "lead",
    );
    const added = dataStore.registerObject(Employee, {
      employeeId: 9,
      fullName: "Match",
    });
    dataStore.registerLink(source, "peeps", added, "lead");
    await act(() => observableClient.invalidateObjectType(Employee));

    await waitFor(() =>
      expect(result.current.links?.map((obj) => obj.$primaryKey)).toEqual([
        4, 5, 9,
      ]),
    );
    expect(result.current.hasMore).toBe(false);
    expect(result.current.linkedObjectsBySourcePrimaryKey.get(1)).toEqual(
      result.current.links,
    );
  });

  it("loads the requested pages for each source when autoFetchMore changes", async () => {
    const { result, rerender } = renderHook(
      ({ autoFetchMore }) =>
        useLinks(sources, "peeps", {
          where: { fullName: "Match" },
          pageSize: 1,
          autoFetchMore,
          orderBy: { employeeId: "asc" },
        }),
      { wrapper, initialProps: { autoFetchMore: false as boolean | number } },
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.links?.map((obj) => obj.$primaryKey)).toEqual([2, 6]);
    expect(result.current.hasMore).toBe(true);

    rerender({ autoFetchMore: 2 });
    await waitFor(() => expect(result.current.links).toHaveLength(4));
    expect(result.current.hasMore).toBe(true);
    expect(
      result.current.linkedObjectsBySourcePrimaryKey
        .get(1)
        ?.map((obj) => obj.$primaryKey),
    ).toEqual([2, 4]);
    expect(
      result.current.linkedObjectsBySourcePrimaryKey
        .get(10)
        ?.map((obj) => obj.$primaryKey),
    ).toEqual([6, 8]);

    rerender({ autoFetchMore: true });
    await waitFor(() => expect(result.current.hasMore).toBe(false));
    expect(result.current.links?.map((obj) => obj.$primaryKey)).toEqual([
      2, 4, 5, 6, 8,
    ]);
  });
});
