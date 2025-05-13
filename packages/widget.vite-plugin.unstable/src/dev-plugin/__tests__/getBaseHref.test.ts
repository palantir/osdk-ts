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

import type { ViteDevServer } from "vite";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as codeWorkspacesMode from "../codeWorkspacesMode.js";
import { getBaseHref } from "../getBaseHref.js";

describe("getBaseHref", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("returns localhost URLs in local mode", () => {
    vi.spyOn(codeWorkspacesMode, "isCodeWorkspacesMode").mockReturnValue(false);

    const server = {
      config: {
        mode: "",
        base: "/",
        server: { https: false, port: 5173 },
      },
    } as unknown as ViteDevServer;

    const result = getBaseHref(server);
    expect(result).toEqual("http://localhost:5173/");
  });

  test("returns code workspaces URLs in code workspaces mode", () => {
    vi.spyOn(codeWorkspacesMode, "isCodeWorkspacesMode").mockReturnValue(true);
    // Representative value when running dev mode in Code Workspaces mode
    vi.spyOn(codeWorkspacesMode, "getCodeWorkspacesBaseHref").mockReturnValue(
      "https://workspace.stack.com/proxy/path",
    );

    const server = {
      config: { mode: "code-workspaces" },
    } as unknown as ViteDevServer;

    const result = getBaseHref(server);
    expect(result).toEqual("https://workspace.stack.com/proxy/path/");
  });
});
