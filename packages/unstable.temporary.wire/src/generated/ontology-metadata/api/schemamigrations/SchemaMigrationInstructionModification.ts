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

import type { CastMigrationModification } from "./CastMigrationModification.js";
import type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
import type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
import type { DropPropertyMigration } from "./DropPropertyMigration.js";
import type { NonRevertibleMigrationModification } from "./NonRevertibleMigrationModification.js";
import type { RenameDatasourceMigrationModification } from "./RenameDatasourceMigrationModification.js";
import type { RenamePropertyMigrationModification } from "./RenamePropertyMigrationModification.js";
import type { RevertMigration } from "./RevertMigration.js";
import type { UpdateEditsResolutionStrategyMigrationModification } from "./UpdateEditsResolutionStrategyMigrationModification.js";
export interface SchemaMigrationInstructionModification_dropProperty {
  type: "dropProperty";
  dropProperty: DropPropertyMigration;
}

export interface SchemaMigrationInstructionModification_dropDatasource {
  type: "dropDatasource";
  dropDatasource: DropDatasourceMigration;
}

export interface SchemaMigrationInstructionModification_dropAllPatches {
  type: "dropAllPatches";
  dropAllPatches: DropAllPatchesMigration;
}

export interface SchemaMigrationInstructionModification_renameDatasource {
  type: "renameDatasource";
  renameDatasource: RenameDatasourceMigrationModification;
}

export interface SchemaMigrationInstructionModification_renameProperty {
  type: "renameProperty";
  renameProperty: RenamePropertyMigrationModification;
}

export interface SchemaMigrationInstructionModification_cast {
  type: "cast";
  cast: CastMigrationModification;
}

export interface SchemaMigrationInstructionModification_revert {
  type: "revert";
  revert: RevertMigration;
}

export interface SchemaMigrationInstructionModification_nonRevertible {
  type: "nonRevertible";
  nonRevertible: NonRevertibleMigrationModification;
}

export interface SchemaMigrationInstructionModification_updateEditsResolutionStrategy {
  type: "updateEditsResolutionStrategy";
  updateEditsResolutionStrategy:
    UpdateEditsResolutionStrategyMigrationModification;
}
/**
 * One out of potentially many instructions on how to transition from one version to another.
 */
export type SchemaMigrationInstructionModification =
  | SchemaMigrationInstructionModification_dropProperty
  | SchemaMigrationInstructionModification_dropDatasource
  | SchemaMigrationInstructionModification_dropAllPatches
  | SchemaMigrationInstructionModification_renameDatasource
  | SchemaMigrationInstructionModification_renameProperty
  | SchemaMigrationInstructionModification_cast
  | SchemaMigrationInstructionModification_revert
  | SchemaMigrationInstructionModification_nonRevertible
  | SchemaMigrationInstructionModification_updateEditsResolutionStrategy;
