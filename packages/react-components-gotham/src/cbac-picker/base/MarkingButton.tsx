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
import styles from "./MarkingButton.module.css";

export interface MarkingButtonProps {
  label: string;
  selectionState: MarkingSelectionState;
  onToggle: () => void;
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

export function MarkingButton({
  label,
  selectionState,
  onToggle,
  disabled,
}: MarkingButtonProps): React.ReactElement {
  const isDisallowed = selectionState === "DISALLOWED"
    || selectionState === "IMPLIED_DISALLOWED";

  const isImplied = selectionState === "IMPLIED"
    || selectionState === "IMPLIED_DISALLOWED";

  const displayLabel = isImplied ? `(${label})` : label;

  return (
    <button
      type="button"
      className={classnames(
        styles.markingButton,
        selectionStateClassMap[selectionState],
      )}
      onClick={onToggle}
      disabled={disabled ?? isDisallowed}
      aria-pressed={selectionState === "SELECTED"}
    >
      {displayLabel}
    </button>
  );
}
