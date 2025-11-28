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

interface Props extends React.PropsWithChildren {
  hasEmittedReady: boolean;
}

interface State {
  error: unknown;
  caughtBeforeReady: boolean;
}

/**
 * Error boundary to surface errors that occur before a widget is ready to prevent an endless spinner.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null, caughtBeforeReady: false };

  static getDerivedStateFromError(error: unknown): Partial<State> {
    return { error };
  }

  componentDidCatch(error: unknown): void {
    if (!this.props.hasEmittedReady) {
      this.setState({ caughtBeforeReady: true });
    }
  }

  render(): React.ReactNode {
    if (this.state.error) {
      const errorDetails = this.state.error instanceof Error
        ? this.state.error.stack
        : "See browser console for more details.";

      return (
        <section>
          <h3>
            {this.state.caughtBeforeReady
              ? "Widget failed to start"
              : "An uncaught error occurred"}
          </h3>
          <pre>{errorDetails}</pre>
          {import.meta.env?.DEV && (
            <p>
              This error was caught by the widget framework's fallback error
              boundary. Ensure errors are properly handled in your code with
              try-catch blocks and promise rejection handling. Add your own{" "}
              <a
                href="https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"
                target="_blank"
                rel="noopener noreferrer"
              >
                error boundary
              </a>{" "}
              to replace this fallback with a custom error message or recovery
              options for your users.
            </p>
          )}
        </section>
      );
    }

    return this.props.children;
  }
}
