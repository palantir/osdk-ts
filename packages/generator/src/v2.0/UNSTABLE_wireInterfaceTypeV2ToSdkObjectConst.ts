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
import type { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
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
    invariant(
      ontology.interfaceTypes[p] != null,
      `Expected to find a parent interface named ${p} in the ontology and did not.`,
    );

    const it = deleteUndefineds(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
        ontology.requireInterfaceType(p, true).raw,
        v2,
      ),
    );

    return it;
  }) ?? [];

  const mergedProperties = { ...definition.properties };
  for (const parent of parents) {
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

  const ogProperties = definition.properties;
  definition.properties = mergedProperties;

  function localPropertyJsdoc(apiName: string) {
    const property = definition.properties[apiName]!;
    const isInherited = ogProperties[apiName] == null;

    return propertyJsdoc(property, { isInherited, apiName });
  }

  function maybeStripNamespace(q: string) {
    if (
      interfaceDef.apiNamespace && q.startsWith(`${interfaceDef.apiNamespace}.`)
    ) {
      return q.slice(interfaceDef.apiNamespace.length + 1);
    } else {
      return q;
    }
  }

  const objectSetIdentifier = `${interfaceDef.shortApiName}.ObjectSet`;
  const propertyKeysIdentifier = `${interfaceDef.shortApiName}.PropertyKeys`;
  // const osdkObjectPropsIdentifier = `OsdkObjectProps$${objectDefIdentifier}`;
  const osdkObjectPropsIdentifier = `${interfaceDef.shortApiName}.Props`;
  const osdkObjectStrictPropsIdentifier =
    `${interfaceDef.shortApiName}.StrictProps`;
  const osdkObjectLinksIdentifier = `OsdkObjectLinks$${objectDefIdentifier}`;
  const osdkObjectIdentifier = `${interfaceDef.shortApiName}.OsdkObject`;

  const ids: Identifiers = {
    objectDefIdentifier: `${interfaceDef.shortApiName}.Definition`,
    osdkObjectLinksIdentifier,
    osdkObjectPropsIdentifier,
    osdkObjectStrictPropsIdentifier,
    objectSetIdentifier,
    osdkObjectIdentifier,
    propertyKeysIdentifier,
  };

  function getV2Types() {
    return `    import type {
    InterfaceDefinition as $InterfaceDefinition,
    } from "@osdk/api";
     import type {
      ObjectSet as $ObjectSet, 
      Osdk as $Osdk,
      PropertyValueWireToClient as $PropType,    } from "@osdk/client.api";
    


    

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

      ${createDefinition(interfaceDef, ontology, "Definition", ids)}

      ${createOsdkObject(interfaceDef, "OsdkObject", ids)}
      
    }    




  /** @deprecated use ${interfaceDef.shortApiName}.Definition **/
  export type ${objectDefIdentifier} = ${interfaceDef.shortApiName}.Definition;




`;
  }

  // FIXME: We need to fill in the imports
  // if we want links to work
  const imports: string[] = [];

  return `${imports.join("\n")}
    ${v2 ? getV2Types() : ""}

    export const ${interfaceDef.shortApiName}: ${interfaceDef.shortApiName}.Definition = {
      osdkMetadata: $osdkMetadata,
      objectSet: undefined as any,
      props: undefined as any,
      linksType: undefined as any,
      strictProps: undefined as any,
      ${
    stringify(definition, {
      osdkMetadata: () => undefined,
      properties: (properties) => (`{
        ${
        stringify(properties, {
          "*": (
            propertyDefinition,
            _,
            key,
          ) => [
            `"${maybeStripNamespace(key)}"`,
            _(propertyDefinition),
          ],
        })
      }
      }`),
    })
  }
      
    };`;
}
