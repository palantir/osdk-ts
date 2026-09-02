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
  InterfaceTypeSchemaMigrationBlockData,
  InterfaceTypeSchemaMigrationInstruction,
  InterfaceTypeSchemaTransition,
} from "@osdk/client.unstable";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceType,
} from "@osdk/maker";
import {
  convertInterfaceSchemaGracePeriod,
  interfacePropertyWireApiName,
} from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { interfacePropertyWireRid } from "./convertInterfacePropertyType.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
  ridGenerator: OntologyRidGenerator,
): InterfaceTypeSchemaMigrationBlockData | undefined {
  const { schemaMigrations, propertiesV3 } = interfaceType;
  if (schemaMigrations === undefined) {
    return undefined;
  }

  const interfacePropertyTypeRidsToApiNames: Record<string, string> = {};
  const schemaTransitions = Object.fromEntries(
    schemaMigrations.transitions.map(
      (transition): [string, InterfaceTypeSchemaTransition] => [
        transition.id,
        {
          id: transition.id,
          title: transition.title,
          description: transition.description,
          gracePeriod: convertInterfaceSchemaGracePeriod(
            transition.gracePeriod,
          ),
          migrations: transition.instructions.map((instruction) => {
            const { property: propertyApiName } = instruction;
            const property = propertiesV3[propertyApiName];
            const propertyTypeRid = interfacePropertyWireRid(
              property,
              propertyApiName,
              interfaceType.apiName,
              ridGenerator,
            );
            interfacePropertyTypeRidsToApiNames[propertyTypeRid] =
              interfacePropertyWireApiName(property, propertyApiName);
            return convertInstruction(instruction, propertyTypeRid);
          }),
        },
      ],
    ),
  );

  return { interfacePropertyTypeRidsToApiNames, schemaTransitions };
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  propertyTypeRid: string,
): InterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty":
      return {
        type: "addRequiredProperty",
        addRequiredProperty: { propertyTypeRid },
      };
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
