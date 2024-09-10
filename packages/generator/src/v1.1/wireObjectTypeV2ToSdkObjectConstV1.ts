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

import type { ObjectTypeFullMetadata } from "@osdk/gateway/types";
import { wireObjectTypeFullMetadataToSdkObjectTypeDefinition } from "@osdk/generator-converters";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { getObjectImports } from "../shared/getObjectImports.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";

/** @internal */
export function wireObjectTypeV2ToSdkObjectConstV1(
  wireObject: ObjectTypeFullMetadata,
  { ontology }: Pick<
    GenerateContext,
    "ontology"
  >,
  currentFilePath: string,
) {
  const object = ontology.requireObjectType(
    wireObject.objectType.apiName,
    true,
  );
  const uniqueLinkTargetTypes = new Set(
    wireObject.linkTypes.map(a =>
      ontology.requireObjectType(a.objectTypeApiName, false)
    ),
  );

  const definition = deleteUndefineds(
    wireObjectTypeFullMetadataToSdkObjectTypeDefinition(
      object.og,
      false,
    ),
  );

  const objectDefIdentifier = object.getDefinitionIdentifier(false);

  function getV1Types() {
    return `
      export interface ${objectDefIdentifier} extends ObjectTypeDefinition<"${object.fullApiName}", ${object.uniqueImportName}> {
        ${
      stringify(definition, {
        osdkMetadata: () => undefined, // not used in v1
        links: (_value) =>
          `{
          ${
            stringify(definition.links, {
              "*": (definition) =>
                `ObjectTypeLinkDefinition<${
                  ontology.requireObjectType(definition.targetType)
                    .getImportedDefinitionIdentifier(false)
                }, ${definition.multiplicity}>`,
            })
          }
        }`,
      })
    }
      }
    `;
  }

  const imports = getObjectImports(
    uniqueLinkTargetTypes,
    definition.apiName,
    currentFilePath,
    false,
  );

  return `${imports}${getV1Types()}

    export const ${object.shortApiName}: ${objectDefIdentifier} = {
      ${
    stringify(definition, {
      osdkMetadata: (value) => undefined,
    })
  }
    
    };`;
}
