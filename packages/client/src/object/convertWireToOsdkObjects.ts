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

import type {
  InterfaceMetadata,
  NullabilityAdherence,
  ObjectMetadata,
} from "@osdk/api";
import type {
  InterfaceToObjectTypeMappings,
  InterfaceToObjectTypeMappingsV2,
  InterfaceTypeApiName,
  OntologyObjectV2,
  PropertySecurities,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";

import type { DerivedPropertyRuntimeMetadata } from "../derivedProperties/derivedPropertyRuntimeMetadata.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { type FetchedObjectTypeDefinition } from "../ontology/OntologyProvider.js";
import { createOsdkObject } from "./convertWireToOsdkObjects/createOsdkObject.js";
import type { InterfaceHolder } from "./convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "./convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleOsdkProperties } from "./SimpleOsdkProperties.js";

/**
 * If interfaceApiName is not undefined, converts the instances of the
 * interface into their respective
 * underlying concrete types and then returns the $as() representation
 * for the consumers.
 *
 * Otherwise just does the conversion
 *
 * May mutate in place for performance reasons. If you need a clean copy,
 * keep it first.
 *
 * However, you must use the returned value, which will be whatever is correct.
 *
 * @internal
 * @param interfaceApiName - if undefined
 */
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid?: boolean,
  selectedProps?: ReadonlyArray<string>,
  strictNonNull?: NullabilityAdherence,
  interfaceToObjectTypeMappings?: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappings
  >,
  interfaceToObjectTypeMappingsV2?: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappingsV2
  >,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<InterfaceHolder>>;
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: undefined,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid?: boolean,
  selectedProps?: ReadonlyArray<string>,
  strictNonNull?: NullabilityAdherence,
  interfaceToObjectTypeMappings?: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappings
  >,
  interfaceToObjectTypeMappingsV2?: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappingsV2
  >,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<ObjectHolder>>;
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid?: boolean,
  selectedProps?: ReadonlyArray<string>,
  strictNonNull?: NullabilityAdherence,
  interfaceToObjectTypeMappings?: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappings
  >,
  interfaceToObjectTypeMappingsV2?: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappingsV2
  >,
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<ObjectHolder | InterfaceHolder>>;
/**
 * @internal
 */
export async function convertWireToOsdkObjects(
  client: MinimalClient,
  objects: OntologyObjectV2[],
  interfaceApiName: string | undefined,
  derivedPropertyTypeByName: DerivedPropertyRuntimeMetadata,
  propertySecurities: PropertySecurities[] | undefined,
  forceRemoveRid: boolean = false,
  selectedProps?: ReadonlyArray<string>,
  strictNonNull: NullabilityAdherence = false,
  interfaceToObjectTypeMappings: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappings
  > = {},
  interfaceToObjectTypeMappingsV2: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappingsV2
  > = {},
  objectDefsByApiName?: Record<string, ObjectMetadata>,
): Promise<Array<ObjectHolder | InterfaceHolder>> {
  fixObjectPropertiesInPlace(objects, forceRemoveRid);

  const isInterfaceScoped =
    Object.keys(interfaceToObjectTypeMappingsV2).length > 0 ||
    Object.keys(interfaceToObjectTypeMappings).length > 0;
  const ret = [];
  for (const rawObj of objects) {
    // If caller supplied object definitions, use them exclusively instead of
    // hitting the ontology provider - a missing entry is an error rather than a
    // fallback. Only when no map is provided do we defer to the provider, so
    // existing behavior is preserved.
    const objectDef = (
      objectDefsByApiName != null
        ? objectDefsByApiName[rawObj.$apiName]
        : await client.ontologyProvider.getObjectDefinition(rawObj.$apiName)
    ) as FetchedObjectTypeDefinition;
    invariant(objectDef, `Missing definition for '${rawObj.$apiName}'`);

    const interfaceToObjMappingV2 = interfaceApiName
      ? interfaceToObjectTypeMappingsV2[
          interfaceApiName as InterfaceTypeApiName
        ]?.[rawObj.$apiName]
      : undefined;
    const interfaceToObjMapping = interfaceApiName
      ? interfaceToObjectTypeMappings[
          interfaceApiName as InterfaceTypeApiName
        ]?.[rawObj.$apiName]
      : undefined;

    const ifaceSelected =
      interfaceApiName && interfaceToObjMappingV2
        ? selectedProps
          ? getReferencedObjectProperties(
              interfaceToObjMappingV2,
              selectedProps,
            )
          : [
              ...getReferencedObjectProperties(interfaceToObjMappingV2),
              objectDef.primaryKeyApiName,
            ]
        : interfaceApiName && interfaceToObjMapping
          ? selectedProps
            ? Object.keys(interfaceToObjMapping).filter((val) => {
                selectedProps.includes(interfaceToObjMapping[val]);
              })
            : [
                ...Object.values(interfaceToObjMapping),
                objectDef.primaryKeyApiName,
              ]
          : undefined;

    const objectDefWithResponseImplementations =
      interfaceApiName && interfaceToObjMappingV2
        ? addResponseInterfaceImplementations(
            objectDef,
            interfaceApiName,
            interfaceToObjMappingV2,
          )
        : objectDef;

    // default value for when we are checking an object
    let objProps;

    let conforming = true;
    if (interfaceApiName && ifaceSelected) {
      invariantInterfacesAsViews(objectDef, interfaceApiName, client);

      objProps = ifaceSelected;
    } else {
      objProps = selectedProps ?? Object.keys(objectDef.properties);
    }

    conforming &&= isConforming(client, objectDef, rawObj, objProps);

    if (strictNonNull === "throw" && !conforming) {
      throw new Error(
        "Unable to safely convert objects as some non nullable properties are null",
      );
    } else if (strictNonNull === "drop" && !conforming) {
      continue;
    }

    let osdkObject: ObjectHolder | InterfaceHolder = createOsdkObject(
      client,
      objectDefWithResponseImplementations,
      rawObj,
      derivedPropertyTypeByName,
      propertySecurities,
    );
    if (interfaceApiName && isInterfaceScoped)
      osdkObject = osdkObject.$as(interfaceApiName);

    ret.push(osdkObject);
  }

  return ret;
}

function isConforming(
  client: MinimalClient,
  def: InterfaceMetadata | ObjectMetadata,
  obj: OntologyObjectV2,
  propsToCheck: readonly string[],
) {
  for (const propName of propsToCheck) {
    if (
      propName in def.properties &&
      def.properties[propName].nullable === false &&
      obj[propName] == null
    ) {
      if (process.env.NODE_ENV !== "production") {
        client.logger?.debug(
          {
            obj: {
              $apiName: obj.$apiName,
              $objectType: obj.$objectType,
              $primaryKey: obj.$primaryKey,
            },
          },
          `Found object that does not conform to its definition. Expected ${def.apiName}'s ${propName} to not be null.`,
        );
      }
      return false;
    }
  }
  return true;
}

function invariantInterfacesAsViews(
  objectDef: FetchedObjectTypeDefinition,
  interfaceApiName: string,
  client: MinimalClient,
): asserts objectDef is typeof objectDef & { interfaceMap: {} } {
  if (objectDef.interfaceMap?.[interfaceApiName] == null) {
    const warning =
      "Interfaces are only supported 'as views' but your metadata object is missing the correct information. This suggests your interfaces have not been migrated to the newer version yet and you cannot use this version of the SDK.";
    if (client.logger) {
      client.logger.warn(warning);
    } else {
      // eslint-disable-next-line no-console
      console.error(`WARNING! ${warning}`);
    }
    throw new Error(warning);
  }
}

function fixObjectPropertiesInPlace(
  objs: OntologyObjectV2[],
  forceRemoveRid: boolean,
): asserts objs is SimpleOsdkProperties[] {
  for (const obj of objs) {
    if (forceRemoveRid) {
      delete obj.__rid;
    }

    if (obj.__rid) {
      obj.$rid = obj.__rid;
      delete obj.__rid;
    }

    if (obj.__score) {
      obj.$score = obj.__score;
      delete obj.__score;
    }

    // Backend returns as __apiName but we want to stick to $ structure
    obj.$apiName ??= obj.__apiName;

    // for now these are the same but when we start doing interface projections the $objectType will always be underlying and
    // the $apiName will be for the current view (in current designs)
    obj.$objectType = obj.$apiName;

    // copying over for now as its always returned. In the future, this should just be inferred from underlying
    obj.$primaryKey ??= obj.__primaryKey;
    obj.$title ??= obj.__title;

    // we don't want people to use these
    delete obj.__apiName;
    delete obj.__primaryKey;
    delete obj.__title;
  }
}

/**
 * Returns every local object property required to materialize the selected
 * interface properties from a V2 response mapping.
 */
function getReferencedObjectProperties(
  mappings: InterfaceToObjectTypeMappingsV2[string],
  selectedProps?: ReadonlyArray<string>,
): string[] {
  const referencedProperties = new Set<string>();
  for (const [interfaceProp, implementation] of Object.entries(mappings)) {
    if (selectedProps != null && !selectedProps.includes(interfaceProp))
      continue;
    addReferencedObjectProperties(referencedProperties, implementation);
  }
  return [...referencedProperties];
}

type WireInterfacePropertyImplementation =
  InterfaceToObjectTypeMappingsV2[string][string];

function addReferencedObjectProperties(
  properties: Set<string>,
  implementation: WireInterfacePropertyImplementation,
): void {
  switch (implementation.type) {
    case "localPropertyImplementation":
      properties.add(implementation.propertyApiName);
      break;
    case "structFieldImplementation":
      properties.add(implementation.structFieldOfProperty.propertyApiName);
      break;
    case "structImplementation":
      for (const entry of Object.values(implementation.mapping)) {
        properties.add(entry.propertyApiName);
      }
      break;
    case "reducedPropertyImplementation":
      addReferencedObjectProperties(properties, implementation.implementation);
      break;
  }
}

function addResponseInterfaceImplementations(
  objectDef: FetchedObjectTypeDefinition,
  interfaceApiName: string,
  mappings: InterfaceToObjectTypeMappingsV2[string],
): FetchedObjectTypeDefinition {
  const responseImplementations = Object.fromEntries(
    Object.entries(mappings).map(([interfaceProp, implementation]) => [
      interfaceProp,
      convertResponseInterfaceImplementation(implementation),
    ]),
  );
  return {
    ...objectDef,
    interfaceImplementations: {
      ...objectDef.interfaceImplementations,
      [interfaceApiName]: {
        ...objectDef.interfaceImplementations?.[interfaceApiName],
        ...responseImplementations,
      },
    },
  };
}

function convertResponseInterfaceImplementation(
  implementation: WireInterfacePropertyImplementation,
): ObjectMetadata.InterfacePropertyImplementation {
  switch (implementation.type) {
    case "localPropertyImplementation":
      return {
        type: "localProperty",
        propertyApiName: implementation.propertyApiName,
      };
    case "structFieldImplementation":
      return {
        type: "structField",
        propertyApiName: implementation.structFieldOfProperty.propertyApiName,
        structFieldApiName:
          implementation.structFieldOfProperty.structFieldApiName,
      };
    case "structImplementation":
      return {
        type: "struct",
        mapping: Object.fromEntries(
          Object.entries(implementation.mapping).map(([fieldName, entry]) => [
            fieldName,
            entry.type === "structFieldOfProperty"
              ? {
                  type: "structFieldOfProperty" as const,
                  propertyApiName: entry.propertyApiName,
                  structFieldApiName: entry.structFieldApiName,
                }
              : {
                  type: "property" as const,
                  propertyApiName: entry.propertyApiName,
                },
          ]),
        ),
      };
    case "reducedPropertyImplementation":
      return {
        type: "reduced",
        implementation: convertNestedResponseInterfaceImplementation(
          implementation.implementation,
        ),
      };
  }
}

type WireNestedInterfacePropertyImplementation = Extract<
  WireInterfacePropertyImplementation,
  { type: "reducedPropertyImplementation" }
>["implementation"];

function convertNestedResponseInterfaceImplementation(
  implementation: WireNestedInterfacePropertyImplementation,
): Exclude<
  ObjectMetadata.InterfacePropertyImplementation,
  ObjectMetadata.InterfacePropertyReducedImplementation
> {
  const converted = convertResponseInterfaceImplementation(implementation);
  invariant(converted.type !== "reduced");
  return converted;
}
