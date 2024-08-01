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
import invariant from "tiny-invariant";
import type { EnhancedBase } from "../GenerateContext/EnhancedBase.js";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { startsWithApiNamespace } from "../shared/apiNamespaces/startsWithApiNamespace.js";
import { generatePerActionDataFiles } from "../shared/generatePerActionDataFiles.js";
import { sanitizeMetadata } from "../shared/sanitizeMetadata.js";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst } from "../shared/UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.js";
import {
  wireObjectTypeV2ToSdkObjectConst,
} from "../shared/wireObjectTypeV2ToSdkObjectConst.js";
import { stringUnionFrom } from "../util/stringUnionFrom.js";
import { formatTs } from "../util/test/formatTs.js";
import { verifyOutDir } from "../util/verifyOutDir.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateOntologyMetadataFile } from "./generateMetadata.js";
import { generatePerQueryDataFilesV2 } from "./generatePerQueryDataFiles.js";

async function generateRootIndexTsFile(
  { fs, outDir, importExt }: GenerateContext,
) {
  fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(
      `
        export { Ontology } from "./Ontology${importExt}";
        export * from "./ontology/actions/index${importExt}";
        export * from "./ontology/objects${importExt}";
        export * from "./ontology/interfaces${importExt}";
        export * from "./ontology/queries/index${importExt}";
    `,
    ),
  );
}

async function generateOntologyTsFile(
  {
    fs,
    outDir,
    importExt,
    ontology,
  }: GenerateContext,
) {
  function helper(types: Record<string, EnhancedBase<any>>, prefix: string) {
    return Object.values(types).map((type) => {
      return `"${type.shortApiName}": ${prefix}${type.shortApiName}`;
    }).join(",\n");
  }

  await fs.writeFile(
    path.join(outDir, "Ontology.ts"),
    await formatTs(
      `
      import type { OntologyDefinition } from "@osdk/api";
      import * as Actions from "./ontology/actions/index${importExt}";
      import * as Objects from "./ontology/objects${importExt}";
      import * as Interfaces from "./ontology/interfaces${importExt}";
      import * as Queries from "./ontology/queries/index${importExt}";
      import { OntologyMetadata } from "./OntologyMetadata${importExt}";
      
      export interface Ontology extends OntologyDefinition<${
        stringUnionFrom(
          Object.values(ontology.objectTypes).map(ot => ot.fullApiName),
        )
      }> {
        metadata: OntologyMetadata,
        objects: {
          ${helper(ontology.objectTypes, "Objects.")}
        },
        actions: {
          ${helper(ontology.actionTypes, "typeof Actions.")}
        },
        queries: {
          ${helper(ontology.queryTypes, "typeof Queries.")}
        },
        interfaces: {
          ${helper(ontology.interfaceTypes, "Interfaces.")}
        }
      }

      export const Ontology: Ontology = {
        metadata: OntologyMetadata,
        objects: {
          ${helper(ontology.objectTypes, "Objects.")}
        },
        actions: {
          ${helper(ontology.actionTypes, "Actions.")}
        },
        queries: {
          ${helper(ontology.queryTypes, "Queries.")}
        },
        interfaces: {
          ${helper(ontology.interfaceTypes, "Interfaces.")}             
        }
      };

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
    sanitizedOntology,
    importExt,
    ontologyApiNamespace,
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
        import type { ObjectTypeDefinition, VersionBound, ObjectTypeLinkDefinition, PropertyDef } from "@osdk/api";
        import { Osdk } from "@osdk/client.api";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";

        ${wireObjectTypeV2ToSdkObjectConst(obj.og, ctx, relPath, true)}
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
  const enhancedOntology = enhanceOntology(
    sanitizedOntology,
    ontologyApiNamespace,
    new Map(),
    importExt,
  );

  const objectNames = sortedKeys(sanitizedOntology.objectTypes);
  const actionNames = sortedKeys(sanitizedOntology.actionTypes);
  const queryNames = sortedKeys(sanitizedOntology.queryTypes);
  const interfaceNames = sortedKeys(sanitizedOntology.interfaceTypes ?? {});
  const sharedPropertyNames = sortedKeys(
    sanitizedOntology.sharedPropertyTypes ?? {},
  );

  function invariantStartsWithNamespace(type: string, names: string[]) {
    invariant(
      names.every((name: string) =>
        startsWithApiNamespace(name, ontologyApiNamespace)
      ),
      `${type}: ${names}`,
    );
  }

  invariantStartsWithNamespace("objectNames", objectNames);
  invariantStartsWithNamespace("actionNames", actionNames);
  invariantStartsWithNamespace("queryNames", queryNames);
  invariantStartsWithNamespace("interfaceNames", interfaceNames);
  invariantStartsWithNamespace("sharedPropertyNames", sharedPropertyNames);

  await fs.mkdir(outDir, { recursive: true });

  const ctx: GenerateContext = {
    sanitizedOntology,
    ontology: enhanceOntology(
      sanitizedOntology,
      ontologyApiNamespace,
      apiNamespacePackageMap,
      importExt,
    ),
    importExt,
    fs,
    outDir,
    ontologyApiNamespace,
    apiNamespacePackageMap,
  };

  await generateRootIndexTsFile(ctx);
  await generateOntologyMetadataFile(ctx, userAgent);
  await generateOntologyTsFile(ctx);
  await generateEachObjectFile(ctx);
  await generateOntologyInterfaces(ctx);

  const actionsDir = path.join(outDir, "ontology", "actions");
  await fs.mkdir(actionsDir, { recursive: true });
  await generatePerActionDataFiles(
    ctx,
    true,
  );

  await fs.writeFile(
    path.join(outDir, "ontology", "objects.ts"),
    await formatTs(`
    ${
      Object.keys(ontology.objectTypes).sort((a, b) => a.localeCompare(b)).map(
        apiName => `export * from "./objects/${apiName}${importExt}";`,
      ).join("\n")
    }
    ${Object.keys(ontology.objectTypes).length === 0 ? "export {};" : ""}
    `),
  );

  const queriesDir = path.join(outDir, "ontology", "queries");
  await fs.mkdir(queriesDir, { recursive: true });
  await generatePerQueryDataFilesV2(
    {
      ontology: enhancedOntology,
      fs,
      importExt,
      outDir,
    },
    true,
  );
}

function sortedKeys(obj: Record<string, any>) {
  return Object.keys(obj).sort((a, b) => a.localeCompare(b));
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
    
      import type { InterfaceDefinition, PropertyDef, VersionBound } from "@osdk/api";
      import { $osdkMetadata, $expectedClientVersion } from "../../OntologyMetadata${importExt}";
      import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";

      ${
        __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
          obj.og,
          ontology.og,
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
      Object.keys(ontology.interfaceTypes ?? {}).map(apiName =>
        `export * from "./interfaces/${apiName}${importExt}";`
      ).join("\n")
    }
    ${
      Object.keys(ontology.interfaceTypes ?? {}).length === 0
        ? "export {}"
        : ""
    }
    `),
  );
}
