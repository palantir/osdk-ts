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

import React from "react";

import styles from "./MonitoringPanel.module.scss";

export interface MetricTileProps {
  /** The tile label, e.g. "Cache hit rate". */
  label: string;
  /** The pre-formatted value to display, e.g. "75%" or "120ms". */
  value: string;
  /** Invoked when the tile is clicked; navigates to the explaining tab. */
  onClick: () => void;
}

/** A single clickable metric tile that links to its drill-down view. */
export function MetricTile({
  label,
  value,
  onClick,
}: MetricTileProps): React.JSX.Element {
  return (
    <button type="button" className={styles.ontologyCount} onClick={onClick}>
      <span className={styles.metricValue}>{value}</span>
      <span className={styles.metricLabel}>{label}</span>
    </button>
  );
}
