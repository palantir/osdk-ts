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
import React, { memo } from "react";
import { ActionButton } from "../../base-components/action-button/ActionButton.js";
import styles from "./ShortcutBar.module.css";

/** A single shortcut button: a label plus the action to run on click. */
export interface ShortcutBarItem {
  label: string;
  onSelect: () => void;
}

export interface ShortcutBarProps {
  shortcuts: readonly ShortcutBarItem[];
  /** Stacks buttons in a column (default) or a wrapping row. */
  orientation?: "vertical" | "horizontal";
  className?: string;
}

function ShortcutBarInner({
  shortcuts,
  orientation = "vertical",
  className,
}: ShortcutBarProps): React.ReactElement {
  return (
    <div
      className={classnames(
        styles.bar,
        orientation === "horizontal" && styles.barHorizontal,
        className,
      )}
      role="group"
      aria-label="Relative date shortcuts"
    >
      {shortcuts.map((shortcut, index) => (
        <ActionButton
          key={`${shortcut.label}-${index}`}
          type="button"
          appearance="minimal"
          className={styles.shortcut}
          onClick={shortcut.onSelect}
        >
          {shortcut.label}
        </ActionButton>
      ))}
    </div>
  );
}

export const ShortcutBar: React.NamedExoticComponent<ShortcutBarProps> = memo(
  ShortcutBarInner,
);
