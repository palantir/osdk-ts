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
import type { Mock } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useObjectTableData } from "../useObjectTableData.js";

const { mockUseObjectSet, mockUseAsyncColumnData } = vi.hoisted(() => ({
  mockUseObjectSet: vi.fn(),
  mockUseAsyncColumnData: vi.fn(),
}));

vi.mock("@osdk/react/experimental", () => ({
  useObjectSet: mockUseObjectSet,
}));

vi.mock("../useAsyncColumnData.js", () => ({
  useAsyncColumnData: mockUseAsyncColumnData,
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

  beforeEach(() => {
    mockUseObjectSet.mockClear();
    mockUseAsyncColumnData.mockClear();

    // Default mock implementations
    mockUseObjectSet.mockReturnValue({
      data: [],
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
    });

    mockUseAsyncColumnData.mockReturnValue({
      rows: [],
    });
  });

  it("when called with objectSet only, calls useObjectSet and returns rows from useAsyncColumnData", () => {
    const mockBaseRows = [{ $primaryKey: "1" }] as any[];
    const mockFetchMore = () => {};
    mockUseObjectSet.mockReturnValue({
      data: mockBaseRows,
      isLoading: false,
      error: undefined,
      fetchMore: mockFetchMore,
    });

    mockUseAsyncColumnData.mockReturnValue({
      rows: mockBaseRows,
    });

    const { result } = renderHook(
      () => useObjectTableData(mockObjectSet),
      { wrapper },
    );

    expect(mockUseObjectSet).toHaveBeenCalledWith(
      mockObjectSet,
      expect.objectContaining({
        pageSize: 50,
      }),
    );

    expect(mockUseAsyncColumnData).toHaveBeenCalledWith(
      expect.objectContaining({
        objectSet: mockObjectSet,
        baseRows: mockBaseRows,
        withProperties: undefined,
        derivedPropertyKeys: [],
      }),
    );

    expect(result.current).toEqual({
      data: mockBaseRows,
      fetchMore: mockFetchMore,
      isLoading: false,
    });
  });

  it("when columnDefinitions have no RDP columns, calls useAsyncColumnData with empty withProperties,", () => {
    const mockBaseRows = [{ $primaryKey: "1" }] as any[];
    mockUseObjectSet.mockReturnValue({
      data: mockBaseRows,
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
    });

    const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
      },
    ];

    renderHook(
      () => useObjectTableData(mockObjectSet, columnDefinitions),
      { wrapper },
    );

    expect(mockUseAsyncColumnData).toHaveBeenCalledWith(
      expect.objectContaining({
        withProperties: {},
        derivedPropertyKeys: [],
      }),
    );
  });

  it("extracts RDP creators and passes them to useAsyncColumnData", () => {
    const mockBaseRows = [{ $primaryKey: "1" }] as any[];
    mockUseObjectSet.mockReturnValue({
      data: mockBaseRows,
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
    });

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
        locator: { type: "property", id: "name" as TestObjectKeys },
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

    renderHook(
      () => useObjectTableData(mockObjectSet, columnDefinitions),
      { wrapper },
    );

    expect(mockUseAsyncColumnData).toHaveBeenCalledWith(
      expect.objectContaining({
        withProperties: {
          rdp1: mockRdpCreator1,
          rdp2: mockRdpCreator2,
        },
        derivedPropertyKeys: ["rdp1", "rdp2"],
      }),
    );
  });

  it("updates withProperties when columnDefinitions change", () => {
    const mockBaseRows = [{ $primaryKey: "1" }] as any[];
    mockUseObjectSet.mockReturnValue({
      data: mockBaseRows,
      isLoading: false,
      error: undefined,
      fetchMore: vi.fn(),
    });

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

    type ColDefs =
      | Array<
        ColumnDefinition<TestObject, Record<string, SimplePropertyDef>, {}>
      >
      | undefined;

    const { rerender } = renderHook(
      ({ colDefs }: { colDefs: ColDefs }) =>
        useObjectTableData(mockObjectSet, colDefs),
      {
        initialProps: { colDefs: initialColumnDefinitions as ColDefs },
        wrapper,
      },
    );

    const firstCallProps = (mockUseAsyncColumnData as Mock).mock.calls[0][0];
    expect(firstCallProps.withProperties).toEqual({
      rdp1: mockRdpCreator1,
    });

    const updatedColumnDefinitions: Array<
      ColumnDefinition<TestObject, { rdp2: SimplePropertyDef }, {}>
    > = [
      {
        locator: { type: "rdp", id: "rdp2", creator: mockRdpCreator2 },
      },
    ];

    rerender({ colDefs: updatedColumnDefinitions as ColDefs });

    const secondCallProps = (mockUseAsyncColumnData as Mock).mock
      .calls[1][0];
    expect(secondCallProps.withProperties).toEqual({
      rdp2: mockRdpCreator2,
    });
  });
});
