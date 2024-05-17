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
import type { MinimalFs } from "../../../MinimalFs.js";
import { formatTs } from "../../../util/test/formatTs.js";
import { generateErrors } from "./ontologyProvider/generateErrors.js";
import { generateOntologyMetadata } from "./ontologyProvider/generateOntologyMetadata.js";
import { generateResult } from "./ontologyProvider/generateResult.js";

export async function generateOntologyProviderDir(
  fs: MinimalFs,
  runtimeDistDir: string,
  importExt = "",
) {
  const ontologyProviderDir = path.join(runtimeDistDir, "ontologyProvider");
  await fs.mkdir(ontologyProviderDir, { recursive: true });

  await generateErrors(fs, ontologyProviderDir);
  await generateOntologyMetadata(fs, ontologyProviderDir);
  await generateResult(fs, ontologyProviderDir);

  await fs.writeFile(
    path.join(ontologyProviderDir, "index.ts"),
    await formatTs(`
    ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./ErrorHandlers";
    }
      export * from "./Errors${importExt}";
      export * from "./OntologyMetadata${importExt}";
      ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./OntologyObjectFactory${importExt}";
    }
    ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./OntologyProvider${importExt}";
    }
      // export * from "./Result${importExt}";
  `),
  );
}
