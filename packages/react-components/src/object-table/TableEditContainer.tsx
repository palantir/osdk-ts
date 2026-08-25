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

import { Button } from "@blueprintjs/core";
import { Error } from "@blueprintjs/icons";
import type { RowData } from "@tanstack/react-table";
import React, { type ReactElement, useCallback, useState } from "react";

import type { EditableConfig } from "./utils/types.js";

import styles from "./TableEditContainer.module.css";

interface TableEditContainerProps<TData extends RowData> {
  editableConfig: EditableConfig<TData, unknown>;
  hasFocusedRow?: boolean;
}

export function TableEditContainer<TData extends RowData>({
  editableConfig,
  hasFocusedRow,
}: TableEditContainerProps<TData>): ReactElement {
  const {
    cellEdits,
    onSubmitEdits,
    clearEdits,
    editModeState,
    validationErrors,
  } = editableConfig;

  const hasEdits = Object.keys(cellEdits ?? {}).length > 0;
  const hasValidationError = (validationErrors?.size ?? 0) > 0;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isInEditMode = editModeState.isActive;
  const canToggleEditMode = editModeState.type === "manual";

  const handleSubmitEdits = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const success = await onSubmitEdits?.();
      if (success) {
        clearEdits?.();
        if (editModeState?.type === "manual") {
          editModeState.setActive(false);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [editModeState, onSubmitEdits, clearEdits]);

  const handleCancelEdits = useCallback(() => {
    clearEdits?.();
    if (editModeState?.type === "manual") {
      editModeState.setActive(false);
    }
  }, [clearEdits, editModeState]);

  const handleEnterEditMode = useCallback(() => {
    if (editModeState?.type === "manual") {
      editModeState.setActive(true);
    }
  }, [editModeState]);

  return (
    <div className={styles.tableEditContainer}>
      {hasEdits || hasValidationError ? (
        <div className={styles.editsInfoContainer}>
          {hasEdits && (
            <div className={styles.modificationCount}>
              {`${cellEdits ? Object.keys(cellEdits).length : 0} modifications`}
            </div>
          )}
          {hasEdits && hasValidationError && <div className={styles.divider} />}
          {hasValidationError && (
            <div className={styles.validationError}>
              <Error className={styles.errorIcon} />
              Validation error
            </div>
          )}
        </div>
      ) : (
        isInEditMode &&
        !hasFocusedRow && (
          <div className={styles.placeholder}>Select a row to edit data…</div>
        )
      )}
      <div className={styles.editButtons}>
        {!isInEditMode && canToggleEditMode && (
          <Button intent="primary" onClick={handleEnterEditMode}>
            Edit Table
          </Button>
        )}
        {isInEditMode && canToggleEditMode && (
          <Button onClick={handleCancelEdits}>Cancel</Button>
        )}
        {isInEditMode && !!onSubmitEdits && (
          <Button
            intent="primary"
            onClick={handleSubmitEdits}
            disabled={!hasEdits || isSubmitting || hasValidationError}
          >
            Submit Edits
          </Button>
        )}
      </div>
    </div>
  );
}
