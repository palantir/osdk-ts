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
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createLoggingClient } from "./createLoggingClient.js";

const ENDPOINT = "https://example.com/api/v1/observability/logs";

function makeClient(
  tokenProvider: () => Promise<string> = vi.fn().mockResolvedValue("tok"),
): SharedClient {
  const context: SharedClientContext = {
    baseUrl: "https://example.com/",
    fetch: vi.fn<typeof globalThis.fetch>(),
    tokenProvider,
  };
  return { [symbolClientContext]: context };
}

function fetchMock() {
  return vi.fn<typeof globalThis.fetch>().mockResolvedValue(
    new Response(null, { status: 200 }),
  );
}

function headersOf(init: RequestInit | undefined): Record<string, string> {
  return (init?.headers ?? {}) as Record<string, string>;
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

describe("createLoggingClient", () => {
  let fetchFn: ReturnType<typeof fetchMock>;

  beforeEach(() => {
    fetchFn = fetchMock();
    vi.stubGlobal("fetch", fetchFn);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("exports one authenticated OTLP request per flush", async () => {
    const logger = createLoggingClient({
      client: makeClient(),
      applicationRid: "ri.app",
    });

    logger.info("checkout submitted", { orderId: "o1" });
    logger.info("second event");
    await logger.flush();

    expect(fetchFn).toHaveBeenCalledTimes(1);
    const [url, init] = fetchFn.mock.calls[0];
    expect(String(url)).toBe(ENDPOINT);
    const headers = headersOf(init);
    expect(headers.Authorization).toBe("Bearer tok");
    expect(headers["Content-Type"]).toBe("application/x-protobuf");

    await logger.shutdown();
  });

  it("sends a fresh bearer on each flush", async () => {
    let n = 0;
    const tokenProvider = vi.fn(async () => `tok-${++n}`);
    const logger = createLoggingClient({
      client: makeClient(tokenProvider),
      applicationRid: "ri.app",
    });

    logger.info("first");
    await logger.flush();
    logger.info("second");
    await logger.flush();

    expect(fetchFn).toHaveBeenCalledTimes(2);
    expect(headersOf(fetchFn.mock.calls[0][1]).Authorization).toBe(
      "Bearer tok-1",
    );
    expect(headersOf(fetchFn.mock.calls[1][1]).Authorization).toBe(
      "Bearer tok-2",
    );

    await logger.shutdown();
  });

  it("flushes with keepalive on pagehide", async () => {
    const target = new EventTarget();
    const logger = createLoggingClient({
      client: makeClient(),
      applicationRid: "ri.app",
      lifecycleTarget: target,
    });

    logger.info("about to leave");
    target.dispatchEvent(new Event("pagehide"));
    await vi.waitFor(() => {
      expect(fetchFn).toHaveBeenCalledTimes(1);
    });

    expect(fetchFn.mock.calls[0][1]?.keepalive).toBe(true);

    await logger.shutdown();
  });

  it("reads applicationRid off the client when the option is omitted", async () => {
    const logger = createLoggingClient({
      client: makeClientWithAppRid(fetchFn, "ri.ctx-app"),
    });

    logger.info("event");
    await logger.flush();

    expect(fetchFn).toHaveBeenCalledTimes(1);
    expect(headersOf(fetchFn.mock.calls[0][1]).Authorization).toBe(
      "Bearer tok",
    );

    await logger.shutdown();
  });

  it("throws when no applicationRid is provided or on the client", () => {
    expect(() => createLoggingClient({ client: makeClient() })).toThrowError(
      /mandatory attribute/,
    );
  });

  it("drops records that beforeSend returns null for", async () => {
    const logger = createLoggingClient({
      client: makeClient(),
      applicationRid: "ri.app",
      beforeSend: (record) =>
        record.attributes.message === "secret" ? null : record,
    });

    logger.info("keep");
    logger.info("secret");
    await logger.flush();

    expect(fetchFn).toHaveBeenCalledTimes(1);

    await logger.shutdown();
  });
});
