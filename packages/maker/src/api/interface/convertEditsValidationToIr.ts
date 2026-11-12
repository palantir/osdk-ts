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
  OntologyIrExistingObjectEditRequirement,
  OntologyIrImplementingObjectEditsValidation,
  OntologyIrImplementingObjectInterfaceLinkEditsValidation,
  OntologyIrImplementingObjectInterfaceLinkValidation,
  OntologyIrInterfaceActionTypeConcreteObjectEditsOperation,
  OntologyIrInterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeEditsValidationCondition,
  OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
  OntologyIrInterfaceLinkedObjectRequirement,
  OntologyIrInterfaceLinkRequirement,
} from "@osdk/client.unstable";
import { toUuid } from "@osdk/generator-converters.ontologyir";
import invariant from "tiny-invariant";

import type {
  ExistingObjectEditRequirementDefinition,
  ImplementingObjectEditsDefinition,
  InterfaceActionTypeEditsValidationConditionDefinition,
  InterfaceActionTypeEditsValidationDefinition,
  InterfaceActionTypeEditsValidationSubjectDefinition,
  InterfaceLinkEditDefinition,
  InterfaceLinkedObjectRequirementDefinition,
  InterfaceLinkEditsDefinition,
  InterfaceLinkRequirementDefinition,
  ObjectEditsOperationDefinition,
} from "./InterfaceActionTypeEditsValidationDefinition.js";

export function convertEditsValidationToIr(
  validation: InterfaceActionTypeEditsValidationDefinition,
  interfaceApiName: string,
  constraintApiName: string,
): OntologyIrInterfaceActionTypeEditsValidation {
  const seenIds = new Set<string>();
  const location = `action type constraint "${constraintApiName}" on interface "${interfaceApiName}"`;

  function convertCondition(
    condition: InterfaceActionTypeEditsValidationConditionDefinition,
  ): OntologyIrInterfaceActionTypeEditsValidationCondition {
    switch (condition.type) {
      case "and":
        return {
          type: "and",
          and: { conditions: condition.and.conditions.map(convertCondition) },
        };
      case "entry": {
        const { id, subject } = condition.entry;
        invariant(
          typeof id === "string" && id.trim().length > 0,
          `Edit validation entry ID on ${location} must not be blank`,
        );
        invariant(
          !seenIds.has(id),
          `Duplicate edit validation entry ID "${id}" on ${location}`,
        );
        seenIds.add(id);
        const locator = toUuid(
          JSON.stringify([
            "interface-action-type-edits-validation-entry",
            interfaceApiName,
            constraintApiName,
            id,
          ]),
        );
        return {
          type: "entry",
          entry: {
            rid: `ri.ontology-metadata.temp.interface-action-type-edits-validation-entry.${locator}`,
            subject: convertSubject(subject),
          },
        };
      }
      default:
        return unexpectedVariant(condition);
    }
  }

  return { condition: convertCondition(validation.condition) };
}

function convertSubject(
  subject: InterfaceActionTypeEditsValidationSubjectDefinition,
): OntologyIrInterfaceActionTypeEditsValidationConditionSubject {
  switch (subject.type) {
    case "concreteObject": {
      const { objectType, operation } = subject.concreteObject;
      return {
        type: "concreteObject",
        concreteObject: {
          rid: typeof objectType === "string" ? objectType : objectType.apiName,
          operation: convertObjectOperation(operation),
        },
      };
    }
    case "interfaceObject": {
      const { interfaceType, operation } = subject.interfaceObject;
      return {
        type: "interfaceObject",
        interfaceObject: {
          rid:
            typeof interfaceType === "string"
              ? interfaceType
              : interfaceType.apiName,
          operation: convertObjectOperation(operation),
        },
      };
    }
    case "implementingObject":
      return {
        type: "implementingObject",
        implementingObject: convertImplementingObject(
          subject.implementingObject,
        ),
      };
    case "implementingObjectInterfaceLink":
      return {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: convertLinkOperation(
          subject.implementingObjectInterfaceLink,
        ),
      };
    default:
      return unexpectedVariant(subject);
  }
}

function convertObjectOperation(
  operation: ObjectEditsOperationDefinition,
): OntologyIrInterfaceActionTypeConcreteObjectEditsOperation {
  switch (operation.type) {
    case "create":
      return { type: "create", create: {} };
    case "modify":
      return {
        type: "modify",
        modify: {
          editRequirement: convertEditRequirement(
            operation.modify.editRequirement,
          ),
        },
      };
    case "delete":
      return {
        type: "delete",
        delete: {
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
  requirement: ExistingObjectEditRequirementDefinition,
): OntologyIrExistingObjectEditRequirement {
  switch (requirement.type) {
    case "anyObjectOfType":
      return { type: "anyObjectOfType", anyObjectOfType: {} };
    case "objectsFromParameterRequirement":
      return {
        type: "objectsFromParameterRequirement",
        objectsFromParameterRequirement: {
          interfaceParameterConstraintRids: [
            ...requirement.objectsFromParameterRequirement
              .interfaceParameterConstraintApiNames,
          ],
        },
      };
    default:
      return unexpectedVariant(requirement);
  }
}

function convertImplementingObject(
  operation: ImplementingObjectEditsDefinition,
): OntologyIrImplementingObjectEditsValidation {
  switch (operation.type) {
    case "create":
      return {
        type: "create",
        create: {
          requiredInterfaceLinkCreations:
            operation.create.requiredInterfaceLinkCreations.map(
              convertLinkRequirement,
            ),
        },
      };
    case "modify":
      return {
        type: "modify",
        modify: {
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
        type: "delete",
        delete: {
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
  requirement: InterfaceLinkRequirementDefinition,
): OntologyIrInterfaceLinkRequirement {
  switch (requirement.type) {
    case "implementingObjectInterfaceLink":
      return {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: {
          interfaceLinkTypeRid:
            requirement.implementingObjectInterfaceLink
              .interfaceLinkTypeApiName,
          interfaceLinkedObjectRequirement: convertLinkedObject(
            requirement.implementingObjectInterfaceLink
              .interfaceLinkedObjectRequirement,
          ),
        },
      };
    default:
      return unexpectedVariant(requirement.type);
  }
}

function convertLinkOperation(
  operation: InterfaceLinkEditsDefinition,
): OntologyIrImplementingObjectInterfaceLinkEditsValidation {
  switch (operation.type) {
    case "create":
      return { type: "create", create: convertLink(operation.create) };
    case "delete":
      return { type: "delete", delete: convertLink(operation.delete) };
    default:
      return unexpectedVariant(operation);
  }
}

function convertLink(
  link: InterfaceLinkEditDefinition,
): OntologyIrImplementingObjectInterfaceLinkValidation {
  return {
    interfaceLinkTypeRid: link.interfaceLinkTypeApiName,
    source: convertLinkedObject(link.source),
    target: convertLinkedObject(link.target),
  };
}

function convertLinkedObject(
  requirement: InterfaceLinkedObjectRequirementDefinition,
): OntologyIrInterfaceLinkedObjectRequirement {
  switch (requirement.type) {
    case "anyCompatibleObject":
      return { type: "anyCompatibleObject", anyCompatibleObject: {} };
    case "interfaceParameterConstraintApiName":
      return {
        type: "interfaceParameterConstraintRid",
        interfaceParameterConstraintRid:
          requirement.interfaceParameterConstraintApiName,
      };
    default:
      return unexpectedVariant(requirement);
  }
}

function unexpectedVariant(value: never): never {
  throw new Error(
    `Unsupported edit validation variant: ${JSON.stringify(value)}`,
  );
}
