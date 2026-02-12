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
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SELECTION_COLUMN_ID } from "../../utils/constants.js";
import { useSelectionColumn } from "../useSelectionColumn.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

describe("useSelectionColumn", () => {
  describe("selectionMode: 'none'", () => {
    it("returns null when selection is disabled", () => {
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "none",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll: vi.fn(),
          onToggleRow: vi.fn(),
        })
      );

      expect(result.current).toBeNull();
    });

    it("returns null even with selection state", () => {
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "none",
          isAllSelected: true,
          hasSelection: true,
          onToggleAll: vi.fn(),
          onToggleRow: vi.fn(),
        })
      );

      expect(result.current).toBeNull();
    });
  });

  describe("selectionMode: 'single'", () => {
    it("returns column definition with correct properties", () => {
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "single",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll: vi.fn(),
          onToggleRow: vi.fn(),
        })
      );

      expect(result.current).not.toBeNull();
      expect(result.current).toMatchObject({
        id: SELECTION_COLUMN_ID,
        size: 50,
        minSize: 50,
        maxSize: 50,
        enableSorting: false,
        enableResizing: false,
      });
    });

    it("has header function that returns null for single mode", () => {
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "single",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll: vi.fn(),
          onToggleRow: vi.fn(),
        })
      );

      const columnDef = result.current;
      expect(columnDef).not.toBeNull();

      // Call header function
      const headerResult = typeof columnDef?.header === "function"
        ? columnDef.header({} as any)
        : null;

      expect(headerResult).toBeNull();
    });

    it("has cell function defined", () => {
      const onToggleRow = vi.fn();
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "single",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll: vi.fn(),
          onToggleRow,
        })
      );

      const columnDef = result.current;
      expect(columnDef).not.toBeNull();
      expect(columnDef?.cell).toBeDefined();
    });

    it("when dependencies other than selectionMode changed, the column definition should not update", () => {
      const onToggleRow = vi.fn();
      const onToggleAll = vi.fn();

      const { result, rerender } = renderHook(
        ({ isAllSelected, hasSelection }) =>
          useSelectionColumn<TestObject>({
            selectionMode: "single",
            isAllSelected,
            hasSelection,
            onToggleAll,
            onToggleRow,
          }),
        {
          initialProps: { isAllSelected: false, hasSelection: false },
        },
      );

      const firstResult = result.current;

      // Rerender with different isAllSelected and hasSelection
      rerender({ isAllSelected: true, hasSelection: true });
      expect(result.current).toBe(firstResult);
    });

    it("when selectionMode changed, the column definition should update", () => {
      const onToggleRow = vi.fn();
      const onToggleAll = vi.fn();

      const { result, rerender } = renderHook(
        ({ selectionMode }) =>
          useSelectionColumn<TestObject>({
            selectionMode,
            isAllSelected: false,
            hasSelection: true,
            onToggleAll,
            onToggleRow,
          }),
        {
          initialProps: { selectionMode: "single" },
        },
      );

      const firstResult = result.current;

      // Rerender with different selectionMode
      rerender({ selectionMode: "multiple" });
      expect(result.current).not.toBe(firstResult);
    });
  });

  describe("selectionMode: 'multiple'", () => {
    it("returns column definition with correct properties", () => {
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "multiple",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll: vi.fn(),
          onToggleRow: vi.fn(),
        })
      );

      expect(result.current).not.toBeNull();
      expect(result.current).toMatchObject({
        id: SELECTION_COLUMN_ID,
        size: 50,
        minSize: 50,
        maxSize: 50,
        enableSorting: false,
        enableResizing: false,
      });
    });

    it("has header function that renders SelectionHeaderCell", () => {
      const onToggleAll = vi.fn();
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "multiple",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll,
          onToggleRow: vi.fn(),
        })
      );

      const columnDef = result.current;
      expect(columnDef).not.toBeNull();

      // Render header
      const headerResult = typeof columnDef?.header === "function"
        ? columnDef.header({} as any)
        : null;

      expect(headerResult).not.toBeNull();
    });
  });

  describe("column definition structure", () => {
    it("disables sorting and resizing", () => {
      const { result } = renderHook(() =>
        useSelectionColumn<TestObject>({
          selectionMode: "multiple",
          isAllSelected: false,
          hasSelection: false,
          onToggleAll: vi.fn(),
          onToggleRow: vi.fn(),
        })
      );

      const columnDef = result.current;
      expect(columnDef?.enableSorting).toBe(false);
      expect(columnDef?.enableResizing).toBe(false);
    });
  });
});
