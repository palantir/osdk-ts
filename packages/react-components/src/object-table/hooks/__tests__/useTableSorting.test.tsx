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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useTableSorting } from "../useTableSorting.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

describe("useTableSorting", () => {
  describe("uncontrolled mode", () => {
    it("initializes with empty sorting state when no defaultOrderBy provided", () => {
      const { result } = renderHook(() => useTableSorting({}));

      expect(result.current.sorting).toEqual([]);
    });

    it("initializes with defaultOrderBy when provided", () => {
      const defaultOrderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
        { property: "age" as PropertyKeys<TestObject>, direction: "desc" },
      ];

      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy,
        })
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "age", desc: true },
      ]);
    });

    it("updates internal sorting state when onSortingChange is called", () => {
      const { result } = renderHook(() => useTableSorting<TestObject>({}));

      expect(result.current.sorting).toEqual([]);

      act(() => {
        result.current.onSortingChange([
          { id: "name", desc: false },
        ]);
      });

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);
    });

    it("calls onOrderByChanged with converted format when sorting changes", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          onOrderByChanged,
        })
      );

      act(() => {
        result.current.onSortingChange([
          { id: "name", desc: false },
          { id: "age", desc: true },
        ]);
      });

      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "name", direction: "asc" },
        { property: "age", direction: "desc" },
      ]);
    });

    it("handles clearing sorting", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy: [
            { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
          ],
          onOrderByChanged,
        })
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);

      act(() => {
        result.current.onSortingChange([]);
      });

      expect(result.current.sorting).toEqual([]);
      expect(onOrderByChanged).toHaveBeenCalledWith([]);
    });
  });

  describe("controlled mode", () => {
    it("uses orderBy prop for sorting state", () => {
      const orderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
      ];

      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          orderBy,
        })
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);
    });

    it("enables sorting when orderBy is provided with onOrderByChanged", () => {
      const orderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
      ];
      const onOrderByChanged = vi.fn();

      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          orderBy,
          onOrderByChanged,
        })
      );
    });

    it("when both orderBy and defaultOrderBy are provided, orderBy takes precedence", () => {
      const orderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
      ];

      const defaultOrderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "age" as PropertyKeys<TestObject>, direction: "asc" },
      ];

      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          orderBy,
          defaultOrderBy,
        })
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);
    });

    it("calls onOrderByChanged when sorting changes but does not update internal state", () => {
      const onOrderByChanged = vi.fn();
      const orderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
      ];

      const { result, rerender } = renderHook(
        ({ orderBy }) =>
          useTableSorting<TestObject>({
            orderBy,
            onOrderByChanged,
          }),
        {
          initialProps: { orderBy },
        },
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);

      // Change sorting
      act(() => {
        result.current.onSortingChange([
          { id: "age", desc: true },
        ]);
      });

      // Callback is called
      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "age", direction: "desc" },
      ]);

      // State doesn't change (controlled)
      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);

      // Parent updates prop
      const newOrderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "age" as PropertyKeys<TestObject>, direction: "desc" },
      ];
      rerender({ orderBy: newOrderBy });

      // Now state reflects the prop
      expect(result.current.sorting).toEqual([
        { id: "age", desc: true },
      ]);
    });
  });

  describe("multisort scenarios", () => {
    it("supports sorting by multiple columns simultaneously", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          onOrderByChanged,
        })
      );

      act(() => {
        result.current.onSortingChange([
          { id: "name", desc: false },
          { id: "age", desc: true },
          { id: "email", desc: false },
        ]);
      });

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "age", desc: true },
        { id: "email", desc: false },
      ]);

      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "name", direction: "asc" },
        { property: "age", direction: "desc" },
        { property: "email", direction: "asc" },
      ]);
    });

    it("initializes with multiple columns in defaultOrderBy", () => {
      const defaultOrderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
        { property: "age" as PropertyKeys<TestObject>, direction: "desc" },
        { property: "email" as PropertyKeys<TestObject>, direction: "asc" },
      ];

      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy,
        })
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "age", desc: true },
        { id: "email", desc: false },
      ]);
    });

    it("preserves order of sort columns when adding a new sort", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy: [
            { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
          ],
          onOrderByChanged,
        })
      );

      // Add a second sort column
      act(() => {
        result.current.onSortingChange([
          { id: "name", desc: false },
          { id: "age", desc: true },
        ]);
      });

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "age", desc: true },
      ]);

      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "name", direction: "asc" },
        { property: "age", direction: "desc" },
      ]);
    });

    it("supports removing a column from multisort", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy: [
            { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
            { property: "age" as PropertyKeys<TestObject>, direction: "desc" },
            { property: "email" as PropertyKeys<TestObject>, direction: "asc" },
          ],
          onOrderByChanged,
        })
      );

      // Remove the middle sort column
      act(() => {
        result.current.onSortingChange([
          { id: "name", desc: false },
          { id: "email", desc: false },
        ]);
      });

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "email", desc: false },
      ]);

      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "name", direction: "asc" },
        { property: "email", direction: "asc" },
      ]);
    });

    it("supports changing direction of one column in multisort", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy: [
            { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
            { property: "age" as PropertyKeys<TestObject>, direction: "asc" },
          ],
          onOrderByChanged,
        })
      );

      // Change direction of second column
      act(() => {
        result.current.onSortingChange([
          { id: "name", desc: false },
          { id: "age", desc: true },
        ]);
      });

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "age", desc: true },
      ]);

      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "name", direction: "asc" },
        { property: "age", direction: "desc" },
      ]);
    });

    it("supports reordering sort columns", () => {
      const onOrderByChanged = vi.fn();
      const { result } = renderHook(() =>
        useTableSorting<TestObject>({
          defaultOrderBy: [
            { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
            { property: "age" as PropertyKeys<TestObject>, direction: "desc" },
          ],
          onOrderByChanged,
        })
      );

      // Reorder: age becomes primary, name becomes secondary
      act(() => {
        result.current.onSortingChange([
          { id: "age", desc: true },
          { id: "name", desc: false },
        ]);
      });

      expect(result.current.sorting).toEqual([
        { id: "age", desc: true },
        { id: "name", desc: false },
      ]);

      expect(onOrderByChanged).toHaveBeenCalledWith([
        { property: "age", direction: "desc" },
        { property: "name", direction: "asc" },
      ]);
    });

    it("controlled mode with multisort reflects orderBy changes", () => {
      const onOrderByChanged = vi.fn();
      const initialOrderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
      ];

      const { result, rerender } = renderHook(
        ({ orderBy }) =>
          useTableSorting<TestObject>({
            orderBy,
            onOrderByChanged,
          }),
        {
          initialProps: { orderBy: initialOrderBy },
        },
      );

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
      ]);

      // Parent adds more sort columns
      const newOrderBy: Array<{
        property: PropertyKeys<TestObject>;
        direction: "asc" | "desc";
      }> = [
        { property: "name" as PropertyKeys<TestObject>, direction: "asc" },
        { property: "age" as PropertyKeys<TestObject>, direction: "desc" },
        { property: "email" as PropertyKeys<TestObject>, direction: "asc" },
      ];
      rerender({ orderBy: newOrderBy });

      expect(result.current.sorting).toEqual([
        { id: "name", desc: false },
        { id: "age", desc: true },
        { id: "email", desc: false },
      ]);
    });
  });
});
