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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import type { AgentDefinitionVersion, DataType } from "@osdk/foundry.agents";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createClient } from "../createClient.js";

const definition = {
  type: "agent",
  apiName: "weatherAgent",
  version: "1.2.3",
} as const;
const schema: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [{ name: "city", dataType: { type: "string" } }],
  eventDefinitions: [
    {
      eventType: "LookupWeather",
      payloadType: {
        type: "struct",
        fields: [{ name: "city", dataType: { type: "string" } }],
      },
    },
  ],
  agentStateType: {
    type: "struct",
    fields: [{ name: "temperature", dataType: { type: "integer" } }],
  },
  contextItemDefinitions: [
    { contextItemType: "weather-result", dataType: { type: "string" } },
  ],
};
const json = (data: unknown) => Response.json(data);
const accepted = (key: string) =>
  json({ result: { type: "accepted", consistencyKey: key } });
const available = (key: string) =>
  json({
    type: "available",
    consistencyKey: key,
    arguments: { city: "London" },
    status: { type: "live" },
    agentState: { data: { temperature: 20 } },
    contextItems: {
      a: { contextItemType: "weather-result", data: "sunny" },
      b: { contextItemType: "new-item", data: 42 },
    },
    contextItemOrder: ["a", "b"],
  });
function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((r) => {
    resolve = r;
  });
  return { promise, resolve };
}

function setup() {
  const send = vi
    .fn<typeof fetch>()
    .mockImplementation(() => Promise.resolve(accepted("sent")));
  const read = vi
    .fn<typeof fetch>()
    .mockImplementation(() => Promise.resolve(available("read")));
  const metadata = vi
    .fn<typeof fetch>()
    .mockImplementation(() => Promise.resolve(json(schema)));
  const fetcher = vi.fn<typeof fetch>().mockImplementation((url, init) => {
    const path = new URL(String(url)).pathname;
    if (path.includes("/agentDefinitions/")) return metadata(url, init);
    if (path.endsWith("/sendEvent")) return send(url, init);
    if (path.endsWith("/getSessionState")) return read(url, init);
    if (path.endsWith("/agentSessions"))
      return Promise.resolve(json({ id: "session-1" }));
    throw new Error(`Unexpected request: ${url}`);
  });
  const client = createClient(
    "https://example.com",
    "ri.ontology.test",
    () => Promise.resolve("token"),
    undefined,
    fetcher,
  );
  return { client, fetcher, send, read, metadata, agent: client(definition) };
}
const body = (init: RequestInit | undefined): unknown =>
  JSON.parse(String(init?.body));
const key = (url: RequestInfo | URL) =>
  new URL(String(url)).searchParams.get("consistencyKey");

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe("agent sessions", () => {
  it("creates a pinned session and obtains existing handles without requests", async () => {
    const { agent, fetcher } = setup();
    expect((await agent.getSession("existing")).id).toBe("existing");
    expect(fetcher).not.toHaveBeenCalled();
    expect((await agent.createSession({ city: "London" })).id).toBe(
      "session-1",
    );
    expect(body(fetcher.mock.calls[1][1])).toEqual({
      agent: {
        type: "agentApiName",
        ontology: "ri.ontology.test",
        agentApiName: "weatherAgent",
      },
      agentVersion: "1.2.3",
      arguments: { city: "London" },
    });
    const url = new URL(String(fetcher.mock.calls[0][0]));
    expect(url.pathname).toBe(
      "/api/v2/agents/agentDefinitions/weatherAgent/versions/1.2.3",
    );
    expect(url.searchParams.get("ontology")).toBe("ri.ontology.test");
  });

  it.each(["latest", "", "^1.2.3", "1.2", "1.x"])(
    "rejects unpinned version %s",
    (version) => {
      expect(() => setup().client({ ...definition, version })).toThrow(
        "pinned version",
      );
    },
  );

  it("sends exact event names and resolves on acceptance", async () => {
    const { agent, send, read } = setup();
    const session = await agent.getSession("session-1");
    await expect(
      session.sendEvent({ LookupWeather: { city: "London" } }),
    ).resolves.toBeUndefined();
    expect(body(send.mock.calls[0][1])).toEqual({
      event: {
        id: expect.any(String),
        eventType: "LookupWeather",
        payload: { city: "London" },
      },
    });
    expect(read).not.toHaveBeenCalled();
    await session.sendEvent({ Arbitrary: { raw: 1 } });
    expect(body(send.mock.calls[1][1])).toMatchObject({
      event: { eventType: "Arbitrary", payload: { raw: 1 } },
    });
    await expect(session.sendEvent({})).rejects.toThrow("exactly one");
    await expect(session.sendEvent({ a: 1, b: 2 })).rejects.toThrow(
      "exactly one",
    );
  });

  it("retries readiness using the same event ID and preserves submission order", async () => {
    const { agent, send } = setup();
    send.mockResolvedValueOnce(json({ result: { type: "sessionNotReady" } }));
    const session = await agent.getSession("session-1");
    const first = session.sendEvent({ LookupWeather: { city: "London" } });
    const second = session.sendEvent({ LookupWeather: { city: "Paris" } });
    await vi.advanceTimersByTimeAsync(0);
    expect(send).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1000);
    await Promise.all([first, second]);
    expect(body(send.mock.calls[0][1])).toEqual(body(send.mock.calls[1][1]));
    expect(body(send.mock.calls[2][1])).toMatchObject({
      event: { payload: { city: "Paris" } },
    });
  });

  it("retries transport failures with the same event ID", async () => {
    const { agent, send } = setup();
    send.mockResolvedValueOnce(new Response(null, { status: 503 }));
    const session = await agent.getSession("session-1");
    const sending = session.sendEvent({ LookupWeather: { city: "London" } });
    await vi.advanceTimersByTimeAsync(1600);
    await sending;
    expect(send).toHaveBeenCalledTimes(2);
    expect(body(send.mock.calls[0][1])).toEqual(body(send.mock.calls[1][1]));
  });

  it("does not let an expired queued event release later events early", async () => {
    const { agent, send } = setup();
    const pending = deferred<Response>();
    send.mockReturnValueOnce(pending.promise);
    const session = await agent.getSession("session-1");
    const first = session.sendEvent({ first: {} });
    const expired = session.sendEvent({ expired: {} }, { $timeoutMs: 10 });
    const rejected = expect(expired).rejects.toMatchObject({
      name: "TimeoutError",
    });
    const third = session.sendEvent({ third: {} });
    await vi.advanceTimersByTimeAsync(100);
    await rejected;
    expect(send).toHaveBeenCalledTimes(1);
    pending.resolve(accepted("first"));
    await Promise.all([first, third]);
    expect(send).toHaveBeenCalledTimes(2);
    expect(body(send.mock.calls[1][1])).toMatchObject({
      event: { eventType: "third" },
    });
  });

  it("recovers the queue after a failed send", async () => {
    const { agent, send } = setup();
    send.mockResolvedValueOnce(
      Response.json(
        {
          errorCode: "INVALID_ARGUMENT",
          errorName: "BadEvent",
          errorInstanceId: "error",
          parameters: {},
        },
        { status: 400 },
      ),
    );
    const session = await agent.getSession("session-1");
    const first = session.sendEvent({ invalid: {} });
    const rejected = expect(first).rejects.toBeDefined();
    const second = session.sendEvent({ valid: {} });
    await rejected;
    await second;
    expect(send).toHaveBeenCalledTimes(2);
  });

  it("uses the invocation-time key without waiting for sends or extending a read", async () => {
    const { agent, send, read } = setup();
    const session = await agent.getSession("session-1");
    await session.sendEvent({ first: {} });
    const pending = deferred<Response>();
    send.mockReturnValueOnce(pending.promise);
    read.mockResolvedValueOnce(json({ type: "behind" }));
    const sending = session.sendEvent({ second: {} });
    const reading = session.getState();
    await vi.advanceTimersByTimeAsync(0);
    expect(read).toHaveBeenCalledTimes(1);
    expect(key(read.mock.calls[0][0])).toBe("sent");
    pending.resolve(accepted("second"));
    await sending;
    await vi.advanceTimersByTimeAsync(1000);
    const state = await reading;
    expect(key(read.mock.calls[1][0])).toBe("sent");
    expect(state).toEqual({
      arguments: { city: "London" },
      status: { type: "live" },
      agentState: { data: { temperature: 20 } },
      contextItems: {
        a: { type: "weather-result", data: "sunny" },
        b: { type: "$unknown", contextItemType: "new-item", data: 42 },
      },
      contextItemOrder: ["a", "b"],
    });
    await session.getState();
    expect(key(read.mock.calls[2][0])).toBe("second");
  });

  it("advances keys after reads without allowing stale reads to overwrite them", async () => {
    const { agent, read } = setup();
    const session = await agent.getSession("session-1");
    const pending = deferred<Response>();
    read.mockReturnValueOnce(pending.promise);
    const old = session.getState();
    await vi.advanceTimersByTimeAsync(0);
    read.mockResolvedValueOnce(available("new"));
    await session.getState();
    pending.resolve(available("old"));
    await old;
    await session.getState();
    expect(key(read.mock.calls[2][0])).toBe("new");
    await session.getState();
    expect(key(read.mock.calls[3][0])).toBe("read");
  });

  it("advances keys when overlapping reads complete in invocation order", async () => {
    const { agent, read } = setup();
    const session = await agent.getSession("session-1");
    const firstResponse = deferred<Response>();
    const secondResponse = deferred<Response>();
    read.mockReturnValueOnce(firstResponse.promise);
    read.mockReturnValueOnce(secondResponse.promise);
    const first = session.getState();
    await vi.advanceTimersByTimeAsync(0);
    const second = session.getState();
    await vi.advanceTimersByTimeAsync(0);
    firstResponse.resolve(available("first"));
    await first;
    secondResponse.resolve(available("second"));
    await second;
    await session.getState();
    expect(key(read.mock.calls[2][0])).toBe("second");
  });

  it("keeps returned object sets usable after the read deadline", async () => {
    const { agent, metadata, read, fetcher } = setup();
    const objectType = {
      apiName: "Todo",
      rid: "ri.object.type",
      primaryKey: "id",
    };
    const dataType: DataType = {
      type: "struct",
      fields: [
        {
          name: "items",
          dataType: {
            type: "list",
            elementType: {
              type: "nullable",
              wrappedType: {
                type: "record",
                valueType: {
                  type: "discriminatedUnion",
                  discriminatorKey: "kind",
                  members: [
                    {
                      discriminatorValue: "todos",
                      fields: [
                        {
                          name: "set",
                          dataType: {
                            type: "objectSet",
                            objectTypeRid: objectType.rid,
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      ],
    };
    metadata.mockResolvedValueOnce(
      json({
        ...schema,
        argumentDefinitions: [{ name: "todos", dataType }],
        agentStateType: dataType,
        contextItemDefinitions: [{ contextItemType: "todos", dataType }],
      }),
    );
    const data = { items: [{ a: { kind: "todos", set: "ri.object.set" } }] };
    read.mockResolvedValueOnce(
      json({
        type: "available",
        consistencyKey: "read",
        arguments: { todos: data },
        status: { type: "live" },
        agentState: { data },
        contextItems: { a: { contextItemType: "todos", data } },
        contextItemOrder: ["a"],
      }),
    );
    const originalFetch = fetcher.getMockImplementation()!;
    const aggregate = vi.fn(() =>
      Promise.resolve(
        json({
          data: [{ group: {}, metrics: [{ name: "count", value: 2 }] }],
        }),
      ),
    );
    fetcher.mockImplementation((url, init) => {
      if (String(url).includes("getByRidBatch"))
        return Promise.resolve(json({ data: [objectType] }));
      if (String(url).endsWith("/aggregate")) return aggregate();
      return originalFetch(url, init);
    });
    const session = await agent.getSession("session-1");
    const state = await session.getState({ $timeoutMs: 100 });
    await vi.advanceTimersByTimeAsync(101);
    for (const value of [
      state.arguments.todos,
      state.agentState.data,
      state.contextItems.a.data,
    ]) {
      const converted = value as {
        items: Array<
          Record<
            string,
            { kind: "todos"; set: ObjectSet<ObjectTypeDefinition> }
          >
        >;
      };
      await expect(
        converted.items[0].a.set.aggregate({
          $select: { $count: "unordered" },
        }),
      ).resolves.toEqual({ $count: 2 });
    }
    expect(aggregate).toHaveBeenCalledTimes(3);
  });

  it("does not use newly discovered context types as generated discriminants", async () => {
    const { client } = setup();
    const session = await client({
      ...definition,
      contextItemTypes: [],
    }).getSession("session-1");
    const state = await session.getState();
    expect(state.contextItems.a).toEqual({
      type: "$unknown",
      contextItemType: "weather-result",
      data: "sunny",
    });
  });

  it.each(["sendEvent", "getState"] as const)(
    "bounds %s metadata requests by the default 30-second timeout",
    async (method) => {
      const { agent, metadata, send, read } = setup();
      metadata.mockImplementation(() => new Promise<Response>(() => {}));
      const session = await agent.getSession("session-1");
      const result =
        method === "sendEvent"
          ? session.sendEvent({ event: {} })
          : session.getState();
      const rejected = expect(result).rejects.toMatchObject({
        name: "TimeoutError",
      });
      await vi.advanceTimersByTimeAsync(29_999);
      expect(metadata.mock.calls[0][1]?.signal?.aborted).toBe(false);
      await vi.advanceTimersByTimeAsync(1);
      await rejected;
      expect(metadata.mock.calls[0][1]?.signal?.aborted).toBe(true);
      expect(send).not.toHaveBeenCalled();
      expect(read).not.toHaveBeenCalled();
    },
  );

  it("aborts an active request and reports a timeout", async () => {
    const { agent, send } = setup();
    send.mockImplementation(
      (_url, init) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener(
            "abort",
            () => reject(new DOMException("Aborted", "AbortError")),
            { once: true },
          );
        }),
    );
    const session = await agent.getSession("session-1");
    const result = session.sendEvent({ event: {} }, { $timeoutMs: 50 });
    const rejected = expect(result).rejects.toMatchObject({
      name: "TimeoutError",
    });
    await vi.advanceTimersByTimeAsync(50);
    await rejected;
    await vi.advanceTimersByTimeAsync(10_000);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0][1]?.signal?.aborted).toBe(true);
  });

  it("times out polling and prevents subsequent retries", async () => {
    const { agent, read } = setup();
    read.mockImplementation(() => Promise.resolve(json({ type: "notReady" })));
    const session = await agent.getSession("session-1");
    const result = session.getState({ $timeoutMs: 1500 });
    const rejected = expect(result).rejects.toMatchObject({
      name: "TimeoutError",
    });
    await vi.advanceTimersByTimeAsync(1500);
    await rejected;
    await vi.advanceTimersByTimeAsync(30_000);
    expect(read).toHaveBeenCalledTimes(2);
  });

  it.each([-1, NaN, Infinity])(
    "rejects invalid timeout %s",
    async ($timeoutMs) => {
      const { agent, fetcher } = setup();
      const session = await agent.getSession("session-1");
      await expect(session.getState({ $timeoutMs })).rejects.toThrow(
        "finite non-negative",
      );
      expect(fetcher).not.toHaveBeenCalled();
    },
  );
});
