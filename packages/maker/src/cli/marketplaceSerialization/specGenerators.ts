/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import type { SerializedDataLocator } from "@osdk/client.unstable/api";
import type { UUID } from "crypto";
import { getShapes } from "../../conversion/toMarketplace/shapeExtractors/IrShapeExtractor.js";
import { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import type { CodeBlockSetSpec } from "./CodeBlockSetSpec.js";
import type { CodeBlockSpec } from "./CodeBlockSpec.js";
import type { MarketplaceBundleManifestEntry } from "./StoreManifestEntry.js";

const ADD_ON_FILE_LOCATOR: SerializedDataLocator = {
  type: "files",
  files: {
    path: "marketplace_internal_block_add_on",
  },
};

export type SemverVersion = `${number}.${number}.${number}`;

export function isSemver(maybeSemver: string): maybeSemver is SemverVersion {
  const semverRegex = /^\d+\.\d+\.\d+$/;
  return semverRegex.test(maybeSemver);
}

export function generateBlockSetSpec(
  version: SemverVersion,
  productName: string,
  productDesc: string,
  packageName: string,
  codeBlocks: Record<UUID, CodeBlockSpec>,
): CodeBlockSetSpec {
  return {
    version: version,
    creationTimestamp: new Date().toISOString(),
    about: {
      fallbackDescription: productName,
      fallbackTitle: productDesc,
      localizedDescription: {},
      localizedTitle: {},
    },
    generatedBlocks: codeBlocks,
    packageName,
  };
}

export function generateStoreManifest(
  blockSetSpecs: Record<UUID, CodeBlockSetSpec>,
): MarketplaceBundleManifestEntry[] {
  return Object.entries(blockSetSpecs).map(([fileName, spec]) => {
    return {
      blockSetVersionId: fileName as UUID,
      blockSetVersion: spec.version,
      titleAndDescription: spec.about,
      mavenProductId: spec.packageName,
    };
  });
}

export async function generateOntologyBlockSpec(
  mavenGroup: string,
  ontologyBlockDataV2: OntologyIr,
  randomnessKey?: string,
): Promise<CodeBlockSpec> {
  const shapes = await getShapes(
    ontologyBlockDataV2.ontology,
    new OntologyRidGeneratorImpl(),
    randomnessKey,
  );
  return {
    blockMavenCoordinate: `${mavenGroup}:ontology`,
    inputs: Object.fromEntries(shapes.inputShapes),
    outputs: Object.fromEntries(shapes.outputShapes),
    blockData: [{
      type: "files",
      files: {
        path: "ontology.json",
      },
    }],
    blockType: "ONTOLOGY",
    inputMappingEntries: [],
    externalRecommendations: [],
    inputShapeMetadata: Object.fromEntries(shapes.inputShapeMetadata),
  };
}
