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

import type { RowData } from "@tanstack/react-table";
import React, { type ReactElement, useCallback, useState } from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./TableEditContainer.module.css";
import type { EditableConfig } from "./utils/types.js";

interface TableEditContainerProps<
  TData extends RowData,
> {
  editableConfig?: EditableConfig<TData, unknown>;
  focusedRowId?: string | null;
}

export function TableEditContainer<
  TData extends RowData,
>({
  editableConfig,
  focusedRowId,
}: TableEditContainerProps<TData>): ReactElement {
  const {
    cellEdits,
    enableEditModeByDefault,
    isInEditMode,
    onSubmitEdits,
    onEnableEditMode,
    clearEdits,
  } = editableConfig ?? {};

  const hasEdits = Object.keys(cellEdits ?? {}).length > 0;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitEdits = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const success = await onSubmitEdits?.();
      if (success) {
        clearEdits?.();
        onEnableEditMode?.(false);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [onEnableEditMode, onSubmitEdits, clearEdits]);

  const handleCancelEdits = useCallback(() => {
    clearEdits?.();
    onEnableEditMode?.(false);
  }, [clearEdits, onEnableEditMode]);

  const handleEnterEditMode = useCallback(() => {
    onEnableEditMode?.(true);
  }, [onEnableEditMode]);

  return (
    <div className={styles.tableEditContainer}>
      {hasEdits
        ? (
          <div className={styles.modificationCount}>
            {`${cellEdits ? Object.keys(cellEdits).length : 0} modifications`}
          </div>
        )
        : (isInEditMode && !focusedRowId && (
          <div className={styles.placeholder}>
            Select a row to edit data…
          </div>
        ))}
      <div className={styles.editButtons}>
        {!isInEditMode && !enableEditModeByDefault && (
          <ActionButton
            variant="primary"
            onClick={handleEnterEditMode}
          >
            Edit Table
          </ActionButton>
        )}
        {isInEditMode && !enableEditModeByDefault && (
          <ActionButton
            variant="secondary"
            onClick={handleCancelEdits}
          >
            Cancel
          </ActionButton>
        )}
        {isInEditMode && !!onSubmitEdits && (
          <ActionButton
            variant="primary"
            onClick={handleSubmitEdits}
            disabled={!hasEdits || isSubmitting}
          >
            Submit Edits
          </ActionButton>
        )}
      </div>
    </div>
  );
}
