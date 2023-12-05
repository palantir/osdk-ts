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

export * as OntologySchemaMigrationService from "./OntologySchemaMigrationService.mjs";

export type { BackupId } from "./BackupId.mjs";
export type { BulkLoadObjectTypeSchemaMigrationsRequest } from "./BulkLoadObjectTypeSchemaMigrationsRequest.mjs";
export type { BulkLoadObjectTypeSchemaMigrationsResponse } from "./BulkLoadObjectTypeSchemaMigrationsResponse.mjs";
export type { CastMigration } from "./CastMigration.mjs";
export type { CastMigrationModification } from "./CastMigrationModification.mjs";
export type { DeleteTransitionModification } from "./DeleteTransitionModification.mjs";
export type { DropAllPatchesMigration } from "./DropAllPatchesMigration.mjs";
export type { DropDatasourceMigration } from "./DropDatasourceMigration.mjs";
export type { DropPropertyMigration } from "./DropPropertyMigration.mjs";
export type { InitializationSource } from "./InitializationSource.mjs";
export type { InitializePatchesMigration } from "./InitializePatchesMigration.mjs";
export type { InitializePatchesMigrationModification } from "./InitializePatchesMigrationModification.mjs";
export type { LatestSchemaVersion } from "./LatestSchemaVersion.mjs";
export type { LatestTimestampToEditsWin } from "./LatestTimestampToEditsWin.mjs";
export type { LoadObjectTypeSchemaMigrationsRequest } from "./LoadObjectTypeSchemaMigrationsRequest.mjs";
export type { LoadObjectTypeSchemaMigrationsResponse } from "./LoadObjectTypeSchemaMigrationsResponse.mjs";
export type { LoadSchemaMigrationsPagingToken } from "./LoadSchemaMigrationsPagingToken.mjs";
export type { NewVersionSchemaTransitionModification } from "./NewVersionSchemaTransitionModification.mjs";
export type { NonRevertibleMigration } from "./NonRevertibleMigration.mjs";
export type { NonRevertibleMigrationModification } from "./NonRevertibleMigrationModification.mjs";
export type { ObjectTypePrimaryKeyRename } from "./ObjectTypePrimaryKeyRename.mjs";
export type { ObjectTypePrimaryKeyRenameModification } from "./ObjectTypePrimaryKeyRenameModification.mjs";
export type { ObjectTypeSchemaTransitions } from "./ObjectTypeSchemaTransitions.mjs";
export type { PastVersionSchemaTransitionModification } from "./PastVersionSchemaTransitionModification.mjs";
export type { PatchBackup } from "./PatchBackup.mjs";
export type { PrimaryKeyRenames } from "./PrimaryKeyRenames.mjs";
export type { PrimaryKeyRenamesModification } from "./PrimaryKeyRenamesModification.mjs";
export type { RenameDatasourceMigration } from "./RenameDatasourceMigration.mjs";
export type { RenameDatasourceMigrationModification } from "./RenameDatasourceMigrationModification.mjs";
export type { RenamePropertyMigration } from "./RenamePropertyMigration.mjs";
export type { RenamePropertyMigrationModification } from "./RenamePropertyMigrationModification.mjs";
export type { RevertMigration } from "./RevertMigration.mjs";
export type { SchemaMigration } from "./SchemaMigration.mjs";
export type { SchemaMigrationInitialization } from "./SchemaMigrationInitialization.mjs";
export type { SchemaMigrationInstruction } from "./SchemaMigrationInstruction.mjs";
export type { SchemaMigrationInstructionInitialization } from "./SchemaMigrationInstructionInitialization.mjs";
export type { SchemaMigrationInstructionModification } from "./SchemaMigrationInstructionModification.mjs";
export type { SchemaMigrationModification } from "./SchemaMigrationModification.mjs";
export type { SchemaTransition } from "./SchemaTransition.mjs";
export type { SchemaTransitionModification } from "./SchemaTransitionModification.mjs";
export type { SourceSchemaVersion } from "./SourceSchemaVersion.mjs";
export type { UpdateEditsResolutionStrategyMigration } from "./UpdateEditsResolutionStrategyMigration.mjs";
export type { UpdateEditsResolutionStrategyMigrationModification } from "./UpdateEditsResolutionStrategyMigrationModification.mjs";
export type { UpdateEditsResolutionStrategyMigrationType } from "./UpdateEditsResolutionStrategyMigrationType.mjs";
export type { VersionedObjectTypeRid } from "./VersionedObjectTypeRid.mjs";
