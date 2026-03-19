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

import { Popover } from "@base-ui/react/popover";
import classnames from "classnames";
import React from "react";
import type { MarkingSelectionState } from "../types.js";
import styles from "./CategoryMarkingGroup.module.css";
import { MarkingButton } from "./MarkingButton.js";
import markingButtonStyles from "./MarkingButton.module.css";

const DEFAULT_GRID_COLUMNS = 4;
const VISIBLE_ROWS = 3;

export interface CategoryMarkingGroupProps {
  categoryName: string;
  markings: ReadonlyArray<{
    id: string;
    label: string;
    selectionState: MarkingSelectionState;
    disabled?: boolean;
  }>;
  onMarkingToggle: (markingId: string) => void;
  gridColumns?: number;
}

export function CategoryMarkingGroup({
  categoryName,
  markings,
  onMarkingToggle,
  gridColumns = DEFAULT_GRID_COLUMNS,
}: CategoryMarkingGroupProps): React.ReactElement {
  const headingId = React.useId();

  const maxVisible = gridColumns * VISIBLE_ROWS;
  const hasOverflow = markings.length > maxVisible;
  const visibleMarkings = hasOverflow
    ? markings.slice(0, maxVisible - 1)
    : markings;
  const overflowMarkings = hasOverflow
    ? markings.slice(maxVisible - 1)
    : [];

  const gridItemCount = hasOverflow
    ? visibleMarkings.length + 1
    : visibleMarkings.length;
  const emptyCellCount = (gridColumns - (gridItemCount % gridColumns))
    % gridColumns;

  const hasActiveOverflow = React.useMemo(
    () =>
      overflowMarkings.some(
        (m) =>
          m.selectionState === "SELECTED" || m.selectionState === "IMPLIED",
      ),
    [overflowMarkings],
  );

  return (
    <div
      className={styles.categoryGroup}
      role="group"
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className={styles.categoryName}>{categoryName}</h3>
      <div
        className={styles.markingGrid}
        style={{
          "--osdk-cbac-picker-marking-grid-columns": gridColumns,
        } as React.CSSProperties}
      >
        {visibleMarkings.map((marking) => (
          <MarkingButtonItem
            key={marking.id}
            id={marking.id}
            label={marking.label}
            selectionState={marking.selectionState}
            disabled={marking.disabled}
            onToggle={onMarkingToggle}
          />
        ))}
        {hasOverflow && (
          <OverflowButton
            overflowMarkings={overflowMarkings}
            hasActiveOverflow={hasActiveOverflow}
            onMarkingToggle={onMarkingToggle}
          />
        )}
        {Array.from({ length: emptyCellCount }, (_, i) => (
          <div
            key={`empty-${i}`}
            className={markingButtonStyles.emptyCell}
          />
        ))}
      </div>
    </div>
  );
}

interface OverflowButtonProps {
  overflowMarkings: ReadonlyArray<{
    id: string;
    label: string;
    selectionState: MarkingSelectionState;
    disabled?: boolean;
  }>;
  hasActiveOverflow: boolean;
  onMarkingToggle: (markingId: string) => void;
}

function OverflowButton({
  overflowMarkings,
  hasActiveOverflow,
  onMarkingToggle,
}: OverflowButtonProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        render={
          <button
            type="button"
            className={classnames(
              styles.moreButton,
              hasActiveOverflow && styles.moreButtonActive,
            )}
          >
            +{overflowMarkings.length} more
          </button>
        }
      />
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="start">
          <Popover.Popup className={styles.overflowList}>
            {overflowMarkings.map((marking) => (
              <OverflowItem
                key={marking.id}
                id={marking.id}
                label={marking.label}
                selectionState={marking.selectionState}
                disabled={marking.disabled}
                onToggle={onMarkingToggle}
              />
            ))}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

interface OverflowItemProps {
  id: string;
  label: string;
  selectionState: MarkingSelectionState;
  disabled?: boolean;
  onToggle: (markingId: string) => void;
}

const OverflowItem = React.memo(function OverflowItem({
  id,
  label,
  selectionState,
  disabled,
  onToggle,
}: OverflowItemProps): React.ReactElement {
  const handleClick = React.useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);

  const isDisallowed = selectionState === "DISALLOWED"
    || selectionState === "IMPLIED_DISALLOWED";
  const isSelected = selectionState === "SELECTED";
  const isImplied = selectionState === "IMPLIED"
    || selectionState === "IMPLIED_DISALLOWED";

  const displayLabel = isImplied ? `(${label})` : label;

  return (
    <button
      type="button"
      className={classnames(
        styles.overflowItem,
        (isSelected || isImplied) && styles.overflowItemSelected,
        isDisallowed && styles.overflowItemDisabled,
      )}
      onClick={handleClick}
      disabled={disabled ?? isDisallowed}
      aria-pressed={isSelected}
    >
      {displayLabel}
    </button>
  );
});

interface MarkingButtonItemProps {
  id: string;
  label: string;
  selectionState: MarkingSelectionState;
  disabled?: boolean;
  onToggle: (markingId: string) => void;
}

const MarkingButtonItem = React.memo(function MarkingButtonItem({
  id,
  label,
  selectionState,
  disabled,
  onToggle,
}: MarkingButtonItemProps): React.ReactElement {
  const handleToggle = React.useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);

  return (
    <MarkingButton
      label={label}
      selectionState={selectionState}
      onToggle={handleToggle}
      disabled={disabled}
    />
  );
});
