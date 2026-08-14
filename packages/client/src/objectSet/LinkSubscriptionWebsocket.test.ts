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
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import { LinkSubscriptionWebsocket } from "./LinkSubscriptionWebsocket.js";
import {
  type MockedWebSocket,
  sendToClient,
  setWebSocketState,
} from "./MockWebSocket.js";

const createMockWebSocketConstructor = await vi.hoisted(
  async () =>
    (await import("./MockWebSocket.js")).createMockWebSocketConstructor,
);

const MockedWebSocket = ImportedWebSocket as unknown as MockedWebSocket;

vi.mock("isomorphic-ws", async (importOriginal) => {
  const original = await importOriginal<{
    default: typeof ImportedWebSocket;
  }>();
  const WebSocket = createMockWebSocketConstructor(original.default);
  return { default: WebSocket, WebSocket };
});

describe("LinkSubscriptionWebsocket", () => {
  const leadListener: LinkSubscription.Listener<Employee, "lead"> = {
    onChange: vi.fn(),
  };
  const peepsListener: LinkSubscription.Listener<Employee, "peeps"> = {
    onChange: vi.fn(),
  };
  const minimalClient = {
    baseUrl: "https://example.com/base/",
    clientCacheKey: {},
    ontologyProvider: {
      getObjectDefinition: vi.fn(() =>
        Promise.resolve({
          primaryKeyApiName: "employeeId",
        }),
      ),
    },
    ontologyRid: "ri.ontology.main.ontology.example",
    tokenProvider: vi.fn(() => Promise.resolve("token")),
  } as unknown as MinimalClient;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("multiplexes subscriptions and routes update batches", async () => {
    const linkSubscriptionWebsocket =
      LinkSubscriptionWebsocket.getInstance(minimalClient);
    const unsubscribeLead = linkSubscriptionWebsocket.subscribe({
      links: ["lead"],
      listener: leadListener,
      objects: [
        { $apiName: "Employee", $primaryKey: 1 } as Osdk.Instance<Employee>,
        { $apiName: "Employee", $primaryKey: 2 } as Osdk.Instance<Employee>,
      ],
    });
    const unsubscribePeeps = linkSubscriptionWebsocket.subscribe({
      links: ["peeps"],
      listener: peepsListener,
      objects: [
        { $apiName: "Employee", $primaryKey: 3 } as Osdk.Instance<Employee>,
      ],
    });

    const webSocket = await vi.waitFor((): MockedWebSocket => {
      expect(MockedWebSocket).toHaveBeenCalledOnce();
      return MockedWebSocket.mock.results[0].value;
    });
    expect(String(MockedWebSocket.mock.calls[0][0])).toBe(
      "wss://example.com/base/api/v2/ontologySubscriptions/ontologies/ri.ontology.main.ontology.example/linkTypeSubscriptions",
    );
    expect(MockedWebSocket.mock.calls[0][1]).toEqual(["Bearer-token"]);

    setWebSocketState(webSocket, "open");
    const request = await vi.waitFor((): LinkTypeSubscribeRequests => {
      const lastCall = webSocket.send.mock.calls.at(-1);
      expect(lastCall).toBeDefined();
      const sentRequest = JSON.parse(
        String(lastCall?.[0]),
      ) as LinkTypeSubscribeRequests;
      expect(sentRequest.requests).toHaveLength(2);
      return sentRequest;
    });
    expect(request.requests).toEqual([
      {
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
      },
      {
        linkTypes: ["peeps"],
        selectedObjects: [
          {
            objectType: "Employee",
            primaryKey: { employeeId: 3 },
          },
        ],
      },
    ]);

    sendToClient(webSocket, {
      id: request.id,
      responses: [
        { id: "lead-subscription-id", type: "success" },
        { id: "peeps-subscription-id", type: "success" },
      ],
      type: "subscribeResponses",
    });

    sendToClient(webSocket, {
      id: "lead-subscription-id",
      type: "updates",
      updates: [
        {
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
        },
        {
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
        },
      ],
    });
    expect(leadListener.onChange).toHaveBeenCalledWith({
      updates: [
        {
          linkType: "lead",
          source: { $apiName: "Employee", $primaryKey: 1 },
          state: "ADDED",
          target: { $apiName: "Employee", $primaryKey: 2 },
        },
        {
          linkType: "lead",
          source: { $apiName: "Employee", $primaryKey: 2 },
          state: "REMOVED",
          target: { $apiName: "Employee", $primaryKey: 1 },
        },
      ],
    });
    expect(peepsListener.onChange).not.toHaveBeenCalled();

    sendToClient(webSocket, {
      id: "peeps-subscription-id",
      type: "updates",
      updates: [
        {
          linkedSide: {
            objectType: "Employee",
            primaryKey: { employeeId: 4 },
          },
          linkType: "peeps",
          selectedSide: {
            objectType: "Employee",
            primaryKey: { employeeId: 3 },
          },
          state: "ADDED",
        },
      ],
    });
    expect(peepsListener.onChange).toHaveBeenCalledWith({
      updates: [
        {
          linkType: "peeps",
          source: { $apiName: "Employee", $primaryKey: 3 },
          state: "ADDED",
          target: { $apiName: "Employee", $primaryKey: 4 },
        },
      ],
    });

    unsubscribeLead();
    unsubscribePeeps();
    await vi.advanceTimersByTimeAsync(15_000);
    expect(webSocket.close).toHaveBeenCalledOnce();
  });
});
