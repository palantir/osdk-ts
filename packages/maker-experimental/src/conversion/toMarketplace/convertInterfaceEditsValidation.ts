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
  InterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeConstraint,
  OntologyIrInterfaceActionTypeEditsValidation,
} from "@osdk/client.unstable";
import type { InterfaceType, OntologyDefinition } from "@osdk/maker";
import {
  createValidationIssueCollector,
  mapInterfaceEditsValidationReferences,
} from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";

type Constraint = Pick<
  OntologyIrInterfaceActionTypeConstraint,
  "metadata" | "parameters"
>;

/**
 * Validates that every link an interface edit validation references can be packaged.
 *
 * NOTE: `validateOntology` already checked that every reference resolves.
 */
export function validateInterfaceEditsValidationsPackageable(
  ontology: OntologyDefinition,
  ontologies: OntologyDefinition[],
): void {
  const collector = createValidationIssueCollector();
  for (const interfaceType of Object.values(ontology.INTERFACE_TYPE)) {
    for (const constraint of interfaceType.actionTypeConstraints ?? []) {
      if (constraint.editsValidation == null) continue;
      mapInterfaceEditsValidationReferences(
        constraint.editsValidation,
        interfaceType,
        constraint,
        ontologies,
        {
          convertObject: (apiName) => apiName,
          convertInterface: (apiName) => apiName,
          convertParameter: (apiName) => apiName,
          convertLink: (apiName, declaringInterfaceApiName) => {
            for (const issue of linkPackagingIssues(
              apiName,
              declaringInterfaceApiName,
              interfaceType,
              constraint,
              ontologies,
            )) {
              collector.check(false, issue);
            }
            return apiName;
          },
        },
      );
    }
  }
  collector.throwIfAnyIssues();
}

export function convertInterfaceEditsValidation(
  validation: OntologyIrInterfaceActionTypeEditsValidation,
  interfaceType: InterfaceType,
  constraint: Constraint,
  ridGenerator: OntologyRidGenerator,
  ontologies: OntologyDefinition[],
): InterfaceActionTypeEditsValidation | undefined {
  let packageable = true;
  const converted = mapInterfaceEditsValidationReferences(
    validation,
    interfaceType,
    constraint,
    ontologies,
    {
      convertObject: (apiName) =>
        ridGenerator.generateRidForObjectType(apiName),
      convertInterface: (apiName) =>
        ridGenerator.generateRidForInterface(apiName),
      convertParameter: (parameterApiName) =>
        ridGenerator.generateRidForInterfaceParameterConstraint(
          constraint.metadata.apiName,
          interfaceType.apiName,
          parameterApiName,
        ),
      convertLink: (apiName, declaringInterfaceApiName) => {
        if (
          linkPackagingIssues(
            apiName,
            declaringInterfaceApiName,
            interfaceType,
            constraint,
            ontologies,
          ).length > 0
        ) {
          packageable = false;
          return apiName;
        }
        return ridGenerator.generateRidForInterfaceLinkType(
          apiName,
          declaringInterfaceApiName,
        );
      },
    },
  );
  return packageable ? converted : undefined;
}

function linkPackagingIssues(
  apiName: string,
  declaringInterfaceApiName: string,
  interfaceType: InterfaceType,
  constraint: Constraint,
  ontologies: OntologyDefinition[],
): string[] {
  const location = `edit validation on action type constraint "${constraint.metadata.apiName}" of interface "${interfaceType.apiName}"`;
  const link = findInterface(declaringInterfaceApiName, ontologies)?.links.find(
    (candidate) => candidate.metadata.apiName === apiName,
  );
  if (link === undefined) {
    return [
      `Define or import interface "${declaringInterfaceApiName}" to package link "${apiName}" referenced by ${location}`,
    ];
  }
  if (link.linkedEntityTypeId.type !== "interfaceType") {
    return [
      `Object link references are not supported when packaging ${location}`,
    ];
  }
  const target = link.linkedEntityTypeId.interfaceType;
  if (findInterface(target, ontologies) === undefined) {
    return [
      `Define or import interface "${target}" targeted by link "${apiName}" referenced by ${location}`,
    ];
  }
  return [];
}

function findInterface(
  apiName: string,
  ontologies: OntologyDefinition[],
): InterfaceType | undefined {
  return new Map(
    ontologies.flatMap((ontology) => Object.entries(ontology.INTERFACE_TYPE)),
  ).get(apiName);
}
