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

export interface UseFocusedRowProps {
  /**
   * Controlled focused row id. `undefined` enables uncontrolled mode
   * (internal state). `null` means "no row focused" under controlled
   * mode.
   */
  focusedRowId?: string | null;
  onFocusedRowIdChanged?: (rowId: string | null) => void;
}

export interface UseFocusedRowResult {
  /** Effective focused row id — controlled value or internal state. */
  focusedRowId: string | null;
  /**
   * Request a focus change. In uncontrolled mode this mutates internal
   * state; the change callback fires in both modes so callers can
   * observe.
   */
  setFocusedRowId: (rowId: string | null) => void;
  /**
   * True when the caller passed `focusedRowId` (including `null`). The
   * table suppresses outside-click auto-clear in this mode so the
   * caller fully owns clearing.
   */
  isControlled: boolean;
}

export function useFocusedRow({
  focusedRowId,
  onFocusedRowIdChanged,
}: UseFocusedRowProps): UseFocusedRowResult {
  const isControlled = focusedRowId !== undefined;
  const [internalFocusedRowId, setInternalFocusedRowId] = useState<
    string | null
  >(null);

  const effective = isControlled
    ? focusedRowId
    : internalFocusedRowId;

  const fireChanged = useEventCallback((rowId: string | null) => {
    onFocusedRowIdChanged?.(rowId);
  });

  const setFocusedRowId = useCallback(
    (rowId: string | null) => {
      if (effective === rowId) return;
      if (!isControlled) {
        setInternalFocusedRowId(rowId);
      }
      fireChanged(rowId);
    },
    [effective, isControlled, fireChanged],
  );

  return {
    focusedRowId: effective,
    setFocusedRowId,
    isControlled,
  };
}
