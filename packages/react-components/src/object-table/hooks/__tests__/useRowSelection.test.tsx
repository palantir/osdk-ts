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
  count: number
): Array<
  Osdk.Instance<TestObject, "$allBaseProperties", never, Record<string, never>>
> {
  return Array.from(
    { length: count },
    (_, i) =>
      ({
        $primaryKey: `item-${i}` as PrimaryKeyType<TestObject>,
        $objectType: "TestObject",
        $apiName: "TestObject",
        $title: `Item ${i}`,
      }) as Osdk.Instance<
        TestObject,
        "$allBaseProperties",
        never,
        Record<string, never>
      >
  );
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
      expect(result.current.enableRowSelection).toBe(false);
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
      it("selects a single row and calls onRowSelectionChanged", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            onRowSelectionChanged,
            data,
          })
        );

        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(result.current.enableRowSelection).toBe(true);
        expect(result.current.rowSelection).toEqual({ "item-0": true });
        expect(result.current.hasSelection).toBe(true);
        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [data[0]],
          isSelectAll: false,
        });
      });

      it("deselects when toggling selected row and calls onRowSelectionChanged", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            onRowSelectionChanged,
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
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [],
          isSelectAll: false,
        });
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

      it("onToggleAll selects all rows in single selection mode", () => {
        const data = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "single",
            onRowSelectionChanged,
            data,
          })
        );

        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
        });
        expect(result.current.isAllSelected).toBe(true);
        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: data,
          isSelectAll: true,
        });

        // Toggling all again deselects
        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.rowSelection).toEqual({});
        expect(result.current.isAllSelected).toBe(false);
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
      it("selects multiple rows independently and calls onRowSelectionChanged", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
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

        expect(result.current.enableRowSelection).toBe(true);
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
        });
        expect(result.current.isAllSelected).toBe(false);
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [data[0], data[2]],
          isSelectAll: false,
        });
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

      it("selects range with shift-click and calls onRowSelectionChanged", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
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
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [data[1], data[2], data[3]],
          isSelectAll: false,
        });
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

      it("shift-click after deselection should select from the last selected row", () => {
        const data = createMockData(7);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            data,
          })
        );

        // Select rows 0, 1, 2
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });
        act(() => {
          result.current.onToggleRow("item-2", 2);
        });
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
        });

        // Deselect row 1 (clears lastSelectedRowIndex)
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
        });

        // Shift-click row 4 - should select from row 2 to row 4
        act(() => {
          result.current.onToggleRow("item-4", 4, true);
        });
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
          "item-3": true,
          "item-4": true,
        });
      });

      it("isAllSelected becomes true when all rows are individually selected", () => {
        const data = createMockData(3);
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            data,
          })
        );

        // Select all rows one by one
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });
        act(() => {
          result.current.onToggleRow("item-2", 2);
        });

        // isAllSelected reports true via count-based fallback even though
        // the user never clicked "select all"
        expect(result.current.isAllSelected).toBe(true);
        expect(result.current.hasSelection).toBe(true);
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
        });
      });

      it("toggles all rows", () => {
        const data = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
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
        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [data[0], data[1], data[2]],
          isSelectAll: true,
        });

        // Deselect all
        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.rowSelection).toEqual({});
        expect(result.current.isAllSelected).toBe(false);
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [],
          isSelectAll: false,
        });
      });
    });

    describe("lastSelectedRowIndex after onToggleAll", () => {
      it("shift-click after select-all then deselect-all treats click as normal (no stale anchor)", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
            data,
          })
        );

        // Select row 1 to set lastSelectedRowIndex
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        // Partial selection → deselect; empty → select all; all → deselect.
        // After this cycle, selection is empty but lastSelectedRowIndex is still 1.
        act(() => {
          result.current.onToggleAll();
        });
        act(() => {
          result.current.onToggleAll();
        });
        act(() => {
          result.current.onToggleAll();
        });

        // Shift-click row 3 — lastSelectedRowIndex is still 1 from the
        // earlier individual click, so this produces a range [1..3]
        act(() => {
          result.current.onToggleRow("item-3", 3, true);
        });

        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [data[1], data[2], data[3]],
          isSelectAll: false,
        });
      });
    });

    describe("onToggleAll from indeterminate state", () => {
      it("deselects all when some rows are selected (uncontrolled)", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
            data,
          })
        );

        // Select two of five rows → indeterminate
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });
        act(() => {
          result.current.onToggleRow("item-2", 2);
        });

        expect(result.current.isAllSelected).toBe(false);
        expect(result.current.hasSelection).toBe(true);

        // Click header checkbox: clears the selection rather than promoting to "select all"
        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.rowSelection).toEqual({});
        expect(result.current.isAllSelected).toBe(false);
        expect(result.current.hasSelection).toBe(false);
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [],
          isSelectAll: false,
        });
      });

      it("deselects all when controlled selectedRows is non-empty but not all", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [data[0].$primaryKey, data[2].$primaryKey],
            onRowSelectionChanged,
            data,
          })
        );

        expect(result.current.isAllSelected).toBe(false);
        expect(result.current.hasSelection).toBe(true);

        act(() => {
          result.current.onToggleAll();
        });

        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [],
          isSelectAll: false,
        });
      });
    });

    describe("select-all persists when data grows (scroll/fetchMore)", () => {
      it("keeps all rows checked when new rows arrive after select-all", () => {
        const initialData = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result, rerender } = renderHook(
          ({ data }) =>
            useRowSelection({
              selectionMode: "multiple",
              onRowSelectionChanged,
              data,
            }),
          { initialProps: { data: initialData } }
        );

        // User clicks "select all"
        act(() => {
          result.current.onToggleAll();
        });

        expect(result.current.isAllSelected).toBe(true);
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
        });

        // Simulate fetchMore: 2 more rows arrive
        const moreData = createMockData(5);
        rerender({ data: moreData });

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
          "item-3": true,
          "item-4": true,
        });

        expect(result.current.isAllSelected).toBe(true);
        expect(result.current.hasSelection).toBe(true);

        // onRowSelectionChanged refires with the expanded id list so callers stay in sync
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: moreData,
          isSelectAll: true,
        });
      });

      it("drops out of select-all when an individual row is toggled", () => {
        const initialData = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
            data: initialData,
          })
        );

        act(() => {
          result.current.onToggleAll();
        });
        expect(result.current.isAllSelected).toBe(true);

        // Toggling off one row should leave the other two selected and exit select-all
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        expect(result.current.isAllSelected).toBe(false);
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
        });
        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [initialData[0], initialData[2]],
          isSelectAll: false,
        });
      });

      it("does not re-fire onRowSelectionChanged if data identity changes but ids stay the same", () => {
        const initialData = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result, rerender } = renderHook(
          ({ data }) =>
            useRowSelection({
              selectionMode: "multiple",
              onRowSelectionChanged,
              data,
            }),
          { initialProps: { data: initialData } }
        );

        act(() => {
          result.current.onToggleAll();
        });
        const callsAfterToggleAll = onRowSelectionChanged.mock.calls.length;

        // Same ids, different array identity (common after refetch with unchanged data)
        rerender({ data: createMockData(3) });

        expect(onRowSelectionChanged).toHaveBeenCalledTimes(
          callsAfterToggleAll
        );
      });

      it("does not auto-fire when data arrives after mount with no select-all active", () => {
        const onRowSelectionChanged = vi.fn();
        const { rerender } = renderHook(
          ({ data }) =>
            useRowSelection({
              selectionMode: "multiple",
              onRowSelectionChanged,
              data,
            }),
          {
            initialProps: {
              data: undefined as
                | Array<
                    Osdk.Instance<
                      TestObject,
                      "$allBaseProperties",
                      never,
                      Record<string, never>
                    >
                  >
                | undefined,
            },
          }
        );

        rerender({ data: createMockData(3) });

        // No select-all was active, so no callback fire expected.
        expect(onRowSelectionChanged).not.toHaveBeenCalled();
      });

      it("does not re-fire after deselect-all when data grows", () => {
        const onRowSelectionChanged = vi.fn();
        const { result, rerender } = renderHook(
          ({ data }) =>
            useRowSelection({
              selectionMode: "multiple",
              onRowSelectionChanged,
              data,
            }),
          { initialProps: { data: createMockData(3) } }
        );

        // Select all, then deselect all.
        act(() => {
          result.current.onToggleAll();
        });
        act(() => {
          result.current.onToggleAll();
        });

        const callsAfterDeselect = onRowSelectionChanged.mock.calls.length;

        // More rows arrive — should not refire onRowSelectionChanged because we
        // explicitly exited "select all" mode.
        rerender({ data: createMockData(5) });

        expect(onRowSelectionChanged).toHaveBeenCalledTimes(callsAfterDeselect);
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

      it("calls onRowSelectionChanged when toggling but does not update internal state", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result, rerender } = renderHook(
          ({ selectedRows }) =>
            useRowSelection({
              selectionMode: "single",
              selectedRows,
              onRowSelectionChanged,
              data,
            }),
          {
            initialProps: { selectedRows: [] as PrimaryKeyType<TestObject>[] },
          }
        );

        expect(result.current.rowSelection).toEqual({});

        // Click row
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        // Callback is called
        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [data[0]],
          isSelectAll: false,
        });

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

      it("calls onRowSelectionChanged when toggling rows", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [data[0].$primaryKey],
            onRowSelectionChanged,
            data,
          })
        );

        // Add selection to selectedRows
        act(() => {
          result.current.onToggleRow("item-2", 2);
        });

        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [data[0], data[2]],
          isSelectAll: false,
        });

        // Remove selection from selectedRows
        act(() => {
          result.current.onToggleRow("item-0", 0);
        });

        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [],
          isSelectAll: false,
        });
      });

      it("calls onRowSelectionChanged for shift-click range selection", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [],
            onRowSelectionChanged,
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

        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [data[1], data[2], data[3]],
          isSelectAll: false,
        });
      });

      it("shift-click range merges with updated controlled selectedRows", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result, rerender } = renderHook(
          ({ selectedRows }) =>
            useRowSelection({
              selectionMode: "multiple",
              selectedRows,
              onRowSelectionChanged,
              data,
            }),
          {
            initialProps: {
              selectedRows: [] as PrimaryKeyType<TestObject>[],
            },
          }
        );

        // First click on row 1
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        // Parent updates selectedRows to reflect the click (as a real controlled component would)
        rerender({ selectedRows: [data[1].$primaryKey] });

        // Shift-click to row 3 — should merge with the controlled state
        act(() => {
          result.current.onToggleRow("item-3", 3, true);
        });

        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [data[1], data[2], data[3]],
          isSelectAll: false,
        });
      });

      it("calls onRowSelectionChanged when toggling all rows", () => {
        const data = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [],
            onRowSelectionChanged,
            data,
          })
        );

        act(() => {
          result.current.onToggleAll();
        });

        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [data[0], data[1], data[2]],
          isSelectAll: true,
        });
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
              selectedRows: [
                data[0].$primaryKey,
              ] as PrimaryKeyType<TestObject>[],
            },
          }
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

      it("passes isSelectAll parameter to onRowSelectionChanged callback", () => {
        const data = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: [],
            onRowSelectionChanged,
            data,
          })
        );

        // Toggle all - should pass isSelectAll=true
        act(() => {
          result.current.onToggleAll();
        });

        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: data,
          isSelectAll: true,
        });

        // Toggle individual row - should pass isSelectAll=false
        act(() => {
          result.current.onToggleRow("item-1", 1);
        });

        expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
          selectedRows: [data[1]],
          isSelectAll: false,
        });
      });

      it("does not auto-fire onRowSelectionChanged in controlled mode when isAllSelected and data grows", () => {
        const initialData = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { rerender } = renderHook(
          ({ data }) =>
            useRowSelection({
              selectionMode: "multiple",
              selectedRows: [] as PrimaryKeyType<TestObject>[],
              isAllSelected: true,
              onRowSelectionChanged,
              data,
            }),
          { initialProps: { data: initialData } }
        );

        rerender({ data: createMockData(5) });
        rerender({ data: createMockData(8) });

        expect(onRowSelectionChanged).not.toHaveBeenCalled();
      });

      it("when isAllSelected is true, selects all rows and updates when data changes", () => {
        const initialData = createMockData(3);
        const { result, rerender } = renderHook(
          ({ data, isAllSelected }) =>
            useRowSelection({
              selectionMode: "multiple",
              selectedRows: [],
              isAllSelected,
              data,
            }),
          {
            initialProps: {
              data: initialData,
              isAllSelected: true,
            },
          }
        );

        // Initially, all 3 rows should be selected
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
        });
        expect(result.current.isAllSelected).toBe(true);
        expect(result.current.hasSelection).toBe(true);

        // Update data with more rows (simulate loading more data)
        const moreData = createMockData(5);
        rerender({ data: moreData, isAllSelected: true });

        // All 5 rows should now be selected
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
          "item-3": true,
          "item-4": true,
        });
        expect(result.current.isAllSelected).toBe(true);
        expect(result.current.hasSelection).toBe(true);
      });

      it("onToggleAll deselects when controlled isAllSelected is already true", () => {
        const data = createMockData(3);
        const onRowSelectionChanged = vi.fn();
        const { result } = renderHook(() =>
          useRowSelection({
            selectionMode: "multiple",
            selectedRows: data.map((item) => item.$primaryKey),
            isAllSelected: true,
            onRowSelectionChanged,
            data,
          })
        );

        expect(result.current.isAllSelected).toBe(true);

        // Toggle all should deselect since isAllSelected is already true
        act(() => {
          result.current.onToggleAll();
        });

        expect(onRowSelectionChanged).toHaveBeenCalledWith({
          selectedRows: [],
          isSelectAll: false,
        });
      });

      it("when both selectedRows and isAllSelected props are provided", () => {
        const data = createMockData(5);
        const onRowSelectionChanged = vi.fn();
        const { result, rerender } = renderHook(
          ({ selectedRows, isAllSelected }) =>
            useRowSelection({
              selectionMode: "multiple",
              selectedRows,
              isAllSelected,
              onRowSelectionChanged,
              data,
            }),
          {
            initialProps: {
              selectedRows: [
                data[0].$primaryKey,
                data[2].$primaryKey,
              ] as PrimaryKeyType<TestObject>[],
              isAllSelected: false,
            },
          }
        );

        // Initially shows selectedRows with isAllSelected false
        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-2": true,
        });
        expect(result.current.isAllSelected).toBe(false);
        expect(result.current.hasSelection).toBe(true);

        // When isAllSelected becomes true, all rows should be selected regardless of selectedRows
        rerender({
          selectedRows: [data[0].$primaryKey, data[2].$primaryKey],
          isAllSelected: true,
        });

        expect(result.current.rowSelection).toEqual({
          "item-0": true,
          "item-1": true,
          "item-2": true,
          "item-3": true,
          "item-4": true,
        });
        expect(result.current.isAllSelected).toBe(true);
        expect(result.current.hasSelection).toBe(true);

        // When isAllSelected becomes false again, should show only selectedRows
        rerender({
          selectedRows: [data[1].$primaryKey],
          isAllSelected: false,
        });

        expect(result.current.rowSelection).toEqual({
          "item-1": true,
        });
        expect(result.current.isAllSelected).toBe(false);
        expect(result.current.hasSelection).toBe(true);
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

  describe("onRowSelectionChanged callback", () => {
    it("fires with correct payload on single selection toggle on", () => {
      const data = createMockData(5);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "single",
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleRow("item-0", 0);
      });

      expect(onRowSelectionChanged).toHaveBeenCalledWith({
        selectedRows: [data[0]],
        isSelectAll: false,
      });
    });

    it("fires with empty arrays on single selection toggle off", () => {
      const data = createMockData(5);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "single",
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleRow("item-0", 0);
      });
      act(() => {
        result.current.onToggleRow("item-0", 0);
      });

      expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
        selectedRows: [],
        isSelectAll: false,
      });
    });

    it("fires with correct payload on multiple selection toggle", () => {
      const data = createMockData(5);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleRow("item-0", 0);
      });
      act(() => {
        result.current.onToggleRow("item-2", 2);
      });

      expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
        selectedRows: [data[0], data[2]],
        isSelectAll: false,
      });
    });

    it("fires with correct payload on shift-click range selection", () => {
      const data = createMockData(5);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleRow("item-1", 1);
      });
      act(() => {
        result.current.onToggleRow("item-3", 3, true);
      });

      expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
        selectedRows: [data[1], data[2], data[3]],
        isSelectAll: false,
      });
    });

    it("fires with isSelectAll=true on select all", () => {
      const data = createMockData(3);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleAll();
      });

      expect(onRowSelectionChanged).toHaveBeenCalledWith({
        selectedRows: data,
        isSelectAll: true,
      });
    });

    it("fires with empty arrays and isSelectAll=false on deselect all", () => {
      const data = createMockData(3);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleAll();
      });
      act(() => {
        result.current.onToggleAll();
      });

      expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
        selectedRows: [],
        isSelectAll: false,
      });
    });

    it("re-fires with expanded data on select-all with data growth", () => {
      const initialData = createMockData(3);
      const onRowSelectionChanged = vi.fn();
      const { result, rerender } = renderHook(
        ({ data }) =>
          useRowSelection({
            selectionMode: "multiple",
            onRowSelectionChanged,
            data,
          }),
        { initialProps: { data: initialData } }
      );

      act(() => {
        result.current.onToggleAll();
      });

      const moreData = createMockData(5);
      rerender({ data: moreData });

      expect(onRowSelectionChanged).toHaveBeenLastCalledWith({
        selectedRows: moreData,
        isSelectAll: true,
      });
    });

    it("fires with correct payload in controlled mode", () => {
      const data = createMockData(5);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          selectedRows: [data[0].$primaryKey],
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleRow("item-2", 2);
      });

      expect(onRowSelectionChanged).toHaveBeenCalledWith({
        selectedRows: [data[0], data[2]],
        isSelectAll: false,
      });
    });

    it("fires with correct payload on controlled toggle all", () => {
      const data = createMockData(3);
      const onRowSelectionChanged = vi.fn();
      const { result } = renderHook(() =>
        useRowSelection({
          selectionMode: "multiple",
          selectedRows: [],
          onRowSelectionChanged,
          data,
        })
      );

      act(() => {
        result.current.onToggleAll();
      });

      expect(onRowSelectionChanged).toHaveBeenCalledWith({
        selectedRows: data,
        isSelectAll: true,
      });
    });
  });
});
