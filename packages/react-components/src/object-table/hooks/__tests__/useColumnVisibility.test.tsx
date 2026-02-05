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
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { SELECTION_COLUMN_ID } from "../../utils/constants.js";
import { useColumnVisibility } from "../useColumnVisibility.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

describe(useColumnVisibility, () => {
  describe("column visibility", () => {
    it("returns empty columnVisibility when no columnDefinitions provided", () => {
      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions: undefined,
        })
      );

      expect(result.current.columnVisibility).toEqual({});
    });

    it("initializes all columns as visible by default", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      expect(result.current.columnVisibility).toEqual({
        name: true,
        email: true,
      });
    });

    it("handles mixed column types with different visibility states", async () => {
      const mockRdpCreator = (() => ({})) as unknown as DerivedProperty.Creator<
        TestObject,
        SimplePropertyDef
      >;

      const columnDefinitions: Array<
        ColumnDefinition<
          TestObject,
          { myRdp: SimplePropertyDef },
          { myFunction: QueryDefinition<{}> }
        >
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
        {
          locator: { type: "function", id: "myFunction" },
          isVisible: false,
        },
        {
          locator: { type: "rdp", id: "myRdp", creator: mockRdpCreator },
          isVisible: true,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      await waitFor(() => {
        expect(result.current.columnVisibility).toEqual({
          name: true,
          myFunction: false,
          myRdp: true,
          email: true,
        });
      });
    });

    it("updates columnVisibility when columnDefinitions change", async () => {
      const initialColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
      ];

      const { result, rerender } = renderHook(
        ({ columnDefinitions }) =>
          useColumnVisibility({
            columnDefinitions,
          }),
        {
          initialProps: { columnDefinitions: initialColumnDefinitions },
        },
      );

      await waitFor(() => {
        expect(result.current.columnVisibility).toEqual({
          name: true,
        });
      });

      const updatedColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: false,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
          isVisible: true,
        },
      ];

      rerender({ columnDefinitions: updatedColumnDefinitions });

      await waitFor(() => {
        expect(result.current.columnVisibility).toEqual({
          name: false,
          email: true,
        });
      });
    });

    it("respects explicit isVisible: false", async () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "age" as TestObjectKeys },
          isVisible: false,
        },
        {
          locator: { type: "property", id: "id" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      await waitFor(() => {
        expect(result.current.columnVisibility).toEqual({
          name: true,
          email: true,
          age: false,
          id: true,
        });
      });
    });
  });

  describe("onColumnVisibilityChanged callback", () => {
    it("calls onColumnVisibilityChanged when visibility changes", () => {
      const onColumnVisibilityChanged = vi.fn();
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
          isVisible: true,
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
          onColumnVisibilityChanged,
        })
      );

      act(() => {
        result.current.onColumnVisibilityChange({
          name: true,
          email: false,
        });
      });

      expect(onColumnVisibilityChanged).toHaveBeenCalledWith([
        { columnId: "name", isVisible: true },
        { columnId: "email", isVisible: false },
      ]);
    });

    it("calls onColumnVisibilityChanged with updater function", () => {
      const onColumnVisibilityChanged = vi.fn();
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
          isVisible: true,
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
          onColumnVisibilityChanged,
        })
      );

      act(() => {
        result.current.onColumnVisibilityChange((prev) => ({
          ...prev,
          email: false,
        }));
      });

      expect(onColumnVisibilityChanged).toHaveBeenCalledWith([
        { columnId: "name", isVisible: true },
        { columnId: "email", isVisible: false },
      ]);
    });

    it("updates internal state and calls callback when hiding a column", () => {
      const onColumnVisibilityChanged = vi.fn();
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
          isVisible: true,
        },
        {
          locator: { type: "property", id: "age" as TestObjectKeys },
          isVisible: true,
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
          onColumnVisibilityChanged,
        })
      );

      expect(result.current.columnVisibility).toEqual({
        name: true,
        email: true,
        age: true,
      });

      act(() => {
        result.current.onColumnVisibilityChange({
          name: true,
          email: false,
          age: true,
        });
      });

      expect(result.current.columnVisibility).toEqual({
        name: true,
        email: false,
        age: true,
      });

      expect(onColumnVisibilityChanged).toHaveBeenCalledWith([
        { columnId: "name", isVisible: true },
        { columnId: "email", isVisible: false },
        { columnId: "age", isVisible: true },
      ]);
    });

    it("does not call callback when callback is not provided", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
          isVisible: true,
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      // Should not throw
      act(() => {
        result.current.onColumnVisibilityChange({
          name: false,
        });
      });

      expect(result.current.columnVisibility).toEqual({
        name: false,
      });
    });
  });

  describe("column ordering", () => {
    it("initializes column order from column definitions", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "age" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      expect(result.current.columnOrder).toEqual(["name", "email", "age"]);
    });

    it("includes selection column first when hasSelectionColumn is true", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
          hasSelectionColumn: true,
        })
      );

      expect(result.current.columnOrder).toEqual([
        SELECTION_COLUMN_ID,
        "name",
        "email",
      ]);
    });

    it("updates column order when onColumnOrderChange is called", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "age" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      expect(result.current.columnOrder).toEqual(["name", "email", "age"]);

      act(() => {
        result.current.onColumnOrderChange(["email", "age", "name"]);
      });

      expect(result.current.columnOrder).toEqual(["email", "age", "name"]);
    });

    it("supports updater function for column order change", () => {
      const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "age" as TestObjectKeys },
        },
      ];

      const { result } = renderHook(() =>
        useColumnVisibility({
          columnDefinitions,
        })
      );

      act(() => {
        result.current.onColumnOrderChange((prev) => {
          // Move "age" to the front
          const newOrder = [...prev];
          const ageIndex = newOrder.indexOf("age");
          newOrder.splice(ageIndex, 1);
          newOrder.unshift("age");
          return newOrder;
        });
      });

      expect(result.current.columnOrder).toEqual(["age", "name", "email"]);
    });

    it("updates column order when columnDefinitions change", async () => {
      const initialColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      const { result, rerender } = renderHook(
        ({ columnDefinitions }) =>
          useColumnVisibility({
            columnDefinitions,
          }),
        {
          initialProps: { columnDefinitions: initialColumnDefinitions },
        },
      );

      expect(result.current.columnOrder).toEqual(["name", "email"]);

      const updatedColumnDefinitions: Array<
        ColumnDefinition<TestObject, {}, {}>
      > = [
        {
          locator: { type: "property", id: "age" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "name" as TestObjectKeys },
        },
        {
          locator: { type: "property", id: "email" as TestObjectKeys },
        },
      ];

      rerender({ columnDefinitions: updatedColumnDefinitions });

      await waitFor(() => {
        expect(result.current.columnOrder).toEqual(["age", "name", "email"]);
      });
    });
  });
});
