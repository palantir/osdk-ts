/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeBlockDataV2 } from "@osdk/client.unstable";
import type { InterfaceType, OntologyDefinition } from "@osdk/maker";
import { getImportedTypes } from "@osdk/maker";
import invariant from "tiny-invariant";

import type { FunctionsIr } from "../../api/defineOntologyV2.js";
import type { OntologyIrV2 } from "../../api/OntologyIrV2.js";
import { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import { flattenInterface } from "./convertObject.js";
import { convertOntologyDefinitionToWireBlockData } from "./convertOntologyDefinitionToWireBlockData.js";
import { convertValueTypeToWireBlockData } from "./convertValueTypeToWireBlockData.js";

export function convertOntologyDefinition(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGeneratorImpl,
  functionsIr?: FunctionsIr,
  randomnessKey?: string,
  packageForEdge = false,
): OntologyIrV2 {
  const importedTypes = getImportedTypes();

  const allOntologies = [ontology, importedTypes];
  const mainOntology = convertOntologyDefinitionToWireBlockData(
    ontology,
    ridGenerator,
    allOntologies,
    functionsIr,
    packageForEdge,
  );

  const importedOntology = convertOntologyDefinitionToWireBlockData(
    importedTypes,
    ridGenerator,
  );

  validateInterfaceActionImplementations(ontology, importedTypes, [
    ...Object.values(importedOntology.actionTypes),
    ...Object.values(mainOntology.actionTypes),
  ]);

  const importedInterfaceApiNames = new Set(
    Object.keys(importedTypes.INTERFACE_TYPE),
  );

  const relatedInterfaces = (iface: InterfaceType): InterfaceType[] =>
    [...(iface.linkedInterfaces ?? []), ...iface.extendsInterfaces].filter(
      (related): related is InterfaceType => typeof related !== "string",
    );

  const fullImportedInterfaces = new Map<string, InterfaceType>();
  const queue: InterfaceType[] = Object.values(importedTypes.INTERFACE_TYPE);
  while (queue.length > 0) {
    const iface = queue.pop();
    if (iface === undefined) continue;
    const related = relatedInterfaces(iface);
    const existing = fullImportedInterfaces.get(iface.apiName);
    // Register on first sight, or replace a truncated stub with a full copy
    if (
      existing === undefined ||
      (relatedInterfaces(existing).length === 0 && related.length > 0)
    ) {
      fullImportedInterfaces.set(iface.apiName, iface);
      queue.push(...related);
    }
  }

  const transitiveInterfaces: OntologyDefinition["INTERFACE_TYPE"] = {};
  for (const [apiName, iface] of fullImportedInterfaces) {
    if (!importedInterfaceApiNames.has(apiName)) {
      transitiveInterfaces[apiName] = iface;
    }
  }
  const transitiveOntology: OntologyDefinition = {
    INTERFACE_TYPE: transitiveInterfaces,
    OBJECT_TYPE: {},
    ACTION_TYPE: {},
    LINK_TYPE: {},
    SHARED_PROPERTY_TYPE: {},
    VALUE_TYPE: {},
  };

  const throwawayRidGenerator = new OntologyRidGeneratorImpl(
    getImportedTypes(),
    randomnessKey,
  );
  const transitiveImportedOntology = convertOntologyDefinitionToWireBlockData(
    transitiveOntology,
    throwawayRidGenerator,
  );

  const valueTypes = convertValueTypeToWireBlockData(ontology, ridGenerator);
  const importedValueTypeBlocks = convertValueTypeToWireBlockData(
    importedTypes,
    ridGenerator,
  );

  return {
    ontology: mainOntology,
    importedOntology,
    transitiveImportedOntology,
    valueTypes,
    importedValueTypes: importedValueTypeBlocks.map(
      ({ blockData }) => blockData,
    ),
    randomnessKey,
  };
}

function validateInterfaceActionImplementations(
  ontology: OntologyDefinition,
  importedTypes: OntologyDefinition,
  convertedActions: ActionTypeBlockDataV2[],
): void {
  const actionApiNames = new Set([
    ...Object.keys(ontology.ACTION_TYPE),
    ...Object.keys(importedTypes.ACTION_TYPE),
  ]);
  const actionsByApiName = new Map(
    convertedActions.map(({ actionType }) => [
      actionType.metadata.apiName,
      actionType,
    ]),
  );
  const validationErrors: string[] = [];

  for (const objectType of Object.values(ontology.OBJECT_TYPE)) {
    for (const implementation of objectType.implementsInterfaces ?? []) {
      const constraints = flattenInterface(
        implementation.implements,
        new Set(),
      ).flatMap((interfaceType) => interfaceType.actionTypeConstraints ?? []);
      for (const [
        constraintApiName,
        { actionTypeApiName, parameterMapping },
      ] of Object.entries(implementation.actionTypeImplementations ?? {})) {
        if (!actionApiNames.has(actionTypeApiName)) {
          validationErrors.push(
            `Action "${actionTypeApiName}" referenced by action type constraint "${constraintApiName}" on interface "${implementation.implements.apiName}" for object "${objectType.apiName}" is not defined or imported`,
          );
          continue;
        }
        const action = actionsByApiName.get(actionTypeApiName);
        // Function-backed actions have no converted parameters until function discovery.
        if (action === undefined) continue;
        const constraint = constraints.find(
          (candidate) => candidate.metadata.apiName === constraintApiName,
        );
        if (constraint === undefined) continue;
        const parameters = new Map(Object.entries(constraint.parameters));
        const parameterValidations = new Map(
          Object.entries(
            action.actionTypeLogic.validation.parameterValidations,
          ),
        );
        for (const [parameterConstraintApiName, parameterId] of Object.entries(
          parameterMapping ?? {},
        )) {
          if (
            parameters.get(parameterConstraintApiName)
              ?.isRequiredParameterOnConcreteAction !== true
          )
            continue;
          const required =
            parameterValidations.get(parameterId)?.defaultValidation.validation
              .required;
          const isRequired =
            required?.type === "required" ||
            (required?.type === "listLengthValidation" &&
              (required.listLengthValidation.minLength ?? 0) > 0);
          if (!isRequired) {
            validationErrors.push(
              `Action parameter "${parameterId}" on action "${actionTypeApiName}" mapped to parameter constraint "${parameterConstraintApiName}" of action type constraint "${constraintApiName}" on interface "${implementation.implements.apiName}" for object "${objectType.apiName}" must be required because isRequiredParameterOnConcreteAction is true`,
            );
          }
        }
      }
    }
  }

  invariant(
    validationErrors.length === 0,
    "\n" +
      validationErrors
        .map((error) => `Ontology Definition Error: ${error}\n`)
        .join("\n"),
  );
}
