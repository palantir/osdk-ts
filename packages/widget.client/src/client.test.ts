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

import { defineConfig } from "@osdk/widget.api";
import { describe, it } from "vitest";
import type { FoundryWidgetClient } from "./client.js";

describe("FoundryWidgetClient", () => {
  const config = defineConfig({
    id: "widgetId",
    name: "Widget Name",
    description: "Widget Description",
    type: "workshop",
    parameters: {
      myString: {
        displayName: "My string",
        type: "string",
      },
      myNumber: {
        displayName: "My number",
        type: "number",
      },
      myBoolean: {
        displayName: "My boolean",
        type: "boolean",
      },
    },
    events: {
      noParameters: {
        displayName: "No parameters",
        parameterUpdateIds: [],
      },
      oneParameter: {
        displayName: "One parameter",
        parameterUpdateIds: ["myString"],
      },
      twoParameters: {
        displayName: "Two parameters",
        parameterUpdateIds: ["myNumber", "myBoolean"],
      },
    },
  });

  const emitEvent: FoundryWidgetClient<typeof config>["emitEvent"] = (
    _eventId,
    _payload,
  ) => {};

  it("should narrow the emit event type when no parameters", () => {
    emitEvent("noParameters", {
      // @ts-expect-error
      parameterUpdates: [],
    });
    emitEvent("noParameters", {
      // @ts-expect-error
      parameterUpdates: { myString: "string" },
    });

    emitEvent("noParameters", {
      parameterUpdates: {},
    });
  });

  it("should narrow the emit event type with one parameter", () => {
    emitEvent("oneParameter", {
      // @ts-expect-error
      parameterUpdates: [],
    });
    emitEvent("oneParameter", {
      // @ts-expect-error
      parameterUpdates: {},
    });
    emitEvent("oneParameter", {
      // @ts-expect-error
      parameterUpdates: { myNumber: 123 },
    });
    emitEvent("twoParameters", {
      // @ts-expect-error
      parameterUpdates: { myString: "string", myNumber: 123 },
    });

    emitEvent("oneParameter", {
      parameterUpdates: { myString: "string" },
    });
  });

  it("should narrow the emit event type with two parameters", () => {
    emitEvent("twoParameters", {
      // @ts-expect-error
      parameterUpdates: [],
    });
    emitEvent("twoParameters", {
      // @ts-expect-error
      parameterUpdates: {},
    });
    emitEvent("twoParameters", {
      // @ts-expect-error
      parameterUpdates: { myString: "string" },
    });
    emitEvent("twoParameters", {
      // @ts-expect-error
      parameterUpdates: { myNumber: 123 },
    });
    emitEvent("twoParameters", {
      // @ts-expect-error
      parameterUpdates: { myNumber: 123, myBoolean: true, myString: "string" },
    });

    emitEvent("twoParameters", {
      parameterUpdates: { myNumber: 123, myBoolean: true },
    });
  });

  it("should not allow emit event type with an unknown event id", () => {
    // @ts-expect-error
    emitEvent("someOtherEventId", {});
  });
});
