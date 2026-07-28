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

import { consola } from "consola";

import { IntegrationServer } from "./IntegrationServer.js";

const server = new IntegrationServer({
  foundryCliPath: process.env.FOUNDRY_CLI_PATH ?? "foundry",
  metadataPath: process.env.ONTOLOGY_METADATA_PATH ?? "./metadata.json",
  projectDir: process.env.FOUNDRY_PROJECT_DIR ?? process.cwd(),
});

const main = async (): Promise<void> => {
  const shutdown = (): void => {
    server.stop();
    process.exit(0);
  };
  process.once("SIGINT", shutdown);
  process.once("SIGTERM", shutdown);

  try {
    await server.start();
    consola.success(`Ontology ready at ${server.ontologyUrl}`);
    consola.box(await server.checkHealth());
  } catch (err) {
    server.stop();
    throw err;
  }
};

await main();
