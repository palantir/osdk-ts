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
import type { MinimalFs } from "../../MinimalFs.js";
import { formatTs } from "../../util/test/formatTs.js";
import { generateAggregationsDir } from "./internal-foundry-ontology-runtime-dist/generateAggregationsDir.js";
import { generateBaseTypesDir } from "./internal-foundry-ontology-runtime-dist/generateBaseTypesDir.js";
import { generateClientDir } from "./internal-foundry-ontology-runtime-dist/generateClientDir.js";
import { generateFiltersDir } from "./internal-foundry-ontology-runtime-dist/generateFiltersDir.js";
import { generateOntologyProviderDir } from "./internal-foundry-ontology-runtime-dist/generateOntologyProviderDir.js";
import { generatePagingDir } from "./internal-foundry-ontology-runtime-dist/generatePagingDir.js";

export async function generateOntologyRuntimeDistDir(
  outDir: string,
  fs: MinimalFs,
  importExt = "",
) {
  const runtimeDistDir = path.join(
    outDir,
    "internal",
    "@foundry",
    "ontology-runtime",
    "dist",
  );
  await fs.mkdir(runtimeDistDir, { recursive: true });

  await generateOntologyProviderDir(fs, runtimeDistDir, importExt);
  await generateAggregationsDir(fs, runtimeDistDir, importExt);
  await generatePagingDir(runtimeDistDir, fs, importExt);
  await generateBaseTypesDir(runtimeDistDir, fs, importExt);
  await generateClientDir(runtimeDistDir, fs, importExt);
  await generateFiltersDir(runtimeDistDir, fs, importExt);

  // Nothing exists for this in the new codebase so we skip
  // but I already wrote the code so leaving this for now in case we need it
  // await generateCommonDir(runtimeDistDir, fs);

  await fs.writeFile(
    path.join(runtimeDistDir, "index.ts"),
    // TRASHFIXME
    await formatTs(`
      export * from "./aggregations/index${importExt}";
      export * from "./baseTypes/index${importExt}";
      ${""
      // Skipping this one, it doesnt have an equiv now
      // export * from "./common/index${importExt}";
    }
      // export * from "./filters/index${importExt}";
      ${""
      // Skipping this one, it doesnt have an equiv now
      // export * from "./iterator/index${importExt}";
    }
      ${""
      // Skipping this one, its not used
      // export * from "./models/index${importExt}";
    }
    
      export * from "./ontologyProvider/index${importExt}";
      export * from "./paging/index${importExt}";
`),
  );
}
