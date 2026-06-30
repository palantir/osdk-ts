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
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { registerDevToolsPlugin } from "../plugins/registry.js";
import type { DevToolsPlugin } from "../plugins/types.js";
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

const ACTIVE_TAB_KEY = "osdk-devtools-active-tab";

function makePlugin(id: string, label: string): DevToolsPlugin {
  return {
    id,
    label,
    icon: "cube",
    panel: () => <div data-testid={`panel-${id}`}>{`${label} panel`}</div>,
  };
}

describe("MonitoringPanel", () => {
  let unregisterFns: Array<() => void> = [];

  function register(plugin: DevToolsPlugin): void {
    unregisterFns.push(registerDevToolsPlugin(plugin));
  }

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    for (const unregister of unregisterFns) {
      unregister();
    }
    unregisterFns = [];
    localStorage.clear();
  });

  it("renders one tab button per registered plugin", () => {
    register(makePlugin("overview", "Overview"));
    register(makePlugin("cache", "Cache"));
    register(makePlugin("actions", "Actions"));

    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByRole("tab", { name: "Overview" })).not.toBeNull();
    expect(screen.getByRole("tab", { name: "Cache" })).not.toBeNull();
    expect(screen.getByRole("tab", { name: "Actions" })).not.toBeNull();
  });

  it("mounts only the active tab's panel", () => {
    register(makePlugin("overview", "Overview"));
    register(makePlugin("cache", "Cache"));

    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(screen.queryByTestId("panel-overview")).not.toBeNull();
    expect(screen.queryByTestId("panel-cache")).toBeNull();
  });

  it("swaps the mounted panel when another tab is clicked", () => {
    register(makePlugin("overview", "Overview"));
    register(makePlugin("cache", "Cache"));

    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(screen.getByRole("tab", { name: "Cache" }));

    expect(screen.queryByTestId("panel-cache")).not.toBeNull();
    expect(screen.queryByTestId("panel-overview")).toBeNull();
  });

  it("falls back to the first tab when the persisted active id is absent", () => {
    localStorage.setItem(ACTIVE_TAB_KEY, JSON.stringify("removed-tab"));

    register(makePlugin("overview", "Overview"));
    register(makePlugin("cache", "Cache"));

    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(screen.queryByTestId("panel-overview")).not.toBeNull();
    expect(screen.queryByTestId("panel-cache")).toBeNull();
  });
});
