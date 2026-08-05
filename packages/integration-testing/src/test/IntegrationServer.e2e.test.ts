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

import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import invariant from "tiny-invariant";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { createIntegrationServer } from "../createIntegrationServer.js";
import type { IntegrationServer } from "../types.js";
import { checkFoundryCliVersion } from "../utils/foundry-cli.js";
import { EMPTY_ONTOLOGY_METADATA } from "./emptyOntologyMetadata.js";

const TEST_TIMEOUT_MS = 180_000;

const foundryInstalled = await checkFoundryCliVersion();

// Exercises the real CLI, so it only runs where `foundry` is installed.
describe.runIf(foundryInstalled.type === "installed")(
  "createIntegrationServer (end to end)",
  () => {
    let projectPath: string;
    let server: IntegrationServer;

    beforeAll(async () => {
      projectPath = await mkdtemp(join(tmpdir(), "osdk-integration-e2e-"));
      server = await createIntegrationServer({
        metadata: EMPTY_ONTOLOGY_METADATA,
        projectPath,
      });
      // Resolves only once the ontology service reports READY.
      await server.start();
    }, TEST_TIMEOUT_MS);

    afterAll(async () => {
      await server?.stop();
    });

    it("discovers the running ontology service", () => {
      const url = server.getOntologyUrl();
      invariant(url, "the ontology service published no url");

      // The service serves TLS — see the CA certificate it publishes below.
      expect(new URL(url).protocol).toBe("https:");
    });

    it("exposes the ontology service's CA certificate", async () => {
      const caCertPath = server.getOntologyCaCertPath();
      invariant(caCertPath, "the ontology service published no CA cert path");

      await expect(readFile(caCertPath, "utf-8")).resolves.toContain(
        "-----BEGIN CERTIFICATE-----",
      );
    });

    it("creates a client whose seeder reaches the ontology service", async () => {
      const { client, seed } = await server.createClient();

      expect(client).toBeTypeOf("function");
      // Round-trips an empty seed through the live seeding endpoint.
      await expect(seed(() => {})).resolves.toBeUndefined();
    });
  },
);
