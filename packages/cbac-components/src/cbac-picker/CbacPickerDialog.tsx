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
import type { MaxClassificationConstraint } from "./types.js";
import { useCbacSelection } from "./useCbacSelection.js";
import { useConstraintCallout } from "./useConstraintCallout.js";
import { getSubmitDisabledReason } from "./utils/validationMessages.js";

export interface CbacPickerDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (markingIds: string[]) => void;
  initialMarkingIds?: string[];
  maxClassificationConstraint?: MaxClassificationConstraint;
}

export function CbacPickerDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  initialMarkingIds,
  maxClassificationConstraint,
}: CbacPickerDialogProps): React.ReactElement {
  const {
    selectedIds,
    categoryGroups,
    markingStates,
    banner,
    requiredMarkingGroups,
    isValid,
    userSatisfiesMarkings,
    disallowedMarkingIds,
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

  const submitDisabledReason = React.useMemo(
    () =>
      getSubmitDisabledReason({
        isValid,
        requiredMarkingGroups,
        selectedIds,
        disallowedMarkingIds,
        userSatisfiesMarkings,
      }),
    [
      isValid,
      requiredMarkingGroups,
      selectedIds,
      disallowedMarkingIds,
      userSatisfiesMarkings,
    ],
  );

  const constraintCallout = useConstraintCallout(maxClassificationConstraint);

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
      validationCallouts={constraintCallout}
      isLoading={isLoading}
      error={error}
    />
  );
}
