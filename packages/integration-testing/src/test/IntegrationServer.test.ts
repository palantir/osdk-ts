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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { createIntegrationServer } from "../createIntegrationServer.js";
import { EMPTY_ONTOLOGY_METADATA } from "./emptyOntologyMetadata.js";

/**
 * Metadata for a single object type that claims two interfaces, only one of
 * which — `com.example.Present` — is actually defined here.
 */
const metadataWithMissingInterface = (): OntologyFullMetadata => ({
  ...EMPTY_ONTOLOGY_METADATA,
  interfaceTypes: {
    "com.example.Present": {
      rid: "ri.ontology.main.interface.present",
      apiName: "com.example.Present",
      displayName: "Present",
      properties: {},
      allProperties: {},
      propertiesV2: {},
      allPropertiesV2: {},
      extendsInterfaces: [],
      allExtendsInterfaces: [],
      implementedByObjectTypes: ["Todo"],
      links: {},
      allLinks: {},
    },
  },
  objectTypes: {
    Todo: {
      objectType: {
        apiName: "Todo",
        displayName: "Todo",
        pluralDisplayName: "Todos",
        status: "ACTIVE",
        icon: { type: "blueprint", name: "document", color: "blue" },
        primaryKey: "id",
        titleProperty: "id",
        properties: {
          id: {
            dataType: { type: "string" },
            rid: "ri.a.b.property.id",
            typeClasses: [],
          },
        },
        rid: "ri.ontology.main.object-type.todo",
        aliases: [],
        datasources: [],
      },
      linkTypes: [],
      implementsInterfaces: ["com.example.Present", "com.example.Missing"],
      implementsInterfaces2: {
        "com.example.Present": { properties: {}, propertiesV2: {}, links: {} },
        "com.example.Missing": { properties: {}, propertiesV2: {}, links: {} },
      },
      sharedPropertyTypeMapping: {},
    },
  },
});

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

  it("drops interfaces an object claims that the metadata never defines", async () => {
    // A caller can hand us metadata whose object types reference an interface
    // that was never imported alongside them; the ontology server rejects the
    // dangling reference, so it has to be stripped before we write the file.
    await createIntegrationServer({
      metadata: metadataWithMissingInterface(),
      projectPath,
    });

    const [run] = await runDirs();
    const written = JSON.parse(
      await readFile(join(projectPath, run, "ontology-metadata.json"), "utf-8"),
    ) as OntologyFullMetadata;

    const todo = written.objectTypes.Todo;
    expect(todo.implementsInterfaces).toEqual(["com.example.Present"]);
    expect(Object.keys(todo.implementsInterfaces2)).toEqual([
      "com.example.Present",
    ]);
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
