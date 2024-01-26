/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import * as path from "node:path";
import type { MinimalFs } from "../../MinimalFs";
import { formatTs } from "../../util/test/formatTs";
import { generateAggregationsDir } from "./internal-foundry-ontology-runtime-dist/generateAggregationsDir";
import { generateBaseTypesDir } from "./internal-foundry-ontology-runtime-dist/generateBaseTypesDir";
import { generateClientDir } from "./internal-foundry-ontology-runtime-dist/generateClientDir";
import { generateFiltersDir } from "./internal-foundry-ontology-runtime-dist/generateFiltersDir";
import { generateOntologyProviderDir } from "./internal-foundry-ontology-runtime-dist/generateOntologyProviderDir";
import { generatePagingDir } from "./internal-foundry-ontology-runtime-dist/generatePagingDir";

export async function generateOntologyRuntimeDistDir(
  outDir: string,
  fs: MinimalFs,
) {
  const runtimeDistDir = path.join(
    outDir,
    "internal",
    "@foundry",
    "ontology-runtime",
    "dist",
  );
  await fs.mkdir(runtimeDistDir, { recursive: true });

  await generateOntologyProviderDir(fs, runtimeDistDir);
  await generateAggregationsDir(fs, runtimeDistDir);
  await generatePagingDir(runtimeDistDir, fs);
  await generateBaseTypesDir(runtimeDistDir, fs);
  await generateClientDir(runtimeDistDir, fs);
  await generateFiltersDir(runtimeDistDir, fs);

  // Nothing exists for this in the new codebase so we skip
  // but I already wrote the code so leaving this for now in case we need it
  // await generateCommonDir(runtimeDistDir, fs);

  await fs.writeFile(
    path.join(runtimeDistDir, "index.ts"),
    // TRASHFIXME
    await formatTs(`
      export * from "./aggregations";
      export * from "./baseTypes";
      ${""
      // Skipping this one, it doesnt have an equiv now
      // export * from "./common";
    }
      // export * from "./filters";
      ${""
      // Skipping this one, it doesnt have an equiv now
      // export * from "./iterator";
    }
      ${""
      // Skipping this one, its not used
      // export * from "./models";
    }
    
      export * from "./ontologyProvider";
      export * from "./paging";
`),
  );
}
