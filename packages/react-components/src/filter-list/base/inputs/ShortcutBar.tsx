/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import React, { memo, useCallback } from "react";
import { ActionButton } from "../../../base-components/action-button/ActionButton.js";
import {
  DEFAULT_RELATIVE_DATE_PERIODS,
  getRelativeDatePeriodLabel,
  getRelativeDateRange,
  type RelativeDatePeriod,
} from "../../../shared/dateUtils.js";
import styles from "./ShortcutBar.module.css";

export interface ShortcutBarProps {
  periods: readonly RelativeDatePeriod[];
  onSelect: (range: { min: Date; max: Date }, closePopover: () => void) => void;
  /**
   * Passed through to `onSelect` so the handler can dismiss the picker. Kept
   * as a separate prop (rather than closing over it in `onSelect`) so callers
   * can pass a stable `onSelect` and let the `memo` on the bar/buttons skip.
   */
  closePopover: () => void;
  className?: string;
}

interface ShortcutButtonProps {
  period: RelativeDatePeriod;
  onSelect: ShortcutBarProps["onSelect"];
  closePopover: () => void;
}

function ShortcutButtonInner({
  period,
  onSelect,
  closePopover,
}: ShortcutButtonProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onSelect(getRelativeDateRange(period), closePopover);
  }, [period, onSelect, closePopover]);
  return (
    <ActionButton
      type="button"
      appearance="minimal"
      className={styles.shortcut}
      onClick={handleClick}
    >
      {getRelativeDatePeriodLabel(period)}
    </ActionButton>
  );
}

const ShortcutButton = memo(ShortcutButtonInner);

function ShortcutBarInner({
  periods,
  onSelect,
  closePopover,
  className,
}: ShortcutBarProps): React.ReactElement {
  return (
    <div
      className={classnames(styles.bar, className)}
      role="group"
      aria-label="Relative date shortcuts"
    >
      {periods.map((period) => (
        <ShortcutButton
          key={period}
          period={period}
          onSelect={onSelect}
          closePopover={closePopover}
        />
      ))}
    </div>
  );
}

export const ShortcutBar: React.NamedExoticComponent<ShortcutBarProps> = memo(
  ShortcutBarInner,
);

/** Resolves the `dateShortcuts` prop to a period list, or undefined to hide. */
export function resolveDateShortcuts(
  prop: RelativeDatePeriod[] | boolean | undefined,
): readonly RelativeDatePeriod[] | undefined {
  if (prop === true) {
    return DEFAULT_RELATIVE_DATE_PERIODS;
  }
  if (Array.isArray(prop) && prop.length > 0) {
    return prop;
  }
  return undefined;
}
