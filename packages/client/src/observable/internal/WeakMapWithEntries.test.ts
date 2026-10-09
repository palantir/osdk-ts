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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { WeakMapWithEntries } from "./WeakMapWithEntries.js";

describe("WeakMapWithEntries", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["setInterval", "clearInterval"] });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("removes a deleted key from all iterators", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const map = new WeakMapWithEntries<object, string>();
    map.set(first, "first");
    map.set(second, "second");
    expect(map.delete(first)).toBe(true);

    expect([...map.entries()]).toEqual([[second, "second"]]);
    expect([...map.keys()]).toEqual([second]);
    expect([...map.values()]).toEqual(["second"]);
  });

  it("adds a reinserted key once at the end", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const map = new WeakMapWithEntries<object, string>();
    map.set(first, "first");
    map.set(second, "second");
    map.delete(first);
    map.set(first, "replacement");

    expect([...map]).toEqual([
      [second, "second"],
      [first, "replacement"],
    ]);
    expect([...map.keys()]).toEqual([second, first]);
    expect([...map.values()]).toEqual(["second", "replacement"]);
  });

  it("updates a value without moving its key", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const map = new WeakMapWithEntries<object, string>();
    map.set(first, "first");
    map.set(second, "second");
    map.set(first, "updated");

    expect([...map]).toEqual([
      [first, "updated"],
      [second, "second"],
    ]);
    expect(map.get(first)).toBe("updated");
  });

  it("includes stored undefined values", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const map = new WeakMapWithEntries<object, string | undefined>();
    map.set(first, undefined);
    map.set(second, "second");

    expect([...map.entries()]).toEqual([
      [first, undefined],
      [second, "second"],
    ]);
    expect([...map.values()]).toEqual([undefined, "second"]);
    expect(map.has(first)).toBe(true);
  });

  it("creates no recurring timer", () => {
    expect(vi.getTimerCount()).toBe(0);
    const map = new WeakMapWithEntries<object, string>();
    map.set({ id: 1 }, "first");
    expect(vi.getTimerCount()).toBe(0);
  });
});
