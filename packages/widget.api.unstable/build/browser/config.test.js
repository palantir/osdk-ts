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
import { defineConfig } from "./config.js";
describe("WidgetConfig", () => {
  describe("ParameterConfigId", () => {
    it("should be able to infer the type of the parameter ID", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "string"
          }
        },
        events: {}
      });
      expectTypeOf().toEqualTypeOf();
    });
    it("should construct a type safe map of async parameter values", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "string"
          }
        },
        events: {}
      });
      expectTypeOf().toMatchTypeOf();
    });
    it("should construct a type safe map of async parameter values with arrays", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string"
          },
          test3: {
            displayName: "Testing 3",
            type: "number"
          }
        },
        events: {}
      });
      expectTypeOf().toMatchTypeOf();
    });
    it("should construct a type safe map of parameter values", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string"
          },
          test3: {
            displayName: "Testing 3",
            type: "number"
          }
        },
        events: {}
      });
      expectTypeOf().toMatchTypeOf();
    });
    it("should construct a type safe map of events that reference parameters", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string"
          },
          test3: {
            displayName: "Testing 3",
            type: "number"
          }
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test"]
          }
        }
      });
      expectTypeOf().toMatchTypeOf();
    });
    it("will not extract an event that references a parameter ID that doesn't exist", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string"
          },
          test3: {
            displayName: "Testing 3",
            type: "number"
          }
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test4"]
          }
        }
      });
      expectTypeOf().toMatchTypeOf();
    });
    it("should extract event IDs correctly", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string"
          },
          test3: {
            displayName: "Testing 3",
            type: "number"
          }
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test", "test2"]
          },
          myEvent2: {
            displayName: "My second event",
            parameterUpdateIds: []
          }
        }
      });
      expectTypeOf().toEqualTypeOf();
    });
    it("should extract an event to the parameter values", () => {
      defineConfig({
        id: "widgetId",
        name: "Widget Name",
        description: "Widget Description",
        type: "workshop",
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean"
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string"
          },
          test3: {
            displayName: "Testing 3",
            type: "number"
          }
        },
        events: {
          myEvent: {
            displayName: "My Event",
            parameterUpdateIds: ["test", "test2"]
          }
        }
      });
      expectTypeOf().toMatchTypeOf();
    });
  });
});
//# sourceMappingURL=config.test.js.map