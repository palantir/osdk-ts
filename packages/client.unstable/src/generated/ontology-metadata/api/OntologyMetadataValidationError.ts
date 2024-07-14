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

import type { ActionTypeError } from "./ActionTypeError.js";
import type { InterfaceTypeError } from "./InterfaceTypeError.js";
import type { LinkTypeError } from "./LinkTypeError.js";
import type { ObjectTypeError } from "./ObjectTypeError.js";
import type { OntologyLimitsError } from "./OntologyLimitsError.js";
import type { RuleSetError } from "./RuleSetError.js";
import type { SharedPropertyTypeError } from "./SharedPropertyTypeError.js";
import type { TypeGroupError } from "./TypeGroupError.js";
import type { WorkflowError } from "./WorkflowError.js";
export interface OntologyMetadataValidationError_ontologyLimits {
  type: "ontologyLimits";
  ontologyLimits: OntologyLimitsError;
}

export interface OntologyMetadataValidationError_objectType {
  type: "objectType";
  objectType: ObjectTypeError;
}

export interface OntologyMetadataValidationError_linkType {
  type: "linkType";
  linkType: LinkTypeError;
}

export interface OntologyMetadataValidationError_ruleSet {
  type: "ruleSet";
  ruleSet: RuleSetError;
}

export interface OntologyMetadataValidationError_workflow {
  type: "workflow";
  workflow: WorkflowError;
}

export interface OntologyMetadataValidationError_actionType {
  type: "actionType";
  actionType: ActionTypeError;
}

export interface OntologyMetadataValidationError_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeError;
}

export interface OntologyMetadataValidationError_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeError;
}

export interface OntologyMetadataValidationError_typeGroup {
  type: "typeGroup";
  typeGroup: TypeGroupError;
}
export type OntologyMetadataValidationError =
  | OntologyMetadataValidationError_ontologyLimits
  | OntologyMetadataValidationError_objectType
  | OntologyMetadataValidationError_linkType
  | OntologyMetadataValidationError_ruleSet
  | OntologyMetadataValidationError_workflow
  | OntologyMetadataValidationError_actionType
  | OntologyMetadataValidationError_sharedPropertyType
  | OntologyMetadataValidationError_interfaceType
  | OntologyMetadataValidationError_typeGroup;
