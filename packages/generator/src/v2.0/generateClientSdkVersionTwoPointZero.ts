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
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { sanitizeMetadata } from "../shared/sanitizeMetadata.js";
import { formatTs } from "../util/test/formatTs.js";
import { verifyOutDir } from "../util/verifyOutDir.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateOntologyMetadataFile } from "./generateMetadata.js";
import { generatePerActionDataFiles } from "./generatePerActionDataFiles.js";
import { generatePerQueryDataFilesV2 } from "./generatePerQueryDataFiles.js";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst } from "./UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.js";
import {
  wireObjectTypeV2ToSdkObjectConstV2,
} from "./wireObjectTypeV2ToSdkObjectConstV2.js";

async function generateRootIndexTsFile(
  { fs, outDir, importExt, ontologyApiNamespace }: GenerateContext,
) {
  fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(
      `export * from "./ontology/actions${importExt}";
        export * as $Actions from "./ontology/actions${importExt}";
        export * from "./ontology/interfaces${importExt}";
        export * as $Interfaces from "./ontology/interfaces${importExt}";
        export * from "./ontology/objects${importExt}";
        export * as $Objects from "./ontology/objects${importExt}";
        export * from "./ontology/queries${importExt}";
        export * as $Queries from "./ontology/queries${importExt}";
        ${
        ontologyApiNamespace == null
          ? `export { $ontologyRid } from "./OntologyMetadata${importExt}";`
          : ``
      }
    `,
    ),
  );
}

async function generateEachObjectFile(
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
        import type { PropertyDef as $PropertyDef } from "@osdk/api";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
        ${wireObjectTypeV2ToSdkObjectConstV2(obj.raw, ctx, relPath)}
      `),
    );
  }
}

export async function generateClientSdkVersionTwoPointZero(
  ontology: WireOntologyDefinition,
  userAgent: string,
  fs: MinimalFs,
  outDir: string,
  packageType: "module" | "commonjs" = "commonjs",
  ontologyApiNamespace?: string,
  apiNamespacePackageMap: Map<string, string> = new Map(),
) {
  const importExt = packageType === "module" ? ".js" : "";

  await verifyOutDir(outDir, fs);

  const sanitizedOntology = sanitizeMetadata(ontology);

  await fs.mkdir(outDir, { recursive: true });
  const enhancedOntology = enhanceOntology(
    sanitizedOntology,
    ontologyApiNamespace,
    apiNamespacePackageMap,
    importExt,
  );

  const ctx: GenerateContext = {
    sanitizedOntology,
    ontology: enhancedOntology,
    importExt,
    fs,
    outDir,
    ontologyApiNamespace,
    apiNamespacePackageMap,
  };

  await generateRootIndexTsFile(ctx);
  await generateOntologyMetadataFile(ctx, userAgent);
  await generateEachObjectFile(ctx);
  await generateOntologyInterfaces(ctx);

  const actionsDir = path.join(outDir, "ontology", "actions");
  await fs.mkdir(actionsDir, { recursive: true });
  await generatePerActionDataFiles(ctx);

  await fs.writeFile(
    path.join(outDir, "ontology", "objects.ts"),
    await formatTs(`
    ${
      Object.values(enhancedOntology.objectTypes).map(objType =>
        `export * from "./objects/${objType.shortApiName}${importExt}";`
      ).join("\n")
    }
    ${Object.keys(ontology.objectTypes).length === 0 ? "export {};" : ""}
    `),
  );

  await generatePerQueryDataFilesV2(ctx, true);
}

/** @internal */
async function generateOntologyInterfaces(
  { fs, outDir, ontology, importExt }: GenerateContext,
) {
  const interfacesDir = path.join(outDir, "ontology", "interfaces");
  await fs.mkdir(interfacesDir, {
    recursive: true,
  });

  for (const obj of Object.values(ontology.interfaceTypes)) {
    await fs.writeFile(
      path.join(interfacesDir, `${obj.shortApiName}.ts`),
      await formatTs(`
        import type { PropertyDef as $PropertyDef } from "@osdk/api";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
      ${
        __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
          obj,
          ontology,
          true,
        )
      }
    `),
    );
  }

  await fs.writeFile(
    interfacesDir + ".ts",
    await formatTs(`
    ${
      Object.values(ontology.interfaceTypes).map(interfaceType =>
        `export * from "./interfaces/${interfaceType.shortApiName}${importExt}";`
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
