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

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import type {
  LinkTypeBlockDataV2,
  ObjectTypeBlockDataV2,
  PropertyType,
  PropertyTypeMappingInfo,
  Type,
} from "@osdk/client.unstable";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import {
  generateBackingDatasetBlockResult,
  generateBackingDatasetBlockResultForLink,
  getNonEditOnlyProperties,
  propertyTypeToSchemaType,
  typeToFieldSchema,
} from "./generateBackingDataset.js";

function makePropertyType(
  apiName: string,
  type: Type,
  rid: string
): PropertyType {
  return {
    apiName,
    dataConstraints: undefined,
    displayMetadata: {
      description: undefined,
      displayName: apiName,
      visibility: "NORMAL",
    },
    id: apiName,
    indexedForSearch: false,
    rid,
    sharedPropertyTypeRid: undefined,
    status: { type: "active", active: {} },
    type,
    typeClasses: [],
    valueType: undefined,
  };
}

const STRING_PROPERTY_TYPE: Type = {
  type: "string",
  string: { isLongText: true, supportsExactMatching: true },
};

const INTEGER_PROPERTY_TYPE: Type = { type: "integer", integer: {} };

function createObjectTypeBlockData(
  overrides: {
    apiName?: string;
    properties?: Array<{ apiName: string; type: Type; editOnly?: boolean }>;
  } = {}
): ObjectTypeBlockDataV2 {
  const apiName = overrides.apiName ?? "TestObject";
  const props = overrides.properties ?? [
    {
      apiName: "id",
      type: STRING_PROPERTY_TYPE,
    },
    { apiName: "count", type: INTEGER_PROPERTY_TYPE },
  ];

  const propertyTypes: Record<string, PropertyType> = {};
  const propertyMapping: Record<string, PropertyTypeMappingInfo> = {};

  for (const prop of props) {
    const rid = `ri.ontology-metadata.temp.property-type.${apiName}.${prop.apiName}`;
    propertyTypes[rid] = makePropertyType(prop.apiName, prop.type, rid);
    propertyMapping[rid] = prop.editOnly
      ? { type: "editOnly", editOnly: {} }
      : {
          type: "column",
          column: prop.apiName,
        };
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
  };
}

describe("propertyTypeToSchemaType", () => {
  it.each([
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
  ] as const)("maps '%s' to '%s'", (input, expected) => {
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
      /Unsupported property type "unknownType".*empty backing datasource/u
    );
    expect(() => propertyTypeToSchemaType({ type: "geopoint" })).toThrow(
      /Unsupported property type "geopoint".*empty backing datasource/u
    );
  });
});

const DECIMAL_PROPERTY_TYPE: Type = {
  type: "decimal",
  decimal: { precision: 10, scale: 2 },
};

function makeArrayType(subtype: Type): Type {
  return { type: "array", array: { reducers: [], subtype } };
}

function makeStructType(
  fields: Array<{ apiName: string; fieldType: Type }>
): Type {
  return {
    type: "struct",
    struct: {
      structFields: fields.map((f) => ({
        aliases: [],
        apiName: f.apiName,
        displayMetadata: { displayName: f.apiName },
        fieldType: f.fieldType,
        structFieldRid: `ri.struct-field.${f.apiName}`,
        typeClasses: [],
      })),
    },
  };
}

describe("typeToFieldSchema", () => {
  it("builds a primitive field schema with the given name", () => {
    expect(typeToFieldSchema(STRING_PROPERTY_TYPE, "id")).toEqual({
      type: "STRING",
      name: "id",
      nullable: null,
      userDefinedTypeClass: null,
      customMetadata: {},
      arraySubtype: null,
      precision: null,
      scale: null,
      mapKeyType: null,
      mapValueType: null,
      subSchemas: null,
    });
  });

  it("defaults name to null when omitted", () => {
    expect(typeToFieldSchema(STRING_PROPERTY_TYPE).name).toBeNull();
  });

  it("populates precision and scale for decimal", () => {
    const schema = typeToFieldSchema(DECIMAL_PROPERTY_TYPE, "amount");
    expect(schema.type).toBe("DECIMAL");
    expect(schema.precision).toBe(10);
    expect(schema.scale).toBe(2);
  });

  it("describes array elements via arraySubtype with a null name", () => {
    const schema = typeToFieldSchema(
      makeArrayType(STRING_PROPERTY_TYPE),
      "tags"
    );
    expect(schema.type).toBe("ARRAY");
    expect(schema.subSchemas).toBeNull();
    expect(schema.arraySubtype).toEqual({
      type: "STRING",
      name: null,
      nullable: null,
      userDefinedTypeClass: null,
      customMetadata: {},
      arraySubtype: null,
      precision: null,
      scale: null,
      mapKeyType: null,
      mapValueType: null,
      subSchemas: null,
    });
  });

  it("describes struct fields via named subSchemas", () => {
    const schema = typeToFieldSchema(
      makeStructType([
        { apiName: "a", fieldType: STRING_PROPERTY_TYPE },
        { apiName: "b", fieldType: INTEGER_PROPERTY_TYPE },
      ]),
      "info"
    );
    expect(schema.type).toBe("STRUCT");
    expect(schema.arraySubtype).toBeNull();
    expect(schema.subSchemas?.map((s) => [s.name, s.type])).toEqual([
      ["a", "STRING"],
      ["b", "INTEGER"],
    ]);
  });

  it("recurses through nested struct/array combinations", () => {
    // struct field that is itself an array
    const structOfArray = typeToFieldSchema(
      makeStructType([
        { apiName: "items", fieldType: makeArrayType(INTEGER_PROPERTY_TYPE) },
      ]),
      "info"
    );
    const itemsField = structOfArray.subSchemas?.[0];
    expect(itemsField?.name).toBe("items");
    expect(itemsField?.type).toBe("ARRAY");
    expect(itemsField?.arraySubtype?.type).toBe("INTEGER");
    expect(itemsField?.arraySubtype?.name).toBeNull();

    // array whose element is a struct: element name is null, inner fields keep names
    const arrayOfStruct = typeToFieldSchema(
      makeArrayType(
        makeStructType([{ apiName: "x", fieldType: STRING_PROPERTY_TYPE }])
      ),
      "rows"
    );
    expect(arrayOfStruct.arraySubtype?.name).toBeNull();
    expect(arrayOfStruct.arraySubtype?.type).toBe("STRUCT");
    expect(arrayOfStruct.arraySubtype?.subSchemas?.[0].name).toBe("x");
  });
});

describe("getNonEditOnlyProperties", () => {
  it("returns all properties when none are edit-only", () => {
    const blockData = createObjectTypeBlockData();
    const props = getNonEditOnlyProperties(blockData);
    expect(props).toHaveLength(2);
    expect(props.map((p) => p.apiName)).toEqual(["id", "count"]);
  });

  it("excludes edit-only properties", () => {
    const blockData = createObjectTypeBlockData({
      properties: [
        { apiName: "id", type: STRING_PROPERTY_TYPE },
        { apiName: "secret", type: STRING_PROPERTY_TYPE, editOnly: true },
        { apiName: "count", type: INTEGER_PROPERTY_TYPE },
      ],
    });
    const props = getNonEditOnlyProperties(blockData);
    expect(props).toHaveLength(2);
    expect(props.map((p) => p.apiName)).toEqual(["id", "count"]);
  });
});

describe("generateBackingDatasetBlockResult", () => {
  let buildDir: string;

  beforeEach(async () => {
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "backing-ds-test-")
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
      "TestObject-backing-ds"
    );
    expect(dsShape.type).toBe("DATASET");
    expect(
      (dsShape.buildRequirements as Record<string, unknown>).isBuildable
    ).toBe(false);
    expect(dsShape.schema).toHaveLength(2);

    // datasourceColumn outputs
    const idColKey = ReadableIdGenerator.getForDatasetColumnOutput(
      "TestObject",
      "id"
    );
    const countColKey = ReadableIdGenerator.getForDatasetColumnOutput(
      "TestObject",
      "count"
    );
    expect(result.outputs[idColKey]).toBeDefined();
    expect(result.outputs[idColKey].type).toBe("datasourceColumn");
    const idCol = result.outputs[idColKey] as unknown as Record<
      string,
      unknown
    >;
    expect(
      (idCol.datasourceColumn as Record<string, unknown>).about
    ).toHaveProperty("fallbackTitle", "id");
    expect(result.outputs[countColKey]).toBeDefined();
    expect(result.outputs[countColKey].type).toBe("datasourceColumn");
    const countCol = result.outputs[countColKey] as unknown as Record<
      string,
      unknown
    >;
    expect(
      (countCol.datasourceColumn as Record<string, unknown>).about
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
        "utf-8"
      )
    );
    expect(schema.fieldSchemaList).toHaveLength(2);
    expect(schema.fieldSchemaList[0].name).toBe("id");
    expect(schema.fieldSchemaList[0].type).toBe("STRING");
    expect(schema.fieldSchemaList[1].name).toBe("count");
    expect(schema.fieldSchemaList[1].type).toBe("INTEGER");
    expect(schema.dataFrameReaderClass).toBe(
      "com.palantir.foundry.spark.input.ParquetDataFrameReader"
    );

    // block-data.json
    const blockDataContents = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "block-data.json"),
        "utf-8"
      )
    );
    expect(blockDataContents.type).toBe("v1");
    expect(blockDataContents.v1.hasSchema).toBe(true);
    const columnValues = Object.values(blockDataContents.v1.columns);
    expect(columnValues).toContain("id");
    expect(columnValues).toContain("count");

    // VERSION
    const version = await fs.promises.readFile(
      path.join(result.block_data_directory, "VERSION"),
      "utf-8"
    );
    expect(version).toBe('"1"');

    // files.zip
    const zipBuffer = await fs.promises.readFile(
      path.join(result.block_data_directory, "files.zip")
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
        { apiName: "id", type: STRING_PROPERTY_TYPE },
        { apiName: "secret", type: STRING_PROPERTY_TYPE, editOnly: true },
        { apiName: "count", type: INTEGER_PROPERTY_TYPE },
      ],
    });

    const result = await generateBackingDatasetBlockResult(blockData, buildDir);

    // Outputs: tabularDatasource + 2 columns (id and count), not 3
    expect(Object.keys(result.outputs)).toHaveLength(3);
    const secretKey = ReadableIdGenerator.getForDatasetColumnOutput(
      "TestObject",
      "secret"
    );
    expect(result.outputs[secretKey]).toBeUndefined();

    // schema.json should also exclude editOnly
    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8"
      )
    );
    expect(schema.fieldSchemaList).toHaveLength(2);
    expect(schema.fieldSchemaList.map((f: { name: string }) => f.name)).toEqual(
      ["id", "count"]
    );
  });
});

function createLinkTypeBlockData(
  overrides: {
    linkApiName?: string;
    objectTypeRidA?: string;
    objectTypeRidB?: string;
    pkRidA?: string;
    pkRidB?: string;
    columnA?: string;
    columnB?: string;
  } = {}
): LinkTypeBlockDataV2 {
  const objectTypeRidA =
    overrides.objectTypeRidA ?? "ri.ontology-metadata.temp.object-type.ObjA";
  const objectTypeRidB =
    overrides.objectTypeRidB ?? "ri.ontology-metadata.temp.object-type.ObjB";
  const pkRidA =
    overrides.pkRidA ?? "ri.ontology-metadata.temp.property-type.ObjA.fooId";
  const pkRidB =
    overrides.pkRidB ?? "ri.ontology-metadata.temp.property-type.ObjB.barId";
  const columnA = overrides.columnA ?? "fooId";
  const columnB = overrides.columnB ?? "barId";

  return {
    linkType: {
      definition: {
        type: "manyToMany",
        manyToMany: {
          objectTypeRidA,
          objectTypeRidB,
          objectTypeAToBLinkMetadata: {
            displayMetadata: { displayName: "A to B" },
            typeClasses: [],
          },
          objectTypeBToALinkMetadata: {
            displayMetadata: { displayName: "B to A" },
            typeClasses: [],
          },
          peeringMetadata: undefined,
          objectTypeAPrimaryKeyPropertyMapping: { [pkRidA]: pkRidA },
          objectTypeBPrimaryKeyPropertyMapping: { [pkRidB]: pkRidB },
        },
      },
      rid: "ri.ontology-metadata.temp.link-type.test",
      id: overrides.linkApiName ?? "foo-to-bar",
      status: { type: "active", active: {} },
      redacted: false,
    },
    datasources: [
      {
        rid: "ri.ontology.main.datasource.test",
        datasource: {
          type: "dataset",
          dataset: {
            datasetRid: "ri.foundry.main.dataset.link-test",
            branchId: "main",
            writebackDatasetRid: undefined,
            objectTypeAPrimaryKeyMapping: { [pkRidA]: columnA },
            objectTypeBPrimaryKeyMapping: { [pkRidB]: columnB },
          },
        },
        editsConfiguration: { onlyAllowPrivilegedEdits: false },
        redacted: false,
      },
    ],
    entityMetadata: undefined,
  } as unknown as LinkTypeBlockDataV2;
}

function createObjectTypesForLink(
  overrides: {
    objectTypeRidA?: string;
    objectTypeRidB?: string;
    pkRidA?: string;
    pkRidB?: string;
    pkTypeA?: Type;
    pkTypeB?: Type;
  } = {}
): Record<string, ObjectTypeBlockDataV2> {
  const objectTypeRidA =
    overrides.objectTypeRidA ?? "ri.ontology-metadata.temp.object-type.ObjA";
  const objectTypeRidB =
    overrides.objectTypeRidB ?? "ri.ontology-metadata.temp.object-type.ObjB";
  const pkRidA =
    overrides.pkRidA ?? "ri.ontology-metadata.temp.property-type.ObjA.fooId";
  const pkRidB =
    overrides.pkRidB ?? "ri.ontology-metadata.temp.property-type.ObjB.barId";
  const pkTypeA = overrides.pkTypeA ?? STRING_PROPERTY_TYPE;
  const pkTypeB = overrides.pkTypeB ?? STRING_PROPERTY_TYPE;

  return {
    [objectTypeRidA]: {
      objectType: {
        apiName: "ObjA",
        propertyTypes: {
          [pkRidA]: makePropertyType("fooId", pkTypeA, pkRidA),
        },
        primaryKeys: [pkRidA],
      },
    } as unknown as ObjectTypeBlockDataV2,
    [objectTypeRidB]: {
      objectType: {
        apiName: "ObjB",
        propertyTypes: {
          [pkRidB]: makePropertyType("barId", pkTypeB, pkRidB),
        },
        primaryKeys: [pkRidB],
      },
    } as unknown as ObjectTypeBlockDataV2,
  };
}

describe("generateBackingDatasetBlockResultForLink", () => {
  let buildDir: string;

  beforeEach(async () => {
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "link-backing-ds-test-")
    );
  });

  afterEach(async () => {
    await fs.promises.rm(buildDir, { recursive: true, force: true });
  });

  it("generates correct result and files for a m2m link", async () => {
    const linkBlockData = createLinkTypeBlockData();
    const objectTypes = createObjectTypesForLink();
    const linkApiName = "fooToBar";

    const result = await generateBackingDatasetBlockResultForLink(
      linkBlockData,
      linkApiName,
      objectTypes,
      buildDir
    );

    // Block metadata
    expect(result.block_identifier).toBe("fooToBar-link-backing-ds");
    expect(result.block_type).toBe("STATIC_DATASET");
    expect(result.input_mapping_entries).toEqual([]);

    const datasetName = `link.${linkApiName}`;

    // tabularDatasource output
    const dsKey = ReadableIdGenerator.getForDatasetOutput(datasetName);
    expect(result.outputs[dsKey]).toBeDefined();
    expect(result.outputs[dsKey].type).toBe("tabularDatasource");

    // datasourceColumn outputs (2 columns)
    const colAKey = ReadableIdGenerator.getForDatasetColumnOutput(
      datasetName,
      "fooId"
    );
    const colBKey = ReadableIdGenerator.getForDatasetColumnOutput(
      datasetName,
      "barId"
    );
    expect(result.outputs[colAKey]).toBeDefined();
    expect(result.outputs[colAKey].type).toBe("datasourceColumn");
    expect(result.outputs[colBKey]).toBeDefined();
    expect(result.outputs[colBKey].type).toBe("datasourceColumn");

    // Total outputs: 1 tabularDatasource + 2 datasourceColumn
    expect(Object.keys(result.outputs)).toHaveLength(3);

    // compassResource input
    const compassKey =
      `${linkApiName}-link-backing-ds-compass-resource` as ReadableId;
    expect(result.inputs[compassKey]).toBeDefined();
    expect(result.inputs[compassKey].type).toBe("compassResource");

    // schema.json
    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8"
      )
    );
    expect(schema.fieldSchemaList).toHaveLength(2);
    expect(schema.fieldSchemaList[0].name).toBe("fooId");
    expect(schema.fieldSchemaList[0].type).toBe("STRING");
    expect(schema.fieldSchemaList[1].name).toBe("barId");
    expect(schema.fieldSchemaList[1].type).toBe("STRING");

    // block-data.json
    const blockDataContents = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "block-data.json"),
        "utf-8"
      )
    );
    expect(blockDataContents.type).toBe("v1");
    expect(blockDataContents.v1.hasSchema).toBe(true);
    const columnValues = Object.values(blockDataContents.v1.columns);
    expect(columnValues).toContain("fooId");
    expect(columnValues).toContain("barId");

    // VERSION
    const version = await fs.promises.readFile(
      path.join(result.block_data_directory, "VERSION"),
      "utf-8"
    );
    expect(version).toBe('"1"');

    // files.zip
    const zipBuffer = await fs.promises.readFile(
      path.join(result.block_data_directory, "files.zip")
    );
    expect(zipBuffer.length).toBe(22);
  });

  it("handles collision columns with _from/_to suffixes", async () => {
    const linkBlockData = createLinkTypeBlockData({
      columnA: "id_from",
      columnB: "id_to",
    });
    const objectTypes = createObjectTypesForLink();
    const linkApiName = "selfLink";

    const result = await generateBackingDatasetBlockResultForLink(
      linkBlockData,
      linkApiName,
      objectTypes,
      buildDir
    );

    const datasetName = `link.${linkApiName}`;

    const colAKey = ReadableIdGenerator.getForDatasetColumnOutput(
      datasetName,
      "id_from"
    );
    const colBKey = ReadableIdGenerator.getForDatasetColumnOutput(
      datasetName,
      "id_to"
    );
    expect(result.outputs[colAKey]).toBeDefined();
    expect(result.outputs[colBKey]).toBeDefined();

    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8"
      )
    );
    expect(schema.fieldSchemaList[0].name).toBe("id_from");
    expect(schema.fieldSchemaList[1].name).toBe("id_to");
  });

  it("resolves column types from referenced object types", async () => {
    const linkBlockData = createLinkTypeBlockData();
    const objectTypes = createObjectTypesForLink({
      pkTypeA: STRING_PROPERTY_TYPE,
      pkTypeB: INTEGER_PROPERTY_TYPE,
    });
    const linkApiName = "typedLink";

    const result = await generateBackingDatasetBlockResultForLink(
      linkBlockData,
      linkApiName,
      objectTypes,
      buildDir
    );

    const schema = JSON.parse(
      await fs.promises.readFile(
        path.join(result.block_data_directory, "schema.json"),
        "utf-8"
      )
    );
    expect(schema.fieldSchemaList[0].type).toBe("STRING");
    expect(schema.fieldSchemaList[1].type).toBe("INTEGER");
  });
});
