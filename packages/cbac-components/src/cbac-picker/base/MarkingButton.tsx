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

import { Button } from "@base-ui/react/button";
import { Tooltip } from "@base-ui/react/tooltip";
import classnames from "classnames";
import React from "react";
import type { MarkingSelectionState } from "../types.js";
import styles from "./MarkingButton.module.css";
import { getDisplayLabel, isDisallowed } from "./selectionStateHelpers.js";

export interface MarkingButtonProps {
  id: string;
  label: string;
  description?: string;
  selectionState: MarkingSelectionState;
  onToggle: (markingId: string) => void;
  disabled?: boolean;
}

const selectionStateClassMap: Record<
  MarkingSelectionState,
  string | undefined
> = {
  SELECTED: styles.selected,
  IMPLIED: styles.implied,
  DISALLOWED: styles.disallowed,
  IMPLIED_DISALLOWED: styles.impliedDisallowed,
  NONE: undefined,
};

function getSelectionHint(state: MarkingSelectionState): string | undefined {
  switch (state) {
    case "SELECTED":
      return "Click to deselect";
    case "IMPLIED":
      return "Implied by another marking";
    case "DISALLOWED":
    case "IMPLIED_DISALLOWED":
      return "Not available with current selection. Deselect your current choice first.";
    case "NONE":
      return undefined;
  }
}

export const MarkingButton: React.MemoExoticComponent<
  (props: MarkingButtonProps) => React.ReactElement
> = React.memo(function MarkingButton({
  id,
  label,
  description,
  selectionState,
  onToggle,
  disabled,
}: MarkingButtonProps): React.ReactElement {
  const handleToggle = React.useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);

  const hasDescription = description !== undefined && description.length > 0;
  const isButtonDisabled = disabled ?? isDisallowed(selectionState);
  const showTooltip = hasDescription || isDisallowed(selectionState);
  const hint = getSelectionHint(selectionState);

  const button = (
    <Button
      className={classnames(
        styles.markingButton,
        selectionStateClassMap[selectionState],
      )}
      onClick={isButtonDisabled ? undefined : handleToggle}
      disabled={showTooltip ? undefined : isButtonDisabled}
      aria-disabled={showTooltip ? isButtonDisabled : undefined}
      aria-pressed={
        selectionState === "SELECTED" || selectionState === "IMPLIED"
      }
      title={showTooltip ? undefined : label}
    >
      {getDisplayLabel(label, selectionState)}
    </Button>
  );

  if (!showTooltip) {
    return button;
  }

  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={button} />
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={8}>
          <Tooltip.Popup className={styles.tooltip}>
            <p className={styles.tooltipTitle}>{label}</p>
            {hasDescription && (
              <p className={styles.tooltipDescription}>{description}</p>
            )}
            {hint != null && <p className={styles.tooltipHint}>{hint}</p>}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
});
