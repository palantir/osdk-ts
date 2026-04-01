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

import type { ObjectTypeBlockDataV2 } from "@osdk/client.unstable";
import { consola } from "consola";
import { createJiti } from "jiti";
import * as fs from "node:fs";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defineOntologyV2 } from "../api/defineOntologyV2.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import {
  generateBackingDatasetBlockResult,
  getNonEditOnlyProperties,
} from "./generateBackingDataset.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import type { InputMappingEntry } from "./marketplaceSerialization/supportingTypes.js";

const apiNamespaceRegex = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.$/;
const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export default async function main(
  args: string[] = process.argv,
): Promise<void> {
  consola.log("Generating BlockGeneratorResult for ontology...");

  const commandLineOpts: {
    input: string;
    output: string;
    apiNamespace: string;
    buildDir: string;
    randomnessKey?: string;
  } = await yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .options({
      input: {
        alias: "i",
        describe: "Input file",
        type: "string",
        default: ".ontology/ontology.ts",
        coerce: path.resolve,
      },
      output: {
        alias: "o",
        describe: "Output file for BlockGeneratorResult JSON",
        type: "string",
        default: "build/block_generator_result.json",
        coerce: path.resolve,
      },
      apiNamespace: {
        describe: "Api name prefix for namespaced ontology types",
        type: "string",
        default: "",
      },
      buildDir: {
        alias: "b",
        describe: "Directory for build files",
        type: "string",
        default: "build/",
        coerce: path.resolve,
      },
      randomnessKey: {
        describe: "Value used to assure uniqueness of entities",
        type: "string",
      },
    })
    .parseAsync();

  let apiNamespace = "";
  if (commandLineOpts.apiNamespace.length !== 0) {
    apiNamespace = (commandLineOpts.apiNamespace.slice(-1) !== ".")
      ? commandLineOpts.apiNamespace + "."
      : commandLineOpts.apiNamespace;
    invariant(apiNamespace.length < 1024, "API namespace is too long.");
    invariant(
      apiNamespaceRegex.test(apiNamespace),
      "API namespace is invalid! It is expected to conform to ^[a-z0-9-]+(\.[a-z0-9-]+)*\.$",
    );
  }
  consola.info(`Loading ontology from ${commandLineOpts.input}`);

  if (commandLineOpts.randomnessKey !== undefined) {
    invariant(
      uuidRegex.test(commandLineOpts.randomnessKey),
      "Supplied randomness key is not a uuid and shouldn't be used as a uniqueness guarantee",
    );
  }

  const { ontologyIr, shapes, backingDatasourceApiNames } = await loadOntology(
    commandLineOpts.input,
    apiNamespace,
    commandLineOpts.randomnessKey,
  );

  // Create temp directory for block data
  const blockDataDir = path.join(commandLineOpts.buildDir, "temp_block_data");
  if (!fs.existsSync(blockDataDir)) {
    await fs.promises.mkdir(blockDataDir, { recursive: true });
  }

  // Write ontology.json to the block data directory
  const ontologyJsonPath = path.join(blockDataDir, "ontology.json");
  const ontologyJson = JSON.stringify(ontologyIr.ontology, null, 2);
  await fs.promises.writeFile(ontologyJsonPath, ontologyJson);
  consola.info(`Wrote ontology.json to ${ontologyJsonPath}`);

  // Collect input_mapping_entries for the ontology block
  // These map ontology inputs to datasource block outputs for objects with includeEmptyBackingDatasource
  const ontologyInputMappingEntries: InputMappingEntry[] = [];

  for (const apiName of backingDatasourceApiNames) {
    const objectTypeBlockData = findObjectTypeByApiName(
      ontologyIr.ontology.objectTypes,
      apiName,
    );
    if (!objectTypeBlockData) continue;

    const nonEditOnlyProps = getNonEditOnlyProperties(objectTypeBlockData);

    // The ontology block has inputs with these readable IDs (from shape extraction)
    // Map them to the datasource block's outputs (which use the same readable IDs)
    const inputDatasetReadableId = ReadableIdGenerator.getForDataset(apiName);
    const outputDatasetReadableId = ReadableIdGenerator.getForDatasetOutput(
      apiName,
    );
    if (shapes.inputShapes.has(inputDatasetReadableId)) {
      ontologyInputMappingEntries.push({
        input: inputDatasetReadableId,
        output: outputDatasetReadableId,
      });
    }

    for (const prop of nonEditOnlyProps) {
      const colInputReadableId = ReadableIdGenerator.getForDatasetColumn(
        apiName,
        prop.apiName!,
      );
      const getForDatasetColumnOutput = ReadableIdGenerator
        .getForDatasetColumnOutput(apiName, prop.apiName!);
      if (shapes.inputShapes.has(colInputReadableId)) {
        ontologyInputMappingEntries.push({
          input: colInputReadableId,
          output: getForDatasetColumnOutput,
        });
      }
    }
  }

  // Generate backing datasource BlockGeneratorResults for objects with includeEmptyBackingDatasource
  const backingDsGeneratorResults = await Promise.all(
    backingDatasourceApiNames.filter(apiName => {
      const objectTypeBlockData = findObjectTypeByApiName(
        ontologyIr.ontology.objectTypes,
        apiName,
      );
      return objectTypeBlockData !== undefined;
    }).map(async apiName => {
      const objectTypeBlockData = findObjectTypeByApiName(
        ontologyIr.ontology.objectTypes,
        apiName,
      );
      consola.info(
        `Generating backing datasource BlockGeneratorResult for ${apiName}...`,
      );

      return await generateBackingDatasetBlockResult(
        objectTypeBlockData!,
        commandLineOpts.buildDir,
        commandLineOpts.randomnessKey,
      );
    }),
  );

  // Create BlockGeneratorResult
  const blockGeneratorResult: BlockGeneratorResult = {
    block_identifier: "ontology",
    block_data_directory: blockDataDir,
    oci_block_data_metadata: undefined,
    maven_block_data_metadata: undefined,
    inputs: Object.fromEntries(shapes.inputShapes),
    outputs: Object.fromEntries(shapes.outputShapes),
    input_mapping_entries: ontologyInputMappingEntries,
    external_recommendations: [],
    add_on_override: undefined,
    input_shape_metadata: Object.fromEntries(shapes.inputShapeMetadata),
    block_type: "ONTOLOGY",
  };

  // Write BlockGeneratorResult to output file
  const blockGeneratorResultJson = JSON.stringify(
    [blockGeneratorResult, ...backingDsGeneratorResults],
    null,
    2,
  );
  await fs.promises.writeFile(
    commandLineOpts.output,
    blockGeneratorResultJson,
  );
  consola.success(
    `BlockGeneratorResult written to ${commandLineOpts.output}`,
  );
  consola.info(
    `Block data directory: ${blockDataDir}`,
  );
}

async function loadOntology(
  input: string,
  apiNamespace: string,
  randomnessKey?: string,
) {
  const result = await defineOntologyV2(
    apiNamespace,
    async () => {
      const jiti = createJiti(import.meta.filename, {
        moduleCache: true,
        debug: false,
        importMeta: import.meta,
      });
      const module = await jiti.import(input);
    },
    randomnessKey,
  );
  return result;
}

/**
 * Find an ObjectTypeBlockDataV2 by apiName within the ontology block data.
 */
function findObjectTypeByApiName(
  objectTypes: Record<string, ObjectTypeBlockDataV2>,
  apiName: string,
): ObjectTypeBlockDataV2 | undefined {
  return Object.values(objectTypes).find(
    (objectTypeBlockData) => objectTypeBlockData.objectType.apiName === apiName,
  );
}
