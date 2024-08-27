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

import type { ActionParameterType, ActionTypeV2 } from "@osdk/gateway/types";
import path from "node:path";
import type { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { ForeignType } from "../GenerateContext/ForeignType.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { getObjectImports } from "../shared/getObjectImports.js";
import { wireActionTypeV2ToSdkActionDefinition } from "../shared/wireActionTypeV2ToSdkActionDefinition.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringUnionFrom } from "../util/stringUnionFrom.js";
import { formatTs } from "../util/test/formatTs.js";

export async function generatePerActionDataFilesV1(
  {
    sanitizedOntology: ontology,
    fs,
    outDir: rootOutDir,
    importExt = "",
    ontology: enhancedOntology,
  }: Pick<
    GenerateContext,
    | "sanitizedOntology"
    | "fs"
    | "outDir"
    | "importExt"
    | "ontology"
  >,
) {
  const outDir = path.join(rootOutDir, "ontology", "actions");

  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(enhancedOntology.actionTypes).map(async (action) => {
      const currentFilePath = `${
        path.join("ontology", "actions", `${action.shortApiName}.ts`)
      }`;

      const uniqueApiNamesArray = extractReferencedObjectsFromAction(action.og);
      const uniqueApiNames = new Set(uniqueApiNamesArray);

      const uniqueApiNamesString = stringUnionFrom([...uniqueApiNames]);

      const fullActionDef = deleteUndefineds(
        wireActionTypeV2ToSdkActionDefinition(action.og),
      );

      const { parameters, ...actionDefSansParameters } = fullActionDef;

      function createV1Object() {
        return `  export const ${action.shortApiName} = ${
          JSON.stringify(fullActionDef, null, 2)
        } satisfies ActionDefinition<"${action.shortApiName}", ${uniqueApiNamesString}>;`;
      }

      const referencedObjectDefs = new Set<EnhancedObjectType | ForeignType>();
      for (const p of Object.values(action.parameters)) {
        if (p.dataType.type === "object" || p.dataType.type === "objectSet") {
          if (p.dataType.objectApiName) {
            referencedObjectDefs.add(
              enhancedOntology.requireObjectType(p.dataType.objectApiName),
            );
          }
          if (p.dataType.objectTypeApiName) {
            referencedObjectDefs.add(
              enhancedOntology.requireObjectType(p.dataType.objectTypeApiName),
            );
          }
        }
        if (
          p.dataType.type === "array"
          && (p.dataType.subType.type === "object"
            || p.dataType.subType.type === "objectSet")
        ) {
          if (p.dataType.subType.objectApiName) {
            referencedObjectDefs.add(
              enhancedOntology.requireObjectType(
                p.dataType.subType.objectApiName,
              ),
            );
          }
          if (p.dataType.subType.objectTypeApiName) {
            referencedObjectDefs.add(
              enhancedOntology.requireObjectType(
                p.dataType.subType.objectTypeApiName,
              ),
            );
          }
        }
      }

      const imports = getObjectImports(
        referencedObjectDefs,
        undefined,
        currentFilePath,
        false,
      );

      await fs.writeFile(
        path.join(rootOutDir, currentFilePath),
        await formatTs(`
          import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType, VersionBound} from "@osdk/api";
          import type { ApplyActionOptions, ApplyBatchActionOptions, ActionReturnTypeForOptions, ActionParam } from '@osdk/client.api';
          import { $osdkMetadata} from "../../OntologyMetadata${importExt}";
          import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
          ${imports}

          ${createV1Object()}
        `),
      );
    }),
  );

  const indexFileRelPath = path.join("ontology", "actions", `index.ts`);
  await fs.writeFile(
    path.join(rootOutDir, indexFileRelPath),
    await formatTs(`
      ${
      Object.values(enhancedOntology.actionTypes).map(action => {
        const exportConstLine = `export {${action.shortApiName} } from "${
          action.getImportPathRelTo(indexFileRelPath)
        }";`;
        const exportTypeLine =
          `export type { ${action.paramsIdentifier} } from "${
            action.getImportPathRelTo(indexFileRelPath)
          }";`;

        return exportConstLine;
      })
        .join("\n")
    }
    ${Object.keys(ontology.actionTypes).length === 0 ? "export {};" : ""}
      `),
  );
}

function extractReferencedObjectsFromAction(
  actionType: ActionTypeV2,
): string[] {
  const referencedObjectsInParameters = Object.values(actionType.parameters)
    .flatMap(({ dataType }) => {
      const objectTypeReference = extractReferencedObjectsFromActionParameter(
        dataType,
      );
      return objectTypeReference ? [objectTypeReference] : [];
    });

  const referenceObjectsInEdits = actionType.operations.flatMap(value => {
    switch (value.type) {
      case "createObject":
        return [value.objectTypeApiName];
      case "modifyObject":
        return [value.objectTypeApiName];
      case "deleteObject":
      case "createLink":
      case "deleteLink":
        return [];
    }
  });

  return [...referenceObjectsInEdits, ...referencedObjectsInParameters];
}

function extractReferencedObjectsFromActionParameter(
  actionParameter: ActionParameterType,
): string | undefined {
  switch (actionParameter.type) {
    case "objectSet":
    case "object":
      return actionParameter.objectTypeApiName;
    case "array":
      return extractReferencedObjectsFromActionParameter(
        actionParameter.subType,
      );
    case "string":
    case "boolean":
    case "attachment":
    case "date":
    case "double":
    case "integer":
    case "long":
    case "timestamp":
      return undefined;
  }
}
