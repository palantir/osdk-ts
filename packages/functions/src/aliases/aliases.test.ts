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

import * as fs from "fs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { custom } from "./custom.js";
import {
  ALIASES_JSON_FILE_ENV_VAR,
  detectEnvironment,
  RESOURCES_JSON_FILE_ENV_VAR,
} from "./environment.js";
import { resetPublishedCache } from "./loaders.js";
import { model } from "./model.js";
import { source } from "./source.js";
import { AliasEnvironment } from "./types.js";

// Read test data before mocking fs - use node:fs which is not affected by vi.mock("fs")
const { testAliasesData, testResourcesData } = vi.hoisted(() => {
  const nodeFs = require("node:fs");
  const nodePath = require("node:path");
  const aliasesPath = nodePath.resolve(
    __dirname,
    "./test-data/aliases.json",
  );
  const resourcesPath = nodePath.resolve(
    __dirname,
    "./test-data/resources.json",
  );
  return {
    testAliasesData: nodeFs.readFileSync(aliasesPath, "utf-8") as string,
    testResourcesData: nodeFs.readFileSync(resourcesPath, "utf-8") as string,
  };
});

vi.mock("fs");

describe("environment detection", () => {
  beforeEach(() => {
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
  });

  afterEach(() => {
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
  });

  it("detects published environment", () => {
    process.env[ALIASES_JSON_FILE_ENV_VAR] = "/some/path/aliases.json";
    expect(detectEnvironment()).toBe(AliasEnvironment.PUBLISHED);
  });

  it("detects live preview environment", () => {
    process.env[RESOURCES_JSON_FILE_ENV_VAR] = "/some/path/resources.json";
    expect(detectEnvironment()).toBe(AliasEnvironment.LIVE_PREVIEW);
  });

  it("throws when both env vars are set", () => {
    process.env[ALIASES_JSON_FILE_ENV_VAR] = "/some/path/aliases.json";
    process.env[RESOURCES_JSON_FILE_ENV_VAR] = "/some/path/resources.json";
    expect(() => detectEnvironment()).toThrow(
      "Ambiguous alias configuration",
    );
  });

  it("throws when neither env var is set", () => {
    expect(() => detectEnvironment()).toThrow(
      "Unknown alias environment",
    );
  });
});

describe("published mode aliases", () => {
  beforeEach(() => {
    resetPublishedCache();
    vi.clearAllMocks();
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
    process.env[ALIASES_JSON_FILE_ENV_VAR] = "/app/var/data/aliases.json";
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(testAliasesData);
  });

  afterEach(() => {
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
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
        rid: "ri.foundry-ml.main.model.11111111-1111-1111-1111-111111111111",
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
        "ri.foundry-ml.main.model.11111111-1111-1111-1111-111111111111",
      );
      expect(result2.rid).toBe(
        "ri.foundry-ml.main.model.22222222-2222-2222-2222-222222222222",
      );
    });
  });

  describe("source", () => {
    it("loads alias successfully and returns rid", () => {
      const result = source("mySourceAlias");
      expect(result).toEqual({
        rid: "ri.magritte..source.11111111-1111-1111-1111-111111111111",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => source("nonexistent")).toThrow(
        "Source alias 'nonexistent' not found. Available aliases: [mySourceAlias, anotherSourceAlias]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = source("mySourceAlias");
      const result2 = source("anotherSourceAlias");
      expect(result1.rid).toBe(
        "ri.magritte..source.11111111-1111-1111-1111-111111111111",
      );
      expect(result2.rid).toBe(
        "ri.magritte..source.22222222-2222-2222-2222-222222222222",
      );
    });
  });

  describe("caching", () => {
    it("reads file only once across multiple lookups", () => {
      custom("myCustomAlias");
      model("myModelAlias");
      source("mySourceAlias");
      custom("anotherCustomAlias");

      expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    });

    it("re-reads after resetPublishedCache", () => {
      custom("myCustomAlias");
      expect(fs.readFileSync).toHaveBeenCalledTimes(1);

      resetPublishedCache();
      custom("myCustomAlias");
      expect(fs.readFileSync).toHaveBeenCalledTimes(2);
    });
  });

  describe("file not found", () => {
    it("throws when aliases file does not exist", () => {
      vi.mocked(fs.existsSync).mockReturnValue(false);

      expect(() => custom("any-alias")).toThrow(
        "Aliases file not found at",
      );
    });
  });
});

describe("live preview mode aliases", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    process.env[RESOURCES_JSON_FILE_ENV_VAR] = "/app/var/data/resources.json";
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(testResourcesData);
  });

  afterEach(() => {
    delete process.env[ALIASES_JSON_FILE_ENV_VAR];
    delete process.env[RESOURCES_JSON_FILE_ENV_VAR];
  });

  describe("custom", () => {
    it("loads alias successfully", () => {
      const result = custom("previewCustomAlias");
      expect(result).toBe("previewCustomValue");
    });

    it("throws on nonexistent alias", () => {
      expect(() => custom("nonexistent")).toThrow(
        "Custom alias 'nonexistent' not found. Available aliases: [previewCustomAlias, anotherPreviewCustom]",
      );
    });

    it("selects correct alias from multiple", () => {
      expect(custom("previewCustomAlias")).toBe("previewCustomValue");
      expect(custom("anotherPreviewCustom")).toBe("anotherPreviewValue");
    });
  });

  describe("model", () => {
    it("loads alias successfully and returns rid", () => {
      const result = model("previewModelAlias");
      expect(result).toEqual({
        rid: "ri.foundry-ml.main.model.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => model("nonexistent")).toThrow(
        "Model alias 'nonexistent' not found. Available aliases: [previewModelAlias, anotherPreviewModel]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = model("previewModelAlias");
      const result2 = model("anotherPreviewModel");
      expect(result1.rid).toBe(
        "ri.foundry-ml.main.model.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      );
      expect(result2.rid).toBe(
        "ri.foundry-ml.main.model.bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      );
    });

    it("excludes models with null or missing alias", () => {
      expect(() => model("some-random-lookup")).toThrow(
        "Available aliases: [previewModelAlias, anotherPreviewModel]",
      );
    });
  });

  describe("source", () => {
    it("loads alias successfully and returns rid", () => {
      const result = source("previewSourceAlias");
      expect(result).toEqual({
        rid: "ri.magritte..source.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => source("nonexistent")).toThrow(
        "Source alias 'nonexistent' not found. Available aliases: [previewSourceAlias, anotherPreviewSource]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = source("previewSourceAlias");
      const result2 = source("anotherPreviewSource");
      expect(result1.rid).toBe(
        "ri.magritte..source.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      );
      expect(result2.rid).toBe(
        "ri.magritte..source.bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      );
    });

    it("excludes sources with null or missing alias", () => {
      expect(() => source("some-random-lookup")).toThrow(
        "Available aliases: [previewSourceAlias, anotherPreviewSource]",
      );
    });
  });

  describe("no caching", () => {
    it("re-reads file on every call", () => {
      custom("previewCustomAlias");
      custom("previewCustomAlias");
      custom("previewCustomAlias");

      expect(fs.readFileSync).toHaveBeenCalledTimes(3);
    });
  });

  describe("file not found", () => {
    it("throws when resources file does not exist", () => {
      vi.mocked(fs.existsSync).mockReturnValue(false);

      expect(() => custom("any-alias")).toThrow(
        "Resources file not found at",
      );
    });
  });
});
