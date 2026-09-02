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
  GracePeriod as WireGracePeriod,
  OntologyIrInterfaceTypeSchemaMigrationBlockData,
  OntologyIrInterfaceTypeSchemaMigrationInstruction,
  OntologyIrInterfaceTypeSchemaTransition,
} from "@osdk/client.unstable";

import { interfacePropertyWireApiName } from "../../api/interface/InterfacePropertyType.js";
import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
} from "../../api/interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../../api/interface/InterfaceType.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
): OntologyIrInterfaceTypeSchemaMigrationBlockData | undefined {
  const { schemaMigrations, propertiesV3 } = interfaceType;
  if (schemaMigrations === undefined) {
    return undefined;
  }

  // NB: Ontology-ir identifies interface property types by API name rather than rid
  const interfacePropertyTypeRidsToApiNames: Record<string, string> = {};
  const schemaTransitions = Object.fromEntries(
    schemaMigrations.transitions.map(
      (transition): [string, OntologyIrInterfaceTypeSchemaTransition] => [
        transition.id,
        {
          id: transition.id,
          title: transition.title,
          description: transition.description,
          gracePeriod: convertInterfaceSchemaGracePeriod(
            transition.gracePeriod,
          ),
          migrations: transition.instructions.map((instruction) => {
            const propertyApiName = interfacePropertyWireApiName(
              propertiesV3[instruction.property],
              instruction.property,
            );
            interfacePropertyTypeRidsToApiNames[propertyApiName] =
              propertyApiName;
            return convertInstruction(instruction, propertyApiName);
          }),
        },
      ],
    ),
  );

  return { interfacePropertyTypeRidsToApiNames, schemaTransitions };
}

export function convertInterfaceSchemaGracePeriod(
  gracePeriod: InterfaceSchemaGracePeriod,
): WireGracePeriod {
  switch (gracePeriod.type) {
    case "afterInstall":
      return {
        type: "daysAfterActivation",
        daysAfterActivation: gracePeriod.days,
      };
    case "deadline":
      // Normalize deadline format to match Java (strip .000 milliseconds)
      return {
        type: "deadline",
        deadline: gracePeriod.deadline.replace(/\.000Z$/u, "Z"),
      };
    default: {
      const unhandled: never = gracePeriod;
      throw new Error(
        `Unknown schema migration grace period type: ${
          (unhandled as InterfaceSchemaGracePeriod).type
        }`,
      );
    }
  }
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  propertyApiName: string,
): OntologyIrInterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty":
      return {
        type: "addRequiredProperty",
        addRequiredProperty: {
          // For ontology-ir, this carries an API name, not a rid, despite its name
          propertyTypeRid: propertyApiName,
        },
      };
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
