import React from "react";
import styles from "./common.module.css";

export interface ErrorBannerProps {
  message: string | undefined;
  context?: string;
}

/** Inline error banner. Renders nothing when there is no message. */
export function ErrorBanner(props: ErrorBannerProps): React.JSX.Element | null {
  const { message, context } = props;
  if (message == null || message === "") {
    return null;
  }
  return (
    <div className={styles.errorBanner} role="alert">
      {context != null ? `${context}: ` : ""}
      {message}
    </div>
  );
}
