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

import type { DevToolsRegistry } from "@osdk/react/devtools-registry";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let capturedRegistry: DevToolsRegistry | null = null;

vi.mock("@osdk/react/devtools-registry", () => ({
  registerDevTools: (tools: DevToolsRegistry) => {
    capturedRegistry = tools;
  },
}));

vi.mock("@blueprintjs/core/lib/css/blueprint.css", () => ({}));
vi.mock("@blueprintjs/icons/lib/css/blueprint-icons.css", () => ({}));

vi.mock("./fiber/DevtoolsHook.js", () => ({
  safelyInstallDevToolsHook: vi.fn(),
  onCommitFiberRoot: vi.fn().mockReturnValue(vi.fn()),
  onCommitFiberUnmount: vi.fn().mockReturnValue(vi.fn()),
}));

vi.mock("./components/MonitoringPanel.js", () => ({
  SafeMonitoringPanel: () => null,
  MonitoringPanel: () => null,
}));

vi.mock("./store/MonitorStore.js", () => {
  const store = {
    wrapExistingClient: vi.fn((c: unknown) => c),
    dispose: vi.fn(),
  };
  return {
    MonitorStore: vi.fn(() => store),
    getMonitorStore: vi.fn(() => store),
  };
});

describe("register", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    capturedRegistry = null;
    vi.stubEnv("NODE_ENV", "development");
    globalThis.fetch = vi.fn() as typeof fetch;
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
    globalThis.fetch = originalFetch;
  });

  it("calls registerDevTools with wrapClient and wrapChildren", async () => {
    await import("./register.js");

    if (capturedRegistry == null) {
      throw new Error("expected capturedRegistry to be defined");
    }
    expect(typeof capturedRegistry.wrapClient).toBe("function");
    expect(typeof capturedRegistry.wrapChildren).toBe("function");
  });

  it("does not include renderPanel in the registry", async () => {
    await import("./register.js");

    if (capturedRegistry == null) {
      throw new Error("expected capturedRegistry to be defined");
    }
    expect("renderPanel" in capturedRegistry).toBe(false);
  });
});
