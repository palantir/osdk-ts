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

export interface OsdkErrorBoundaryProps {
  children: React.ReactNode;
  fallback?:
    | React.ReactNode
    | ((error: Error, retry: () => void) => React.ReactNode);
  onError?: (error: Error) => void;
}

interface OsdkErrorBoundaryState {
  error: Error | undefined;
}

export class OsdkErrorBoundary
  extends React.Component<OsdkErrorBoundaryProps, OsdkErrorBoundaryState>
{
  constructor(props: OsdkErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: unknown): OsdkErrorBoundaryState {
    return {
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }

  componentDidCatch(error: unknown): void {
    const normalizedError = error instanceof Error
      ? error
      : new Error(String(error));
    this.props.onError?.(normalizedError);
  }

  private retry = (): void => {
    this.setState({ error: undefined });
  };

  render(): React.ReactNode {
    if (this.state.error) {
      if (typeof this.props.fallback === "function") {
        return this.props.fallback(this.state.error, this.retry);
      }
      if (this.props.fallback !== undefined) {
        return this.props.fallback;
      }
      return (
        <div
          style={{
            padding: "16px",
            border: "1px solid #e53e3e",
            borderRadius: "4px",
            backgroundColor: "#fff5f5",
          }}
        >
          <p style={{ color: "#c53030", margin: "0 0 8px 0" }}>
            {this.state.error.message}
          </p>
          <button
            onClick={this.retry}
            style={{
              padding: "4px 12px",
              border: "1px solid #c53030",
              borderRadius: "4px",
              backgroundColor: "white",
              color: "#c53030",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
