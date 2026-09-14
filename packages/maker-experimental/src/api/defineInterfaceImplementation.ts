/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ActionType,
  InterfacePropertyType,
  InterfaceType,
  LinkType,
  ObjectTypeDefinition,
} from "@osdk/maker";
import {
  addNamespaceIfNone,
  getOntologyDefinition,
  interfacePropertyWireApiName,
  isInterfacePropertyRequired,
  isInterfaceSharedPropertyType,
  OntologyEntityTypeEnum,
  withoutNamespace,
} from "@osdk/maker";
import invariant from "tiny-invariant";

type ValidationResult = { type: "valid" } | { type: "invalid"; reason: string };

export type InterfaceImplementationDefinition = {
  interfaceType: InterfaceType;
  objectType: ObjectTypeDefinition;
  propertyMapping?: Array<{ interfaceProperty: string; mapsTo: string }>;
  linkImplementations?: Record<
    string,
    Array<{ linkType: LinkType; sideApiName: string }>
  >;
  actionTypeImplementations?: Record<
    string,
    {
      actionType: ActionType;
      parameterMapping?: Record<string, string>;
    }
  >;
};

export function defineInterfaceImplementation({
  interfaceType,
  objectType,
  propertyMapping = [],
  linkImplementations = {},
  actionTypeImplementations = {},
}: InterfaceImplementationDefinition): void {
  validateInterfaceProperties(interfaceType, objectType, propertyMapping);

  const storedObject =
    getOntologyDefinition()[OntologyEntityTypeEnum.OBJECT_TYPE][
      objectType.apiName
    ];
  invariant(
    storedObject !== undefined,
    `Object ${objectType.apiName} must be defined before implementing an interface`,
  );

  storedObject.implementsInterfaces ??= [];
  storedObject.implementsInterfaces.push({
    implements: interfaceType,
    propertyMapping,
    linkImplementations,
    actionTypeImplementations,
  });
  objectType.implementsInterfaces = storedObject.implementsInterfaces;
}

function validateInterfaceProperties(
  interfaceType: InterfaceType,
  objectType: ObjectTypeDefinition,
  propertyMapping: Array<{ interfaceProperty: string; mapsTo: string }>,
): void {
  const allInterfaceProperties = getFlattenedInterfaceProperties(interfaceType);
  const nonExistentInterfaceProperties: ValidationResult[] = propertyMapping
    .map((mapping) => mapping.interfaceProperty)
    .filter(
      (interfaceProperty) =>
        allInterfaceProperties[addNamespaceIfNone(interfaceProperty)] ===
          undefined &&
        allInterfaceProperties[withoutNamespace(interfaceProperty)] ===
          undefined,
    )
    .map((interfaceProperty) => ({
      type: "invalid",
      reason: `Interface property ${interfaceProperty} referenced in ${objectType.apiName} object does not exist`,
    }));

  const interfaceToObjectProperties = Object.fromEntries(
    propertyMapping.map((mapping) => {
      const namespacedInterfaceProperty = addNamespaceIfNone(
        mapping.interfaceProperty,
      );
      const interfaceProperty =
        allInterfaceProperties[namespacedInterfaceProperty] !== undefined
          ? namespacedInterfaceProperty
          : withoutNamespace(mapping.interfaceProperty);
      return [interfaceProperty, mapping.mapsTo];
    }),
  );

  const validations = Object.entries(allInterfaceProperties).map(
    ([interfacePropertyApiName, interfaceProperty]) =>
      validateInterfaceProperty(
        interfacePropertyApiName,
        interfaceProperty,
        interfaceToObjectProperties,
        objectType,
      ),
  );
  const allFailedValidations = validations
    .concat(nonExistentInterfaceProperties)
    .filter((validation) => validation.type === "invalid");
  invariant(
    allFailedValidations.length === 0,
    "\n" + allFailedValidations.map(formatValidationError).join("\n"),
  );
}

function getFlattenedInterfaceProperties(
  interfaceType: InterfaceType,
): Record<string, InterfacePropertyType> {
  let properties = Object.fromEntries(
    Object.entries(interfaceType.propertiesV3).map(([apiName, property]) => [
      interfacePropertyWireApiName(property, apiName),
      property,
    ]),
  );
  for (const [apiName, property] of Object.entries(
    interfaceType.propertiesV2,
  )) {
    properties[apiName] ??= property;
  }
  for (const parentInterface of interfaceType.extendsInterfaces) {
    properties = Object.assign(
      getFlattenedInterfaceProperties(parentInterface),
      properties,
    );
  }
  return properties;
}

function validateInterfaceProperty(
  interfacePropertyApiName: string,
  interfaceProperty: InterfacePropertyType,
  interfaceToObjectProperties: Record<string, string>,
  objectType: ObjectTypeDefinition,
): ValidationResult {
  const apiName = isInterfaceSharedPropertyType(interfaceProperty)
    ? interfaceProperty.sharedPropertyType.apiName
    : interfacePropertyApiName;
  if (apiName in interfaceToObjectProperties) {
    const mappedObjectProperty =
      objectType.properties?.[interfaceToObjectProperties[apiName]];
    if (mappedObjectProperty === undefined) {
      return {
        type: "invalid",
        reason: `Object property mapped to interface does not exist. Object Property Mapped: ${interfaceToObjectProperties[apiName]}`,
      };
    }
    const interfacePropertyType = isInterfaceSharedPropertyType(
      interfaceProperty,
    )
      ? interfaceProperty.sharedPropertyType.type
      : interfaceProperty.type;
    if (
      JSON.stringify(interfacePropertyType) !==
      JSON.stringify(mappedObjectProperty.type)
    ) {
      return {
        type: "invalid",
        reason: `Object property type does not match the interface property it is mapped to. Interface Property: ${apiName}, objectProperty: ${interfaceToObjectProperties[apiName]}`,
      };
    }
    return { type: "valid" };
  }
  if (!isInterfacePropertyRequired(interfaceProperty)) {
    return { type: "valid" };
  }
  return {
    type: "invalid",
    reason: `Interface spt ${apiName} not implemented by ${objectType.apiName} object definition`,
  };
}

function formatValidationError(error: {
  type: "invalid";
  reason: string;
}): string {
  return `Ontology Definition Error: ${error.reason}\n`;
}
