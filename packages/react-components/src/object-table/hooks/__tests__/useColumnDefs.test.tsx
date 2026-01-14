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
  ObjectMetadata,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { AccessorKeyColumnDef } from "@tanstack/react-table";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useColumnDefs } from "../useColumnDefs.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

type TestObjectKeys = PropertyKeys<TestObject>;

const mockProperties: Record<string, ObjectMetadata.Property> = {
  id: {
    type: "string",
    displayName: "ID",
  } as ObjectMetadata.Property,
  name: {
    type: "string",
    displayName: "Name",
  } as ObjectMetadata.Property,
  age: {
    type: "integer",
    displayName: "Age",
  } as ObjectMetadata.Property,
  email: {
    type: "string",
    displayName: "Email Address",
  } as ObjectMetadata.Property,
};

describe(useColumnDefs, () => {
  describe("when no columnDefinitions provided", () => {
    it("generates default columns from properties", () => {
      const { result } = renderHook(() =>
        useColumnDefs(undefined, mockProperties)
      );

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

    it("returns empty columns array when properties is undefined", () => {
      const { result } = renderHook(() => useColumnDefs(undefined, undefined));

      expect(result.current.columns).toEqual([]);
    });

    it("uses property key as header when displayName is not available", () => {
      const propsWithoutDisplayName: Record<
        string,
        ObjectMetadata.Property
      > = {
        noDisplayName: {
          type: "string",
        } as ObjectMetadata.Property,
      };

      const { result } = renderHook(() =>
        useColumnDefs(undefined, propsWithoutDisplayName)
      );

      expect(result.current.columns).toHaveLength(1);
      expect(result.current.columns[0]).toEqual({
        accessorKey: "noDisplayName",
        header: "noDisplayName",
      });
    });
  });

  describe("when columnDefinitions is provided", () => {
    it("builds columns from columnDefinitions with property locators", () => {
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

      const { result } = renderHook(() =>
        useColumnDefs(columnDefinitions, mockProperties)
      );

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

    it("builds columns from columnDefinitions even when properties is undefined", () => {
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

      const { result } = renderHook(() =>
        useColumnDefs(columnDefinitions, undefined)
      );

      expect(result.current.columns.length).toBe(2);
      const nameColumn = result.current.columns[0];
      expect(nameColumn.header).toBeUndefined();
    });

    it("builds columns from columnDefinitions with RDP locators", () => {
      const mockRdpCreator = (() => {}) as unknown as DerivedProperty.Creator<
        TestObject,
        SimplePropertyDef
      >;

      const columnDefinitions: Array<
        ColumnDefinition<TestObject, { rdp1: SimplePropertyDef }, {}>
      > = [
        {
          locator: {
            type: "rdp",
            id: "rdp1",
            creator: mockRdpCreator,
          },
        },
      ];

      const { result } = renderHook(() =>
        useColumnDefs(columnDefinitions, mockProperties)
      );

      expect(result.current.columns.length).toBe(1);
      expect(result.current.columns[0].id).toBe("rdp1");
    });

    it("builds columns from columnDefinitions with function locators", () => {
      const columnDefinitions: Array<
        ColumnDefinition<TestObject, {}, { myFunction: any }>
      > = [
        {
          locator: {
            type: "function",
            id: "myFunction",
          },
        },
      ];

      const { result } = renderHook(() =>
        useColumnDefs(columnDefinitions, mockProperties)
      );

      expect(result.current.columns.length).toBe(1);
      expect(result.current.columns[0].id).toBe("myFunction");
    });

    it("supports custom renderHeader and renderCell", () => {
      const customRenderHeader = () => "Custom Header";

      const customRenderCell = vitest.fn((
        object: Osdk.Instance<TestObject>,
      ) => <div>Custom: {(object as unknown as { name: string }).name}</div>);
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          renderHeader: customRenderHeader,
          renderCell: customRenderCell,
        },
      ];

      const { result } = renderHook(() =>
        useColumnDefs(columnDefinitions, mockProperties)
      );

      expect(result.current.columns[0].header).toBe(customRenderHeader);
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

    it("defaults to getValue when renderCell is not provided", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnDefs(columnDefinitions, mockProperties)
      );

      const nameColumn = result.current.columns[0];
      expect(nameColumn.cell).toBeDefined();

      const mockObject = { name: "John" } as unknown as Osdk.Instance<
        TestObject
      >;
      const mockGetValue = vitest.fn(() => "John");
      const mockCellContext = {
        row: { original: mockObject },
        getValue: mockGetValue,
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

    it("updates columns when columnDefinitions change", () => {
      const initialColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
      ];

      const { result, rerender } = renderHook(
        ({ colDefs, props }) => useColumnDefs(colDefs, props),
        {
          initialProps: {
            colDefs: initialColumnDefinitions,
            props: mockProperties,
          },
        },
      );

      expect(result.current.columns).toHaveLength(1);
      expect(result.current.columns[0].id).toBe("name");

      const updatedColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      rerender({ colDefs: updatedColumnDefinitions, props: mockProperties });

      expect(result.current.columns).toHaveLength(1);
      expect(result.current.columns[0].id).toBe("email");
    });
  });
});
