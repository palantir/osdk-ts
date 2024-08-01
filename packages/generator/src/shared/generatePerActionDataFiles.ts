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
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { stringUnionFrom } from "../util/stringUnionFrom.js";
import { formatTs } from "../util/test/formatTs.js";
import { getDescriptionIfPresent } from "../v1.1/wireObjectTypeV2ToV1ObjectInterfaceString.js";
import { wireActionTypeV2ToSdkActionDefinition } from "./wireActionTypeV2ToSdkActionDefinition.js";
import {
  getObjectDefIdentifier,
  getObjectImports,
} from "./wireObjectTypeV2ToSdkObjectConst.js";

export async function generatePerActionDataFiles(
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
  v2: boolean,
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

      const actionDefIdentifier = `ActionDef$${action.shortApiName}`;
      const paramsDefIdentifier = `${actionDefIdentifier}$Params`;
      const paramsIdentifier = `${action.shortApiName}$Params`;

      function createParamsDef() {
        const entries = Object.entries(parameters);
        entries.sort((a, b) => a[0].localeCompare(b[0]));

        if (entries.length === 0) {
          return `// Represents the definition of the parameters for the action
          export type ${paramsDefIdentifier} = Record<string, never>;`;
        }

        return `// Represents the definition of the parameters for the action
        export type ${paramsDefIdentifier} = {
          ${
          entries.map(([key, value]) => {
            return `"${key}": {
                ${
              stringify(value, {
                description: (value, d) => value ? d(value) : undefined, // trick to remove undefineds
                type: (type) => {
                  if (typeof type === "string") {
                    return JSON.stringify(type);
                  } else if (type.type === "object") {
                    const obj = enhancedOntology.requireObjectType(type.object);
                    return `ObjectActionDataType<"${obj.fullApiName}", ${obj
                        .getObjectDefIdentifier(v2)
                      // getObjectDefIdentifier(type.object, v2)
                    }>`;
                  } else if (type.type === "objectSet") {
                    return `ObjectSetActionDataType<"${type.objectSet}", ${
                      getObjectDefIdentifier(type.objectSet, v2)
                    }>`;
                  }
                  return undefined;
                },
              })
            }
            }`;
          })
            .join(";\n")
        }
        }`;
      }

      function createV2Types() {
        // the params must be a `type` to align properly with the `ActionDefinition` interface
        // this way we can generate a strict type for the function itself and reference it from the Action Definition
        return `
        
          ${createParamsDef()}
          

          // Represents the runtime arguments for the action
          export type ${paramsIdentifier} = NOOP<OsdkActionParameters<${paramsDefIdentifier}>> | NOOP<OsdkActionParameters<${paramsDefIdentifier}>>[];

          
          // Represents a fqn of the action
          export interface ${action.shortApiName} {
            ${getDescriptionIfPresent(action.description)}
             <P extends ${paramsIdentifier}, OP extends P extends NOOP<OsdkActionParameters<${paramsDefIdentifier}>>[]? ApplyBatchActionOptions: ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
          }

          
          // Represents the definition of the action
          export interface ${actionDefIdentifier} extends ActionDefinition<"${action.shortApiName}", ${uniqueApiNamesString}, ${action.shortApiName}>, VersionBound<$ExpectedClientVersion> {
          ${
          Object.entries(actionDefSansParameters).sort((a, b) =>
            a[0].localeCompare(b[0])
          ).map(([key, value]) => {
            return `${key}: ${JSON.stringify(value)};`;
          }).join("\n")
        }
          parameters: ${paramsDefIdentifier};
          osdkMetadata: typeof $osdkMetadata;
        }`;
      }

      function createV2Object() {
        return `  export const ${action.shortApiName}: ${actionDefIdentifier} = 
        {
          ${stringify(fullActionDef)},
          osdkMetadata: $osdkMetadata
        }
        `;
      }

      function createV1Object() {
        return `  export const ${action.shortApiName} = ${
          JSON.stringify(fullActionDef, null, 2)
        } satisfies ActionDefinition<"${action.shortApiName}", ${uniqueApiNamesString}>;`;
      }

      const referencedObjectDefs = new Set<EnhancedObjectType>();
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
        v2,
      );

      await fs.writeFile(
        path.join(rootOutDir, currentFilePath),
        await formatTs(`
          import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType, VersionBound} from "@osdk/api";
          import type { ActionSignature, ApplyActionOptions, ApplyBatchActionOptions, OsdkActionParameters,ActionReturnTypeForOptions, NOOP } from '@osdk/client.api';
          import { $osdkMetadata} from "../../OntologyMetadata${importExt}";
          import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
          ${imports}

        
          ${v2 ? createV2Types() : ""}

          ${v2 ? createV2Object() : createV1Object()}
        `),
      );
    }),
  );

  const indexFileRelPath = `${path.join("ontology", "actions", `index.ts`)}`;
  await fs.writeFile(
    path.join(rootOutDir, indexFileRelPath),
    await formatTs(`
      ${
      Object.values(enhancedOntology.actionTypes).map(action => {
        return `export {${action.shortApiName}} from "${
          action.getImportPathRelTo(indexFileRelPath)
        }";`;
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
