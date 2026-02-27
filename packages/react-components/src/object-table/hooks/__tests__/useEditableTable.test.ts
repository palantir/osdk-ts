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

import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { getCellId } from "../../utils/getCellId.js";
import type { CellEditEvent } from "../../utils/types.js";
import { useEditableTable } from "../useEditableTable.js";

describe("useEditableTable", () => {
  it("adds cell to cellEdits when edited", () => {
    const onCellValueChanged = vi.fn();
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: true, onCellValueChanged })
    );
    const cellIdentifier = { rowId: "row-1", columnId: "col-1" };
    const cellId = getCellId(cellIdentifier);
    const mockRowData = { id: "row-1", name: "Test" };

    const editEvent: CellEditEvent = {
      rowId: "row-1",
      columnId: "col-1",
      newValue: "new value",
      oldValue: "old value",
      rowData: mockRowData,
    };

    act(() => {
      result.current.onCellEdit(cellId, editEvent);
    });

    expect(result.current.cellEdits).toEqual({
      [cellId]: editEvent,
    });
    expect(onCellValueChanged).toHaveBeenCalledWith(editEvent);
  });

  it("removes cell from cellEdits when edited back to original value", () => {
    const onCellValueChanged = vi.fn();
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: true, onCellValueChanged })
    );
    const cellIdentifier = { rowId: "row-1", columnId: "col-1" };
    const cellId = getCellId(cellIdentifier);
    const mockRowData = { id: "row-1", name: "Test" };

    // First edit
    const firstEdit: CellEditEvent = {
      rowId: "row-1",
      columnId: "col-1",
      newValue: "new value",
      oldValue: "original",
      rowData: mockRowData,
    };

    act(() => {
      result.current.onCellEdit(cellId, firstEdit);
    });

    expect(result.current.cellEdits).toEqual({
      [cellId]: firstEdit,
    });

    // Edit back to original
    const revertEdit: CellEditEvent = {
      rowId: "row-1",
      columnId: "col-1",
      newValue: "original",
      oldValue: "original",
      rowData: mockRowData,
    };

    act(() => {
      result.current.onCellEdit(cellId, revertEdit);
    });

    // Should remove the cell from cellEdits
    expect(result.current.cellEdits).toEqual({});
  });

  it("handles multiple cell edits", () => {
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: true })
    );
    const cellId1 = getCellId({ rowId: "row-1", columnId: "col-1" });
    const cellId2 = getCellId({ rowId: "row-2", columnId: "col-2" });
    const cellId3 = getCellId({ rowId: "row-3", columnId: "col-3" });

    const edit1: CellEditEvent = {
      rowId: "row-1",
      columnId: "col-1",
      newValue: "new1",
      oldValue: "old1",
      rowData: { id: "row-1" },
    };

    const edit2: CellEditEvent = {
      rowId: "row-2",
      columnId: "col-2",
      newValue: "new2",
      oldValue: "old2",
      rowData: { id: "row-2" },
    };

    const edit3: CellEditEvent = {
      rowId: "row-3",
      columnId: "col-3",
      newValue: "new3",
      oldValue: "old3",
      rowData: { id: "row-3" },
    };

    act(() => {
      result.current.onCellEdit(cellId1, edit1);
      result.current.onCellEdit(cellId2, edit2);
      result.current.onCellEdit(cellId3, edit3);
    });

    expect(Object.keys(result.current.cellEdits).length).toBe(3);

    // Edit one back to original
    const revertEdit2: CellEditEvent = {
      rowId: "row-2",
      columnId: "col-2",
      newValue: "old2",
      oldValue: "old2",
      rowData: { id: "row-2" },
    };

    act(() => {
      result.current.onCellEdit(cellId2, revertEdit2);
    });

    expect(Object.keys(result.current.cellEdits).length).toBe(2);
    expect(result.current.cellEdits[cellId2]).toBeUndefined();
  });

  it("clears all edits", () => {
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: true })
    );
    const cellId1 = getCellId({ rowId: "row-1", columnId: "col-1" });
    const cellId2 = getCellId({ rowId: "row-2", columnId: "col-2" });

    const edit1: CellEditEvent = {
      rowId: "row-1",
      columnId: "col-1",
      newValue: "new1",
      oldValue: "old1",
      rowData: { id: "row-1" },
    };

    const edit2: CellEditEvent = {
      rowId: "row-2",
      columnId: "col-2",
      newValue: "new2",
      oldValue: "old2",
      rowData: { id: "row-2" },
    };

    act(() => {
      result.current.onCellEdit(cellId1, edit1);
      result.current.onCellEdit(cellId2, edit2);
    });

    act(() => {
      result.current.clearEdits();
    });

    expect(result.current.cellEdits).toEqual({});
  });

  it("handles submit edits", async () => {
    const onSubmitEdits = vi.fn();
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: true, onSubmitEdits })
    );
    const cellId1 = getCellId({ rowId: "row-1", columnId: "col-1" });
    const cellId2 = getCellId({ rowId: "row-2", columnId: "col-2" });

    const edit1: CellEditEvent = {
      rowId: "row-1",
      columnId: "col-1",
      newValue: "new1",
      oldValue: "old1",
      rowData: { id: "row-1" },
    };

    const edit2: CellEditEvent = {
      rowId: "row-2",
      columnId: "col-2",
      newValue: "new2",
      oldValue: "old2",
      rowData: { id: "row-2" },
    };

    act(() => {
      result.current.onCellEdit(cellId1, edit1);
      result.current.onCellEdit(cellId2, edit2);
    });

    await act(async () => {
      await result.current.onSubmitEdits?.();
    });

    expect(onSubmitEdits).toHaveBeenCalledWith([edit1, edit2]);
  });

  it("when submit edits is undefined, onSubmitEdits is undefined", async () => {
    const { result } = renderHook(() =>
      useEditableTable({
        enableEditModeByDefault: true,
        onSubmitEdits: undefined,
      })
    );

    expect(result.current.onSubmitEdits).toBeUndefined();
  });

  it("when enableEditModeByDefault is false, isInEditMode is false initially", () => {
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: false })
    );

    expect(result.current.isInEditMode).toBe(false);
    expect(result.current.onEnableEditMode).toBeDefined();

    act(() => {
      result.current.onEnableEditMode?.(true);
    });

    expect(result.current.isInEditMode).toBe(true);

    act(() => {
      result.current.onEnableEditMode?.(false);
    });

    expect(result.current.isInEditMode).toBe(false);
  });

  it("when enableEditModeByDefault is true, isInEditMode is always true", () => {
    const { result } = renderHook(() =>
      useEditableTable({ enableEditModeByDefault: true })
    );

    expect(result.current.isInEditMode).toBe(true);
  });
});
