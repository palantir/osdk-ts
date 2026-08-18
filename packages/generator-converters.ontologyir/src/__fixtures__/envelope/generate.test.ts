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

import type { OntologyIr } from "@osdk/client.unstable";
import {
  generateClientSdkVersionTwoPointZero,
  type MinimalFs,
} from "@osdk/generator";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { OntologyIrToFullMetadataConverter } from "../../OntologyIrToFullMetadataConverter.js";

function createInMemoryFiles(): {
  fs: MinimalFs;
  files: Map<string, string>;
} {
  const files = new Map<string, string>();

  return {
    fs: {
      mkdir: () => Promise.resolve(),
      readdir: () => Promise.resolve([]),
      writeFile: (path, contents) => {
        files.set(path, contents);
        return Promise.resolve();
      },
    },
    files,
  };
}

function isOntologyIr(value: object): value is OntologyIr {
  return "ontology" in value
    && typeof value.ontology === "object"
    && value.ontology != null
    && "importedOntology" in value
    && typeof value.importedOntology === "object"
    && value.importedOntology != null;
}

function loadEnvelope(name: string): OntologyIr {
  const parsed: object = JSON.parse(
    readFileSync(
      fileURLToPath(new URL(`../${name}/ontology.json`, import.meta.url)),
      "utf8",
    ),
  );
  if (!isOntologyIr(parsed)) {
    throw new Error("Invalid Ontology IR fixture");
  }
  return parsed;
}

describe("envelope generation", () => {
  it("generates deterministic module output", async () => {
    const ontology = OntologyIrToFullMetadataConverter
      .getFullMetadataFromEnvelope(loadEnvelope("envelope"));
    const first = createInMemoryFiles();
    const second = createInMemoryFiles();

    await generateClientSdkVersionTwoPointZero(
      ontology,
      "osdk-oac/test",
      first.fs,
      "generated",
      "module",
    );
    await generateClientSdkVersionTwoPointZero(
      ontology,
      "osdk-oac/test",
      second.fs,
      "generated",
      "module",
    );

    expect(first.files.size).toBeGreaterThan(0);
    expect(first.files).toEqual(second.files);
  });

  it("leaves imported-only interface implementers empty", () => {
    const ontology = OntologyIrToFullMetadataConverter
      .getFullMetadataFromEnvelope(loadEnvelope("partialImport"));
    const child = ontology.interfaceTypes["local.Item"];

    expect(child).toBeDefined();
    expect(child).toMatchObject({
      implementedByObjectTypes: [],
    });
  });
});
