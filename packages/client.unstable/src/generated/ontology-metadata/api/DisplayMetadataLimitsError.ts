/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeDescriptionTooLongError } from "./ActionTypeDescriptionTooLongError.js";
import type { ActionTypeDisplayNameTooLongError } from "./ActionTypeDisplayNameTooLongError.js";
import type { ActionTypeParameterDescriptionTooLongError } from "./ActionTypeParameterDescriptionTooLongError.js";
import type { ActionTypeParameterDisplayNameTooLongError } from "./ActionTypeParameterDisplayNameTooLongError.js";
import type { ActionTypeSectionDescriptionTooLongError } from "./ActionTypeSectionDescriptionTooLongError.js";
import type { ActionTypeSectionDisplayNameTooLongError } from "./ActionTypeSectionDisplayNameTooLongError.js";
import type { InterfaceLinkTypeDescriptionTooLongError } from "./InterfaceLinkTypeDescriptionTooLongError.js";
import type { InterfaceLinkTypeDisplayNameTooLongError } from "./InterfaceLinkTypeDisplayNameTooLongError.js";
import type { InterfaceTypeDescriptionTooLongError } from "./InterfaceTypeDescriptionTooLongError.js";
import type { InterfaceTypeDisplayNameTooLongError } from "./InterfaceTypeDisplayNameTooLongError.js";
import type { LinkTypeDisplayNameTooLongError } from "./LinkTypeDisplayNameTooLongError.js";
import type { ObjectTypeDescriptionTooLongError } from "./ObjectTypeDescriptionTooLongError.js";
import type { ObjectTypeDisplayNameTooLongError } from "./ObjectTypeDisplayNameTooLongError.js";
import type { PropertyTypeDescriptionTooLongError } from "./PropertyTypeDescriptionTooLongError.js";
import type { PropertyTypeDisplayNameTooLongError } from "./PropertyTypeDisplayNameTooLongError.js";
import type { RuleSetDescriptionTooLongError } from "./RuleSetDescriptionTooLongError.js";
import type { RuleSetNamedTypeNameTooLongError } from "./RuleSetNamedTypeNameTooLongError.js";
import type { RuleSetNameTooLongError } from "./RuleSetNameTooLongError.js";
import type { SharedPropertyTypeDescriptionTooLongError } from "./SharedPropertyTypeDescriptionTooLongError.js";
import type { SharedPropertyTypeDisplayNameTooLongError } from "./SharedPropertyTypeDisplayNameTooLongError.js";
import type { TypeGroupDescriptionTooLongError } from "./TypeGroupDescriptionTooLongError.js";
import type { TypeGroupDisplayNameTooLongError } from "./TypeGroupDisplayNameTooLongError.js";
import type { WorkflowArchetypeVersionTooLongError } from "./WorkflowArchetypeVersionTooLongError.js";
import type { WorkflowArchetypIdTooLongError } from "./WorkflowArchetypIdTooLongError.js";
import type { WorkflowDescriptionTooLongError } from "./WorkflowDescriptionTooLongError.js";
import type { WorkflowDisplayNameTooLongError } from "./WorkflowDisplayNameTooLongError.js";
export interface DisplayMetadataLimitsError_objectTypeDisplayNameError {
  type: "objectTypeDisplayNameError";
  objectTypeDisplayNameError: ObjectTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_objectTypeDescriptionError {
  type: "objectTypeDescriptionError";
  objectTypeDescriptionError: ObjectTypeDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_propertyTypeDisplayNameError {
  type: "propertyTypeDisplayNameError";
  propertyTypeDisplayNameError: PropertyTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_propertyTypeDescriptionError {
  type: "propertyTypeDescriptionError";
  propertyTypeDescriptionError: PropertyTypeDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_linkTypeDisplayNameError {
  type: "linkTypeDisplayNameError";
  linkTypeDisplayNameError: LinkTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_actionTypeDisplayNameError {
  type: "actionTypeDisplayNameError";
  actionTypeDisplayNameError: ActionTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_actionTypeDescriptionError {
  type: "actionTypeDescriptionError";
  actionTypeDescriptionError: ActionTypeDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_actionTypeSectionDisplayNameError {
  type: "actionTypeSectionDisplayNameError";
  actionTypeSectionDisplayNameError: ActionTypeSectionDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_actionTypeSectionDescriptionError {
  type: "actionTypeSectionDescriptionError";
  actionTypeSectionDescriptionError: ActionTypeSectionDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_actionTypeParameterDisplayNameError {
  type: "actionTypeParameterDisplayNameError";
  actionTypeParameterDisplayNameError:
    ActionTypeParameterDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_actionTypeParameterDescriptionError {
  type: "actionTypeParameterDescriptionError";
  actionTypeParameterDescriptionError:
    ActionTypeParameterDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_sharedPropertyTypeDisplayNameError {
  type: "sharedPropertyTypeDisplayNameError";
  sharedPropertyTypeDisplayNameError: SharedPropertyTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_sharedPropertyTypeDescriptionError {
  type: "sharedPropertyTypeDescriptionError";
  sharedPropertyTypeDescriptionError: SharedPropertyTypeDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_interfaceTypeDisplayNameError {
  type: "interfaceTypeDisplayNameError";
  interfaceTypeDisplayNameError: InterfaceTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_interfaceTypeDescriptionError {
  type: "interfaceTypeDescriptionError";
  interfaceTypeDescriptionError: InterfaceTypeDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_interfaceLinkTypeDisplayNameError {
  type: "interfaceLinkTypeDisplayNameError";
  interfaceLinkTypeDisplayNameError: InterfaceLinkTypeDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_interfaceLinkTypeDescriptionError {
  type: "interfaceLinkTypeDescriptionError";
  interfaceLinkTypeDescriptionError: InterfaceLinkTypeDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_ruleSetNameError {
  type: "ruleSetNameError";
  ruleSetNameError: RuleSetNameTooLongError;
}

export interface DisplayMetadataLimitsError_ruleSetDescriptionError {
  type: "ruleSetDescriptionError";
  ruleSetDescriptionError: RuleSetDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_ruleSetNamedTypeNameError {
  type: "ruleSetNamedTypeNameError";
  ruleSetNamedTypeNameError: RuleSetNamedTypeNameTooLongError;
}

export interface DisplayMetadataLimitsError_workflowDisplayNameError {
  type: "workflowDisplayNameError";
  workflowDisplayNameError: WorkflowDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_workflowDescriptionError {
  type: "workflowDescriptionError";
  workflowDescriptionError: WorkflowDescriptionTooLongError;
}

export interface DisplayMetadataLimitsError_workflowArchetypeIdError {
  type: "workflowArchetypeIdError";
  workflowArchetypeIdError: WorkflowArchetypIdTooLongError;
}

export interface DisplayMetadataLimitsError_workflowArchetypeVersionError {
  type: "workflowArchetypeVersionError";
  workflowArchetypeVersionError: WorkflowArchetypeVersionTooLongError;
}

export interface DisplayMetadataLimitsError_typeGroupDisplayNameError {
  type: "typeGroupDisplayNameError";
  typeGroupDisplayNameError: TypeGroupDisplayNameTooLongError;
}

export interface DisplayMetadataLimitsError_typeGroupDescriptionError {
  type: "typeGroupDescriptionError";
  typeGroupDescriptionError: TypeGroupDescriptionTooLongError;
}
export type DisplayMetadataLimitsError =
  | DisplayMetadataLimitsError_objectTypeDisplayNameError
  | DisplayMetadataLimitsError_objectTypeDescriptionError
  | DisplayMetadataLimitsError_propertyTypeDisplayNameError
  | DisplayMetadataLimitsError_propertyTypeDescriptionError
  | DisplayMetadataLimitsError_linkTypeDisplayNameError
  | DisplayMetadataLimitsError_actionTypeDisplayNameError
  | DisplayMetadataLimitsError_actionTypeDescriptionError
  | DisplayMetadataLimitsError_actionTypeSectionDisplayNameError
  | DisplayMetadataLimitsError_actionTypeSectionDescriptionError
  | DisplayMetadataLimitsError_actionTypeParameterDisplayNameError
  | DisplayMetadataLimitsError_actionTypeParameterDescriptionError
  | DisplayMetadataLimitsError_sharedPropertyTypeDisplayNameError
  | DisplayMetadataLimitsError_sharedPropertyTypeDescriptionError
  | DisplayMetadataLimitsError_interfaceTypeDisplayNameError
  | DisplayMetadataLimitsError_interfaceTypeDescriptionError
  | DisplayMetadataLimitsError_interfaceLinkTypeDisplayNameError
  | DisplayMetadataLimitsError_interfaceLinkTypeDescriptionError
  | DisplayMetadataLimitsError_ruleSetNameError
  | DisplayMetadataLimitsError_ruleSetDescriptionError
  | DisplayMetadataLimitsError_ruleSetNamedTypeNameError
  | DisplayMetadataLimitsError_workflowDisplayNameError
  | DisplayMetadataLimitsError_workflowDescriptionError
  | DisplayMetadataLimitsError_workflowArchetypeIdError
  | DisplayMetadataLimitsError_workflowArchetypeVersionError
  | DisplayMetadataLimitsError_typeGroupDisplayNameError
  | DisplayMetadataLimitsError_typeGroupDescriptionError;
