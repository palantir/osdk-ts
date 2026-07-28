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

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { IntegrationServer } from "../IntegrationServer.js";
import { getFoundryVersion } from "../utils/version.js";

/** Smallest metadata the ontology server accepts. */
const EMPTY_ONTOLOGY_METADATA = {
  ontology: {
    apiName: "ontology",
    rid: "ri.ontology.main.ontology.0",
    displayName: "ontology",
    description: "local ontology",
  },
  objectTypes: {},
  actionTypes: {},
  queryTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  valueTypes: {},
};

const TEST_TIMEOUT_MS = 180_000;

const foundryVersion = await getFoundryVersion();

// Exercises the real CLI, so it only runs where `foundry` is installed.
describe.skipIf(foundryVersion === undefined)(
  "IntegrationServer (end to end)",
  () => {
    let projectDir: string;
    let server: IntegrationServer;

    beforeAll(async () => {
      projectDir = await mkdtemp(join(tmpdir(), "osdk-integration-e2e-"));
      await writeFile(
        join(projectDir, "metadata.json"),
        JSON.stringify(EMPTY_ONTOLOGY_METADATA),
        "utf-8"
      );
      server = new IntegrationServer({
        projectDir,
        metadataPath: "metadata.json",
      });
      await server.start();
    }, TEST_TIMEOUT_MS);

    afterAll(async () => {
      server?.stop();
      await rm(projectDir, { recursive: true, force: true });
    });

    it("reports both services ready", async () => {
      expect(await server.checkHealth()).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            service: "STATUS_SERVER",
            state: "READY",
            ready: true,
          }),
          expect.objectContaining({
            service: "ONTOLOGY",
            state: "READY",
            ready: true,
          }),
        ])
      );
    });
  }
);
