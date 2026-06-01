import React from "react";
import styles from "./MetricsHeader.module.css";
import { MetricTag } from "./MetricTag.js";

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
        {totalCount != null
          ? <MetricTag label="active permanent" value={totalCount} />
          : null}
        {isFiltered
          ? <span className={styles.filteredFlag}>filtered</span>
          : null}
      </div>
      {rightSlot != null
        ? <div className={styles.right}>{rightSlot}</div>
        : null}
    </div>
  );
}
