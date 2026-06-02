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

import type {
  ParameterConfig,
  ParameterDefinition,
  WidgetConfig,
  WidgetSetInputSpec,
} from "@osdk/widget.api";
import { describe, expect, test } from "vitest";
import {
  buildWidgetManifestConfig,
  buildWidgetSetManifest,
} from "../buildWidgetSetManifest.js";
import type { WidgetBuildOutputs } from "../getWidgetBuildOutputs.js";

const MOCK_WIDGET_CONFIG: WidgetConfig<ParameterConfig> = {
  id: "widget",
  name: "Widget Name",
  description: "Widget Description",
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

describe("buildWidgetManifestConfig", () => {
  const ENTRYPOINT_JS = [{
    path: "scripts/widget.js",
    type: "module" as const,
  }];
  const ENTRYPOINT_CSS = [{ path: "styles/widget.css" }];

  test("maps config fields to manifest format", () => {
    const result = buildWidgetManifestConfig(
      MOCK_WIDGET_CONFIG,
      ENTRYPOINT_JS,
      ENTRYPOINT_CSS,
    );

    expect(result).toEqual({
      id: "widget",
      name: "Widget Name",
      description: "Widget Description",
      type: "workshopWidgetV1",
      entrypointJs: ENTRYPOINT_JS,
      entrypointCss: ENTRYPOINT_CSS,
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
    });
  });

  test("handles optional description", () => {
    const result = buildWidgetManifestConfig(
      { ...MOCK_WIDGET_CONFIG, description: undefined },
      ENTRYPOINT_JS,
      ENTRYPOINT_CSS,
    );

    expect(result.description).toBeUndefined();
  });

  test("converts object set parameters", () => {
    const result = buildWidgetManifestConfig(
      {
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
      },
      ENTRYPOINT_JS,
      ENTRYPOINT_CSS,
    );

    expect(result.parameters.objectSetParam).toEqual({
      type: "objectSet",
      displayName: "Object Set Parameter",
      objectTypeRids: ["ri.ontology.main.object-type.employee"],
      allowedType: "ri.ontology.main.object-type.employee",
    });
  });

  test("converts interface set parameters with empty objectTypeRids", () => {
    const result = buildWidgetManifestConfig(
      {
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
      },
      ENTRYPOINT_JS,
      ENTRYPOINT_CSS,
    );

    expect(result.parameters.interfaceSetParam).toEqual({
      type: "objectSet",
      displayName: "Interface Set Parameter",
      objectTypeRids: [],
      allowedType: "ri.ontology.main.interface.my-interface",
    });
  });

  test("applies refreshHostDataOnAction default from pluginOptions", () => {
    const result = buildWidgetManifestConfig(
      MOCK_WIDGET_CONFIG,
      ENTRYPOINT_JS,
      ENTRYPOINT_CSS,
      { defaults: { refreshHostDataOnAction: true } },
    );

    expect(result.refreshHostDataOnAction).toBe(true);
  });

  test("widget-level refreshHostDataOnAction overrides plugin default", () => {
    const result = buildWidgetManifestConfig(
      { ...MOCK_WIDGET_CONFIG, refreshHostDataOnAction: false },
      ENTRYPOINT_JS,
      ENTRYPOINT_CSS,
      { defaults: { refreshHostDataOnAction: true } },
    );

    expect(result.refreshHostDataOnAction).toBe(false);
  });
});

describe("buildWidgetSetManifest", () => {
  const WIDGET_SET_RID = "ri.widgetregistry..widget-set.test-widget-set";
  const WIDGET_SET_VERSION = "1.0.0";

  test("wraps widgets in manifest structure with rid, version, and inputSpec", () => {
    const widgetSetInputSpec: WidgetSetInputSpec = {
      discovered: {
        sdks: [{ rid: "ri.foundry.main.sdk.test-sdk", version: "2.0.0" }],
      },
    };

    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      [createMockWidgetBuild("widgetOne"), createMockWidgetBuild("widgetTwo")],
      widgetSetInputSpec,
    );

    expect(manifest.manifestVersion).toBe("1.0.0");
    expect(manifest.widgetSet.rid).toBe(WIDGET_SET_RID);
    expect(manifest.widgetSet.version).toBe(WIDGET_SET_VERSION);
    expect(manifest.widgetSet.inputSpec).toBe(widgetSetInputSpec);
    expect(Object.keys(manifest.widgetSet.widgets)).toEqual([
      "widgetOne",
      "widgetTwo",
    ]);
  });

  test("trims leading slashes from entrypoint paths", () => {
    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      [createMockWidgetBuild("widget", undefined, ["/scripts/widget.js"], [
        "/styles/widget.css",
      ])],
      {},
    );

    expect(manifest.widgetSet.widgets.widget.entrypointJs[0].path).toBe(
      "scripts/widget.js",
    );
    expect(manifest.widgetSet.widgets.widget.entrypointCss![0].path).toBe(
      "styles/widget.css",
    );
  });

  test("handles paths without leading slashes", () => {
    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      [createMockWidgetBuild("widget", undefined, ["scripts/widget.js"], [
        "styles/widget.css",
      ])],
      {},
    );

    expect(manifest.widgetSet.widgets.widget.entrypointJs[0].path).toBe(
      "scripts/widget.js",
    );
    expect(manifest.widgetSet.widgets.widget.entrypointCss![0].path).toBe(
      "styles/widget.css",
    );
  });
});

function createMockWidgetBuild(
  id: string,
  parameters: Record<string, ParameterDefinition> = {
    stringParam: {
      type: "string",
      displayName: "String Parameter",
    },
  },
  scripts?: string[],
  stylesheets?: string[],
): WidgetBuildOutputs {
  return {
    scripts: scripts?.map(src => ({
      type: "script" as const,
      scriptType: "module" as const,
      src,
    }))
      ?? [
        {
          type: "script",
          scriptType: "module",
          src: `/scripts/${id}.js`,
        },
      ],
    stylesheets: stylesheets ?? [`/styles/${id}.css`],
    widgetConfig: {
      id,
      name: `Widget ${id}`,
      description: `Widget ${id} Description`,
      type: "workshop",
      parameters,
      events: {
        updateParameters: {
          displayName: "Update Parameters",
          parameterUpdateIds: ["stringParam"],
        },
      },
      permissions: ["camera"],
    },
  };
}
