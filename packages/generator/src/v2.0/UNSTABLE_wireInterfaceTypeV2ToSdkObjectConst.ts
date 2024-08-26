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
import { getObjectDefIdentifier } from "../shared/wireObjectTypeV2ToSdkObjectConst.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";

/** @internal */
export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
  interfaceDef: EnhancedInterfaceType,
  ontology: EnhancedOntologyDefinition,
  v2: boolean = false,
) {
  const definition = deleteUndefineds(
    __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
      interfaceDef.og,
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
        ontology.requireInterfaceType(p, true).og,
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
  const propertyKeysIdentifier = `PropertyKeys$${objectDefIdentifier}`;
  // const osdkObjectPropsIdentifier = `OsdkObjectProps$${objectDefIdentifier}`;
  const osdkObjectPropsIdentifier = `${interfaceDef.shortApiName}.Props`;
  const osdkObjectStrictPropsIdentifier =
    `${interfaceDef.shortApiName}.StrictProps`;
  const osdkObjectLinksIdentifier = `OsdkObjectLinks$${objectDefIdentifier}`;
  const osdkObjectIdentifier = `${interfaceDef.shortApiName}.OsdkObject`;

  function createProps(identifier: string, strict: boolean) {
    return `export interface ${identifier} {
  ${
      stringify(definition.properties, {
        "*": (propertyDefinition, _, apiName) => {
          return [
            `/*readonly*/ "${maybeStripNamespace(apiName)}"${
              // after we convert everything over we can do this:
              // !strict || propertyDefinition.nullable ? "?" : ""
              ""}`,
            `$PropType[${JSON.stringify(propertyDefinition.type)}]${
              propertyDefinition.multiplicity ? "[]" : ""
            }${propertyDefinition.nullable || !strict ? `| undefined` : ""}`,
          ];
        },
      })
    }
      }`;
  }

  function createDefinition(identifier: string) {
    return `
      export interface ${identifier} extends InterfaceDefinition<"${interfaceDef.fullApiName}", ${objectDefIdentifier}>, VersionBound<$ExpectedClientVersion> {
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
              `${propertyJsdoc(propertyDefinition, { apiName })}"${
                maybeStripNamespace(apiName)
              }"`,
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
        > &  Pick<
          // ${osdkObjectPropsIdentifier}
          S extends false ?  ${osdkObjectPropsIdentifier} : ${osdkObjectStrictPropsIdentifier}
          , K
  > & {
      $link: ${osdkObjectLinksIdentifier};
      $title: string | undefined; // FIXME
      $primaryKey: string| number; // deviation from object
      
      $as: <NEW_Q extends ValidToFrom<${objectDefIdentifier}>>(type: NEW_Q | string) => Osdk<
    NEW_Q,
    ConvertProps<${objectDefIdentifier}, NEW_Q, K>
  >;
  } & $OsdkObject<"${interfaceDef.fullApiName}">;`;
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
,FetchPageResult, Osdk,
FetchPageArgs,OsdkObjectPropertyType,
    MinimalObjectSet, LinkNames,ObjectSet as $ObjectSet, AggregateOpts,AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,AggregationsResults, WhereClause} from "@osdk/client.api";

    import {ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition} from "@osdk/api";

    export type ${propertyKeysIdentifier} = ${
      Object.keys(definition.properties).map(maybeStripNamespace).map(a =>
        `"${a}"`
      ).join("|")
    };

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

        export namespace ${interfaceDef.shortApiName} {

      ${createProps("Props", false)}
      ${createProps("StrictProps", true)}

      ${createObjectSet()}

      ${createDefinition("Definition")}
      ${createOsdkObject("OsdkObject")}
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

    export const ${interfaceDef.shortApiName}: ${objectDefIdentifier} = {
      osdkMetadata: $osdkMetadata,
      objectSet: undefined as any,
      props: undefined as any,
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
