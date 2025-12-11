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

export interface MonitorErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface MonitorErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary component that prevents monitor UI crashes from breaking the application.
 *
 * This component silently catches errors in the monitoring UI and prevents them from
 * propagating to the parent application. Monitoring is a dev tool and should never
 * cause application failures.
 *
 * @example
 * ```tsx
 * <MonitorErrorBoundary>
 *   <MonitoringPanel monitorStore={store} />
 * </MonitorErrorBoundary>
 * ```
 */
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
      // In development, show error details
      if (process.env.NODE_ENV === "development") {
        return (
          <div
            style={{
              padding: "20px",
              background: "#ff000020",
              border: "1px solid red",
              margin: "10px",
              borderRadius: "4px",
            }}
          >
            <h3 style={{ color: "red", margin: "0 0 10px 0" }}>
              Monitor Error
            </h3>
            <p style={{ margin: "0 0 10px 0" }}>
              An error occurred in the monitoring panel:
            </p>
            <pre
              style={{
                background: "#00000010",
                padding: "10px",
                borderRadius: "4px",
                overflow: "auto",
                fontSize: "12px",
              }}
            >
              {this.state.error?.message}
              {"\n"}
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              style={{
                padding: "5px 10px",
                background: "#007acc",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Retry
            </button>
          </div>
        );
      }

      // In production, silently fail - monitoring should never break the app
      return null;
    }

    return this.props.children;
  }
}
