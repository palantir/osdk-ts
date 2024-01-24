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
import type { MinimalFs } from "../MinimalFs.js";
import { wireActionTypeV2ToSdkActionDefinition } from "../shared/wireActionTypeV2ToSdkActionDefinition.js";
import { formatTs } from "../util/test/formatTs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";

export async function generatePerActionDataFiles(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(ontology.actionTypes).map(async (action) => {
      const uniqueApiNames = new Set(
        extractReferencedObjectsFromAction(action),
      );
      await fs.writeFile(
        path.join(outDir, `${action.apiName}.ts`),
        await formatTs(`
          import { ActionDefinition } from "@osdk/api";
  
           export const ${action.apiName} = ${
          JSON.stringify(
            wireActionTypeV2ToSdkActionDefinition(
              action,
            ),
            null,
            2,
          )
        } satisfies ActionDefinition<"${action.apiName}", ${
          uniqueApiNames.size > 0
            ? [...uniqueApiNames].map(apiName => `"${apiName}"`).join(
              "|",
            )
            : "never"
        }>;`),
      );
    }),
  );

  await fs.writeFile(
    path.join(outDir, `index.ts`),
    await formatTs(`
      ${
      Object.values(ontology.actionTypes).map(action =>
        `export * from "./${action.apiName}${importExt}";`
      )
        .join("\n")
    }
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
