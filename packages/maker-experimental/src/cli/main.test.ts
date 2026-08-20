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

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import type { OntologyIrV2 } from "@osdk/client.unstable";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { writeOntologyArtifacts } from "./main.js";

function emptyBlock(): OntologyIrV2["ontology"] {
  return {
    actionTypes: {},
    blockOutputCompassLocations: {},
    interfaceTypes: {},
    knownIdentifiers: {
      actionParameterIds: {},
      actionParameters: {},
      actionTypes: {},
      datasourceColumns: {},
      datasources: {},
      filesDatasources: {},
      functions: {},
      geotimeSeriesSyncs: {},
      groupIds: {},
      interfaceActionTypeConstraints: {},
      interfaceLinkTypes: {},
      interfaceParameterConstraints: {},
      interfacePropertyTypes: {},
      interfaceTypes: {},
      linkTypeIds: {},
      linkTypes: {},
      markings: {},
      objectPropertyTypeIdsToRids: {},
      objectTypeIds: {},
      objectTypes: {},
      propertyTypeIds: {},
      propertyTypes: {},
      sharedPropertyTypes: {},
      structFieldRidsToApiNames: {},
      timeSeriesSyncs: {},
      valueTypes: {},
      webhooks: {},
      workshopModules: {},
    },
    linkTypes: {},
    objectTypes: {},
    ruleSets: {},
    sharedPropertyTypes: {},
  };
}

describe("writeOntologyArtifacts", () => {
  let buildDir: string;

  beforeEach(() => {
    buildDir = fs.mkdtempSync(path.join(os.tmpdir(), "maker-artifacts-"));
  });

  afterEach(() => {
    fs.rmSync(buildDir, { recursive: true, force: true });
  });

  it("rejects an SDK output inside the Marketplace block data directory", async () => {
    const ontologyIr: OntologyIrV2 = {
      importedOntology: emptyBlock(),
      importedValueTypes: [],
      ontology: emptyBlock(),
      randomnessKey: "00000000-0000-0000-0000-000000000000",
      transitiveImportedOntology: emptyBlock(),
      valueTypes: [],
    };

    await expect(
      writeOntologyArtifacts(
        ontologyIr,
        buildDir,
        path.join(buildDir, "temp_block_data", "ontology.json"),
      ),
    ).rejects.toThrow(
      "sdkOutput must be outside the Marketplace block data directory",
    );
  });

  it("separates Marketplace block data from the SDK generation envelope", async () => {
    const ontology = emptyBlock();
    const ontologyIr: OntologyIrV2 = {
      importedOntology: emptyBlock(),
      importedValueTypes: [],
      ontology,
      randomnessKey: "00000000-0000-0000-0000-000000000000",
      transitiveImportedOntology: emptyBlock(),
      valueTypes: [],
    };
    const sdkOutput = path.join(buildDir, "sdk_input", "ontology.json");

    await writeOntologyArtifacts(ontologyIr, buildDir, sdkOutput);

    const marketplaceFile = JSON.parse(
      fs.readFileSync(
        path.join(buildDir, "temp_block_data", "ontology.json"),
        "utf-8",
      ),
    );
    expect(marketplaceFile).toEqual(ontology);
    expect(marketplaceFile).toHaveProperty("objectTypes");
    expect(marketplaceFile).toHaveProperty("actionTypes");
    expect(marketplaceFile).not.toHaveProperty("ontology");
    expect(marketplaceFile).not.toHaveProperty("valueTypes");
    expect(marketplaceFile).not.toHaveProperty("transitiveImportedOntology");

    const sdkInputFile = JSON.parse(fs.readFileSync(sdkOutput, "utf-8"));
    expect(sdkInputFile).toEqual(ontologyIr);
    expect(sdkInputFile).toHaveProperty("ontology");
    expect(sdkInputFile).toHaveProperty("valueTypes", []);
    expect(sdkInputFile).toHaveProperty("importedValueTypes", []);
    expect(sdkInputFile).toHaveProperty("transitiveImportedOntology");
  });
});
