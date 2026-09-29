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

import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { createRetryingFetch } from "./createRetryingFetch.js";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it("does not submit a retry after its request has been aborted", async () => {
  const fetcher = vi
    .fn<typeof fetch>()
    .mockResolvedValue(new Response(null, { status: 503 }));
  const controller = new AbortController();
  const result = createRetryingFetch(fetcher)("https://example.com", {
    signal: controller.signal,
  });
  const rejected = expect(result).rejects.toMatchObject({ name: "AbortError" });
  await vi.advanceTimersByTimeAsync(0);
  expect(fetcher).toHaveBeenCalledTimes(1);
  controller.abort();
  await vi.runAllTimersAsync();
  await rejected;
  expect(fetcher).toHaveBeenCalledTimes(1);
});

it("does not retry an aborted fetch rejection", async () => {
  const controller = new AbortController();
  const fetcher = vi.fn<typeof fetch>().mockImplementation(() => {
    controller.abort();
    return Promise.reject(new DOMException("Aborted", "AbortError"));
  });
  await expect(
    createRetryingFetch(fetcher)("https://example.com", {
      signal: controller.signal,
    }),
  ).rejects.toMatchObject({ name: "AbortError" });
  expect(fetcher).toHaveBeenCalledTimes(1);
  expect(vi.getTimerCount()).toBe(0);
});
