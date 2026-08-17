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
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { OntologyIrToFullMetadataConverter } from "./OntologyIrToFullMetadataConverter.js";
import { buildSemanticManifest } from "./semanticManifest.js";

function isOntologyIr(value: object): value is OntologyIr {
  return "ontology" in value
    && typeof value.ontology === "object"
    && value.ontology != null
    && "importedOntology" in value
    && typeof value.importedOntology === "object"
    && value.importedOntology != null;
}

describe(buildSemanticManifest, () => {
  it("records interface-link operations and unknown implementers", () => {
    const parsed: object = JSON.parse(
      readFileSync(
        fileURLToPath(
          new URL("./__fixtures__/defenseLike/ontology.json", import.meta.url),
        ),
        "utf8",
      ),
    );
    if (!isOntologyIr(parsed)) {
      throw new Error("Invalid fixture");
    }
    const metadata = OntologyIrToFullMetadataConverter
      .getFullMetadataFromEnvelope(parsed);

    const manifest = buildSemanticManifest(metadata, {
      packageName: "@palantir/defense-ontology-sdk",
      packageVersion: "0.0.0-dev",
      ontologyIdentity: "portable",
    });

    expect(
      manifest.interfaces.find((entry) =>
        entry.apiName === "defense.TrackedAsset"
      ),
    ).toMatchObject({
      implementerCompleteness: "unknown",
    });
    expect(
      manifest.actions.find((entry) =>
        entry.apiName === "createTrackedAssetObservation"
      )?.operations[0],
    ).toMatchObject({
      type: "createInterfaceLink",
    });
  });
});
