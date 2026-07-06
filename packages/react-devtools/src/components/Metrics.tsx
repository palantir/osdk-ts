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

import styles from "./Metrics.module.scss";

export interface MetricsProps {
  /**
   * Fixed number of columns. Omit for a responsive auto-fit layout. The cells
   * are separated by hairline dividers within a single rounded border.
   */
  columns?: number;
  /** A list of `Metric` cells. */
  children: React.ReactNode;
}

/**
 * A grid of `Metric` cells rendered as one rounded-bordered card
 */
export function Metrics({
  columns,
  children,
}: MetricsProps): React.JSX.Element {
  return (
    <div
      className={styles.metrics}
      style={
        columns != null
          ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
