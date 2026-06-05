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

import React from "react";
import type { CategoryMarkingGroup } from "./types.js";
import type { UseCbacPickerStateResult } from "./useCbacPickerState.js";
import { useCbacPickerState } from "./useCbacPickerState.js";
import { EMPTY_ARRAY } from "./utils/cbacPickerUtils.js";
import { toggleMarking } from "./utils/selectionLogic.js";

export interface UseCbacSelectionResult extends UseCbacPickerStateResult {
  selectedIds: string[];
  selectedIdsRef: React.MutableRefObject<string[]>;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  toggle: (markingId: string) => void;
  dismiss: () => void;
  reset: () => void;
}

export function useCbacSelection(
  initialMarkingIds: string[] | undefined,
): UseCbacSelectionResult {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(
    initialMarkingIds ?? EMPTY_ARRAY,
  );

  const [prevInitialIds, setPrevInitialIds] = React.useState(initialMarkingIds);
  if (initialMarkingIds !== prevInitialIds) {
    setPrevInitialIds(initialMarkingIds);
    setSelectedIds(initialMarkingIds ?? EMPTY_ARRAY);
  }

  const pickerState = useCbacPickerState(selectedIds);

  const selectedIdsRef = React.useRef(selectedIds);
  selectedIdsRef.current = selectedIds;

  const categoryGroupsRef = React.useRef<CategoryMarkingGroup[]>(
    pickerState.categoryGroups,
  );
  categoryGroupsRef.current = pickerState.categoryGroups;

  const toggle = React.useCallback(
    (markingId: string) => {
      setSelectedIds((prev) =>
        toggleMarking(markingId, prev, categoryGroupsRef.current)
      );
    },
    [],
  );

  const dismiss = React.useCallback(() => {
    setSelectedIds(EMPTY_ARRAY);
  }, []);

  const reset = React.useCallback(() => {
    setSelectedIds(initialMarkingIds ?? EMPTY_ARRAY);
  }, [initialMarkingIds]);

  return {
    selectedIds,
    selectedIdsRef,
    setSelectedIds,
    ...pickerState,
    toggle,
    dismiss,
    reset,
  };
}
