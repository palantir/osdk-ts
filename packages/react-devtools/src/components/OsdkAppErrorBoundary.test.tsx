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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createMockMonitorStore } from "./testHelpers.js";

const { OsdkAppErrorBoundary } = await import("./OsdkAppErrorBoundary.js");

const Thrower: React.FC<{ message: string }> = ({ message }) => {
  throw new Error(message);
};

describe("OsdkAppErrorBoundary", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders children when no error", () => {
    const store = createMockMonitorStore();
    render(
      <OsdkAppErrorBoundary monitorStore={store}>
        <div>healthy</div>
      </OsdkAppErrorBoundary>,
    );
    expect(screen.getByText("healthy")).toBeDefined();
  });

  it("records caught render errors via WindowErrorStore.recordError", () => {
    const store = createMockMonitorStore();
    const recordError = store.getWindowErrorStore().recordError;
    // React logs to console.error when an error boundary catches; silence to keep test output clean.
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <OsdkAppErrorBoundary monitorStore={store}>
        <Thrower message="render-explode" />
      </OsdkAppErrorBoundary>,
    );

    expect(recordError).toHaveBeenCalledTimes(1);
    const callArgs = vi.mocked(recordError).mock.calls[0];
    expect((callArgs[0] as Error).message).toBe("render-explode");
  });

  it("renders default fallback with the error message", () => {
    const store = createMockMonitorStore();
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <OsdkAppErrorBoundary monitorStore={store}>
        <Thrower message="visible-error" />
      </OsdkAppErrorBoundary>,
    );

    expect(screen.getByRole("alert")).toBeDefined();
    expect(screen.getByText("visible-error")).toBeDefined();
  });

  it("renders a function fallback when provided", () => {
    const store = createMockMonitorStore();
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <OsdkAppErrorBoundary
        monitorStore={store}
        fallback={(err, reset) => (
          <div>
            <span>custom-{err.message}</span>
            <button type="button" onClick={reset}>retry</button>
          </div>
        )}
      >
        <Thrower message="x" />
      </OsdkAppErrorBoundary>,
    );

    expect(screen.getByText("custom-x")).toBeDefined();
    expect(screen.getByRole("button", { name: "retry" })).toBeDefined();
  });

  it("renders a node fallback when provided", () => {
    const store = createMockMonitorStore();
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <OsdkAppErrorBoundary
        monitorStore={store}
        fallback={<div>static-fallback</div>}
      >
        <Thrower message="x" />
      </OsdkAppErrorBoundary>,
    );

    expect(screen.getByText("static-fallback")).toBeDefined();
  });

  it("reset button clears the error and re-renders children", () => {
    const store = createMockMonitorStore();
    vi.spyOn(console, "error").mockImplementation(() => {});

    let shouldThrow = true;
    const Toggle: React.FC = () => {
      if (shouldThrow) {
        throw new Error("once");
      }
      return <div>recovered</div>;
    };

    render(
      <OsdkAppErrorBoundary monitorStore={store}>
        <Toggle />
      </OsdkAppErrorBoundary>,
    );

    expect(screen.getByText("once")).toBeDefined();

    shouldThrow = false;
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("recovered")).toBeDefined();
  });
});
