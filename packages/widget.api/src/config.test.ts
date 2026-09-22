/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expectTypeOf, it } from "vitest";

import {
  type AsyncParameterValueMap,
  defineConfig,
  type EventId,
  type EventParameterIdList,
  type EventParameterValueMap,
  type ParameterId,
  type ParameterValueMap,
} from "./config.js";
import type {
  AllowedObjectSetParameterType,
  ParameterValue,
} from "./parameters.js";
import type { AsyncValue } from "./utils/asyncValue.js";

describe("WidgetConfig", () => {
  describe("ParameterConfigId", () => {
    it("should be able to infer the type of the parameter ID", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "string",
          },
        },
        events: {},
      });
      expectTypeOf<ParameterId<(typeof test)["parameters"]>>().toEqualTypeOf<
        "test" | "test2"
      >();
    });

    it("should construct a type safe map of async parameter values", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "string",
          },
          tileLayer: {
            displayName: "Tile Layer",
            type: "mapTileLayer",
          },
        },
        events: {},
      });
      expectTypeOf<AsyncParameterValueMap<typeof test>>().toEqualTypeOf<{
        test: ParameterValue.Boolean;
        test2: ParameterValue.String;
        tileLayer: ParameterValue.MapTileLayer;
      }>();
    });

    it("should construct a type safe map of async parameter values with arrays", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
        },
        events: {},
      });
      expectTypeOf<AsyncParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: ParameterValue.BooleanArray;
        test2: ParameterValue.StringArray;
        test3: ParameterValue.Number;
      }>();
    });

    it("should construct a type safe map of parameter values", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
          tileLayer: {
            displayName: "Tile Layer",
            type: "mapTileLayer",
          },
        },
        events: {},
      });
      expectTypeOf<ParameterValueMap<typeof test>>().toEqualTypeOf<{
        test: boolean[];
        test2: string[];
        test3: number;
        tileLayer: { styleJsonUrl: string };
      }>();
    });

    it("should construct a type safe map of events that reference parameters", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test"],
          },
        },
      });
      expectTypeOf<
        EventParameterIdList<typeof test, "myEvent">
      >().toMatchTypeOf<["test"]>();
    });

    it("should reject event definitions that reference unknown or read-only parameters", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
          tileLayer: {
            displayName: "Tile Layer",
            type: "mapTileLayer",
          },
        },
        events: {
          myEvent: {
            displayName: "My Event",
            // @ts-expect-error Events must reference an existing parameter.
            parameterUpdateIds: ["test4"],
          },
          updateTileLayer: {
            displayName: "Update Tile Layer",
            // @ts-expect-error Map tile layer parameters are read-only.
            parameterUpdateIds: ["test3", "tileLayer"],
          },
        },
      });
    });

    it("should extract event IDs correctly", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test", "test2"],
          },
          myEvent2: {
            displayName: "My second event",
            parameterUpdateIds: [],
          },
        },
      });
      expectTypeOf<EventId<typeof test>>().toEqualTypeOf<
        "myEvent" | "myEvent2"
      >();
    });

    it("should extract an event to the parameter values", () => {
      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
          tileLayer: {
            displayName: "Tile Layer",
            type: "mapTileLayer",
          },
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test", "test2"],
          },
          mapClicked: {
            displayName: "Map Clicked",
            parameterUpdateIds: [],
          },
        },
      });
      expectTypeOf<
        EventParameterValueMap<typeof test, "myEvent">
      >().toEqualTypeOf<{
        test: boolean[];
        test2: string[];
      }>();
      expectTypeOf<
        EventParameterValueMap<typeof test, "mapClicked">
      >().toEqualTypeOf<Record<string, never>>();
    });

    it("should support objectSet parameter types with generic object type", () => {
      const Employee = {
        type: "object",
        apiName: "employee",
        internalDoNotUseMetadata: {
          rid: "ri.object-type.employee",
        },
      } as const satisfies AllowedObjectSetParameterType;

      type Employee = typeof Employee;

      const test = defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          myObjectSet: {
            displayName: "My Object Set",
            type: "objectSet",
            allowedType: Employee,
          },
        },
        events: {},
      });

      expectTypeOf<ParameterValueMap<typeof test>>().toEqualTypeOf<{
        myObjectSet: {
          objectSetRid: string;
        };
      }>();

      expectTypeOf<AsyncParameterValueMap<typeof test>>().toEqualTypeOf<{
        myObjectSet: {
          type: "objectSet";
          value: AsyncValue<{
            objectSetRid: string;
          }>;
        };
      }>();
    });
  });
});
