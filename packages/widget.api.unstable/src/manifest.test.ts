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

import { expectTypeOf, test } from "vitest";
import type { WidgetSetManifestV1 } from "./manifest.js";

const EXAMPLE_WIDGET_SET_MANIFEST: WidgetSetManifestV1 = {
  "manifestVersion": "1.0.0" as const,
  "widgetSet": {
    "rid": "ri.widgetregistry..widget-set.placeholder",
    "version": "0.1.0",
    "widgets": {
      "widget1": {
        "id": "widget1",
        "name": "My name",
        "description": "My description",
        "type": "workshopWidgetV1",
        "entrypointJs": [
          {
            "path": "app.js",
            "type": "module",
          },
        ],
        "entrypointCss": [
          {
            "path": "app.css",
          },
        ],
        "parameters": {
          "myString": {
            "displayName": "My String",
            "type": "string",
          },
        },
        "events": {
          "event1": {
            "displayName": "Event 1",
            "parameterUpdateIds": [
              "myString",
            ],
          },
        },
      },
    },
  },
};

// These tests don't actually need executing, as compilation is enough to verify the types are correct
test("WidgetSetManifestV1", () => {
  expectTypeOf(EXAMPLE_WIDGET_SET_MANIFEST).toEqualTypeOf<
    WidgetSetManifestV1
  >();
});
