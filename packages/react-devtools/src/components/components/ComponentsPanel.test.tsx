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

import type { ComponentHookBinding } from "../../utils/ComponentQueryRegistry.js";
import { ComponentsPanel } from "./ComponentsPanel.js";

function makeBinding(): ComponentHookBinding {
  return {
    componentId: "c1",
    componentName: "ParcelList",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    subscriptionId: "s1",
    querySignature: "useOsdkObjects:Parcel",
    queryParams: { type: "list", objectType: "Parcel" },
    stackTrace: "",
    mountedAt: 0,
    renderCount: 2,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
  } as ComponentHookBinding;
}

function makeStore(
  active: Map<string, ComponentHookBinding[]>,
): import("../../store/MonitorStore.js").MonitorStore {
  const stub = {
    getComponentRegistry: () => ({
      subscribe: () => () => {},
      getVersion: () => 0,
      getActiveComponents: () => active,
    }),
    getPropertyAccessTracker: () => ({
      getWastedRenders: () => [],
      getUnusedProperties: () => [],
    }),
  };
  return stub as unknown as import("../../store/MonitorStore.js").MonitorStore;
}

afterEach(() => {
  cleanup();
});

describe("ComponentsPanel", () => {
  it("renders a filter box and the mounted components", () => {
    const active = new Map([["c1", [makeBinding()]]]);
    render(<ComponentsPanel monitorStore={makeStore(active)} theme="light" />);
    expect(screen.getByPlaceholderText("Filter components…")).not.toBeNull();
    expect(screen.getByText("ParcelList")).not.toBeNull();
  });

  it("shows an empty state when nothing is mounted", () => {
    render(<ComponentsPanel monitorStore={makeStore(new Map())} theme="light" />);
    expect(
      screen.getByText("No OSDK components are mounted yet."),
    ).not.toBeNull();
  });
});
