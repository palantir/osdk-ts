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

import type { LinkTypesHaveMultipleDatasourcesError } from "./LinkTypesHaveMultipleDatasourcesError.js";
import type { LinkTypesHaveNoDatasourcesError } from "./LinkTypesHaveNoDatasourcesError.js";
import type { ObjectTypesHaveNoDatasourcesError } from "./ObjectTypesHaveNoDatasourcesError.js";
import type { ObjectTypesHaveTooManyDatasourcesError } from "./ObjectTypesHaveTooManyDatasourcesError.js";
export interface NumberOfDatasourcesConstraintError_objectTypesHaveNoDatasources {
  type: "objectTypesHaveNoDatasources";
  objectTypesHaveNoDatasources: ObjectTypesHaveNoDatasourcesError;
}

export interface NumberOfDatasourcesConstraintError_objectTypesHaveTooManyDatasources {
  type: "objectTypesHaveTooManyDatasources";
  objectTypesHaveTooManyDatasources: ObjectTypesHaveTooManyDatasourcesError;
}

export interface NumberOfDatasourcesConstraintError_linkTypesHaveNoDatasources {
  type: "linkTypesHaveNoDatasources";
  linkTypesHaveNoDatasources: LinkTypesHaveNoDatasourcesError;
}

export interface NumberOfDatasourcesConstraintError_linkTypesHaveMultipleDatasources {
  type: "linkTypesHaveMultipleDatasources";
  linkTypesHaveMultipleDatasources: LinkTypesHaveMultipleDatasourcesError;
}
/**
 * A type representing the Validation Errors associated with validations on the number of datasources.
 */
export type NumberOfDatasourcesConstraintError =
  | NumberOfDatasourcesConstraintError_objectTypesHaveNoDatasources
  | NumberOfDatasourcesConstraintError_objectTypesHaveTooManyDatasources
  | NumberOfDatasourcesConstraintError_linkTypesHaveNoDatasources
  | NumberOfDatasourcesConstraintError_linkTypesHaveMultipleDatasources;
