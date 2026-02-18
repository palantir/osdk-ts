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
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { Client } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import type { AccessorKeyColumnDef } from "@tanstack/react-table";
import { renderHook, waitFor } from "@testing-library/react";
import pDefer from "p-defer";
import * as React from "react";
import { describe, expect, it, vitest } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useColumnDefs } from "../useColumnDefs.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

type TestObjectKeys = PropertyKeys<TestObject>;

const mockMetadata = {
  apiName: "TestObject",
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  properties: {
    id: {
      type: "string",
      displayName: "ID",
    },
    name: {
      type: "string",
      displayName: "Name",
    },
    age: {
      type: "integer",
      displayName: "Age",
    },
    email: {
      type: "string",
      displayName: "Email Address",
    },
  },
};
describe(useColumnDefs, () => {
  const createWrapper = (client: Client) => {
    return ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkProvider client={client}>
          {children}
        </OsdkProvider>
      );
    };
  };

  it("returns loading state initially", () => {
    const deferred = pDefer();
    const fakeClient = {
      fetchMetadata: vitest.fn(() => deferred.promise),
    } as unknown as Client;

    const wrapper = createWrapper(fakeClient);

    const { result } = renderHook(
      () => useColumnDefs(TestObjectType),
      { wrapper },
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.columns).toEqual([]);
    expect(result.current.error).toBeUndefined();
  });

  describe("when no columnDefinitions provided", () => {
    it("generates default columns from metadata", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType),
        { wrapper },
      );

      expect(result.current.loading).toBe(true);

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns).toHaveLength(4);
      expect(result.current.columns[0]).toEqual({
        accessorKey: "id",
        header: "ID",
      });
      expect(result.current.columns[1]).toEqual({
        accessorKey: "name",
        header: "Name",
      });
      expect(result.current.columns[2]).toEqual({
        accessorKey: "age",
        header: "Age",
      });
      expect(result.current.columns[3]).toEqual({
        accessorKey: "email",
        header: "Email Address",
      });
    });

    it("returns empty columns array when metadata has no properties", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType),
        { wrapper },
      );

      deferred.resolve({
        ...mockMetadata,
        properties: undefined,
      });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns).toEqual([]);
    });

    it("uses property key as header when displayName is not available", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType),
        { wrapper },
      );

      deferred.resolve({
        ...mockMetadata,
        properties: {
          noDisplayName: {
            type: "string",
          },
        },
      });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns).toHaveLength(1);
      expect(result.current.columns[0]).toEqual({
        accessorKey: "noDisplayName",
        header: "noDisplayName",
      });
    });
  });

  describe("when columnDefinitions is provided", () => {
    it("builds columns from columnDefinitions with property locators", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: {
            type: "property",
            id: "name" as TestObjectKeys,
          },
          width: 200,
          minWidth: 100,
          maxWidth: 400,
          resizable: true,
          orderable: true,
          filterable: false,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns).toHaveLength(2);

      const nameColumn = result.current.columns[0];
      expect(nameColumn.id).toBe("name");
      expect(
        (nameColumn as AccessorKeyColumnDef<Osdk.Instance<TestObject>>)
          .accessorKey,
      ).toBe("name");
      expect(nameColumn.header).toBe("Name");
      expect(nameColumn.size).toBe(200);
      expect(nameColumn.minSize).toBe(100);
      expect(nameColumn.maxSize).toBe(400);
      expect(nameColumn.enableResizing).toBe(true);
      expect(nameColumn.enableSorting).toBe(true);
      expect(nameColumn.enableColumnFilter).toBe(false);

      const emailColumn = result.current.columns[1];
      expect(emailColumn.id).toBe("email");
      expect(
        (emailColumn as AccessorKeyColumnDef<Osdk.Instance<TestObject>>)
          .accessorKey,
      ).toBe("email");
      expect(emailColumn.header).toBe("Email Address");
    });

    it("builds columns from columnDefinitions even when metadata has no properties", async () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: {
            type: "property",
            id: "name" as TestObjectKeys,
          },
          width: 200,
          minWidth: 100,
          maxWidth: 400,
          resizable: true,
          orderable: true,
          filterable: false,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve({
        ...mockMetadata,
        properties: undefined,
      });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns.length).toBe(2);
      const nameColumn = result.current.columns[0];
      expect(nameColumn.header).toBeUndefined();

      const emailColumn = result.current.columns[1];
      expect(emailColumn.header).toBeUndefined();
    });

    it("uses custom renderHeader when provided", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const customHeader = () => <div>Custom Header</div>;

      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          renderHeader: customHeader,
        },
      ];

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns[0].header).toBe(customHeader);
    });

    it("uses custom renderCell when provided", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const customRenderCell = vitest.fn((
        object: Osdk.Instance<TestObject>,
      ) => <div>Custom: {(object as unknown as { name: string }).name}</div>);

      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          renderCell: customRenderCell,
        },
      ];

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const nameColumn = result.current.columns[0];
      expect(nameColumn.cell).toBeDefined();

      // Test the cell renderer
      const mockObject = { name: "John" } as unknown as Osdk.Instance<
        TestObject
      >;
      const mockCellContext = {
        row: { original: mockObject },
        getValue: () => "John",
      };

      if (typeof nameColumn.cell === "function") {
        (nameColumn.cell as unknown as (
          ctx: typeof mockCellContext,
        ) => unknown)(mockCellContext);
      }

      expect(customRenderCell).toHaveBeenCalledWith(
        mockObject,
        { type: "property", id: "name" },
      );
    });

    it("defaults to getValue when renderCell is not provided", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const nameColumn = result.current.columns[0];
      expect(nameColumn.cell).toBeDefined();

      const mockObject = { name: "John" } as unknown as Osdk.Instance<
        TestObject
      >;
      const mockGetValue = vitest.fn(() => "John");
      const mockCellContext = {
        row: { original: mockObject, id: "row-1" },
        getValue: mockGetValue,
        column: { id: "name", columnDef: { meta: {} } },
        table: {
          options: {
            meta: {},
          },
        },
      };

      let cellResult: unknown;

      if (typeof nameColumn.cell === "function") {
        cellResult = (nameColumn.cell as unknown as (
          ctx: typeof mockCellContext,
        ) => unknown)(mockCellContext);
      }
      expect(cellResult).toBe("John");
      expect(mockGetValue).toHaveBeenCalled();
    });

    it("handles function column locators", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const columnDefinitions: Array<
        ColumnDefinition<TestObject, {}, { myFunction: any }>
      > = [
        {
          locator: { type: "function", id: "myFunction" },
          width: 150,
        },
      ];

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns).toHaveLength(1);

      const functionColumn = result.current.columns[0];
      expect(functionColumn.id).toBe("myFunction");
      expect(
        (functionColumn as AccessorKeyColumnDef<Osdk.Instance<TestObject>>)
          .accessorKey,
      ).toBe("myFunction");
      expect(functionColumn.header).toBeUndefined();
      expect(functionColumn.size).toBe(150);
    });

    it("handles RDP column locators", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const mockRdpCreator = vitest.fn() as unknown as DerivedProperty.Creator<
        TestObject,
        SimplePropertyDef
      >;

      const columnDefinitions: Array<
        ColumnDefinition<TestObject, { myRdp: SimplePropertyDef }, {}>
      > = [
        {
          locator: { type: "rdp", id: "myRdp", creator: mockRdpCreator },
          width: 180,
        },
      ];

      const { result } = renderHook(
        () => useColumnDefs(TestObjectType, columnDefinitions),
        { wrapper },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.columns).toHaveLength(1);

      const rdpColumn = result.current.columns[0];
      expect(rdpColumn.id).toBe("myRdp");
      expect(
        (rdpColumn as AccessorKeyColumnDef<Osdk.Instance<TestObject>>)
          .accessorKey,
      ).toBe("myRdp");
      expect(rdpColumn.header).toBeUndefined();
      expect(rdpColumn.size).toBe(180);
    });

    it("updates columns when columnDefinitions changed", async () => {
      const deferred = pDefer();
      const fakeClient = {
        fetchMetadata: vitest.fn(() => deferred.promise),
      } as unknown as Client;

      const wrapper = createWrapper(fakeClient);

      const initialColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
      ];

      type ColDefs =
        | Array<
          ColumnDefinition<TestObject, Record<string, SimplePropertyDef>, {}>
        >
        | undefined;

      const { result, rerender } = renderHook(
        ({ colDefs }: { colDefs: ColDefs }) =>
          useColumnDefs(TestObjectType, colDefs),
        {
          initialProps: { colDefs: initialColumnDefinitions as ColDefs },
          wrapper,
        },
      );

      deferred.resolve(mockMetadata);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const firstColumns = result.current.columns;

      const updatedColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      // Rerender with new columnDefinitions
      rerender({ colDefs: updatedColumnDefinitions });

      // Updated columns should have two items
      const updatedColumns = result.current.columns;

      expect(firstColumns.length).toBe(1);
      expect(updatedColumns.length).toBe(2);
    });
  });

  it("handles metadata fetch errors", async () => {
    const deferred = pDefer();
    const fakeClient = {
      fetchMetadata: vitest.fn(() => deferred.promise),
    } as unknown as Client;

    const wrapper = createWrapper(fakeClient);

    const { result } = renderHook(
      () => useColumnDefs(TestObjectType),
      { wrapper },
    );

    const error = new Error("Failed to fetch metadata");
    deferred.reject(error);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.columns).toEqual([]);
  });

  it("memoizes columns based on metadata properties", async () => {
    const deferred = pDefer();
    const fakeClient = {
      fetchMetadata: vitest.fn(() => deferred.promise),
    } as unknown as Client;

    const wrapper = createWrapper(fakeClient);

    const { result, rerender } = renderHook(
      () => useColumnDefs(TestObjectType),
      { wrapper },
    );

    deferred.resolve(mockMetadata);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const firstColumns = result.current.columns;

    // Rerender without changing metadata
    rerender();

    // Columns should be the same reference (memoized)
    expect(result.current.columns).toBe(firstColumns);
  });
});
