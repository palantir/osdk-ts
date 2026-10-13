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

import type { ValueTypeBlockData } from "@osdk/client.unstable";
import type { InputShape } from "@osdk/client.unstable/api";
import {
  defineValueType,
  type OntologyDefinition,
  OntologyEntityTypeEnum,
  type ValueTypeDefinitionVersion,
} from "@osdk/maker";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../api/defineOntologyV2.js";
import type {
  ConvertedValueTypeBlockData,
  ValueTypeDependency,
} from "../conversion/toMarketplace/convertValueTypeToWireBlockData.js";
import { simulatePackageDependency } from "../testUtils/simulatePackageDependency.js";
import {
  OntologyRidGeneratorImpl,
  ReadableIdGenerator,
} from "../util/generateRid.js";
import {
  generateValueTypeBlockResults,
  getValueTypeInternalMappings,
} from "./generateValueTypeBlockResults.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

const emptyOntology: OntologyDefinition = {
  ACTION_TYPE: {},
  INTERFACE_TYPE: {},
  LINK_TYPE: {},
  OBJECT_TYPE: {},
  SHARED_PROPERTY_TYPE: {},
  VALUE_TYPE: {},
};

function makeEntry(apiName: string, versions: string[]): ValueTypeBlockData {
  return {
    metadata: {
      apiName,
      displayMetadata: {
        displayName: `Display ${apiName}`,
        description: `Description for ${apiName}`,
      },
      status: { type: "active", active: {} },
      baseType: { type: "integer", integer: {} },
    },
    versions: versions.map((v) => ({
      version: v,
      baseType: { type: "string", string: {} },
      constraints: [],
      exampleValues: [],
    })),
  };
}

function converted(
  blockData: ValueTypeBlockData,
  dependencies: ValueTypeDependency[] = [],
): ConvertedValueTypeBlockData {
  return { blockData, dependencies };
}

function makeDefinition(
  blockData: ValueTypeBlockData,
  version: string,
): ValueTypeDefinitionVersion {
  const packagedVersion = blockData.versions.find(
    (candidate) => candidate.version === version,
  );
  if (packagedVersion === undefined) {
    throw new Error(`Missing value type version ${version}`);
  }
  return {
    apiName: blockData.metadata.apiName,
    packageNamespace: "com.palantir",
    displayMetadata: blockData.metadata.displayMetadata,
    status: blockData.metadata.status,
    version,
    baseType: packagedVersion.baseType,
    constraints: [],
    exampleValues: packagedVersion.exampleValues,
    __type: OntologyEntityTypeEnum.VALUE_TYPE,
  };
}

describe("generateValueTypeBlockResults", () => {
  let buildDir: string;

  beforeEach(() => {
    buildDir = fs.mkdtempSync(path.join(os.tmpdir(), "vt-test-"));
  });

  afterEach(() => {
    fs.rmSync(buildDir, { recursive: true, force: true });
  });

  it("returns empty array for empty value types", async () => {
    const results = await generateValueTypeBlockResults(
      [],
      buildDir,
      undefined,
    );
    expect(results).toEqual([]);
  });

  it("generates one BlockGeneratorResult per value type", async () => {
    const data = [
      makeEntry("enumerated", ["0.0.1"]),
      makeEntry("currency", ["1.0.0"]),
    ];

    const results = await generateValueTypeBlockResults(
      data.map((blockData) => converted(blockData)),
      buildDir,
      undefined,
    );

    expect(results).toHaveLength(2);
    expect(results[0].block_identifier).toBe("value-type-enumerated");
    expect(results[1].block_identifier).toBe("value-type-currency");
    expect(results[0].block_type).toBe("VALUE_TYPE");
    expect(results[1].block_type).toBe("VALUE_TYPE");
  });

  it("generates output shapes for each version", async () => {
    const data = [makeEntry("enumerated", ["0.0.1", "0.0.2"])];

    const results = await generateValueTypeBlockResults(
      data.map((blockData) => converted(blockData)),
      buildDir,
      undefined,
    );

    const outputs = results[0].outputs;
    const outputKeys = Object.keys(outputs);
    expect(outputKeys).toHaveLength(2);
    expect(outputKeys).toContain(
      ReadableIdGenerator.getForProducedValueType("enumerated", "0.0.1"),
    );
    expect(outputKeys).toContain(
      ReadableIdGenerator.getForProducedValueType("enumerated", "0.0.2"),
    );

    const shape = Object.values(outputs)[0];
    expect(shape.type).toBe("valueType");
  });

  it("has empty inputs, mappings, and recommendations", async () => {
    const data = [makeEntry("enumerated", ["0.0.1"])];

    const results = await generateValueTypeBlockResults(
      data.map((blockData) => converted(blockData)),
      buildDir,
      undefined,
    );

    expect(results[0].inputs).toEqual({});
    expect(results[0].input_mapping_entries).toEqual([]);
    expect(results[0].external_recommendations).toEqual([]);
    expect(results[0].input_shape_metadata).toEqual({});
  });

  it("generates inputs and mappings for array struct field value types", async () => {
    const classification = makeEntry("classification", ["1.0.0"]);
    const classifiedRecord = makeEntry("classifiedRecord", ["1.0.0"]);
    const reference = new OntologyRidGeneratorImpl(
      emptyOntology,
    ).generateRidForValueType("classification", "1.0.0");
    classifiedRecord.versions[0].baseType = {
      type: "array",
      array: {
        elementType: {
          type: "structV2",
          structV2: {
            fields: [
              {
                identifier: "classification",
                baseType: { type: "string", string: {} },
              },
            ],
          },
        },
      },
    };
    classifiedRecord.versions[0].constraints = [
      {
        constraint: {
          failureMessage: undefined,
          constraint: {
            type: "array",
            array: {
              size: undefined,
              elementsUnique: undefined,
              elementsConstraint: {
                type: "structV2",
                structV2: {
                  elementConstraints: { classification: reference },
                },
              },
            },
          },
        },
      },
    ];

    const dependency: ValueTypeDependency = {
      reference,
      target: makeDefinition(classification, "1.0.0"),
      baseType: { type: "string", string: {} },
    };
    const results = await generateValueTypeBlockResults(
      [converted(classification), converted(classifiedRecord, [dependency])],
      buildDir,
      undefined,
    );

    const result = results.find(
      ({ block_identifier }) =>
        block_identifier === "value-type-classifiedRecord",
    );
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      "classification",
      "1.0.0",
    );
    const producedId = ReadableIdGenerator.getForProducedValueType(
      "classification",
      "1.0.0",
    );
    if (reference.versionId === undefined) {
      throw new Error("Temporary value type reference is missing its version");
    }
    expect(result?.inputs[consumedId]).toMatchObject({ type: "valueType" });
    expect(result?.input_mapping_entries).toContainEqual({
      input: consumedId,
      output: producedId,
    });
    expect(result?.add_on_override).toMatchObject({
      idToBlockShapeId: {
        [reference.versionId]: toBlockShapeId(consumedId),
      },
    });
  });

  it("preserves distinct inputs for value types at the same semantic version", async () => {
    const authored = await defineOntologyV2("com.palantir.", () => {
      const classification = defineValueType({
        apiName: "classification",
        displayName: "Classification",
        type: { type: "string" },
        version: "1.0.0",
      });
      const countryCode = defineValueType({
        apiName: "countryCode",
        displayName: "Country Code",
        type: { type: "string" },
        version: "1.0.0",
      });
      defineValueType({
        apiName: "classifiedAddress",
        displayName: "Classified Address",
        type: {
          type: {
            type: "struct",
            fields: [
              { identifier: "classification", baseType: "string" },
              { identifier: "countryCode", baseType: "string" },
            ],
          },
          constraints: [
            {
              constraint: {
                elementConstraints: { classification, countryCode },
              },
            },
          ],
        },
        version: "1.0.0",
      });
    });

    const classifiedAddress = authored.valueTypeBlocks.find(
      ({ blockData }) => blockData.metadata.apiName === "classifiedAddress",
    );
    if (classifiedAddress === undefined) {
      throw new Error("Classified address block was not generated");
    }
    const versionIds = classifiedAddress.dependencies.map(
      ({ reference }) => reference.versionId,
    );
    expect(new Set(versionIds).size).toBe(2);

    const results = await generateValueTypeBlockResults(
      authored.valueTypeBlocks,
      buildDir,
      undefined,
    );
    const result = results.find(
      ({ block_identifier }) =>
        block_identifier === "value-type-classifiedAddress",
    );
    expect(result).toBeDefined();
    const addOn = result?.add_on_override as
      | { idToBlockShapeId: Record<string, string> }
      | undefined;
    for (const dependency of classifiedAddress.dependencies) {
      if (dependency.reference.versionId === undefined) {
        throw new Error(
          "Temporary value type reference is missing its version",
        );
      }
      const consumedId = ReadableIdGenerator.getForConsumedValueType(
        dependency.target.apiName,
        dependency.target.version,
      );
      expect(addOn?.idToBlockShapeId[dependency.reference.versionId]).toBe(
        toBlockShapeId(consumedId),
      );
    }
  });

  it("recommends an upstream Maker package for an imported value type", async () => {
    const { downstream } = await simulatePackageDependency(
      () => ({
        classification: defineValueType({
          apiName: "classification",
          displayName: "Classification",
          type: { type: "string" },
          version: "1.0.0",
        }),
      }),
      ({ classification }) => {
        defineValueType({
          apiName: "classifiedRecord",
          displayName: "Classified Record",
          type: {
            type: {
              type: "struct",
              fields: [{ identifier: "classification", baseType: "string" }],
            },
            constraints: [
              {
                constraint: {
                  elementConstraints: { classification },
                },
              },
            ],
          },
          version: "1.0.0",
        });
      },
    );

    const [result] = await generateValueTypeBlockResults(
      downstream.valueTypeBlocks,
      buildDir,
      undefined,
    );

    expect(result.external_recommendations).toEqual([
      {
        upstreamPackageName: "upstream",
        upstreamVersionCompatibility: { from: "0.0.0", until: "x.x.x" },
        mappings: [
          {
            targetInputReadableId: ReadableIdGenerator.getForConsumedValueType(
              "classification",
              "1.0.0",
            ),
            upstreamOutputReadableId:
              ReadableIdGenerator.getForProducedValueType(
                "classification",
                "1.0.0",
              ),
          },
        ],
      },
    ]);
  });

  it.each([undefined, "123e4567-e89b-12d3-a456-426614174000"])(
    "materializes produced value type identities with randomness key %s",
    async (randomnessKey) => {
      const entry = makeEntry("enumerated", ["0.0.1", "0.0.2"]);

      const [result] = await generateValueTypeBlockResults(
        [converted(entry)],
        buildDir,
        randomnessKey,
      );

      const firstOutput = ReadableIdGenerator.getForProducedValueType(
        "enumerated",
        "0.0.1",
      );
      const secondOutput = ReadableIdGenerator.getForProducedValueType(
        "enumerated",
        "0.0.2",
      );
      expect(result.add_on_override).toEqual({
        idToBlockShapeId: {
          [firstOutput]: toBlockShapeId(firstOutput, randomnessKey),
          [secondOutput]: toBlockShapeId(secondOutput, randomnessKey),
        },
        idToInputGroupId: {},
        outputToLocationInput: {},
      });
    },
  );

  it("writes value-types.json with latest version baseType in metadata", async () => {
    const entry = makeEntry("enumerated", ["0.0.1", "0.0.2"]);
    entry.versions[1].baseType = { type: "integer", integer: {} };

    const results = await generateValueTypeBlockResults(
      [converted(entry)],
      buildDir,
      undefined,
    );

    const blockDataPath = path.join(
      results[0].block_data_directory,
      "value-types.json",
    );
    const written = JSON.parse(fs.readFileSync(blockDataPath, "utf-8"));
    expect(written.metadata.baseType).toEqual({
      type: "integer",
      integer: {},
    });
    expect(written.versions).toHaveLength(2);
  });
});

describe("getValueTypeInternalMappings", () => {
  it("returns empty for no produced value types", () => {
    const mappings = getValueTypeInternalMappings([], new Map());
    expect(mappings).toEqual([]);
  });

  it("returns empty when produced value type is not consumed", () => {
    const mappings = getValueTypeInternalMappings(
      [makeEntry("enumerated", ["0.0.1"])],
      new Map(),
    );
    expect(mappings).toEqual([]);
  });

  it("creates mapping when produced value type is also consumed", () => {
    const inputShapes = new Map<string, InputShape>();
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      "enumerated",
      "0.0.1",
    );
    inputShapes.set(consumedId, {
      type: "valueType",
      valueType: {
        about: {
          fallbackTitle: "",
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        baseType: {
          type: "primitive",
          primitive: { type: "string", string: {} as any },
        },
      },
    });

    const mappings = getValueTypeInternalMappings(
      [makeEntry("enumerated", ["0.0.1"])],
      inputShapes,
    );

    expect(mappings).toHaveLength(1);
    expect(mappings[0].input).toBe(consumedId);
    expect(mappings[0].output).toBe(
      ReadableIdGenerator.getForProducedValueType("enumerated", "0.0.1"),
    );
  });

  it("creates mappings for multiple versions", () => {
    const inputShapes = new Map<string, InputShape>();
    for (const v of ["0.0.1", "0.0.2"]) {
      inputShapes.set(
        ReadableIdGenerator.getForConsumedValueType("enumerated", v),
        {
          type: "valueType",
          valueType: {
            about: {
              fallbackTitle: "",
              fallbackDescription: "",
              localizedTitle: {},
              localizedDescription: {},
            },
            baseType: {
              type: "primitive",
              primitive: { type: "string", string: {} as any },
            },
          },
        },
      );
    }

    const mappings = getValueTypeInternalMappings(
      [makeEntry("enumerated", ["0.0.1", "0.0.2"])],
      inputShapes,
    );

    expect(mappings).toHaveLength(2);
  });
});
