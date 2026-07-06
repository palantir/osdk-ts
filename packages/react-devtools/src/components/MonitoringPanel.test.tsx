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
import { afterEach, describe, expect, it, vi } from "vitest";

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

// The panel renders inside a shadow root so its styles stay isolated from the
// host app. React Testing Library's `screen` does not pierce the shadow
// boundary, so assertions read the devtools shadow root directly.
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

describe("MonitoringPanel", () => {
  afterEach(() => {
    cleanup();
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

  it("renders into an isolated shadow root, not the host document", () => {
    const store = createMockMonitorStore();
    render(<MonitoringPanel monitorStore={store} />);

    // Devtools no longer injects a global stylesheet into the host document.
    expect(
      document.querySelector("#__osdk_react_devtools_styles__")
    ).toBeNull();

    // The panel content lives in the shadow root, not the light DOM.
    expect(screen.queryByText("OSDK Devtools")).toBeNull();
    expect(shadowContains("OSDK Devtools")).toBe(true);

    // Styles are injected into the shadow root instead.
    expect(devtoolsShadowRoot().querySelector("style")).not.toBeNull();
  });
});
