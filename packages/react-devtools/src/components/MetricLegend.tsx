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

import classNames from "classnames";
import React from "react";

import styles from "./MetricLegend.module.scss";

/** The swatch colors a legend row can use — mirror the `Metric` value colors. */
export type MetricLegendSwatch = "success" | "warning" | "danger" | "na";

export interface MetricLegendEntry {
  /** Which swatch color to show. */
  swatch: MetricLegendSwatch;
  /** The range/description this color denotes, e.g. "≥ 70%" or "> 0". */
  label: React.ReactNode;
}

export interface MetricLegendProps {
  /** The color-key rows, top to bottom. */
  entries: readonly MetricLegendEntry[];
}

/**
 * A small color key for a `Metric`'s help tooltip, mapping each swatch color to
 * the value range it denotes.
 */
export function MetricLegend({
  entries,
}: MetricLegendProps): React.JSX.Element {
  return (
    <ul className={styles.metricLegend}>
      {entries.map((entry) => (
        <li key={entry.swatch} className={styles.legendRow}>
          <span
            className={classNames(styles.legendSwatch, styles[entry.swatch])}
            aria-hidden={true}
          />
          {entry.label}
        </li>
      ))}
    </ul>
  );
}
