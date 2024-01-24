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

import path from "node:path";
import type { MinimalFs } from "../MinimalFs.js";
import { formatTs } from "../util/test/formatTs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";

export async function generateOntologyMetadata(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  const objectNames = Object.keys(ontology.objectTypes);
  fs.writeFile(
    path.join(outDir, "Ontology.ts"),
    await formatTs(
      `
          import type { OntologyDefinition } from "@osdk/api";
          ${
        objectNames.map((name) => `import {${name}} from "./objects/${name}";`)
          .join("\n")
      }
          ${/* FIXME: Generate this file */ ""}
          import { OntologyMetadata } from "./OntologyMetadata";
          
          export const Ontology = {
            metadata: OntologyMetadata,
            objects: {
              ${
        objectNames.map((name) => `${name}: ${name},`)
          .join("\n")
      }
            },
          } satisfies OntologyDefinition<${
        objectNames.map(n => `"${n}"`).join("|")
      }>;
        `,
    ),
  );
}
