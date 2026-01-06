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

import type {
  DerivedProperty,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { Client } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useObjectTableData } from "../useObjectTableData.js";

// Mock the useObjectSet hook from @osdk/react/experimental
vi.mock("@osdk/react/experimental", () => ({
  useObjectSet: vi.fn((objectSet, options) => {
    return {
      data: [],
      isLoading: false,
      error: undefined,
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      // Return the options to verify they were passed correctly
      _testOptions: options,
    };
  }),
}));

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

const mockObjectSet = {
  objectType: TestObjectType,
} as unknown as ObjectSet<TestObject>;

describe(useObjectTableData, () => {
  const createWrapper = (client: Client) => {
    return ({ children }: React.PropsWithChildren) => {
      return <OsdkProvider client={client}>{children}</OsdkProvider>;
    };
  };

  const fakeClient = {} as unknown as Client;
  const wrapper = createWrapper(fakeClient);

  it("calls useObjectSet with pageSize of 50", () => {
    const { result } = renderHook(
      () => useObjectTableData(mockObjectSet),
      { wrapper },
    );

    expect((result.current as any)._testOptions).toEqual({
      withProperties: undefined,
      pageSize: 50,
    });
  });

  it("calls useObjectSet without withProperties when no columnDefinitions provided", () => {
    const { result } = renderHook(
      () => useObjectTableData(mockObjectSet, undefined),
      { wrapper },
    );

    expect((result.current as any)._testOptions.withProperties).toBeUndefined();
    expect((result.current as any)._testOptions.pageSize).toBe(50);
  });

  it("calls useObjectSet without withProperties when columnDefinitions have no RDP columns", () => {
    const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
      {
        locator: { type: "property", propertyKey: "name" as TestObjectKeys },
      },
      {
        locator: { type: "property", propertyKey: "email" as TestObjectKeys },
      },
    ];

    const { result } = renderHook(
      () => useObjectTableData(mockObjectSet, columnDefinitions),
      { wrapper },
    );

    expect((result.current as any)._testOptions.withProperties).toEqual({});
    expect((result.current as any)._testOptions.pageSize).toBe(50);
  });

  it("extracts RDP creators and passes them to useObjectSet", () => {
    const mockRdpCreator1 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;
    const mockRdpCreator2 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const columnDefinitions: Array<
      ColumnDefinition<
        TestObject,
        { rdp1: any; rdp2: any },
        { myFunction: any }
      >
    > = [
      {
        locator: { type: "property", propertyKey: "name" as TestObjectKeys },
      },
      {
        locator: { type: "rdp", id: "rdp1", creator: mockRdpCreator1 },
      },
      {
        locator: { type: "rdp", id: "rdp2", creator: mockRdpCreator2 },
      },
      {
        locator: { type: "function", id: "myFunction" },
      },
    ];

    const { result } = renderHook(
      () => useObjectTableData(mockObjectSet, columnDefinitions),
      { wrapper },
    );

    expect((result.current as any)._testOptions.withProperties).toEqual({
      rdp1: mockRdpCreator1,
      rdp2: mockRdpCreator2,
    });
  });

  it("memoizes withProperties based on columnDefinitions", () => {
    const mockRdpCreator = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const columnDefinitions: Array<
      ColumnDefinition<TestObject, { myRdp: any }, {}>
    > = [
      {
        locator: { type: "rdp", id: "myRdp", creator: mockRdpCreator },
      },
    ];

    const { result, rerender } = renderHook(
      ({ colDefs }) => useObjectTableData(mockObjectSet, colDefs),
      {
        initialProps: { colDefs: columnDefinitions },
        wrapper,
      },
    );

    const firstWithProperties = (result.current as any)._testOptions
      .withProperties;

    // Rerender with same columnDefinitions reference
    rerender({ colDefs: columnDefinitions });

    // Should be the same reference (memoized)
    expect((result.current as any)._testOptions.withProperties).toBe(
      firstWithProperties,
    );
  });

  it("updates withProperties when columnDefinitions change", () => {
    const mockRdpCreator1 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;
    const mockRdpCreator2 = vi.fn() as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const initialColumnDefinitions: Array<
      ColumnDefinition<TestObject, { rdp1: any }, {}>
    > = [
      {
        locator: { type: "rdp", id: "rdp1", creator: mockRdpCreator1 },
      },
    ];

    const { result, rerender } = renderHook(
      ({ colDefs }: { colDefs: any }) =>
        useObjectTableData(mockObjectSet, colDefs),
      {
        initialProps: { colDefs: initialColumnDefinitions as any },
        wrapper,
      },
    );

    expect((result.current as any)._testOptions.withProperties).toEqual({
      rdp1: mockRdpCreator1,
    });

    const updatedColumnDefinitions: Array<
      ColumnDefinition<TestObject, { rdp2: any }, {}>
    > = [
      {
        locator: { type: "rdp", id: "rdp2", creator: mockRdpCreator2 },
      },
    ];

    rerender({ colDefs: updatedColumnDefinitions as any });

    expect((result.current as any)._testOptions.withProperties).toEqual({
      rdp2: mockRdpCreator2,
    });
  });

  it("returns useObjectSet result structure", () => {
    const { result } = renderHook(
      () => useObjectTableData(mockObjectSet),
      { wrapper },
    );

    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("isLoading");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("fetchNextPage");
    expect(result.current).toHaveProperty("hasNextPage");
    expect(result.current).toHaveProperty("isFetchingNextPage");
  });
});
