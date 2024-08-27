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
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { MinimalFs } from "../MinimalFs.js";
import { formatTs } from "../util/test/formatTs.js";
import { wireObjectTypeV2ToSdkObjectConstV1 } from "./wireObjectTypeV2ToSdkObjectConstV1.js";
import { wireObjectTypeV2ToObjectInterfaceStringV1 } from "./wireObjectTypeV2ToV1ObjectInterfaceString.js";

export async function generatePerObjectInterfaceAndDataFiles(
  ontology: EnhancedOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(ontology.og.objectTypes).map(async (object) => {
      const relPath = path.join(
        ".",
        "ontology",
        `objects`,
        `${object.objectType.apiName}.ts`,
      );

      await fs.writeFile(
        path.join(outDir, `${object.objectType.apiName}.ts`),
        await formatTs(`
        import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from "@osdk/api";
        ${
          wireObjectTypeV2ToObjectInterfaceStringV1(
            object,
            importExt,
          )
        }

        ${
          wireObjectTypeV2ToSdkObjectConstV1(
            object,
            { ontology },
            relPath,
          )
        }
        `),
      );
    }),
  );

  await fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(`
    ${
      Object.keys(ontology.og.objectTypes).map(apiName =>
        `export * from "./${apiName}${importExt}";`
      ).join("\n")
    }
      export type { ObjectSet } from "@osdk/legacy-client";\n
    `),
  );
}
