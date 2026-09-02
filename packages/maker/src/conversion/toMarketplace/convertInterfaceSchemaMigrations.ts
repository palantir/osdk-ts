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
  OntologyIrInterfaceTypeSchemaMigrationInstruction,
  OntologyIrInterfaceTypeSchemaTransition,
} from "@osdk/client.unstable";

import {
  type InterfacePropertyType,
  interfacePropertyWireApiName,
} from "../../api/interface/InterfacePropertyType.js";
import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
} from "../../api/interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../../api/interface/InterfaceType.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
): OntologyIrInterfaceTypeSchemaTransition[] {
  const { schemaMigrations, propertiesV3 } = interfaceType;
  if (schemaMigrations === undefined) {
    return [];
  }

  return schemaMigrations.transitions.map((transition) => ({
    id: transition.id,
    title: transition.title,
    description: transition.description,
    gracePeriod: convertInterfaceSchemaGracePeriod(transition.gracePeriod),
    migrations: transition.instructions.map((instruction) =>
      convertInstruction(instruction, propertiesV3),
    ),
  }));
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
  propertiesV3: Record<string, InterfacePropertyType>,
): OntologyIrInterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const { property: propertyApiName } = instruction;
      return {
        type: "addRequiredProperty",
        addRequiredProperty: {
          // For ontology-ir, this carries an API name, not a rid, despite its name
          propertyTypeRid: interfacePropertyWireApiName(
            propertiesV3[propertyApiName],
            propertyApiName,
          ),
        },
      };
    }
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
