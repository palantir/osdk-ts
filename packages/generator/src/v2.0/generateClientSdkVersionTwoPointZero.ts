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
import { sanitizeMetadata } from "../shared/sanitizeMetadata";
import { wireObjectTypeV2ToSdkObjectConst } from "../shared/wireObjectTypeV2ToSdkObjectConst";
import { formatTs } from "../util/test/formatTs";
import { generatePerActionDataFiles } from "../v1.1/generatePerActionDataFiles";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { generateOntologyMetadataFile } from "./generateMetadata";

export async function generateClientSdkVersionTwoPointZero(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  packageType: "module" | "commonjs" = "commonjs",
) {
  const sanitizedOntology = sanitizeMetadata(ontology);

  const objectNames = Object.keys(sanitizedOntology.objectTypes);
  const actionNames = Object.keys(sanitizedOntology.actionTypes);
  const queryNames = Object.keys(sanitizedOntology.queryTypes);

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

  await generateOntologyMetadataFile(sanitizedOntology, fs, outDir);

  await fs.writeFile(
    path.join(outDir, "Ontology.ts"),
    await formatTs(
      `
      import type { OntologyDefinition } from "@osdk/api";
      import * as Actions from "./ontology/actions/index${importExt}";
      import * as Objects from "./ontology/objects/index${importExt}";
      import { OntologyMetadata } from "./OntologyMetadata${importExt}";
      
      const _Ontology = {
        metadata: OntologyMetadata,
        objects: {
          ${
        objectNames.map((objectName) => {
          return `${objectName}: Objects.${objectName}`;
        }).join(",\n")
      }
          
        },
        actions: {
          ${
        actionNames.map((actionName) => {
          return `${actionName}: Actions.${actionName}`;
        }).join(",\n")
      }
        },
        queries: {
          // TODO
        },
      } satisfies OntologyDefinition<${
        objectNames.map(n => `"${n}"`).join("|")
      }>;

      type _Ontology = typeof _Ontology;
      export interface Ontology extends _Ontology {}
      export const Ontology = _Ontology as Ontology;
    `,
    ),
  );

  await fs.mkdir(path.join(outDir, "ontology", "objects"), { recursive: true });
  for (const name of objectNames) {
    const obj = ontology.objectTypes[name];

    await fs.writeFile(
      path.join(outDir, "ontology", `objects`, `${name}.ts`),
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

  const actionsDir = path.join(outDir, "ontology", "actions");
  await fs.mkdir(actionsDir, { recursive: true });
  await generatePerActionDataFiles(
    sanitizedOntology,
    fs,
    actionsDir,
    importExt,
  );

  await fs.writeFile(
    path.join(outDir, "ontology", "objects", "index.ts"),
    await formatTs(`
    ${
      Object.keys(ontology.objectTypes).map(apiName =>
        `export * from "./${apiName}${importExt}";`
      ).join("\n")
    }
    `),
  );
}
