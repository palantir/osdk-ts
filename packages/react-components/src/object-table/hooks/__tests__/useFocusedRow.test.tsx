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

const row = (id: string, label?: string): TestRow => ({ id, label });

// Default row registry used by the tests below. Tests that need a
// specific lookup pass their own `getRowById`.
const makeGetRowById = (rows: TestRow[]) => (id: string) =>
  rows.find((r) => r.id === id) ?? null;

describe("useFocusedRow", () => {
  describe("uncontrolled mode", () => {
    it("starts with no focused row", () => {
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ getRowById: () => null })
      );
      expect(result.current.focusedRowId).toBeNull();
      expect(result.current.isControlled).toBe(false);
    });

    it("updates internal state when setFocusedRowId is called", () => {
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({ getRowById: () => null })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      expect(result.current.focusedRowId).toBe("row-1");
    });

    it("fires onFocusedRowChanged with the resolved row", () => {
      const onChanged = vi.fn();
      const r1 = row("row-1");
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          onFocusedRowChanged: onChanged,
          getRowById: makeGetRowById([r1]),
        })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      expect(onChanged).toHaveBeenCalledWith(r1);
    });

    it("dedupes by row id", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          onFocusedRowChanged: onChanged,
          getRowById: makeGetRowById([row("row-1")]),
        })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      // Same id again — should not fire.
      act(() => result.current.setFocusedRowId("row-1"));
      expect(onChanged).toHaveBeenCalledTimes(1);
    });

    it("clears focus when set to null", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          onFocusedRowChanged: onChanged,
          getRowById: makeGetRowById([row("row-1")]),
        })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      act(() => result.current.setFocusedRowId(null));
      expect(result.current.focusedRowId).toBeNull();
      expect(onChanged).toHaveBeenLastCalledWith(null);
    });
  });

  describe("controlled mode", () => {
    it("reflects the controlled value", () => {
      const r2 = row("row-2");
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          focusedRowId: "row-2",
          getRowById: makeGetRowById([r2]),
        })
      );
      expect(result.current.focusedRowId).toBe("row-2");
      expect(result.current.isControlled).toBe(true);
    });

    it("treats null as controlled with no focus", () => {
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          focusedRowId: null,
          getRowById: () => null,
        })
      );
      expect(result.current.focusedRowId).toBeNull();
      expect(result.current.isControlled).toBe(true);
    });

    it("does not mutate internal state when setFocusedRowId is called", () => {
      const r1 = row("row-1");
      const r3 = row("row-3");
      const { result, rerender } = renderHook(
        ({ focusedRowId }: { focusedRowId: string | null }) =>
          useFocusedRow<TestRow>({
            focusedRowId,
            getRowById: makeGetRowById([r1, r3, row("row-2")]),
          }),
        { initialProps: { focusedRowId: "row-1" } },
      );
      act(() => result.current.setFocusedRowId("row-2"));
      // Effective id still reflects controlled prop, not internal state
      expect(result.current.focusedRowId).toBe("row-1");
      rerender({ focusedRowId: "row-3" });
      expect(result.current.focusedRowId).toBe("row-3");
    });

    it("still fires onFocusedRowChanged in controlled mode", () => {
      const onChanged = vi.fn();
      const r1 = row("row-1");
      const r2 = row("row-2");
      const { result } = renderHook(() =>
        useFocusedRow<TestRow>({
          focusedRowId: "row-1",
          onFocusedRowChanged: onChanged,
          getRowById: makeGetRowById([r1, r2]),
        })
      );
      act(() => result.current.setFocusedRowId("row-2"));
      expect(onChanged).toHaveBeenCalledWith(r2);
    });
  });
});
