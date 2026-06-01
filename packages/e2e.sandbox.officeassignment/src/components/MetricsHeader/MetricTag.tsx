import React from "react";
import styles from "./MetricsHeader.module.css";

export interface MetricTagProps {
  label: string;
  value: React.ReactNode;
}

export function MetricTag(props: MetricTagProps): React.JSX.Element {
  return (
    <span className={styles.tag}>
      <span className={styles.tagValue}>{props.value}</span>
      <span className={styles.tagLabel}>{props.label}</span>
    </span>
  );
}
