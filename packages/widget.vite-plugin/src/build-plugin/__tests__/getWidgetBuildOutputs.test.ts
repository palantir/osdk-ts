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
import type { Rollup, ViteDevServer } from "vite";
import { beforeEach, expect, test, vi } from "vitest";
import * as extractWidgetConfigModule from "../../common/extractWidgetConfig.js";
import * as extractBuildOutputsModule from "../extractBuildOutputs.js";
import { getWidgetBuildOutputs } from "../getWidgetBuildOutputs.js";

vi.mock("../extractBuildOutputs.js");
vi.mock("../../common/extractWidgetConfig.js");

const MOCK_BUILD_DIR = "/build";
const MOCK_INPUT = "index.html";
const MOCK_WIDGET_ID = "widget-id";
const MOCK_SERVER = {} as ViteDevServer;

beforeEach(() => {
  vi.clearAllMocks();
});

test("getWidgetBuildOutputs successfully matches widget build outputs", async () => {
  const mockBuildOutputs = {
    scripts: [{
      type: "script" as const,
      scriptType: "module" as const,
      src: "/chunk.js",
    }],
    stylesheets: ["/styles.css"],
  };
  vi.mocked(extractBuildOutputsModule.extractBuildOutputs).mockReturnValue(
    mockBuildOutputs,
  );

  const configFile = "/src/widget.config.js";
  const widgetConfig = mockWidgetConfig(MOCK_WIDGET_ID);
  vi.mocked(extractWidgetConfigModule.extractWidgetConfig).mockResolvedValue(
    widgetConfig,
  );

  const entryChunk = mockChunk({
    fileName: "chunk.js",
    isEntry: true,
    facadeModuleId: "/src/widget.js",
    moduleIds: [configFile],
  });

  const result = await getWidgetBuildOutputs(
    { "chunk.js": entryChunk },
    MOCK_INPUT,
    MOCK_BUILD_DIR,
    MOCK_SERVER,
  );
  expect(result).toEqual({
    ...mockBuildOutputs,
    widgetConfig,
  });
});

test("getWidgetBuildOutputs throws error when entrypoint chunk not found", async () => {
  vi.mocked(extractBuildOutputsModule.extractBuildOutputs).mockReturnValue({
    scripts: [{
      type: "script" as const,
      scriptType: "module" as const,
      src: "/non-existent.js",
    }],
    stylesheets: [],
  });

  const nonEntryChunk = mockChunk({
    fileName: "chunk.js",
    isEntry: true,
    facadeModuleId: "/src/widget.js",
    moduleIds: [],
  });

  await expect(async () =>
    await getWidgetBuildOutputs(
      { "chunk.js": nonEntryChunk },
      MOCK_INPUT,
      MOCK_BUILD_DIR,
      MOCK_SERVER,
    )
  )
    .rejects.toThrow("Entrypoint chunk not found for input file: index.html");
});

test("getWidgetBuildOutputs throws error when no config file found", async () => {
  vi.mocked(extractBuildOutputsModule.extractBuildOutputs).mockReturnValue({
    scripts: [{
      type: "script" as const,
      scriptType: "module" as const,
      src: "/chunk.js",
    }],
    stylesheets: [],
  });

  const entryChunk = mockChunk({
    fileName: "chunk.js",
    isEntry: true,
    facadeModuleId: "/src/widget.js",
    moduleIds: [],
  });

  await expect(async () =>
    await getWidgetBuildOutputs(
      { "chunk.js": entryChunk },
      MOCK_INPUT,
      MOCK_BUILD_DIR,
      MOCK_SERVER,
    )
  )
    .rejects.toThrow(
      "No widget config files found for entrypoint /src/widget.js",
    );
});

test("getWidgetBuildOutputs throws error when multiple config files found", async () => {
  vi.mocked(extractBuildOutputsModule.extractBuildOutputs).mockReturnValue({
    scripts: [{
      type: "script" as const,
      scriptType: "module" as const,
      src: "/chunk.js",
    }],
    stylesheets: [],
  });

  const entryChunk = mockChunk({
    fileName: "chunk.js",
    isEntry: true,
    facadeModuleId: "/src/widget.js",
    moduleIds: ["/src/widget.config.js", "/src/widget.config.ts"],
  });

  await expect(async () =>
    await getWidgetBuildOutputs(
      { "chunk.js": entryChunk },
      MOCK_INPUT,
      MOCK_BUILD_DIR,
      MOCK_SERVER,
    )
  )
    .rejects.toThrow(
      "Multiple widget config files found for entrypoint /src/widget.js",
    );
});

test("getWidgetBuildOutputs throws error when extractWidgetConfig fails", async () => {
  vi.mocked(extractBuildOutputsModule.extractBuildOutputs).mockReturnValue({
    scripts: [{
      type: "script" as const,
      scriptType: "module" as const,
      src: "/chunk.js",
    }],
    stylesheets: [],
  });

  const configFile = "/src/widget.config.js";
  const entryChunk = mockChunk({
    fileName: "chunk.js",
    isEntry: true,
    facadeModuleId: "/src/widget.js",
    moduleIds: [configFile],
  });

  vi.mocked(extractWidgetConfigModule.extractWidgetConfig).mockRejectedValue(
    new Error("Config extraction failed"),
  );

  await expect(async () =>
    await getWidgetBuildOutputs(
      { "chunk.js": entryChunk },
      MOCK_INPUT,
      MOCK_BUILD_DIR,
      MOCK_SERVER,
    )
  )
    .rejects.toThrow("Config extraction failed");
});

function mockChunk(props: Partial<Rollup.OutputChunk>): Rollup.OutputChunk {
  return {
    type: "chunk",
    fileName: "chunk.js",
    isEntry: false,
    facadeModuleId: null,
    moduleIds: [],
    ...props,
  } as Rollup.OutputChunk;
}

function mockWidgetConfig(id: string): WidgetConfig<ParameterConfig> {
  return {
    id,
    name: id,
    description: id,
    type: "workshop",
    parameters: {},
    events: {},
  };
}
