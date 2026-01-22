/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

export * as OntologySchemaMigrationService from "./OntologySchemaMigrationService.js";

export type {
  BackupId,
  BulkLoadObjectTypeSchemaMigrationsRequest,
  BulkLoadObjectTypeSchemaMigrationsResponse,
  CastMigration,
  CastMigrationModification,
  CastStructFieldMigration,
  CastStructFieldMigrationModification,
  DeleteTransitionModification,
  DropAllPatchesMigration,
  DropDatasourceMigration,
  DropPropertyMigration,
  DropStructFieldMigration,
  EditsWinToLatestTimestamp,
  InitializationSource,
  InitializePatchesMigration,
  InitializePatchesMigrationModification,
  LatestSchemaVersion,
  LatestTimestampToEditsWin,
  LoadObjectTypeSchemaMigrationsRequest,
  LoadObjectTypeSchemaMigrationsResponse,
  LoadSchemaMigrationsPagingToken,
  NewVersionSchemaTransitionModification,
  NonRevertibleMigration,
  NonRevertibleMigrationModification,
  ObjectTypePrimaryKeyRename,
  ObjectTypePrimaryKeyRenameModification,
  ObjectTypeSchemaTransitions,
  OntologyIrCastMigration,
  OntologyIrCastStructFieldMigration,
  OntologyIrDropPropertyMigration,
  OntologyIrDropStructFieldMigration,
  OntologyIrEditsWinToLatestTimestamp,
  OntologyIrInitializationSource,
  OntologyIrInitializePatchesMigration,
  OntologyIrLatestTimestampToEditsWin,
  OntologyIrNonRevertibleMigration,
  OntologyIrObjectTypePrimaryKeyRename,
  OntologyIrPatchBackup,
  OntologyIrPrimaryKeyRenames,
  OntologyIrRenamePropertyMigration,
  OntologyIrRenameStructFieldMigration,
  OntologyIrSchemaMigration,
  OntologyIrSchemaMigrationInstruction,
  OntologyIrSchemaTransition,
  OntologyIrUpdateEditsResolutionStrategyMigration,
  PastVersionSchemaTransitionModification,
  PatchBackup,
  PermanentlyDeletePatchesMigration,
  PermanentlyDeletePatchesMigrationModification,
  PrimaryKeyRenames,
  PrimaryKeyRenamesModification,
  RenameDatasourceMigration,
  RenameDatasourceMigrationModification,
  RenamePropertyMigration,
  RenamePropertyMigrationModification,
  RenameStructFieldMigration,
  RenameStructFieldMigrationModification,
  ResetSchemaMigrationsAndDropEditParameters,
  RevertMigration,
  SchemaMigration,
  SchemaMigrationInitialization,
  SchemaMigrationInstruction,
  SchemaMigrationInstructionInitialization,
  SchemaMigrationInstructionModification,
  SchemaMigrationModification,
  SchemaTransition,
  SchemaTransitionModification,
  SourceSchemaVersion,
  UpdateEditsResolutionStrategyMigration,
  VersionedObjectTypeRid,
} from "./__components.js";
