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

import type { InputShape, OutputShape } from "@osdk/client.unstable/api";
import type { ObjectType } from "@osdk/maker";
import { getOntologyDefinition, OntologyEntityTypeEnum } from "@osdk/maker";
import { consola } from "consola";
import { createJiti } from "jiti";
import * as fs from "node:fs";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defineOntologyV2 } from "../api/defineOntologyV2.js";
import {
  typeToConcreteDataType,
} from "../conversion/toMarketplace/typeVisitors.js";
import type { ReadableId } from "../util/generateRid.js";
import { ReadableIdGenerator } from "../util/generateRid.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";
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

  const [ontologyBlockDataV2, shapes] = await loadOntology(
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
  const ontologyJson = JSON.stringify(ontologyBlockDataV2.ontology, null, 2);
  await fs.promises.writeFile(ontologyJsonPath, ontologyJson);
  consola.info(`Wrote ontology.json to ${ontologyJsonPath}`);

  // Collect input_mapping_entries for the ontology block
  // These map ontology inputs to dataset block outputs for objects with includeEmptyBackingDataset
  const ontologyDef = getOntologyDefinition();
  const objectTypes = ontologyDef[OntologyEntityTypeEnum.OBJECT_TYPE];
  const ontologyInputMappingEntries: InputMappingEntry[] = [];

  for (const [apiName, objectType] of Object.entries(objectTypes)) {
    const obj = objectType as ObjectType;
    if (!obj.includeEmptyBackingDataset) continue;

    const nonEditOnlyProps = (obj.properties ?? []).filter((p) => !p.editOnly);

    // The ontology block has inputs with these readable IDs (from shape extraction)
    // Map them to the dataset block's outputs (which use the same readable IDs)
    const datasourceReadableId = ReadableIdGenerator.getForDataSet(apiName);
    if (shapes.inputShapes.has(datasourceReadableId)) {
      ontologyInputMappingEntries.push({
        input: datasourceReadableId,
        output: datasourceReadableId,
      });
    }

    for (const prop of nonEditOnlyProps) {
      const colReadableId = ReadableIdGenerator.getForDataSetColumn(
        apiName,
        prop.apiName,
      );
      if (shapes.inputShapes.has(colReadableId)) {
        ontologyInputMappingEntries.push({
          input: colReadableId,
          output: colReadableId,
        });
      }
    }
  }

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

  // Generate backing dataset BlockGeneratorResults for objects with includeEmptyBackingDataset
  for (const [apiName, objectType] of Object.entries(objectTypes)) {
    const obj = objectType as ObjectType;
    if (!obj.includeEmptyBackingDataset) continue;

    consola.info(
      `Generating backing dataset BlockGeneratorResult for ${apiName}...`,
    );

    const dsResult = await generateBackingDatasetBlockResult(
      obj,
      commandLineOpts.buildDir,
      commandLineOpts.randomnessKey,
    );

    const dsOutputPath = path.join(
      commandLineOpts.buildDir,
      `${apiName}_backing_ds_block_generator_result.json`,
    );
    await fs.promises.writeFile(
      dsOutputPath,
      JSON.stringify(dsResult, null, 2),
    );
    consola.success(
      `Backing dataset BlockGeneratorResult written to ${dsOutputPath}`,
    );
  }
}

/**
 * Map from maker property type to Foundry schema field type
 */
function propertyTypeToSchemaType(
  propType: string | { type: string },
): string {
  const typeStr = typeof propType === "string" ? propType : propType.type;
  switch (typeStr) {
    case "string":
      return "STRING";
    case "boolean":
      return "BOOLEAN";
    case "integer":
      return "INTEGER";
    case "long":
      return "LONG";
    case "double":
      return "DOUBLE";
    case "float":
      return "FLOAT";
    case "byte":
      return "BYTE";
    case "short":
      return "SHORT";
    case "date":
      return "DATE";
    case "timestamp":
      return "TIMESTAMP";
    default:
      return "STRING";
  }
}

/**
 * Generate a backing dataset BlockGeneratorResult for an object type.
 */
async function generateBackingDatasetBlockResult(
  objectType: ObjectType,
  buildDir: string,
  randomnessKey?: string,
): Promise<BlockGeneratorResult> {
  const apiName = objectType.apiName;
  const dsName = `${apiName}-backing-ds`;

  // Collect non-edit-only properties
  const nonEditOnlyProps = (objectType.properties ?? []).filter(
    (p) => !p.editOnly,
  );

  // Build output shapes for the dataset block
  const outputs: Record<string, OutputShape> = {};

  // Readable IDs for dataset outputs (must match what the ontology block uses as inputs)
  const datasourceReadableId = ReadableIdGenerator.getForDataSet(
    apiName,
  );

  // tabularDatasource output shape
  const columnReadableIds: ReadableId[] = [];
  for (const prop of nonEditOnlyProps) {
    const colReadableId = ReadableIdGenerator.getForDataSetColumn(
      apiName,
      prop.apiName,
    );
    columnReadableIds.push(colReadableId);
  }

  const datasourceBlockInternalId = toBlockShapeId(
    datasourceReadableId,
    randomnessKey,
  );

  outputs[datasourceReadableId] = {
    type: "tabularDatasource",
    tabularDatasource: {
      about: {
        fallbackTitle: dsName,
        fallbackDescription: "",
        localizedTitle: {},
        localizedDescription: {},
      },
      schema: columnReadableIds.map((id) => toBlockShapeId(id, randomnessKey)),
      type: "DATASET",
      buildRequirements: { isBuildable: false },
    },
  } as OutputShape;

  // datasourceColumn output shapes for each non-edit-only property
  for (let i = 0; i < nonEditOnlyProps.length; i++) {
    const prop = nonEditOnlyProps[i];
    const colReadableId = columnReadableIds[i];

    outputs[colReadableId] = {
      type: "datasourceColumn",
      datasourceColumn: {
        about: {
          fallbackTitle: prop.apiName,
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        type: {
          type: "concrete",
          concrete: typeToConcreteDataType({
            type: typeof prop.type === "string" ? prop.type : prop.type.type,
            [typeof prop.type === "string" ? prop.type : prop.type.type]: {},
          } as any),
        },
        datasource: datasourceBlockInternalId,
        typeclasses: [],
      },
    } as OutputShape;
  }

  // Generate internal IDs for block-data.json columns.
  // These are distinct from the block shape IDs that appear in the manifest outputs.
  // The add-on maps these internal IDs -> block shape IDs.
  const columnInternalIds = nonEditOnlyProps.map((prop) =>
    toBlockShapeId(
      `column-internal-${apiName}-${prop.apiName}`,
      randomnessKey,
    )
  );

  const compassReadableId = `${dsName}-compass-resource` as ReadableId;
  const compassBlockShapeId = toBlockShapeId(
    compassReadableId,
    randomnessKey,
  );

  const datasourceInternalId = toBlockShapeId(
    `datasource-internal-${apiName}`,
    randomnessKey,
  );
  const locationInternalId = toBlockShapeId(
    `location-internal-${apiName}`,
    randomnessKey,
  );

  const addOnOverride: Record<string, unknown> = {
    idToBlockShapeId: {
      "dataset-internal-shape-id": datasourceBlockInternalId,
      [datasourceInternalId]: datasourceBlockInternalId,
      [locationInternalId]: compassBlockShapeId,
      ...Object.fromEntries(
        columnInternalIds.map((internalId, i) => [
          internalId,
          toBlockShapeId(columnReadableIds[i], randomnessKey),
        ]),
      ),
    },
    idToInputGroupId: {},
    outputToLocationInput: {
      [datasourceBlockInternalId]: compassBlockShapeId,
    },
  };

  // Create block data directory
  const dsBlockDataDir = path.join(
    buildDir,
    `temp_block_data_${apiName}_backing_ds`,
  );
  await fs.promises.mkdir(dsBlockDataDir, { recursive: true });

  // Write schema.json
  const schemaJson = {
    fieldSchemaList: nonEditOnlyProps.map((prop) => ({
      type: propertyTypeToSchemaType(prop.type),
      name: prop.apiName,
      nullable: null,
      userDefinedTypeClass: null,
      customMetadata: {},
      arraySubtype: null,
      precision: null,
      scale: null,
      mapKeyType: null,
      mapValueType: null,
      subSchemas: null,
    })),
    primaryKey: null,
    dataFrameReaderClass:
      "com.palantir.foundry.spark.input.ParquetDataFrameReader",
    customMetadata: {
      format: "parquet",
      options: {},
    },
  };
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "schema.json"),
    JSON.stringify(schemaJson, null, 2),
  );

  // Write block-data.json — column keys are the internal IDs mapped in the add-on
  const blockDataJson = {
    type: "v1",
    v1: {
      columns: Object.fromEntries(
        nonEditOnlyProps.map((prop, i) => [
          columnInternalIds[i],
          prop.apiName,
        ]),
      ),
      hasSchema: true,
    },
  };
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "block-data.json"),
    JSON.stringify(blockDataJson, null, 2),
  );

  // Write VERSION
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "VERSION"),
    "\"1\"",
  );

  // Write empty files.zip
  // An empty zip file is just the end-of-central-directory record (22 bytes)
  const emptyZip = Buffer.from([
    0x50,
    0x4b,
    0x05,
    0x06,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
  ]);
  await fs.promises.writeFile(
    path.join(dsBlockDataDir, "files.zip"),
    emptyZip,
  );

  // Build inputs (compassResource for install location)
  const inputs: Record<string, InputShape> = {};
  inputs[compassReadableId] = {
    type: "compassResource",
    compassResource: {
      about: {
        fallbackTitle: dsName,
        fallbackDescription: "",
        localizedTitle: {},
        localizedDescription: {},
      },
      allowedTypes: [],
      typeConstraints: [
        {
          type: "compassFolderTypeConstraints",
          compassFolderTypeConstraints: {
            constraints: ["INSTALL_LOCATION"],
          },
        },
      ],
    },
  } as InputShape;

  return {
    block_identifier: dsName,
    block_data_directory: dsBlockDataDir,
    oci_block_data_metadata: undefined,
    maven_block_data_metadata: undefined,
    inputs: inputs as any,
    outputs: outputs as any,
    input_mapping_entries: [],
    external_recommendations: [],
    add_on_override: addOnOverride,
    input_shape_metadata: {},
    block_type: "STATIC_DATASET",
  };
}

async function loadOntology(
  input: string,
  apiNamespace: string,
  randomnessKey?: string,
) {
  const ontologyIr = await defineOntologyV2(
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
