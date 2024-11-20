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
import type {
  AsyncParameterValueMap,
  EventId,
  EventParameterIdList,
  EventParameterValueMap,
  ParameterId,
  ParameterValueMap,
  ViewConfig,
} from "./config.js";
import type { ParameterValue } from "./parameters.js";

describe("ViewConfig", () => {
  describe("ParameterConfigId", () => {
    it("should be able to infer the type of the parameter ID", () => {
      const test = {
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
      } as const satisfies ViewConfig;
      expectTypeOf<ParameterId<typeof test>>().toEqualTypeOf<
        "test" | "test2"
      >();
    });

    it("should construct a type safe map of async parameter values", () => {
      const test = {
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
      } as const satisfies ViewConfig;
      expectTypeOf<AsyncParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: ParameterValue.Boolean;
        test2: ParameterValue.String;
      }>();
    });

    it("should construct a type safe map of async parameter values with arrays", () => {
      const test = {
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
      } as const satisfies ViewConfig;
      expectTypeOf<AsyncParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: ParameterValue.BooleanArray;
        test2: ParameterValue.StringArray;
        test3: ParameterValue.Number;
      }>();
    });

    it("should construct a type safe map of parameter values", () => {
      const test = {
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
      } as const satisfies ViewConfig;
      expectTypeOf<ParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: boolean[];
        test2: string[];
        test3: number;
      }>();
    });

    it("should construct a type safe map of events that reference parameters", () => {
      const test = {
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
            parameterIds: ["test"],
          },
        },
      } as const satisfies ViewConfig;
      expectTypeOf<
        EventParameterIdList<typeof test, "myEvent">
      >().toMatchTypeOf<["test"]>();
    });

    it("will not extract an event that references a parameter ID that doesn't exist", () => {
      const test = {
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
            parameterIds: ["test4"],
          },
        },
      } as const satisfies ViewConfig;
      expectTypeOf<
        // @ts-expect-error
        EventParameterIdList<typeof test, "myEvent">
      >().toMatchTypeOf<never>();
    });

    it("should extract event IDs correctly", () => {
      const test = {
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
            parameterIds: ["test", "test2"],
          },
          myEvent2: {
            displayName: "My second event",
            parameterIds: [],
          },
        },
      } as const satisfies ViewConfig;
      expectTypeOf<EventId<typeof test>>().toEqualTypeOf<
        "myEvent" | "myEvent2"
      >();
    });

    it("should extract an event to the parameter values", () => {
      const test = {
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
            parameterIds: ["test", "test2"],
          },
        },
      } as const satisfies ViewConfig;
      expectTypeOf<
        EventParameterValueMap<typeof test, "myEvent">
      >().toMatchTypeOf<{
        test: boolean[];
        test2: string[];
      }>();
    });
  });
});
