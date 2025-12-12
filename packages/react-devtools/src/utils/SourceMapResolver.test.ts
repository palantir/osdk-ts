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

import { beforeEach, describe, expect, it, vi } from "vitest";
import { SourceMapResolver } from "./SourceMapResolver.js";

describe("SourceMapResolver", () => {
  let resolver: SourceMapResolver;

  beforeEach(() => {
    resolver = new SourceMapResolver();
    global.fetch = vi.fn();
  });

  describe("resolveOriginalLocation", () => {
    it("should return original location when sourcemap doesn't exist", async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 404,
      });

      const result = await resolver.resolveOriginalLocation(
        "/path/to/file.js",
        10,
        5,
      );

      expect(result).toEqual({
        filePath: "/path/to/file.js",
        line: 10,
        column: 5,
      });
    });

    it("should return original location when sourcemap fetch fails", async () => {
      (global.fetch as any).mockRejectedValue(new Error("Network error"));

      const result = await resolver.resolveOriginalLocation(
        "/path/to/file.js",
        10,
        5,
      );

      expect(result).toEqual({
        filePath: "/path/to/file.js",
        line: 10,
        column: 5,
      });
    });

    it("should return original location when sourcemap has no mapping", async () => {
      const mockSourceMap = {
        version: 3,
        sources: ["original.ts"],
        mappings: "",
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockSourceMap),
      });

      const result = await resolver.resolveOriginalLocation(
        "/path/to/file.js",
        10,
        5,
      );

      expect(result).toEqual({
        filePath: "/path/to/file.js",
        line: 10,
        column: 5,
      });
    });

    it("should handle missing column parameter", async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 404,
      });

      const result = await resolver.resolveOriginalLocation(
        "/path/to/file.js",
        10,
      );

      expect(result).toEqual({
        filePath: "/path/to/file.js",
        line: 10,
        column: 0,
      });
    });
  });

  describe("cache management", () => {
    it("should cache sourcemap consumers", async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 404,
      });

      await resolver.resolveOriginalLocation("/path/to/file.js", 10, 5);
      await resolver.resolveOriginalLocation("/path/to/file.js", 20, 10);

      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it("should clear cache on clearCache()", async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 404,
      });

      await resolver.resolveOriginalLocation("/path/to/file.js", 10, 5);
      resolver.clearCache();
      await resolver.resolveOriginalLocation("/path/to/file.js", 20, 10);

      expect(global.fetch).toHaveBeenCalledTimes(2);
    });
  });

  describe("error handling", () => {
    it("should not throw on invalid sourcemap data", async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ invalid: "data" }),
      });

      const result = await resolver.resolveOriginalLocation(
        "/path/to/file.js",
        10,
        5,
      );

      expect(result).toEqual({
        filePath: "/path/to/file.js",
        line: 10,
        column: 5,
      });
    });

    it("should handle JSON parse errors", async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.reject(new Error("Invalid JSON")),
      });

      const result = await resolver.resolveOriginalLocation(
        "/path/to/file.js",
        10,
        5,
      );

      expect(result).toEqual({
        filePath: "/path/to/file.js",
        line: 10,
        column: 5,
      });
    });
  });
});
