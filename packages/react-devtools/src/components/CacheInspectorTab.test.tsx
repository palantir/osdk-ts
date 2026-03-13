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

const { CacheInspectorTab } = await import("./CacheInspectorTab.js");

describe("CacheInspectorTab", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing with empty cache", () => {
    const store = createMockMonitorStore();

    const { container } = render(
      <CacheInspectorTab monitorStore={store} />,
    );

    expect(container.firstChild).not.toBeNull();
  });

  it("renders at least one button", () => {
    const store = createMockMonitorStore();

    render(<CacheInspectorTab monitorStore={store} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThan(0);
  });

  it("calls getCacheEntries on mount", () => {
    const store = createMockMonitorStore();

    render(<CacheInspectorTab monitorStore={store} />);

    expect(store.getCacheEntries).toHaveBeenCalled();
  });
});
