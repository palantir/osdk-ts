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

import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";
import { createMockMonitorStore } from "./testHelpers.js";

function binding(
  overrides: Partial<ComponentHookBinding> & {
    hookType: ComponentHookBinding["hookType"];
    queryParams: QueryParams;
  }
): ComponentHookBinding {
  return {
    componentId: "comp",
    componentName: "Comp",
    hookIndex: 0,
    subscriptionId: "sub",
    querySignature: "sig",
    stackTrace: "",
    mountedAt: 0,
    renderCount: 0,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
    ...overrides,
  };
}

function populateRegistry(
  store: ReturnType<typeof createMockMonitorStore>,
  components: ReadonlyArray<readonly [string, ComponentHookBinding[]]>
): void {
  vi.mocked(store.getComponentRegistry().getActiveComponents).mockReturnValue(
    new Map(components)
  );
}

const { OverviewTab } = await import("./OverviewTab.js");

describe("OverviewTab", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows the 'No ontology' empty state when the registry has no active components", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(screen.queryByText("No ontology linked")).not.toBeNull();
    expect(screen.queryByText("No ontology found")).not.toBeNull();
  });

  it("links to the OSDK docs from the empty state", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toContain("palantir.com");
  });

  it("does not show the empty state when the registry has active components", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getComponentRegistry().getActiveComponents).mockReturnValue(
      new Map([["comp-1", []]])
    );

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(screen.queryByText("No ontology linked")).toBeNull();
  });

  it("shows distinct object-type and action-type counts for a populated registry", () => {
    const store = createMockMonitorStore();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "1",
              entityKind: "object",
            },
          }),
          // Same object type in another component → still counts once.
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "2",
              entityKind: "object",
            },
          }),
          binding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createEmployee" },
          }),
        ],
      ],
      [
        "c2",
        [
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Office",
              entityKind: "object",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /object types/i }).textContent
    ).toContain("2");
    expect(
      screen.getByRole("button", { name: /action types/i }).textContent
    ).toContain("1");
  });

  it("excludes interface-kind bindings from the object-type count", () => {
    const store = createMockMonitorStore();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "1",
              entityKind: "object",
            },
          }),
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Named",
              entityKind: "interface",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /object types/i }).textContent
    ).toContain("1");
  });

  it("switches to the Debugging tab when the object-types count is clicked", () => {
    const store = createMockMonitorStore();
    const setActiveTab = vi.fn();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "1",
              entityKind: "object",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByRole("button", { name: /object types/i }));

    expect(setActiveTab).toHaveBeenCalledWith("debugging");
  });

  it("switches to the Debugging tab when the action-types count is clicked", () => {
    const store = createMockMonitorStore();
    const setActiveTab = vi.fn();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createEmployee" },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByRole("button", { name: /action types/i }));

    expect(setActiveTab).toHaveBeenCalledWith("debugging");
  });

  it("shows a distinct interface count for interface-kind bindings", () => {
    const store = createMockMonitorStore();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Named",
              entityKind: "interface",
            },
          }),
          // Same interface elsewhere → counts once.
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Named",
              primaryKey: "1",
              entityKind: "interface",
            },
          }),
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Located",
              entityKind: "interface",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /interfaces/i }).textContent
    ).toContain("2");
  });

  it("switches to the Debugging tab when the interfaces count is clicked", () => {
    const store = createMockMonitorStore();
    const setActiveTab = vi.fn();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Named",
              entityKind: "interface",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByRole("button", { name: /interfaces/i }));

    expect(setActiveTab).toHaveBeenCalledWith("debugging");
  });
});
