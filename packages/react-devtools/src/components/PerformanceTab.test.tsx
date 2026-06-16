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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { createMockMonitorStore } from "./testHelpers.js";

const { PerformanceTab } = await import("./PerformanceTab.js");

describe("PerformanceTab", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders cache metrics section", () => {
    const store = createMockMonitorStore();
    const metricsStore = store.getMetricsStore();

    render(<PerformanceTab metricsStore={metricsStore} monitorStore={store} />);

    expect(screen.queryAllByText("Cache Hit Rate").length).toBeGreaterThan(0);
  });

  it("renders filter buttons", () => {
    const store = createMockMonitorStore();
    const metricsStore = store.getMetricsStore();

    render(<PerformanceTab metricsStore={metricsStore} monitorStore={store} />);

    expect(screen.queryAllByText("All").length).toBeGreaterThan(0);
    expect(screen.queryAllByText("Cache").length).toBeGreaterThan(0);
    expect(screen.queryAllByText("Actions").length).toBeGreaterThan(0);
  });

  it("renders with zero metrics without crashing", () => {
    const store = createMockMonitorStore();
    const metricsStore = store.getMetricsStore();

    const { container } = render(
      <PerformanceTab metricsStore={metricsStore} monitorStore={store} />,
    );

    expect(container.firstChild).not.toBeNull();
  });
});
