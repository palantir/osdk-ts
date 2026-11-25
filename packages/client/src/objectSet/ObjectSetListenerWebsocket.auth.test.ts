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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSetSubscription,
} from "@osdk/api";
import type {
  ObjectSetStreamSubscribeRequests,
  StreamMessage,
} from "@osdk/foundry.ontologies";
import ImportedWebSocket from "isomorphic-ws";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import {
  type MockedWebSocket,
  sendToClient,
  setWebSocketState,
} from "./MockWebSocket.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

const createMockWebSocketConstructor = await vi.hoisted(
  async () =>
    (await import("./MockWebSocket.js")).createMockWebSocketConstructor,
);

vi.mock("isomorphic-ws", async (importOriginal) => {
  const original = await importOriginal<{
    default: typeof ImportedWebSocket;
  }>();
  const WebSocket = createMockWebSocketConstructor(original.default);
  return { default: WebSocket, WebSocket };
});

const MockWebSocket = ImportedWebSocket as unknown as MockedWebSocket;
const unauthorized = { error: "Default:Unauthorized", args: [] };
type Listener = Required<
  ObjectSetSubscription.Listener<ObjectOrInterfaceDefinition, never>
>;

describe("object-set subscription authentication recovery", () => {
  let client: ObjectSetListenerWebsocket;
  let tokenProvider: ReturnType<typeof vi.fn<() => Promise<string>>>;
  let objectFactory: ReturnType<typeof vi.fn>;
  let unsubscribes: Array<() => void>;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    tokenProvider = vi.fn().mockResolvedValue("initial-token");
    objectFactory = vi.fn();
    client = new ObjectSetListenerWebsocket({
      baseUrl: "https://example.com/",
      ontologyRid: "ri.ontology.main.ontology.example",
      tokenProvider,
      objectFactory,
    } as unknown as MinimalClient);
    unsubscribes = [];
  });

  afterEach(async () => {
    for (const unsubscribe of unsubscribes) unsubscribe();
    await vi.advanceTimersByTimeAsync(15_000);
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  function subscribe(objectType = "Employee") {
    const listener = {
      onChange: vi.fn<Listener["onChange"]>(),
      onError: vi.fn<Listener["onError"]>(),
      onOutOfDate: vi.fn(),
      onSuccessfulSubscription: vi.fn(),
    } satisfies Listener;
    const unsubscribe = client.subscribeWithoutType(
      { type: "base", objectType },
      listener,
    );
    unsubscribes.push(unsubscribe);
    return { listener, unsubscribe };
  }

  async function openSocket(index: number) {
    await vi.advanceTimersByTimeAsync(0);
    expect(MockWebSocket).toHaveBeenCalledTimes(index + 1);
    const socket = MockWebSocket.mock.results[index].value as MockedWebSocket;
    setWebSocketState(socket, "open");
    await vi.advanceTimersByTimeAsync(0);
    return socket;
  }

  function lastRequest(
    socket: MockedWebSocket,
  ): ObjectSetStreamSubscribeRequests {
    return JSON.parse(String(socket.send.mock.lastCall![0]));
  }

  function rejectSubscriptions(socket: MockedWebSocket) {
    const request = lastRequest(socket);
    sendToClient<StreamMessage>(socket, {
      type: "subscribeResponses",
      id: request.id,
      responses: request.requests.map(() => ({
        type: "error",
        errors: [unauthorized],
      })),
    });
  }

  function acceptSubscriptions(socket: MockedWebSocket, ids: string[]) {
    sendToClient<StreamMessage>(socket, {
      type: "subscribeResponses",
      id: lastRequest(socket).id,
      responses: ids.map((id) => ({ type: "success", id })),
    });
  }

  it("re-reads the token and restores a pending subscription after unauthorized", async () => {
    const { listener } = subscribe();
    const oldSocket = await openSocket(0);
    tokenProvider.mockResolvedValue("refreshed-token");

    rejectSubscriptions(oldSocket);

    expect(oldSocket.close).toHaveBeenCalledOnce();
    expect(listener.onError).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1000);
    const replacement = await openSocket(1);
    expect(tokenProvider).toHaveBeenCalledTimes(2);
    expect(MockWebSocket.mock.calls[1][1]).toEqual(["Bearer-refreshed-token"]);
    expect(lastRequest(replacement).requests).toHaveLength(1);

    acceptSubscriptions(replacement, ["restored"]);
    expect(listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
    expect(listener.onOutOfDate).not.toHaveBeenCalled();
  });

  it("restores an active subscription after an unauthorized subscriptionClosed", async () => {
    const { listener } = subscribe();
    const oldSocket = await openSocket(0);
    acceptSubscriptions(oldSocket, ["active"]);

    sendToClient<StreamMessage>(oldSocket, {
      type: "subscriptionClosed",
      id: "active",
      cause: { type: "error", ...unauthorized },
    });

    expect(oldSocket.close).toHaveBeenCalledOnce();
    expect(listener.onError).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1000);
    const replacement = await openSocket(1);
    acceptSubscriptions(replacement, ["restored"]);
    expect(listener.onOutOfDate).toHaveBeenCalledOnce();
    expect(listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
  });

  it("shares connection creation between concurrent subscriptions", async () => {
    subscribe();
    subscribe("Office");
    const socket = await openSocket(0);
    expect(tokenProvider).toHaveBeenCalledOnce();
    expect(lastRequest(socket).requests).toHaveLength(2);
  });

  it("coalesces unauthorized responses and ignores callbacks from the old socket", async () => {
    const active = subscribe();
    const oldSocket = await openSocket(0);
    acceptSubscriptions(oldSocket, ["active"]);
    const pending = subscribe("Office");
    await vi.advanceTimersByTimeAsync(0);
    const request = lastRequest(oldSocket);
    const callbacks = Object.fromEntries(
      oldSocket.addEventListener.mock.calls
        .slice(0, 3)
        .map(([type, callback]) => [type, callback]),
    ) as Record<string, (event: unknown) => void | Promise<void>>;

    rejectSubscriptions(oldSocket);
    sendToClient<StreamMessage>(oldSocket, {
      type: "subscriptionClosed",
      id: "active",
      cause: { type: "error", ...unauthorized },
    });
    await vi.advanceTimersByTimeAsync(1000);
    const replacement = await openSocket(1);

    // Invoke captured callbacks directly to model an event already queued when
    // the old connection's listeners were removed.
    callbacks.close(new Event("close"));
    callbacks.open(new Event("open"));
    await callbacks.message({
      data: JSON.stringify({
        type: "subscribeResponses",
        id: request.id,
        responses: [{ type: "error", errors: [unauthorized] }],
      }),
    });
    expect(replacement.close).not.toHaveBeenCalled();
    expect(oldSocket.close).toHaveBeenCalledOnce();
    expect(tokenProvider).toHaveBeenCalledTimes(2);
    expect(lastRequest(replacement).requests).toHaveLength(2);
    acceptSubscriptions(replacement, ["restored-active", "restored-pending"]);
    expect(active.listener.onOutOfDate).toHaveBeenCalledOnce();
    expect(pending.listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
    expect(active.listener.onError).not.toHaveBeenCalled();
    expect(pending.listener.onError).not.toHaveBeenCalled();
  });

  it("uses the current desired subscriptions when token renewal is asynchronous", async () => {
    const cancelled = subscribe();
    const oldSocket = await openSocket(0);
    let resolveToken!: (token: string) => void;
    tokenProvider.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveToken = resolve;
        }),
    );
    rejectSubscriptions(oldSocket);
    await vi.advanceTimersByTimeAsync(1000);
    const added = subscribe("Office");
    cancelled.unsubscribe();
    resolveToken("refreshed-token");
    const replacement = await openSocket(1);
    expect(
      lastRequest(replacement).requests.map((request) => request.objectSet),
    ).toEqual([{ type: "base", objectType: "Office" }]);
    expect(tokenProvider).toHaveBeenCalledTimes(2);
    acceptSubscriptions(replacement, ["office"]);
    expect(added.listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
    expect(cancelled.listener.onSuccessfulSubscription).not.toHaveBeenCalled();
  });

  it("stops reconnecting after three unsuccessful authentication retries", async () => {
    const { listener } = subscribe();
    let socket = await openSocket(0);
    for (let attempt = 1; attempt <= 3; attempt++) {
      rejectSubscriptions(socket);
      expect(listener.onError).not.toHaveBeenCalled();
      await vi.advanceTimersByTimeAsync(1000);
      socket = await openSocket(attempt);
    }

    rejectSubscriptions(socket);
    expect(socket.close).toHaveBeenCalledOnce();
    expect(listener.onError).toHaveBeenCalledExactlyOnceWith({
      subscriptionClosed: true,
      error: [unauthorized],
    });
    await vi.advanceTimersByTimeAsync(120_000);
    expect(MockWebSocket).toHaveBeenCalledTimes(4);
    expect(tokenProvider).toHaveBeenCalledTimes(4);

    // A later explicit subscribe can recover after the application signs in.
    const later = subscribe();
    tokenProvider.mockResolvedValue("valid-token");
    await vi.advanceTimersByTimeAsync(1000);
    socket = await openSocket(4);
    acceptSubscriptions(socket, ["later"]);
    expect(later.listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
  });

  it("resets the authentication retry budget after a successful subscription", async () => {
    const { listener } = subscribe();
    let socket = await openSocket(0);
    for (let attempt = 1; attempt <= 3; attempt++) {
      rejectSubscriptions(socket);
      await vi.advanceTimersByTimeAsync(1000);
      socket = await openSocket(attempt);
    }
    acceptSubscriptions(socket, ["active"]);
    sendToClient<StreamMessage>(socket, {
      type: "subscriptionClosed",
      id: "active",
      cause: { type: "error", ...unauthorized },
    });
    await vi.advanceTimersByTimeAsync(1000);
    socket = await openSocket(4);
    acceptSubscriptions(socket, ["restored"]);
    expect(listener.onError).not.toHaveBeenCalled();
    expect(listener.onOutOfDate).toHaveBeenCalledOnce();
  });

  it("reports terminal errors if the token provider rejects during recovery", async () => {
    const first = subscribe();
    const oldSocket = await openSocket(0);
    const second = subscribe("Office");
    await vi.advanceTimersByTimeAsync(0);
    const error = new Error("Sign-in required");
    tokenProvider.mockRejectedValueOnce(error);
    rejectSubscriptions(oldSocket);
    await vi.advanceTimersByTimeAsync(1000);
    for (const { listener } of [first, second]) {
      expect(listener.onError).toHaveBeenCalledExactlyOnceWith({
        subscriptionClosed: true,
        error,
      });
    }
    expect(MockWebSocket).toHaveBeenCalledOnce();
  });

  it.each(["subscribeResponses", "subscriptionClosed"] as const)(
    "preserves terminal behavior for non-authentication errors in %s",
    async (type) => {
      const { listener } = subscribe();
      const socket = await openSocket(0);
      const denied = {
        error: "Default:PermissionDenied",
        args: [{ name: "message", value: "Default:Unauthorized" }],
      };
      if (type === "subscriptionClosed") {
        acceptSubscriptions(socket, ["active"]);
        sendToClient<StreamMessage>(socket, {
          type,
          id: "active",
          cause: { type: "error", ...denied },
        });
      } else {
        sendToClient<StreamMessage>(socket, {
          type,
          id: lastRequest(socket).id,
          responses: [{ type: "error", errors: [denied] }],
        });
      }
      expect(listener.onError).toHaveBeenCalledOnce();
      expect(listener.onError.mock.calls[0][0].subscriptionClosed).toBe(true);
      expect(socket.close).not.toHaveBeenCalled();
      await vi.advanceTimersByTimeAsync(1000);
      expect(MockWebSocket).toHaveBeenCalledOnce();
    },
  );

  it("does not restore a subscription cancelled before its successful response", async () => {
    const { listener, unsubscribe } = subscribe();
    const socket = await openSocket(0);
    const request = lastRequest(socket);
    unsubscribe();
    sendToClient<StreamMessage>(socket, {
      type: "subscribeResponses",
      id: request.id,
      responses: [{ type: "success", id: "cancelled" }],
    });
    await vi.advanceTimersByTimeAsync(15_000);
    expect(socket.close).toHaveBeenCalledOnce();
    expect(listener.onSuccessfulSubscription).not.toHaveBeenCalled();
  });

  it("keeps non-authentication errors terminal in a batch containing unauthorized", async () => {
    const recoverable = subscribe();
    const terminal = subscribe("Office");
    const socket = await openSocket(0);
    const denied = { error: "Default:PermissionDenied", args: [] };
    sendToClient<StreamMessage>(socket, {
      type: "subscribeResponses",
      id: lastRequest(socket).id,
      responses: [
        { type: "error", errors: [unauthorized] },
        { type: "error", errors: [denied] },
      ],
    });
    expect(terminal.listener.onError).toHaveBeenCalledExactlyOnceWith({
      subscriptionClosed: true,
      error: [denied],
    });
    expect(recoverable.listener.onError).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1000);
    const replacement = await openSocket(1);
    expect(lastRequest(replacement).requests).toHaveLength(1);
    acceptSubscriptions(replacement, ["restored"]);
    expect(
      recoverable.listener.onSuccessfulSubscription,
    ).toHaveBeenCalledOnce();
  });

  it("does not reset the retry budget on successes in an unauthorized batch", async () => {
    const first = subscribe();
    const second = subscribe("Office");
    let socket = await openSocket(0);
    for (let attempt = 0; attempt <= 3; attempt++) {
      sendToClient<StreamMessage>(socket, {
        type: "subscribeResponses",
        id: lastRequest(socket).id,
        responses: [
          { type: "success", id: `success-${attempt}` },
          { type: "error", errors: [unauthorized] },
        ],
      });
      if (attempt < 3) {
        await vi.advanceTimersByTimeAsync(1000);
        socket = await openSocket(attempt + 1);
      }
    }
    for (const { listener } of [first, second]) {
      expect(listener.onSuccessfulSubscription).not.toHaveBeenCalled();
      expect(listener.onError).toHaveBeenCalledOnce();
    }
    expect(socket.close).toHaveBeenCalledOnce();
  });

  it("does not reconnect when all subscriptions are cancelled during backoff", async () => {
    const { unsubscribe } = subscribe();
    const socket = await openSocket(0);
    rejectSubscriptions(socket);
    unsubscribe();
    await vi.advanceTimersByTimeAsync(15_000);
    expect(MockWebSocket).toHaveBeenCalledOnce();
    expect(tokenProvider).toHaveBeenCalledOnce();
  });

  it("discards an obsolete connection factory result without disturbing its replacement", async () => {
    const { unsubscribe } = subscribe();
    const socket = await openSocket(0);
    let resolveToken!: (token: string) => void;
    tokenProvider.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveToken = resolve;
        }),
    );
    rejectSubscriptions(socket);
    await vi.advanceTimersByTimeAsync(1000);
    unsubscribe();
    await vi.advanceTimersByTimeAsync(15_000);

    const later = subscribe("Office");
    await vi.advanceTimersByTimeAsync(2000);
    const replacement = await openSocket(1);
    resolveToken("obsolete-token");
    await vi.advanceTimersByTimeAsync(0);
    const obsolete = MockWebSocket.mock.results[2].value as MockedWebSocket;
    expect(obsolete.close).toHaveBeenCalledOnce();
    expect(obsolete.addEventListener).not.toHaveBeenCalled();
    expect(replacement.close).not.toHaveBeenCalled();
    acceptSubscriptions(replacement, ["office"]);
    expect(later.listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
  });

  it("ignores object updates whose conversion finishes after the socket is replaced", async () => {
    const { listener } = subscribe();
    const socket = await openSocket(0);
    acceptSubscriptions(socket, ["active"]);
    let resolveObjects!: (objects: unknown[]) => void;
    objectFactory.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveObjects = resolve;
        }),
    );
    sendToClient<StreamMessage>(socket, {
      type: "objectSetChanged",
      id: "active",
      updates: [
        {
          type: "object",
          state: "ADDED_OR_UPDATED",
          object: { __apiName: "Employee", __primaryKey: 1 },
        },
      ],
    });
    await vi.advanceTimersByTimeAsync(0);
    sendToClient<StreamMessage>(socket, {
      type: "subscriptionClosed",
      id: "active",
      cause: { type: "error", ...unauthorized },
    });
    await vi.advanceTimersByTimeAsync(1000);
    const replacement = await openSocket(1);
    acceptSubscriptions(replacement, ["restored"]);
    resolveObjects([{ $apiName: "Employee", $primaryKey: 1 }]);
    await vi.advanceTimersByTimeAsync(0);
    expect(listener.onChange).not.toHaveBeenCalled();
    expect(listener.onError).not.toHaveBeenCalled();
  });

  it("preserves subscriptions created by a terminal error callback", async () => {
    const { listener } = subscribe();
    const socket = await openSocket(0);
    let replacementListener:
      | ReturnType<typeof subscribe>["listener"]
      | undefined;
    listener.onError.mockImplementationOnce(() => {
      replacementListener = subscribe("Office").listener;
    });
    tokenProvider.mockRejectedValueOnce(new Error("Token unavailable"));
    rejectSubscriptions(socket);
    await vi.advanceTimersByTimeAsync(1000);
    expect(listener.onError).toHaveBeenCalledOnce();
    await vi.advanceTimersByTimeAsync(2000);
    const replacement = await openSocket(1);
    expect(lastRequest(replacement).requests).toHaveLength(1);
    acceptSubscriptions(replacement, ["office"]);
    expect(
      replacementListener?.onSuccessfulSubscription,
    ).toHaveBeenCalledOnce();
    expect(replacementListener?.onError).not.toHaveBeenCalled();
  });

  it("uses the configured connection factory again when authentication fails", async () => {
    const createSubscriptionConnection = vi.fn(
      () => new ImportedWebSocket("wss://example.com/"),
    );
    client = new ObjectSetListenerWebsocket({
      baseUrl: "https://example.com/",
      createSubscriptionConnection,
      tokenProvider,
    } as unknown as MinimalClient);
    const { listener } = subscribe();
    const socket = await openSocket(0);
    rejectSubscriptions(socket);
    await vi.advanceTimersByTimeAsync(1000);
    const replacement = await openSocket(1);
    expect(createSubscriptionConnection).toHaveBeenCalledTimes(2);
    expect(tokenProvider).not.toHaveBeenCalled();
    acceptSubscriptions(replacement, ["restored"]);
    expect(listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
  });
});
