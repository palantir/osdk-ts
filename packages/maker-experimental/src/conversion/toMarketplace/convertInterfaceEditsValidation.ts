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
  ExistingObjectEditRequirement,
  ImplementingObjectEditsValidation,
  ImplementingObjectInterfaceLinkEditsValidation,
  ImplementingObjectInterfaceLinkValidation,
  InterfaceActionTypeConcreteObjectEditsOperation,
  InterfaceActionTypeEditsValidation,
  InterfaceActionTypeEditsValidationCondition,
  InterfaceActionTypeEditsValidationConditionSubject,
  InterfaceLinkedObjectRequirement,
  InterfaceLinkRequirement,
  OntologyIrExistingObjectEditRequirement,
  OntologyIrImplementingObjectEditsValidation,
  OntologyIrImplementingObjectInterfaceLinkEditsValidation,
  OntologyIrImplementingObjectInterfaceLinkValidation,
  OntologyIrInterfaceActionTypeConcreteObjectEditsOperation,
  OntologyIrInterfaceActionTypeConstraint,
  OntologyIrInterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeEditsValidationCondition,
  OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
  OntologyIrInterfaceLinkedObjectRequirement,
  OntologyIrInterfaceLinkRequirement,
} from "@osdk/client.unstable";
import type {
  InterfaceType,
  MakerValidationIssueCollector,
  OntologyDefinition,
} from "@osdk/maker";
import {
  createValidationIssueCollector,
  MakerValidationError,
} from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { collectInterfaceDefinitions } from "./collectInterfaceDefinitions.js";

export function validateInterfaceEditsValidations(
  ontology: OntologyDefinition,
  ontologies: OntologyDefinition[],
): void {
  const collector = createValidationIssueCollector();
  for (const interfaceType of Object.values(ontology.INTERFACE_TYPE)) {
    for (const constraint of interfaceType.actionTypeConstraints ?? []) {
      if (constraint.editsValidation == null) continue;
      resolveReferences(
        constraint.editsValidation,
        interfaceType,
        constraint,
        ontologies,
        collector,
      );
    }
  }
  collector.throwIfAnyIssues();
}

export function convertInterfaceEditsValidation(
  validation: OntologyIrInterfaceActionTypeEditsValidation,
  interfaceType: InterfaceType,
  constraint: OntologyIrInterfaceActionTypeConstraint,
  ridGenerator: OntologyRidGenerator,
  ontologies: OntologyDefinition[],
): InterfaceActionTypeEditsValidation | undefined {
  // convertOntologyDefinition rejects invalid local validations before conversion.
  // Imports may lack these references; skip their validation without allocating RIDs.
  const references = resolveReferences(
    validation,
    interfaceType,
    constraint,
    ontologies,
    createValidationIssueCollector(),
  );
  if (references === undefined) return undefined;
  return mapReferences(validation, {
    convertObject: (apiName) => ridGenerator.generateRidForObjectType(apiName),
    convertInterface: (apiName) =>
      ridGenerator.generateRidForInterface(apiName),
    convertParameter: (apiName) =>
      ridGenerator.generateRidForInterfaceParameterConstraint(
        constraint.metadata.apiName,
        interfaceType.apiName,
        references.parameters.get(apiName)!,
      ),
    convertLink: (apiName) =>
      ridGenerator.generateRidForInterfaceLinkType(
        apiName,
        references.links.get(apiName)!,
      ),
  });
}

function resolveReferences(
  validation: OntologyIrInterfaceActionTypeEditsValidation,
  interfaceType: InterfaceType,
  constraint: OntologyIrInterfaceActionTypeConstraint,
  ontologies: OntologyDefinition[],
  collector: MakerValidationIssueCollector,
): { parameters: Map<string, string>; links: Map<string, string> } | undefined {
  const interfaces = new Map(
    ontologies.flatMap((ontology) => Object.entries(ontology.INTERFACE_TYPE)),
  );
  const interfaceDefinitions = collectInterfaceDefinitions([
    ...interfaces.values(),
    interfaceType,
  ]);
  const objectApiNames = new Set(
    ontologies.flatMap((ontology) => Object.keys(ontology.OBJECT_TYPE)),
  );
  const parameters = new Map<string, string>();
  const links = new Map<string, string>();
  const location = `edit validation on action type constraint "${constraint.metadata.apiName}" of interface "${interfaceType.apiName}"`;
  let valid = true;

  function check(condition: boolean, message: string): boolean {
    collector.addIssue(condition, message);
    valid = valid && condition;
    return condition;
  }

  function resolveParameter(apiName: string): string {
    const parameter = Object.hasOwn(constraint.parameters, apiName)
      ? constraint.parameters[apiName]
      : undefined;
    check(
      parameter !== undefined,
      `Parameter constraint "${apiName}" referenced by ${location} must belong to the same action type constraint`,
    );
    if (parameter === undefined) return apiName;
    check(
      parameter.displayMetadata.apiName != null,
      `Parameter constraint "${apiName}" referenced by ${location} has no API name`,
    );
    if (parameter.displayMetadata.apiName != null) {
      parameters.set(apiName, parameter.displayMetadata.apiName);
    }
    return apiName;
  }

  function resolveLink(apiName: string): string {
    const declarations = new Set<string>();
    const seen = new Set<string>();
    const queue = [interfaceType];
    while (queue.length > 0) {
      const embedded = queue.pop()!;
      if (seen.has(embedded.apiName)) continue;
      seen.add(embedded.apiName);
      const current = interfaceDefinitions.get(embedded.apiName) ?? embedded;
      if (current.links.some((link) => link.metadata.apiName === apiName)) {
        declarations.add(current.apiName);
      }
      queue.push(...current.extendsInterfaces);
    }
    if (
      !check(
        declarations.size > 0,
        `Interface link "${apiName}" referenced by ${location} must belong to that interface or a parent interface`,
      )
    )
      return apiName;
    if (
      !check(
        declarations.size === 1,
        `Interface link "${apiName}" referenced by ${location} is declared on multiple interfaces`,
      )
    )
      return apiName;
    const [declaringInterface] = declarations;
    const link = interfaces
      .get(declaringInterface)
      ?.links.find((candidate) => candidate.metadata.apiName === apiName);
    check(
      link !== undefined,
      `Define or import interface "${declaringInterface}" to package link "${apiName}" referenced by ${location}`,
    );
    if (link === undefined) return apiName;
    check(
      link.linkedEntityTypeId.type === "interfaceType",
      `Object link references are not supported when packaging ${location}`,
    );
    if (link.linkedEntityTypeId.type !== "interfaceType") return apiName;
    check(
      interfaces.has(link.linkedEntityTypeId.interfaceType),
      `Define or import interface "${link.linkedEntityTypeId.interfaceType}" targeted by link "${apiName}" referenced by ${location}`,
    );
    links.set(apiName, declaringInterface);
    return apiName;
  }

  try {
    mapReferences(validation, {
      convertObject(apiName) {
        check(
          objectApiNames.has(apiName),
          `Define or import object type "${apiName}" referenced by ${location}`,
        );
        return apiName;
      },
      convertInterface(apiName) {
        check(
          interfaces.has(apiName),
          `Define or import interface "${apiName}" referenced by ${location}`,
        );
        return apiName;
      },
      convertParameter: resolveParameter,
      convertLink: resolveLink,
    });
  } catch (error) {
    if (!(error instanceof MakerValidationError)) throw error;
    for (const issue of error.issues) collector.addIssue(false, issue);
    valid = false;
  }
  return valid ? { parameters, links } : undefined;
}

function mapReferences(
  validation: OntologyIrInterfaceActionTypeEditsValidation,
  {
    convertObject,
    convertInterface,
    convertParameter,
    convertLink,
  }: {
    convertObject: (apiName: string) => string;
    convertInterface: (apiName: string) => string;
    convertParameter: (apiName: string) => string;
    convertLink: (apiName: string) => string;
  },
): InterfaceActionTypeEditsValidation {
  function convertCondition(
    condition: OntologyIrInterfaceActionTypeEditsValidationCondition,
  ): InterfaceActionTypeEditsValidationCondition {
    switch (condition.type) {
      case "and":
        return {
          ...condition,
          and: {
            ...condition.and,
            conditions: condition.and.conditions.map(convertCondition),
          },
        };
      case "entry":
        return {
          ...condition,
          entry: {
            ...condition.entry,
            subject: convertSubject(condition.entry.subject),
          },
        };
      default:
        return unexpectedVariant(condition);
    }
  }

  function convertSubject(
    subject: OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
  ): InterfaceActionTypeEditsValidationConditionSubject {
    switch (subject.type) {
      case "concreteObject":
        return {
          ...subject,
          concreteObject: {
            ...subject.concreteObject,
            rid: convertObject(subject.concreteObject.rid),
            operation: convertObjectOperation(subject.concreteObject.operation),
          },
        };
      case "interfaceObject":
        return {
          ...subject,
          interfaceObject: {
            ...subject.interfaceObject,
            rid: convertInterface(subject.interfaceObject.rid),
            operation: convertObjectOperation(
              subject.interfaceObject.operation,
            ),
          },
        };
      case "implementingObject":
        return {
          ...subject,
          implementingObject: convertImplementingObject(
            subject.implementingObject,
          ),
        };
      case "implementingObjectInterfaceLink":
        return {
          ...subject,
          implementingObjectInterfaceLink: convertLinkOperation(
            subject.implementingObjectInterfaceLink,
          ),
        };
      default:
        return unexpectedVariant(subject);
    }
  }

  function convertObjectOperation(
    operation: OntologyIrInterfaceActionTypeConcreteObjectEditsOperation,
  ): InterfaceActionTypeConcreteObjectEditsOperation {
    switch (operation.type) {
      case "create":
        return operation;
      case "modify":
        return {
          ...operation,
          modify: {
            ...operation.modify,
            editRequirement: convertEditRequirement(
              operation.modify.editRequirement,
            ),
          },
        };
      case "delete":
        return {
          ...operation,
          delete: {
            ...operation.delete,
            editRequirement: convertEditRequirement(
              operation.delete.editRequirement,
            ),
          },
        };
      default:
        return unexpectedVariant(operation);
    }
  }

  function convertEditRequirement(
    requirement: OntologyIrExistingObjectEditRequirement,
  ): ExistingObjectEditRequirement {
    switch (requirement.type) {
      case "anyObjectOfType":
        return requirement;
      case "objectsFromParameterRequirement":
        return {
          ...requirement,
          objectsFromParameterRequirement: {
            ...requirement.objectsFromParameterRequirement,
            interfaceParameterConstraintRids:
              requirement.objectsFromParameterRequirement.interfaceParameterConstraintRids.map(
                convertParameter,
              ),
          },
        };
      default:
        return unexpectedVariant(requirement);
    }
  }

  function convertImplementingObject(
    operation: OntologyIrImplementingObjectEditsValidation,
  ): ImplementingObjectEditsValidation {
    switch (operation.type) {
      case "create":
        return {
          ...operation,
          create: {
            ...operation.create,
            requiredInterfaceLinkCreations:
              operation.create.requiredInterfaceLinkCreations.map(
                convertLinkRequirement,
              ),
          },
        };
      case "modify":
        return {
          ...operation,
          modify: {
            ...operation.modify,
            editRequirement: convertEditRequirement(
              operation.modify.editRequirement,
            ),
            requiredInterfaceLinkCreations:
              operation.modify.requiredInterfaceLinkCreations.map(
                convertLinkRequirement,
              ),
            requiredInterfaceLinkDeletions:
              operation.modify.requiredInterfaceLinkDeletions.map(
                convertLinkRequirement,
              ),
          },
        };
      case "delete":
        return {
          ...operation,
          delete: {
            ...operation.delete,
            editRequirement: convertEditRequirement(
              operation.delete.editRequirement,
            ),
            requiredInterfaceLinkDeletions:
              operation.delete.requiredInterfaceLinkDeletions.map(
                convertLinkRequirement,
              ),
          },
        };
      default:
        return unexpectedVariant(operation);
    }
  }

  function convertLinkRequirement(
    requirement: OntologyIrInterfaceLinkRequirement,
  ): InterfaceLinkRequirement {
    switch (requirement.type) {
      case "implementingObjectInterfaceLink":
        return {
          ...requirement,
          implementingObjectInterfaceLink: {
            ...requirement.implementingObjectInterfaceLink,
            interfaceLinkTypeRid: convertLink(
              requirement.implementingObjectInterfaceLink.interfaceLinkTypeRid,
            ),
            interfaceLinkedObjectRequirement: convertEndpoint(
              requirement.implementingObjectInterfaceLink
                .interfaceLinkedObjectRequirement,
            ),
          },
        };
      default: {
        const exhaustive: never = requirement.type;
        return unexpectedVariant(exhaustive);
      }
    }
  }

  function convertLinkOperation(
    operation: OntologyIrImplementingObjectInterfaceLinkEditsValidation,
  ): ImplementingObjectInterfaceLinkEditsValidation {
    switch (operation.type) {
      case "create":
        return { ...operation, create: convertLinkEndpoints(operation.create) };
      case "delete":
        return { ...operation, delete: convertLinkEndpoints(operation.delete) };
      default:
        return unexpectedVariant(operation);
    }
  }

  function convertLinkEndpoints(
    link: OntologyIrImplementingObjectInterfaceLinkValidation,
  ): ImplementingObjectInterfaceLinkValidation {
    return {
      ...link,
      interfaceLinkTypeRid: convertLink(link.interfaceLinkTypeRid),
      source: convertEndpoint(link.source),
      target: convertEndpoint(link.target),
    };
  }

  function convertEndpoint(
    requirement: OntologyIrInterfaceLinkedObjectRequirement,
  ): InterfaceLinkedObjectRequirement {
    switch (requirement.type) {
      case "anyCompatibleObject":
        return requirement;
      case "interfaceParameterConstraintRid":
        return {
          ...requirement,
          interfaceParameterConstraintRid: convertParameter(
            requirement.interfaceParameterConstraintRid,
          ),
        };
      default:
        return unexpectedVariant(requirement);
    }
  }

  return { ...validation, condition: convertCondition(validation.condition) };
}

function unexpectedVariant(value: never): never {
  throw new MakerValidationError([
    {
      code: "unsupported_edit_validation_variant",
      message: `Unsupported edit validation variant: ${JSON.stringify(value)}`,
      path: [],
    },
  ]);
}
