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
import { createMockMonitorStore } from "./test-helpers.js";

const { InterceptTab } = await import("./InterceptTab.js");

describe("InterceptTab", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const store = createMockMonitorStore();

    const { container } = render(
      <InterceptTab monitorStore={store} />,
    );

    expect(container.firstChild).not.toBeNull();
  });

  it("renders the unified active intercepts section", () => {
    const store = createMockMonitorStore();

    render(<InterceptTab monitorStore={store} />);

    expect(screen.queryByText("Active Intercepts")).not.toBeNull();
    expect(screen.queryByText("No active intercepts")).not.toBeNull();
  });

  it("renders the select component button", () => {
    const store = createMockMonitorStore();

    render(<InterceptTab monitorStore={store} />);

    const buttons = screen.queryAllByText("Select Component");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("accesses the mock manager from store", () => {
    const store = createMockMonitorStore();

    render(<InterceptTab monitorStore={store} />);

    expect(store.getMockManager).toHaveBeenCalled();
  });

  it("accesses the prototype override store", () => {
    const store = createMockMonitorStore();

    render(<InterceptTab monitorStore={store} />);

    expect(store.getPrototypeOverrideStore).toHaveBeenCalled();
  });
});
