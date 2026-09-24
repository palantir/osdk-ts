/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "node:fs/promises";
import * as path from "node:path";

import type {
  OntologyBlockDataV2,
  ValueTypeBlockData,
} from "@osdk/client.unstable";
import type { InputShape, OutputShape } from "@osdk/client.unstable/api";
import type { OntologyBlockDataWithValueTypes } from "@osdk/generator-converters.ontologyir";

type ValueTypeConnection = { rid: string; output: string };

export async function loadSdkInput(options: {
  input?: string;
  blockResultsInput?: string;
}): Promise<
  {
    ontology: OntologyBlockDataV2;
    valueTypes: Record<string, ValueTypeBlockData>;
  }
> {
  const inputFile = options.input ?? options.blockResultsInput;
  if (
    inputFile === undefined
    || (options.input !== undefined && options.blockResultsInput !== undefined)
  ) {
    throw new Error("Provide exactly one of --input or --block-results-input.");
  }

  const data = await readJson(inputFile);
  if (options.input !== undefined) {
    const ontology = getOntologyData(
      data,
      inputFile,
    ) as OntologyBlockDataWithValueTypes;
    return { ontology, valueTypes: ontology.valueTypes };
  }

  const blocks = data as Record<string, unknown>[];
  const ontologyBlock = blocks.find(block => block.block_type === "ONTOLOGY")!;
  const ontologyFile = getBlockFile(ontologyBlock, inputFile, "ontology.json");
  const ontology = getOntologyData(await readJson(ontologyFile), ontologyFile);
  const connections = getValueTypeConnections(ontology, ontologyBlock);
  const outputs = await loadValueTypeOutputs(blocks, connections, inputFile);
  const valueTypes = Object.fromEntries(
    connections.map(({ rid, output }) => [rid, outputs.get(output)!]),
  );
  return { ontology, valueTypes };
}

function getValueTypeConnections(
  ontology: OntologyBlockDataV2,
  block: Record<string, unknown>,
): ValueTypeConnection[] {
  const ridByInternalId = new Map(
    Object.entries(ontology.knownIdentifiers.valueTypes).flatMap((
      [rid, versions],
    ) => Object.values(versions).map(internalId => [internalId, rid] as const)),
  );

  const inputs = block.inputs as Record<string, InputShape>;
  const mappings = block.input_mapping_entries as Record<string, string>[];
  const addOn = block.add_on_override as Record<string, unknown>;
  const identities = addOn?.idToBlockShapeId as Record<string, string>;

  // Imported dependencies have no local value-type block to read.
  return mappings
    .filter(({ input }) => inputs[input].type === "valueType")
    .map(({ input, output }) => ({
      rid: ridByInternalId.get(identities[input])!,
      output,
    }));
}

async function loadValueTypeOutputs(
  blocks: Record<string, unknown>[],
  connections: ValueTypeConnection[],
  inputFile: string,
): Promise<Map<string, ValueTypeBlockData>> {
  const neededOutputs = new Set(
    connections.map(connection => connection.output),
  );
  const producers = blocks.filter(block =>
    block.block_type === "VALUE_TYPE"
    && Object.keys(block.outputs as Record<string, OutputShape>).some(output =>
      neededOutputs.has(output)
    )
  );
  const entries = await Promise.all(producers.map(async block => {
    const definition = await readJson(
      getBlockFile(block, inputFile, "value-types.json"),
    ) as ValueTypeBlockData;
    return Object.keys(block.outputs as Record<string, OutputShape>).map(
      output => [output, definition] as const,
    );
  }));
  return new Map(entries.flat());
}

function getOntologyData(data: unknown, file: string): OntologyBlockDataV2 {
  const wrapped = data as { ontology?: OntologyBlockDataV2 };
  const ontology = wrapped?.ontology ?? data as OntologyBlockDataV2;
  if (
    !ontology || typeof ontology !== "object" || !("objectTypes" in ontology)
    || !("actionTypes" in ontology)
  ) {
    throw new Error(
      `Invalid Ontology structure in ${file}. Expected objectTypes and actionTypes fields.`,
    );
  }
  return ontology;
}

function getBlockFile(
  block: Record<string, unknown>,
  inputFile: string,
  name: string,
): string {
  return path.resolve(
    path.dirname(inputFile),
    block.block_data_directory as string,
    name,
  );
}

async function readJson(file: string): Promise<unknown> {
  return JSON.parse(await fs.readFile(file, "utf-8"));
}
