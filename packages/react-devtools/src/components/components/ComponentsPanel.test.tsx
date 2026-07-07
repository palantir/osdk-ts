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
import { afterEach, describe, expect, it } from "vitest";

import type { MonitorStore } from "../../store/MonitorStore.js";
import type { UnusedProperty, WastedRender } from "../../types/index.js";
import type { ComponentHookBinding } from "../../utils/ComponentQueryRegistry.js";
import type { PropertyAccessEvent } from "../../utils/PropertyAccessTracker.js";
import { ComponentsPanel } from "./ComponentsPanel.js";

function makeBinding(
  overrides: Partial<ComponentHookBinding> = {}
): ComponentHookBinding {
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
    ...overrides,
  };
}

interface StoreOptions {
  propsById?: Record<string, Record<string, string>>;
  accessesById?: Record<string, PropertyAccessEvent[]>;
  wasted?: WastedRender[];
  unused?: UnusedProperty[];
}

function makeStore(
  active: Map<string, ComponentHookBinding[]>,
  options: StoreOptions = {}
): MonitorStore {
  const {
    propsById = {},
    accessesById = {},
    wasted = [],
    unused = [],
  } = options;
  const stub = {
    getComponentRegistry: () => ({
      subscribe: () => () => {},
      getVersion: () => 0,
      getActiveComponents: () => active,
      getComponentProps: (id: string) => propsById[id],
    }),
    getPropertyAccessTracker: () => ({
      getWastedRenders: () => wasted,
      getUnusedProperties: () => unused,
      getAccessesByComponent: (id: string) => accessesById[id] ?? [],
    }),
  };
  return stub as unknown as MonitorStore;
}

afterEach(() => {
  cleanup();
});

/** Matches for `label` that are tree nodes, not filter chips (chips are buttons). */
function treeNodes(label: string): HTMLElement[] {
  return screen
    .getAllByText(label)
    .filter((el) => el.closest("button") == null);
}

describe("ComponentsPanel", () => {
  it("renders the ontology search box and the mounted components", () => {
    const active = new Map([["c1", [makeBinding()]]]);
    render(<ComponentsPanel monitorStore={makeStore(active)} />);
    expect(screen.getByPlaceholderText("Search ontology")).not.toBeNull();
    expect(screen.getByText("ParcelList")).not.toBeNull();
  });

  it("shows an empty state when nothing is mounted", () => {
    render(<ComponentsPanel monitorStore={makeStore(new Map())} />);
    expect(
      screen.getByText("No OSDK components are mounted yet.")
    ).not.toBeNull();
  });

  it("summarizes component, object type, and action type counts", () => {
    const active = new Map([
      [
        "c1",
        [
          makeBinding(),
          makeBinding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createParcel" },
          }),
        ],
      ],
    ]);
    render(<ComponentsPanel monitorStore={makeStore(active)} />);
    expect(screen.getByText("1 component")).not.toBeNull();
    expect(screen.getByText("1 object type")).not.toBeNull();
    expect(screen.getByText("1 action type")).not.toBeNull();
  });

  it("shows related object types and actions, not hook names", () => {
    const active = new Map([
      [
        "c1",
        [
          makeBinding(),
          makeBinding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createParcel" },
          }),
        ],
      ],
    ]);
    render(<ComponentsPanel monitorStore={makeStore(active)} />);
    fireEvent.click(screen.getByText("ParcelList"));

    expect(screen.getByText("Related objects")).not.toBeNull();
    expect(treeNodes("Parcel").length).toBeGreaterThan(0);
    expect(screen.getByText("Related actions")).not.toBeNull();
    expect(treeNodes("createParcel").length).toBeGreaterThan(0);
    expect(screen.queryByText("useOsdkObjects")).toBeNull();
    expect(screen.queryByText("useOsdkAction")).toBeNull();
  });

  it("shows React props for a component", () => {
    const active = new Map([["c1", [makeBinding()]]]);
    const store = makeStore(active, {
      propsById: { c1: { title: "Hello" } },
    });
    render(<ComponentsPanel monitorStore={store} />);
    fireEvent.click(screen.getByText("ParcelList"));
    fireEvent.click(screen.getByText("React props"));

    expect(screen.getByText("title")).not.toBeNull();
    expect(screen.getByText("Hello")).not.toBeNull();
  });

  it("expands an object type to reveal instances, truncating with +N more", () => {
    const accesses: PropertyAccessEvent[] = [];
    for (let i = 0; i < 8; i++) {
      accesses.push({
        componentId: "c1",
        objectKey: `Parcel:p${i}`,
        property: "name",
        timestamp: 0,
      });
    }
    const active = new Map([["c1", [makeBinding()]]]);
    const store = makeStore(active, { accessesById: { c1: accesses } });
    render(<ComponentsPanel monitorStore={store} />);

    fireEvent.click(screen.getByText("ParcelList"));
    // "Parcel" is a filter chip and two tree nodes (Related objects, Related
    // properties); the first tree node is the Related objects group.
    fireEvent.click(treeNodes("Parcel")[0]);

    expect(screen.getByText("p0")).not.toBeNull();
    expect(screen.getByText("+ 3 more")).not.toBeNull();
  });

  it("marks a clean component Healthy and a noisy one with a warning", () => {
    const activeHealthy = new Map([["c1", [makeBinding()]]]);
    const { unmount } = render(
      <ComponentsPanel monitorStore={makeStore(activeHealthy)} />
    );
    expect(screen.getByText("Healthy")).not.toBeNull();
    unmount();

    const activeNoisy = new Map([["c1", [makeBinding()]]]);
    const store = makeStore(activeNoisy, {
      wasted: [
        {
          componentId: "c1",
          componentName: "ParcelList",
          count: 2,
          timestamp: 0,
        },
      ],
    });
    render(<ComponentsPanel monitorStore={store} />);
    expect(screen.getByText("2 wasted")).not.toBeNull();
    expect(screen.queryByText("Healthy")).toBeNull();
  });

  it("filters components by the search query", () => {
    const active = new Map([
      ["c1", [makeBinding()]],
      [
        "c2",
        [
          makeBinding({
            componentName: "WorkspaceView",
            queryParams: { type: "list", objectType: "Workspace" },
          }),
        ],
      ],
    ]);
    render(<ComponentsPanel monitorStore={makeStore(active)} />);
    expect(screen.getByText("ParcelList")).not.toBeNull();
    expect(screen.getByText("WorkspaceView")).not.toBeNull();

    fireEvent.change(screen.getByPlaceholderText("Search ontology"), {
      target: { value: "workspace" },
    });
    expect(screen.queryByText("ParcelList")).toBeNull();
    expect(screen.getByText("WorkspaceView")).not.toBeNull();
  });

  it("filters components to a selected object type chip", () => {
    const active = new Map([
      ["c1", [makeBinding()]],
      [
        "c2",
        [
          makeBinding({
            componentName: "WorkspaceView",
            queryParams: { type: "list", objectType: "Workspace" },
          }),
        ],
      ],
    ]);
    render(<ComponentsPanel monitorStore={makeStore(active)} />);

    fireEvent.click(screen.getByText("Parcel"));
    expect(screen.getByText("ParcelList")).not.toBeNull();
    expect(screen.queryByText("WorkspaceView")).toBeNull();

    fireEvent.click(screen.getByText("All"));
    expect(screen.getByText("WorkspaceView")).not.toBeNull();
  });

  it("filters components to a selected action chip", () => {
    const active = new Map([
      [
        "c1",
        [
          makeBinding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createParcel" },
          }),
        ],
      ],
      ["c2", [makeBinding({ componentName: "WorkspaceView" })]],
    ]);
    render(<ComponentsPanel monitorStore={makeStore(active)} />);

    fireEvent.click(screen.getByText("createParcel"));
    expect(screen.getByText("ParcelList")).not.toBeNull();
    expect(screen.queryByText("WorkspaceView")).toBeNull();
  });
});
