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

import { defineConfig } from "@osdk/widget.api.unstable";
import { describe, expectTypeOf, it } from "vitest";
import { FoundryHostEventTarget } from "./host.js";
describe("FoundryHostEventTarget", () => {
  it("should narrow the event payload based on host message type for addEventListener", () => {
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
    const hostTarget = new FoundryHostEventTarget();
    hostTarget.addEventListener("host.update-parameters", event => {
      expectTypeOf(event.detail).toMatchTypeOf();
    });
    hostTarget.addEventListener("host._unstable.fetch-response-failed", event => {
      expectTypeOf(event.detail).toMatchTypeOf();
    });
  });
  it("should narrow the event payload based on host message type for removeEventListener", () => {
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
    const hostTarget = new FoundryHostEventTarget();
    hostTarget.removeEventListener("host.update-parameters", event => {
      expectTypeOf(event.detail).toMatchTypeOf();
    });
  });
  it("should narrow the event payload when dispatching an event", () => {
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
        }
      },
      events: {
        myEvent: {
          displayName: "My Event",
          parameterUpdateIds: ["test"]
        }
      }
    });
    new FoundryHostEventTarget();
    expectTypeOf().toMatchTypeOf();
  });
});
//# sourceMappingURL=host.test.js.map