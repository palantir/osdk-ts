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

// The shell renders whatever base tabs are registered; mock a single stable tab
// so these tests stay deterministic as real tabs are added to BASE_TABS.
vi.mock("../plugins/baseTabs.js", () => ({
  BASE_TABS: [
    {
      id: "overview",
      label: "Overview",
      icon: "home",
      panel: () => "overview-panel-content",
    },
  ],
}));

const { MonitoringPanel } = await import("./MonitoringPanel.js");

describe("MonitoringPanel", () => {
  afterEach(() => {
    cleanup();
  });

  it("boots collapsed (closed) on load", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    // The full panel is not shown; only the minimized launcher is.
    expect(screen.queryByText("OSDK Devtools")).toBeNull();
    expect(screen.queryByText("</>")).not.toBeNull();
  });

  it("opens from the minimized launcher and renders registered tabs", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(screen.getByText("</>"));

    expect(screen.queryByText("OSDK Devtools")).not.toBeNull();
    expect(screen.queryAllByText("Beta").length).toBeGreaterThan(0);
    expect(screen.queryByText("Overview")).not.toBeNull();
    expect(screen.queryByText("overview-panel-content")).not.toBeNull();
  });

  it("closes back to the launcher when the close button is clicked", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(screen.getByText("</>"));
    expect(screen.queryByText("OSDK Devtools")).not.toBeNull();

    fireEvent.click(screen.getByLabelText("Close devtools panel"));
    expect(screen.queryByText("OSDK Devtools")).toBeNull();
  });
});
