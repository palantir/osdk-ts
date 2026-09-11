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
import { Popover } from "@base-ui/react/popover";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { CaretDown } from "@blueprintjs/icons";
import React, { memo, useCallback, useId } from "react";

import { Select } from "../../../base-components/select/Select.js";
import type { RelativeDateBound } from "../../FilterListItemApi.js";
import { formatRelativeBound } from "../../utils/resolveRelativeDate.js";

import styles from "./RelativeDateBoundInput.module.css";

type RelativeDateUnit = RelativeDateBound["unit"];
type RelativeDateDirection = RelativeDateBound["direction"];

const UNIT_LABELS: Record<RelativeDateUnit, string> = {
  days: "day(s)",
  weeks: "week(s)",
  months: "month(s)",
  years: "year(s)",
};

const DIRECTION_LABELS: Record<RelativeDateDirection, string> = {
  ago: "ago",
  fromNow: "from now",
};

const DEFAULT_BOUND: RelativeDateBound = {
  count: 0,
  unit: "days",
  direction: "ago",
};

interface RelativeDateBoundInputProps {
  /** Current bound value, or `null` for "Indefinitely". */
  value: RelativeDateBound | null;
  /** Callback when the bound changes. `null` means "Indefinitely". */
  onChange: (value: RelativeDateBound | null) => void;
  /** Placeholder shown when no value is set, e.g. "From" or "To". */
  placeholder: string;
}

function RelativeDateBoundInputInner({
  value,
  onChange,
  placeholder,
}: RelativeDateBoundInputProps): React.ReactElement {
  const labelId = useId();
  const mode: "custom" | "indefinitely" =
    value != null ? "custom" : "indefinitely";

  const currentBound = value ?? DEFAULT_BOUND;

  const displayText = value != null ? formatRelativeBound(value) : undefined;

  const handleModeChange = useCallback(
    (nextMode: unknown) => {
      if (nextMode === "indefinitely") {
        onChange(null);
      } else {
        // Intentional: switching from Indefinitely to Custom resets to
        // DEFAULT_BOUND. The previous custom value is not preserved because
        // Indefinitely clears the bound (value becomes null).
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

  const isCustom = mode === "custom";

  return (
    <Popover.Root>
      <Popover.Trigger className={styles.trigger}>
        <div className={styles.triggerValueContainer}>
          <span
            className={
              displayText != null
                ? styles.triggerValue
                : styles.triggerPlaceholder
            }
          >
            {displayText ?? placeholder}
          </span>
        </div>
        <span className={styles.triggerIcon}>
          <CaretDown />
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className={styles.positioner} sideOffset={4}>
          <Popover.Popup className={styles.popover}>
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
                  aria-label={`${placeholder} custom`}
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
                    aria-label={`${placeholder} count`}
                  />
                  <div className={styles.unitSelect}>
                    <Select.Root<RelativeDateUnit>
                      value={currentBound.unit}
                      onValueChange={handleUnitChange}
                      disabled={!isCustom}
                    >
                      <Select.Trigger
                        placeholder={UNIT_LABELS[currentBound.unit]}
                      >
                        <Select.Value>
                          {(selected: RelativeDateUnit) =>
                            UNIT_LABELS[selected]
                          }
                        </Select.Value>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Positioner>
                          <Select.Popup>
                            {Object.entries(UNIT_LABELS).map(([val, label]) => (
                              <Select.Item key={val} value={val}>
                                {label}
                              </Select.Item>
                            ))}
                          </Select.Popup>
                        </Select.Positioner>
                      </Select.Portal>
                    </Select.Root>
                  </div>
                  <div className={styles.directionSelect}>
                    <Select.Root<RelativeDateDirection>
                      value={currentBound.direction}
                      onValueChange={handleDirectionChange}
                      disabled={!isCustom}
                    >
                      <Select.Trigger
                        placeholder={DIRECTION_LABELS[currentBound.direction]}
                      >
                        <Select.Value>
                          {(selected: RelativeDateDirection) =>
                            DIRECTION_LABELS[selected]
                          }
                        </Select.Value>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Positioner>
                          <Select.Popup>
                            {Object.entries(DIRECTION_LABELS).map(
                              ([val, label]) => (
                                <Select.Item key={val} value={val}>
                                  {label}
                                </Select.Item>
                              ),
                            )}
                          </Select.Popup>
                        </Select.Positioner>
                      </Select.Portal>
                    </Select.Root>
                  </div>
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
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export const RelativeDateBoundInput = memo(
  RelativeDateBoundInputInner,
) as typeof RelativeDateBoundInputInner;
