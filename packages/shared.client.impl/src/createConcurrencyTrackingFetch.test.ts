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

import {
  createConcurrencyTrackingFetch,
  OSDK_REQUEST_CONTEXT_HEADER,
} from "./createConcurrencyTrackingFetch.js";

describe(createConcurrencyTrackingFetch, () => {
  it("limits concurrent requests to 150", async () => {
    const dateNow = vi.spyOn(Date, "now").mockReturnValue(1_000);
    const pendingResponses: Array<(response: Response) => void> = [];
    const fetchFn = vi.fn<typeof globalThis.fetch>(
      () =>
        new Promise<Response>((resolve) => {
          pendingResponses.push(resolve);
        }),
    );
    const fetchWithConcurrencyLimit = createConcurrencyTrackingFetch(fetchFn);

    const requests = Array.from({ length: 152 }, () =>
      fetchWithConcurrencyLimit("https://example.com"),
    );

    await vi.waitFor(() => expect(fetchFn).toHaveBeenCalledTimes(150));

    const reportedConcurrency = fetchFn.mock.calls.map(([, init]) => {
      const requestContextHeader = new Headers(init?.headers).get(
        OSDK_REQUEST_CONTEXT_HEADER,
      );
      if (requestContextHeader == null) {
        throw new Error("Expected OSDK request context header");
      }
      const requestContext = JSON.parse(requestContextHeader);
      return requestContext.clientMetrics.concurrency;
    });
    expect(Math.max(...reportedConcurrency)).toBe(150);

    dateNow.mockReturnValue(1_025);
    const resolveFirstRequest = pendingResponses.shift();
    if (resolveFirstRequest == null) {
      throw new Error("Expected a pending response");
    }
    resolveFirstRequest(new Response());
    await vi.waitFor(() => expect(fetchFn).toHaveBeenCalledTimes(151));

    const lastRequestContextHeader = new Headers(
      fetchFn.mock.lastCall?.[1]?.headers,
    ).get(OSDK_REQUEST_CONTEXT_HEADER);
    if (lastRequestContextHeader == null) {
      throw new Error("Expected OSDK request context header");
    }
    expect(JSON.parse(lastRequestContextHeader).clientMetrics).toEqual({
      concurrency: 150,
      queueSize: 1,
      queueWaitTimeMs: 25,
    });

    const resolveSecondRequest = pendingResponses.shift();
    if (resolveSecondRequest == null) {
      throw new Error("Expected a pending response");
    }
    resolveSecondRequest(new Response());
    await vi.waitFor(() => expect(fetchFn).toHaveBeenCalledTimes(152));

    const finalRequestContextHeader = new Headers(
      fetchFn.mock.lastCall?.[1]?.headers,
    ).get(OSDK_REQUEST_CONTEXT_HEADER);
    if (finalRequestContextHeader == null) {
      throw new Error("Expected OSDK request context header");
    }
    expect(JSON.parse(finalRequestContextHeader).clientMetrics).toEqual({
      concurrency: 150,
      queueSize: 2,
      queueWaitTimeMs: 25,
    });

    for (const resolve of pendingResponses) {
      resolve(new Response());
    }
    await Promise.all(requests);
  });
});
