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

import type { ObjectType } from "../object/ObjectType.js";
import type { ObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";
import type { InterfaceType } from "./InterfaceType.js";

export interface InterfaceActionTypeEditsValidationDefinition {
  condition: InterfaceActionTypeEditsValidationConditionDefinition;
}

export type InterfaceActionTypeEditsValidationConditionDefinition =
  | { type: "entry"; entry: InterfaceActionTypeEditsValidationEntryDefinition }
  | {
      type: "and";
      and: {
        conditions: InterfaceActionTypeEditsValidationConditionDefinition[];
      };
    };

export interface InterfaceActionTypeEditsValidationEntryDefinition {
  id: string;
  subject: InterfaceActionTypeEditsValidationSubjectDefinition;
}

export type InterfaceActionTypeEditsValidationSubjectDefinition =
  | {
      type: "concreteObject";
      concreteObject: {
        objectType: ObjectType | ObjectTypeDefinition | string;
        operation: ObjectEditsOperationDefinition;
      };
    }
  | {
      type: "interfaceObject";
      interfaceObject: {
        interfaceType: InterfaceType | string;
        operation: ObjectEditsOperationDefinition;
      };
    }
  | {
      type: "implementingObject";
      implementingObject: ImplementingObjectEditsDefinition;
    }
  | {
      type: "implementingObjectInterfaceLink";
      implementingObjectInterfaceLink: InterfaceLinkEditsDefinition;
    };

export type ObjectEditsOperationDefinition =
  | { type: "create"; create: Record<string, never> }
  | {
      type: "modify";
      modify: { editRequirement: ExistingObjectEditRequirementDefinition };
    }
  | {
      type: "delete";
      delete: { editRequirement: ExistingObjectEditRequirementDefinition };
    };

export type ExistingObjectEditRequirementDefinition =
  | { type: "anyObjectOfType"; anyObjectOfType: Record<string, never> }
  | {
      type: "objectsFromParameterRequirement";
      objectsFromParameterRequirement: {
        interfaceParameterConstraintApiNames: string[];
      };
    };

export type ImplementingObjectEditsDefinition =
  | {
      type: "create";
      create: {
        requiredInterfaceLinkCreations: InterfaceLinkRequirementDefinition[];
      };
    }
  | {
      type: "modify";
      modify: {
        editRequirement: ExistingObjectEditRequirementDefinition;
        requiredInterfaceLinkCreations: InterfaceLinkRequirementDefinition[];
        requiredInterfaceLinkDeletions: InterfaceLinkRequirementDefinition[];
      };
    }
  | {
      type: "delete";
      delete: {
        editRequirement: ExistingObjectEditRequirementDefinition;
        requiredInterfaceLinkDeletions: InterfaceLinkRequirementDefinition[];
      };
    };

export interface InterfaceLinkRequirementDefinition {
  type: "implementingObjectInterfaceLink";
  implementingObjectInterfaceLink: {
    interfaceLinkTypeApiName: string;
    interfaceLinkedObjectRequirement: InterfaceLinkedObjectRequirementDefinition;
  };
}

export type InterfaceLinkEditsDefinition =
  | { type: "create"; create: InterfaceLinkEditDefinition }
  | { type: "delete"; delete: InterfaceLinkEditDefinition };

export interface InterfaceLinkEditDefinition {
  interfaceLinkTypeApiName: string;
  source: InterfaceLinkedObjectRequirementDefinition;
  target: InterfaceLinkedObjectRequirementDefinition;
}

export type InterfaceLinkedObjectRequirementDefinition =
  | { type: "anyCompatibleObject"; anyCompatibleObject: Record<string, never> }
  | {
      type: "interfaceParameterConstraintApiName";
      interfaceParameterConstraintApiName: string;
    };
