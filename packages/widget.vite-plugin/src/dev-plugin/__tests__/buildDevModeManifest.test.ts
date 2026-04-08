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
import { buildDevModeManifest } from "../buildDevModeManifest.js";
import * as extractInjectedScriptsModule from "../extractInjectedScripts.js";

vi.mock("../../common/extractWidgetConfig.js", () => ({
  extractWidgetConfig: vi.fn(),
}));

vi.mock("../../build-plugin/getWidgetSetInputSpec.js", () => ({
  getWidgetSetInputSpec: vi.fn(),
}));

import { getWidgetSetInputSpec } from "../../build-plugin/getWidgetSetInputSpec.js";
import { extractWidgetConfig } from "../../common/extractWidgetConfig.js";

const MOCK_WIDGET_CONFIG: WidgetConfig<ParameterConfig> = {
  id: "widgetId",
  name: "Widget Name",
  description: "A test widget",
  type: "workshop",
  parameters: {
    stringParam: { type: "string", displayName: "String Parameter" },
  },
  events: {
    updateParameters: {
      displayName: "Update Parameters",
      parameterUpdateIds: ["stringParam"],
    },
  },
  permissions: ["camera"],
};

const MOCK_SERVER = {
  ssrLoadModule: vi.fn(),
  config: { root: "/project" },
} as unknown as ViteDevServer;

const MOCK_CODE_ENTRYPOINTS = { "entry.ts": `/entry.js` };
const MOCK_CONFIG_FILE_TO_ENTRYPOINT = { "widget.config.ts": "entry.ts" };

const MOCK_INPUT_SPEC = {
  discovered: {
    sdks: [{
      rid: "ri.third-party-applications.main.sdk-package.abc",
      version: "1.0.0",
    }],
  },
};

describe("buildDevModeManifest", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.mocked(extractWidgetConfig).mockResolvedValue(MOCK_WIDGET_CONFIG);
    vi.mocked(getWidgetSetInputSpec).mockResolvedValue(MOCK_INPUT_SPEC);
    vi.spyOn(extractInjectedScriptsModule, "extractInjectedScripts")
      .mockResolvedValue({ scriptSources: [], inlineScripts: [] });
  });

  test("localhost dev server URLs", async () => {
    vi.spyOn(extractInjectedScriptsModule, "extractInjectedScripts")
      .mockResolvedValue({
        scriptSources: ["/@vite/client"],
        inlineScripts: [],
      });
    const baseHref = `http://localhost:5173/`;

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      baseHref,
    );

    expect(result.manifestVersion).toBe("1.0.0");
    expect(result.devSettings.baseHref).toBe(baseHref);
    const widget = result.devSettings.widgets.widgetId;
    expect(widget.entrypointJs).toEqual([
      { path: `${baseHref}.palantir/vite-injections.js`, type: "module" },
      { path: `${baseHref}@vite/client`, type: "module" },
      { path: `${baseHref}entry.js`, type: "module" },
    ]);
  });

  test("remote server URLs", async () => {
    vi.spyOn(extractInjectedScriptsModule, "extractInjectedScripts")
      .mockResolvedValue({
        scriptSources: [`/proxy/path/@vite/client`],
        inlineScripts: [],
      });
    const baseHref = `https://workspace.stack.com/proxy/path/`;

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      baseHref,
    );

    const widget = result.devSettings.widgets.widgetId;
    expect(widget.entrypointJs).toEqual([
      { path: `${baseHref}.palantir/vite-injections.js`, type: "module" },
      { path: `${baseHref}@vite/client`, type: "module" },
      { path: `${baseHref}entry.js`, type: "module" },
    ]);
  });

  test("includes full widget metadata", async () => {
    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
    );

    const widget = result.devSettings.widgets.widgetId;
    expect(widget.name).toBe("Widget Name");
    expect(widget.description).toBe("A test widget");
    expect(widget.type).toBe("workshopWidgetV1");
    expect(widget.parameters).toEqual({
      stringParam: { type: "string", displayName: "String Parameter" },
    });
    expect(widget.events).toEqual({
      updateParameters: {
        displayName: "Update Parameters",
        parameterUpdateIds: ["stringParam"],
      },
    });
    expect(widget.permissions).toEqual(["camera"]);
    expect(widget.entrypointCss).toEqual([]);
  });

  test("handles optional description", async () => {
    vi.mocked(extractWidgetConfig).mockResolvedValue({
      ...MOCK_WIDGET_CONFIG,
      description: undefined,
    });

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
    );

    const widget = result.devSettings.widgets.widgetId;
    expect(widget.description).toBeUndefined();
  });

  test("converts object set parameters correctly", async () => {
    vi.mocked(extractWidgetConfig).mockResolvedValue({
      ...MOCK_WIDGET_CONFIG,
      parameters: {
        objectSetParam: {
          type: "objectSet",
          displayName: "Object Set Parameter",
          allowedType: {
            type: "object",
            apiName: "employee",
            internalDoNotUseMetadata: {
              rid: "ri.ontology.main.object-type.employee",
            },
          },
        },
      },
    });

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
    );

    expect(
      result.devSettings.widgets.widgetId.parameters.objectSetParam,
    ).toEqual({
      type: "objectSet",
      displayName: "Object Set Parameter",
      objectTypeRids: ["ri.ontology.main.object-type.employee"],
      allowedType: "ri.ontology.main.object-type.employee",
    });
  });

  test("converts interface set parameters correctly", async () => {
    vi.mocked(extractWidgetConfig).mockResolvedValue({
      ...MOCK_WIDGET_CONFIG,
      parameters: {
        interfaceSetParam: {
          type: "objectSet",
          displayName: "Interface Set Parameter",
          allowedType: {
            type: "interface",
            apiName: "MyInterface",
            internalDoNotUseMetadata: {
              rid: "ri.ontology.main.interface.my-interface",
            },
          },
        },
      },
    });

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
    );

    expect(
      result.devSettings.widgets.widgetId.parameters.interfaceSetParam,
    ).toEqual({
      type: "objectSet",
      displayName: "Interface Set Parameter",
      objectTypeRids: [],
      allowedType: "ri.ontology.main.interface.my-interface",
    });
  });

  test("includes inputSpec from getWidgetSetInputSpec", async () => {
    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
    );

    expect(result.devSettings.inputSpec).toEqual(MOCK_INPUT_SPEC);
    expect(vi.mocked(getWidgetSetInputSpec)).toHaveBeenCalledWith(
      "/project/package.json",
    );
  });

  test("applies refreshHostDataOnAction default from pluginOptions", async () => {
    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
      { defaults: { refreshHostDataOnAction: true } },
    );

    const widget = result.devSettings.widgets.widgetId;
    expect(widget.refreshHostDataOnAction).toBe(true);
  });

  test("widget-level refreshHostDataOnAction overrides plugin default", async () => {
    vi.mocked(extractWidgetConfig).mockResolvedValue({
      ...MOCK_WIDGET_CONFIG,
      refreshHostDataOnAction: false,
    });

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      MOCK_CODE_ENTRYPOINTS,
      MOCK_CONFIG_FILE_TO_ENTRYPOINT,
      "http://localhost:5173/",
      { defaults: { refreshHostDataOnAction: true } },
    );

    const widget = result.devSettings.widgets.widgetId;
    expect(widget.refreshHostDataOnAction).toBe(false);
  });

  test("multiple widgets from multiple config files", async () => {
    const widgetA: WidgetConfig<ParameterConfig> = {
      ...MOCK_WIDGET_CONFIG,
      id: "widgetA",
      name: "Widget A",
    };
    const widgetB: WidgetConfig<ParameterConfig> = {
      ...MOCK_WIDGET_CONFIG,
      id: "widgetB",
      name: "Widget B",
    };
    vi.mocked(extractWidgetConfig)
      .mockResolvedValueOnce(widgetA)
      .mockResolvedValueOnce(widgetB);

    const result = await buildDevModeManifest(
      MOCK_SERVER,
      {
        "entryA.ts": `/entryA.js`,
        "entryB.ts": `/entryB.js`,
      },
      {
        "widgetA.config.ts": "entryA.ts",
        "widgetB.config.ts": "entryB.ts",
      },
      "http://localhost:5173/",
    );

    expect(Object.keys(result.devSettings.widgets)).toEqual([
      "widgetA",
      "widgetB",
    ]);
    expect(result.devSettings.widgets.widgetA.name).toBe("Widget A");
    expect(result.devSettings.widgets.widgetB.name).toBe("Widget B");
  });
});
