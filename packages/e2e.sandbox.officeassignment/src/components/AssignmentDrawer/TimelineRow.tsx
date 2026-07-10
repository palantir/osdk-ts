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

import type { StatusUpdate } from "../../generatedNoCheck2/index.js";
import { formatTimestamp } from "../../utils/formatDate.js";
import { makeTypeValue } from "../../utils/typeValue.js";
import { ToggleExclusionButton } from "../actions/ToggleExclusionButton.js";

import styles from "./StatusTimeline.module.css";

export interface TimelineRowProps {
  row: StatusUpdate.OsdkInstance;
}

/** A single status update in the timeline; struck through when excluded. */
export function TimelineRow(props: TimelineRowProps): React.JSX.Element {
  const { row } = props;
  const excluded = row.isExcluded === true;
  const label = row.typeValue
    ?? (row.type != null && row.value != null
      ? makeTypeValue(row.type, row.value)
      : (row.value ?? ""));

  return (
    <li className={styles.row}>
      <span className={styles.dot} aria-hidden="true" />
      <div className={styles.rowBody}>
        <div className={styles.rowTop}>
          <span className={excluded ? styles.labelExcluded : styles.label}>
            {label}
          </span>
          {excluded
            ? <span className={styles.excludedTag}>Excluded</span>
            : null}
          <span className={styles.timestamp}>
            {formatTimestamp(row.timestamp)}
          </span>
          <span className={styles.toggle}>
            <ToggleExclusionButton statusUpdate={row} />
          </span>
        </div>
        {row.comment != null && row.comment !== ""
          ? <div className={styles.comment}>{row.comment}</div>
          : null}
        {row.recordedBy != null && row.recordedBy !== ""
          ? <div className={styles.recordedBy}>by {row.recordedBy}</div>
          : null}
      </div>
    </li>
  );
}
