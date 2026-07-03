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

import { clearPersistedState } from "../hooks/usePersistedState.js";
import { createMockMonitorStore } from "./testHelpers.js";

vi.mock("../fiber/DegradationNotice.js", () => ({
  DegradationNotice: () => null,
  useFiberCapabilities: () => ({
    hookInstalled: true,
    rendererDetected: true,
    fiberAccessWorking: true,
    detectedReactVersion: "18.3.0",
  }),
}));

vi.mock("../fiber/validation.js", () => ({
  validateFiberAccess: vi.fn(),
}));

const { MonitoringPanel } = await import("./MonitoringPanel.js");

describe("MonitoringPanel", () => {
  afterEach(() => {
    cleanup();
    // Clear persisted state so tab/collapse state
    // from one test does not leak into the next.
    clearPersistedState();
  });

  it("renders the panel with title and tabs", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(screen.queryByText("OSDK Devtools")).not.toBeNull();
    expect(screen.queryByText("Performance")).not.toBeNull();
    expect(screen.queryByText("Compute")).not.toBeNull();
    expect(screen.queryByText("Intercept")).not.toBeNull();
    expect(screen.queryByText("Debugging")).not.toBeNull();
  });

  it("renders the beta badge", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(screen.queryAllByText("Beta").length).toBeGreaterThan(0);
  });

  it("defaults to the performance tab", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(screen.queryAllByText("Cache Hit Rate").length).toBeGreaterThan(0);
  });

  it("selects a tab and surfaces its panel when activated", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(screen.getByRole("tab", { name: "Compute" }));

    expect(
      screen.getByRole("tab", { name: "Compute", selected: true })
    ).not.toBeNull();
    expect(
      screen.queryByRole("tab", { name: "Performance", selected: true })
    ).toBeNull();
    // The single visible tabpanel is the one owned by the Compute tab.
    expect(
      screen.getByRole("tabpanel").getAttribute("aria-labelledby")
    ).toContain("compute");
  });

  it("keeps all four tab panels mounted across a tab switch", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    // hidden: true includes the aria-hidden inactive panels that stay mounted.
    expect(screen.getAllByRole("tabpanel", { hidden: true })).toHaveLength(4);

    fireEvent.click(screen.getByRole("tab", { name: "Debugging" }));

    expect(screen.getAllByRole("tabpanel", { hidden: true })).toHaveLength(4);
  });

  it("preserves the selected tab across a minimize and reopen cycle", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(screen.getByRole("tab", { name: "Compute" }));
    expect(
      screen.getByRole("tab", { name: "Compute", selected: true })
    ).not.toBeNull();

    fireEvent.click(
      screen.getByRole("button", { name: "Minimize devtools panel" })
    );
    expect(screen.queryByRole("tablist")).toBeNull();

    // Reopen via the minimized affordance.
    fireEvent.click(screen.getByLabelText("View OSDK Devtools"));

    expect(
      screen.getByRole("tab", { name: "Compute", selected: true })
    ).not.toBeNull();
  });
});
