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
import { extractOriginatingCode, serializeError } from "./errorSerializer.js";

describe("serializeError", () => {
  it("captures name, message, and stack from an Error", () => {
    const error = new TypeError("boom");
    const serialized = serializeError(error);
    expect(serialized.name).toBe("TypeError");
    expect(serialized.message).toBe("boom");
    expect(serialized.stack).toContain("boom");
    expect(serialized.cause).toBeUndefined();
  });

  it("recurses into a nested cause chain", () => {
    const root = new Error("root cause");
    const middle = new Error("middle", { cause: root });
    const top = new Error("top", { cause: middle });

    const serialized = serializeError(top);
    expect(serialized.message).toBe("top");
    expect(serialized.cause?.message).toBe("middle");
    expect(serialized.cause?.cause?.message).toBe("root cause");
    expect(serialized.cause?.cause?.cause).toBeUndefined();
  });

  it("does not loop on a self-referential cause", () => {
    const error = new Error("cyclic");
    error.cause = error;
    expect(() => serializeError(error)).not.toThrow();
  });

  it("coerces a string input", () => {
    const serialized = serializeError("plain string");
    expect(serialized).toEqual({ name: "Error", message: "plain string" });
  });

  it("coerces a non-error object input", () => {
    const serialized = serializeError({ code: 42 });
    expect(serialized.name).toBe("Error");
    expect(serialized.message).toContain("42");
  });
});

describe("extractOriginatingCode", () => {
  it("returns the top stack frame", () => {
    const error = {
      name: "Error",
      message: "boom",
      stack:
        "Error: boom\n    at doWork (https://app.test/main.js:12:5)\n    at onClick (https://app.test/main.js:30:9)",
    };
    expect(extractOriginatingCode(error)).toBe(
      "at doWork (https://app.test/main.js:12:5)",
    );
  });

  it("returns undefined when the stack is absent", () => {
    expect(extractOriginatingCode({ name: "Error", message: "boom" }))
      .toBeUndefined();
  });

  it("returns undefined when the stack carries no frames", () => {
    expect(
      extractOriginatingCode({
        name: "Error",
        message: "boom",
        stack: "Error: boom",
      }),
    ).toBeUndefined();
  });
});
