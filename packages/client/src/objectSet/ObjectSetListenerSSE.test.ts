/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { StreamMessage } from "@osdk/foundry.ontologies";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  constructSseUrl,
  ObjectSetListenerSSE,
} from "./ObjectSetListenerSSE.js";

function makeSseStream(
  messages: StreamMessage[],
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  let i = 0;
  return new ReadableStream<Uint8Array>({
    pull(controller) {
      if (i < messages.length) {
        const data = `data: ${JSON.stringify(messages[i])}\n\n`;
        controller.enqueue(encoder.encode(data));
        i++;
      } else {
        controller.close();
      }
    },
  });
}

function makeSseResponse(messages: StreamMessage[]): Response {
  return new Response(makeSseStream(messages), {
    status: 200,
    headers: { "Content-Type": "text/event-stream" },
  });
}

function waitForCall(
  fn: ReturnType<typeof vi.fn>,
  callCount = 1,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error(`Timed out waiting for ${callCount} call(s)`)),
      5000,
    );
    const check = () => {
      if (fn.mock.calls.length >= callCount) {
        clearTimeout(timeout);
        resolve();
      } else {
        setTimeout(check, 10);
      }
    };
    check();
  });
}

const ONTOLOGY_RID = "ri.ontology.main.ontology.test-ontology";

const MOCK_OBJECT_DEF = {
  type: "object" as const,
  apiName: "Employee",
  primaryKeyApiName: "employeeId",
  properties: {
    employeeId: { type: "string" },
    fullName: { type: "string" },
  },
  interfaceMap: {},
};

function createMockClient(): MinimalClient {
  const clientCacheKey = {} as MinimalClient["clientCacheKey"];
  return {
    baseUrl: "https://stack.palantir.com",
    fetch: vi.fn(),
    tokenProvider: vi.fn().mockResolvedValue("mock-token"),
    ontologyRid: ONTOLOGY_RID,
    ontologyProvider: {
      getObjectDefinition: vi.fn().mockResolvedValue(MOCK_OBJECT_DEF),
      getInterfaceDefinition: vi.fn().mockResolvedValue(MOCK_OBJECT_DEF),
      getQueryDefinition: vi.fn(),
      getActionDefinition: vi.fn(),
    },
    objectFactory2: vi.fn().mockResolvedValue([]),
    objectFactory: vi.fn() as any,
    objectSetFactory: vi.fn() as any,
    clientCacheKey,
    logger: undefined,
    requestContext: {},
    narrowTypeInterfaceOrObjectMapping: {},
    branch: undefined,
    streamTransport: "sse",
  } as unknown as MinimalClient;
}

function createMockObjectType(): ObjectOrInterfaceDefinition {
  return {
    type: "object",
    apiName: "Employee",
    properties: {
      employeeId: { type: "string" },
      fullName: { type: "string" },
    },
  } as unknown as ObjectOrInterfaceDefinition;
}

describe("constructSseUrl", () => {
  it("constructs correct URL", () => {
    const url = constructSseUrl("https://stack.palantir.com", ONTOLOGY_RID);
    expect(url.toString()).toBe(
      `https://stack.palantir.com/api/v2/ontologySubscriptions/ontologies/${ONTOLOGY_RID}/sseSubscriptions`,
    );
  });

  it("handles trailing slash in base URL", () => {
    const url = constructSseUrl("https://stack.palantir.com/", ONTOLOGY_RID);
    expect(url.pathname).toBe(
      `/api/v2/ontologySubscriptions/ontologies/${ONTOLOGY_RID}/sseSubscriptions`,
    );
  });
});

describe("ObjectSetListenerSSE", () => {
  let mockClient: MinimalClient;
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useRealTimers();
    mockClient = createMockClient();
    mockFetch = globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("singleton per client cache key", () => {
    const a = ObjectSetListenerSSE.getInstance(mockClient);
    const b = ObjectSetListenerSSE.getInstance(mockClient);
    expect(a).toBe(b);
  });

  it("calls onSuccessfulSubscription on subscribe response success", async () => {
    const subscribeResponse: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "success", id: "sub-1" }],
      id: "req-1",
    } as StreamMessage;

    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeResponse]),
    );

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onSuccessfulSubscription);

    expect(listener.onSuccessfulSubscription).toHaveBeenCalledOnce();
    unsubscribe();
  });

  it("calls onError on subscribe response error", async () => {
    const subscribeResponse = {
      type: "subscribeResponses",
      responses: [{
        type: "error",
        errors: [{ errorType: "UNKNOWN", errorMessage: "bad" }],
      }],
      id: "req-1",
    } as unknown as StreamMessage;

    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeResponse]),
    );

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onError);

    expect(listener.onError).toHaveBeenCalledWith(
      expect.objectContaining({ subscriptionClosed: true }),
    );
    unsubscribe();
  });

  it("calls onChange for objectSetChanged messages", async () => {
    const subscribeMsg: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "success", id: "sub-1" }],
      id: "req-1",
    } as StreamMessage;

    const updateMsg: StreamMessage = {
      type: "objectSetChanged",
      id: "sub-1",
      updates: [{
        type: "object",
        object: {
          __apiName: "Employee",
          __primaryKey: "emp-1",
          employeeId: "emp-1",
          fullName: "John Doe",
        },
        state: "ADDED_OR_UPDATED",
      }],
    } as StreamMessage;

    const mockOsdkObject = {
      $apiName: "Employee",
      $primaryKey: "emp-1",
      employeeId: "emp-1",
      fullName: "John Doe",
    };

    (mockClient as any).objectFactory2 = vi.fn().mockResolvedValue(
      [mockOsdkObject],
    );

    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeMsg, updateMsg]),
    );

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onChange);

    expect(listener.onChange).toHaveBeenCalledWith(
      expect.objectContaining({ state: "ADDED_OR_UPDATED" }),
    );
    unsubscribe();
  });

  it("calls onOutOfDate for refreshObjectSet messages", async () => {
    const subscribeMsg: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "success", id: "sub-1" }],
      id: "req-1",
    } as StreamMessage;

    const refreshMsg: StreamMessage = {
      type: "refreshObjectSet",
      id: "sub-1",
      objectType: "Employee",
    } as StreamMessage;

    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeMsg, refreshMsg]),
    );

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    // onOutOfDate is called once for refreshObjectSet, and once when stream ends
    await waitForCall(listener.onOutOfDate);

    expect(listener.onOutOfDate).toHaveBeenCalled();
    unsubscribe();
  });

  it("calls onError for subscriptionClosed messages", async () => {
    const subscribeMsg: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "success", id: "sub-1" }],
      id: "req-1",
    } as StreamMessage;

    const closedMsg = {
      type: "subscriptionClosed",
      id: "sub-1",
      cause: { type: "reason", reason: "SERVER_SHUTDOWN" },
    } as unknown as StreamMessage;

    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeMsg, closedMsg]),
    );

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onError);

    expect(listener.onError).toHaveBeenCalledWith(
      expect.objectContaining({ subscriptionClosed: true }),
    );
    unsubscribe();
  });

  it("unsubscribe stops the SSE loop", async () => {
    // Return a stream that never closes
    const neverEndingStream = new ReadableStream<Uint8Array>({
      start(controller) {
        const encoder = new TextEncoder();
        const msg: StreamMessage = {
          type: "subscribeResponses",
          responses: [{ type: "success", id: "sub-1" }],
          id: "req-1",
        } as StreamMessage;
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(msg)}\n\n`));
        // never close - simulates long-lived SSE connection
      },
    });

    mockFetch.mockResolvedValueOnce(
      new Response(neverEndingStream, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      }),
    );

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onSuccessfulSubscription);
    unsubscribe();

    // after unsubscribe, no more fetch calls should occur
    const fetchCountAfterUnsubscribe = mockFetch.mock.calls.length;
    await new Promise(r => setTimeout(r, 100));
    expect(mockFetch.mock.calls.length).toBe(fetchCountAfterUnsubscribe);
  });

  it("calls onError when fetch rejects", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));
    // Second call: abort will stop the loop
    mockFetch.mockImplementation(() => new Promise(() => {}));

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onError);

    expect(listener.onError).toHaveBeenCalledWith(
      expect.objectContaining({
        subscriptionClosed: false,
      }),
    );
    unsubscribe();
  });

  it("calls onError when fetch returns non-ok response", async () => {
    mockFetch.mockResolvedValueOnce(
      new Response("forbidden", { status: 403, statusText: "Forbidden" }),
    );
    mockFetch.mockImplementation(() => new Promise(() => {}));

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onError);

    expect(listener.onError).toHaveBeenCalledWith(
      expect.objectContaining({ subscriptionClosed: false }),
    );
    unsubscribe();
  });

  it("sends correct fetch request", async () => {
    mockFetch.mockResolvedValueOnce(
      makeSseResponse([{
        type: "subscribeResponses",
        responses: [{ type: "success", id: "sub-1" }],
        id: "req-1",
      } as StreamMessage]),
    );
    // For reconnect loop
    mockFetch.mockImplementation(() => new Promise(() => {}));

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    await waitForCall(listener.onSuccessfulSubscription);

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining(
        `/api/v2/ontologySubscriptions/ontologies/${ONTOLOGY_RID}/sseSubscriptions`,
      ),
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Authorization": "Bearer mock-token",
          "Content-Type": "application/json",
          "Accept": "text/event-stream",
        }),
      }),
    );

    const body = JSON.parse(
      (mockFetch.mock.calls[0] as any[])[1].body as string,
    );
    expect(body.requests).toHaveLength(1);
    expect(body.requests[0].objectSet).toEqual({
      type: "base",
      objectType: "Employee",
    });

    unsubscribe();
  });

  it("triggers reconnection on QoS response", async () => {
    const qosMsg: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "qos" }],
      id: "req-1",
    } as StreamMessage;

    const subscribeMsg: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "success", id: "sub-1" }],
      id: "req-1",
    } as StreamMessage;

    // First connection: QoS response, should trigger reconnection
    mockFetch.mockResolvedValueOnce(
      makeSseResponse([qosMsg]),
    );
    // Second connection: normal success
    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeMsg]),
    );
    // Third: hang to stop further reconnects
    mockFetch.mockImplementation(() => new Promise(() => {}));

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    // QoS breaks the stream, triggering onOutOfDate (stream ended) then
    // reconnection. On second connection, onOutOfDate is called again
    // (reconnect subscribe response). Wait for both.
    await waitForCall(listener.onOutOfDate, 2);

    expect(mockFetch.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(listener.onSuccessfulSubscription).not.toHaveBeenCalled();
    unsubscribe();
  });

  it("calls onOutOfDate on reconnect success", async () => {
    const subscribeMsg: StreamMessage = {
      type: "subscribeResponses",
      responses: [{ type: "success", id: "sub-1" }],
      id: "req-1",
    } as StreamMessage;

    // First connection: success then stream ends
    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeMsg]),
    );
    // Second connection: success again
    mockFetch.mockResolvedValueOnce(
      makeSseResponse([subscribeMsg]),
    );
    // Third: hang to stop further reconnects
    mockFetch.mockImplementation(() => new Promise(() => {}));

    const listener = {
      onSuccessfulSubscription: vi.fn(),
      onChange: vi.fn(),
      onOutOfDate: vi.fn(),
      onError: vi.fn(),
    };

    const unsubscribe = await new ObjectSetListenerSSE(mockClient).subscribe(
      createMockObjectType(),
      { type: "base", objectType: "Employee" },
      listener,
      [],
    );

    // First connection: onSuccessfulSubscription
    await waitForCall(listener.onSuccessfulSubscription);
    expect(listener.onSuccessfulSubscription).toHaveBeenCalledOnce();

    // After stream ends + reconnect: onOutOfDate is called
    // (once for stream end, once for reconnect subscribe response)
    await waitForCall(listener.onOutOfDate, 2);
    expect(listener.onOutOfDate).toHaveBeenCalled();

    unsubscribe();
  });
});
