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
  ResolvedInterfaceMember,
  ResolvedInterfaceProperty,
} from "@osdk/maker";
import {
  addNamespaceIfNone,
  convertInterfaceSchemaGracePeriod,
  interfacePropertyWireApiName,
} from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { interfacePropertyWireRid } from "./convertInterfacePropertyType.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
  ridGenerator: OntologyRidGenerator,
): InterfaceTypeSchemaMigrationBlockData | undefined {
  const { schemaMigrations } = interfaceType;
  if (schemaMigrations === undefined) {
    return undefined;
  }

  const references = new WireReferences(ridGenerator);
  const schemaTransitions = Object.fromEntries(
    schemaMigrations.transitions.map(
      (transition): [string, InterfaceTypeSchemaTransition] => {
        const rid = ridGenerator.generateRidForInterfaceSchemaTransition(
          transition.id,
          interfaceType.apiName,
        );
        return [
          rid,
          {
            rid,
            id: transition.id,
            title: transition.title,
            description: transition.description,
            gracePeriod: convertInterfaceSchemaGracePeriod(
              transition.gracePeriod,
            ),
            migrations: transition.instructions.map((instruction) =>
              convertInstruction(instruction, interfaceType, references),
            ),
          },
        ];
      },
    ),
  );

  return { ...references.ridsToApiNames, schemaTransitions };
}

type RidsToApiNames = Omit<
  InterfaceTypeSchemaMigrationBlockData,
  "schemaTransitions"
>;

/**
 * Generates the rids the migrations reference, recording each one's API name for the block data.
 */
class WireReferences {
  readonly ridsToApiNames: RidsToApiNames = {
    interfaceActionTypeConstraintRidsToApiNames: {},
    interfaceLinkTypeRidsToApiNames: {},
    interfaceParameterConstraintRidsToApiNames: {},
    interfacePropertyTypeRidsToApiNames: {},
    interfaceTypeRidsToApiNames: {},
  };

  constructor(private readonly ridGenerator: OntologyRidGenerator) {}

  property({
    apiName,
    authoredKey,
    interfaceTypeApiName,
    property,
  }: ResolvedInterfaceProperty): string {
    const rid = interfacePropertyWireRid(
      property,
      authoredKey,
      interfaceTypeApiName,
      this.ridGenerator,
    );
    this.ridsToApiNames.interfacePropertyTypeRidsToApiNames[rid] = apiName;
    return rid;
  }

  actionTypeConstraint({
    apiName,
    interfaceTypeApiName,
  }: ResolvedInterfaceMember): string {
    const rid = this.ridGenerator.generateRidForInterfaceActionTypeConstraint(
      apiName,
      interfaceTypeApiName,
    );
    this.ridsToApiNames.interfaceActionTypeConstraintRidsToApiNames[rid] =
      apiName;
    return rid;
  }
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  interfaceType: InterfaceType,
  references: WireReferences,
): InterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const property = interfaceType.propertiesV3[instruction.property];
      return {
        type: "addRequiredProperty",
        addRequiredProperty: {
          propertyTypeRid: references.property({
            apiName: interfacePropertyWireApiName(
              property,
              instruction.property,
            ),
            interfaceTypeApiName: interfaceType.apiName,
            authoredKey: instruction.property,
            property,
          }),
        },
      };
    }
    case "addRequiredActionTypeConstraint":
      return {
        type: "addRequiredActionTypeConstraint",
        addRequiredActionTypeConstraint: {
          // Validation requires the constraint to be declared directly by this interface type
          actionTypeConstraintRid: references.actionTypeConstraint({
            apiName: addNamespaceIfNone(instruction.actionTypeConstraint),
            interfaceTypeApiName: interfaceType.apiName,
          }),
        },
      };
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
