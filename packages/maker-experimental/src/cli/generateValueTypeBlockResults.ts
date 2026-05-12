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
  OntologyIrPackagedValueType,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
} from "@osdk/client.unstable";
import type { InputShape, OutputShape } from "@osdk/client.unstable/api";
import * as fs from "node:fs";
import * as path from "node:path";
import { typeToMarketplaceBaseType } from "../conversion/toMarketplace/typeVisitors.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import type { InputMappingEntry } from "./marketplaceSerialization/supportingTypes.js";

/**
 * Generates a BlockGeneratorResult for each value type entry in the IR.
 * Port of Java's ValueTypesBlockGenerator.
 */
export async function generateValueTypeBlockResults(
  valueTypeBlockData: OntologyIrValueTypeBlockData,
  buildDir: string,
): Promise<BlockGeneratorResult[]> {
  const results: BlockGeneratorResult[] = [];

  for (const entry of valueTypeBlockData.valueTypes) {
    const blockIdentifier = "value-type-" + entry.metadata.apiName;
    const outputDir = path.join(buildDir, blockIdentifier);

    if (!fs.existsSync(outputDir)) {
      await fs.promises.mkdir(outputDir, { recursive: true });
    }

    const latestVersion = getLatestVersion(entry.versions);
    const blockData = {
      metadata: {
        apiName: entry.metadata.apiName,
        displayMetadata: entry.metadata.displayMetadata,
        status: entry.metadata.status,
        baseType: latestVersion.baseType,
      },
      versions: entry.versions.map(v => ({
        version: v.version,
        baseType: v.baseType,
        constraints: v.constraints,
        exampleValues: v.exampleValues,
      })),
    };

    await fs.promises.writeFile(
      path.join(outputDir, "value-types.json"),
      JSON.stringify(blockData, null, 2),
    );

    const outputs = buildOutputShapes(entry);

    results.push({
      block_identifier: blockIdentifier,
      block_data_directory: outputDir,
      oci_block_data_metadata: undefined,
      maven_block_data_metadata: undefined,
      inputs: {},
      outputs: Object.fromEntries(outputs),
      input_mapping_entries: [],
      external_recommendations: [],
      add_on_override: undefined,
      input_shape_metadata: {},
      block_type: "VALUE_TYPE",
    });
  }

  return results;
}

function buildOutputShapes(
  entry: OntologyIrValueTypeBlockDataEntry,
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
  producedValueTypes: OntologyIrValueTypeBlockData,
  inputShapes: Map<string, InputShape>,
): InputMappingEntry[] {
  const mappings: InputMappingEntry[] = [];
  for (const entry of producedValueTypes.valueTypes) {
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

function getLatestVersion(
  versions: OntologyIrPackagedValueType[],
): OntologyIrPackagedValueType {
  if (versions.length === 0) {
    throw new Error("Value type must have at least one version");
  }
  return versions.reduce((latest, current) => {
    return compareSlsVersions(current.version, latest.version) > 0
      ? current
      : latest;
  });
}

function compareSlsVersions(a: string, b: string): number {
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);
  const maxLen = Math.max(partsA.length, partsB.length);
  for (let i = 0; i < maxLen; i++) {
    const segA = partsA[i] ?? 0;
    const segB = partsB[i] ?? 0;
    if (segA !== segB) return segA - segB;
  }
  return 0;
}
