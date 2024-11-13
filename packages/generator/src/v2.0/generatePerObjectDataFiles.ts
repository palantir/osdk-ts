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
import { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import { ForeignType } from "../GenerateContext/ForeignType.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";
import {
  wireObjectTypeV2ToSdkObjectConstV2,
} from "./wireObjectTypeV2ToSdkObjectConstV2.js";

export async function generatePerObjectDataFiles(
  ctx: GenerateContext,
) {
  const {
    fs,
    outDir,
    ontology,
    importExt,
  } = ctx;
  await fs.mkdir(path.join(outDir, "ontology", "objects"), { recursive: true });
  for (const obj of Object.values(ontology.objectTypes)) {
    if (obj instanceof ForeignType) continue;
    const relPath = path.join(
      ".",
      "ontology",
      `objects`,
      `${obj.shortApiName}.ts`,
    );

    const outFilePath = path.join(outDir, relPath);
    await fs.writeFile(
      outFilePath,
      await formatTs(`
        import type { PropertyDef as $PropertyDef } from "${
        ctx.forInternalUse
          ? "@osdk/api"
          : "@osdk/client"
      }";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
        ${wireObjectTypeV2ToSdkObjectConstV2(obj.raw, ctx, relPath)}
      `),
    );
  }

  await fs.writeFile(
    path.join(outDir, "ontology", "objects.ts"),
    await formatTs(`
    ${
      Object.values(ctx.ontology.objectTypes).filter(o =>
        o instanceof EnhancedObjectType
      ).map(objType =>
        `export {${objType.shortApiName}} from "./objects/${objType.shortApiName}${importExt}";`
      ).join("\n")
    }
    ${Object.keys(ontology.objectTypes).length === 0 ? "export {};" : ""}
    `),
  );
}
