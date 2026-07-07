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
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import { ConsoleLogStore } from "../../store/ConsoleLogStore.js";
import type { ConsoleLogLevel } from "../../store/ConsoleLogStore.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { createMockMonitorStore } from "../testHelpers.js";
import { ConsolePanel } from "./ConsolePanel.js";

afterEach(() => {
  cleanup();
});

async function flushMicrotasks(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
  });
}

function monitorStoreWith(store: ConsoleLogStore): MonitorStore {
  const base = createMockMonitorStore();
  base.getConsoleLogStore = () => store;
  return base;
}

async function seed(
  store: ConsoleLogStore,
  lines: Array<{ level: ConsoleLogLevel; text: string }>
): Promise<void> {
  store.install();
  for (const { level, text } of lines) {
    console[level](text); // eslint-disable-line no-console
  }
  store.uninstall();
  await flushMicrotasks();
}

describe("ConsolePanel", () => {
  it("renders the logs view with a search, issues summary, and filter", () => {
    render(<ConsolePanel monitorStore={createMockMonitorStore()} />);
    expect(screen.getByPlaceholderText("Filter logs…")).not.toBeNull();
    expect(screen.getByText(/\d+ issues/u)).not.toBeNull();
    expect(screen.getByLabelText("Filter logs")).not.toBeNull();
    expect(screen.getByText("No console output captured.")).not.toBeNull();
  });

  describe("filtering and clearing against a real store", () => {
    it("filters by search query", async () => {
      const store = new ConsoleLogStore();
      await seed(store, [
        { level: "log", text: "keep-me-alpha" },
        { level: "log", text: "drop-me-beta" },
      ]);
      render(<ConsolePanel monitorStore={monitorStoreWith(store)} />);

      expect(screen.getByText("keep-me-alpha")).not.toBeNull();
      expect(screen.getByText("drop-me-beta")).not.toBeNull();

      fireEvent.change(screen.getByPlaceholderText("Filter logs…"), {
        target: { value: "alpha" },
      });

      expect(screen.getByText("keep-me-alpha")).not.toBeNull();
      expect(screen.queryByText("drop-me-beta")).toBeNull();

      store.dispose();
    });

    it("filters by level via the funnel menu", async () => {
      const store = new ConsoleLogStore();
      await seed(store, [
        { level: "log", text: "a-log-line" },
        { level: "error", text: "an-error-line" },
      ]);
      render(<ConsolePanel monitorStore={monitorStoreWith(store)} />);

      expect(screen.getByText("a-log-line")).not.toBeNull();
      expect(screen.getByText("an-error-line")).not.toBeNull();

      fireEvent.click(screen.getByLabelText("Filter logs"));
      fireEvent.click(screen.getByRole("menuitem", { name: "error" }));

      expect(screen.queryByText("a-log-line")).toBeNull();
      expect(screen.getByText("an-error-line")).not.toBeNull();

      store.dispose();
    });

    it("clears all logs via the funnel menu", async () => {
      const store = new ConsoleLogStore();
      await seed(store, [{ level: "log", text: "will-be-cleared" }]);
      render(<ConsolePanel monitorStore={monitorStoreWith(store)} />);

      expect(screen.getByText("will-be-cleared")).not.toBeNull();

      fireEvent.click(screen.getByLabelText("Filter logs"));
      fireEvent.click(screen.getByRole("menuitem", { name: "Clear logs" }));

      expect(screen.queryByText("will-be-cleared")).toBeNull();
      expect(store.getSize()).toBe(0);
      expect(screen.getByText("No console output captured.")).not.toBeNull();

      store.dispose();
    });

    it("shows the same logs in two panels sharing one store instance", async () => {
      const store = new ConsoleLogStore();
      await seed(store, [{ level: "log", text: "shared-line" }]);
      const monitorStore = monitorStoreWith(store);
      render(
        <div>
          <ConsolePanel monitorStore={monitorStore} />
          <ConsolePanel monitorStore={monitorStore} />
        </div>
      );

      expect(screen.getAllByText("shared-line")).toHaveLength(2);

      const funnels = screen.getAllByLabelText("Filter logs");
      fireEvent.click(funnels[0]);
      fireEvent.click(screen.getByRole("menuitem", { name: "Clear logs" }));

      expect(screen.queryByText("shared-line")).toBeNull();
      expect(screen.getAllByText("No console output captured.")).toHaveLength(
        2
      );

      store.dispose();
    });

    it("renders an OSDK BrowserLogger line without %c or CSS noise", async () => {
      const store = new ConsoleLogStore();
      store.install();
      // Shape emitted by @osdk/client BrowserLogger.debug(...).
      // cspell:ignore cdebug
      console.debug(
        "%cdebug%c %cListQuery<Employee>%c %c.revalidate()%c",
        "color: LightBlue; border: 1px solid LightBlue; padding: 2px;",
        "",
        "font-style: italic; color: gray",
        "",
        "font-style: italic;color: orchid",
        "",
        "Fetch is already pending, using it"
      );
      store.uninstall();
      await flushMicrotasks();

      render(<ConsolePanel monitorStore={monitorStoreWith(store)} />);

      expect(
        screen.getByText(/Fetch is already pending, using it/u)
      ).not.toBeNull();
      expect(screen.queryByText(/%c/u)).toBeNull();
      expect(screen.queryByText(/border: 1px solid/u)).toBeNull();

      store.dispose();
    });
  });
});
