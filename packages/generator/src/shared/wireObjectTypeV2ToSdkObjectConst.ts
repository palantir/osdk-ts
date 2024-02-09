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

import type { ObjectTypeWithLink } from "@osdk/gateway/types";
import { wireObjectTypeV2ToSdkObjectDefinition } from "./wireObjectTypeV2ToSdkObjectDefinition";

/** @internal */
export function wireObjectTypeV2ToSdkObjectConst(
  object: ObjectTypeWithLink,
  importExt: string,
  v2: boolean = false,
) {
  const uniqueLinkTargetTypes = new Set(
    object.linkTypes.map(a => a.objectTypeApiName),
  );

  const definition = wireObjectTypeV2ToSdkObjectDefinition(
    object,
    v2,
  );

  const imports = Array.from(uniqueLinkTargetTypes).filter(type =>
    type != definition.apiName
  ).map(type => `import type { ${type}Def } from "./${type}${importExt}";`);

  return `
  ${imports.join("\n")}
    export interface ${object.objectType.apiName}Def extends ObjectTypeDefinition<"${object.objectType.apiName}"> {
      type: "${definition.type}",
      apiName: "${definition.apiName}",
      ${
    definition.description != null
      ? `description: ${JSON.stringify(definition.description)},`
      : ""
  }
      primaryKeyType: ${JSON.stringify(definition.primaryKeyType)},
      links: {${
    Object.entries(definition.links).map(
      (
        [linkApiName, definition],
      ) =>
        `${linkApiName}: ObjectTypeLinkDefinition<${definition.targetType}Def, ${definition.multiplicity}>`,
    ).join(",\n")
  }
  },
      properties: ${JSON.stringify(definition.properties, null, 2)},
    }

    export const ${object.objectType.apiName}: ${object.objectType.apiName}Def = {
      type: "${definition.type}",
      apiName: "${definition.apiName}",
      ${
    definition.description != null
      ? `description: ${JSON.stringify(definition.description)},`
      : ""
  }
      primaryKeyType: ${JSON.stringify(definition.primaryKeyType)},
      links: ${JSON.stringify(definition.links, null, 2)} as const,
      properties: ${JSON.stringify(definition.properties, null, 2)},
    };`;
}
