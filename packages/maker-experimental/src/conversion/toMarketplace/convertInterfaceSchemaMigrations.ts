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
  InterfaceTypeSchemaMigrationInstruction,
  InterfaceTypeSchemaTransition,
} from "@osdk/client.unstable";
import type {
  InterfacePropertyType,
  InterfaceSchemaMigrationInstruction,
  InterfaceType,
} from "@osdk/maker";
import { convertInterfaceSchemaGracePeriod } from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { interfacePropertyWireRid } from "./convertInterfacePropertyType.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
  ridGenerator: OntologyRidGenerator,
): InterfaceTypeSchemaTransition[] {
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
      convertInstruction(
        instruction,
        interfaceType.apiName,
        propertiesV3,
        ridGenerator,
      ),
    ),
  }));
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  interfaceApiName: string,
  propertiesV3: Record<string, InterfacePropertyType>,
  ridGenerator: OntologyRidGenerator,
): InterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const { property: propertyApiName } = instruction;
      return {
        type: "addRequiredProperty",
        addRequiredProperty: {
          propertyTypeRid: interfacePropertyWireRid(
            propertiesV3[propertyApiName],
            propertyApiName,
            interfaceApiName,
            ridGenerator,
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
