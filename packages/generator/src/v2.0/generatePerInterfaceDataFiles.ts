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
import { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import { ForeignType } from "../GenerateContext/ForeignType.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst } from "./UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.js";

/** @internal */
export async function generatePerInterfaceDataFiles(
  { fs, outDir, ontology, importExt, forInternalUse }: GenerateContext,
) {
  const interfacesDir = path.join(outDir, "ontology", "interfaces");
  await fs.mkdir(interfacesDir, {
    recursive: true,
  });

  for (const obj of Object.values(ontology.interfaceTypes)) {
    if (obj instanceof ForeignType) continue;

    await fs.writeFile(
      path.join(interfacesDir, `${obj.shortApiName}.ts`),
      await formatTs(`
        import type { PropertyDef as $PropertyDef } from "${
        forInternalUse ? "@osdk/api" : "@osdk/client"
      }";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
      ${
        __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
          obj,
          ontology,
          true,
          forInternalUse,
        )
      }
    `),
    );
  }

  await fs.writeFile(
    interfacesDir + ".ts",
    await formatTs(`
    ${
      Object.values(ontology.interfaceTypes).filter(i =>
        i instanceof EnhancedInterfaceType
      ).map(interfaceType =>
        `export {${interfaceType.shortApiName}} from "./interfaces/${interfaceType.shortApiName}${importExt}";`
      ).join("\n")
    }
    ${
      Object.keys(ontology.interfaceTypes).length === 0
        ? "export {}"
        : ""
    }
    `),
  );
}
