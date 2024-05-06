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

import type { TooManyActionTypesError } from "./TooManyActionTypesError.js";
import type { TooManyInterfaceTypesError } from "./TooManyInterfaceTypesError.js";
import type { TooManyManyToManyLinkTypesError } from "./TooManyManyToManyLinkTypesError.js";
import type { TooManyObjectTypesError } from "./TooManyObjectTypesError.js";
import type { TooManyOneToManyLinkTypesError } from "./TooManyOneToManyLinkTypesError.js";
import type { TooManyRuleSetsError } from "./TooManyRuleSetsError.js";
import type { TooManySharedPropertyTypesError } from "./TooManySharedPropertyTypesError.js";
import type { TooManyTypeGroupsError } from "./TooManyTypeGroupsError.js";
import type { TooManyWorkflowsError } from "./TooManyWorkflowsError.js";
export interface OntologyEntityLimitsError_tooManyObjectTypes {
  type: "tooManyObjectTypes";
  tooManyObjectTypes: TooManyObjectTypesError;
}

export interface OntologyEntityLimitsError_tooManyManyToManyLinkTypes {
  type: "tooManyManyToManyLinkTypes";
  tooManyManyToManyLinkTypes: TooManyManyToManyLinkTypesError;
}

export interface OntologyEntityLimitsError_tooManyOneToManyLinkTypes {
  type: "tooManyOneToManyLinkTypes";
  tooManyOneToManyLinkTypes: TooManyOneToManyLinkTypesError;
}

export interface OntologyEntityLimitsError_tooManyRuleSets {
  type: "tooManyRuleSets";
  tooManyRuleSets: TooManyRuleSetsError;
}

export interface OntologyEntityLimitsError_tooManyWorkflows {
  type: "tooManyWorkflows";
  tooManyWorkflows: TooManyWorkflowsError;
}

export interface OntologyEntityLimitsError_tooManyActionTypes {
  type: "tooManyActionTypes";
  tooManyActionTypes: TooManyActionTypesError;
}

export interface OntologyEntityLimitsError_tooManySharedPropertyTypes {
  type: "tooManySharedPropertyTypes";
  tooManySharedPropertyTypes: TooManySharedPropertyTypesError;
}

export interface OntologyEntityLimitsError_tooManyInterfaceTypes {
  type: "tooManyInterfaceTypes";
  tooManyInterfaceTypes: TooManyInterfaceTypesError;
}

export interface OntologyEntityLimitsError_tooManyTypeGroups {
  type: "tooManyTypeGroups";
  tooManyTypeGroups: TooManyTypeGroupsError;
}
export type OntologyEntityLimitsError =
  | OntologyEntityLimitsError_tooManyObjectTypes
  | OntologyEntityLimitsError_tooManyManyToManyLinkTypes
  | OntologyEntityLimitsError_tooManyOneToManyLinkTypes
  | OntologyEntityLimitsError_tooManyRuleSets
  | OntologyEntityLimitsError_tooManyWorkflows
  | OntologyEntityLimitsError_tooManyActionTypes
  | OntologyEntityLimitsError_tooManySharedPropertyTypes
  | OntologyEntityLimitsError_tooManyInterfaceTypes
  | OntologyEntityLimitsError_tooManyTypeGroups;
