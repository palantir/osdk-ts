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

import { Employee, Office } from "@osdk/client.test.ontology";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { custom } from "./custom.js";
import { dataset } from "./dataset.js";
import {
  ALIASES_JSON_FILE_ENV_VAR,
  detectEnvironment,
  RESOURCES_JSON_FILE_ENV_VAR,
} from "./environment.js";
import { resetPublishedCache } from "./loaders.js";
import { mediaset } from "./mediaset.js";
import { model } from "./model.js";
import { objectType } from "./objectType.js";
import { source } from "./source.js";
import { stream } from "./stream.js";
import { AliasEnvironment } from "./types.js";

// Read test data before mocking fs - use node:fs which is not affected by vi.mock("fs")
const { testAliasesData, testResourcesData } = vi.hoisted(() => {
  const nodeFs = require("node:fs");
  const nodePath = require("node:path");
  const aliasesPath = nodePath.resolve(__dirname, "./test-data/aliases.json");
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
    expect(() => detectEnvironment()).toThrow("Ambiguous alias configuration");
  });

  it("throws when neither env var is set", () => {
    expect(() => detectEnvironment()).toThrow("Unknown alias environment");
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

  describe("dataset", () => {
    it("loads alias successfully and returns rid", () => {
      const result = dataset("myDatasetAlias");
      expect(result).toEqual({
        rid: "ri.foundry.main.dataset.11111111-1111-1111-1111-111111111111",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => dataset("nonexistent")).toThrow(
        "Dataset alias 'nonexistent' not found. Available aliases: [myDatasetAlias, anotherDatasetAlias]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = dataset("myDatasetAlias");
      const result2 = dataset("anotherDatasetAlias");
      expect(result1.rid).toBe(
        "ri.foundry.main.dataset.11111111-1111-1111-1111-111111111111",
      );
      expect(result2.rid).toBe(
        "ri.foundry.main.dataset.22222222-2222-2222-2222-222222222222",
      );
    });
  });

  describe("mediaset", () => {
    it("loads alias successfully and returns rid", () => {
      const result = mediaset("myMediasetAlias");
      expect(result).toEqual({
        rid: "ri.mio.main.media-set.11111111-1111-1111-1111-111111111111",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => mediaset("nonexistent")).toThrow(
        "Mediaset alias 'nonexistent' not found. Available aliases: [myMediasetAlias, anotherMediasetAlias]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = mediaset("myMediasetAlias");
      const result2 = mediaset("anotherMediasetAlias");
      expect(result1.rid).toBe(
        "ri.mio.main.media-set.11111111-1111-1111-1111-111111111111",
      );
      expect(result2.rid).toBe(
        "ri.mio.main.media-set.22222222-2222-2222-2222-222222222222",
      );
    });
  });

  describe("stream", () => {
    it("loads alias successfully and returns rid", () => {
      const result = stream("myStreamAlias");
      expect(result).toEqual({
        rid: "ri.foundry.main.dataset.33333333-3333-3333-3333-333333333333",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => stream("nonexistent")).toThrow(
        "Stream alias 'nonexistent' not found. Available aliases: [myStreamAlias, anotherStreamAlias]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = stream("myStreamAlias");
      const result2 = stream("anotherStreamAlias");
      expect(result1.rid).toBe(
        "ri.foundry.main.dataset.33333333-3333-3333-3333-333333333333",
      );
      expect(result2.rid).toBe(
        "ri.foundry.main.dataset.44444444-4444-4444-4444-444444444444",
      );
    });
  });

  describe("objectType", () => {
    it("rebinds apiName and records both names on the alias", () => {
      const result = objectType(Employee);
      expect(result.apiName).toBe("com.example.PublishedEmployee");
      expect(result.alias).toMatchObject({
        localApiName: "Employee",
        boundApiName: "com.example.PublishedEmployee",
      });
    });

    it("carries the property remapping onto the alias", () => {
      expect(objectType(Employee).alias?.properties).toEqual({
        fullName: "full_name",
      });
    });

    it("omits properties entirely when nothing is remapped", () => {
      expect(objectType(Office).alias).not.toHaveProperty("properties");
    });

    it("preserves the rest of the definition", () => {
      const result = objectType(Employee);
      expect(result.type).toBe("object");
      expect(result.primaryKeyApiName).toBe(Employee.primaryKeyApiName);
      expect(result.primaryKeyType).toBe(Employee.primaryKeyType);
      expect(result.osdkMetadata).toBe(Employee.osdkMetadata);
    });

    it("does not mutate the definition it was given", () => {
      objectType(Employee);
      expect(Employee.apiName).toBe("Employee");
      expect(Employee).not.toHaveProperty("alias");
    });

    it("drops the generated-stack object type rid", () => {
      expect(Employee).toHaveProperty("internalDoNotUseMetadata");
      expect(objectType(Employee)).not.toHaveProperty(
        "internalDoNotUseMetadata",
      );
    });

    it("selects correct alias from multiple", () => {
      expect(objectType(Employee).apiName).toBe(
        "com.example.PublishedEmployee",
      );
      expect(objectType(Office).apiName).toBe("com.example.PublishedOffice");
    });

    it("throws on an object type with no alias", () => {
      expect(() => objectType({ type: "object", apiName: "Unmapped" })).toThrow(
        "Object type alias 'Unmapped' not found. Available aliases: [Employee, Office]",
      );
    });
  });

  describe("caching", () => {
    it("reads file only once across multiple lookups", () => {
      custom("myCustomAlias");
      model("myModelAlias");
      source("mySourceAlias");
      dataset("myDatasetAlias");
      mediaset("myMediasetAlias");
      stream("myStreamAlias");
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

      expect(() => custom("any-alias")).toThrow("Aliases file not found at");
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

  describe("dataset", () => {
    it("loads alias successfully and returns rid", () => {
      const result = dataset("previewDatasetAlias");
      expect(result).toEqual({
        rid: "ri.foundry.main.dataset.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => dataset("nonexistent")).toThrow(
        "Dataset alias 'nonexistent' not found. Available aliases: [previewDatasetAlias, anotherPreviewDataset]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = dataset("previewDatasetAlias");
      const result2 = dataset("anotherPreviewDataset");
      expect(result1.rid).toBe(
        "ri.foundry.main.dataset.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      );
      expect(result2.rid).toBe(
        "ri.foundry.main.dataset.bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      );
    });

    it("excludes datasets with null or missing alias", () => {
      expect(() => dataset("some-random-lookup")).toThrow(
        "Available aliases: [previewDatasetAlias, anotherPreviewDataset]",
      );
    });
  });

  describe("mediaset", () => {
    it("loads alias successfully and returns rid", () => {
      const result = mediaset("previewMediasetAlias");
      expect(result).toEqual({
        rid: "ri.mio.main.media-set.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => mediaset("nonexistent")).toThrow(
        "Mediaset alias 'nonexistent' not found. Available aliases: [previewMediasetAlias, anotherPreviewMediaset]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = mediaset("previewMediasetAlias");
      const result2 = mediaset("anotherPreviewMediaset");
      expect(result1.rid).toBe(
        "ri.mio.main.media-set.aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      );
      expect(result2.rid).toBe(
        "ri.mio.main.media-set.bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      );
    });

    it("excludes mediasets with null or missing alias", () => {
      expect(() => mediaset("some-random-lookup")).toThrow(
        "Available aliases: [previewMediasetAlias, anotherPreviewMediaset]",
      );
    });
  });

  describe("stream", () => {
    it("loads alias successfully and returns rid", () => {
      const result = stream("previewStreamAlias");
      expect(result).toEqual({
        rid: "ri.foundry.main.dataset.eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      });
    });

    it("throws on nonexistent alias", () => {
      expect(() => stream("nonexistent")).toThrow(
        "Stream alias 'nonexistent' not found. Available aliases: [previewStreamAlias, anotherPreviewStream]",
      );
    });

    it("selects correct alias from multiple", () => {
      const result1 = stream("previewStreamAlias");
      const result2 = stream("anotherPreviewStream");
      expect(result1.rid).toBe(
        "ri.foundry.main.dataset.eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      );
      expect(result2.rid).toBe(
        "ri.foundry.main.dataset.ffffffff-ffff-ffff-ffff-ffffffffffff",
      );
    });

    it("excludes streams with null or missing alias", () => {
      expect(() => stream("some-random-lookup")).toThrow(
        "Available aliases: [previewStreamAlias, anotherPreviewStream]",
      );
    });
  });

  describe("objectType", () => {
    it("rebinds apiName and records both names on the alias", () => {
      const result = objectType(Employee);
      expect(result.apiName).toBe("com.example.PreviewEmployee");
      expect(result.alias).toMatchObject({
        localApiName: "Employee",
        boundApiName: "com.example.PreviewEmployee",
      });
    });

    it("carries the property remapping onto the alias", () => {
      expect(objectType(Employee).alias?.properties).toEqual({
        fullName: "full_name",
        startDate: "start_date",
      });
    });

    it("selects correct alias from multiple", () => {
      expect(objectType(Employee).apiName).toBe("com.example.PreviewEmployee");
      expect(objectType(Office).apiName).toBe("com.example.PreviewOffice");
    });

    it("excludes object types with null or missing alias", () => {
      expect(() => objectType({ type: "object", apiName: "Unmapped" })).toThrow(
        "Available aliases: [Employee, Office]",
      );
    });

    it("throws when resources.json has no objects section", () => {
      vi.mocked(fs.readFileSync).mockReturnValue(
        JSON.stringify({
          resources: {
            custom: {},
            models: [],
            datasets: [],
            mediasets: [],
            streams: [],
          },
          egress: { connections: [] },
        }),
      );

      expect(() => objectType(Employee)).toThrow(
        "Object type alias 'Employee' not found. Available aliases: []",
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

      expect(() => custom("any-alias")).toThrow("Resources file not found at");
    });
  });
});
