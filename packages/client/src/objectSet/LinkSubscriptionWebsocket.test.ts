/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { Osdk } from "@osdk/api";
import type { LinkSubscription } from "@osdk/api/unstable";
import type { Employee } from "@osdk/client.test.ontology";
import type { LinkTypeSubscribeRequests } from "@osdk/foundry.ontologies";
import ImportedWebSocket from "isomorphic-ws";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import { LinkSubscriptionWebsocket } from "./LinkSubscriptionWebsocket.js";
import {
  createMockWebSocketConstructor,
  type MockedWebSocket,
  sendToClient,
  setWebSocketState,
} from "./MockWebSocket.js";

const MockedWebSocket = ImportedWebSocket as unknown as MockedWebSocket;

vi.mock("isomorphic-ws", async (importOriginal) => {
  const original = await importOriginal<{ default: typeof ImportedWebSocket }>();
  const WebSocket = createMockWebSocketConstructor(original.default);
  return { default: WebSocket, WebSocket };
});

describe("LinkSubscriptionWebsocket", () => {
  const listener: LinkSubscription.Listener<Employee, "lead"> = {
    onChange: vi.fn(),
  };
  const minimalClient = {
    baseUrl: "https://example.com/base/",
    ontologyProvider: {
      getObjectDefinition: vi.fn(async () => ({
        primaryKeyApiName: "employeeId",
      })),
    },
    ontologyRid: "ri.ontology.main.ontology.example",
    tokenProvider: vi.fn(async () => "token"),
  } as unknown as MinimalClient;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("subscribes to directed links and forwards update batches", async () => {
    const subscription = new LinkSubscriptionWebsocket(minimalClient, {
      links: ["lead"],
      listener,
      objects: [
        { $apiName: "Employee", $primaryKey: 1 } as Osdk.Instance<Employee>,
        { $apiName: "Employee", $primaryKey: 2 } as Osdk.Instance<Employee>,
      ],
    }).subscribe();

    const webSocket = await vi.waitFor((): MockedWebSocket => {
      expect(MockedWebSocket).toHaveBeenCalledOnce();
      return MockedWebSocket.mock.results[0].value;
    });
    expect(String(MockedWebSocket.mock.calls[0][0])).toBe(
      "wss://example.com/base/api/v2/ontologySubscriptions/ontologies/ri.ontology.main.ontology.example/linkTypeSubscriptions",
    );
    expect(MockedWebSocket.mock.calls[0][1]).toEqual(["Bearer-token"]);

    setWebSocketState(webSocket, "open");
    const request = JSON.parse(
      String(webSocket.send.mock.calls[0][0]),
    ) as LinkTypeSubscribeRequests;
    expect(request.requests).toEqual([{
      linkTypes: ["lead"],
      selectedObjects: [
        {
          objectType: "Employee",
          primaryKey: { employeeId: 1 },
        },
        {
          objectType: "Employee",
          primaryKey: { employeeId: 2 },
        },
      ],
    }]);

    sendToClient(webSocket, {
      id: request.id,
      responses: [{ id: "subscription-id", type: "success" }],
      type: "subscribeResponses",
    });

    sendToClient(webSocket, {
      id: "subscription-id",
      type: "updates",
      updates: [{
        linkedSide: {
          objectType: "Employee",
          primaryKey: { employeeId: 2 },
        },
        linkType: "lead",
        selectedSide: {
          objectType: "Employee",
          primaryKey: { employeeId: 1 },
        },
        state: "ADDED",
      }, {
        linkedSide: {
          objectType: "Employee",
          primaryKey: { employeeId: 1 },
        },
        linkType: "lead",
        selectedSide: {
          objectType: "Employee",
          primaryKey: { employeeId: 2 },
        },
        state: "REMOVED",
      }],
    });
    expect(listener.onChange).toHaveBeenCalledWith({
      updates: [{
        linkType: "lead",
        source: { $apiName: "Employee", $primaryKey: 1 },
        state: "ADDED",
        target: { $apiName: "Employee", $primaryKey: 2 },
      }, {
        linkType: "lead",
        source: { $apiName: "Employee", $primaryKey: 2 },
        state: "REMOVED",
        target: { $apiName: "Employee", $primaryKey: 1 },
      }],
    });

    subscription.unsubscribe();
  });
});
