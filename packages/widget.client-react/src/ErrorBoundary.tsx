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

import * as React from "react";

interface State {
  error: unknown;
}

/**
 * Error boundary to catch and display errors in widget code.
 */
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  State
> {
  state: State = { error: null };

  static getDerivedStateFromError(error: unknown): Partial<State> {
    return { error };
  }

  render(): React.ReactNode {
    if (this.state.error) {
      const errorDetails = this.state.error instanceof Error
        ? this.state.error.stack
        : "See browser console for more details.";

      return (
        <section style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px 0", color: "#c00" }}>
            An uncaught error occurred
          </h3>
          {process.env.NODE_ENV !== "production" && (
            <>
              <p style={{ margin: "0 0 8px 0" }}>
                This error was caught by the widget framework's fallback error
                boundary.
              </p>
              <ul style={{ margin: "0 0 16px 0" }}>
                <li>
                  Ensure errors are properly handled in your code with try-catch
                  blocks and promise rejection handling.
                </li>
                <li>
                  Add your own error boundary to replace this fallback with a
                  custom error message or recovery options for your users.
                </li>
                <li>
                  See:{" "}
                  <code>
                    https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
                  </code>
                </li>
              </ul>
            </>
          )}
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "12px",
              overflow: "auto",
              fontSize: "12px",
              margin: 0,
            }}
          >
            {errorDetails}
          </pre>
        </section>
      );
    }

    return this.props.children;
  }
}
