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

import { describe, expect, it } from "vitest";

import type { MonitorStore } from "../../store/MonitorStore.js";
import { collectErrors } from "./collectErrors.js";

interface StoreData {
  actionErrors?: unknown[];
  windowErrors?: unknown[];
  consoleEntries?: unknown[];
}

function makeStore(data: StoreData): MonitorStore {
  const stub = {
    getMetricsStore: () => ({ getActionErrors: () => data.actionErrors ?? [] }),
    getWindowErrorStore: () => ({ getEntries: () => data.windowErrors ?? [] }),
    getConsoleLogStore: () => ({ getEntries: () => data.consoleEntries ?? [] }),
  };
  return stub as unknown as MonitorStore;
}

describe("collectErrors", () => {
  it("collects action failures and suggests fixing validation errors", () => {
    const errors = collectErrors(
      makeStore({
        actionErrors: [
          {
            id: "a1",
            message: "create failed",
            timestamp: 1000,
            validationErrors: ["name required"],
            actionType: "createFoo",
            parameters: {},
          },
        ],
      })
    );
    expect(errors).toHaveLength(1);
    expect(errors[0].category).toBe("action failure");
    expect(errors[0].suggestion).toBeDefined();
  });

  it("dedupes a console.error mirroring a window error within 100ms", () => {
    const errors = collectErrors(
      makeStore({
        windowErrors: [
          { id: "w1", kind: "error", message: "Kaboom", timestamp: 5000 },
        ],
        consoleEntries: [
          { id: "c1", level: "error", args: ["Kaboom"], timestamp: 5050 },
        ],
      })
    );
    expect(errors).toHaveLength(1);
    expect(errors[0].category).toBe("uncaught error");
  });

  it("dedupes a multi-arg console.error against a window error on the first arg", () => {
    const errors = collectErrors(
      makeStore({
        windowErrors: [
          { id: "w1", kind: "error", message: "Kaboom", timestamp: 5000 },
        ],
        consoleEntries: [
          {
            id: "c1",
            level: "error",
            args: ["Kaboom", { detail: "extra" }],
            timestamp: 5050,
          },
        ],
      })
    );
    expect(errors).toHaveLength(1);
    expect(errors[0].category).toBe("uncaught error");
  });

  it("keeps a console.error that matches no window error", () => {
    const errors = collectErrors(
      makeStore({
        windowErrors: [
          { id: "w1", kind: "error", message: "Kaboom", timestamp: 5000 },
        ],
        consoleEntries: [
          { id: "c1", level: "error", args: ["Different"], timestamp: 5050 },
        ],
      })
    );
    expect(errors).toHaveLength(2);
  });

  it("ignores non-error console levels", () => {
    const errors = collectErrors(
      makeStore({
        consoleEntries: [
          { id: "c1", level: "log", args: ["hello"], timestamp: 1 },
        ],
      })
    );
    expect(errors).toHaveLength(0);
  });
});
