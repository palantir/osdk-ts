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
import { BaseCbacPickerDialog } from "./base/BaseCbacPickerDialog.js";
import { useCbacSelection } from "./useCbacSelection.js";

export interface CbacPickerDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (markingIds: string[]) => void;
  initialMarkingIds?: string[];
}

export function CbacPickerDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  initialMarkingIds,
}: CbacPickerDialogProps): React.ReactElement {
  const {
    selectedIds,
    categoryGroups,
    markingStates,
    banner,
    requiredMarkingGroups,
    isValid,
    isLoading,
    error,
    toggle,
    dismiss,
    reset,
  } = useCbacSelection(initialMarkingIds);

  // Parent controls dialog close on confirm (e.g. to show a loading state)
  const handleConfirm = React.useCallback(() => {
    onConfirm(selectedIds);
  }, [onConfirm, selectedIds]);

  const handleCancel = React.useCallback(() => {
    reset();
    onOpenChange(false);
  }, [reset, onOpenChange]);

  const hasInitialMarkings = initialMarkingIds !== undefined
    && initialMarkingIds.length > 0;

  const submitDisabledReason = React.useMemo((): string | undefined => {
    if (isValid) {
      return undefined;
    }
    if (requiredMarkingGroups.length > 0) {
      return "Selected markings do not include all required markings.";
    }
    return "Invalid marking selection.";
  }, [isValid, requiredMarkingGroups.length]);

  return (
    <BaseCbacPickerDialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      title={hasInitialMarkings ? "Edit classification" : "Add classification"}
      categories={categoryGroups}
      markingStates={markingStates}
      banner={banner}
      onMarkingToggle={toggle}
      onDismissBanner={dismiss}
      requiredMarkingGroups={requiredMarkingGroups}
      isValid={isValid}
      submitDisabledReason={submitDisabledReason}
      isLoading={isLoading}
      error={error}
    />
  );
}
