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

import invariant from "tiny-invariant";
import { addNamespaceIfNone, ontologyDefinition } from "./defineOntology.js";
import { getFlattenedInterfaceProperties } from "./interface/getFlattenedInterfaceProperties.js";
import type { InterfacePropertyType } from "./interface/InterfacePropertyType.js";
import type { InterfaceType } from "./interface/InterfaceType.js";
import type { LinkType } from "./links/LinkType.js";
import type { ObjectTypeDefinition } from "./object/ObjectTypeDefinition.js";
import type { SharedPropertyType } from "./properties/SharedPropertyType.js";

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

export function implementInterface(
  interfaceType: InterfaceType,
  objectType: ObjectTypeDefinition,
  // Eventually this should validate in the type system
  propertyMapping: Array<{
    interfaceProperty: string;
    mapsTo: string;
  }>,
  links: Record<string, {
    linkType: LinkType;
    sideApiName: string;
  }[]>,
): void {
  const allInterfaceProperties = getFlattenedInterfaceProperties(
    interfaceType,
  );

  // Validate that all interface properties referenced in the mapping exist
  const nonExistentInterfaceProperties: ValidationResult[] = propertyMapping
    .map(val => val.interfaceProperty)
    .filter(
      interfaceProperty =>
        allInterfaceProperties[addNamespaceIfNone(interfaceProperty)]
          === undefined,
    )
    .map(interfaceProp => ({
      type: "invalid",
      reason:
        `Interface property ${interfaceProp} referenced in ${objectType.apiName} object does not exist`,
    }));

  const interfaceToObjectProperties = Object.fromEntries(
    propertyMapping.map(
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
      interfaceProp[0] in interfaceToObjectProperties
    ) {
      return validateInterfaceImplProperty(
        interfaceProp[1].sharedPropertyType,
        interfaceToObjectProperties[interfaceProp[0]],
        objectType,
      );
    }
    return {
      type: "invalid",
      reason: `Interface property ${
        interfaceProp[1].sharedPropertyType.apiName
      } not implemented by ${objectType.apiName} object definition`,
    };
  };

  const validations = Object.entries(allInterfaceProperties).map(
    validateProperty,
  );
  const allFailedValidations = validations.concat(
    nonExistentInterfaceProperties,
  ).filter(val => val.type === "invalid");

  invariant(
    allFailedValidations.length === 0,
    "\n" + allFailedValidations.map(formatValidationErrors).join("\n"),
  );

  ontologyDefinition.OBJECT_TYPE[objectType.apiName].implementsInterfaces
    ?.push({
      implements: interfaceType,
      propertyMapping: propertyMapping,
      linkImplementations: links,
    });
}
