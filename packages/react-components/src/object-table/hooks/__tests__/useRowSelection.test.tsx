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

import type { ObjectTypeDefinition, Osdk, PrimaryKeyType } from "@osdk/api";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useRowSelection } from "../useRowSelection.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

// Helper to create mock data
function createMockData(
  count: number,
): Array<
  Osdk.Instance<TestObject, "$allBaseProperties", never, Record<string, never>>
> {
  return Array.from({ length: count }, (_, i) => ({
    $primaryKey: `item-${i}` as PrimaryKeyType<TestObject>,
    $objectType: "TestObject",
    $apiName: "TestObject",
    $title: `Item ${i}`,
  } as Osdk.Instance<
    TestObject,
    "$allBaseProperties",
    never,
    Record<string, never>
  >));
}

describe("useRowSelection", () => {
  describe("disabled mode (selectionMode: 'none')", () => {
    it("returns empty selection state", () => {
      const data = createMockData(5);
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "none",
          data,
        })
      );

      expect(result.current.rowSelection).toEqual({});
      expect(result.current.isAllSelected).toBe(false);
      expect(result.current.hasSelection).toBe(false);
      expect(result.current.isSelectionEnabled).toBe(false);
    });

    it("does not respond to toggle operations", () => {
      const data = createMockData(5);
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "none",
          data,
        })
      );

      act(() => {
        result.current.onToggleRow("item-0", 0);
      });

      expect(result.current.rowSelection).toEqual({});
      expect(result.current.hasSelection).toBe(false);

      act(() => {
        result.current.onToggleAll();
      });

      expect(result.current.rowSelection).toEqual({});
      expect(result.current.hasSelection).toBe(false);
    });
  });

  describe("uncontrolled mode", () => {
    describe("single selection mode", () => {
      it("selects a single row and calls onRowSelection", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            onRowSelection,
            data,
          })
        );

        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.isSelectionEnabled).toBe(true);
        expect(result.current.rowSelection).toEqual({ "item-0": true });
        expect(result.current.hasSelection).toBe(true);
        expect(onRowSelection).toHaveBeenCalledWith([data[0].$primaryKey]);
      });

      it("deselects when toggling selected row and calls onRowSelection", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            onRowSelection,
            data,
          })
        );

        // Select
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.rowSelection).toEqual({ "item-0": true });

        // Deselect
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.rowSelection).toEqual({});
        expect(result.current.hasSelection).toBe(false);
        expect(onRowSelection).toHaveBeenLastCalledWith([]);
      });

      it("replaces selection when selecting different row", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            data,
          })
        );

        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.rowSelection).toEqual({ "item-0": true });

        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        expect(result.current.rowSelection).toEqual({ "item-1": true });
        expect(result.current.hasSelection).toBe(true);
      });

      it("treats shift-click as a normal click", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            data,
          })
        );
        // First click as the lastSelectedRow
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        // Shift-click
        act(() => {
          result.current.onToggleRow("item-2", 2, true);
        });

        expect(result.current.rowSelection).toEqual({ "item-2": true });
      });
    });

    describe("multiple selection mode", () => {
      it("selects multiple rows independently and calls onRowSelection", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelection,
            data,
          })
        );

        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.rowSelection).toEqual({ "item-0": true });

        act(() => {
          result.current.onToggleRow("item-2", 2);
        });

        expect(result.current.isSelectionEnabled).toBe(true);
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
        });
        expect(result.current.isAllSelected).toBe(false);
        expect(onRowSelection).toHaveBeenLastCalledWith([
          data[0].$primaryKey,
          data[2].$primaryKey,
        ]);
      });

      it("deselects individual rows", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            data,
          })
        );

        // Select two rows
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
        });

        // Deselect one
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.rowSelection).toEqual({ "item-1": true });
      });

      it("selects range with shift-click and calls onRowSelection", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelection,
            data,
          })
        );

        // First click
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        // Shift-click to select range
        act(() => {
          result.current.onToggleRow("item-3", 3, true);
        });

        expect(result.current.rowSelection).toEqual({
          "item-1": true,
          "item-2": true,
          "item-3": true,
        });
        expect(onRowSelection).toHaveBeenLastCalledWith([
          data[1].$primaryKey,
          data[2].$primaryKey,
          data[3].$primaryKey,
        ]);
      });

      it("selects range in reverse order (shift-click up)", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            data,
          })
        );

        // First click on row 3
        act(() => {
          result.current.onToggleRow("item-3", 3);
        });

        // Shift-click to row 1 (upward)
        act(() => {
          result.current.onToggleRow("item-1", 1, true);
        });

        expect(result.current.rowSelection).toEqual({
          "item-1": true,
          "item-2": true,
          "item-3": true,
        });
      });

      it("shift-click without previous selection does not select range", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            data,
          })
        );

        // Shift-click without previous selection
        act(() => {
          result.current.onToggleRow("item-2", 2, true);
        });

        expect(result.current.rowSelection).toEqual({ "item-2": true });
      });

      it("merges range selection with existing selections", () => {
        const data = createMockData(10);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            data,
          })
        );

        // Select row 0
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        // Select row 5
        act(() => {
          result.current.onToggleRow("item-5", 5);
        });

        // Shift-click to row 7 (should keep row 0)
        act(() => {
          result.current.onToggleRow("item-7", 7, true);
        });

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-5": true,
          "item-6": true,
          "item-7": true,
        });
      });

      it("toggles all rows", () => {
        const data = createMockData(3);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelection,
            data,
          })
        );

        expect(result.current.isAllSelected).toBe(false);

        // Select all
        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
        });
        expect(result.current.isAllSelected).toBe(true);
        expect(onRowSelection).toHaveBeenCalledWith([
          data[0].$primaryKey,
          data[1].$primaryKey,
          data[2].$primaryKey,
        ]);

        // Deselect all
        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.rowSelection).toEqual({});
        expect(result.current.isAllSelected).toBe(false);
        expect(onRowSelection).toHaveBeenLastCalledWith([]);
      });
    });
  });

  describe("controlled mode", () => {
    describe("single selection mode", () => {
      it("uses selectedRows prop for selection state", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            selectedRows: [data[1].$primaryKey],
            data,
          })
        );

        expect(result.current.rowSelection).toEqual({ "item-1": true });
        expect(result.current.hasSelection).toBe(true);
      });

      it("calls onRowSelection when toggling but does not update internal state", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result, rerender } = renderHook(
          ({ selectedRows }) =>
            useRowSelection({
              selectionMode: "single",
              selectedRows,
              onRowSelection,
              data,
            }),
          {
            initialProps: { selectedRows: [] as PrimaryKeyType<TestObject>[] },
          },
        );

        expect(result.current.rowSelection).toEqual({});

        // Click row
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        // Callback is called
        expect(onRowSelection).toHaveBeenCalledWith([data[0].$primaryKey]);

        // State doesn't change (controlled)
        expect(result.current.rowSelection).toEqual({});

        // Parent updates prop
        rerender({ selectedRows: [data[0].$primaryKey] });

        // Now state reflects the prop
        expect(result.current.rowSelection).toEqual({ "item-0": true });
      });
    });

    describe("multiple selection mode", () => {
      it("uses selectedRows prop for selection state", () => {
        const data = createMockData(5);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [data[0].$primaryKey, data[2].$primaryKey],
            data,
          })
        );

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
        });
      });

      it("calls onRowSelection when toggling rows", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [data[0].$primaryKey],
            onRowSelection,
            data,
          })
        );

        // Add selection to selectedRows
        act(() => {
          result.current.onToggleRow("item-2", 2);
        });

        expect(onRowSelection).toHaveBeenCalledWith([
          data[0].$primaryKey,
          data[2].$primaryKey,
        ]);

        // Remove selection from selectedRows
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(onRowSelection).toHaveBeenCalledWith([]);
      });

      it("calls onRowSelection for shift-click range selection", () => {
        const data = createMockData(5);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [],
            onRowSelection,
            data,
          })
        );

        // First click
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        // Shift-click
        act(() => {
          result.current.onToggleRow("item-3", 3, true);
        });

        expect(onRowSelection).toHaveBeenLastCalledWith([
          data[1].$primaryKey,
          data[2].$primaryKey,
          data[3].$primaryKey,
        ]);
      });

      it("calls onRowSelection when toggling all rows", () => {
        const data = createMockData(3);
        const onRowSelection = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [],
            onRowSelection,
            data,
          })
        );

        act(() => {
          result.current.onToggleAll();
        });

        expect(onRowSelection).toHaveBeenCalledWith([
          data[0].$primaryKey,
          data[1].$primaryKey,
          data[2].$primaryKey,
        ]);
      });

      it("updates when selectedRows prop changes", () => {
        const data = createMockData(5);
        const { result, rerender } = renderHook(
          ({ selectedRows }) =>
            useRowSelection({
              selectionMode: "multiple",
              selectedRows,
              data,
            }),
          {
            initialProps: {
              selectedRows: [data[0].$primaryKey] as PrimaryKeyType<
                TestObject
              >[],
            },
          },
        );

        expect(result.current.rowSelection).toEqual({ "item-0": true });

        rerender({
          selectedRows: [data[1].$primaryKey, data[2].$primaryKey],
        });

        expect(result.current.rowSelection).toEqual({
          "item-1": true,
          "item-2": true,
        });
      });
    });
  });
  describe("edge cases", () => {
    it("handles undefined data gracefully", () => {
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          data: undefined,
        })
      );

      expect(result.current.rowSelection).toEqual({});
      expect(result.current.isAllSelected).toBe(false);
      expect(result.current.hasSelection).toBe(false);

      // Should not crash
      act(() => {
        result.current.onToggleAll();
        result.current.onToggleRow("item-0", 0);
      });
    });

    it("handles empty data array", () => {
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          data: [],
        })
      );

      expect(result.current.rowSelection).toEqual({});
      expect(result.current.isAllSelected).toBe(false);

      act(() => {
        result.current.onToggleAll();
      });

      expect(result.current.rowSelection).toEqual({});
    });
  });
});
