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

import type { ParameterDefinition, WidgetSetInputSpec } from "@osdk/widget.api";
import { describe, expect, test } from "vitest";
import { buildWidgetSetManifest } from "../buildWidgetSetManifest.js";
import type { WidgetBuildOutputs } from "../getWidgetBuildOutputs.js";

describe("buildWidgetSetManifest", () => {
  const WIDGET_SET_RID = "ri.widgetregistry..widget-set.test-widget-set";
  const WIDGET_SET_VERSION = "1.0.0";

  test("builds a valid manifest with multiple widgets", () => {
    const widgetBuilds: WidgetBuildOutputs[] = [
      createMockWidgetBuild("widgetOne"),
      createMockWidgetBuild("widgetTwo"),
    ];

    const widgetSetInputSpec: WidgetSetInputSpec = {
      discovered: {
        sdks: [
          {
            rid: "ri.foundry.main.sdk.test-sdk",
            version: "2.0.0",
          },
        ],
      },
    };

    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      widgetBuilds,
      widgetSetInputSpec,
    );

    expect(manifest).toEqual({
      manifestVersion: "1.0.0",
      widgetSet: {
        rid: WIDGET_SET_RID,
        version: WIDGET_SET_VERSION,
        widgets: {
          widgetOne: {
            id: "widgetOne",
            name: "Widget widgetOne",
            description: "Widget widgetOne Description",
            type: "workshopWidgetV1",
            entrypointJs: [
              { path: "scripts/widgetOne.js", type: "module" },
            ],
            entrypointCss: [
              { path: "styles/widgetOne.css" },
            ],
            parameters: {
              stringParam: {
                type: "string",
                displayName: "String Parameter",
              },
            },
            events: {
              updateParameters: {
                displayName: "Update Parameters",
                parameterUpdateIds: ["stringParam"],
              },
            },
            permissions: ["camera"],
          },
          widgetTwo: {
            id: "widgetTwo",
            name: "Widget widgetTwo",
            description: "Widget widgetTwo Description",
            type: "workshopWidgetV1",
            entrypointJs: [
              { path: "scripts/widgetTwo.js", type: "module" },
            ],
            entrypointCss: [
              { path: "styles/widgetTwo.css" },
            ],
            parameters: {
              stringParam: {
                type: "string",
                displayName: "String Parameter",
              },
            },
            events: {
              updateParameters: {
                displayName: "Update Parameters",
                parameterUpdateIds: ["stringParam"],
              },
            },
            permissions: ["camera"],
          },
        },
        inputSpec: widgetSetInputSpec,
      },
    });
  });

  test("converts object set parameters correctly", () => {
    const widgetBuild = createMockWidgetBuild("widget", {
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
    });

    const widgetBuilds: WidgetBuildOutputs[] = [widgetBuild];
    const widgetSetInputSpec: WidgetSetInputSpec = {};

    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      widgetBuilds,
      widgetSetInputSpec,
    );

    expect(manifest.widgetSet.widgets.widget.parameters.objectSetParam).toEqual(
      {
        type: "objectSet",
        displayName: "Object Set Parameter",
        objectTypeRids: ["ri.ontology.main.object-type.employee"],
      },
    );
  });

  test("trims leading slashes from paths", () => {
    const widgetBuild = createMockWidgetBuild(
      "widget",
      undefined,
      ["/scripts/widget.js"],
      ["/styles/widget.css"],
    );

    const widgetBuilds: WidgetBuildOutputs[] = [widgetBuild];
    const widgetSetInputSpec: WidgetSetInputSpec = {};

    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      widgetBuilds,
      widgetSetInputSpec,
    );

    expect(manifest.widgetSet.widgets.widget.entrypointJs[0].path).toBe(
      "scripts/widget.js",
    );
    expect(manifest.widgetSet.widgets.widget.entrypointCss![0].path).toBe(
      "styles/widget.css",
    );
  });

  test("handles paths without leading slashes", () => {
    const widgetBuild = createMockWidgetBuild(
      "widget",
      undefined,
      ["scripts/widget.js"],
      ["styles/widget.css"],
    );

    const widgetBuilds: WidgetBuildOutputs[] = [widgetBuild];
    const widgetSetInputSpec: WidgetSetInputSpec = {};

    const manifest = buildWidgetSetManifest(
      WIDGET_SET_RID,
      WIDGET_SET_VERSION,
      widgetBuilds,
      widgetSetInputSpec,
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
