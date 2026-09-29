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
  InterfaceImplementation,
  InterfaceType,
  LinkType,
  ObjectTypeDefinition,
} from "@osdk/maker";
import {
  addNamespaceIfNone,
  getFlattenedInterfaceProperties,
  getOntologyDefinition,
  isInterfacePropertyRequired,
  isInterfaceSharedPropertyType,
  OntologyEntityTypeEnum,
  withoutNamespace,
} from "@osdk/maker";
import invariant from "tiny-invariant";

export type InterfaceLinkImplementationDefinition = {
  linkType: LinkType;
  sideApiName: string;
};

export type InterfaceActionTypeImplementationDefinition = {
  actionType: ActionType;
  parameterMapping?: Record<string, string>;
};

export type InterfaceImplementationDefinition = {
  interfaceType: InterfaceType;
  objectType: ObjectTypeDefinition;
  propertyMapping?: InterfaceImplementation["propertyMapping"];
  linkImplementations?: Record<
    string,
    Array<InterfaceLinkImplementationDefinition>
  >;
  actionTypeImplementations?: Record<
    string,
    InterfaceActionTypeImplementationDefinition
  >;
};

export function defineInterfaceImplementation(
  def: InterfaceImplementationDefinition,
): void {
  const registeredObjectType =
    getOntologyDefinition()[OntologyEntityTypeEnum.OBJECT_TYPE][
      def.objectType.apiName
    ];
  invariant(
    registeredObjectType !== undefined,
    `Object ${def.objectType.apiName} must be defined before implementing an interface`,
  );
  invariant(
    !registeredObjectType.implementsInterfaces?.some(
      (implementation) =>
        implementation.implements.apiName === def.interfaceType.apiName,
    ),
    `Object "${def.objectType.apiName}" already implements interface "${def.interfaceType.apiName}"`,
  );

  const implementation: InterfaceImplementation = {
    implements: def.interfaceType,
    propertyMapping: def.propertyMapping ?? [],
    linkImplementations: Object.fromEntries(
      Object.entries(def.linkImplementations ?? {}).map(
        ([constraintApiName, implementations]) => [
          constraintApiName,
          implementations.map(({ linkType, sideApiName }) => ({
            linkTypeApiName: linkType.apiName,
            sideApiName,
          })),
        ],
      ),
    ),
    actionTypeImplementations: Object.fromEntries(
      Object.entries(def.actionTypeImplementations ?? {}).map(
        ([constraintApiName, actionImplementation]) => [
          constraintApiName,
          {
            actionTypeApiName: actionImplementation.actionType.apiName,
            parameterMapping: { ...actionImplementation.parameterMapping },
          },
        ],
      ),
    ),
  };
  validateInterfaceImplementation(def.objectType, implementation);

  const implementations = [
    ...(registeredObjectType.implementsInterfaces ?? []),
    implementation,
  ];
  registeredObjectType.implementsInterfaces = implementations;
  def.objectType.implementsInterfaces = implementations;
}

function validateInterfaceImplementation(
  objectType: ObjectTypeDefinition,
  implementation: InterfaceImplementation,
): void {
  const interfaceProperties = getFlattenedInterfaceProperties(
    implementation.implements,
  );
  const nonExistentInterfaceProperties = implementation.propertyMapping
    .map((mapping) => mapping.interfaceProperty)
    .filter(
      (interfaceProperty) =>
        interfaceProperties[addNamespaceIfNone(interfaceProperty)] ===
          undefined &&
        interfaceProperties[withoutNamespace(interfaceProperty)] === undefined,
    )
    .map(
      (interfaceProperty) =>
        `Interface property ${interfaceProperty} referenced in ${objectType.apiName} object does not exist`,
    );
  const propertyMapping = Object.fromEntries(
    implementation.propertyMapping.map((mapping) => {
      const namespacedApiName = addNamespaceIfNone(mapping.interfaceProperty);
      const interfacePropertyApiName =
        interfaceProperties[namespacedApiName] !== undefined
          ? namespacedApiName
          : withoutNamespace(mapping.interfaceProperty);
      return [interfacePropertyApiName, mapping.mapsTo];
    }),
  );

  const validationErrors: string[] = [];
  for (const [apiName, interfaceProperty] of Object.entries(
    interfaceProperties,
  )) {
    const interfacePropertyApiName = isInterfaceSharedPropertyType(
      interfaceProperty,
    )
      ? interfaceProperty.sharedPropertyType.apiName
      : apiName;
    const mappedObjectPropertyApiName =
      propertyMapping[interfacePropertyApiName];
    if (mappedObjectPropertyApiName !== undefined) {
      const objectProperty =
        objectType.properties?.[mappedObjectPropertyApiName];
      if (objectProperty === undefined) {
        validationErrors.push(
          `Object property mapped to interface does not exist. Object Property Mapped: ${mappedObjectPropertyApiName}`,
        );
      }
    } else if (isInterfacePropertyRequired(interfaceProperty)) {
      validationErrors.push(
        `Interface property ${interfacePropertyApiName} not implemented by ${objectType.apiName} object definition`,
      );
    }
  }
  validationErrors.push(...nonExistentInterfaceProperties);
  invariant(
    validationErrors.length === 0,
    "\n" +
      validationErrors
        .map((error) => `Ontology Definition Error: ${error}\n`)
        .join("\n"),
  );
}
