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

import type {
  ActionTypeIdentifier as _api_ActionTypeIdentifier,
  ActionTypeParameterIdentifier as _api_ActionTypeParameterIdentifier,
  DatasourceIdentifier as _api_DatasourceIdentifier,
  InterfaceTypeRidOrIdInRequest as _api_InterfaceTypeRidOrIdInRequest,
  LinkTypeIdentifier as _api_LinkTypeIdentifier,
  ObjectTypeIdentifier as _api_ObjectTypeIdentifier,
  PropertyTypeIdentifier as _api_PropertyTypeIdentifier,
  SharedPropertyTypeRidOrIdInRequest as _api_SharedPropertyTypeRidOrIdInRequest,
  TypeGroupRidOrIdInRequest as _api_TypeGroupRidOrIdInRequest,
} from "../__components.js";
import type { RuleSetIdentifier as _api_formatting_RuleSetIdentifier } from "../formatting/__components.js";
export interface ActionTypeErrorCategory_definition {
  type: "definition";
  definition: InvalidActionTypeDefinition;
}

export interface ActionTypeErrorCategory_parameter {
  type: "parameter";
  parameter: InvalidActionTypeParameterWithIdentifier;
}
export type ActionTypeErrorCategory =
  | ActionTypeErrorCategory_definition
  | ActionTypeErrorCategory_parameter;

export interface ActionTypeParameterErrorCategory_definition {
  type: "definition";
  definition: InvalidActionTypeParameterDefinition;
}
export type ActionTypeParameterErrorCategory =
  ActionTypeParameterErrorCategory_definition;

export interface ErrorData {
  errorMessage: string;
  errorName: string;
  safeArgs: Array<SafeArg>;
  unsafeArgs: Array<UnsafeArg>;
}
/**
 * Error Tags are applied at the error level, enabling the client to manage errors differently.
 *
 * For example, EXTERNAL errors represents validations dependent on the state of other services. These can be
 * bypassed during global branch merge dry-runs, as resources in other services have not yet been merged.
 */
export type ErrorTag = "EXTERNAL" | "PIPELINE_BUILDER_EASED";

/**
 * The ErrorType Enum contains all possible ontology modification validation errors.
 */
export type ErrorType = "PLACEHOLDER";
export interface IndeterminateErrorCategory {
}
export interface InterfaceTypeErrorCategory_definition {
  type: "definition";
  definition: InvalidInterfaceTypeDefinition;
}
export type InterfaceTypeErrorCategory = InterfaceTypeErrorCategory_definition;

export interface InvalidActionTypeDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidActionTypeDefinition =
  InvalidActionTypeDefinition_indeterminate;

export interface InvalidActionTypeParameterDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidActionTypeParameterDefinition =
  InvalidActionTypeParameterDefinition_indeterminate;

export interface InvalidActionTypeParameterWithIdentifier {
  errorCategory: ActionTypeParameterErrorCategory;
  identifier: _api_ActionTypeParameterIdentifier;
}
export interface InvalidActionTypeWithIdentifier {
  errorCategory: ActionTypeErrorCategory;
  identifier: _api_ActionTypeIdentifier;
}
export interface InvalidEntity_objectType {
  type: "objectType";
  objectType: InvalidObjectTypeWithIdentifier;
}

export interface InvalidEntity_linkType {
  type: "linkType";
  linkType: InvalidLinkTypeWithIdentifier;
}

export interface InvalidEntity_interfaceType {
  type: "interfaceType";
  interfaceType: InvalidInterfaceTypeWithIdentifier;
}

export interface InvalidEntity_actionType {
  type: "actionType";
  actionType: InvalidActionTypeWithIdentifier;
}

export interface InvalidEntity_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: InvalidSharedPropertyTypeWithIdentifier;
}

export interface InvalidEntity_typeGroup {
  type: "typeGroup";
  typeGroup: InvalidTypeGroupWithIdentifier;
}

export interface InvalidEntity_ruleSet {
  type: "ruleSet";
  ruleSet: InvalidRuleSetWithIdentifier;
}

export interface InvalidEntity_workflow {
  type: "workflow";
  workflow: InvalidWorkflowWithIdentifier;
}
/**
 * InvalidEntity includes the identifiers of the entity, as well as the {entity}ErrorCategory.
 *
 * Examples of error categories are InvalidObjectTypeDefinition (which could be extended to one category per OT
 * field: invalidObjectTypeApiName, invalidStatus, etc.), InvalidObjectPropertyTypeDefinition, and others.
 * These can also contain non-identifier strongly typed fields.
 */
export type InvalidEntity =
  | InvalidEntity_objectType
  | InvalidEntity_linkType
  | InvalidEntity_interfaceType
  | InvalidEntity_actionType
  | InvalidEntity_sharedPropertyType
  | InvalidEntity_typeGroup
  | InvalidEntity_ruleSet
  | InvalidEntity_workflow;

export interface InvalidInterfaceTypeDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidInterfaceTypeDefinition =
  InvalidInterfaceTypeDefinition_indeterminate;

export interface InvalidInterfaceTypeWithIdentifier {
  errorCategory: InterfaceTypeErrorCategory;
  identifier: _api_InterfaceTypeRidOrIdInRequest;
}
export interface InvalidLinkTypeDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidLinkTypeDefinition = InvalidLinkTypeDefinition_indeterminate;

export interface InvalidLinkTypeWithIdentifier {
  errorCategory: LinkTypeErrorCategory;
  identifier: _api_LinkTypeIdentifier;
}
export interface InvalidObjectDatasourceDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidObjectDatasourceDefinition =
  InvalidObjectDatasourceDefinition_indeterminate;

export interface InvalidObjectPropertyTypeDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidObjectPropertyTypeDefinition =
  InvalidObjectPropertyTypeDefinition_indeterminate;

export interface InvalidObjectPropertyTypeWithIdentifier {
  errorCategory: ObjectPropertyTypeErrorCategory;
  identifier: _api_PropertyTypeIdentifier;
}
export interface InvalidObjectTypeDatasourceWithIdentifier {
  errorCategory: ObjectTypeDatasourceErrorCategory;
  identifier: _api_DatasourceIdentifier;
}
export interface InvalidObjectTypeDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidObjectTypeDefinition =
  InvalidObjectTypeDefinition_indeterminate;

export interface InvalidObjectTypeWithIdentifier {
  errorCategory: ObjectTypeErrorCategory;
  identifier: _api_ObjectTypeIdentifier;
}
export interface InvalidRuleSetWithIdentifier {
  identifier: _api_formatting_RuleSetIdentifier;
}
export interface InvalidSharedPropertyTypeDefinition_indeterminate {
  type: "indeterminate";
  indeterminate: IndeterminateErrorCategory;
}
export type InvalidSharedPropertyTypeDefinition =
  InvalidSharedPropertyTypeDefinition_indeterminate;

export interface InvalidSharedPropertyTypeWithIdentifier {
  errorCategory: SharedPropertyTypeErrorCategory;
  identifier: _api_SharedPropertyTypeRidOrIdInRequest;
}
export interface InvalidTypeGroupWithIdentifier {
  identifier: _api_TypeGroupRidOrIdInRequest;
}
/**
 * Workflows are deprecated.
 */
export interface InvalidWorkflowWithIdentifier {
}
export interface LinkTypeErrorCategory_definition {
  type: "definition";
  definition: InvalidLinkTypeDefinition;
}
export type LinkTypeErrorCategory = LinkTypeErrorCategory_definition;

export interface ObjectPropertyTypeErrorCategory_definition {
  type: "definition";
  definition: InvalidObjectPropertyTypeDefinition;
}
export type ObjectPropertyTypeErrorCategory =
  ObjectPropertyTypeErrorCategory_definition;

export interface ObjectTypeDatasourceErrorCategory_definition {
  type: "definition";
  definition: InvalidObjectDatasourceDefinition;
}
export type ObjectTypeDatasourceErrorCategory =
  ObjectTypeDatasourceErrorCategory_definition;

export interface ObjectTypeErrorCategory_definition {
  type: "definition";
  definition: InvalidObjectTypeDefinition;
}

export interface ObjectTypeErrorCategory_propertyType {
  type: "propertyType";
  propertyType: InvalidObjectPropertyTypeWithIdentifier;
}

export interface ObjectTypeErrorCategory_datasource {
  type: "datasource";
  datasource: InvalidObjectTypeDatasourceWithIdentifier;
}
export type ObjectTypeErrorCategory =
  | ObjectTypeErrorCategory_definition
  | ObjectTypeErrorCategory_propertyType
  | ObjectTypeErrorCategory_datasource;

export interface OntologyModificationValidationError {
  errorData: ErrorData;
  errorTags: Array<ErrorTag>;
  errorType: ErrorType;
  invalidEntities: Array<InvalidEntity>;
}
export interface SafeArg {
  name: string;
  value: SafeArgValue;
}
export interface SafeArgList {
  value: Array<SafeArgString>;
}
export interface SafeArgOptional {
  value?: SafeArgString | null | undefined;
}
export type SafeArgString = string;
export interface SafeArgValue_string {
  type: "string";
  string: SafeArgString;
}

export interface SafeArgValue_list {
  type: "list";
  list: SafeArgList;
}

export interface SafeArgValue_optional {
  type: "optional";
  optional: SafeArgOptional;
}
export type SafeArgValue =
  | SafeArgValue_string
  | SafeArgValue_list
  | SafeArgValue_optional;

export interface SharedPropertyTypeErrorCategory_definition {
  type: "definition";
  definition: InvalidSharedPropertyTypeDefinition;
}
export type SharedPropertyTypeErrorCategory =
  SharedPropertyTypeErrorCategory_definition;

export interface UnsafeArg {
  name: string;
  value: UnsafeArgValue;
}
export interface UnsafeArgList {
  value: Array<UnsafeArgString>;
}
export interface UnsafeArgOptional {
  value?: UnsafeArgString | null | undefined;
}
export type UnsafeArgString = string;
export interface UnsafeArgValue_string {
  type: "string";
  string: UnsafeArgString;
}

export interface UnsafeArgValue_list {
  type: "list";
  list: UnsafeArgList;
}

export interface UnsafeArgValue_optional {
  type: "optional";
  optional: UnsafeArgOptional;
}
export type UnsafeArgValue =
  | UnsafeArgValue_string
  | UnsafeArgValue_list
  | UnsafeArgValue_optional;
