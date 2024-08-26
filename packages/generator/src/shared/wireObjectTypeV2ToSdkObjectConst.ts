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
import type { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { ForeignType } from "../GenerateContext/ForeignType.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { propertyJsdoc } from "./propertyJsdoc.js";

export function getObjectDefIdentifier(name: string, v2: boolean) {
  return v2 ? name : `${name}Def`;
}

/** @internal */
export function wireObjectTypeV2ToSdkObjectConst(
  wireObject: ObjectTypeFullMetadata,
  { ontology }: Pick<
    GenerateContext,
    "ontology"
  >,
  currentFilePath: string,
  v2: boolean = false,
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
      v2,
    ),
  );

  const objectDefIdentifier = object.getDefinitionIdentifier(v2);

  function getV1Types() {
    return `
      export interface ${objectDefIdentifier} extends ObjectTypeDefinition<"${object.fullApiName}", ${objectDefIdentifier}> {
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
                    .getImportedDefinitionIdentifier(v2)
                }, ${definition.multiplicity}>`,
            })
          }
        }`,
      })
    }
      }
    `;
  }

  const objectSetIdentifier = `${object.shortApiName}.ObjectSet`;
  const propertyKeysIdentifier = `PropertyKeys$${objectDefIdentifier}`;
  // const osdkObjectPropsIdentifier = `OsdkObjectProps$${objectDefIdentifier}`;
  const osdkObjectPropsIdentifier = `${object.shortApiName}.Props`;
  const osdkObjectStrictPropsIdentifier = `${object.shortApiName}.StrictProps`;
  const osdkObjectLinksIdentifier = `OsdkObjectLinks$${objectDefIdentifier}`;
  const osdkObjectIdentifier = `${object.shortApiName}.OsdkObject`;

  const linkNames = Object.keys(definition.links).length === 0
    ? "string" // should probably be never
    : `LinkNames<${objectDefIdentifier}>`;

  function createProps(identifier: string, strict: boolean) {
    return `export interface ${identifier} {
  ${
      stringify(definition.properties, {
        "*": (propertyDefinition, _, apiName) => {
          return [
            `/*readonly*/ ${apiName}${
              // after we convert everything over we can do this:
              // !strict || propertyDefinition.nullable ? "?" : ""
              ""}`,
            `$PropType[${JSON.stringify(propertyDefinition.type)}]${
              propertyDefinition.multiplicity ? "[]" : ""
            }${propertyDefinition.nullable || !strict ? `| undefined` : ""}`,
            // `OsdkObjectPropertyType<${JSON.stringify(propertyDefinition)},
            //   ${strict}
            //   >`,
          ];
        },
      })
    }
      }`;
  }

  function createDefinition(identifier: string) {
    return `
      export interface ${identifier} extends ObjectTypeDefinition<"${object.fullApiName}", ${objectDefIdentifier}>, VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        objectSet: ${objectSetIdentifier};
        props: ${osdkObjectPropsIdentifier};
        strictProps: ${osdkObjectStrictPropsIdentifier};
        ${
      stringify(definition, {
        osdkMetadata: () => undefined, // we are going to reference another object instead
        type: () => undefined,
        apiName: () => undefined,
        links: (_value) =>
          `{
          ${
            stringify(definition.links, {
              "*": (definition) =>
                `ObjectTypeLinkDefinition<${
                  ontology.requireObjectType(definition.targetType)
                    .getImportedDefinitionIdentifier(v2)
                }, ${definition.multiplicity}>`,
            })
          }
        }`,
        properties: (_value) => (`{
          ${
          stringify(definition.properties, {
            "*": (propertyDefinition, _, apiName) => [
              `${propertyJsdoc(propertyDefinition, { apiName })}${apiName}`,
              `PropertyDef<"${propertyDefinition.type}", "${
                propertyDefinition.nullable ? "nullable" : "non-nullable"
              }", "${propertyDefinition.multiplicity ? "array" : "single"}">`,
            ],
          })
        }
        }`),
      })
    }
  }
    `;
  }

  function createOsdkObject(identifier: string) {
    return `
    export type ${identifier}<
        K extends keyof ${osdkObjectPropsIdentifier}= keyof ${osdkObjectPropsIdentifier},
        S extends boolean = true
    > 
      = Osdk<
          ${objectDefIdentifier}, 
          K | (S extends false ? "$notStrict": "$strict")
        > & Pick<
          // ${osdkObjectPropsIdentifier}
          S extends false ?  ${osdkObjectPropsIdentifier} : ${osdkObjectStrictPropsIdentifier}
          , K
  > & {
      $link: ${osdkObjectLinksIdentifier};
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<${
      JSON.stringify(definition.properties[definition.primaryKeyApiName])
    },${true}>;
      
      $as: <NEW_Q extends ValidToFrom<${objectDefIdentifier}>>(type: NEW_Q | string) => Osdk<
    NEW_Q,
    ConvertProps<${objectDefIdentifier}, NEW_Q, K>
  >;
  } & $OsdkObject<"${object.fullApiName}">;`;
  }

  function createObjectSet() {
    return `
export interface ObjectSet extends 
$ObjectSet<${objectDefIdentifier},

${objectSetIdentifier}
>
{
  aggregate: <AO extends AggregateOpts<${objectDefIdentifier}>>(
    req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<${objectDefIdentifier}, AO>,
  ) => Promise<AggregationsResults<${objectDefIdentifier}, AO>>;

  where: (
    clause: WhereClause<${objectDefIdentifier}>,
  ) => ${objectSetIdentifier};


  union: (
    ...objectSets: ReadonlyArray<${objectSetIdentifier}>
  ) => ${objectSetIdentifier};

  intersect: (
    ...objectSets: ReadonlyArray<${objectSetIdentifier}>
  ) => ${objectSetIdentifier};

  subtract: (
    ...objectSets: ReadonlyArray<${objectSetIdentifier}>
  ) => ${objectSetIdentifier};

  pivotTo: <L extends LinkNames<${objectDefIdentifier}>>(type: L) => LinkedType<${objectDefIdentifier}, L>["objectSet"]// ObjectSet<LinkedType<${objectDefIdentifier}, L>>;

  fetchOne: <
      L extends ${propertyKeysIdentifier},
      R extends boolean,
      S extends false | "throw" = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[${objectDefIdentifier}["primaryKeyType"]],
      options?: SelectArg<${objectDefIdentifier}, L, R, S>,
    ) => Promise<
     ${osdkObjectIdentifier}<L, S extends false ? false : true>
    //  SingleOsdkResult<${objectDefIdentifier}, L, R, S>
     >
    ;

  fetchOneWithErrors: <
      L extends ${propertyKeysIdentifier},
      R extends boolean,
      S extends false | "throw" = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[${objectDefIdentifier}["primaryKeyType"]],
      options?: SelectArg<${objectDefIdentifier}, L, R, S>,
    ) => Promise<Result<
          ${osdkObjectIdentifier}<L, S extends false ? false : true>
    //  SingleOsdkResult<${objectDefIdentifier}, L, R, S>
     >> 
    
;

  fetchPage: <
    L extends ${propertyKeysIdentifier},
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherenceDefault,
  >(
    args?: FetchPageArgs<${objectDefIdentifier}, L, R, A, S>,
  ) => Promise<
    PageResult<${osdkObjectIdentifier}<L, S extends false ? false : true>>
  // FetchPageResult<${objectDefIdentifier}, L, R, S>
  >;

  fetchPageWithErrors: <
    L extends ${propertyKeysIdentifier},
    R extends boolean,
    const A extends Augments,
    S extends NullabilityAdherence = NullabilityAdherenceDefault,
  >(
    args?: FetchPageArgs<${objectDefIdentifier}, L, R, A, S>,
  ) => Promise<Result<
   PageResult<${osdkObjectIdentifier}<L, S extends false ? false : true>>
  //  FetchPageResult<${objectDefIdentifier}, L, R, S>
   >>;

  asyncIter: () => AsyncIterableIterator<${osdkObjectIdentifier}>;
}
  `;
  }

  function getV2Types() {
    return `
    import {
    LinkedType,
    SingleLinkAccessor,
    SelectArg,
SingleOsdkResult,
PropertyValueWireToClient as $PropType,
    NullabilityAdherenceDefault,
    NullabilityAdherence,
PropertyValueClientToWire,OsdkObjectLinksObject,OsdkObjectLinksEntry,
Augments,PageResult,
Result,BaseObjectSet,OsdkObject as $OsdkObject,ValidToFrom,ConvertProps
,FetchPageResult,
FetchPageArgs,OsdkObjectPropertyType,
    MinimalObjectSet, LinkNames,ObjectSet as $ObjectSet, AggregateOpts,AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,AggregationsResults, WhereClause} from "@osdk/client.api";

    import {ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition} from "@osdk/api";

    export type ${propertyKeysIdentifier} = ObjectOrInterfacePropertyKeysFrom2<${objectDefIdentifier}>

    ${
      Object.keys(definition.links).length === 0
        ? `export type ${osdkObjectLinksIdentifier} = never;`
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

    export namespace ${object.shortApiName} {

      ${createProps("Props", false)}
      ${createProps("StrictProps", true)}

      ${createObjectSet()}

      ${createDefinition("Definition")}
      ${createOsdkObject("OsdkObject")}
    }    




  /** @deprecated use ${object.shortApiName}.Definition **/
  export type ${objectDefIdentifier} = ${object.shortApiName}.Definition;


    `;
  }

  const imports = getObjectImports(
    uniqueLinkTargetTypes,
    definition.apiName,
    currentFilePath,
    v2,
  );

  return `${imports}

    ${v2 ? getV2Types() : getV1Types()}

    export const ${object.shortApiName}: ${objectDefIdentifier} ${
    v2 ? " & VersionBound<$ExpectedClientVersion>" : ""
  }= {
      ${v2 ? `osdkMetadata: $osdkMetadata,` : ""}
      ${v2 ? `objectSet: undefined as any,` : ""}
      ${v2 ? `props: undefined as any,` : ""}
      ${v2 ? `strictProps: undefined as any,` : ""}
      ${
    stringify(definition, {
      osdkMetadata: (value) => undefined,
    })
  }
    
    };`;
}

export function getObjectImports(
  objects: Set<EnhancedObjectType | ForeignType>,
  curApiName: string | undefined,
  currentFilePath: string,
  v2: boolean,
) {
  return Array.from(objects).filter(obj => obj.fullApiName !== curApiName)
    .map(obj => {
      return `import type { ${obj.getDefinitionIdentifier(v2)} as ${
        obj.getImportedDefinitionIdentifier(v2)
      } } from "${obj.getImportPathRelTo("./" + currentFilePath)}";`;
    }).join("\n");
}
