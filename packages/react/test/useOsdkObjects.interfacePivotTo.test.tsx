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

import type { InterfaceDefinition, Osdk } from "@osdk/api";
import { act, renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useLinks } from "../src/new/useLinks.js";
import { useOsdkObjects } from "../src/new/useOsdkObjects.js";

const MockInterface = {
  apiName: "TestInterface",
  type: "interface",
} as unknown as InterfaceDefinition;

describe("useOsdkObjects with interface pivotTo", () => {
  const mockObserveList = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveList.mockClear();
    mockObserveList.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should pass interface link constraint name to observeList via pivotTo", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockInterface, {
          pivotTo: "linkedItems",
          where: { someId: "ri.test.123" },
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockInterface,
        pivotTo: "linkedItems",
      }),
      expect.any(Object),
    );
  });

  it("should pass interface type info so ListsHelper creates InterfaceListQuery", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockInterface, {
          pivotTo: "relatedObjects",
        }),
      { wrapper },
    );

    const callArgs = mockObserveList.mock.calls[0][0];
    expect(callArgs.type.type).toBe("interface");
    expect(callArgs.type.apiName).toBe("TestInterface");
    expect(callArgs.pivotTo).toBe("relatedObjects");
  });

  it("should combine interface pivotTo with RIDs", () => {
    const wrapper = createWrapper();
    const rids = ["ri.test.1", "ri.test.2"];

    renderHook(
      () =>
        useOsdkObjects(MockInterface, {
          pivotTo: "linkedItems",
          rids,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockInterface,
        pivotTo: "linkedItems",
        rids,
      }),
      expect.any(Object),
    );
  });

  it("should not call observeList when enabled is false with interface pivotTo", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockInterface, {
          pivotTo: "linkedItems",
          enabled: false,
        }),
      { wrapper },
    );

    expect(mockObserveList).not.toHaveBeenCalled();
  });
});

describe("useOsdkObjects with resolveToObjectType", () => {
  const mockObserveList = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveList.mockClear();
    mockObserveList.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should pass resolveToObjectType to observeList", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockInterface, {
          pivotTo: "linkedItems",
          resolveToObjectType: true,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockInterface,
        pivotTo: "linkedItems",
        resolveToObjectType: true,
      }),
      expect.any(Object),
    );
  });

  it("should not include resolveToObjectType when not set", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockInterface, {
          pivotTo: "linkedItems",
        }),
      { wrapper },
    );

    const callArgs = mockObserveList.mock.calls[0][0];
    expect(callArgs.resolveToObjectType).toBeUndefined();
  });
});

describe("useLinks with interface source objects", () => {
  const mockObserveLinks = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeLinks: mockObserveLinks,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveLinks.mockClear();
    mockObserveLinks.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should pass interface link constraint name when source is an interface instance", () => {
    const wrapper = createWrapper();

    const interfaceInstance: Osdk.Instance<typeof MockInterface> = {
      $apiName: "TestInterface",
      $objectType: "ConcreteType",
      $primaryKey: "pk-123",
    } as any;

    renderHook(() => useLinks(interfaceInstance, "linkedItems"), { wrapper });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);

    const [objects, linkName] = mockObserveLinks.mock.calls[0];
    expect(objects).toEqual([interfaceInstance]);
    expect(linkName).toBe("linkedItems");
  });

  it("should detect interface source when $apiName differs from $objectType", () => {
    const wrapper = createWrapper();

    const interfaceInstance = {
      $apiName: "TestInterface",
      $objectType: "ConcreteType",
      $primaryKey: "pk-456",
    } as any;

    renderHook(() => useLinks(interfaceInstance, "relatedObjects"), {
      wrapper,
    });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
  });

  it("should return $title from interface instance payload", () => {
    const wrapper = createWrapper();

    const interfaceInstance = {
      $apiName: "TestInterface",
      $objectType: "ConcreteType",
      $primaryKey: "pk-789",
    } as any;

    const { result } = renderHook(
      () => useLinks(interfaceInstance, "linkedItems"),
      { wrapper },
    );

    const observer = mockObserveLinks.mock.calls[0][3];

    const linkedObj = {
      $objectType: "LinkedConcreteType",
      $apiName: "LinkedInterface",
      $primaryKey: "linked-1",
      $title: "Test Title",
      $rid: "ri.test.linked.1",
    };

    act(() => {
      observer.next({
        resolvedList: [linkedObj],
        linkedObjectsBySourcePrimaryKey: new Map([["pk-789", [linkedObj]]]),
        status: "loaded",
        isOptimistic: false,
        hasMore: false,
      });
    });

    expect(result.current.links).toHaveLength(1);
    expect((result.current.links?.[0] as any).$title).toBe("Test Title");
    expect((result.current.links?.[0] as any).$rid).toBe("ri.test.linked.1");
  });
});
