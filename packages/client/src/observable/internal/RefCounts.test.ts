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

import { afterEach, describe, expect, it, vi } from "vitest";

import { RefCounts } from "./RefCounts.js";

describe("RefCounts", () => {
  const ORIGINAL_NODE_ENV = process.env.NODE_ENV;
  afterEach(() => {
    process.env.NODE_ENV = ORIGINAL_NODE_ENV;
    vi.restoreAllMocks();
  });

  function retainedRefCounts(debug?: boolean) {
    const refCounts = new RefCounts<{ id: number }>(0, () => {}, debug);
    refCounts.retain(refCounts.register({ id: 1 }));
    return refCounts;
  }

  it("logs reference counts during gc when debug is enabled", () => {
    const refCounts = retainedRefCounts(true);
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    refCounts.gc();

    const countLogs = debugSpy.mock.calls.filter(
      ([first]) =>
        typeof first === "string" && first.includes("RefCounts.gc() - counts")
    );
    expect(countLogs.length).toBeGreaterThan(0);
  });

  it("does not log during gc when debug is disabled", () => {
    const refCounts = retainedRefCounts();
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    refCounts.gc();

    expect(debugSpy).not.toHaveBeenCalled();
  });

  it("does not log during gc in production even when debug is enabled", () => {
    const refCounts = retainedRefCounts(true);
    const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    process.env.NODE_ENV = "production";
    refCounts.gc();

    expect(debugSpy).not.toHaveBeenCalled();
  });
});
