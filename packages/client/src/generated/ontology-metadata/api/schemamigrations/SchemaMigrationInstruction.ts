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

import type { CastMigration } from "./CastMigration.js";
import type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
import type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
import type { DropPropertyMigration } from "./DropPropertyMigration.js";
import type { NonRevertibleMigration } from "./NonRevertibleMigration.js";
import type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
import type { RenamePropertyMigration } from "./RenamePropertyMigration.js";
import type { RevertMigration } from "./RevertMigration.js";
import type { UpdateEditsResolutionStrategyMigration } from "./UpdateEditsResolutionStrategyMigration.js";
export interface SchemaMigrationInstruction_dropProperty {
  type: "dropProperty";
  dropProperty: DropPropertyMigration;
}

export interface SchemaMigrationInstruction_dropDatasource {
  type: "dropDatasource";
  dropDatasource: DropDatasourceMigration;
}

export interface SchemaMigrationInstruction_dropAllPatches {
  type: "dropAllPatches";
  dropAllPatches: DropAllPatchesMigration;
}

export interface SchemaMigrationInstruction_renameDatasource {
  type: "renameDatasource";
  renameDatasource: RenameDatasourceMigration;
}

export interface SchemaMigrationInstruction_renameProperty {
  type: "renameProperty";
  renameProperty: RenamePropertyMigration;
}

export interface SchemaMigrationInstruction_cast {
  type: "cast";
  cast: CastMigration;
}

export interface SchemaMigrationInstruction_revert {
  type: "revert";
  revert: RevertMigration;
}

export interface SchemaMigrationInstruction_nonRevertible {
  type: "nonRevertible";
  nonRevertible: NonRevertibleMigration;
}

export interface SchemaMigrationInstruction_updateEditsResolutionStrategy {
  type: "updateEditsResolutionStrategy";
  updateEditsResolutionStrategy: UpdateEditsResolutionStrategyMigration;
}
/**
 * One out of potentially many instructions on how to transition from one version to another.
 */
export type SchemaMigrationInstruction =
  | SchemaMigrationInstruction_dropProperty
  | SchemaMigrationInstruction_dropDatasource
  | SchemaMigrationInstruction_dropAllPatches
  | SchemaMigrationInstruction_renameDatasource
  | SchemaMigrationInstruction_renameProperty
  | SchemaMigrationInstruction_cast
  | SchemaMigrationInstruction_revert
  | SchemaMigrationInstruction_nonRevertible
  | SchemaMigrationInstruction_updateEditsResolutionStrategy;
