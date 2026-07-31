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

import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { createIntegrationServer } from "../IntegrationServer.js";
import { EMPTY_ONTOLOGY_METADATA } from "./emptyOntologyMetadata.js";

/**
 * Creating a server only lays out its directory — nothing is spawned until
 * `start()` — so these run without the Foundry CLI installed.
 */
describe("createIntegrationServer", () => {
  let projectPath: string;

  beforeEach(async () => {
    projectPath = await mkdtemp(join(tmpdir(), "osdk-server-"));
  });

  afterEach(async () => {
    await rm(projectPath, { recursive: true, force: true });
  });

  const runDirs = async (): Promise<string[]> =>
    (await readdir(projectPath)).filter((entry) =>
      entry.startsWith(".test-run-"),
    );

  it("writes the transformed metadata into its own run directory", async () => {
    await createIntegrationServer({
      metadata: EMPTY_ONTOLOGY_METADATA,
      projectPath,
    });

    const [run, ...rest] = await runDirs();
    expect(rest).toEqual([]);
    const written: unknown = JSON.parse(
      await readFile(join(projectPath, run, "ontology-metadata.json"), "utf-8"),
    );
    expect(written).toMatchObject({ ontology: { apiName: "ontology" } });
  });

  it("gives concurrent servers sharing a projectPath separate directories", async () => {
    // `projectPath` defaults to the working directory, so parallel test workers
    // routinely share one. Neither server may touch the other's state.
    await createIntegrationServer({
      metadata: EMPTY_ONTOLOGY_METADATA,
      projectPath,
    });
    await createIntegrationServer({
      metadata: EMPTY_ONTOLOGY_METADATA,
      projectPath,
    });

    const runs = await runDirs();

    expect(runs).toHaveLength(2);
    for (const run of runs) {
      await expect(
        readFile(join(projectPath, run, "ontology-metadata.json")),
      ).resolves.toBeDefined();
    }
  });

  it("removes only its own run directory when stopped", async () => {
    const first = await createIntegrationServer({
      metadata: EMPTY_ONTOLOGY_METADATA,
      projectPath,
    });
    await createIntegrationServer({
      metadata: EMPTY_ONTOLOGY_METADATA,
      projectPath,
    });

    await first.stop();

    expect(await runDirs()).toHaveLength(1);
  });
});
