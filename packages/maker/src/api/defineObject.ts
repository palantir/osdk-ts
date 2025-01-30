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
import { namespace, ontologyDefinition } from "./defineOntology.js";
import type { ObjectType, SharedPropertyType } from "./types.js";

export function defineObject(objectDef: ObjectType): ObjectType {
  const apiName = namespace + objectDef.apiName;
  const propertyApiNames = (objectDef.properties ?? []).map(val => val.apiName);
  if (ontologyDefinition.objectTypes[apiName] !== undefined) {
    throw new Error(
      `Object type with apiName ${objectDef.apiName} is already defined`,
    );
  }
  invariant(
    propertyApiNames.includes(objectDef.titlePropertyApiName),
    `Title property ${objectDef.titlePropertyApiName} is not defined on object ${objectDef.apiName}`,
  );
  invariant(
    objectDef.primaryKeys.length !== 0,
    `${objectDef.apiName} does not have any primary keys, objects must have at least one primary key`,
  );
  const nonExistentPrimaryKeys = objectDef.primaryKeys.filter(primaryKey =>
    !objectDef.properties?.map(val => val.apiName).includes(primaryKey)
  );
  invariant(
    nonExistentPrimaryKeys.length === 0,
    `Primary key properties ${nonExistentPrimaryKeys} do not exist on object ${objectDef.apiName}`,
  );

  objectDef.implementsInterfaces?.forEach(interfaceImpl => {
    const nonExistentInterfaceProperties: ValidationResult[] = interfaceImpl
      .propertyMapping.map(val => val.interfaceProperty).filter(
        interfaceProperty =>
          interfaceImpl.implements.properties[interfaceProperty] === undefined,
      ).map(interfaceProp => ({
        type: "invalid",
        reason:
          `Interface property ${interfaceImpl.implements.apiName}.${interfaceProp} referenced in ${objectDef.apiName} object does not exist`,
      }));

    const interfaceToObjectProperties = Object.fromEntries(
      interfaceImpl.propertyMapping.map(
        mapping => [mapping.interfaceProperty, mapping.mapsTo],
      ),
    );
    const validateProperty = (
      interfaceProp: [string, SharedPropertyType],
    ): ValidationResult => {
      if (
        interfaceProp[1].nonNameSpacedApiName in interfaceToObjectProperties
      ) {
        return validateInterfaceImplProperty(
          interfaceProp[1],
          interfaceToObjectProperties[interfaceProp[0]],
          objectDef,
        );
      }
      return {
        type: "invalid",
        reason: `Interface property ${interfaceImpl.implements.apiName}.${
          interfaceProp[1].nonNameSpacedApiName
        } not implemented by ${objectDef.apiName} object definition`,
      };
    };
    const baseValidations = Object.entries(interfaceImpl.implements.properties)
      .map<ValidationResult>(validateProperty);
    const extendsValidations = interfaceImpl.implements.extendsInterfaces
      .flatMap(interfaceApiName =>
        Object.entries(
          ontologyDefinition.interfaceTypes[interfaceApiName].properties,
        ).map(validateProperty)
      );

    const allFailedValidations = baseValidations.concat(
      extendsValidations,
      nonExistentInterfaceProperties,
    ).filter(val => val.type === "invalid");
    invariant(
      allFailedValidations.length === 0,
      "\n" + allFailedValidations.map(formatValidationErrors).join("\n"),
    );
  });

  ontologyDefinition.objectTypes[apiName] = objectDef;
  return { ...objectDef, apiName: apiName };
}

type ValidationResult = { type: "valid" } | { type: "invalid"; reason: string };

function formatValidationErrors(
  error: { type: "invalid"; reason: string },
): string {
  return `Ontology Definition Error: ${error.reason}\n`;
}

function validateInterfaceImplProperty(
  spt: SharedPropertyType,
  mappedObjectProp: string,
  object: ObjectType,
): ValidationResult {
  const objProp = object.properties?.find(prop =>
    prop.apiName === mappedObjectProp
  );
  if (objProp === undefined) {
    return {
      type: "invalid",
      reason:
        `Object property mapped to interface does not exist. Object Property Mapped: ${mappedObjectProp}`,
    };
  }
  if (spt.type !== objProp?.type) {
    return {
      type: "invalid",
      reason:
        `Object property type does not match the interface property it is mapped to. Interface Property: ${spt.apiName}, objectProperty: ${mappedObjectProp}`,
    };
  }

  return { type: "valid" };
}
