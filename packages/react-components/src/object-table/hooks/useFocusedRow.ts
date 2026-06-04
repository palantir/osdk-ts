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

export interface UseFocusedRowProps<TData> {
  /**
   * Controlled focused row. `undefined` enables uncontrolled mode
   * (internal state). `null` means "no row focused" under controlled
   * mode.
   */
  focusedRow?: TData | null;
  onFocusedRowChanged?: (row: TData | null) => void;
  /**
   * Returns a stable id for a row
   */
  getRowId: (row: TData) => string;
}

export interface UseFocusedRowResult<TData> {
  /** Effective focused row — controlled value or internal state. */
  focusedRow: TData | null;
  /**
   * Request a focus change. In uncontrolled mode this mutates internal
   * state; the change callback fires in both modes so callers can
   * observe.
   */
  setFocusedRow: (row: TData | null) => void;
  /**
   * True when the caller passed `focusedRow` (including `null`).
   */
  isControlled: boolean;
}

export function useFocusedRow<TData>({
  focusedRow,
  onFocusedRowChanged,
  getRowId,
}: UseFocusedRowProps<TData>): UseFocusedRowResult<TData> {
  // Explicit check for undefined instead of != null
  // because null is a valid value to clear a focused row
  const isControlled = focusedRow !== undefined;
  const [internalFocusedRow, setInternalFocusedRow] = useState<
    TData | null
  >(null);

  const effective = isControlled
    ? focusedRow
    : internalFocusedRow;

  const fireChanged = useEventCallback((row: TData | null) => {
    onFocusedRowChanged?.(row);
  });

  const effectiveId = effective != null ? getRowId(effective) : null;

  const setFocusedRow = useCallback(
    (row: TData | null) => {
      const nextId = row != null ? getRowId(row) : null;
      if (effectiveId === nextId) return;
      if (!isControlled) {
        setInternalFocusedRow(row);
      }
      fireChanged(row);
    },
    [effectiveId, isControlled, fireChanged, getRowId],
  );

  return {
    focusedRow: effective,
    setFocusedRow,
    isControlled,
  };
}
