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

import { cleanup } from "@testing-library/react";
import * as React from "react";
import { vitest } from "vitest";
import {
  _clearSuspenseCache,
  clearSuspenseErrors,
} from "../src/new/makeSuspenseExternalStore.js";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";

export function mockObjectPayload(name: string, pk: string) {
  return {
    object: { name, $objectType: "MockObject", $primaryKey: pk },
    status: "loaded" as const,
    isOptimistic: false,
    lastUpdated: Date.now(),
  };
}

export function mockListPayload(
  items: Array<{ name: string; pk: string }>,
  extra?: Record<string, unknown>,
) {
  return {
    resolvedList: items.map(i => ({
      name: i.name,
      $objectType: "MockObject",
      $primaryKey: i.pk,
    })),
    status: "loaded" as const,
    isOptimistic: false,
    lastUpdated: Date.now(),
    hasMore: false,
    fetchMore: vitest.fn(),
    ...extra,
  };
}

interface TestErrorBoundaryProps {
  children: React.ReactNode;
  fallback: (error: Error, retry: () => void) => React.ReactNode;
}

interface TestErrorBoundaryState {
  error: Error | undefined;
}

class TestErrorBoundary
  extends React.Component<TestErrorBoundaryProps, TestErrorBoundaryState>
{
  constructor(props: TestErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: unknown): TestErrorBoundaryState {
    return {
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }

  private retry = (): void => {
    clearSuspenseErrors();
    this.setState({ error: undefined });
  };

  render(): React.ReactNode {
    if (this.state.error) {
      return this.props.fallback(this.state.error, this.retry);
    }
    return this.props.children;
  }
}

export function TestSuspenseWrapper(
  { children, observableClient }: {
    children: React.ReactNode;
    observableClient: Record<string, unknown>;
  },
) {
  return React.createElement(
    OsdkContext2.Provider,
    // @ts-expect-error - test mock provides only observableClient, not client
    { value: { observableClient } },
    React.createElement(
      TestErrorBoundary,
      {
        fallback: (error: Error, _retry: () => void) =>
          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              { "data-testid": "error" },
              error.message,
            ),
          ),
      },
      React.createElement(
        React.Suspense,
        {
          fallback: React.createElement(
            "div",
            { "data-testid": "loading" },
            "Loading...",
          ),
        },
        children,
      ),
    ),
  );
}

export function createMockObservableClient(
  overrides: Record<string, unknown> = {},
): Record<string, unknown> {
  return {
    observeObject: vitest.fn(() => ({ unsubscribe: vitest.fn() })),
    observeList: vitest.fn(() => ({ unsubscribe: vitest.fn() })),
    peekObjectData: vitest.fn(() => undefined),
    canonicalizeWhereClause: vitest.fn((w: unknown) => w),
    canonicalizeOptions: vitest.fn((opts: Record<string, unknown>) => opts),
    ...overrides,
  };
}

export function cleanupSuspenseTests(): void {
  cleanup();
  _clearSuspenseCache();
}
