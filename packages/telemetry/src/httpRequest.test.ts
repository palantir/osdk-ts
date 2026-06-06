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

import { describe, expect, it, vi } from "vitest";
import type { HttpRequestConfig } from "./httpRequest.js";
import { sendJson } from "./httpRequest.js";

function makeConfig(
  fetchFn: typeof globalThis.fetch,
  overrides: Partial<HttpRequestConfig> = {},
): HttpRequestConfig {
  return {
    url: "https://example.com/api/v2/observability/logs/write",
    fetch: fetchFn,
    tokenProvider: vi.fn().mockResolvedValue("the-token"),
    maxRetries: 2,
    initialBackoffMillis: 1,
    ...overrides,
  };
}

describe("sendJson", () => {
  it("posts a single authenticated request on success", async () => {
    const fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 200 }),
    );
    await sendJson(makeConfig(fetchFn), { hello: "world" });

    expect(fetchFn).toHaveBeenCalledTimes(1);
    const [, init] = fetchFn.mock.calls[0];
    expect(init?.method).toBe("POST");
    expect(init?.keepalive).toBe(false);
    const headers = init?.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer the-token");
    expect(init?.body).toBe(JSON.stringify({ hello: "world" }));
  });

  it("retries a 500 and then succeeds", async () => {
    const fetchFn = vi.fn<typeof globalThis.fetch>()
      .mockResolvedValueOnce(new Response(null, { status: 500 }))
      .mockResolvedValueOnce(new Response(null, { status: 200 }));

    await sendJson(makeConfig(fetchFn), {});
    expect(fetchFn).toHaveBeenCalledTimes(2);
  });

  it("gives up after maxRetries and throws", async () => {
    const fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 503 }),
    );
    await expect(sendJson(makeConfig(fetchFn, { maxRetries: 2 }), {}))
      .rejects.toThrow();
    expect(fetchFn).toHaveBeenCalledTimes(3);
  });

  it("does not retry a non-retryable status", async () => {
    const fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 400 }),
    );
    await expect(sendJson(makeConfig(fetchFn), {})).rejects.toThrow();
    expect(fetchFn).toHaveBeenCalledTimes(1);
  });

  it("sends a keepalive request and does not retry on unload", async () => {
    const fetchFn = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
      new Response(null, { status: 500 }),
    );
    await expect(sendJson(makeConfig(fetchFn), {}, { unload: true }))
      .rejects.toThrow();

    expect(fetchFn).toHaveBeenCalledTimes(1);
    const [, init] = fetchFn.mock.calls[0];
    expect(init?.keepalive).toBe(true);
  });
});
