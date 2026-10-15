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
import { defineValueType, type ValueTypeDefinitionVersion } from "@osdk/maker";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../api/defineOntologyV2.js";
import type { ValueTypeDependency } from "../conversion/toMarketplace/convertValueTypeDataConstraints.js";
import type { ValueTypeBlockDataWithDependencies } from "../conversion/toMarketplace/convertValueTypeToWireBlockData.js";
import { simulatePackageDependency } from "../testUtils/simulatePackageDependency.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import {
  generateValueTypeBlockResults,
  getValueTypeInternalMappings,
} from "./generateValueTypeBlockResults.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

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
): ValueTypeBlockDataWithDependencies {
  return { blockData, dependencies };
}

function defineStringValueType(
  apiName: string,
  version = "1.0.0",
): ValueTypeDefinitionVersion {
  return defineValueType({
    apiName,
    displayName: apiName,
    type: { type: "string" },
    version,
  });
}

function getConvertedBlock(
  blocks: ValueTypeBlockDataWithDependencies[],
  apiName: string,
): ValueTypeBlockDataWithDependencies {
  const block = blocks.find(
    ({ blockData }) => blockData.metadata.apiName === apiName,
  );
  if (block === undefined) {
    throw new Error(`Missing converted value type block for ${apiName}`);
  }
  return block;
}

function getBlockResult(
  results: BlockGeneratorResult[],
  apiName: string,
): BlockGeneratorResult {
  const result = results.find(
    ({ block_identifier }) => block_identifier === `value-type-${apiName}`,
  );
  if (result === undefined) {
    throw new Error(`Missing generated value type block for ${apiName}`);
  }
  return result;
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

  it.each([undefined, "123e4567-e89b-12d3-a456-426614174000"])(
    "generates inputs and mappings for nested value types with randomness key %s",
    async (randomnessKey) => {
      const authored = await defineOntologyV2(
        "com.palantir.",
        () => {
          const classification = defineStringValueType("classification");
          defineValueType({
            apiName: "classifiedRecords",
            displayName: "Classified Records",
            type: {
              type: {
                type: "array",
                elementType: {
                  type: "struct",
                  fields: [
                    { identifier: "classification", baseType: "string" },
                  ],
                },
              },
              constraints: [
                {
                  constraint: {
                    size: undefined,
                    elementsUnique: undefined,
                    elementsConstraint: {
                      type: "structV2",
                      structV2: {
                        elementConstraints: { classification },
                      },
                    },
                  },
                },
              ],
            },
            version: "1.0.0",
          });
        },
        undefined,
        undefined,
        undefined,
        randomnessKey,
      );
      const convertedBlock = getConvertedBlock(
        authored.ontologyIr.valueTypes,
        "classifiedRecords",
      );
      expect(convertedBlock.dependencies).toHaveLength(1);
      const [dependency] = convertedBlock.dependencies;
      if (dependency.reference.versionId === undefined) {
        throw new Error(
          "Temporary value type reference is missing its version",
        );
      }

      const results = await generateValueTypeBlockResults(
        authored.ontologyIr.valueTypes,
        buildDir,
        randomnessKey,
      );
      const result = getBlockResult(results, "classifiedRecords");
      const consumedId = ReadableIdGenerator.getForConsumedValueType(
        "classification",
        "1.0.0",
      );
      const producedId = ReadableIdGenerator.getForProducedValueType(
        "classification",
        "1.0.0",
      );
      expect(result.inputs[consumedId]).toMatchObject({ type: "valueType" });
      expect(result.input_mapping_entries).toContainEqual({
        input: consumedId,
        output: producedId,
      });
      expect(result.add_on_override).toMatchObject({
        idToBlockShapeId: {
          [dependency.reference.versionId]: toBlockShapeId(
            consumedId,
            randomnessKey,
          ),
        },
      });
    },
  );

  it("preserves distinct inputs for value types at the same semantic version", async () => {
    const authored = await defineOntologyV2("com.palantir.", () => {
      const classification = defineStringValueType("classification");
      const countryCode = defineStringValueType("countryCode");
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

    const classifiedAddress = getConvertedBlock(
      authored.ontologyIr.valueTypes,
      "classifiedAddress",
    );
    const versionIds = classifiedAddress.dependencies.map(
      ({ reference }) => reference.versionId,
    );
    expect(new Set(versionIds).size).toBe(2);

    const results = await generateValueTypeBlockResults(
      authored.ontologyIr.valueTypes,
      buildDir,
      undefined,
    );
    const result = getBlockResult(results, "classifiedAddress");
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
      expect(result.add_on_override).toMatchObject({
        idToBlockShapeId: {
          [dependency.reference.versionId]: toBlockShapeId(consumedId),
        },
      });
    }
  });

  it("deduplicates repeated references to the same value type", async () => {
    const authored = await defineOntologyV2("com.palantir.", () => {
      const classification = defineStringValueType("classification");
      defineValueType({
        apiName: "classifiedPair",
        displayName: "Classified Pair",
        type: {
          type: {
            type: "struct",
            fields: [
              { identifier: "first", baseType: "string" },
              { identifier: "second", baseType: "string" },
            ],
          },
          constraints: [
            {
              constraint: {
                elementConstraints: {
                  first: classification,
                  second: classification,
                },
              },
            },
          ],
        },
        version: "1.0.0",
      });
    });
    const convertedBlock = getConvertedBlock(
      authored.ontologyIr.valueTypes,
      "classifiedPair",
    );
    expect(convertedBlock.dependencies).toHaveLength(2);
    const versionId = convertedBlock.dependencies[0].reference.versionId;
    if (versionId === undefined) {
      throw new Error("Temporary value type reference is missing its version");
    }

    const results = await generateValueTypeBlockResults(
      authored.ontologyIr.valueTypes,
      buildDir,
      undefined,
    );
    const result = getBlockResult(results, "classifiedPair");
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      "classification",
      "1.0.0",
    );
    const producedId = ReadableIdGenerator.getForProducedValueType(
      "classification",
      "1.0.0",
    );

    expect(Object.keys(result.inputs)).toEqual([consumedId]);
    expect(result.input_mapping_entries).toEqual([
      { input: consumedId, output: producedId },
    ]);
    expect(result.add_on_override).toMatchObject({
      idToBlockShapeId: {
        [versionId]: toBlockShapeId(consumedId),
      },
    });
  });

  it("recommends an upstream Maker package for an imported value type", async () => {
    const { downstream } = await simulatePackageDependency(
      () => ({
        classification: defineStringValueType("classification"),
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
      downstream.ontologyIr.valueTypes,
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
