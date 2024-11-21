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

import type { HostMessage } from "@osdk/widget-api.unstable";
import { defineConfig } from "@osdk/widget-api.unstable";
import { describe, expectTypeOf, it } from "vitest";
import type { HostMessageEventListener } from "./host.js";
import { FoundryHostEventTarget } from "./host.js";

describe("FoundryHostEventTarget", () => {
  it("should narrow the event payload based on host message type for addEventListener", () => {
    const test = defineConfig({
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
          parameterUpdateIds: ["test"],
        },
      },
    });

    const hostTarget = new FoundryHostEventTarget<typeof test>();
    hostTarget.addEventListener("host.update-parameters", (event) => {
      expectTypeOf(event.detail).toMatchTypeOf<
        HostMessage.Payload.UpdateParameters<typeof test>
      >();
    });

    hostTarget.addEventListener(
      "host._unstable.fetch-response-failed",
      (event) => {
        expectTypeOf(
          event.detail,
        ).toMatchTypeOf<HostMessage.Payload._unstable_FetchResponseFailed>();
      },
    );
  });

  it("should narrow the event payload based on host message type for removeEventListener", () => {
    const test = defineConfig({
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
          parameterUpdateIds: ["test"],
        },
      },
    });

    const hostTarget = new FoundryHostEventTarget<typeof test>();
    const listener: HostMessageEventListener<
      HostMessage.Payload.UpdateParameters<typeof test>
    > = (event) => {
      expectTypeOf(event.detail).toMatchTypeOf<
        HostMessage.Payload.UpdateParameters<typeof test>
      >();
    };

    hostTarget.removeEventListener("host.update-parameters", listener);
  });

  it("should narrow the event payload when dispatching an event", () => {
    const test = defineConfig({
      rid: "ri.viewregistry..view.0000-0000-0000-0000",
      parameters: {
        test: {
          displayName: "Testing",
          type: "array",
          subType: "boolean",
        },
      },
      events: {
        myEvent: {
          displayName: "My Event",
          parameterUpdateIds: ["test"],
        },
      },
    });

    const hostTarget = new FoundryHostEventTarget<typeof test>();
    type dispatchUpdateMessage = Parameters<
      typeof hostTarget.dispatchEventMessage<"host.update-parameters">
    >[1];
    expectTypeOf<dispatchUpdateMessage>().toMatchTypeOf<
      HostMessage.Payload.UpdateParameters<typeof test>
    >();
  });
});
