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

export * as OntologySchemaMigrationService from "./OntologySchemaMigrationService.js";

export type { BackupId } from "./BackupId.js";
export type { BulkLoadObjectTypeSchemaMigrationsRequest } from "./BulkLoadObjectTypeSchemaMigrationsRequest.js";
export type { BulkLoadObjectTypeSchemaMigrationsResponse } from "./BulkLoadObjectTypeSchemaMigrationsResponse.js";
export type { CastMigration } from "./CastMigration.js";
export type { CastMigrationModification } from "./CastMigrationModification.js";
export type { DeleteTransitionModification } from "./DeleteTransitionModification.js";
export type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
export type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
export type { DropPropertyMigration } from "./DropPropertyMigration.js";
export type { InitializationSource } from "./InitializationSource.js";
export type { InitializePatchesMigration } from "./InitializePatchesMigration.js";
export type { InitializePatchesMigrationModification } from "./InitializePatchesMigrationModification.js";
export type { LatestSchemaVersion } from "./LatestSchemaVersion.js";
export type { LatestTimestampToEditsWin } from "./LatestTimestampToEditsWin.js";
export type { LoadObjectTypeSchemaMigrationsRequest } from "./LoadObjectTypeSchemaMigrationsRequest.js";
export type { LoadObjectTypeSchemaMigrationsResponse } from "./LoadObjectTypeSchemaMigrationsResponse.js";
export type { LoadSchemaMigrationsPagingToken } from "./LoadSchemaMigrationsPagingToken.js";
export type { NewVersionSchemaTransitionModification } from "./NewVersionSchemaTransitionModification.js";
export type { NonRevertibleMigration } from "./NonRevertibleMigration.js";
export type { NonRevertibleMigrationModification } from "./NonRevertibleMigrationModification.js";
export type { ObjectTypePrimaryKeyRename } from "./ObjectTypePrimaryKeyRename.js";
export type { ObjectTypePrimaryKeyRenameModification } from "./ObjectTypePrimaryKeyRenameModification.js";
export type { ObjectTypeSchemaTransitions } from "./ObjectTypeSchemaTransitions.js";
export type { PastVersionSchemaTransitionModification } from "./PastVersionSchemaTransitionModification.js";
export type { PatchBackup } from "./PatchBackup.js";
export type { PrimaryKeyRenames } from "./PrimaryKeyRenames.js";
export type { PrimaryKeyRenamesModification } from "./PrimaryKeyRenamesModification.js";
export type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
export type { RenameDatasourceMigrationModification } from "./RenameDatasourceMigrationModification.js";
export type { RenamePropertyMigration } from "./RenamePropertyMigration.js";
export type { RenamePropertyMigrationModification } from "./RenamePropertyMigrationModification.js";
export type { RevertMigration } from "./RevertMigration.js";
export type { SchemaMigration } from "./SchemaMigration.js";
export type { SchemaMigrationInitialization } from "./SchemaMigrationInitialization.js";
export type { SchemaMigrationInstruction } from "./SchemaMigrationInstruction.js";
export type { SchemaMigrationInstructionInitialization } from "./SchemaMigrationInstructionInitialization.js";
export type { SchemaMigrationInstructionModification } from "./SchemaMigrationInstructionModification.js";
export type { SchemaMigrationModification } from "./SchemaMigrationModification.js";
export type { SchemaTransition } from "./SchemaTransition.js";
export type { SchemaTransitionModification } from "./SchemaTransitionModification.js";
export type { SourceSchemaVersion } from "./SourceSchemaVersion.js";
export type { UpdateEditsResolutionStrategyMigration } from "./UpdateEditsResolutionStrategyMigration.js";
export type { UpdateEditsResolutionStrategyMigrationModification } from "./UpdateEditsResolutionStrategyMigrationModification.js";
export type { UpdateEditsResolutionStrategyMigrationType } from "./UpdateEditsResolutionStrategyMigrationType.js";
export type { VersionedObjectTypeRid } from "./VersionedObjectTypeRid.js";
