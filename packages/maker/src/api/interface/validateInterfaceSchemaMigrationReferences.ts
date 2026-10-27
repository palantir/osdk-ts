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

import type { OntologyIrInterfaceActionTypeConstraint } from "@osdk/client.unstable";
import invariant from "tiny-invariant";

import type { OntologyDefinition } from "../common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { namespace } from "../defineOntology.js";
import { combineApiNamespaceIfMissing } from "../namespace/combineApiNamespaceIfMissing.js";
import { describeInstruction } from "./describeInterfaceSchemaMigrationInstruction.js";
import type { InterfaceSchemaMigrationInstruction } from "./InterfaceSchemaMigrations.js";
import type { InterfaceType } from "./InterfaceType.js";

/**
 * Validates interface schema migrations against the other entities they reference. These run once
 * the whole ontology is defined, since action type constraints, link constraints, and extending
 * interface types are all attached after `defineInterface` returns.
 */
export function validateInterfaceSchemaMigrationReferences(
  ontology: OntologyDefinition,
): void {
  const interfaceTypes = Object.values(
    ontology[OntologyEntityTypeEnum.INTERFACE_TYPE],
  );
  for (const interfaceType of interfaceTypes) {
    for (const transition of interfaceType.schemaMigrations?.transitions ??
      []) {
      for (const instruction of transition.instructions) {
        const context: ReferenceContext = {
          interfaceType,
          transitionId: transition.id,
          prefix: `Schema migration transition "${transition.id}" on interface ${interfaceType.apiName} declares ${describeInstruction(instruction)}`,
        };
        validateInstructionReferences(context, instruction, interfaceTypes);
      }
    }
  }
}

interface ReferenceContext {
  interfaceType: InterfaceType;
  transitionId: string;
  /** The start of every error message, naming the transition, interface, and instruction. */
  prefix: string;
}

function validateInstructionReferences(
  context: ReferenceContext,
  instruction: InterfaceSchemaMigrationInstruction,
  interfaceTypes: readonly InterfaceType[],
): void {
  switch (instruction.type) {
    case "addRequiredProperty":
      // Fully validated by `defineInterface`
      return;
    case "addRequiredActionTypeConstraint":
      validateActionTypeConstraintTarget(
        context,
        combineApiNamespaceIfMissing(
          namespace,
          instruction.actionTypeConstraint,
        ),
      );
      return;
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}

function validateActionTypeConstraintTarget(
  { interfaceType, prefix }: ReferenceContext,
  apiName: string,
): void {
  const constraint = interfaceType.actionTypeConstraints.find(
    (candidate) => candidate.metadata.apiName === apiName,
  );
  invariant(
    constraint !== undefined,
    `${prefix}, but interface ${interfaceType.apiName} does not declare action type constraint "${apiName}". ${
      flattenedActionTypeConstraints(interfaceType).has(apiName)
        ? "Action type constraints inherited from an extended interface must be migrated by a transition on the interface that declares them."
        : "Declare it with `defineInterfaceActionTypeConstraint` and `requireImplementation: false`."
    }`,
  );
  invariant(
    !constraint.requireImplementation,
    `${prefix}, but action type constraint "${apiName}" is \`requireImplementation: true\`. Only action type constraints declared \`requireImplementation: false\` may be targeted.`,
  );
}

/** `interfaceType` followed by everything it extends, transitively. */
function hierarchyOf(interfaceType: InterfaceType): InterfaceType[] {
  return [
    interfaceType,
    ...interfaceType.extendsInterfaces.flatMap(hierarchyOf),
  ];
}

function flattenedActionTypeConstraints(
  interfaceType: InterfaceType,
): Map<string, OntologyIrInterfaceActionTypeConstraint> {
  return new Map(
    hierarchyOf(interfaceType)
      .reverse()
      .flatMap((it) => it.actionTypeConstraints)
      .map((constraint) => [constraint.metadata.apiName, constraint]),
  );
}
