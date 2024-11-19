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
import type { ViewConfig } from "../config.js";
import type { ViewMessage } from "./viewMessages.js";

describe("ViewMessages", () => {
  describe("EmitEvent", () => {
    it("should emit an event with the correct payload", () => {
      const test = {
        rid: "ri.viewregistry..view.0000-0000-0000-0000",
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
          myEvent2: {
            displayName: "My Event 2",
            parameterIds: ["test", "test2"],
          },
        },
      } as const satisfies ViewConfig;
      expectTypeOf<{
        type: "view.emit-event";
        payload: {
          eventId: "myEvent";
          parameterUpdates: {
            test: boolean[];
          };
        };
      }>().toMatchTypeOf<ViewMessage<typeof test>>();
      expectTypeOf<{
        eventId: "myEvent2";
        parameterUpdates: {
          test: boolean[];
          test2: string[];
        };
      }>().toMatchTypeOf<ViewMessage.Payload.EmitEvent<typeof test>>();
    });

    it("should be able to assign specific events to the union", () => {
      const test = {
        rid: "ri.viewregistry..view.0000-0000-0000-0000",
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
          myEvent2: {
            displayName: "My Event 2",
            parameterIds: ["test", "test2"],
          },
        },
      } as const satisfies ViewConfig;
      expectTypeOf<{
        type: "view.emit-event";
        payload: {
          eventId: "myEvent";
          parameterUpdates: {
            test: boolean[];
          };
        };
      }>().toMatchTypeOf<ViewMessage<typeof test>>();
    });
  });
});
