/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import invariant from "tiny-invariant";
import { getObject } from "../conversion/toMarketplace/convertLink.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  addNamespaceIfNone,
  importedTypes,
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import { getFlattenedInterfaceProperties } from "./interface/getFlattenedInterfaceProperties.js";
import type { InterfacePropertyType } from "./interface/InterfacePropertyType.js";
import type { ObjectPropertyType } from "./object/ObjectPropertyType.js";
import type { ObjectPropertyTypeUserDefinition } from "./object/ObjectPropertyTypeUserDefinition.js";
import type { ObjectType } from "./object/ObjectType.js";
import type {
  DerivedPropertyAggregation,
  ObjectTypeDatasourceDefinition_derived,
  ObjectTypeDatasourceDefinition_stream,
} from "./object/ObjectTypeDatasourceDefinition.js";
import type { ObjectTypeDefinition } from "./object/ObjectTypeDefinition.js";
import type { PropertyTypeType } from "./properties/PropertyTypeType.js";
import { isExotic } from "./properties/PropertyTypeType.js";
import type { SharedPropertyType } from "./properties/SharedPropertyType.js";

// From https://stackoverflow.com/a/79288714
const ISO_8601_DURATION =
  /^P(?!$)(?:(?:((?:\d+Y)|(?:\d+(?:\.|,)\d+Y$))?((?:\d+M)|(?:\d+(?:\.|,)\d+M$))?((?:\d+D)|(?:\d+(?:\.|,)\d+D$))?(T((?:\d+H)|(?:\d+(?:\.|,)\d+H$))?((?:\d+M)|(?:\d+(?:\.|,)\d+M$))?((?:\d+S)|(?:\d+(?:\.|,)\d+S$))?)?)|(?:\d+(?:(?:\.|,)\d+)?W))$/;

// ISO 8601 date and time format (YYYY-MM-DDThh:mm:ss.sssZ)
const ISO_8601_DATETIME =
  /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;

const API_NAME_PATTERN = /^([a-zA-Z][a-zA-Z0-9\\-]*)$/;

export function defineObject(
  objectDef: ObjectTypeDefinition,
): ObjectTypeDefinition {
  const apiName = namespace + objectDef.apiName;
  const propertyApiNames = objectDef.properties
    ? Object.keys(objectDef.properties)
    : [];
  if (
    ontologyDefinition[OntologyEntityTypeEnum.OBJECT_TYPE][apiName]
      !== undefined
  ) {
    throw new Error(
      `Object type with apiName ${objectDef.apiName} is already defined`,
    );
  }
  invariant(
    API_NAME_PATTERN.test(objectDef.apiName),
    `Invalid API name ${objectDef.apiName}. API names must match the regex ${API_NAME_PATTERN}.`,
  );
  invariant(
    propertyApiNames.includes(objectDef.titlePropertyApiName),
    `Title property ${objectDef.titlePropertyApiName} is not defined on object ${objectDef.apiName}`,
  );
  invariant(
    propertyApiNames.includes(objectDef.primaryKeyPropertyApiName),
    `Primary key property ${objectDef.primaryKeyPropertyApiName} does not exist on object ${objectDef.apiName}`,
  );

  invariant(
    !(objectDef.properties?.[objectDef.primaryKeyPropertyApiName]?.editOnly),
    `Primary key property ${objectDef.primaryKeyPropertyApiName} on object ${objectDef.apiName} cannot be edit-only`,
  );

  const retentionPeriods =
    ((objectDef.datasources ?? []).filter(ds =>
      ds.type === "stream"
    ) as ObjectTypeDatasourceDefinition_stream[]).map(ds => ds.retentionPeriod);
  retentionPeriods.forEach(retentionPeriod => {
    invariant(
      retentionPeriod === undefined || ISO_8601_DURATION.test(retentionPeriod),
      `Retention period "${retentionPeriod}" on object "${objectDef.apiName}" is not a valid ISO 8601 duration string`,
    );
  });

  const baseDatasources = (objectDef.datasources ?? []).filter(ds =>
    ["dataset", "stream", "restrictedView"].includes(ds.type)
  );
  invariant(
    baseDatasources.length <= 1,
    `Object ${objectDef.apiName} has more than one base datasource (got: [${
      baseDatasources.map(ds => ds.type).join(", ")
    }])`,
  );
  const derivedDatasources = (objectDef.datasources ?? []).filter(ds =>
    ds.type === "derived"
  );
  if (derivedDatasources.length > 0) {
    derivedDatasources.forEach(ds => validateDerivedDatasource(objectDef, ds));
  }

  // Validate that if object status is experimental, no property can have a status of active
  if (objectDef.status === "experimental") {
    const activeProperties: string[] = [];
    Object.entries(objectDef.properties ?? {}).forEach(
      ([apiName, property]) => {
        if (property.status === "active") {
          activeProperties.push(apiName);
        }
      },
    );
    invariant(
      activeProperties.length === 0,
      `When object "${objectDef.apiName}" has experimental status, no properties can have "active" status, but found active properties: ${
        activeProperties.join(", ")
      }`,
    );
  }

  // Validate deprecated status deadline is in ISO 8601 format
  if (
    objectDef.status && typeof objectDef.status === "object"
    && objectDef.status.type === "deprecated"
  ) {
    const deadline = objectDef.status.deadline;
    invariant(
      deadline !== undefined && ISO_8601_DATETIME.test(deadline),
      `Deprecated status deadline "${deadline}" on object "${objectDef.apiName}" is not a valid ISO 8601 datetime string`,
    );
  }
  invariant(
    !isExotic(objectDef.properties?.[objectDef.titlePropertyApiName]?.type),
    `Title property ${objectDef.titlePropertyApiName} must be a primitive type`,
  );
  invariant(
    !isExotic(
      objectDef.properties?.[objectDef.primaryKeyPropertyApiName]?.type,
    ),
    `Primary key property ${objectDef.primaryKeyPropertyApiName} can only be primitive types`,
  );

  objectDef.implementsInterfaces?.forEach(interfaceImpl => {
    const allInterfaceProperties = getFlattenedInterfaceProperties(
      interfaceImpl.implements,
    );
    const nonExistentInterfaceProperties: ValidationResult[] = interfaceImpl
      .propertyMapping.map(val => val.interfaceProperty).filter(
        interfaceProperty =>
          allInterfaceProperties[addNamespaceIfNone(interfaceProperty)]
            === undefined,
      ).map(interfaceProp => ({
        type: "invalid",
        reason:
          `Interface property ${interfaceProp} referenced in ${objectDef.apiName} object does not exist`,
      }));

    const interfaceToObjectProperties = Object.fromEntries(
      interfaceImpl.propertyMapping.map(
        mapping => [
          addNamespaceIfNone(mapping.interfaceProperty),
          mapping.mapsTo,
        ],
      ),
    );
    const validateProperty = (
      interfaceProp: [string, InterfacePropertyType],
    ): ValidationResult => {
      if (
        interfaceProp[1].sharedPropertyType.apiName
          in interfaceToObjectProperties
      ) {
        return validateInterfaceImplProperty(
          interfaceProp[1].sharedPropertyType,
          interfaceToObjectProperties[interfaceProp[0]],
          objectDef,
        );
      }
      return {
        type: "invalid",
        reason: `Interface property ${
          interfaceProp[1].sharedPropertyType.apiName
        } not implemented by ${objectDef.apiName} object definition`,
      };
    };
    const validations = Object.entries(
      getFlattenedInterfaceProperties(interfaceImpl.implements),
    ).map(validateProperty);
    const allFailedValidations = validations.concat(
      nonExistentInterfaceProperties,
    ).filter(val => val.type === "invalid");
    invariant(
      allFailedValidations.length === 0,
      "\n" + allFailedValidations.map(formatValidationErrors).join("\n"),
    );
  });

  const flattenedProperties: Array<ObjectPropertyType> = Object.entries(
    objectDef.properties ?? {},
  ).map(([apiName, property]) =>
    convertUserObjectPropertyType(property.apiName ?? apiName, property)
  );

  const finalObject: ObjectType = {
    ...objectDef,
    apiName: apiName,
    __type: OntologyEntityTypeEnum.OBJECT_TYPE,
    properties: flattenedProperties,
  };
  updateOntology(finalObject);
  objectDef.apiName = apiName;
  return objectDef;
}

type ValidationResult = { type: "valid" } | { type: "invalid"; reason: string };

function formatValidationErrors(
  error: { type: "invalid"; reason: string },
): string {
  return `Ontology Definition Error: ${error.reason}\n`;
}

// Validate that the object and the interface property match up
function validateInterfaceImplProperty(
  spt: SharedPropertyType,
  mappedObjectProp: string,
  object: ObjectTypeDefinition,
): ValidationResult {
  const objProp = object.properties?.[mappedObjectProp];
  if (objProp === undefined) {
    return {
      type: "invalid",
      reason:
        `Object property mapped to interface does not exist. Object Property Mapped: ${mappedObjectProp}`,
    };
  }
  if (JSON.stringify(spt.type) !== JSON.stringify(objProp?.type)) {
    return {
      type: "invalid",
      reason:
        `Object property type does not match the interface property it is mapped to. Interface Property: ${spt.apiName}, objectProperty: ${mappedObjectProp}`,
    };
  }

  return { type: "valid" };
}

export function uppercaseFirstLetter(s: string | undefined | null): string {
  return s === undefined || s == null
    ? ""
    : s.charAt(0).toUpperCase() + s.slice(1);
}

// TODO: edge cases
export function convertToPluralDisplayName(
  s: string | undefined | null,
): string {
  return s === undefined || s == null
    ? ""
    : s.endsWith("s")
    ? uppercaseFirstLetter(s)
    : uppercaseFirstLetter(s) + "s";
}

function convertUserObjectPropertyType(
  apiName: string,
  property: ObjectPropertyTypeUserDefinition,
): ObjectPropertyType {
  // fill in missing fields to be used by actions
  property.apiName = apiName;
  property.displayName = property.displayName ?? uppercaseFirstLetter(apiName);
  return {
    ...property,
    apiName: apiName,
    displayName: property.displayName ?? uppercaseFirstLetter(apiName),
    type: property.type,
  };
}
function validateDerivedDatasource(
  objectDef: ObjectTypeDefinition,
  datasource: ObjectTypeDatasourceDefinition_derived,
) {
  // there should be at least one link
  invariant(
    datasource.linkDefinition.length > 0,
    `Derived datasource for object '${objectDef.apiName}' must have at least one link.`,
  );

  // all of the links references should exist
  datasource.linkDefinition.forEach(link => {
    const linkApiName = link.linkType.apiName;
    invariant(
      ontologyDefinition[OntologyEntityTypeEnum.LINK_TYPE][linkApiName]
          !== undefined
        || importedTypes[OntologyEntityTypeEnum.LINK_TYPE][linkApiName]
          !== undefined,
      `Link type '${linkApiName}' used in derived datasource for object '${objectDef.apiName}' is not defined.`,
    );
  });

  // all of the properties references on the source object should exist
  Object.keys(datasource.propertyMapping).forEach(prop => {
    invariant(
      objectDef.properties?.[prop] !== undefined,
      `Property '${prop}' used in derived datasource for object '${objectDef.apiName}' is not defined.`,
    );
  });

  const isLinkedProperties =
    (typeof Object.values(datasource.propertyMapping)[0]) === "string";
  if (isLinkedProperties) {
    validateLinkedProperties(datasource, objectDef);
  } else {
    validateAggregations(datasource, objectDef);
  }
}

function validateLinkedProperties(
  datasource: ObjectTypeDatasourceDefinition_derived,
  objectDef: ObjectTypeDefinition,
) {
  const foreignProperties = Object.values(
    datasource.propertyMapping,
  ) as string[];
  // the foreign property must exist in the final object in the link chain
  const finalObject =
    getObject(datasource.linkDefinition.at(-1)!.linkType.toMany.object).object;
  foreignProperties.forEach(prop => {
    invariant(
      finalObject.properties?.find(p => p.apiName === prop) !== undefined,
      `Property '${prop}' on object '${finalObject.apiName}' is not defined`,
    );
  });
}

function validateAggregations(
  datasource: ObjectTypeDatasourceDefinition_derived,
  objectDef: ObjectTypeDefinition,
) {
  const props = datasource.propertyMapping as Record<
    string,
    DerivedPropertyAggregation
  >;

  Object.entries(props).forEach(([propName, agg]) => {
    // TODO(dpaquin): check that the property type matches the foreign property type,
    // for collectList/collectSet and maybe min/max too?
    const property = objectDef.properties![propName];
    switch (agg.type) {
      case "collectList":
      case "collectSet":
        // property's type is collectible
        invariant(
          isCollectible(property),
          `Property '${propName}' on object '${objectDef.apiName}' is not collectible`,
        );
        // limit <= 100
        invariant(
          agg.limit <= 100,
          `[Error] Limit for collection '${propName}' on object '${objectDef.apiName}' is greater than 100`,
        );
        break;
      case "avg":
      case "sum":
        // property's type is numeric
        invariant(
          isNumeric(property.type),
          `Property '${propName}' on object '${objectDef.apiName}' is not numeric`,
        );
        break;
      case "min":
      case "max":
      case "approximateCardinality":
      case "exactCardinality":
        // property's type is primitive
        invariant(
          isPrimitive(property.type),
          `Property '${propName}' on object '${objectDef.apiName}' is not primitive`,
        );
        break;
      default:
        break;
    }

    // if a foreign property is referenced, it must exist in the final object
    if (agg.type !== "count") {
      const foreignProperty = agg.property;
      const finalObject =
        getObject(datasource.linkDefinition.at(-1)!.linkType.toMany.object)
          .object;
      invariant(
        finalObject.properties?.find(p => p.apiName === foreignProperty)
          !== undefined,
        `Property '${foreignProperty}' on object '${finalObject.apiName}' is not defined`,
      );
    }
  });
}

function isCollectible(property: ObjectPropertyTypeUserDefinition): boolean {
  if (!(property.array ?? false)) {
    return false;
  }
  const typeType = typeof property.type === "string"
    ? property.type
    : property.type.type;
  return [
    "boolean",
    "byte",
    "date",
    "double",
    "float",
    "geohash",
    "geoshape",
    "integer",
    "long",
    "mediareference",
    "short",
    "string",
    "struct",
    "timestamp",
  ].includes(typeType);
}

function isNumeric(type: PropertyTypeType): boolean {
  const typeType = typeof type === "string" ? type : type.type;
  return [
    "byte",
    "double",
    "float",
    "integer",
    "long",
    "short",
  ].includes(typeType);
}

function isPrimitive(type: PropertyTypeType): boolean {
  const typeType = typeof type === "string" ? type : type.type;
  return [
    "boolean",
    "byte",
    "date",
    "double",
    "float",
    "integer",
    "long",
    "short",
    "string",
    "timestamp",
  ].includes(typeType);
}
