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

import { afterEach, describe, expect, it, vi } from "vitest";

import {
  getRegisteredPlugins,
  registerDevToolsPlugin,
  subscribePlugins,
} from "./registry.js";
import type { DevToolsPlugin } from "./types.js";

const GLOBAL_STORE_KEY = "__OSDK_DEVTOOLS_MONITOR_STORE__";

function makePlugin(
  id: string,
  overrides?: Partial<DevToolsPlugin>
): DevToolsPlugin {
  return {
    id,
    label: id,
    icon: "cube",
    panel: () => null,
    ...overrides,
  };
}

function setGlobalStoreStub(): void {
  (globalThis as Record<string, unknown>)[GLOBAL_STORE_KEY] = {
    getMetricsStore() {},
    getComputeStore() {},
  };
}

const cleanups: Array<() => void> = [];

function track(unregister: () => void): () => void {
  cleanups.push(unregister);
  return unregister;
}

afterEach(() => {
  for (const cleanup of cleanups) {
    cleanup();
  }
  cleanups.length = 0;
  Reflect.deleteProperty(globalThis, GLOBAL_STORE_KEY);
});

describe("registry", () => {
  it("register makes a plugin appear in getRegisteredPlugins", () => {
    const plugin = makePlugin("appears");
    track(registerDevToolsPlugin(plugin));
    expect(getRegisteredPlugins()).toContain(plugin);
  });

  it("ignores a duplicate id and returns a no-op unregister", () => {
    const first = makePlugin("dup", { label: "first" });
    const second = makePlugin("dup", { label: "second" });
    track(registerDevToolsPlugin(first));
    const unregisterDuplicate = registerDevToolsPlugin(second);

    const plugins = getRegisteredPlugins();
    expect(plugins.filter((plugin) => plugin.id === "dup")).toHaveLength(1);
    expect(plugins).toContain(first);
    expect(plugins).not.toContain(second);

    unregisterDuplicate();
    expect(getRegisteredPlugins()).toContain(first);
  });

  it("unregister removes the plugin", () => {
    const plugin = makePlugin("removable");
    const unregister = registerDevToolsPlugin(plugin);
    expect(getRegisteredPlugins()).toContain(plugin);

    unregister();
    expect(getRegisteredPlugins()).not.toContain(plugin);
  });

  it("notifies subscribers on register and on unregister", () => {
    const callback = vi.fn();
    const unsubscribe = subscribePlugins(callback);

    const unregister = registerDevToolsPlugin(makePlugin("notify"));
    expect(callback).toHaveBeenCalledTimes(1);

    unregister();
    expect(callback).toHaveBeenCalledTimes(2);

    unsubscribe();
  });

  it("calls init exactly once on register when the global store is present", () => {
    setGlobalStoreStub();
    const init = vi.fn();
    track(registerDevToolsPlugin(makePlugin("with-store", { init })));
    expect(init).toHaveBeenCalledTimes(1);
  });

  it("does not call init and does not throw when the global store is absent", () => {
    const init = vi.fn();
    expect(() => {
      track(registerDevToolsPlugin(makePlugin("no-store", { init })));
    }).not.toThrow();
    expect(init).not.toHaveBeenCalled();
  });

  it("returns a stable snapshot reference that only changes on mutation", () => {
    const initial = getRegisteredPlugins();
    expect(getRegisteredPlugins()).toBe(initial);

    const unregister = registerDevToolsPlugin(makePlugin("snapshot"));
    const afterRegister = getRegisteredPlugins();
    expect(afterRegister).not.toBe(initial);
    expect(getRegisteredPlugins()).toBe(afterRegister);

    unregister();
    const afterUnregister = getRegisteredPlugins();
    expect(afterUnregister).not.toBe(afterRegister);
  });
});
