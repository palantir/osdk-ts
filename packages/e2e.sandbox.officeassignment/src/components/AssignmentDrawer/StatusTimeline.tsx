import { useOsdkObjects } from "@osdk/react";
import React from "react";
import { StatusUpdate } from "../../generatedNoCheck2/index.js";
import { ErrorBanner, LoadingBar } from "../common/index.js";
import styles from "./StatusTimeline.module.css";
import { TimelineRow } from "./TimelineRow.js";

export interface StatusTimelineProps {
  assignmentId: string;
}

/** Newest-first timeline of an assignment's status updates. */
export function StatusTimeline(
  props: StatusTimelineProps,
): React.JSX.Element {
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
