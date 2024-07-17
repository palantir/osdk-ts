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
import { generatePerActionDataFiles } from "../shared/generatePerActionDataFiles.js";
import { sanitizeMetadata } from "../shared/sanitizeMetadata.js";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst } from "../shared/UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst.js";
import {
  wireObjectTypeV2ToSdkObjectConst,
} from "../shared/wireObjectTypeV2ToSdkObjectConst.js";
import { formatTs } from "../util/test/formatTs.js";
import { verifyOutdir } from "../util/verifyOutdir.js";
import { generatePerQueryDataFiles } from "../v1.1/generatePerQueryDataFiles.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateOntologyMetadataFile } from "./generateMetadata.js";

export async function generateClientSdkVersionTwoPointZero(
  ontology: WireOntologyDefinition,
  userAgent: string,
  fs: MinimalFs,
  outDir: string,
  packageType: "module" | "commonjs" = "commonjs",
) {
  await verifyOutdir(outDir, fs);

  const sanitizedOntology = sanitizeMetadata(ontology);

  const objectNames = Object.keys(sanitizedOntology.objectTypes).sort((a, b) =>
    a.localeCompare(b)
  );
  const actionNames = Object.keys(sanitizedOntology.actionTypes).sort((a, b) =>
    a.localeCompare(b)
  );
  const queryNames = Object.keys(sanitizedOntology.queryTypes).sort((a, b) =>
    a.localeCompare(b)
  );
  const interfaceNames = Object.keys(
    sanitizedOntology.interfaceTypes ?? {},
  ).sort((a, b) => a.localeCompare(b));

  const importExt = packageType === "module" ? ".js" : "";
  await fs.mkdir(outDir, { recursive: true });

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

  await generateOntologyMetadataFile(sanitizedOntology, userAgent, fs, outDir);

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
        stringUnionFrom(objectNames)
      }> {
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
          return `${actionName}: typeof Actions.${actionName}`;
        }).join(",\n")
      }
        },
        queries: {
          ${
        queryNames.map((queryName) => {
          return `${queryName}: typeof Queries.${queryName}`;
        }).join(",\n")
      }
        },
        interfaces: {
          ${
        interfaceNames.map((objectName) => {
          return `${objectName}: Interfaces.${objectName}`;
        }).join(",\n")
      }
      }
    }

      export const Ontology: Ontology = {
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
          ${
        queryNames.map((queryName) => {
          return `${queryName}: Queries.${queryName}`;
        }).join(",\n")
      }
        },
        interfaces: {
          ${
        interfaceNames.map((objectName) => {
          return `${objectName}: Interfaces.${objectName}`;
        }).join(",\n")
      }
              
        }
      };

    `,
    ),
  );

  await fs.mkdir(path.join(outDir, "ontology", "objects"), { recursive: true });
  for (const name of objectNames) {
    const obj = ontology.objectTypes[name];

    await fs.writeFile(
      path.join(outDir, "ontology", `objects`, `${name}.ts`),
      await formatTs(`
        import type { ObjectTypeDefinition, VersionBound, ObjectTypeLinkDefinition, PropertyDef } from "@osdk/api";
        import { Osdk } from "@osdk/client.api";
        import { $osdkMetadata } from "../../OntologyMetadata${importExt}";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";

        ${wireObjectTypeV2ToSdkObjectConst(obj, importExt, true)}
      `),
    );
  }

  await generateOntologyInterfaces(
    fs,
    outDir,
    interfaceNames,
    ontology,
    importExt,
  );

  const actionsDir = path.join(outDir, "ontology", "actions");
  await fs.mkdir(actionsDir, { recursive: true });
  await generatePerActionDataFiles(
    sanitizedOntology,
    fs,
    actionsDir,
    importExt,
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
  await generatePerQueryDataFiles(
    sanitizedOntology,
    fs,
    queriesDir,
    importExt,
    true,
  );
}

function stringUnionFrom(values: ReadonlyArray<string>) {
  if (values.length === 0) {
    return "never";
  } else {
    return values.map(v => `"${v}"`).join("|");
  }
}

/** @internal */
async function generateOntologyInterfaces(
  fs: MinimalFs,
  outDir: string,
  interfaceNames: string[],
  ontology: WireOntologyDefinition,
  importExt: string,
) {
  const interfacesDir = path.join(outDir, "ontology", "interfaces");
  await fs.mkdir(interfacesDir, {
    recursive: true,
  });

  for (const name of interfaceNames) {
    const obj = ontology.interfaceTypes![name];

    await fs.writeFile(
      path.join(interfacesDir, `${name}.ts`),
      await formatTs(`
    
      import type { InterfaceDefinition, PropertyDef, VersionBound } from "@osdk/api";
      import { $osdkMetadata, $expectedClientVersion } from "../../OntologyMetadata${importExt}";
      import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";

      ${__UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(obj, ontology, true)}
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
