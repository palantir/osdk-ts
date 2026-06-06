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

import { describe, expect, it } from "vitest";
import type { LogEntry } from "./attributes.js";
import { createBatch } from "./batch.js";

function entry(message: string): LogEntry {
  return { timestamp: "2024-01-01T00:00:00.000Z", severity: "INFO", message };
}

describe("createBatch", () => {
  it("enqueues and reports size", () => {
    const batch = createBatch(10);
    expect(batch.size()).toBe(0);
    batch.enqueue(entry("a"));
    batch.enqueue(entry("b"));
    expect(batch.size()).toBe(2);
  });

  it("drains in FIFO order up to the requested max", () => {
    const batch = createBatch(10);
    batch.enqueue(entry("a"));
    batch.enqueue(entry("b"));
    batch.enqueue(entry("c"));

    const first = batch.drain(2);
    expect(first.map((e) => e.message)).toEqual(["a", "b"]);
    expect(batch.size()).toBe(1);

    const second = batch.drain(10);
    expect(second.map((e) => e.message)).toEqual(["c"]);
    expect(batch.size()).toBe(0);
  });

  it("drops entries once maxQueueSize is reached", () => {
    const batch = createBatch(2);
    expect(batch.enqueue(entry("a"))).toBe(true);
    expect(batch.enqueue(entry("b"))).toBe(true);
    expect(batch.enqueue(entry("c"))).toBe(false);
    expect(batch.size()).toBe(2);
  });
});
