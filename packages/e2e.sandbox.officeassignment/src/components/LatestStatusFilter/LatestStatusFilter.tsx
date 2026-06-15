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

import React from "react";
import { STATUS_TYPES } from "../../constants/statusTypes.js";
import type { LatestStatusSelection } from "../../utils/statusFilter.js";
import styles from "./LatestStatusFilter.module.css";

export interface LatestStatusFilterProps {
  selections: readonly LatestStatusSelection[];
  onChange: (selections: LatestStatusSelection[]) => void;
  composeAcrossTypes: "$and" | "$or";
  onComposeChange: (compose: "$and" | "$or") => void;
}

function isSelected(
  selections: readonly LatestStatusSelection[],
  type: string,
  value: string,
): boolean {
  return selections.some((s) => s.type === type && s.value === value);
}

/**
 * The headline control: pick "latest value of {type} is {value}" conditions. Within a type the
 * selected values are OR'd; across types they are combined with the AND/OR toggle.
 */
export function LatestStatusFilter(
  props: LatestStatusFilterProps,
): React.JSX.Element {
  const { selections, onChange, composeAcrossTypes, onComposeChange } = props;

  const toggle = React.useCallback(
    (type: string, value: string) => {
      if (isSelected(selections, type, value)) {
        onChange(
          selections.filter((s) => !(s.type === type && s.value === value)),
        );
      } else {
        onChange([...selections, { type, value }]);
      }
    },
    [selections, onChange],
  );

  const clearAll = React.useCallback(() => onChange([]), [onChange]);

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.heading}>Latest status</span>
        <div className={styles.composeToggle}>
          <button
            type="button"
            className={composeAcrossTypes === "$and"
              ? styles.composeActive
              : styles.composeButton}
            onClick={() => onComposeChange("$and")}
          >
            Match all (AND)
          </button>
          <button
            type="button"
            className={composeAcrossTypes === "$or"
              ? styles.composeActive
              : styles.composeButton}
            onClick={() => onComposeChange("$or")}
          >
            Match any (OR)
          </button>
        </div>
        {selections.length > 0
          ? (
            <button
              type="button"
              className={styles.clearButton}
              onClick={clearAll}
            >
              Clear all
            </button>
          )
          : null}
      </div>
      <div className={styles.groups}>
        {STATUS_TYPES.map((spec) => (
          <div key={spec.type} className={styles.group}>
            <span className={styles.groupLabel}>{spec.type}</span>
            <div className={styles.chips}>
              {spec.values.map((value) => {
                const selected = isSelected(selections, spec.type, value);
                return (
                  <button
                    key={value}
                    type="button"
                    className={selected ? styles.chipActive : styles.chip}
                    aria-pressed={selected}
                    onClick={() => toggle(spec.type, value)}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
