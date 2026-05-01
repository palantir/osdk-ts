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

// Boundary for *host app* code. Wraps a subtree so that render errors
// surface in the devtools Errors panel via WindowErrorStore.recordError.
// Production-safe: production React doesn't route render errors through
// console.error, so the Errors panel relies on this boundary for those.

import React from "react";
import type { MonitorStore } from "../store/MonitorStore.js";

export interface OsdkAppErrorBoundaryProps {
  monitorStore: MonitorStore;
  children: React.ReactNode;
  fallback?:
    | React.ReactNode
    | ((error: Error, reset: () => void) => React.ReactNode);
}

interface OsdkAppErrorBoundaryState {
  error: Error | null;
}

export class OsdkAppErrorBoundary extends React.Component<
  OsdkAppErrorBoundaryProps,
  OsdkAppErrorBoundaryState
> {
  constructor(props: OsdkAppErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): OsdkAppErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const source = errorInfo.componentStack
      ? errorInfo.componentStack.split("\n")[1]?.trim()
      : undefined;
    this.props.monitorStore.getWindowErrorStore().recordError(error, source);
  }

  reset = (): void => {
    this.setState({ error: null });
  };

  render(): React.ReactNode {
    const { error } = this.state;
    if (error == null) {
      return this.props.children;
    }

    const { fallback } = this.props;
    if (typeof fallback === "function") {
      return fallback(error, this.reset);
    }
    if (fallback !== undefined) {
      return fallback;
    }

    return (
      <div role="alert">
        <p>Something went wrong.</p>
        <pre>{error.message}</pre>
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
