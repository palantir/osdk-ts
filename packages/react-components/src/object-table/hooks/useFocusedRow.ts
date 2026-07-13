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

import { useCallback, useState } from "react";

import { useEventCallback } from "../../shared/hooks/useEventCallback.js";

export interface UseFocusedRowOptions<TData> {
  /**
   * Controlled focused row id. `undefined` enables uncontrolled mode
   * (internal state). `null` means "no row focused" under controlled
   * mode.
   */
  focusedRowId?: string | null;
  onFocusedRowChanged?: (row: TData | null) => void;
  /**
   * Resolves a row id back to the row. Used to look up the full row
   * when firing `onFocusedRowChanged` so callers receive row data even
   * though the hook only stores the id. Return `null` when the id no
   * longer matches a known row (e.g. it was removed).
   */
  getRowById: (id: string) => TData | null;
}

export interface UseFocusedRowResult<TData> {
  /**
   * Effective focused row id — derived from the controlled value or
   * internal state. Children consume the id (not the row) so they can
   * compare against TanStack row ids without holding row references.
   */
  focusedRowId: string | null;
  /**
   * Request a focus change by id. In uncontrolled mode this mutates
   * internal state; the change callback fires in both modes so callers
   * can observe. The callback receives the full row resolved via
   * `getRowById` (or `null`).
   */
  setFocusedRowId: (id: string | null) => void;
  /**
   * True when the caller passed `focusedRow` (including `null`).
   */
  isControlled: boolean;
}

export function useFocusedRow<TData>({
  focusedRowId,
  onFocusedRowChanged,
  getRowById,
}: UseFocusedRowOptions<TData>): UseFocusedRowResult<TData> {
  // Explicit check for undefined instead of != null
  // because null is a valid value to clear a focused row
  const isControlled = focusedRowId !== undefined;
  const [internalFocusedRowId, setInternalFocusedRowId] = useState<
    string | null
  >(null);

  const effectiveId = isControlled
    ? (focusedRowId ?? null)
    : internalFocusedRowId;

  const fireChanged = useEventCallback((id: string | null) => {
    const row = id != null ? getRowById(id) : null;
    onFocusedRowChanged?.(row);
  });

  const setFocusedRowId = useCallback(
    (id: string | null) => {
      if (effectiveId === id) return;
      if (!isControlled) {
        setInternalFocusedRowId(id);
      }
      fireChanged(id);
    },
    [effectiveId, isControlled, fireChanged]
  );

  return {
    focusedRowId: effectiveId,
    setFocusedRowId,
    isControlled,
  };
}
