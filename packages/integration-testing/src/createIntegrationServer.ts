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
import consola from "consola";
import invariant from "tiny-invariant";
import { Agent, fetch as undiciFetch } from "undici";

import { CliServiceLauncher } from "./cli-service/CliServiceLauncher.js";
import { OntologyServer } from "./cli-service/OntologyServer.js";
import { createIntegrationClientForRunningServer } from "./createIntegrationClient.js";
import { createSeedClient } from "./createSeedClient.js";
import type {
  IntegrationClient,
  IntegrationServer,
  IntegrationServerConfig,
  SeedClient,
} from "./types.js";
import { EMPTY_ONTOLOGY_BLOCK_DATA } from "./utils/empty-ontology-block.js";

const transformMetadata = (
  metadata: OntologyFullMetadata,
): PreviewOntologyFullMetadata => {
  const transformed =
    PreviewOntologyIrConverter.getPreviewFullMetadataFromBlockData(
      EMPTY_ONTOLOGY_BLOCK_DATA,
      metadata,
    );
  const interfaceTypeApiNames = new Set<string>(
    Object.keys(transformed.interfaceTypes),
  );
  const objectTypes: OntologyFullMetadata["objectTypes"] = Object.fromEntries(
    Object.entries(transformed.objectTypes).map(([key, value]) => {
      const implementsInterfaces = value.implementsInterfaces.filter((n) =>
        interfaceTypeApiNames.has(n),
      );
      const implementsInterfaces2 = Object.fromEntries(
        Object.entries(value.implementsInterfaces2).filter(([n]) =>
          interfaceTypeApiNames.has(n),
        ),
      );
      const excluded = [
        ...value.implementsInterfaces.filter(
          (n) => !interfaceTypeApiNames.has(n),
        ),
        ...Object.keys(value.implementsInterfaces2).filter(
          ([n]) => !interfaceTypeApiNames.has(n),
        ),
      ];
      if (excluded.length > 0) {
        consola.warn(
          `The following interface types were removed from the ontology metadata since they were not imported: ${excluded.join(", ")}`,
        );
      }
      return [
        key,
        {
          ...value,
          implementsInterfaces,
          implementsInterfaces2,
        },
      ];
    }),
  );
  return {
    ...transformed,
    objectTypes,
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
export async function createIntegrationServer(
  config: IntegrationServerConfig,
): Promise<IntegrationServer> {
  const { metadata, projectPath = process.cwd(), foundryCliPath } = config;

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
      foundryCliPath,
    }),
  );

  // stateful cache of client and seed client
  let client: IntegrationClient | undefined;
  let seedClient: SeedClient | undefined;

  return {
    getOntologyUrl: () => ontology.getUrl(),
    start: async () => {
      await serviceLauncher.start();
    },
    stop: async () => {
      await serviceLauncher.stop();
      await fs.rm(testPath, { recursive: true, force: true });
    },
    getSeedClient: async () => {
      if (seedClient !== undefined) return seedClient;
      const baseUrl = ontology.getUrl();
      invariant(baseUrl, "Ontology server is not ready");
      const caCertPath = ontology.getCaCertPath();
      invariant(caCertPath, "Ontology server is not ready");
      const agent = new Agent({
        connect: caCertPath
          ? {
              ca: await fs.readFile(caCertPath),
            }
          : {
              rejectUnauthorized: false,
            },
      });
      const fetchWithCert = ((input, init) =>
        undiciFetch(input, {
          ...init,
          dispatcher: agent,
        })) satisfies typeof undiciFetch as unknown as typeof fetch;
      return (seedClient = createSeedClient({
        baseUrl,
        metadata,
        fetchFn: fetchWithCert,
      }));
    },
    getClient: async () => {
      if (client !== undefined) return client;
      const baseUrl = ontology.getUrl();
      invariant(baseUrl, "Ontology server is not ready");
      return (client = await createIntegrationClientForRunningServer({
        baseUrl,
        metadata,
        caCertPath: ontology.getCaCertPath(),
      }));
    },
  };
}
