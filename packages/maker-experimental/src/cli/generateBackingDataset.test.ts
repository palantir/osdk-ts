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

import type {
  ObjectTypeBlockDataV2,
  PropertyType,
  PropertyTypeMappingInfo,
} from "@osdk/client.unstable";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import {
  generateBackingDatasetBlockResult,
  getNonEditOnlyProperties,
  propertyTypeToSchemaType,
} from "./generateBackingDataset.js";

function makePropertyType(
  apiName: string,
  typeStr: string,
  rid: string,
): PropertyType {
  return {
    apiName,
    dataConstraints: undefined,
    displayMetadata: {
      description: undefined,
      displayName: apiName,
    },
    id: apiName,
    indexedForSearch: false,
    rid,
    sharedPropertyTypeRid: undefined,
    status: { type: "active", active: {} },
    type: { type: typeStr, [typeStr]: {} },
    typeClasses: [],
    valueType: undefined,
  } as unknown as PropertyType;
}

function createObjectTypeBlockData(
  overrides: {
    apiName?: string;
    properties?: Array<{ apiName: string; type: string; editOnly?: boolean }>;
  } = {},
): ObjectTypeBlockDataV2 {
  const apiName = overrides.apiName ?? "TestObject";
  const props = overrides.properties ?? [
    { apiName: "id", type: "string" },
    { apiName: "count", type: "integer" },
  ];

  const propertyTypes: Record<string, PropertyType> = {};
  const propertyMapping: Record<string, PropertyTypeMappingInfo> = {};

  for (const prop of props) {
    const rid =
      `ri.ontology-metadata.temp.property-type.${apiName}.${prop.apiName}`;
    propertyTypes[rid] = makePropertyType(prop.apiName, prop.type, rid);
    propertyMapping[rid] = prop.editOnly
      ? { type: "editOnly", editOnly: {} } as PropertyTypeMappingInfo
      : {
        type: "column",
        column: prop.apiName,
      } as PropertyTypeMappingInfo;
  }

  return {
    objectType: {
      apiName,
      displayMetadata: {
        description: undefined,
        displayName: apiName,
        groupDisplayName: undefined,
        icon: {
          type: "blueprint",
          blueprint: { locator: "cube", color: "#2D72D2" },
        },
        pluralDisplayName: `${apiName}s`,
        visibility: "NORMAL",
      },
      primaryKeys: [],
      propertyTypes,
      titlePropertyTypeRid: "",
      rid: `ri.ontology-metadata.temp.object-type.${apiName}`,
      id: apiName.toLowerCase(),
      status: { type: "active", active: {} },
      redacted: false,
      implementsInterfaces: [],
      implementsInterfaces2: [],
      allImplementsInterfaces: {},
      traits: { workflowObjectTypeTraits: {} },
      typeGroups: [],
    },
    datasources: [
      {
        rid: `ri.ontology.main.datasource.${apiName}`,
        datasource: {
          type: "datasetV2",
          datasetV2: {
            branchId: "main",
            datasetRid: `ri.foundry.main.dataset.${apiName}`,
            propertyMapping,
          },
        },
      },
    ],
    entityMetadata: undefined,
    propertySecurityGroupPackagingVersion: undefined,
    schemaMigrations: undefined,
    writebackDatasets: [],
  } as unknown as ObjectTypeBlockDataV2;
}

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

describe("getNonEditOnlyProperties", () => {
  it("returns all properties when none are edit-only", () => {
    const blockData = createObjectTypeBlockData();
    const props = getNonEditOnlyProperties(blockData);
    expect(props).toHaveLength(2);
    expect(props.map(p => p.apiName)).toEqual(["id", "count"]);
  });

  it("excludes edit-only properties", () => {
    const blockData = createObjectTypeBlockData({
      properties: [
        { apiName: "id", type: "string" },
        { apiName: "secret", type: "string", editOnly: true },
        { apiName: "count", type: "integer" },
      ],
    });
    const props = getNonEditOnlyProperties(blockData);
    expect(props).toHaveLength(2);
    expect(props.map(p => p.apiName)).toEqual(["id", "count"]);
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

  it("generates correct result and files for default block data", async () => {
    const blockData = createObjectTypeBlockData();
    const result = await generateBackingDatasetBlockResult(blockData, buildDir);

    // Block metadata
    expect(result.block_identifier).toBe("TestObject-backing-ds");
    expect(result.block_type).toBe("STATIC_DATASET");
    expect(result.input_mapping_entries).toEqual([]);

    // tabularDatasource output
    const dsKey = ReadableIdGenerator.getForDatasetOutput("TestObject");
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

    // datasourceColumn outputs
    const idColKey = ReadableIdGenerator.getForDatasetColumnOutput(
      "TestObject",
      "id",
    );
    const countColKey = ReadableIdGenerator.getForDatasetColumnOutput(
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

    // compassResource input
    const compassKey = "TestObject-backing-ds-compass-resource" as ReadableId;
    expect(result.inputs[compassKey]).toBeDefined();
    expect(result.inputs[compassKey].type).toBe("compassResource");

    // add_on_override
    expect(result.add_on_override).toBeDefined();
    const override = result.add_on_override as Record<string, unknown>;
    expect(override.idToBlockShapeId).toBeDefined();
    expect(override.idToInputGroupId).toEqual({});
    expect(override.outputToLocationInput).toBeDefined();

    // schema.json
    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8",
      ),
    );
    expect(schema.fieldSchemaList).toHaveLength(2);
    expect(schema.fieldSchemaList[0].name).toBe("id");
    expect(schema.fieldSchemaList[0].type).toBe("STRING");
    expect(schema.fieldSchemaList[1].name).toBe("count");
    expect(schema.fieldSchemaList[1].type).toBe("INTEGER");
    expect(schema.dataFrameReaderClass).toBe(
      "com.palantir.foundry.spark.input.ParquetDataFrameReader",
    );

    // block-data.json
    const blockDataContents = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "block-data.json"),
        "utf-8",
      ),
    );
    expect(blockDataContents.type).toBe("v1");
    expect(blockDataContents.v1.hasSchema).toBe(true);
    const columnValues = Object.values(blockDataContents.v1.columns);
    expect(columnValues).toContain("id");
    expect(columnValues).toContain("count");

    // VERSION
    const version = await fs.promises.readFile(
      path.join(result.block_data_directory, "VERSION"),
      "utf-8",
    );
    expect(version).toBe("\"1\"");

    // files.zip
    const zipBuffer = await fs.promises.readFile(
      path.join(result.block_data_directory, "files.zip"),
    );
    expect(zipBuffer.length).toBe(22);
    expect(zipBuffer[0]).toBe(0x50);
    expect(zipBuffer[1]).toBe(0x4b);
    expect(zipBuffer[2]).toBe(0x05);
    expect(zipBuffer[3]).toBe(0x06);
  });

  it("excludes editOnly properties from outputs and files", async () => {
    const blockData = createObjectTypeBlockData({
      properties: [
        { apiName: "id", type: "string" },
        { apiName: "secret", type: "string", editOnly: true },
        { apiName: "count", type: "integer" },
      ],
    });

    const result = await generateBackingDatasetBlockResult(blockData, buildDir);

    // Outputs: tabularDatasource + 2 columns (id and count), not 3
    expect(Object.keys(result.outputs)).toHaveLength(3);
    const secretKey = ReadableIdGenerator.getForDatasetColumnOutput(
      "TestObject",
      "secret",
    );
    expect(result.outputs[secretKey]).toBeUndefined();

    // schema.json should also exclude editOnly
    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8",
      ),
    );
    expect(schema.fieldSchemaList).toHaveLength(2);
    expect(schema.fieldSchemaList.map((f: { name: string }) => f.name)).toEqual(
      ["id", "count"],
    );
  });
});
