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

import { cleanup, render, screen, within } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ConsoleLogEntry } from "../store/ConsoleLogStore.js";
import type { WindowErrorEntry } from "../store/WindowErrorStore.js";
import { createMockMonitorStore } from "./testHelpers.js";

const { DebuggingTab } = await import("./DebuggingTab.js");

function consoleEntry(
  partial: Partial<ConsoleLogEntry> & { args: readonly string[] },
): ConsoleLogEntry {
  return {
    id: partial.id ?? "c1",
    level: partial.level ?? "error",
    args: partial.args,
    timestamp: partial.timestamp ?? 1000,
    ...(partial.source !== undefined ? { source: partial.source } : {}),
  };
}

function windowError(
  partial: Partial<WindowErrorEntry> & { message: string },
): WindowErrorEntry {
  return {
    id: partial.id ?? "w1",
    kind: partial.kind ?? "error",
    message: partial.message,
    timestamp: partial.timestamp ?? 1000,
    ...(partial.stack !== undefined ? { stack: partial.stack } : {}),
    ...(partial.filename !== undefined ? { filename: partial.filename } : {}),
    ...(partial.lineno !== undefined ? { lineno: partial.lineno } : {}),
    ...(partial.colno !== undefined ? { colno: partial.colno } : {}),
  };
}

function getErrorsCount(): number {
  const heading = screen.getByText(/^Errors$/).closest("div");
  if (heading == null) {
    return 0;
  }
  const countSpan = within(heading).getAllByText(/^\d+$/);
  return Number.parseInt(countSpan[0].textContent ?? "0", 10);
}

describe("DebuggingTab", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows console.error entries in the Errors section", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getConsoleLogStore().getEntries).mockReturnValue([
      consoleEntry({ id: "c1", args: ["boom-error"], timestamp: 1000 }),
    ]);

    render(<DebuggingTab monitorStore={store} />);

    expect(getErrorsCount()).toBe(1);
    expect(screen.getAllByText("boom-error").length).toBeGreaterThan(0);
  });

  it("shows uncaught errors in the Errors section", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getWindowErrorStore().getEntries).mockReturnValue([
      windowError({
        id: "w1",
        kind: "error",
        message: "thrown-from-handler",
        timestamp: 2000,
      }),
    ]);

    render(<DebuggingTab monitorStore={store} />);

    expect(getErrorsCount()).toBe(1);
    expect(screen.getAllByText("thrown-from-handler").length).toBeGreaterThan(
      0,
    );
  });

  it("shows unhandled rejections in the Errors section", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getWindowErrorStore().getEntries).mockReturnValue([
      windowError({
        id: "w1",
        kind: "unhandledrejection",
        message: "promise-rejected",
        timestamp: 3000,
      }),
    ]);

    render(<DebuggingTab monitorStore={store} />);

    expect(getErrorsCount()).toBe(1);
    expect(screen.getAllByText("promise-rejected").length).toBeGreaterThan(0);
  });

  it("deduplicates concurrent console.error and unhandledrejection within 100ms", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getWindowErrorStore().getEntries).mockReturnValue([
      windowError({
        id: "w1",
        kind: "unhandledrejection",
        message: "shared",
        timestamp: 5000,
      }),
    ]);
    vi.mocked(store.getConsoleLogStore().getEntries).mockReturnValue([
      consoleEntry({ id: "c1", args: ["shared"], timestamp: 5050 }),
    ]);

    render(<DebuggingTab monitorStore={store} />);

    expect(getErrorsCount()).toBe(1);
  });

  it("does not deduplicate when timestamps are >100ms apart", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getWindowErrorStore().getEntries).mockReturnValue([
      windowError({
        id: "w1",
        kind: "unhandledrejection",
        message: "shared",
        timestamp: 5000,
      }),
    ]);
    vi.mocked(store.getConsoleLogStore().getEntries).mockReturnValue([
      consoleEntry({ id: "c1", args: ["shared"], timestamp: 5300 }),
    ]);

    render(<DebuggingTab monitorStore={store} />);

    expect(getErrorsCount()).toBe(2);
  });

  it("deduplicates when window error and console.error straddle a 100ms bucket boundary", () => {
    const store = createMockMonitorStore();
    // window error at t=199 (bucket 1), console at t=200 (bucket 2): would
    // miss with naive bucket dedup, must hit with ±100ms window dedup.
    vi.mocked(store.getWindowErrorStore().getEntries).mockReturnValue([
      windowError({
        id: "w1",
        kind: "error",
        message: "boundary",
        timestamp: 199,
      }),
    ]);
    vi.mocked(store.getConsoleLogStore().getEntries).mockReturnValue([
      consoleEntry({ id: "c1", args: ["boundary"], timestamp: 200 }),
    ]);

    render(<DebuggingTab monitorStore={store} />);

    expect(getErrorsCount()).toBe(1);
  });
});
