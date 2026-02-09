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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { ColumnDef } from "@tanstack/react-table";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SELECTION_COLUMN_ID } from "../../utils/constants.js";
import { useColumnVisibility } from "../useColumnVisibility.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

// Helper to create mock ColumnDef objects that mirror what useColumnDefs would produce
function createMockColumn<T>(
  id: string,
  isVisible?: boolean,
): ColumnDef<T> {
  return {
    id,
    meta: isVisible !== undefined ? { isVisible } : undefined,
  } as ColumnDef<T>;
}

describe(useColumnVisibility, () => {
  describe("column visibility", () => {
    it("returns empty columnVisibility when no columnDefinitions provided", () => {
      const allColumns: ColumnDef<unknown>[] = [];
      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
        })
      );

      expect(result.current.columnVisibility).toEqual({});
    });

    it("initializes all columns as visible by default", () => {
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name"),
        createMockColumn("email"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
        })
      );

      expect(result.current.columnVisibility).toEqual({
        name: true,
        email: true,
      });
    });

    it("handles mixed column types with different visibility states", () => {
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
        createMockColumn("myFunction", false),
        createMockColumn("myRdp", true),
        createMockColumn("email"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
        })
      );

      expect(result.current.columnVisibility).toEqual({
        name: true,
        myFunction: false,
        myRdp: true,
        email: true,
      });
    });

    it("updates columnVisibility when columnDefinitions change", () => {
      const initialColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
      ];

      const { result, rerender } = renderHook(
        ({ allColumns }) =>
          useColumnVisibility<TestObject>({
            allColumns,
          }),
        {
          initialProps: { allColumns: initialColumns },
        },
      );

      expect(result.current.columnVisibility).toEqual({
        name: true,
      });

      const updatedColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", false),
        createMockColumn("email", true),
      ];

      rerender({ allColumns: updatedColumns });

      expect(result.current.columnVisibility).toEqual({
        name: false,
        email: true,
      });
    });

    it("respects explicit isVisible: false", () => {
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
        createMockColumn("email"),
        createMockColumn("age", false),
        createMockColumn("id"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
        })
      );

      expect(result.current.columnVisibility).toEqual({
        name: true,
        email: true,
        age: false,
        id: true,
      });
    });
  });

  describe("onColumnVisibilityChanged callback", () => {
    it("calls onColumnVisibilityChanged when visibility changes", () => {
      const onColumnVisibilityChanged = vi.fn();
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
        createMockColumn("email", true),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
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
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
        createMockColumn("email", true),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
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
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
        createMockColumn("email", true),
        createMockColumn("age", true),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
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
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name", true),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
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
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name"),
        createMockColumn("email"),
        createMockColumn("age"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
        })
      );

      expect(result.current.columnOrder).toEqual(["name", "email", "age"]);
    });

    it("includes selection column first when hasSelectionColumn is true", () => {
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn(SELECTION_COLUMN_ID),
        createMockColumn("name"),
        createMockColumn("email"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
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
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name"),
        createMockColumn("email"),
        createMockColumn("age"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
        })
      );

      expect(result.current.columnOrder).toEqual(["name", "email", "age"]);

      act(() => {
        result.current.onColumnOrderChange(["email", "age", "name"]);
      });

      expect(result.current.columnOrder).toEqual(["email", "age", "name"]);
    });

    it("supports updater function for column order change", () => {
      const allColumns: ColumnDef<unknown>[] = [
        createMockColumn("name"),
        createMockColumn("email"),
        createMockColumn("age"),
      ];

      const { result } = renderHook(() =>
        useColumnVisibility<TestObject>({
          allColumns,
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

    it("updates column order when columnDefinitions change", () => {
      const initialColumns: ColumnDef<unknown>[] = [
        createMockColumn("name"),
        createMockColumn("email"),
      ];

      const { result, rerender } = renderHook(
        ({ allColumns }) =>
          useColumnVisibility<TestObject>({
            allColumns,
          }),
        {
          initialProps: { allColumns: initialColumns },
        },
      );

      expect(result.current.columnOrder).toEqual(["name", "email"]);

      const updatedColumns: ColumnDef<unknown>[] = [
        createMockColumn("age"),
        createMockColumn("name"),
        createMockColumn("email"),
      ];

      rerender({ allColumns: updatedColumns });

      expect(result.current.columnOrder).toEqual(["age", "name", "email"]);
    });
  });
});
