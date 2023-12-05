/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { InvalidForeignKeyTypeError } from "./InvalidForeignKeyTypeError.mjs";
import type { LinkTypeReferencesInvalidForeignKeyError } from "./LinkTypeReferencesInvalidForeignKeyError.mjs";
import type { LinkTypeReferencesInvalidPrimaryKeyError } from "./LinkTypeReferencesInvalidPrimaryKeyError.mjs";
import type { PrimaryAndForeignKeyTypeMismatchError } from "./PrimaryAndForeignKeyTypeMismatchError.mjs";
export interface ForeignKeyConstraintError_linkTypeReferencesInvalidPrimaryKey {
  type: "linkTypeReferencesInvalidPrimaryKey";
  linkTypeReferencesInvalidPrimaryKey: LinkTypeReferencesInvalidPrimaryKeyError;
}

export interface ForeignKeyConstraintError_linkTypeReferencesInvalidForeignKey {
  type: "linkTypeReferencesInvalidForeignKey";
  linkTypeReferencesInvalidForeignKey: LinkTypeReferencesInvalidForeignKeyError;
}

export interface ForeignKeyConstraintError_primaryAndForeignKeyTypeMismatch {
  type: "primaryAndForeignKeyTypeMismatch";
  primaryAndForeignKeyTypeMismatch: PrimaryAndForeignKeyTypeMismatchError;
}

export interface ForeignKeyConstraintError_invalidForeignKeyType {
  type: "invalidForeignKeyType";
  invalidForeignKeyType: InvalidForeignKeyTypeError;
}

export type ForeignKeyConstraintError =
  | ForeignKeyConstraintError_linkTypeReferencesInvalidPrimaryKey
  | ForeignKeyConstraintError_linkTypeReferencesInvalidForeignKey
  | ForeignKeyConstraintError_primaryAndForeignKeyTypeMismatch
  | ForeignKeyConstraintError_invalidForeignKeyType;
