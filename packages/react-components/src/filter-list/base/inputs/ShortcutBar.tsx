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
  onSelect: (range: { min: Date; max: Date }) => void;
  className?: string;
}

interface ShortcutButtonProps {
  period: RelativeDatePeriod;
  onSelect: ShortcutBarProps["onSelect"];
}

function ShortcutButtonInner({
  period,
  onSelect,
}: ShortcutButtonProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onSelect(getRelativeDateRange(period));
  }, [period, onSelect]);
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
        />
      ))}
    </div>
  );
}

export const ShortcutBar: React.NamedExoticComponent<ShortcutBarProps> = memo(
  ShortcutBarInner,
);

/**
 * Resolves the user-facing `dateShortcuts` prop into the periods list the
 * `ShortcutBar` should render, or `undefined` when no bar should appear.
 *
 * - `undefined` → `undefined` (hidden)
 * - `true`      → {@link DEFAULT_RELATIVE_DATE_PERIODS}
 * - empty array → `undefined`
 * - non-empty array → the array itself
 */
export function resolveDateShortcuts(
  prop: RelativeDatePeriod[] | boolean | undefined,
): readonly RelativeDatePeriod[] | undefined {
  if (prop == null || prop === false) {
    return undefined;
  }
  if (prop === true) {
    return DEFAULT_RELATIVE_DATE_PERIODS;
  }
  if (prop.length === 0) {
    return undefined;
  }
  return prop;
}
