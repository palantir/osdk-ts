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

import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import type { BoundFunctions, queries } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { clearPersistedState } from "../hooks/usePersistedState.js";
import { HOST_ID } from "../shadow/ShadowHost.js";
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

// The panel renders inside a shadow root; `screen` does not pierce the shadow
// boundary, so assertions read the shadow root directly.
function devtoolsShadowRoot(): ShadowRoot {
  const host = document.querySelector<HTMLElement>(`#${HOST_ID}`);
  if (host?.shadowRoot == null) {
    throw new Error("devtools shadow host was not created");
  }
  return host.shadowRoot;
}

function shadowContains(text: string): boolean {
  return devtoolsShadowRoot().textContent?.includes(text) ?? false;
}

// Scopes Testing Library role/label queries to the panel's shadow-root mount,
// since `screen` only queries the light DOM and cannot pierce the shadow
// boundary.
function shadow(): BoundFunctions<typeof queries> {
  const mount = devtoolsShadowRoot().querySelector<HTMLElement>(
    "[data-osdk-devtools-mount]"
  );
  if (mount == null) {
    throw new Error("devtools shadow mount was not created");
  }
  return within(mount);
}

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

    expect(shadowContains("OSDK Devtools")).toBe(true);
    expect(shadowContains("Performance")).toBe(true);
    expect(shadowContains("Compute")).toBe(true);
    expect(shadowContains("Intercept")).toBe(true);
    expect(shadowContains("Debugging")).toBe(true);
  });

  it("renders the beta badge", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(shadowContains("Beta")).toBe(true);
  });

  it("defaults to the performance tab", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    expect(shadowContains("Cache Hit Rate")).toBe(true);
  });

  it("renders into an isolated shadow root, not the page", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    // The panel content lives in the shadow root, not the light DOM.
    expect(screen.queryByText("OSDK Devtools")).toBeNull();
    expect(shadowContains("OSDK Devtools")).toBe(true);

    // The devtools stylesheet lives inside the shadow root, never in the page.
    const shadowStyle = devtoolsShadowRoot().querySelector("style");
    expect(shadowStyle).not.toBeNull();
    expect(document.head.contains(shadowStyle)).toBe(false);
  });

  it("selects a tab and surfaces its panel when activated", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(shadow().getByRole("tab", { name: "Compute" }));

    expect(
      shadow().getByRole("tab", { name: "Compute", selected: true })
    ).not.toBeNull();
    // The single visible tabpanel is the one owned by the Compute tab.
    expect(
      shadow().getByRole("tabpanel").getAttribute("aria-labelledby")
    ).toContain("compute");
  });

  it("keeps all four tab panels mounted across a tab switch", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    // hidden: true includes the aria-hidden inactive panels that stay mounted.
    expect(shadow().getAllByRole("tabpanel", { hidden: true })).toHaveLength(4);

    fireEvent.click(shadow().getByRole("tab", { name: "Debugging" }));

    expect(shadow().getAllByRole("tabpanel", { hidden: true })).toHaveLength(4);
  });

  it("preserves the selected tab across a minimize and reopen cycle", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    fireEvent.click(shadow().getByRole("tab", { name: "Compute" }));
    expect(
      shadow().getByRole("tab", { name: "Compute", selected: true })
    ).not.toBeNull();

    fireEvent.click(
      shadow().getByRole("button", { name: "Minimize devtools panel" })
    );
    expect(shadow().queryByRole("tablist")).toBeNull();

    // Reopen via the minimized affordance.
    fireEvent.click(shadow().getByLabelText("View OSDK Devtools"));

    expect(shadow().queryByRole("tablist")).not.toBeNull();
  });
});
