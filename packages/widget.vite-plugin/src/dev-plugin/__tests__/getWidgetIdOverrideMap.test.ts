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

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api";
import type { ViteDevServer } from "vite";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as extractInjectedScriptsModule from "../extractInjectedScripts.js";
import { getWidgetIdOverrideMap } from "../getWidgetIdOverrideMap.js";

const MOCK_WIDGET_CONFIG = { id: "widgetId" } as WidgetConfig<ParameterConfig>;
const MOCK_SERVER = {
  ssrLoadModule: vi.fn().mockResolvedValue({ default: MOCK_WIDGET_CONFIG }),
} as unknown as ViteDevServer;
const MOCK_CODE_ENTRYPOINTS = { "entry.ts": `/entry.js` };
const MOCK_CONFIG_FILE_TO_ENTRYPOINT = { "widget.config.ts": "entry.ts" };

describe("getWidgetIdOverrideMap", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.mocked(MOCK_SERVER.ssrLoadModule).mockResolvedValue({
      default: MOCK_WIDGET_CONFIG,
    });
  });

  test("localhost dev server URLs", async () => {
    vi.spyOn(extractInjectedScriptsModule, "extractInjectedScripts")
      .mockResolvedValue({
        // Extracted scripts sources start with the base path
        scriptSources: ["/@vite/client"],
        inlineScripts: [],
      });
    const baseHref = `http://localhost:5173/`;

    const result = await getWidgetIdOverrideMap(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      baseHref,
    );

    expect(result).toEqual({
      "widgetId": [
        `${baseHref}.palantir/vite-injections.js`,
        `${baseHref}@vite/client`,
        `${baseHref}entry.js`,
      ],
    });
  });

  test("remote server URLs", async () => {
    // Representative values when running dev mode in Code Workspaces mode
    vi.spyOn(extractInjectedScriptsModule, "extractInjectedScripts")
      .mockResolvedValue({
        // Extracted scripts sources start with the base path
        scriptSources: [`/proxy/path/@vite/client`],
        inlineScripts: [],
      });
    const baseHref = `https://worksapce.stack.com/proxy/path/`;

    const result = await getWidgetIdOverrideMap(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      baseHref,
    );

    expect(result).toEqual({
      "widgetId": [
        `${baseHref}.palantir/vite-injections.js`,
        `${baseHref}@vite/client`,
        `${baseHref}entry.js`,
      ],
    });
  });
});
