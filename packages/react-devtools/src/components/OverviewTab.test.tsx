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

import { createMockMonitorStore } from "./testHelpers.js";

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
});
