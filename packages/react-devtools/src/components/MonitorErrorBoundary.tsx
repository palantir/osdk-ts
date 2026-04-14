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
import styles from "./MonitorErrorBoundary.module.scss";

export interface MonitorErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface MonitorErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class MonitorErrorBoundary extends React.Component<
  MonitorErrorBoundaryProps,
  MonitorErrorBoundaryState
> {
  constructor(props: MonitorErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): MonitorErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error("[MonitorErrorBoundary] Error caught:", error);
    // eslint-disable-next-line no-console
    console.error("[MonitorErrorBoundary] Error info:", errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (process.env.NODE_ENV === "development") {
        return (
          <div className={styles.container}>
            <h3 className={styles.title}>
              Monitor Error
            </h3>
            <p className={styles.message}>
              An error occurred in the monitoring panel:
            </p>
            <pre className={styles.stack}>
              {this.state.error?.message}
              {"\n"}
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className={styles.retryButton}
            >
              Retry
            </button>
          </div>
        );
      }

      return null;
    }

    return this.props.children;
  }
}
