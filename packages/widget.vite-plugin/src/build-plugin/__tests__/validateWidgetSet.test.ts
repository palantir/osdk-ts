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

import { describe, expect, it } from "vitest";

import type { WidgetBuildOutputs } from "../getWidgetBuildOutputs.js";
import { validateWidgetSet } from "../validateWidgetSet.js";

describe("validateWidgetSet", () => {
  describe("validateWidgetIds", () => {
    it("should not throw when all widget IDs are unique", () => {
      const widgetBuilds: WidgetBuildOutputs[] = [
        createWidgetBuild("widget1"),
        createWidgetBuild("widget2"),
        createWidgetBuild("widget3"),
      ];

      expect(() => validateWidgetSet(widgetBuilds)).not.toThrow();
    });

    it("should throw when duplicate widget IDs are found", () => {
      const widgetBuilds: WidgetBuildOutputs[] = [
        createWidgetBuild("widget1"),
        createWidgetBuild("widget2"),
        createWidgetBuild("widget1"),
      ];

      expect(() => validateWidgetSet(widgetBuilds)).toThrow(
        "Duplicate widget ID: widget1. Each widget must have a unique ID.",
      );
    });
  });

  describe("validateEntrypointCssCount", () => {
    it("should not throw when entrypoint CSS count is at or below limit", () => {
      const widgetBuilds: WidgetBuildOutputs[] = [
        createWidgetBuild(
          "widget1",
          Array.from({ length: 10 }, (_, i) => `style${i}.css`),
        ),
      ];

      expect(() => validateWidgetSet(widgetBuilds)).not.toThrow();
    });

    it("should throw when entrypoint CSS count exceeds limit", () => {
      const widgetBuilds: WidgetBuildOutputs[] = [
        createWidgetBuild(
          "widget1",
          Array.from({ length: 11 }, (_, i) => `style${i}.css`),
        ),
      ];

      expect(() => validateWidgetSet(widgetBuilds)).toThrow(
        "Entrypoint CSS count can be at most 10. Widget 'widget1' has 11 CSS files. Consider setting 'build.cssCodeSplit: false' in your Vite config to combine CSS into a single stylesheet.",
      );
    });
  });
});

function createWidgetBuild(
  id: string,
  stylesheets: string[] = [],
): WidgetBuildOutputs {
  return {
    widgetConfig: {
      id,
      name: `Widget ${id}`,
      type: "workshop",
      parameters: {},
      events: {},
    },
    scripts: [],
    stylesheets,
  };
}
