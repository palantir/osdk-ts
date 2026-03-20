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
import styles from "./CheckboxListSkeleton.module.css";

const SKELETON_ROWS = [
  { textWidth: "60%" },
  { textWidth: "45%" },
  { textWidth: "70%" },
];

const CHECKBOX_SIZE =
  "calc(var(--osdk-checkbox-icon-size) + var(--osdk-checkbox-padding) * 2)";

export function CheckboxListSkeleton(): React.ReactElement {
  return (
    <div className={styles.container}>
      {SKELETON_ROWS.map((row, index) => (
        <div key={index} className={styles.row}>
          <SkeletonBar
            width={CHECKBOX_SIZE}
            height={CHECKBOX_SIZE}
          />
          <SkeletonBar
            height="var(--osdk-filter-skeleton-text-height)"
            maxWidth={row.textWidth}
            className={styles.flexBar}
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
