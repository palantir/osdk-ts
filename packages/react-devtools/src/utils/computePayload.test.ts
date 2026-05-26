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

import { describe, expect, it } from "vitest";
import {
  hashPayload,
  stringifyPayload,
  truncatePayload,
} from "./computePayload.js";

describe("stringifyPayload", () => {
  it("stringifies objects to JSON", () => {
    expect(stringifyPayload({ a: 1 })).toBe("{\"a\":1}");
  });

  it("stringifies arrays", () => {
    expect(stringifyPayload([1, 2, 3])).toBe("[1,2,3]");
  });

  it("stringifies primitives", () => {
    expect(stringifyPayload("hello")).toBe("\"hello\"");
    expect(stringifyPayload(42)).toBe("42");
    expect(stringifyPayload(null)).toBe("null");
    expect(stringifyPayload(true)).toBe("true");
  });
});

describe("truncatePayload", () => {
  it("returns short strings unchanged", () => {
    const short = "hello world";
    expect(truncatePayload(short)).toBe(short);
  });

  it("truncates strings over 10000 characters", () => {
    const long = "x".repeat(15000);
    const result = truncatePayload(long);

    expect(result.length).toBe(10003);
    expect(result).toMatch(/\.\.\.$/);
  });

  it("returns exact 10000-char strings unchanged", () => {
    const exact = "a".repeat(10000);
    expect(truncatePayload(exact)).toBe(exact);
  });
});

describe("hashPayload", () => {
  it("returns a number", () => {
    const hash = hashPayload({ key: "value" });
    expect(typeof hash).toBe("number");
  });

  it("same input produces same hash", () => {
    const hash1 = hashPayload({ a: 1, b: 2 });
    const hash2 = hashPayload({ a: 1, b: 2 });
    expect(hash1).toBe(hash2);
  });

  it("different input produces different hash", () => {
    const hash1 = hashPayload({ a: 1 });
    const hash2 = hashPayload({ a: 2 });
    expect(hash1).not.toBe(hash2);
  });

  it("hashes primitives", () => {
    const hash = hashPayload("test string");
    expect(typeof hash).toBe("number");
  });

  it("hash of empty object is deterministic", () => {
    expect(hashPayload({})).toBe(hashPayload({}));
  });
});
