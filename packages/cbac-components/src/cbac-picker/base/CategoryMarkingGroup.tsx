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

import { Tooltip } from "@base-ui/react/tooltip";
import { InfoSign } from "@blueprintjs/icons";
import React from "react";
import type { MarkingSelectionState } from "../types.js";
import styles from "./CategoryMarkingGroup.module.css";
import { MarkingButton } from "./MarkingButton.js";
import { OverflowButton } from "./OverflowButton.js";
import { isImplied } from "./selectionStateHelpers.js";

const GRID_COLUMNS = 4;
const VISIBLE_ROWS = 3;
const DEFAULT_MARKING_STATE: MarkingSelectionState = "NONE";

export interface CategoryMarkingGroupProps {
  categoryName: string;
  categoryDescription?: string;
  markings: ReadonlyArray<{ id: string; name: string; description?: string }>;
  markingStates: Map<string, MarkingSelectionState>;
  readOnly?: boolean;
  onMarkingToggle: (markingId: string) => void;
}

export const CategoryMarkingGroup: React.MemoExoticComponent<
  (props: CategoryMarkingGroupProps) => React.ReactElement
> = React.memo(function CategoryMarkingGroup({
  categoryName,
  categoryDescription,
  markings,
  markingStates,
  readOnly,
  onMarkingToggle,
}: CategoryMarkingGroupProps): React.ReactElement {
  const headingId = React.useId();

  const resolvedMarkings = React.useMemo(
    () =>
      markings.map((marking) => ({
        id: marking.id,
        label: marking.name,
        description: marking.description,
        selectionState: markingStates.get(marking.id) ?? DEFAULT_MARKING_STATE,
        disabled: readOnly,
      })),
    [markings, markingStates, readOnly],
  );

  const maxVisible = GRID_COLUMNS * VISIBLE_ROWS;
  const hasOverflow = resolvedMarkings.length > maxVisible;
  const visibleMarkings = hasOverflow
    ? resolvedMarkings.slice(0, maxVisible - 1)
    : resolvedMarkings;
  const overflowMarkings = hasOverflow
    ? resolvedMarkings.slice(maxVisible - 1)
    : [];

  const gridItemCount = hasOverflow
    ? visibleMarkings.length + 1
    : visibleMarkings.length;
  const emptyCellCount = (GRID_COLUMNS - (gridItemCount % GRID_COLUMNS))
    % GRID_COLUMNS;

  const hasActiveOverflow = overflowMarkings.some(
    (m) => m.selectionState === "SELECTED" || isImplied(m.selectionState),
  );

  return (
    <div
      className={styles.categoryGroup}
      role="group"
      aria-labelledby={headingId}
    >
      <div className={styles.categoryHeader}>
        <h3 id={headingId} className={styles.categoryName}>{categoryName}</h3>
        {categoryDescription != null && categoryDescription.length > 0 && (
          <Tooltip.Root>
            <Tooltip.Trigger
              render={
                <span
                  className={styles.infoIcon}
                  aria-label="Category description"
                >
                  <InfoSign size={12} />
                </span>
              }
            />
            <Tooltip.Portal>
              <Tooltip.Positioner side="top" sideOffset={4}>
                <Tooltip.Popup className={styles.infoTooltip}>
                  {categoryDescription}
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        )}
      </div>
      <div className={styles.markingGrid}>
        {visibleMarkings.map((marking) => (
          <MarkingButton
            key={marking.id}
            id={marking.id}
            label={marking.label}
            description={marking.description}
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
            className={styles.emptyCell}
          />
        ))}
      </div>
    </div>
  );
});
