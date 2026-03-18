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

import type { ObjectType } from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import {
  generateBackingDatasetBlockResult,
  propertyTypeToSchemaType,
} from "./generateBackingDataset.js";

describe("propertyTypeToSchemaType", () => {
  it.each(
    [
      ["string", "STRING"],
      ["boolean", "BOOLEAN"],
      ["integer", "INTEGER"],
      ["long", "LONG"],
      ["double", "DOUBLE"],
      ["float", "FLOAT"],
      ["byte", "BYTE"],
      ["short", "SHORT"],
      ["date", "DATE"],
      ["timestamp", "TIMESTAMP"],
    ] as const,
  )("maps '%s' to '%s'", (input, expected) => {
    expect(propertyTypeToSchemaType(input)).toBe(expected);
  });

  it("maps object type { type: 'string' } to 'STRING'", () => {
    expect(propertyTypeToSchemaType({ type: "string" })).toBe("STRING");
  });

  it("maps object type { type: 'integer' } to 'INTEGER'", () => {
    expect(propertyTypeToSchemaType({ type: "integer" })).toBe("INTEGER");
  });

  it("throws on unsupported property types", () => {
    expect(() => propertyTypeToSchemaType("unknownType")).toThrow(
      /Unsupported property type "unknownType".*empty backing datasource/,
    );
    expect(() => propertyTypeToSchemaType({ type: "geopoint" })).toThrow(
      /Unsupported property type "geopoint".*empty backing datasource/,
    );
  });
});

describe("generateBackingDatasetBlockResult", () => {
  let buildDir: string;

  beforeEach(async () => {
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "backing-ds-test-"),
    );
  });

  afterEach(async () => {
    await fs.promises.rm(buildDir, { recursive: true, force: true });
  });

  function createObjectType(
    overrides: Partial<ObjectType> = {},
  ): ObjectType {
    return {
      apiName: "TestObject",
      displayName: "Test Object",
      pluralDisplayName: "Test Objects",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "name",
      __type: OntologyEntityTypeEnum.OBJECT_TYPE,
      properties: [
        { apiName: "id", type: "string", displayName: "ID" },
        { apiName: "count", type: "integer", displayName: "Count" },
      ],
      ...overrides,
    } as ObjectType;
  }

  it("throws if object type has a stream datasource", async () => {
    const obj = createObjectType({
      datasources: [{ type: "stream" }],
    } as Partial<ObjectType>);

    await expect(
      generateBackingDatasetBlockResult(obj, buildDir),
    ).rejects.toThrow(
      /non-dataset datasources \(stream\).*cannot use includeEmptyBackingDataset/,
    );
  });

  it("throws if object type has a restrictedView datasource", async () => {
    const obj = createObjectType({
      datasources: [{ type: "restrictedView" }],
    } as Partial<ObjectType>);

    await expect(
      generateBackingDatasetBlockResult(obj, buildDir),
    ).rejects.toThrow(
      /non-dataset datasources \(restrictedView\)/,
    );
  });

  it("allows dataset datasources without throwing", async () => {
    const obj = createObjectType({
      datasources: [{ type: "dataset" }],
    } as Partial<ObjectType>);

    const result = await generateBackingDatasetBlockResult(obj, buildDir);
    expect(result.block_identifier).toBe("TestObject-backing-ds");
  });

  it("returns correct block_identifier and block_type", async () => {
    const obj = createObjectType();
    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    expect(result.block_identifier).toBe("TestObject-backing-ds");
    expect(result.block_type).toBe("STATIC_DATASET");
  });

  it("has empty input_mapping_entries", async () => {
    const obj = createObjectType();
    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    expect(result.input_mapping_entries).toEqual([]);
  });

  it("produces tabularDatasource output for the dataset", async () => {
    const obj = createObjectType();
    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    const dsKey = ReadableIdGenerator.getForDataSet("TestObject");
    expect(result.outputs[dsKey]).toBeDefined();
    expect(result.outputs[dsKey].type).toBe("tabularDatasource");

    const dsOutput = result.outputs[dsKey] as unknown as Record<
      string,
      unknown
    >;
    const dsShape = dsOutput.tabularDatasource as Record<string, unknown>;
    expect((dsShape.about as Record<string, unknown>).fallbackTitle).toBe(
      "TestObject-backing-ds",
    );
    expect(dsShape.type).toBe("DATASET");
    expect(
      (dsShape.buildRequirements as Record<string, unknown>).isBuildable,
    ).toBe(false);
    expect(dsShape.schema).toHaveLength(2);
  });

  it("produces datasourceColumn outputs for each property", async () => {
    const obj = createObjectType();
    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    const idColKey = ReadableIdGenerator.getForDataSetColumn(
      "TestObject",
      "id",
    );
    const countColKey = ReadableIdGenerator.getForDataSetColumn(
      "TestObject",
      "count",
    );

    expect(result.outputs[idColKey]).toBeDefined();
    expect(result.outputs[idColKey].type).toBe("datasourceColumn");
    const idCol = result.outputs[idColKey] as unknown as Record<
      string,
      unknown
    >;
    expect(
      (idCol.datasourceColumn as Record<string, unknown>).about,
    ).toHaveProperty("fallbackTitle", "id");

    expect(result.outputs[countColKey]).toBeDefined();
    expect(result.outputs[countColKey].type).toBe("datasourceColumn");
    const countCol = result.outputs[countColKey] as unknown as Record<
      string,
      unknown
    >;
    expect(
      (countCol.datasourceColumn as Record<string, unknown>).about,
    ).toHaveProperty("fallbackTitle", "count");
  });

  it("produces compassResource input for install location", async () => {
    const obj = createObjectType();
    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    const compassKey = "TestObject-backing-ds-compass-resource" as ReadableId;
    expect(result.inputs[compassKey]).toBeDefined();
    expect(result.inputs[compassKey].type).toBe("compassResource");
  });

  it("populates add_on_override with idToBlockShapeId mappings", async () => {
    const obj = createObjectType();
    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    expect(result.add_on_override).toBeDefined();
    const override = result.add_on_override as Record<string, unknown>;
    expect(override.idToBlockShapeId).toBeDefined();
    expect(override.idToInputGroupId).toEqual({});
    expect(override.outputToLocationInput).toBeDefined();
  });

  it("excludes editOnly properties from outputs", async () => {
    const obj = createObjectType({
      properties: [
        { apiName: "id", type: "string", displayName: "ID" },
        {
          apiName: "secret",
          type: "string",
          displayName: "Secret",
          editOnly: true,
        },
        { apiName: "count", type: "integer", displayName: "Count" },
      ],
    } as Partial<ObjectType>);

    const result = await generateBackingDatasetBlockResult(obj, buildDir);

    // Should have tabularDatasource + 2 columns (id and count), not 3
    expect(Object.keys(result.outputs)).toHaveLength(3);
    const secretKey = ReadableIdGenerator.getForDataSetColumn(
      "TestObject",
      "secret",
    );
    expect(result.outputs[secretKey]).toBeUndefined();
  });

  describe("file output", () => {
    it("writes schema.json with correct fieldSchemaList", async () => {
      const obj = createObjectType();
      const result = await generateBackingDatasetBlockResult(obj, buildDir);

      const schemaPath = path.join(
        result.block_data_directory,
        "schema.json",
      );
      const schema = JSON.parse(
        await fs.promises.readFile(schemaPath, "utf-8"),
      );

      expect(schema.fieldSchemaList).toHaveLength(2);
      expect(schema.fieldSchemaList[0].name).toBe("id");
      expect(schema.fieldSchemaList[0].type).toBe("STRING");
      expect(schema.fieldSchemaList[1].name).toBe("count");
      expect(schema.fieldSchemaList[1].type).toBe("INTEGER");
      expect(schema.dataFrameReaderClass).toBe(
        "com.palantir.foundry.spark.input.ParquetDataFrameReader",
      );
    });

    it("writes block-data.json with column mappings", async () => {
      const obj = createObjectType();
      const result = await generateBackingDatasetBlockResult(obj, buildDir);

      const blockDataPath = path.join(
        result.block_data_directory,
        "block-data.json",
      );
      const blockData = JSON.parse(
        await fs.promises.readFile(blockDataPath, "utf-8"),
      );

      expect(blockData.type).toBe("v1");
      expect(blockData.v1.hasSchema).toBe(true);
      const columnValues = Object.values(blockData.v1.columns);
      expect(columnValues).toContain("id");
      expect(columnValues).toContain("count");
    });

    it("writes VERSION file", async () => {
      const obj = createObjectType();
      const result = await generateBackingDatasetBlockResult(obj, buildDir);

      const versionPath = path.join(
        result.block_data_directory,
        "VERSION",
      );
      const version = await fs.promises.readFile(versionPath, "utf-8");
      expect(version).toBe("\"1\"");
    });

    it("writes empty files.zip (22 bytes)", async () => {
      const obj = createObjectType();
      const result = await generateBackingDatasetBlockResult(obj, buildDir);

      const zipPath = path.join(
        result.block_data_directory,
        "files.zip",
      );
      const zipBuffer = await fs.promises.readFile(zipPath);
      expect(zipBuffer.length).toBe(22);
      // Verify ZIP end-of-central-directory signature
      expect(zipBuffer[0]).toBe(0x50);
      expect(zipBuffer[1]).toBe(0x4b);
      expect(zipBuffer[2]).toBe(0x05);
      expect(zipBuffer[3]).toBe(0x06);
    });

    it("excludes editOnly properties from schema.json", async () => {
      const obj = createObjectType({
        properties: [
          { apiName: "id", type: "string", displayName: "ID" },
          {
            apiName: "secret",
            type: "string",
            displayName: "Secret",
            editOnly: true,
          },
        ],
      } as Partial<ObjectType>);

      const result = await generateBackingDatasetBlockResult(obj, buildDir);

      const schemaPath = path.join(
        result.block_data_directory,
        "schema.json",
      );
      const schema = JSON.parse(
        await fs.promises.readFile(schemaPath, "utf-8"),
      );

      expect(schema.fieldSchemaList).toHaveLength(1);
      expect(schema.fieldSchemaList[0].name).toBe("id");
    });
  });

  it("uses deterministic IDs when randomnessKey is provided", async () => {
    const obj = createObjectType();
    const key = "12345678-1234-1234-1234-123456789abc";

    const result1 = await generateBackingDatasetBlockResult(obj, buildDir, key);

    // Clean up and recreate for second run
    await fs.promises.rm(buildDir, { recursive: true, force: true });
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "backing-ds-test-"),
    );

    const result2 = await generateBackingDatasetBlockResult(obj, buildDir, key);

    // Output shape keys should be identical
    expect(Object.keys(result1.outputs).sort()).toEqual(
      Object.keys(result2.outputs).sort(),
    );

    // add_on_override should be structurally identical
    expect(result1.add_on_override).toEqual(result2.add_on_override);
  });
});
