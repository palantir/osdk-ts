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
import * as path from "node:path";

import type { ValueTypeBlockData } from "@osdk/client.unstable";
import type { InputShape, OutputShape } from "@osdk/client.unstable/api";

import type {
  ConvertedValueTypeBlockData,
  ValueTypeDependency,
} from "../conversion/toMarketplace/convertValueTypeToWireBlockData.js";
import { typeToMarketplaceBaseType } from "../conversion/toMarketplace/typeVisitors.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";
import type {
  GeneratedBlockExternalRecommendations,
  InputMappingEntry,
  ReadableIdMappingPair,
} from "./marketplaceSerialization/supportingTypes.js";

/**
 * Generates a BlockGeneratorResult for each value type entry in the IR.
 * Port of Java's ValueTypesBlockGenerator.
 */
export async function generateValueTypeBlockResults(
  valueTypeBlocks: ConvertedValueTypeBlockData[],
  buildDir: string,
  randomnessKey: string | undefined,
): Promise<BlockGeneratorResult[]> {
  const results: BlockGeneratorResult[] = [];
  const producedValueTypes = new Set(
    valueTypeBlocks.flatMap(({ blockData }) =>
      blockData.versions.map((version) =>
        valueTypeKey(blockData.metadata.apiName, version.version),
      ),
    ),
  );

  for (const {
    blockData: entry,
    dependencies: rawDependencies,
  } of valueTypeBlocks) {
    const blockIdentifier = "value-type-" + entry.metadata.apiName;
    const outputDir = path.join(buildDir, blockIdentifier);

    if (!fs.existsSync(outputDir)) {
      await fs.promises.mkdir(outputDir, { recursive: true });
    }

    await fs.promises.writeFile(
      path.join(outputDir, "value-types.json"),
      JSON.stringify(entry, null, 2),
    );

    const outputs = buildOutputShapes(entry);
    const idToBlockShapeId = Object.fromEntries(
      Array.from(outputs.keys(), (readableId) => [
        readableId,
        toBlockShapeId(readableId, randomnessKey),
      ]),
    );

    const dependencies = buildDependencies(
      rawDependencies,
      producedValueTypes,
      randomnessKey,
    );

    results.push({
      block_identifier: blockIdentifier,
      block_data_directory: outputDir,
      oci_block_data_metadata: undefined,
      maven_block_data_metadata: undefined,
      inputs: Object.fromEntries(dependencies.inputs),
      outputs: Object.fromEntries(outputs),
      input_mapping_entries: dependencies.mappings,
      external_recommendations: buildExternalRecommendations(
        rawDependencies,
        producedValueTypes,
      ),
      add_on_override: {
        idToBlockShapeId: {
          ...idToBlockShapeId,
          // Type Registry resolves constraint references by their temporary
          // version IDs, so map those IDs to the corresponding input shapes.
          ...Object.fromEntries(dependencies.idToBlockShapeIds),
        },
        idToInputGroupId: {},
        outputToLocationInput: {},
      },
      input_shape_metadata: {},
      block_type: "VALUE_TYPE",
    });
  }

  return results;
}

type ValueTypeDependencies = {
  inputs: Map<string, InputShape>;
  idToBlockShapeIds: Map<string, string>;
  mappings: InputMappingEntry[];
};

function buildDependencies(
  rawDependencies: ValueTypeDependency[],
  producedValueTypes: Set<string>,
  randomnessKey: string | undefined,
): ValueTypeDependencies {
  const inputs = new Map<string, InputShape>();
  const idToBlockShapeIds = new Map<string, string>();
  const mappings = new Map<string, InputMappingEntry>();

  for (const dependency of dedupeDependencies(rawDependencies)) {
    const { reference, target, baseType } = dependency;
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      target.apiName,
      target.version,
    );
    inputs.set(consumedId, {
      type: "valueType",
      valueType: {
        about: {
          fallbackTitle: target.displayMetadata.displayName,
          fallbackDescription: target.displayMetadata.description ?? "",
          localizedTitle: {},
          localizedDescription: {},
        },
        baseType: typeToMarketplaceBaseType(baseType),
      },
    });

    // Maker creates local and imported references through
    // generateRidForValueType, which always identifies a specific version.
    if (reference.versionId === undefined) {
      throw new Error(
        `Value type reference ${reference.rid} must include a version`,
      );
    }
    idToBlockShapeIds.set(
      reference.versionId,
      toBlockShapeId(consumedId, randomnessKey),
    );

    if (producedValueTypes.has(valueTypeKey(target.apiName, target.version))) {
      mappings.set(consumedId, {
        input: consumedId,
        output: ReadableIdGenerator.getForProducedValueType(
          target.apiName,
          target.version,
        ),
      });
    }
  }

  return { inputs, idToBlockShapeIds, mappings: [...mappings.values()] };
}

function dedupeDependencies(
  dependencies: ValueTypeDependency[],
): ValueTypeDependency[] {
  // Keep this aligned with Type Registry's
  // ValueTypeInputShapeUtils#getShapeSpecInputIdentifiers: it groups references
  // by BaseTypeAndValueTypeRid and uses the lexicographically smallest referenced
  // version ID to identify the shared block input.
  const byRidAndBaseType = new Map<string, ValueTypeDependency>();
  for (const dependency of dependencies) {
    const { reference } = dependency;
    if (reference.versionId === undefined) {
      throw new Error(
        `Value type reference ${reference.rid} must include a version`,
      );
    }
    const key = `${reference.rid}:${JSON.stringify(dependency.baseType)}`;
    const existing = byRidAndBaseType.get(key);
    if (
      existing?.reference.versionId === undefined ||
      reference.versionId < existing.reference.versionId
    ) {
      byRidAndBaseType.set(key, dependency);
    }
  }
  return [...byRidAndBaseType.values()];
}

function buildExternalRecommendations(
  rawDependencies: ValueTypeDependency[],
  producedValueTypes: Set<string>,
): GeneratedBlockExternalRecommendations[] {
  const mappingsByPackage = new Map<
    string,
    Map<string, ReadableIdMappingPair>
  >();

  for (const { target } of dedupeDependencies(rawDependencies)) {
    if (producedValueTypes.has(valueTypeKey(target.apiName, target.version))) {
      continue;
    }
    // Now we know the value type dependency isn't defined locally so
    // "target" here refers to the imported ValueTypeDefinitionVersion
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      target.apiName,
      target.version,
    );
    const packageMappings =
      mappingsByPackage.get(target.packageNamespace) ??
      new Map<string, ReadableIdMappingPair>();
    packageMappings.set(consumedId, {
      targetInputReadableId: consumedId,
      upstreamOutputReadableId: ReadableIdGenerator.getForProducedValueType(
        target.apiName,
        target.version,
      ),
    });
    mappingsByPackage.set(target.packageNamespace, packageMappings);
  }

  return [...mappingsByPackage].map(([upstreamPackageName, mappings]) => ({
    upstreamPackageName,
    upstreamVersionCompatibility: { from: "0.0.0", until: "x.x.x" },
    mappings: [...mappings.values()],
  }));
}

function valueTypeKey(apiName: string, version: string): string {
  return `${apiName}:${version}`;
}

function buildOutputShapes(
  entry: ValueTypeBlockData,
): Map<string, OutputShape> {
  const outputs = new Map<string, OutputShape>();

  for (const version of entry.versions) {
    const readableId = ReadableIdGenerator.getForProducedValueType(
      entry.metadata.apiName,
      version.version,
    );
    outputs.set(readableId, {
      type: "valueType",
      valueType: {
        about: {
          fallbackTitle: entry.metadata.displayMetadata.displayName,
          fallbackDescription: entry.metadata.displayMetadata.description ?? "",
          localizedTitle: {},
          localizedDescription: {},
        },
        baseType: typeToMarketplaceBaseType(version.baseType),
      },
    });
  }

  return outputs;
}

/**
 * Compute internal value type recommendations.
 */
export function getValueTypeInternalMappings(
  producedValueTypes: ValueTypeBlockData[],
  inputShapes: Map<string, InputShape>,
): InputMappingEntry[] {
  const mappings: InputMappingEntry[] = [];
  for (const entry of producedValueTypes) {
    for (const version of entry.versions) {
      const consumedId = ReadableIdGenerator.getForConsumedValueType(
        entry.metadata.apiName,
        version.version,
      );
      if (inputShapes.has(consumedId)) {
        const producedId = ReadableIdGenerator.getForProducedValueType(
          entry.metadata.apiName,
          version.version,
        );
        mappings.push({ input: consumedId, output: producedId });
      }
    }
  }
  return mappings;
}
