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

import type {
  DatasourceIdentifier as _api_DatasourceIdentifier,
  DatasourceRid as _api_DatasourceRid,
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyIrType as _api_OntologyIrType,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
  SchemaMigrationRid as _api_SchemaMigrationRid,
  SchemaVersion as _api_SchemaVersion,
  StructFieldApiNameOrRid as _api_StructFieldApiNameOrRid,
  StructFieldRid as _api_StructFieldRid,
  StructPropertyFieldType as _api_StructPropertyFieldType,
  Type as _api_Type,
} from "../__components.js";

/**
 * An ID referencing a backup stored in Funnel.
 */
export type BackupId = string;

/**
 * Request to load schema migrations for the given ObjectTypeRid at the given OntologyVersion. Maximum 50
 * entries allowed.
 */
export interface BulkLoadObjectTypeSchemaMigrationsRequest {
  objectTypeRids: Array<VersionedObjectTypeRid>;
}
/**
 * Response to BulkLoadObjectTypeSchemaMigrationsRequest. Contains the transitions defined up to the
 * requested ontology version for each requested ObjectType.
 */
export interface BulkLoadObjectTypeSchemaMigrationsResponse {
  schemaTransitions: Array<ObjectTypeSchemaTransitions>;
}
/**
 * Migration to cast a property to another type.
 */
export interface CastMigration {
  property: _api_PropertyTypeRid;
  source: _api_Type;
  target: _api_Type;
}
/**
 * Migration to cast a property to another type.
 */
export interface CastMigrationModification {
  property: _api_PropertyTypeRid;
  target: _api_Type;
}
/**
 * Migration to cast a property to another type.
 */
export interface CastStructFieldMigration {
  property: _api_PropertyTypeRid;
  source: _api_StructPropertyFieldType;
  structField: _api_StructFieldRid;
  target: _api_StructPropertyFieldType;
}
/**
 * Migration to cast a property to another type.
 */
export interface CastStructFieldMigrationModification {
  property: _api_PropertyTypeRid;
  structField: _api_StructFieldRid;
  target: _api_StructPropertyFieldType;
}
/**
 * Delete existing transition from given source schema version.
 */
export interface DeleteTransitionModification {
  source: _api_SchemaVersion;
}
/**
 * Migration to drop all patches applied to the ObjectType.
 */
export interface DropAllPatchesMigration {
}
/**
 * Migration to drop the given datasource.
 */
export interface DropDatasourceMigration {
  datasource: _api_DatasourceRid;
}
/**
 * Migration to drop the given property.
 */
export interface DropPropertyMigration {
  property: _api_PropertyTypeRid;
}
/**
 * Migration to drop a struct field of a struct property
 */
export interface DropStructFieldMigration {
  property: _api_PropertyTypeRid;
  structField: _api_StructFieldRid;
}
/**
 * Update the edits resolution strategy of an object type from edits always win to latest timestamp.
 */
export interface EditsWinToLatestTimestamp {
  datasourceProperties: Array<_api_PropertyTypeRid>;
  datasourceRid: _api_DatasourceRid;
  timestampPropertyRid: _api_PropertyTypeRid;
  timestampValue: any;
}
export interface InitializationSource_backup {
  type: "backup";
  backup: PatchBackup;
}
/**
 * Metadata regarding the source of data that can be used to run a one time initialization of an ontology entity.
 */
export type InitializationSource = InitializationSource_backup;

/**
 * Migration that can be used to initialize an ontology entity with data that's stored in the initialization
 * source.
 */
export interface InitializePatchesMigration {
  datasourceRenames: Array<RenameDatasourceMigration>;
  initializationSource: InitializationSource;
  primaryKeyRenames: PrimaryKeyRenames;
  propertyRenames: Array<RenamePropertyMigration>;
}
/**
 * Migration that can be used to initialize an ontology entity with data that's stored in the initialization
 * source.
 */
export interface InitializePatchesMigrationModification {
  datasourceRenames: Array<RenameDatasourceMigrationModification>;
  initializationSource: InitializationSource;
  primaryKeyRenames: PrimaryKeyRenamesModification;
  propertyRenames: Array<RenamePropertyMigrationModification>;
}
/**
 * Type that represents the latest schema version
 */
export interface LatestSchemaVersion {
}
/**
 * Update the edits resolution strategy of an object type from latest timestamp to edits always win.
 */
export interface LatestTimestampToEditsWin {
  datasourceRid: _api_DatasourceRid;
  timestampPropertyRid: _api_PropertyTypeRid;
}
/**
 * Request to load schema migrations for the given ObjectTypeRid at the given OntologyVersion.
 */
export interface LoadObjectTypeSchemaMigrationsRequest {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
  pageToken?: LoadSchemaMigrationsPagingToken | null | undefined;
}
/**
 * Response to LoadObjectTypeSchemaMigrationsRequest. Contains the transitions defined up to the
 * requested ontology version.
 */
export interface LoadObjectTypeSchemaMigrationsResponse {
  migrationPageItems: Array<SchemaTransition>;
  nextPageToken?: LoadSchemaMigrationsPagingToken | null | undefined;
  schemaVersion: _api_SchemaVersion;
}
export type LoadSchemaMigrationsPagingToken = string;

/**
 * Instructions on how to transition from one schema version to the version that will be created.
 */
export interface NewVersionSchemaTransitionModification {
  migrations: Array<SchemaMigrationInstructionModification>;
  source: SourceSchemaVersion;
}
export interface NonRevertibleMigration_initializePatches {
  type: "initializePatches";
  initializePatches: InitializePatchesMigration;
}

export interface NonRevertibleMigration_permanentlyDeletePatches {
  type: "permanentlyDeletePatches";
  permanentlyDeletePatches: PermanentlyDeletePatchesMigration;
}
/**
 * Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
 */
export type NonRevertibleMigration =
  | NonRevertibleMigration_initializePatches
  | NonRevertibleMigration_permanentlyDeletePatches;

export interface NonRevertibleMigrationModification_initializePatches {
  type: "initializePatches";
  initializePatches: InitializePatchesMigrationModification;
}

export interface NonRevertibleMigrationModification_permanentlyDeletePatches {
  type: "permanentlyDeletePatches";
  permanentlyDeletePatches: PermanentlyDeletePatchesMigrationModification;
}
/**
 * Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
 */
export type NonRevertibleMigrationModification =
  | NonRevertibleMigrationModification_initializePatches
  | NonRevertibleMigrationModification_permanentlyDeletePatches;

export interface ObjectTypePrimaryKeyRename {
  rename: RenamePropertyMigration;
}
export interface ObjectTypePrimaryKeyRenameModification {
  rename: RenamePropertyMigrationModification;
}
/**
 * The transitions for a given ObjectType defined up to the requested ontology version.
 */
export interface ObjectTypeSchemaTransitions {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
  schemaTransitions: Array<SchemaTransition>;
  schemaVersion: _api_SchemaVersion;
}
/**
 * Migration to cast a property to another type.
 */
export interface OntologyIrCastMigration {
  property: _api_ObjectTypeFieldApiName;
  source: _api_OntologyIrType;
  target: _api_OntologyIrType;
}
/**
 * Migration to cast a property to another type.
 */
export interface OntologyIrCastStructFieldMigration {
  property: _api_ObjectTypeFieldApiName;
  source: _api_StructPropertyFieldType;
  structField: _api_StructFieldRid;
  target: _api_StructPropertyFieldType;
}
/**
 * Migration to drop the given property.
 */
export interface OntologyIrDropPropertyMigration {
  property: _api_ObjectTypeFieldApiName;
}
/**
 * Migration to drop a struct field of a struct property
 */
export interface OntologyIrDropStructFieldMigration {
  property: _api_ObjectTypeFieldApiName;
  structField: _api_StructFieldRid;
}
/**
 * Update the edits resolution strategy of an object type from edits always win to latest timestamp.
 */
export interface OntologyIrEditsWinToLatestTimestamp {
  datasourceProperties: Array<_api_ObjectTypeFieldApiName>;
  datasourceRid: _api_DatasourceRid;
  timestampPropertyRid: _api_ObjectTypeFieldApiName;
  timestampValue: any;
}
export interface OntologyIrInitializationSource_backup {
  type: "backup";
  backup: OntologyIrPatchBackup;
}
/**
 * Metadata regarding the source of data that can be used to run a one time initialization of an ontology entity.
 */
export type OntologyIrInitializationSource =
  OntologyIrInitializationSource_backup;

/**
 * Migration that can be used to initialize an ontology entity with data that's stored in the initialization
 * source.
 */
export interface OntologyIrInitializePatchesMigration {
  datasourceRenames: Array<RenameDatasourceMigration>;
  initializationSource: OntologyIrInitializationSource;
  primaryKeyRenames: OntologyIrPrimaryKeyRenames;
  propertyRenames: Array<OntologyIrRenamePropertyMigration>;
}
/**
 * Update the edits resolution strategy of an object type from latest timestamp to edits always win.
 */
export interface OntologyIrLatestTimestampToEditsWin {
  datasourceRid: _api_DatasourceRid;
  timestampPropertyRid: _api_ObjectTypeFieldApiName;
}
export interface OntologyIrNonRevertibleMigration_initializePatches {
  type: "initializePatches";
  initializePatches: OntologyIrInitializePatchesMigration;
}

export interface OntologyIrNonRevertibleMigration_permanentlyDeletePatches {
  type: "permanentlyDeletePatches";
  permanentlyDeletePatches: PermanentlyDeletePatchesMigration;
}
/**
 * Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
 */
export type OntologyIrNonRevertibleMigration =
  | OntologyIrNonRevertibleMigration_initializePatches
  | OntologyIrNonRevertibleMigration_permanentlyDeletePatches;

export interface OntologyIrObjectTypePrimaryKeyRename {
  rename: OntologyIrRenamePropertyMigration;
}
/**
 * Contains the information that can be used to restore patches that were deleted by mistake.
 */
export interface OntologyIrPatchBackup {
  backupId: BackupId;
  objectTypeRid: _api_ObjectTypeApiName;
  ontologyVersion: _api_OntologyVersion;
}
export interface OntologyIrPrimaryKeyRenames_objectType {
  type: "objectType";
  objectType: OntologyIrObjectTypePrimaryKeyRename;
}
export type OntologyIrPrimaryKeyRenames =
  OntologyIrPrimaryKeyRenames_objectType;

/**
 * Migration to rename one property to another.
 */
export interface OntologyIrRenamePropertyMigration {
  source: _api_ObjectTypeFieldApiName;
  target: _api_ObjectTypeFieldApiName;
}
/**
 * Migration to rename a struct property field to another.
 */
export interface OntologyIrRenameStructFieldMigration {
  property: _api_ObjectTypeFieldApiName;
  sourceStructField: _api_StructFieldRid;
  targetStructField: _api_StructFieldRid;
}
/**
 * A SchemaMigrationInstruction with a unique identifier.
 */
export interface OntologyIrSchemaMigration {
  instruction: OntologyIrSchemaMigrationInstruction;
  rid: _api_SchemaMigrationRid;
}
export interface OntologyIrSchemaMigrationInstruction_dropProperty {
  type: "dropProperty";
  dropProperty: OntologyIrDropPropertyMigration;
}

export interface OntologyIrSchemaMigrationInstruction_dropStructField {
  type: "dropStructField";
  dropStructField: OntologyIrDropStructFieldMigration;
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

export interface OntologyIrSchemaMigrationInstruction_renameStructField {
  type: "renameStructField";
  renameStructField: OntologyIrRenameStructFieldMigration;
}

export interface OntologyIrSchemaMigrationInstruction_cast {
  type: "cast";
  cast: OntologyIrCastMigration;
}

export interface OntologyIrSchemaMigrationInstruction_castStructField {
  type: "castStructField";
  castStructField: OntologyIrCastStructFieldMigration;
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
  | OntologyIrSchemaMigrationInstruction_dropStructField
  | OntologyIrSchemaMigrationInstruction_dropDatasource
  | OntologyIrSchemaMigrationInstruction_dropAllPatches
  | OntologyIrSchemaMigrationInstruction_renameDatasource
  | OntologyIrSchemaMigrationInstruction_renameProperty
  | OntologyIrSchemaMigrationInstruction_renameStructField
  | OntologyIrSchemaMigrationInstruction_cast
  | OntologyIrSchemaMigrationInstruction_castStructField
  | OntologyIrSchemaMigrationInstruction_revert
  | OntologyIrSchemaMigrationInstruction_nonRevertible
  | OntologyIrSchemaMigrationInstruction_updateEditsResolutionStrategy;

/**
 * Instructions on how to transition from one schema version to another.
 */
export interface OntologyIrSchemaTransition {
  migrations: Array<OntologyIrSchemaMigration>;
  source: _api_SchemaVersion;
  target: _api_SchemaVersion;
}
export interface OntologyIrUpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin {
  type: "latestTimestampToEditsWin";
  latestTimestampToEditsWin: OntologyIrLatestTimestampToEditsWin;
}

export interface OntologyIrUpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp {
  type: "editsWinToLatestTimestamp";
  editsWinToLatestTimestamp: OntologyIrEditsWinToLatestTimestamp;
}
/**
 * Migration to communicate to Funnel that the edits resolution strategy for an object type has changed. Funnel
 * will handle this accordingly by updating their internal patch structure.
 *
 * This migration is set internally and automatically by OMS and therefore should not be manually defined by
 * users.
 */
export type OntologyIrUpdateEditsResolutionStrategyMigration =
  | OntologyIrUpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin
  | OntologyIrUpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp;

/**
 * Instructions on how to transition from one schema version to another. Can be used to fix past
 * transitions.
 */
export interface PastVersionSchemaTransitionModification {
  migrations: Array<SchemaMigrationInstruction>;
  source: _api_SchemaVersion;
  target: _api_SchemaVersion;
}
/**
 * Contains the information that can be used to restore patches that were deleted by mistake.
 */
export interface PatchBackup {
  backupId: BackupId;
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
/**
 * A migration that will permanently delete patches applied on an object type. This is a required migration to be present if changing or modifying the primary key of an object type that has received edits.
 */
export interface PermanentlyDeletePatchesMigration {
}
/**
 * Migration that can be used to hard delete patches on an object type.
 */
export interface PermanentlyDeletePatchesMigrationModification {
}
export interface PrimaryKeyRenames_objectType {
  type: "objectType";
  objectType: ObjectTypePrimaryKeyRename;
}
export type PrimaryKeyRenames = PrimaryKeyRenames_objectType;

export interface PrimaryKeyRenamesModification_objectType {
  type: "objectType";
  objectType: ObjectTypePrimaryKeyRenameModification;
}
export type PrimaryKeyRenamesModification =
  PrimaryKeyRenamesModification_objectType;

/**
 * Migration to rename one datasource to another.
 */
export interface RenameDatasourceMigration {
  source: _api_DatasourceRid;
  target: _api_DatasourceRid;
}
/**
 * Migration to rename one datasource to another.
 */
export interface RenameDatasourceMigrationModification {
  source: _api_DatasourceRid;
  target: _api_DatasourceIdentifier;
}
/**
 * Migration to rename one property to another.
 */
export interface RenamePropertyMigration {
  source: _api_PropertyTypeRid;
  target: _api_PropertyTypeRid;
}
/**
 * Migration to rename one property to another.
 */
export interface RenamePropertyMigrationModification {
  source: _api_PropertyTypeRid;
  target: _api_PropertyTypeId;
}
/**
 * Migration to rename a struct property field to another.
 */
export interface RenameStructFieldMigration {
  property: _api_PropertyTypeRid;
  sourceStructField: _api_StructFieldRid;
  targetStructField: _api_StructFieldRid;
}
/**
 * Migration to rename struct property and its fields to another.
 */
export interface RenameStructFieldMigrationModification {
  property: _api_PropertyTypeRid;
  sourceStructField: _api_StructFieldRid;
  targetStructField: _api_StructFieldApiNameOrRid;
}
export interface ResetSchemaMigrationsAndDropEditParameters {
}
/**
 * Revert a previous migration.
 */
export interface RevertMigration {
  revert: _api_SchemaMigrationRid;
}
/**
 * A SchemaMigrationInstruction with a unique identifier.
 */
export interface SchemaMigration {
  instruction: SchemaMigrationInstruction;
  rid: _api_SchemaMigrationRid;
}
export interface SchemaMigrationInitialization {
  migrations: Array<SchemaMigrationInstructionInitialization>;
}
export interface SchemaMigrationInstruction_dropProperty {
  type: "dropProperty";
  dropProperty: DropPropertyMigration;
}

export interface SchemaMigrationInstruction_dropStructField {
  type: "dropStructField";
  dropStructField: DropStructFieldMigration;
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

export interface SchemaMigrationInstruction_renameStructField {
  type: "renameStructField";
  renameStructField: RenameStructFieldMigration;
}

export interface SchemaMigrationInstruction_cast {
  type: "cast";
  cast: CastMigration;
}

export interface SchemaMigrationInstruction_castStructField {
  type: "castStructField";
  castStructField: CastStructFieldMigration;
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
  | SchemaMigrationInstruction_dropStructField
  | SchemaMigrationInstruction_dropDatasource
  | SchemaMigrationInstruction_dropAllPatches
  | SchemaMigrationInstruction_renameDatasource
  | SchemaMigrationInstruction_renameProperty
  | SchemaMigrationInstruction_renameStructField
  | SchemaMigrationInstruction_cast
  | SchemaMigrationInstruction_castStructField
  | SchemaMigrationInstruction_revert
  | SchemaMigrationInstruction_nonRevertible
  | SchemaMigrationInstruction_updateEditsResolutionStrategy;

export interface SchemaMigrationInstructionInitialization_initializePatches {
  type: "initializePatches";
  initializePatches: InitializePatchesMigrationModification;
}
/**
 * Schema migration instruction that can be specified at the time of object types creation.
 */
export type SchemaMigrationInstructionInitialization =
  SchemaMigrationInstructionInitialization_initializePatches;

export interface SchemaMigrationInstructionModification_dropProperty {
  type: "dropProperty";
  dropProperty: DropPropertyMigration;
}

export interface SchemaMigrationInstructionModification_dropStructField {
  type: "dropStructField";
  dropStructField: DropStructFieldMigration;
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

export interface SchemaMigrationInstructionModification_renameStructField {
  type: "renameStructField";
  renameStructField: RenameStructFieldMigrationModification;
}

export interface SchemaMigrationInstructionModification_cast {
  type: "cast";
  cast: CastMigrationModification;
}

export interface SchemaMigrationInstructionModification_castStructField {
  type: "castStructField";
  castStructField: CastStructFieldMigrationModification;
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
  updateEditsResolutionStrategy: UpdateEditsResolutionStrategyMigration;
}
/**
 * One out of potentially many instructions on how to transition from one version to another.
 */
export type SchemaMigrationInstructionModification =
  | SchemaMigrationInstructionModification_dropProperty
  | SchemaMigrationInstructionModification_dropStructField
  | SchemaMigrationInstructionModification_dropDatasource
  | SchemaMigrationInstructionModification_dropAllPatches
  | SchemaMigrationInstructionModification_renameDatasource
  | SchemaMigrationInstructionModification_renameProperty
  | SchemaMigrationInstructionModification_renameStructField
  | SchemaMigrationInstructionModification_cast
  | SchemaMigrationInstructionModification_castStructField
  | SchemaMigrationInstructionModification_revert
  | SchemaMigrationInstructionModification_nonRevertible
  | SchemaMigrationInstructionModification_updateEditsResolutionStrategy;

export interface SchemaMigrationModification {
  transitions: Array<SchemaTransitionModification>;
}
/**
 * Instructions on how to transition from one schema version to another.
 */
export interface SchemaTransition {
  migrations: Array<SchemaMigration>;
  source: _api_SchemaVersion;
  target: _api_SchemaVersion;
}
export interface SchemaTransitionModification_newVersion {
  type: "newVersion";
  newVersion: NewVersionSchemaTransitionModification;
}

export interface SchemaTransitionModification_pastVersion {
  type: "pastVersion";
  pastVersion: PastVersionSchemaTransitionModification;
}

export interface SchemaTransitionModification_delete {
  type: "delete";
  delete: DeleteTransitionModification;
}
/**
 * Type to represent a schema transition modification. Either to delete or create a new SchemaTransition where
 * the target version is either the schema version that will be created as a result of the current modification,
 * or a past schema version.
 */
export type SchemaTransitionModification =
  | SchemaTransitionModification_newVersion
  | SchemaTransitionModification_pastVersion
  | SchemaTransitionModification_delete;

export interface SourceSchemaVersion_latestVersion {
  type: "latestVersion";
  latestVersion: LatestSchemaVersion;
}

export interface SourceSchemaVersion_specificVersion {
  type: "specificVersion";
  specificVersion: _api_SchemaVersion;
}
/**
 * Type to represent either a specific source schema version or the latest one
 */
export type SourceSchemaVersion =
  | SourceSchemaVersion_latestVersion
  | SourceSchemaVersion_specificVersion;

export interface UpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin {
  type: "latestTimestampToEditsWin";
  latestTimestampToEditsWin: LatestTimestampToEditsWin;
}

export interface UpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp {
  type: "editsWinToLatestTimestamp";
  editsWinToLatestTimestamp: EditsWinToLatestTimestamp;
}
/**
 * Migration to communicate to Funnel that the edits resolution strategy for an object type has changed. Funnel
 * will handle this accordingly by updating their internal patch structure.
 *
 * This migration is set internally and automatically by OMS and therefore should not be manually defined by
 * users.
 */
export type UpdateEditsResolutionStrategyMigration =
  | UpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin
  | UpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp;

/**
 * An ObjectTypeRid with an optional ontology version
 */
export interface VersionedObjectTypeRid {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
}
