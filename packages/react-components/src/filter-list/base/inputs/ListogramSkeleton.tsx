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
import { SkeletonBar } from "../../../base-components/skeleton/SkeletonBar.js";
import styles from "./ListogramSkeleton.module.css";

const SKELETON_ROWS = [
  { textWidth: "50%" },
  { textWidth: "35%" },
  { textWidth: "60%" },
];

export function ListogramSkeleton(): React.ReactElement {
  return (
    <div className={styles.container}>
      {SKELETON_ROWS.map((row, index) => (
        <div key={index} className={styles.row}>
          <SkeletonBar
            height="var(--osdk-filter-skeleton-text-height)"
            style={{ flex: 1, maxWidth: row.textWidth }}
          />
          <SkeletonBar
            width="var(--osdk-filter-listogram-bar-width)"
            height="var(--osdk-filter-listogram-bar-height)"
          />
          <SkeletonBar
            width="var(--osdk-filter-skeleton-count-width)"
            height="var(--osdk-filter-skeleton-text-height)"
          />
        </div>
      ))}
    </div>
  );
}
