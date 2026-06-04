/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import { useFocusedRow } from "../useFocusedRow.js";

interface TestRow {
  id: string;
  label?: string;
}

const getRowId = (row: TestRow): string => row.id;

const row = (id: string, label?: string): TestRow => ({ id, label });

describe("useFocusedRow", () => {
  describe("uncontrolled mode", () => {
    it("starts with no focused row", () => {
      const { result } = renderHook(() => useFocusedRow<TestRow>({ getRowId }));
      expect(result.current.focusedRow).toBeNull();
      expect(result.current.isControlled).toBe(false);
    });

    it("updates internal state when setFocusedRow is called", () => {
      const { result } = renderHook(() => useFocusedRow<TestRow>({ getRowId }));
      const r1 = row("row-1");
      act(() => result.current.setFocusedRow(r1));
      expect(result.current.focusedRow).toBe(r1);
    });

    it("fires onFocusedRowChanged when set", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ onFocusedRowChanged: onChanged, getRowId })
      );
      const r1 = row("row-1");
      act(() => result.current.setFocusedRow(r1));
      expect(onChanged).toHaveBeenCalledWith(r1);
    });

    it("dedupes by row id, not object reference", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ onFocusedRowChanged: onChanged, getRowId })
      );
      act(() => result.current.setFocusedRow(row("row-1", "first")));
      // Fresh object, same id (e.g. after a refetch) — should not fire again.
      act(() => result.current.setFocusedRow(row("row-1", "second")));
      expect(onChanged).toHaveBeenCalledTimes(1);
    });

    it("clears focus when set to null", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ onFocusedRowChanged: onChanged, getRowId })
      );
      act(() => result.current.setFocusedRow(row("row-1")));
      act(() => result.current.setFocusedRow(null));
      expect(result.current.focusedRow).toBeNull();
      expect(onChanged).toHaveBeenLastCalledWith(null);
    });
  });

  describe("controlled mode", () => {
    it("reflects the controlled value", () => {
      const r2 = row("row-2");
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ focusedRow: r2, getRowId })
      );
      expect(result.current.focusedRow).toBe(r2);
      expect(result.current.isControlled).toBe(true);
    });

    it("treats null as controlled with no focus", () => {
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ focusedRow: null, getRowId })
      );
      expect(result.current.focusedRow).toBeNull();
      expect(result.current.isControlled).toBe(true);
    });

    it("does not mutate internal state when setFocusedRow is called", () => {
      const r1 = row("row-1");
      const r3 = row("row-3");
      const { result, rerender } = renderHook(
        ({ focusedRow }: { focusedRow: TestRow | null }) =>
          useFocusedRow<TestRow>({ focusedRow, getRowId }),
        { initialProps: { focusedRow: r1 } },
      );
      act(() => result.current.setFocusedRow(row("row-2")));
      // Effective value still reflects controlled prop, not internal state
      expect(result.current.focusedRow).toBe(r1);
      rerender({ focusedRow: r3 });
      expect(result.current.focusedRow).toBe(r3);
    });

    it("still fires onFocusedRowChanged in controlled mode", () => {
      const onChanged = vi.fn();
      const r2 = row("row-2");
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          focusedRow: row("row-1"),
          onFocusedRowChanged: onChanged,
          getRowId,
        })
      );
      act(() => result.current.setFocusedRow(r2));
      expect(onChanged).toHaveBeenCalledWith(r2);
    });
  });
});
