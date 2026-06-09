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

import type { SharedClient, SharedClientContext } from "@osdk/shared.client2";
import { symbolClientContext } from "@osdk/shared.client2";
import { describe, expect, it, vi } from "vitest";
import { createLoggingClient } from "./createLoggingClient.js";
import {
  DEFAULT_PRODUCING_RESOURCE_VERSION,
  DEFAULT_PRODUCING_SERVICE,
  PRODUCING_RESOURCE_IDENTIFIER,
  PRODUCING_RESOURCE_VERSION,
  PRODUCING_SERVICE,
  TRACE_OWNING_RESOURCE_IDENTIFIER,
} from "./resource.js";
import type { LogWriteRequest, Transport } from "./transport.js";

function makeClient(fetchFn: typeof globalThis.fetch): SharedClient {
  const context: SharedClientContext = {
    baseUrl: "https://example.com/",
    fetch: fetchFn,
    tokenProvider: vi.fn().mockResolvedValue("tok"),
  };
  return { [symbolClientContext]: context };
}

function makeClientWithAppRid(
  fetchFn: typeof globalThis.fetch,
  applicationRid: string,
): SharedClient {
  const context: SharedClientContext & { applicationRid: string } = {
    baseUrl: "https://example.com/",
    fetch: fetchFn,
    tokenProvider: vi.fn().mockResolvedValue("tok"),
    applicationRid,
  };
  return { [symbolClientContext]: context };
}

function makeTransport(): Transport & { emit: ReturnType<typeof vi.fn> } {
  return {
    emit: vi.fn<
      (
        request: LogWriteRequest,
        options?: { unload?: boolean },
      ) => Promise<void>
    >().mockResolvedValue(undefined),
  };
}

describe("createLoggingClient", () => {
  it("flushes one authenticated Log.write request through the default transport", async () => {
    const fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 200 }),
    );
    const logger = createLoggingClient({
      client: makeClient(fetchFn),
      applicationRid: "ri.app",
    });

    logger.info("checkout submitted", { orderId: "o1" });
    await logger.flush();

    expect(fetchFn).toHaveBeenCalledTimes(1);
    const [url, init] = fetchFn.mock.calls[0];
    expect(String(url)).toBe(
      "https://example.com/api/v2/observability/logs/write",
    );
    const headers = init?.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer tok");
    const body = JSON.parse(String(init?.body)) as LogWriteRequest;
    expect(body.traceOwningRid).toBe("ri.app");
    expect(body.logs).toHaveLength(1);
    expect(body.logs[0].message).toBe("checkout submitted");

    await logger.shutdown();
  });

  it("flushes with keepalive on pagehide", async () => {
    const transport = makeTransport();
    const target = new EventTarget();
    const logger = createLoggingClient({
      client: makeClient(vi.fn<typeof globalThis.fetch>()),
      applicationRid: "ri.app",
      transport,
      lifecycleTarget: target,
    });

    logger.info("about to leave");
    target.dispatchEvent(new Event("pagehide"));

    expect(transport.emit).toHaveBeenCalledTimes(1);
    expect(transport.emit.mock.calls[0][1]).toEqual({ unload: true });

    await logger.shutdown();
  });

  it("emits exactly one resource carrying the four mandatory keys", async () => {
    const transport = makeTransport();
    const logger = createLoggingClient({
      client: makeClient(vi.fn<typeof globalThis.fetch>()),
      applicationRid: "ri.app",
      transport,
    });

    logger.info("event");
    await logger.flush();

    expect(transport.emit).toHaveBeenCalledTimes(1);
    const request = transport.emit.mock.calls[0][0];
    expect(Array.isArray(request.resource)).toBe(false);
    const attributes = request.resource.attributes;
    expect(attributes[TRACE_OWNING_RESOURCE_IDENTIFIER]).toBe("ri.app");
    expect(attributes[PRODUCING_RESOURCE_IDENTIFIER]).toBe("ri.app");
    expect(attributes[PRODUCING_RESOURCE_VERSION]).toBe(
      DEFAULT_PRODUCING_RESOURCE_VERSION,
    );
    expect(attributes[PRODUCING_SERVICE]).toBe(DEFAULT_PRODUCING_SERVICE);

    await logger.shutdown();
  });

  it("reads applicationRid off the client when the option is omitted", async () => {
    const transport = makeTransport();
    const logger = createLoggingClient({
      client: makeClientWithAppRid(
        vi.fn<typeof globalThis.fetch>(),
        "ri.ctx-app",
      ),
      transport,
    });

    logger.info("event");
    await logger.flush();

    const request = transport.emit.mock.calls[0][0];
    expect(request.traceOwningRid).toBe("ri.ctx-app");
    expect(request.resource.attributes[TRACE_OWNING_RESOURCE_IDENTIFIER]).toBe(
      "ri.ctx-app",
    );

    await logger.shutdown();
  });

  it("drops entries that beforeSend returns null for", async () => {
    const transport = makeTransport();
    const logger = createLoggingClient({
      client: makeClient(vi.fn<typeof globalThis.fetch>()),
      applicationRid: "ri.app",
      transport,
      beforeSend: (entry) => (entry.message === "secret" ? null : entry),
    });

    logger.info("keep");
    logger.info("secret");
    await logger.flush();

    expect(transport.emit).toHaveBeenCalledTimes(1);
    const request = transport.emit.mock.calls[0][0];
    expect(request.logs).toHaveLength(1);
    expect(request.logs[0].message).toBe("keep");

    await logger.shutdown();
  });
});
