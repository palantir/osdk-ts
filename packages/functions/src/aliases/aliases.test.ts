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

import * as fs from "fs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { custom } from "./custom.js";
import { loadAliasesFile, resetAliasesCache } from "./loader.js";
import { model } from "./model.js";

// Read test data before mocking fs - use node:fs which is not affected by vi.mock("fs")
const testAliasesData = vi.hoisted(() => {
  const nodeFs = require("node:fs");
  const nodePath = require("node:path");
  const testDataPath = nodePath.resolve(
    __dirname,
    "./test-data/aliases.json",
  );
  return nodeFs.readFileSync(testDataPath, "utf-8") as string;
});

vi.mock("fs");

describe("aliases", () => {
  beforeEach(() => {
    resetAliasesCache();
    vi.clearAllMocks();
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(testAliasesData);
  });

  describe("custom", () => {
    it("loads alias successfully", () => {
      const result = custom("myCustomAlias");
      expect(result).toBe("myCustomValue");
    });

    it("throws on nonexistent alias", () => {
      expect(() => custom("nonexistent")).toThrow(
        "Custom alias 'nonexistent' not found. Available aliases: [myCustomAlias, anotherCustomAlias]",
      );
    });

    it("selects correct alias from multiple", () => {
      expect(custom("myCustomAlias")).toBe("myCustomValue");
      expect(custom("anotherCustomAlias")).toBe("anotherCustomValue");
    });
  });

  describe("model", () => {
    it("loads alias successfully and returns rid", () => {
      const result = model("myModelAlias");
      expect(result).toEqual({
        rid: "ri.foundry-ml.main.model.12345678-1234-1234-1234-123456789012",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => model("nonexistent")).toThrow(
        "Model alias 'nonexistent' not found. Available aliases: [myModelAlias, anotherModelAlias]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = model("myModelAlias");
      const result2 = model("anotherModelAlias");
      expect(result1.rid).toBe(
        "ri.foundry-ml.main.model.12345678-1234-1234-1234-123456789012",
      );
      expect(result2.rid).toBe(
        "ri.foundry-ml.main.model.87654321-4321-4321-4321-210987654321",
      );
    });
  });

  describe("caching", () => {
    it("reads file only once across multiple lookups", () => {
      custom("myCustomAlias");
      model("myModelAlias");
      custom("anotherCustomAlias");

      expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    });

    it("re-reads after resetAliasesCache", () => {
      custom("myCustomAlias");
      expect(fs.readFileSync).toHaveBeenCalledTimes(1);

      resetAliasesCache();
      custom("myCustomAlias");
      expect(fs.readFileSync).toHaveBeenCalledTimes(2);
    });
  });

  describe("file not found", () => {
    it("throws when aliases file does not exist", () => {
      vi.mocked(fs.existsSync).mockReturnValue(false);

      expect(() => loadAliasesFile()).toThrow(
        "Aliases file not found at",
      );
    });
  });
});
