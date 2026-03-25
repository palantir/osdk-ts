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

import classnames from "classnames";
import React from "react";
import type { MarkingSelectionState } from "../types.js";
import styles from "./OverflowItem.module.css";
import {
  getDisplayLabel,
  isDisallowed,
  isImplied,
} from "./selectionStateHelpers.js";

export interface OverflowItemProps {
  id: string;
  label: string;
  selectionState: MarkingSelectionState;
  disabled?: boolean;
  onToggle: (markingId: string) => void;
}

export const OverflowItem: React.MemoExoticComponent<
  (props: OverflowItemProps) => React.ReactElement
> = React.memo(function OverflowItem({
  id,
  label,
  selectionState,
  disabled,
  onToggle,
}: OverflowItemProps): React.ReactElement {
  const handleClick = React.useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);

  const disallowed = isDisallowed(selectionState);
  const isSelected = selectionState === "SELECTED";
  const implied = isImplied(selectionState);

  return (
    <button
      type="button"
      className={classnames(
        styles.overflowItem,
        (isSelected || implied) && styles.overflowItemSelected,
        disallowed && styles.overflowItemDisabled,
      )}
      onClick={handleClick}
      disabled={disabled ?? disallowed}
      aria-pressed={isSelected}
    >
      {getDisplayLabel(label, selectionState)}
    </button>
  );
});
