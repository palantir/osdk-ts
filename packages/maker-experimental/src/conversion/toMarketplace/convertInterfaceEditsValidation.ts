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
import type { InterfaceType, OntologyDefinition } from "@osdk/maker";
import invariant from "tiny-invariant";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { collectInterfaceDefinitions } from "./collectInterfaceDefinitions.js";

export function convertInterfaceEditsValidation(
  validation: OntologyIrInterfaceActionTypeEditsValidation,
  interfaceType: InterfaceType,
  constraint: OntologyIrInterfaceActionTypeConstraint,
  ridGenerator: OntologyRidGenerator,
  ontologies: OntologyDefinition[],
): InterfaceActionTypeEditsValidation {
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
  const parameters = new Map(Object.entries(constraint.parameters));
  const location = `edit validation on action type constraint "${constraint.metadata.apiName}" of interface "${interfaceType.apiName}"`;

  function convertParameter(apiName: string): string {
    const parameter = parameters.get(apiName);
    invariant(
      parameter !== undefined,
      `Parameter constraint "${apiName}" referenced by ${location} must belong to the same action type constraint`,
    );
    invariant(
      parameter.displayMetadata.apiName != null,
      `Parameter constraint "${apiName}" referenced by ${location} has no API name`,
    );
    return ridGenerator.generateRidForInterfaceParameterConstraint(
      constraint.metadata.apiName,
      interfaceType.apiName,
      parameter.displayMetadata.apiName,
    );
  }

  function convertLink(apiName: string): string {
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
    invariant(
      declarations.size > 0,
      `Interface link "${apiName}" referenced by ${location} must belong to that interface or a parent interface`,
    );
    invariant(
      declarations.size === 1,
      `Interface link "${apiName}" referenced by ${location} is declared on multiple interfaces`,
    );
    const [declaringInterface] = declarations;
    invariant(
      interfaces.has(declaringInterface),
      `Define or import interface "${declaringInterface}" to package link "${apiName}" referenced by ${location}`,
    );
    const link = interfaces
      .get(declaringInterface)!
      .links.find((candidate) => candidate.metadata.apiName === apiName)!;
    invariant(
      link.linkedEntityTypeId.type === "interfaceType",
      `Object link references are not supported when packaging ${location}`,
    );
    invariant(
      interfaces.has(link.linkedEntityTypeId.interfaceType),
      `Define or import interface "${link.linkedEntityTypeId.interfaceType}" targeted by link "${apiName}" referenced by ${location}`,
    );
    return ridGenerator.generateRidForInterfaceLinkType(
      apiName,
      declaringInterface,
    );
  }

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
        invariant(
          objectApiNames.has(subject.concreteObject.rid),
          `Define or import object type "${subject.concreteObject.rid}" referenced by ${location}`,
        );
        return {
          ...subject,
          concreteObject: {
            ...subject.concreteObject,
            rid: ridGenerator.generateRidForObjectType(
              subject.concreteObject.rid,
            ),
            operation: convertObjectOperation(subject.concreteObject.operation),
          },
        };
      case "interfaceObject":
        invariant(
          interfaces.has(subject.interfaceObject.rid),
          `Define or import interface "${subject.interfaceObject.rid}" referenced by ${location}`,
        );
        return {
          ...subject,
          interfaceObject: {
            ...subject.interfaceObject,
            rid: ridGenerator.generateRidForInterface(
              subject.interfaceObject.rid,
            ),
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
  throw new Error(
    `Unsupported edit validation variant: ${JSON.stringify(value)}`,
  );
}
