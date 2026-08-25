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

import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";

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
          <div
            aria-hidden="true"
            className={classNames(Classes.SKELETON, styles.flexBar)}
            style={{
              height: "var(--osdk-filter-skeleton-text-height)",
              maxWidth: row.textWidth,
            }}
          />
          <div
            aria-hidden="true"
            className={Classes.SKELETON}
            style={{
              height: "var(--osdk-filter-listogram-bar-height)",
              width: "var(--osdk-filter-listogram-bar-width)",
            }}
          />
          <div
            aria-hidden="true"
            className={Classes.SKELETON}
            style={{
              height: "var(--osdk-filter-skeleton-text-height)",
              width: "var(--osdk-filter-skeleton-count-width)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
