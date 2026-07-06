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

import type { MonitorStore } from "../../store/MonitorStore.js";
import { ConsolePanel } from "./ConsolePanel.js";

function makeStore(): MonitorStore {
  const stub = {
    getMetricsStore: () => ({ getActionErrors: () => [] }),
    getWindowErrorStore: () => ({ getEntries: () => [] }),
    getConsoleLogStore: () => ({
      subscribe: () => () => {},
      getEntries: () => [],
      getSize: () => 0,
      clear: () => {},
    }),
  };
  return stub as unknown as MonitorStore;
}

afterEach(() => {
  cleanup();
});

describe("ConsolePanel", () => {
  it("offers an Errors/Logs toggle and defaults to the errors view", () => {
    render(<ConsolePanel monitorStore={makeStore()} />);
    expect(screen.getByText("Errors")).not.toBeNull();
    expect(screen.getByText("Logs")).not.toBeNull();
    expect(screen.getByText("No errors captured.")).not.toBeNull();
  });
});
