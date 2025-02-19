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

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api.unstable";
import type { Rollup } from "vite";
import { expect, test } from "vitest";
import { buildWidgetSetManifest } from "../buildWidgetSetManifest.js";

const MOCK_WIDGET_SET_RID = "widget-set-rid";
const MOCK_WIDGET_SET_VERSION = "widget-set-version";
const MOCK_WIDGET_ID = "widget-id";

test("it correctly constructs a widget set manifest", () => {
  const widgetFile = "/src/widget.js";
  const widgetConfig = "/src/widget.config.js";

  const widgetConfigFiles = {
    [widgetConfig]: mockWidgetConfig("widget-id"),
  };

  const widgetChunk = mockChunk({
    fileName: widgetFile,
    isEntry: true,
    facadeModuleId: widgetFile,
    moduleIds: [widgetConfig],
    imports: [],
    viteMetadata: {
      importedCss: new Set(["/src/widget.css"]),
      importedAssets: new Set(),
    },
  });

  const result = buildWidgetSetManifest(
    MOCK_WIDGET_SET_RID,
    MOCK_WIDGET_SET_VERSION,
    widgetConfigFiles,
    { [widgetFile]: widgetChunk },
  );

  expect(result).toEqual({
    manifestVersion: "1.0.0",
    widgetSet: {
      rid: "widget-set-rid",
      version: "widget-set-version",
      widgets: {
        "widget-id": {
          id: "widget-id",
          name: "widget-id",
          description: "widget-id",
          type: "workshopWidgetV1",
          entrypointJs: [
            {
              path: "/src/widget.js",
              type: "module",
            },
          ],
          entrypointCss: [
            { path: "/src/widget.css" },
          ],
          parameters: {},
          events: {},
        },
      },
    },
  });
});

test("it throws an error when no config file is found", () => {
  const entrypointFile = "/src/main.js";
  const widgetConfigFiles = {};

  const entrypointChunk = mockChunk({
    fileName: entrypointFile,
    isEntry: true,
    facadeModuleId: entrypointFile,
    moduleIds: ["/src/main.config.js"],
    imports: [],
    viteMetadata: {
      importedCss: new Set(),
      importedAssets: new Set(),
    },
  });

  expect(() =>
    buildWidgetSetManifest(
      MOCK_WIDGET_SET_RID,
      MOCK_WIDGET_SET_VERSION,
      widgetConfigFiles,
      { [entrypointFile]: entrypointChunk },
    )
  ).toThrow("No config file found for entrypoint /src/main.js");
});

test("it throws an error when multiple config files are found", () => {
  const entrypointFile = "/src/main.js";
  const widgetConfigFiles = {
    "/src/main.config.js": mockWidgetConfig(MOCK_WIDGET_ID),
    "/src/main.config.ts": mockWidgetConfig(MOCK_WIDGET_ID),
  };

  const entrypointChunk = mockChunk({
    fileName: entrypointFile,
    isEntry: true,
    facadeModuleId: entrypointFile,
    moduleIds: ["/src/main.config.js", "/src/main.config.ts"],
    imports: [],
    viteMetadata: {
      importedCss: new Set(),
      importedAssets: new Set(),
    },
  });

  expect(() =>
    buildWidgetSetManifest(
      MOCK_WIDGET_SET_RID,
      MOCK_WIDGET_SET_VERSION,
      widgetConfigFiles,
      { [entrypointFile]: entrypointChunk },
    )
  ).toThrow("Multiple widget config files found for entrypoint /src/main.js");
});

test("it correctly handles multiple widgets", () => {
  const widget1File = "/src/widget1.js";
  const widget2File = "/src/widget2.js";
  const widget1Config = "/src/widget1.config.js";
  const widget2Config = "/src/widget2.config.js";

  const widgetConfigFiles = {
    [widget1Config]: mockWidgetConfig("widget-1"),
    [widget2Config]: mockWidgetConfig("widget-2"),
  };

  const widget1Chunk = mockChunk({
    fileName: widget1File,
    isEntry: true,
    facadeModuleId: widget1File,
    moduleIds: [widget1Config],
    imports: [],
    viteMetadata: {
      importedCss: new Set(["/src/widget1.css"]),
      importedAssets: new Set(),
    },
  });

  const widget2Chunk = mockChunk({
    fileName: widget2File,
    isEntry: true,
    facadeModuleId: widget2File,
    moduleIds: [widget2Config],
    imports: [],
    viteMetadata: {
      importedCss: new Set(["/src/widget2.css"]),
      importedAssets: new Set(),
    },
  });

  const result = buildWidgetSetManifest(
    MOCK_WIDGET_SET_RID,
    MOCK_WIDGET_SET_VERSION,
    widgetConfigFiles,
    {
      [widget1File]: widget1Chunk,
      [widget2File]: widget2Chunk,
    },
  );

  expect(result.widgetSet.widgets).toHaveProperty("widget-1");
  expect(result.widgetSet.widgets).toHaveProperty("widget-2");
  expect(Object.keys(result.widgetSet.widgets)).toHaveLength(2);
});

test("it captures transitive CSS dependencies", () => {
  const entrypointFile = "/src/main.js";
  const entrypointCssFile = "/src/style.css";
  const componentFile = "/src/component.js";
  const componentCssFile = "/src/component.css";

  const configFile = "/src/main.config.js";
  const widgetConfig = mockWidgetConfig(MOCK_WIDGET_ID);
  const widgetConfigFiles = { [configFile]: widgetConfig };

  const entrypointChunk = mockChunk({
    fileName: entrypointFile,
    isEntry: true,
    facadeModuleId: entrypointFile,
    moduleIds: [configFile],
    imports: [componentFile],
    viteMetadata: {
      importedCss: new Set([entrypointCssFile]),
      importedAssets: new Set(),
    },
  });
  const componentChunk = mockChunk({
    fileName: componentFile,
    isEntry: false,
    facadeModuleId: componentFile,
    moduleIds: [],
    imports: [],
    viteMetadata: {
      importedCss: new Set([componentCssFile]),
      importedAssets: new Set(),
    },
  });

  const result = buildWidgetSetManifest(
    MOCK_WIDGET_SET_RID,
    MOCK_WIDGET_SET_VERSION,
    widgetConfigFiles,
    {
      [entrypointFile]: entrypointChunk,
      [componentFile]: componentChunk,
    },
  );
  expect(result.widgetSet.widgets).toHaveProperty("widget-id");
  expect(result.widgetSet.widgets["widget-id"].entrypointCss).toEqual([
    { path: "/src/style.css" },
    { path: "/src/component.css" },
  ]);
});

function mockChunk({
  fileName,
  isEntry,
  facadeModuleId,
  moduleIds,
  imports,
  viteMetadata,
}: Partial<
  Pick<
    Rollup.OutputChunk,
    | "fileName"
    | "isEntry"
    | "facadeModuleId"
    | "moduleIds"
    | "imports"
    | "viteMetadata"
  >
>): Rollup.OutputChunk {
  return {
    type: "chunk",
    fileName,
    isEntry,
    facadeModuleId,
    moduleIds,
    imports,
    viteMetadata,
  } as any as Rollup.OutputChunk;
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
