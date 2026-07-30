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

import fs from "node:fs/promises";
import path from "node:path";

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import type { PreviewOntologyFullMetadata } from "@osdk/generator-converters.preview";
import { PreviewOntologyIrConverter } from "@osdk/generator-converters.preview";
import invariant from "tiny-invariant";

import { CliServiceLauncher } from "./CliServiceLauncher.js";
import {
  createIntegrationClient,
  type IntegrationClient,
} from "./IntegrationClient.js";
import { OntologyServer } from "./OntologyServer.js";
import { EMPTY_ONTOLOGY_BLOCK_DATA } from "./utils/empty-ontology-block.js";

export type IntegrationServerConfig = {
  /** Path to a prebuilt ontology metadata JSON. */
  metadata: OntologyFullMetadata;
  /** Path to the `foundry` binary. Defaults to `foundry` on `PATH`. */
  foundryCliPath?: string;
  /** Directory the services run in. Defaults to './.test-run-...' */
  projectPath?: string;
  /** How long each service may take to become ready. Defaults to 30_000ms. */
  readyTimeoutMs?: number;
};

const transformMetadata = (
  metadata: OntologyFullMetadata
): PreviewOntologyFullMetadata => {
  const transformed =
    PreviewOntologyIrConverter.getPreviewFullMetadataFromBlockData(
      EMPTY_ONTOLOGY_BLOCK_DATA,
      metadata
    );
  return {
    ...transformed,
    ontology: metadata.ontology,
  };
};

const writeMetadata = async (args: {
  metadataPath: string;
  previewMetadata: PreviewOntologyFullMetadata;
}) => {
  const { metadataPath, previewMetadata } = args;
  const stringified = JSON.stringify(previewMetadata);
  await fs.writeFile(metadataPath, stringified);
};

export interface IntegrationServer {
  start(): Promise<void>;
  stop(): Promise<void>;
  getOntologyUrl(): string | undefined;
  getOntologyCaCertPath(): string | undefined;
  createClient(): Promise<IntegrationClient>;
}

export async function createIntegrationServer(
  config: IntegrationServerConfig
): Promise<IntegrationServer> {
  const {
    metadata,
    projectPath = process.cwd(),
    foundryCliPath,
    readyTimeoutMs,
  } = config;

  const testPath = await fs.mkdtemp(path.join(projectPath, ".test-run-"));
  const metadataPath = path.resolve(testPath, "ontology-metadata.json");
  const previewMetadata = transformMetadata(metadata);

  const serviceLauncher = new CliServiceLauncher({
    projectDir: testPath,
    foundryCliPath,
  });
  // write metadata to metadataPath for foundry cli to read from
  await writeMetadata({
    previewMetadata,
    metadataPath,
  });

  const ontology = serviceLauncher.register(
    new OntologyServer({
      projectPath: testPath,
      metadataPath,
      readyTimeoutMs,
      foundryCliPath,
    })
  );

  return {
    start: async () => {
      await serviceLauncher.start();
      await serviceLauncher.waitUntilReady(ontology);
    },
    stop: async () => {
      await serviceLauncher.stop();
      await fs.rm(testPath, { recursive: true, force: true });
    },
    getOntologyUrl: () => ontology.getUrl(),
    getOntologyCaCertPath: () => ontology.getCaCertPath(),
    createClient: () => {
      const baseUrl = ontology.getUrl();
      invariant(baseUrl, "Ontology server is not ready");
      return createIntegrationClient({
        baseUrl,
        metadata,
        caCertPath: ontology.getCaCertPath(),
      });
    },
  };
}
