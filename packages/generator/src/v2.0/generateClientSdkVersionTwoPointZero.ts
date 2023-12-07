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
import type { MinimalFs } from "../MinimalFs";
import { wireObjectTypeV2ToSdkObjectConst } from "../shared/wireObjectTypeV2ToSdkObjectConst";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { generateOntologyMetadataFile } from "./generateMetadata";

export async function generateClientSdkVersionTwoPointZero(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  packageType: "module" | "commonjs" = "commonjs",
) {
  const importExt = packageType === "module" ? ".js" : "";
  await fs.mkdir(outDir, { recursive: true });

  fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(
      `
        export { Ontology } from "./Ontology${importExt}";
    `,
    ),
  );

  const objectNames: (keyof WireOntologyDefinition["objectTypes"])[] = Object
    .keys(
      ontology.objectTypes,
    );

  await generateOntologyMetadataFile(ontology, fs, outDir);

  fs.writeFile(
    path.join(outDir, "Ontology.ts"),
    await formatTs(
      `
      import type { OntologyDefinition } from "@osdk/api";
      ${
        objectNames.map((name) =>
          `import {${name}} from "./objects/${name}${importExt}";`
        )
          .join("\n")
      }
      import { OntologyMetadata } from "./OntologyMetadata${importExt}";
      
      export const Ontology = {
        metadata: OntologyMetadata,
        objects: {
          ${
        objectNames.map((name) => `${name}: ${name},`)
          .join("\n")
      }
        },
        actions: {},
        queries: {},
      } satisfies OntologyDefinition<${
        objectNames.map(n => `"${n}"`).join("|")
      }>;
    `,
    ),
  );

  await fs.mkdir(path.join(outDir, "objects"), { recursive: true });
  for (const name of objectNames) {
    const obj = ontology.objectTypes[name];

    await fs.writeFile(
      path.join(outDir, `objects`, `${name}.ts`),
      await formatTs(`
    
      import type { ObjectTypeDefinition } from "@osdk/api";

      ${wireObjectTypeV2ToSdkObjectConst(obj, true)}

      ${
        /* TODO: FIXME
      //   wireObjectTypeV2ToObjectDefinitionInterfaceString(
      //     obj,
      //   )
      */
        ""}
    `),
    );
  }

  await fs.writeFile(
    path.join(outDir, "objects", "index.ts"),
    await formatTs(`
    ${
      Object.keys(ontology.objectTypes).map(apiName =>
        `export * from "./${apiName}${importExt}";`
      ).join("\n")
    }
    `),
  );
}
