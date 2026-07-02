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

import { MetricTag } from "./MetricTag.js";

import styles from "./MetricsHeader.module.css";

export interface MetricsHeaderProps {
  title: string;
  shownCount: number;
  totalCount: number | undefined;
  isFiltered: boolean;
  rightSlot?: React.ReactNode;
}

/** Header above the table showing the title and shown/total counts. */
export function MetricsHeader(props: MetricsHeaderProps): React.JSX.Element {
  const { title, shownCount, totalCount, isFiltered, rightSlot } = props;
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div className={styles.tags}>
        <MetricTag label="shown" value={shownCount} />
        {totalCount != null ? (
          <MetricTag label="active permanent" value={totalCount} />
        ) : null}
        {isFiltered ? (
          <span className={styles.filteredFlag}>filtered</span>
        ) : null}
      </div>
      {rightSlot != null ? (
        <div className={styles.right}>{rightSlot}</div>
      ) : null}
    </div>
  );
}
