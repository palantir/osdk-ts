/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { consola } from "consola";
import { createJiti } from "jiti";
import * as fs from "node:fs";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defineOntology } from "../api/defineOntology.js";
import { getShapes } from "../conversion/toMarketplace/shapeExtractors/IrShapeExtractor.js";
import { OntologyRidGeneratorImpl } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";

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
        coerce: path.resolve,
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

  const ontologyIr = await loadOntology(
    commandLineOpts.input,
    apiNamespace,
    commandLineOpts.randomnessKey,
  );

  // The ontologyIr already contains the converted OntologyBlockDataV2
  const ontologyBlockDataV2 = ontologyIr.ontology;

  // Create RID generator for shape extraction
  const ridGenerator = new OntologyRidGeneratorImpl();

  // Extract shapes from the ontology
  const shapes = getShapes(
    ontologyBlockDataV2,
    ridGenerator,
    commandLineOpts.randomnessKey,
  );

  // Create temp directory for block data
  const blockDataDir = path.join(commandLineOpts.buildDir, "temp_block_data");
  if (!fs.existsSync(blockDataDir)) {
    await fs.promises.mkdir(blockDataDir, { recursive: true });
  }

  // Write ontology.json to the block data directory
  const ontologyJsonPath = path.join(blockDataDir, "ontology.json");
  const ontologyJson = JSON.stringify(ontologyBlockDataV2, null, 2);
  await fs.promises.writeFile(ontologyJsonPath, ontologyJson);
  consola.info(`Wrote ontology.json to ${ontologyJsonPath}`);

  // Create BlockGeneratorResult
  const blockGeneratorResult: BlockGeneratorResult = {
    block_identifier: "ontology",
    block_data_directory: blockDataDir,
    oci_block_data_metadata: undefined,
    maven_block_data_metadata: undefined,
    inputs: Object.fromEntries(shapes.inputShapes),
    outputs: Object.fromEntries(shapes.outputShapes),
    input_mapping_entries: [],
    external_recommendations: [],
    add_on_override: undefined,
    input_shape_metadata: Object.fromEntries(shapes.inputShapeMetadata),
    block_type: "ONTOLOGY",
  };

  // Write BlockGeneratorResult to output file
  const blockGeneratorResultJson = JSON.stringify(
    blockGeneratorResult,
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
  const ontologyIr = await defineOntology(
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
  return ontologyIr;
}
