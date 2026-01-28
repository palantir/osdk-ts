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

import React, { Component, type ReactNode } from "react";
import styles from "./FilterInputErrorBoundary.module.css";

interface FilterInputErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error) => void;
}

interface FilterInputErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class FilterInputErrorBoundary extends Component<
  FilterInputErrorBoundaryProps,
  FilterInputErrorBoundaryState
> {
  state: FilterInputErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): FilterInputErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("[FilterInputErrorBoundary] Error in filter input:", error);
    console.error("[FilterInputErrorBoundary] Component stack:", errorInfo.componentStack);
    this.props.onError?.(error);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.errorContainer} data-error="filter-input">
          <p className={styles.errorMessage}>Error loading filter</p>
          <button
            type="button"
            className={styles.retryButton}
            onClick={this.handleRetry}
            aria-label="Retry loading filter"
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
