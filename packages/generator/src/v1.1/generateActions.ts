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

import type { ActionParameterType } from "@osdk/gateway/types";
import path from "node:path";
import type { MinimalFs } from "../MinimalFs.js";
import { getModifiedEntityTypes } from "../shared/getEditedEntities.js";
import { formatTs } from "../util/test/formatTs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";

export async function generateActions(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  const importedObjects = new Set<string>();
  let actionSignatures = [];
  for (const action of Object.values(ontology.actionTypes)) {
    const entries = Object.entries(action.parameters);

    const modifiedEntityTypes = getModifiedEntityTypes(action);
    const addedObjects = Array.from(modifiedEntityTypes.addedObjects);
    const modifiedObjects = Array.from(modifiedEntityTypes.modifiedObjects);
    addedObjects.forEach(importedObjects.add, importedObjects);
    modifiedObjects.forEach(importedObjects.add, importedObjects);

    let jsDocBlock = ["/**"];
    if (action.description) {
      jsDocBlock.push(`* ${action.description}`);
    }

    let parameterBlock = "";
    if (entries.length > 0) {
      parameterBlock = `params: { \n`;
      for (
        const [parameterName, parameterData] of entries
      ) {
        parameterBlock += `"${parameterName}"`;
        parameterBlock += parameterData.required ? ": " : "?: ";
        const typeScriptType = getTypeScriptTypeFromDataType(
          parameterData.dataType,
          importedObjects,
        );
        parameterBlock += `${typeScriptType};\n`;

        jsDocBlock.push(
          `* @param {${typeScriptType}} params.${parameterName}`,
        );
      }
      parameterBlock += "}, ";
    }

    jsDocBlock.push(`*/`);
    actionSignatures.push(
      `
      ${jsDocBlock.join("\n")}
      ${action.apiName}<O extends ActionExecutionOptions>(${parameterBlock}options?: O): 
        Promise<Result<ActionResponseFromOptions<O, Edits<${
        addedObjects.length > 0
          ? addedObjects.join(" | ")
          : "void"
      }, ${
        modifiedObjects.length > 0
          ? modifiedObjects.join(" | ")
          : "void"
      }>>, ActionError>>;`,
    );
  }

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(
    path.join(outDir, "Actions.ts"),
    await formatTs(`
    import type { ObjectSet, LocalDate, Timestamp, Attachment, Edits, ActionExecutionOptions, ActionError, Result, ActionResponseFromOptions } from "@osdk/legacy-client";
    ${
      Array.from(importedObjects).map(importedObject =>
        `import type { ${importedObject} } from "../objects/${importedObject}${importExt}";`
      ).join("\n")
    }
    export interface Actions {
    ${actionSignatures.join("\n")}
    }
  `),
  );
}

function getTypeScriptTypeFromDataType(
  actionParameter: ActionParameterType,
  importedObjects: Set<string>,
): string {
  switch (actionParameter.type) {
    case "objectSet": {
      const objectType = actionParameter.objectTypeApiName!;
      importedObjects.add(objectType);
      return `ObjectSet<${objectType}>`;
    }
    case "object": {
      const objectType = actionParameter.objectTypeApiName!;
      importedObjects.add(objectType);
      return `${objectType} | ${objectType}["__primaryKey"]`;
    }
    case "array":
      return `Array<${
        getTypeScriptTypeFromDataType(actionParameter.subType, importedObjects)
      }>`;
    case "string":
      return `string`;
    case "boolean":
      return `boolean`;
    case "attachment":
      return `Attachment`;
    case "date":
      return `LocalDate`;
    case "double":
    case "integer":
    case "long":
      return `number`;
    case "timestamp":
      return `Timestamp`;
    default:
      const _: never = actionParameter;
      throw new Error(`Unsupported action parameter type: ${actionParameter}`);
  }
}
