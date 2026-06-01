import React from "react";
import styles from "./common.module.css";

export interface LoadingBarProps {
  active: boolean;
}

/** Thin indeterminate loading bar shown while data is (re)loading. */
export function LoadingBar(props: LoadingBarProps): React.JSX.Element {
  return (
    <div className={styles.loadingTrack} aria-hidden={!props.active}>
      {props.active ? <div className={styles.loadingBar} /> : null}
    </div>
  );
}
