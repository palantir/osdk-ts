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

import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition } from "@osdk/generator-converters";
import fastDeepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
import { extractNamespace } from "../GenerateContext/EnhancedBase.js";
import { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import { ForeignType } from "../GenerateContext/ForeignType.js";
import { propertyJsdoc } from "../shared/propertyJsdoc.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import type { Identifiers } from "./wireObjectTypeV2ToSdkObjectConstV2.js";
import {
  createDefinition,
  createObjectSet,
  createOsdkObject,
  createPropertyKeys,
  createProps,
} from "./wireObjectTypeV2ToSdkObjectConstV2.js";

/** @internal */
export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
  interfaceDef: EnhancedInterfaceType,
  ontology: EnhancedOntologyDefinition,
  v2: boolean = false,
) {
  const definition = deleteUndefineds(
    __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
      interfaceDef.raw,
      v2,
    ),
  );

  const objectDefIdentifier = interfaceDef.getDefinitionIdentifier(v2);

  const parents = definition.implements?.map(p => {
    const parent = ontology.requireInterfaceType(p, true);
    if (parent instanceof EnhancedInterfaceType) {
      const it = deleteUndefineds(
        __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
          parent.raw,
          v2,
        ),
      );
      return it;
    }
  }) ?? [];

  const mergedProperties = { ...definition.properties };
  for (const parent of parents) {
    if (parent == null) {
      // came from a foreign type and we cannot merge properties yet
      // so if they weren't listed on the interface its over
      continue;
    }
    for (const apiName of Object.keys(parent.properties)) {
      if (definition.properties[apiName] != null) {
        invariant(
          fastDeepEqual(
            definition.properties[apiName],
            parent.properties[apiName],
          ),
          `Interface ${definition.apiName} redefines property '${apiName}' from parent '${parent.apiName}' but the properties do not match`,
        );
      } else if (mergedProperties[apiName] != null) {
        invariant(
          fastDeepEqual(
            mergedProperties[apiName],
            parent.properties[apiName],
          ),
          `Some interface defines a conflicting property '${apiName}' that does not match property from parent '${parent.apiName}'`,
        );
      }
      mergedProperties[apiName] = parent.properties[apiName];
    }
  }

  definition.properties = mergedProperties;

  const objectSetIdentifier = `${interfaceDef.shortApiName}.ObjectSet`;
  const propertyKeysIdentifier = `${interfaceDef.shortApiName}.PropertyKeys`;
  // const osdkObjectPropsIdentifier = `OsdkObjectProps$${objectDefIdentifier}`;
  const osdkObjectPropsIdentifier = `${interfaceDef.shortApiName}.Props`;
  const osdkObjectStrictPropsIdentifier =
    `${interfaceDef.shortApiName}.StrictProps`;
  const osdkObjectLinksIdentifier = `OsdkObjectLinks$${objectDefIdentifier}`;
  const osdkObjectIdentifier = `${interfaceDef.shortApiName}.OsdkObject`;

  const ids: Identifiers = {
    objectDefIdentifier: interfaceDef.shortApiName,
    osdkObjectLinksIdentifier,
    osdkObjectPropsIdentifier,
    osdkObjectStrictPropsIdentifier,
    objectSetIdentifier,
    osdkObjectIdentifier,
    propertyKeysIdentifier,
  };

  if (interfaceDef.apiNamespace) {
    const badProperties = Object.keys(definition.properties).filter(apiName =>
      extractNamespace(apiName)[0] == null
    );
    if (badProperties.length > 0) {
      throw new Error(
        `Interfaces with fully qualified api names MUST NOT have any properties with an unqualified api name. Interface: ${interfaceDef.fullApiName}, properties: ${
          badProperties.join(", ")
        }`,
      );
    }
  }

  function getV2Types() {
    return `import type {
      InterfaceDefinition as $InterfaceDefinition,
      ObjectSet as $ObjectSet, 
      Osdk as $Osdk,
      PropertyValueWireToClient as $PropType,
    } from "@osdk/api";
    
        ${
      Object.keys(definition.links).length === 0
        ? `export type ${osdkObjectLinksIdentifier} = {};`
        : `
        export interface ${osdkObjectLinksIdentifier}  {
${
          stringify(definition.links, {
            "*": (definition) => {
              const linkTarget = ontology.requireObjectType(
                definition.targetType,
              )
                .getImportedDefinitionIdentifier(v2);

              return `${
                definition.multiplicity
                  ? `${linkTarget}["objectSet"]`
                  : `SingleLinkAccessor<${linkTarget}>`
              }
          `;
            },
          })
        }
    }
    `
    }

    export namespace ${interfaceDef.shortApiName} {

      ${createPropertyKeys(interfaceDef)}


      ${createProps(interfaceDef, "Props", false)}
      ${createProps(interfaceDef, "StrictProps", true)}


      ${createObjectSet(interfaceDef, ids)}

      ${createOsdkObject(interfaceDef, "OsdkInstance", ids)}
      
    }    

    ${createDefinition(interfaceDef, ontology, interfaceDef.shortApiName, ids)}

`;
  }

  // FIXME: We need to fill in the imports
  // if we want links to work
  const imports: string[] = [];
  definition;
  return `${imports.join("\n")}
    ${v2 ? getV2Types() : ""}

    export const ${interfaceDef.shortApiName}: ${interfaceDef.shortApiName} = {
      type: "interface",
      apiName: "${interfaceDef.fullApiName}",
      osdkMetadata: $osdkMetadata,
       };`;
}
