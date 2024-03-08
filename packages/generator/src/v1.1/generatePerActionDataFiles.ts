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
import type { MinimalFs } from "../MinimalFs";
import { wireActionTypeV2ToSdkActionDefinition } from "../shared/wireActionTypeV2ToSdkActionDefinition";
import { getObjectDefIdentifier } from "../shared/wireObjectTypeV2ToSdkObjectConst";
import { deleteUndefineds } from "../util/deleteUndefineds";
import { stringify } from "../util/stringify";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { getDescriptionIfPresent } from "./wireObjectTypeV2ToV1ObjectInterfaceString";

export async function generatePerActionDataFiles(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string,
  v2: boolean,
) {
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(ontology.actionTypes).map(async (action) => {
      const uniqueApiNames = new Set(
        extractReferencedObjectsFromAction(action),
      );

      const uniqueApiNamesString = uniqueApiNames.size > 0
        ? [...uniqueApiNames].map(apiName => `"${apiName}"`).join("|")
        : "never";

      const fullActionDef = deleteUndefineds(
        wireActionTypeV2ToSdkActionDefinition(action),
      );

      const { parameters, ...actionDefSansParameters } = fullActionDef;

      const actionDefIdentifier = `ActionDef$${action.apiName}`;
      const paramsDefIdentifier = `${actionDefIdentifier}$Params`;
      const paramsIdentifier = `${action.apiName}$Params`;

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
                    return `ObjectActionDataType<"${type.object}", ${
                      getObjectDefIdentifier(type.object, v2)
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
        // this way we can generate a strict type for the function itself and reference it from the Aciton Definition
        return `
        
          ${createParamsDef()}
          

          // Represents the runtime arguments for the action
          export type ${paramsIdentifier} = NOOP<OsdkActionParameters<${paramsDefIdentifier}>>;

          
          // Represents a fqn of the action
          export interface ${action.apiName} {
            ${getDescriptionIfPresent(action.description)}
             <OP extends ApplyActionOptions>(args: ${paramsIdentifier}, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
          }

          
          // Represents the definition of the action
          export interface ${actionDefIdentifier} extends ActionDefinition<"${action.apiName}", ${uniqueApiNamesString}, ${action.apiName}>{
          ${
          Object.entries(actionDefSansParameters).sort((a, b) =>
            a[0].localeCompare(b[0])
          ).map(([key, value]) => {
            return `${key}: ${JSON.stringify(value)};`;
          }).join("\n")
        }
          parameters: ${paramsDefIdentifier}
        }`;
      }

      function createV2Object() {
        return `  export const ${action.apiName}: ${actionDefIdentifier} = ${
          JSON.stringify(fullActionDef, null, 2)
        } `;
      }

      function createV1Object() {
        return `  export const ${action.apiName} = ${
          JSON.stringify(fullActionDef, null, 2)
        } satisfies ActionDefinition<"${action.apiName}", ${uniqueApiNamesString}>;`;
      }

      const referencedObjectDefs = new Set();
      for (const p of Object.values(action.parameters)) {
        if (p.dataType.type === "object" || p.dataType.type === "objectSet") {
          referencedObjectDefs.add(
            getObjectDefIdentifier(p.dataType.objectApiName!, v2),
          );
          referencedObjectDefs.add(
            getObjectDefIdentifier(p.dataType.objectTypeApiName!, v2),
          );
        }
      }

      const importObjects = referencedObjectDefs.size > 0
        ? `import type {${
          [...referencedObjectDefs].join(",")
        }} from "../objects${importExt}";`
        : "";

      await fs.writeFile(
        path.join(outDir, `${action.apiName}.ts`),
        await formatTs(`
          import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType } from "@osdk/api";
          import type { ActionSignature, ApplyActionOptions, OsdkActionParameters,ActionReturnTypeForOptions, NOOP } from '@osdk/client';
          ${importObjects}

        
          ${v2 ? createV2Types() : ""}

          ${v2 ? createV2Object() : createV1Object()}
        `),
      );
    }),
  );

  await fs.writeFile(
    path.join(outDir, `index.ts`),
    await formatTs(`
      ${
      Object.values(ontology.actionTypes).map(action =>
        `export {${action.apiName}} from "./${action.apiName}${importExt}";`
      )
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
