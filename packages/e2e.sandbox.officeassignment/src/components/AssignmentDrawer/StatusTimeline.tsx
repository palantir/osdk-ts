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

import { useOsdkObjects } from "@osdk/react";
import React from "react";

import { StatusUpdate } from "../../generatedNoCheck2/index.js";
import { ErrorBanner, LoadingBar } from "../common/index.js";
import { TimelineRow } from "./TimelineRow.js";

import styles from "./StatusTimeline.module.css";

export interface StatusTimelineProps {
  assignmentId: string;
}

/** Newest-first timeline of an assignment's status updates. */
export function StatusTimeline(props: StatusTimelineProps): React.JSX.Element {
  const { assignmentId } = props;
  const { data, isLoading, error } = useOsdkObjects(StatusUpdate, {
    where: { assignmentId: { $eq: assignmentId } },
    orderBy: { timestampEpochMs: "desc" },
    pageSize: 100,
  });

  return (
    <div className={styles.container}>
      <LoadingBar active={isLoading} />
      <ErrorBanner message={error?.message} context="Status timeline" />
      {data != null && data.length === 0 && !isLoading
        ? <div className={styles.empty}>No status updates yet.</div>
        : (
          <ol className={styles.list}>
            {(data ?? []).map((row) => (
              <TimelineRow key={row.statusUpdateId} row={row} />
            ))}
          </ol>
        )}
    </div>
  );
}
