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

import { describe, expect, it, vi } from "vitest";

import { createTracingFetch } from "./createTracingFetch.js";

describe(createTracingFetch, () => {
  const okResponse = { status: 200 } as Response;

  it("returns the original response and correlates hooks by requestId", async () => {
    const onRequest = vi.fn();
    const onResponse = vi.fn();
    const fetchFn = vi
      .fn<typeof globalThis.fetch>()
      .mockResolvedValue(okResponse);

    const tracingFetch = createTracingFetch(fetchFn, {
      onRequest,
      onResponse,
    });

    const response = await tracingFetch("https://mock.com/first", {
      method: "POST",
    });
    await tracingFetch("https://mock.com/second");

    expect(response).toBe(okResponse);
    expect(onRequest).toHaveBeenNthCalledWith(1, {
      requestId: 1,
      url: "https://mock.com/first",
      method: "POST",
    });
    expect(onRequest).toHaveBeenNthCalledWith(2, {
      requestId: 2,
      url: "https://mock.com/second",
      method: "GET",
    });
    expect(onResponse).toHaveBeenNthCalledWith(1, {
      requestId: 1,
      url: "https://mock.com/first",
      method: "POST",
      status: 200,
      durationMs: expect.any(Number),
    });
  });

  it("invokes onError and rethrows the original error", async () => {
    const onResponse = vi.fn();
    const onError = vi.fn();
    const error = new Error("network down");
    const fetchFn = vi.fn<typeof globalThis.fetch>().mockRejectedValue(error);

    const tracingFetch = createTracingFetch(fetchFn, { onResponse, onError });

    await expect(tracingFetch("https://mock.com/fails")).rejects.toBe(error);
    expect(onResponse).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledWith({
      requestId: 1,
      url: "https://mock.com/fails",
      method: "GET",
      durationMs: expect.any(Number),
      error,
    });
  });

  it("swallows exceptions thrown by hooks", async () => {
    const fetchFn = vi
      .fn<typeof globalThis.fetch>()
      .mockResolvedValue(okResponse);

    const tracingFetch = createTracingFetch(fetchFn, {
      onRequest: () => {
        throw new Error("broken onRequest hook");
      },
      onResponse: () => {
        throw new Error("broken onResponse hook");
      },
    });

    await expect(tracingFetch("https://mock.com")).resolves.toBe(okResponse);
    expect(fetchFn).toHaveBeenCalledTimes(1);
  });
});
