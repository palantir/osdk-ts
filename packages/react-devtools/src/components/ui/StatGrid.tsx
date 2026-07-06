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

import styles from "./StatGrid.module.scss";

export type StatIntent = "none" | "success" | "warning" | "danger";

export interface StatCell {
  label: string;
  value: React.ReactNode;
  intent?: StatIntent;
  /** Optional cross-navigation link rendered under the value. */
  link?: { label: string; onClick: () => void };
}

export interface StatGridProps {
  /** Number of columns. Only 2 and 3 are styled. */
  columns: 2 | 3;
  cells: StatCell[];
}

/**
 * A bordered grid of stat cells (label + big value + optional cross-link),
 * hairline-divided. Used for the cache overview and similar stat grids.
 */
export const StatGrid: React.FC<StatGridProps> = ({ columns, cells }) => {
  return (
    <div className={classNames(styles.grid, styles[`cols${columns}`])}>
      {cells.map((cell) => (
        <div key={cell.label} className={styles.cell}>
          <div className={styles.label}>{cell.label}</div>
          <div
            className={classNames(
              styles.value,
              cell.intent != null && cell.intent !== "none"
                ? styles[cell.intent]
                : undefined
            )}
          >
            {cell.value}
          </div>
          {cell.link != null ? (
            <button
              type="button"
              className={styles.link}
              onClick={cell.link.onClick}
            >
              <span>{cell.link.label}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};
