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
import { wireObjectTypeV2ToSdkObjectDefinition } from "../shared/wireObjectTypeV2ToSdkObjectDefinition";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { wireObjectTypeV2ToObjectInterfaceStringV1 } from "./wireObjectTypeV2ToV1ObjectInterfaceString";

export async function generateObjectInterfaces(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  await Promise.all(
    Object.values(ontology.objectTypes).map(async (object) => {
      await fs.writeFile(
        `${outDir}/${object.apiName}.ts`,
        await formatTs(`
        import { ObjectDefinition } from "@osdk/api";
        ${wireObjectTypeV2ToObjectInterfaceStringV1(object)}
         export const ${object.apiName} = ${
          JSON.stringify(wireObjectTypeV2ToSdkObjectDefinition(object), null, 2)
        } satisfies ObjectDefinition<"${object.apiName}", "${object.apiName}">;`),
      );
    }),
  );

  await fs.writeFile(
    `${outDir}/index.ts`,
    await formatTs(`// Path: ${path.join(outDir, "index.ts")}
    ${
      Object.values(ontology.objectTypes).map(o =>
        `export * from "./${o.apiName}";`
      ).join("\n")
    }
    `),
  );
}
