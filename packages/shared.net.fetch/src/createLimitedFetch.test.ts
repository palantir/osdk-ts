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
import { createLimitedFetch } from "./createLimitedFetch.js";

/**
 * A fetch stand-in that never resolves on its own; each call returns a promise
 * plus a `resolve` handle so the test can control completion and observe how
 * many calls are in flight at once.
 */
function deferredFetch() {
  let inFlight = 0;
  let maxInFlight = 0;
  const resolvers: Array<() => void> = [];

  const fetchFn = vi.fn((_input: RequestInfo | URL, _init?: RequestInit) => {
    inFlight++;
    maxInFlight = Math.max(maxInFlight, inFlight);
    return new Promise<Response>((resolve) => {
      resolvers.push(() => {
        inFlight--;
        resolve(new Response("ok"));
      });
    });
  }) as unknown as typeof globalThis.fetch;

  return {
    fetchFn,
    resolveNext: () => resolvers.shift()?.(),
    resolveAll: () => {
      while (resolvers.length > 0) resolvers.shift()!();
    },
    get maxInFlight() {
      return maxInFlight;
    },
    get started() {
      return (fetchFn as unknown as ReturnType<typeof vi.fn>).mock.calls.length;
    },
  };
}

const flush = () => new Promise((r) => setTimeout(r, 0));

describe(createLimitedFetch, () => {
  it("never exceeds the configured concurrency", async () => {
    const d = deferredFetch();
    const limited = createLimitedFetch(d.fetchFn, 2);

    const all = Promise.all(
      Array.from({ length: 5 }, () => limited("https://example.com")),
    );

    await flush();
    // Only 2 should have started; the rest are queued.
    expect(d.started).toBe(2);

    d.resolveAll();
    await flush();
    d.resolveAll();
    await flush();
    d.resolveAll();

    await all;
    expect(d.started).toBe(5);
    expect(d.maxInFlight).toBe(2);
  });

  it("returns the original fetch unwrapped when concurrency is Infinity", async () => {
    const d = deferredFetch();
    const limited = createLimitedFetch(d.fetchFn, Infinity);
    expect(limited).toBe(d.fetchFn);

    void limited("https://example.com");
    void limited("https://example.com");
    void limited("https://example.com");
    await flush();
    // No throttling: all three start immediately.
    expect(d.started).toBe(3);
    d.resolveAll();
  });

  it("defaults to a finite limit when none is provided", async () => {
    const d = deferredFetch();
    const limited = createLimitedFetch(d.fetchFn);

    void Promise.all(
      Array.from({ length: 25 }, () => limited("https://example.com")),
    );
    await flush();
    expect(d.started).toBe(10);
    d.resolveAll();
  });

  it.each([0, -1, 2.5, NaN])(
    "throws for invalid concurrency value %s",
    (value) => {
      expect(() => createLimitedFetch((() => {}) as any, value)).toThrow(
        /positive integer or Infinity/,
      );
    },
  );
});
