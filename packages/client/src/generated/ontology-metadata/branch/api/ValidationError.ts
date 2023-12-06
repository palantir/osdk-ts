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

import type { ForeignKeyConstraintError } from "./ForeignKeyConstraintError.js";
import type { FoundrySchemaConstraintError } from "./FoundrySchemaConstraintError.js";
import type { NumberOfDatasourcesConstraintError } from "./NumberOfDatasourcesConstraintError.js";
import type { SchemaMigrationError } from "./SchemaMigrationError.js";
export interface ValidationError_foreignKeyConstraint {
  type: "foreignKeyConstraint";
  foreignKeyConstraint: ForeignKeyConstraintError;
}

export interface ValidationError_foundrySchemaConstraint {
  type: "foundrySchemaConstraint";
  foundrySchemaConstraint: FoundrySchemaConstraintError;
}

export interface ValidationError_numberOfDatasourcesConstraint {
  type: "numberOfDatasourcesConstraint";
  numberOfDatasourcesConstraint: NumberOfDatasourcesConstraintError;
}

export interface ValidationError_schemaMigration {
  type: "schemaMigration";
  schemaMigration: SchemaMigrationError;
}
export type ValidationError =
  | ValidationError_foreignKeyConstraint
  | ValidationError_foundrySchemaConstraint
  | ValidationError_numberOfDatasourcesConstraint
  | ValidationError_schemaMigration;
