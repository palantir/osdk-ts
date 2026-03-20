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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { osdkDevTools } from "./index.js";

describe("osdkDevTools vite plugin", () => {
  const origEnv = { ...process.env };

  beforeEach(() => {
    vi.useFakeTimers();
    delete process.env.VITEST;
    process.env.NODE_ENV = "development";
  });

  afterEach(() => {
    process.env = { ...origEnv };
  });

  it("returns a Vite plugin object", () => {
    const plugin = osdkDevTools();
    expect(plugin).toBeDefined();
    expect(typeof plugin).toBe("object");
    expect(plugin.name).toBe("osdk-devtools");
  });

  it("plugin has enforce: pre", () => {
    const plugin = osdkDevTools();
    expect(plugin.enforce).toBe("pre");
  });

  it("apply returns false in production mode", () => {
    const plugin = osdkDevTools();
    const applyFn = plugin.apply as (
      config: { mode?: string },
      env: { command: string },
    ) => boolean;

    const result = applyFn({ mode: "production" }, { command: "serve" });
    expect(result).toBe(false);
  });

  it("apply returns false when VITEST env is set", () => {
    process.env.VITEST = "true";
    const plugin = osdkDevTools();
    const applyFn = plugin.apply as (
      config: { mode?: string },
      env: { command: string },
    ) => boolean;

    const result = applyFn({ mode: "development" }, { command: "serve" });
    expect(result).toBe(false);
  });

  it("apply returns false for command === build", () => {
    const plugin = osdkDevTools();
    const applyFn = plugin.apply as (
      config: { mode?: string },
      env: { command: string },
    ) => boolean;

    const result = applyFn({ mode: "development" }, { command: "build" });
    expect(result).toBe(false);
  });

  it("apply returns true for dev serve in development mode", () => {
    const plugin = osdkDevTools();
    const applyFn = plugin.apply as (
      config: { mode?: string },
      env: { command: string },
    ) => boolean;

    const result = applyFn({ mode: "development" }, { command: "serve" });
    expect(result).toBe(true);
  });

  it("transformIndexHtml modifies HTML string", () => {
    const plugin = osdkDevTools();
    const transformConfig = plugin.transformIndexHtml as {
      order: string;
      handler: (html: string) => string;
    };

    const html = "<html><head></head><body></body></html>";
    const result = transformConfig.handler(html);

    expect(result).not.toBe(html);
    expect(result).toContain("</head>");
    expect(result).toContain("@osdk/react-devtools");
  });

  it("transformIndexHtml injects CSS by default", () => {
    const plugin = osdkDevTools();
    const transformConfig = plugin.transformIndexHtml as {
      order: string;
      handler: (html: string) => string;
    };

    const html = "<html><head></head><body></body></html>";
    const result = transformConfig.handler(html);

    expect(result).toContain("stylesheet");
  });

  it("transformIndexHtml skips CSS when injectCSS is false", () => {
    const plugin = osdkDevTools({ injectCSS: false });
    const transformConfig = plugin.transformIndexHtml as {
      order: string;
      handler: (html: string) => string;
    };

    const html = "<html><head></head><body></body></html>";
    const result = transformConfig.handler(html);

    expect(result).not.toContain("stylesheet");
  });

  it("apply returns false when explicitly disabled", () => {
    const plugin = osdkDevTools({ enabled: false });
    const applyFn = plugin.apply as (
      config: { mode?: string },
      env: { command: string },
    ) => boolean;

    const result = applyFn({ mode: "development" }, { command: "serve" });
    expect(result).toBe(false);
  });
});
