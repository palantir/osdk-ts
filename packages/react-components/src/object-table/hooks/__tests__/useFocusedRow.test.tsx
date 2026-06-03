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

describe("useFocusedRow", () => {
  describe("uncontrolled mode", () => {
    it("starts with no focused row", () => {
      const { result } = renderHook(() => useFocusedRow({}));
      expect(result.current.focusedRowId).toBeNull();
      expect(result.current.isControlled).toBe(false);
    });

    it("updates internal state when setFocusedRowId is called", () => {
      const { result } = renderHook(() => useFocusedRow({}));
      act(() => result.current.setFocusedRowId("row-1"));
      expect(result.current.focusedRowId).toBe("row-1");
    });

    it("fires onFocusedRowIdChanged when set", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow({ onFocusedRowIdChanged: onChanged })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      expect(onChanged).toHaveBeenCalledWith("row-1");
    });

    it("dedupes identical updates", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow({ onFocusedRowIdChanged: onChanged })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      act(() => result.current.setFocusedRowId("row-1"));
      expect(onChanged).toHaveBeenCalledTimes(1);
    });

    it("clears focus when set to null", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow({ onFocusedRowIdChanged: onChanged })
      );
      act(() => result.current.setFocusedRowId("row-1"));
      act(() => result.current.setFocusedRowId(null));
      expect(result.current.focusedRowId).toBeNull();
      expect(onChanged).toHaveBeenLastCalledWith(null);
    });
  });

  describe("controlled mode", () => {
    it("reflects the controlled value", () => {
      const { result } = renderHook(() =>
        useFocusedRow({ focusedRowId: "row-2" })
      );
      expect(result.current.focusedRowId).toBe("row-2");
      expect(result.current.isControlled).toBe(true);
    });

    it("treats null as controlled with no focus", () => {
      const { result } = renderHook(() =>
        useFocusedRow({ focusedRowId: null })
      );
      expect(result.current.focusedRowId).toBeNull();
      expect(result.current.isControlled).toBe(true);
    });

    it("does not mutate internal state when setFocusedRowId is called", () => {
      const { result, rerender } = renderHook(
        ({ focusedRowId }: { focusedRowId: string | null }) =>
          useFocusedRow({ focusedRowId }),
        { initialProps: { focusedRowId: "row-1" } },
      );
      act(() => result.current.setFocusedRowId("row-2"));
      // Effective value still reflects controlled prop, not internal state
      expect(result.current.focusedRowId).toBe("row-1");
      rerender({ focusedRowId: "row-3" });
      expect(result.current.focusedRowId).toBe("row-3");
    });

    it("still fires onFocusedRowIdChanged in controlled mode", () => {
      const onChanged = vi.fn();
      const { result } = renderHook(() =>
        useFocusedRow({
          focusedRowId: "row-1",
          onFocusedRowIdChanged: onChanged,
        })
      );
      act(() => result.current.setFocusedRowId("row-2"));
      expect(onChanged).toHaveBeenCalledWith("row-2");
    });
  });
});
