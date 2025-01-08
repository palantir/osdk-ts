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
import { defineConfig } from "../config.js";
import type { WidgetMessage } from "./widgetMessages.js";

describe("WidgetMessages", () => {
  describe("EmitEvent", () => {
    it("should emit an event with the correct payload", () => {
      const test = defineConfig({
        type: "workshop",
        rid: "ri.widgetregistry..widget.0000-0000-0000-0000",
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
          myEvent2: {
            displayName: "My Event 2",
            parameterUpdateIds: ["test", "test2"],
          },
        },
      });
      expectTypeOf<{
        type: "widget.emit-event";
        payload: {
          eventId: "myEvent";
          parameterUpdates: {
            test: boolean[];
          };
        };
      }>().toMatchTypeOf<WidgetMessage<typeof test>>();
      expectTypeOf<{
        eventId: "myEvent2";
        parameterUpdates: {
          test: boolean[];
          test2: string[];
        };
      }>().toMatchTypeOf<WidgetMessage.Payload.EmitEvent<typeof test>>();
    });

    it("should be able to assign specific events to the union", () => {
      const test = defineConfig({
        type: "workshop",
        rid: "ri.widgetregistry..widget.0000-0000-0000-0000",
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
          myEvent2: {
            displayName: "My Event 2",
            parameterUpdateIds: ["test", "test2"],
          },
        },
      });
      expectTypeOf<{
        type: "widget.emit-event";
        payload: {
          eventId: "myEvent";
          parameterUpdates: {
            test: boolean[];
          };
        };
      }>().toMatchTypeOf<WidgetMessage<typeof test>>();
    });
  });
});
