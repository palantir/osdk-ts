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

import type { ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError } from "./ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError.js";
import type { ObjectTypeDatasourceColumnMappingMismatchError } from "./ObjectTypeDatasourceColumnMappingMismatchError.js";
import type { ObjectTypeDatasourceWithoutPrimaryKeyColumnError } from "./ObjectTypeDatasourceWithoutPrimaryKeyColumnError.js";
import type { ObjectTypeWithUnmappedTitlePropertyError } from "./ObjectTypeWithUnmappedTitlePropertyError.js";
export interface DatasourceModificationConstraintError_objectTypeDatasourceWithoutPrimaryKeyColumn {
  type: "objectTypeDatasourceWithoutPrimaryKeyColumn";
  objectTypeDatasourceWithoutPrimaryKeyColumn:
    ObjectTypeDatasourceWithoutPrimaryKeyColumnError;
}

export interface DatasourceModificationConstraintError_objectTypeWithUnmappedTitleProperty {
  type: "objectTypeWithUnmappedTitleProperty";
  objectTypeWithUnmappedTitleProperty: ObjectTypeWithUnmappedTitlePropertyError;
}

export interface DatasourceModificationConstraintError_objectTypeDatasourceColumnMappingMismatch {
  type: "objectTypeDatasourceColumnMappingMismatch";
  objectTypeDatasourceColumnMappingMismatch:
    ObjectTypeDatasourceColumnMappingMismatchError;
}

export interface DatasourceModificationConstraintError_manyToManyLinkTypeDatasourcePrimaryKeyMismatch {
  type: "manyToManyLinkTypeDatasourcePrimaryKeyMismatch";
  manyToManyLinkTypeDatasourcePrimaryKeyMismatch:
    ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError;
}
/**
 * A type representing validation errors associated with datasource modifications on a branch.
 */
export type DatasourceModificationConstraintError =
  | DatasourceModificationConstraintError_objectTypeDatasourceWithoutPrimaryKeyColumn
  | DatasourceModificationConstraintError_objectTypeWithUnmappedTitleProperty
  | DatasourceModificationConstraintError_objectTypeDatasourceColumnMappingMismatch
  | DatasourceModificationConstraintError_manyToManyLinkTypeDatasourcePrimaryKeyMismatch;
