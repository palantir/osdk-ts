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
