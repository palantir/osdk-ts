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
import type { DatePickerShortcut } from "../dateUtils.js";
import styles from "./ShortcutBar.module.css";

export interface ShortcutBarProps {
  shortcuts: readonly DatePickerShortcut[];
  /** Called with the absolute range the clicked shortcut resolves to. */
  onSelect: (range: { min: Date; max: Date }) => void;
  className?: string;
}

function ShortcutBarInner({
  shortcuts,
  onSelect,
  className,
}: ShortcutBarProps): React.ReactElement {
  return (
    <div
      className={classnames(styles.bar, className)}
      role="group"
      aria-label="Relative date shortcuts"
    >
      {shortcuts.map((shortcut, index) => (
        <ActionButton
          key={`${shortcut.label}-${index}`}
          type="button"
          appearance="minimal"
          className={styles.shortcut}
          onClick={() => onSelect(shortcut.range(new Date()))}
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
