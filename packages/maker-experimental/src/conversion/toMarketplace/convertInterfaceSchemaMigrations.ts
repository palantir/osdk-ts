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
            const { migration, referencedProperties } = convertInstruction(
              instruction,
              (propertyApiName) => {
                const property = propertiesV3[propertyApiName];
                return {
                  rid: interfacePropertyWireRid(
                    property,
                    propertyApiName,
                    interfaceType.apiName,
                    ridGenerator,
                  ),
                  apiName: interfacePropertyWireApiName(
                    property,
                    propertyApiName,
                  ),
                };
              },
            );
            for (const { rid, apiName } of referencedProperties) {
              interfacePropertyTypeRidsToApiNames[rid] = apiName;
            }
            return migration;
          }),
        },
      ],
    ),
  );

  return { interfacePropertyTypeRidsToApiNames, schemaTransitions };
}

/** How a property the instruction names is identified on the wire. */
interface WireProperty {
  rid: string;
  apiName: string;
}

/**
 * A converted instruction, alongside the properties it came out referencing.
 *
 * The block data carries a side map of every property its migrations mention, and the emitter is
 * what knows which those are: reporting them back is the only way the map cannot end up describing
 * a set of properties different from the one the emitted migrations actually name.
 */
interface ConvertedInstruction {
  migration: InterfaceTypeSchemaMigrationInstruction;
  referencedProperties: readonly WireProperty[];
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  resolveProperty: (propertyApiName: string) => WireProperty,
): ConvertedInstruction {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const property = resolveProperty(instruction.property);
      return {
        migration: {
          type: "addRequiredProperty",
          addRequiredProperty: { propertyTypeRid: property.rid },
        },
        referencedProperties: [property],
      };
    }
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
