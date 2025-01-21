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

import type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
import type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
import type { OntologyIrCastMigration } from "./OntologyIrCastMigration.js";
import type { OntologyIrDropPropertyMigration } from "./OntologyIrDropPropertyMigration.js";
import type { OntologyIrNonRevertibleMigration } from "./OntologyIrNonRevertibleMigration.js";
import type { OntologyIrRenamePropertyMigration } from "./OntologyIrRenamePropertyMigration.js";
import type { OntologyIrUpdateEditsResolutionStrategyMigration } from "./OntologyIrUpdateEditsResolutionStrategyMigration.js";
import type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
import type { RevertMigration } from "./RevertMigration.js";
export interface OntologyIrSchemaMigrationInstruction_dropProperty {
  type: "dropProperty";
  dropProperty: OntologyIrDropPropertyMigration;
}

export interface OntologyIrSchemaMigrationInstruction_dropDatasource {
  type: "dropDatasource";
  dropDatasource: DropDatasourceMigration;
}

export interface OntologyIrSchemaMigrationInstruction_dropAllPatches {
  type: "dropAllPatches";
  dropAllPatches: DropAllPatchesMigration;
}

export interface OntologyIrSchemaMigrationInstruction_renameDatasource {
  type: "renameDatasource";
  renameDatasource: RenameDatasourceMigration;
}

export interface OntologyIrSchemaMigrationInstruction_renameProperty {
  type: "renameProperty";
  renameProperty: OntologyIrRenamePropertyMigration;
}

export interface OntologyIrSchemaMigrationInstruction_cast {
  type: "cast";
  cast: OntologyIrCastMigration;
}

export interface OntologyIrSchemaMigrationInstruction_revert {
  type: "revert";
  revert: RevertMigration;
}

export interface OntologyIrSchemaMigrationInstruction_nonRevertible {
  type: "nonRevertible";
  nonRevertible: OntologyIrNonRevertibleMigration;
}

export interface OntologyIrSchemaMigrationInstruction_updateEditsResolutionStrategy {
  type: "updateEditsResolutionStrategy";
  updateEditsResolutionStrategy:
    OntologyIrUpdateEditsResolutionStrategyMigration;
}
/**
 * One out of potentially many instructions on how to transition from one version to another.
 */
export type OntologyIrSchemaMigrationInstruction =
  | OntologyIrSchemaMigrationInstruction_dropProperty
  | OntologyIrSchemaMigrationInstruction_dropDatasource
  | OntologyIrSchemaMigrationInstruction_dropAllPatches
  | OntologyIrSchemaMigrationInstruction_renameDatasource
  | OntologyIrSchemaMigrationInstruction_renameProperty
  | OntologyIrSchemaMigrationInstruction_cast
  | OntologyIrSchemaMigrationInstruction_revert
  | OntologyIrSchemaMigrationInstruction_nonRevertible
  | OntologyIrSchemaMigrationInstruction_updateEditsResolutionStrategy;
