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

import { Input } from "@base-ui/react/input";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import React, { memo, useCallback, useId, useMemo } from "react";

import { Select } from "../../../base-components/select/Select.js";
import type { RelativeDateBound } from "../../FilterListItemApi.js";

import styles from "./RelativeDateBoundInput.module.css";

type RelativeDateUnit = RelativeDateBound["unit"];
type RelativeDateDirection = RelativeDateBound["direction"];

const UNIT_OPTIONS: Array<{ value: RelativeDateUnit; label: string }> = [
  { value: "days", label: "day(s)" },
  { value: "weeks", label: "week(s)" },
  { value: "months", label: "month(s)" },
  { value: "years", label: "year(s)" },
];

const DIRECTION_OPTIONS: Array<{
  value: RelativeDateDirection;
  label: string;
}> = [
  { value: "ago", label: "ago" },
  { value: "fromNow", label: "from now" },
];

const DEFAULT_BOUND: RelativeDateBound = {
  count: 0,
  unit: "days",
  direction: "ago",
};

interface RelativeDateBoundInputProps {
  /** Current bound value, or undefined for "Indefinitely". */
  value: RelativeDateBound | undefined;
  /** Callback when the bound changes. `undefined` means "Indefinitely". */
  onChange: (value: RelativeDateBound | undefined) => void;
  /** Label for this bound, e.g. "From" or "To". */
  label: string;
}

function RelativeDateBoundInputInner({
  value,
  onChange,
  label,
}: RelativeDateBoundInputProps): React.ReactElement {
  const labelId = useId();
  const mode: "custom" | "indefinitely" =
    value != null ? "custom" : "indefinitely";

  const currentBound = value ?? DEFAULT_BOUND;

  const handleModeChange = useCallback(
    (nextMode: unknown) => {
      if (nextMode === "indefinitely") {
        onChange(undefined);
      } else {
        onChange(currentBound);
      }
    },
    [onChange, currentBound],
  );

  const handleCountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseInt(e.target.value, 10);
      const count = Number.isNaN(parsed) || parsed < 0 ? 0 : parsed;
      onChange({ ...currentBound, count });
    },
    [onChange, currentBound],
  );

  const handleUnitChange = useCallback(
    (nextUnit: RelativeDateUnit | null) => {
      if (nextUnit != null) {
        onChange({ ...currentBound, unit: nextUnit });
      }
    },
    [onChange, currentBound],
  );

  const handleDirectionChange = useCallback(
    (nextDirection: RelativeDateDirection | null) => {
      if (nextDirection != null) {
        onChange({ ...currentBound, direction: nextDirection });
      }
    },
    [onChange, currentBound],
  );

  const unitLabel = useMemo(
    () =>
      UNIT_OPTIONS.find((o) => o.value === currentBound.unit)?.label ??
      currentBound.unit,
    [currentBound.unit],
  );

  const directionLabel = useMemo(
    () =>
      DIRECTION_OPTIONS.find((o) => o.value === currentBound.direction)
        ?.label ?? currentBound.direction,
    [currentBound.direction],
  );

  const isCustom = mode === "custom";

  return (
    <div className={styles.boundRoot}>
      <span id={labelId} className={styles.boundLabel}>
        {label}
      </span>
      <RadioGroup
        className={styles.radioGroup}
        value={mode}
        onValueChange={handleModeChange}
        aria-labelledby={labelId}
      >
        {/* Custom relative bound */}
        <div className={styles.radioItem}>
          <Radio.Root
            value="custom"
            className={styles.radioRoot}
            aria-label={`${label} custom`}
          >
            <Radio.Indicator className={styles.radioIndicator} />
          </Radio.Root>
          <div className={styles.customRow}>
            <Input
              type="number"
              className={styles.countInput}
              value={isCustom ? String(currentBound.count) : "0"}
              onChange={handleCountChange}
              disabled={!isCustom}
              min={0}
              aria-label={`${label} count`}
            />
            <Select.Root<RelativeDateUnit>
              value={currentBound.unit}
              onValueChange={handleUnitChange}
              disabled={!isCustom}
            >
              <Select.Trigger placeholder={unitLabel} />
              <Select.Portal>
                <Select.Positioner>
                  <Select.Popup>
                    {UNIT_OPTIONS.map((opt) => (
                      <Select.Item key={opt.value} value={opt.value}>
                        {opt.label}
                      </Select.Item>
                    ))}
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
            <Select.Root<RelativeDateDirection>
              value={currentBound.direction}
              onValueChange={handleDirectionChange}
              disabled={!isCustom}
            >
              <Select.Trigger placeholder={directionLabel} />
              <Select.Portal>
                <Select.Positioner>
                  <Select.Popup>
                    {DIRECTION_OPTIONS.map((opt) => (
                      <Select.Item key={opt.value} value={opt.value}>
                        {opt.label}
                      </Select.Item>
                    ))}
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        {/* Indefinitely */}
        <div className={styles.radioItem}>
          <Radio.Root
            value="indefinitely"
            className={styles.radioRoot}
            aria-label="Indefinitely"
          >
            <Radio.Indicator className={styles.radioIndicator} />
          </Radio.Root>
          <span className={styles.radioLabel}>Indefinitely</span>
        </div>
      </RadioGroup>
    </div>
  );
}

export const RelativeDateBoundInput: React.NamedExoticComponent<RelativeDateBoundInputProps> =
  memo(RelativeDateBoundInputInner);

interface RelativeDateRangeInputProps {
  /** Relative definition for the From bound. `undefined` = Indefinitely. */
  relativeMin: RelativeDateBound | undefined;
  /** Relative definition for the To bound. `undefined` = Indefinitely. */
  relativeMax: RelativeDateBound | undefined;
  /** Called when either bound changes, with both current values. */
  onRelativeChange: (
    relativeMin: RelativeDateBound | undefined,
    relativeMax: RelativeDateBound | undefined,
  ) => void;
}

function RelativeDateRangeInputInner({
  relativeMin,
  relativeMax,
  onRelativeChange,
}: RelativeDateRangeInputProps): React.ReactElement {
  const handleMinChange = useCallback(
    (nextMin: RelativeDateBound | undefined) => {
      onRelativeChange(nextMin, relativeMax);
    },
    [onRelativeChange, relativeMax],
  );

  const handleMaxChange = useCallback(
    (nextMax: RelativeDateBound | undefined) => {
      onRelativeChange(relativeMin, nextMax);
    },
    [onRelativeChange, relativeMin],
  );

  return (
    <div className={styles.rangeRoot}>
      <RelativeDateBoundInput
        label="From"
        value={relativeMin}
        onChange={handleMinChange}
      />
      <RelativeDateBoundInput
        label="To"
        value={relativeMax}
        onChange={handleMaxChange}
      />
    </div>
  );
}

export const RelativeDateRangeInput: React.NamedExoticComponent<RelativeDateRangeInputProps> =
  memo(RelativeDateRangeInputInner);
