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

import type { MinimalFs } from "../MinimalFs";
import { wireObjectTypeV2ToSdkObjectDefinition } from "../shared/wireObjectTypeV2ToSdkObjectDefinition";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { wireObjectTypeV2ToObjectDefinitionInterfaceString } from "./wireObjectTypeV2ToObjectDefinitionInterfaceString";

export async function generateClientSdkVersionTwoPointZero(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  fs.writeFile(
    `${outDir}/index.ts`,
    await formatTs(
      `
        export { Ontology } from "./Ontology";
    `,
    ),
  );

  const objectNames: (keyof WireOntologyDefinition["objectTypes"] & string)[] =
    Object.keys(
      ontology.objectTypes,
    );

  fs.writeFile(
    `${outDir}/Ontology.ts`,
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

  for (const name of objectNames) {
    const obj = ontology.objectTypes[name];

    fs.writeFile(
      `${outDir}/objects/${name}.ts`,
      await formatTs(`
    
      import type { ObjectDefinition } from "@osdk/api";

      export const ${name} =  ${
        JSON.stringify(wireObjectTypeV2ToSdkObjectDefinition(obj), null, 2)
      } satisfies ${name};

      ${
        wireObjectTypeV2ToObjectDefinitionInterfaceString(
          obj,
        )
      }
    `),
    );
  }
}
