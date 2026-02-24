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
import { useEditableTable } from "../hooks/useEditableTable.js";
import { getCellId } from "../utils/getCellId.js";

describe("useEditableTable", () => {
  it("adds cell to cellEdits when edited", () => {
    const onCellValueChanged = vi.fn();
    const { result } = renderHook(() =>
      useEditableTable({ onCellValueChanged })
    );
    const cellIdentifier = { rowId: "row-1", columnId: "col-1" };
    const cellId = getCellId(cellIdentifier);

    act(() => {
      result.current.handleCellEdit(cellId, {
        newValue: "new value",
        oldValue: "old value",
      });
    });

    expect(result.current.cellEdits).toEqual({
      [cellId]: { newValue: "new value", oldValue: "old value" },
    });
    expect(onCellValueChanged).toHaveBeenCalledWith(
      cellIdentifier,
      { newValue: "new value", oldValue: "old value" },
    );
  });

  it("removes cell from cellEdits when edited back to original value", () => {
    const onCellValueChanged = vi.fn();
    const { result } = renderHook(() =>
      useEditableTable({ onCellValueChanged })
    );
    const cellIdentifier = { rowId: "row-1", columnId: "col-1" };
    const cellId = getCellId(cellIdentifier);

    // First edit
    act(() => {
      result.current.handleCellEdit(cellId, {
        newValue: "new value",
        oldValue: "original",
      });
    });

    expect(result.current.cellEdits).toEqual({
      [cellId]: { newValue: "new value", oldValue: "original" },
    });

    // Edit back to original
    act(() => {
      result.current.handleCellEdit(cellId, {
        newValue: "original",
        oldValue: "original",
      });
    });

    // Should remove the cell from cellEdits
    expect(result.current.cellEdits).toEqual({});
  });

  it("handles multiple cell edits", () => {
    const { result } = renderHook(() => useEditableTable({}));
    const cellId1 = getCellId({ rowId: "row-1", columnId: "col-1" });
    const cellId2 = getCellId({ rowId: "row-2", columnId: "col-2" });
    const cellId3 = getCellId({ rowId: "row-3", columnId: "col-3" });

    act(() => {
      result.current.handleCellEdit(cellId1, {
        newValue: "new1",
        oldValue: "old1",
      });
      result.current.handleCellEdit(cellId2, {
        newValue: "new2",
        oldValue: "old2",
      });
      result.current.handleCellEdit(cellId3, {
        newValue: "new3",
        oldValue: "old3",
      });
    });

    expect(Object.keys(result.current.cellEdits).length).toBe(3);

    // Edit one back to original
    act(() => {
      result.current.handleCellEdit(cellId2, {
        newValue: "old2",
        oldValue: "old2",
      });
    });

    expect(Object.keys(result.current.cellEdits).length).toBe(2);
    expect(result.current.cellEdits[cellId2]).toBeUndefined();
  });

  it("clears all edits", () => {
    const { result } = renderHook(() => useEditableTable({}));
    const cellId1 = getCellId({ rowId: "row-1", columnId: "col-1" });
    const cellId2 = getCellId({ rowId: "row-2", columnId: "col-2" });

    act(() => {
      result.current.handleCellEdit(cellId1, {
        newValue: "new1",
        oldValue: "old1",
      });
      result.current.handleCellEdit(cellId2, {
        newValue: "new2",
        oldValue: "old2",
      });
    });

    act(() => {
      result.current.clearEdits();
    });

    expect(result.current.cellEdits).toEqual({});
  });

  it("handles submit edits", async () => {
    const onSubmitEdits = vi.fn();
    const { result } = renderHook(() => useEditableTable({ onSubmitEdits }));
    const cellId1 = getCellId({ rowId: "row-1", columnId: "col-1" });
    const cellId2 = getCellId({ rowId: "row-2", columnId: "col-2" });

    act(() => {
      result.current.handleCellEdit(cellId1, {
        newValue: "new1",
        oldValue: "old1",
      });
      result.current.handleCellEdit(cellId2, {
        newValue: "new2",
        oldValue: "old2",
      });
    });

    await act(async () => {
      await result.current.handleSubmitEdits();
    });

    expect(onSubmitEdits).toHaveBeenCalledWith({
      [cellId1]: { newValue: "new1", oldValue: "old1" },
      [cellId2]: { newValue: "new2", oldValue: "old2" },
    });
  });
});
