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

import type { OntologyIrOntologyBlockDataV2 } from "@osdk/client.unstable";
import type { FauxFoundry } from "@osdk/faux";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import * as path from "node:path";
import { inspect } from "node:util";
import { applySeed } from "./applySeed.js";
import {
  ontologyFullMetadataPath,
  ontologyIrPath,
} from "./generateOntologyAssets.js";
import { type OacContext } from "./OacContext.js";
import { registerOntologyFullMetadata } from "./registerOntologyFullMetadata.js";
import { readJsonFile } from "./utils/readJsonFile.js";

export async function applyOntologyAndSeed(
  fauxFoundry: FauxFoundry,
  ctx: OacContext,
): Promise<void> {
  const ontology = fauxFoundry.getDefaultOntology();

  const [ontologyFullMetadata, { ontology: ontologyIrBlockData }] =
    await Promise
      .all([
        readJsonFile<OntologyFullMetadata>(
          ontologyFullMetadataPath(ctx.workDir),
        ),
        readJsonFile<{ ontology: OntologyIrOntologyBlockDataV2 }>(
          ontologyIrPath(ctx.workDir),
        ),
      ]);
  registerOntologyFullMetadata(
    ontology,
    ontologyFullMetadata,
    ontologyIrBlockData,
  );

  try {
    if (ctx.hooks?.preSeed) {
      ctx.logger.debug("calling preSeed hook");
    }

    await ctx.hooks?.preSeed?.(ontology);
  } catch (e) {
    ctx.logger.error(
      `Unhandled error from preSeed hook. Ignoring and continuing. ${
        inspect(e)
      }`,
    );
  }

  ctx.logger.debug("applying seed data");
  await applySeed(
    fauxFoundry,
    path.resolve(ctx.ontologyDir, "seed.ts"),
  );
}
