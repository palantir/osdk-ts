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
import { BaseCbacPicker } from "./base/BaseCbacPicker.js";
import { useCbacPickerState } from "./useCbacPickerState.js";
import { EMPTY_ARRAY } from "./utils/cbacPickerUtils.js";
import { toggleMarking } from "./utils/selectionLogic.js";

export interface CbacPickerProps {
  initialMarkingIds?: string[];
  onChange: (markingIds: string[]) => void;
  readOnly?: boolean;
  className?: string;
}

export function CbacPicker({
  initialMarkingIds,
  onChange,
  readOnly,
  className,
}: CbacPickerProps): React.ReactElement {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(
    () => initialMarkingIds ?? EMPTY_ARRAY,
  );

  // Reset local state when initialMarkingIds changes (e.g. external update)
  const [prevInitialIds, setPrevInitialIds] = React.useState(initialMarkingIds);
  if (initialMarkingIds !== prevInitialIds) {
    setPrevInitialIds(initialMarkingIds);
    setSelectedIds(initialMarkingIds ?? EMPTY_ARRAY);
  }

  const {
    categoryGroups,
    markingStates,
    banner,
    requiredMarkingGroups,
    isValid,
    isLoading,
    error,
  } = useCbacPickerState(selectedIds);

  const handleMarkingToggle = React.useCallback(
    (markingId: string) => {
      if (readOnly) {
        return;
      }
      const newSelection = toggleMarking(
        markingId,
        selectedIds,
        categoryGroups,
      );
      setSelectedIds(newSelection);
      onChange(newSelection);
    },
    [readOnly, selectedIds, categoryGroups, onChange],
  );

  const handleDismiss = React.useCallback(() => {
    setSelectedIds(EMPTY_ARRAY);
    onChange(EMPTY_ARRAY);
  }, [onChange]);

  return (
    <BaseCbacPicker
      categories={categoryGroups}
      markingStates={markingStates}
      banner={banner}
      onMarkingToggle={handleMarkingToggle}
      onDismissBanner={handleDismiss}
      requiredMarkingGroups={requiredMarkingGroups}
      isValid={isValid}
      readOnly={readOnly}
      isLoading={isLoading}
      error={error}
      className={className}
    />
  );
}
