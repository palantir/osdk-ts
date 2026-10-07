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

import type { PropertyTypeRid as _api_PropertyTypeRid } from "../__components.js";
import type { Type as _api_Type } from "../__components.js";
import type { StructPropertyFieldType as _api_StructPropertyFieldType } from "../__components.js";
import type { StructFieldRid as _api_StructFieldRid } from "../__components.js";
import type { InterfaceTypeSchemaTransitionRid as _api_InterfaceTypeSchemaTransitionRid } from "../__components.js";
import type { SchemaVersion as _api_SchemaVersion } from "../__components.js";
import type { DatasourceRid as _api_DatasourceRid } from "../__components.js";
import type { InterfacePropertyTypeRid as _api_InterfacePropertyTypeRid } from "../__components.js";
import type { InterfacePropertyTypeRidOrIdInRequest as _api_InterfacePropertyTypeRidOrIdInRequest } from "../__components.js";
import type { InterfaceTypeRid as _api_InterfaceTypeRid } from "../__components.js";
import type { Attribution as _api_Attribution } from "../__components.js";
import type { ObjectTypeRid as _api_ObjectTypeRid } from "../__components.js";
import type { OntologyVersion as _api_OntologyVersion } from "../__components.js";
import type { ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName } from "../__components.js";
import type { OntologyIrType as _api_OntologyIrType } from "../__components.js";
import type { InterfacePropertyTypeApiName as _api_InterfacePropertyTypeApiName } from "../__components.js";
import type { ObjectTypeApiName as _api_ObjectTypeApiName } from "../__components.js";
import type { SchemaMigrationRid as _api_SchemaMigrationRid } from "../__components.js";
import type { DatasourceMigrationTarget as _api_DatasourceMigrationTarget } from "../__components.js";
import type { PropertyTypeId as _api_PropertyTypeId } from "../__components.js";
import type { StructFieldApiNameOrRid as _api_StructFieldApiNameOrRid } from "../__components.js";

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
export type ByteValue = number;

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
 * Aggregate compliance counts for an interface type schema migration transition.
 */
export interface ComplianceCounts {
  compliant: number;
  nonCompliant: number;
  unimplemented: number;
}
export interface ComplianceStatus_compliant {
  type: "compliant";
  compliant: ObjectTypeCompliantResult;
}

export interface ComplianceStatus_nonCompliant {
  type: "nonCompliant";
  nonCompliant: ObjectTypeNonCompliantResult;
}

export interface ComplianceStatus_unimplemented {
  type: "unimplemented";
  unimplemented: ObjectTypeUnimplementedResult;
}
/**
 * Compliance status of an object type with respect to an interface type schema migration.
 */
export type ComplianceStatus =
  | ComplianceStatus_compliant
  | ComplianceStatus_nonCompliant
  | ComplianceStatus_unimplemented;

/**
 * Creates an InterfaceType schema transition.
 */
export interface CreateInterfaceTypeSchemaTransitionModification {
  description?: string | null | undefined;
  gracePeriod: GracePeriod;
  id: InterfaceTypeSchemaTransitionId;
  migrations: Array<InterfaceTypeSchemaMigrationInstructionModification>;
  title?: string | null | undefined;
}
/**
 * An ISO-8601 date with no time component.
 */
export type DateValue = string;

/**
 * A decimal serialized as a string to avoid loss of precision.
 */
export type DecimalValue = string;

/**
 * Delete an existing InterfaceType schema transition by RID.
 */
export interface DeleteInterfaceTypeSchemaTransitionModification {
  rid: _api_InterfaceTypeSchemaTransitionRid;
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
export interface DropAllPatchesMigration {}
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
/**
 * The enforcement behavior applied to a non-compliant object type. Defaults to EXTEND_DEADLINE.
 */
export type EnforcementPolicy = "EXTEND_DEADLINE" | "AUTO_UNIMPLEMENT";

/**
 * Finalize an InterfaceType schema transition by RID after enforcement has completed.
 */
export interface FinalizeInterfaceTypeSchemaTransitionModification {
  rid: _api_InterfaceTypeSchemaTransitionRid;
}
export type FloatValue = number | "NaN" | "Infinity" | "-Infinity";

/**
 * A geohash or "latitude,longitude" value. Only WGS-84 coordinates are supported.
 */
export type GeohashValue = string;
export interface GracePeriod_daysAfterActivation {
  type: "daysAfterActivation";
  daysAfterActivation: number;
}

export interface GracePeriod_deadline {
  type: "deadline";
  deadline: string;
}
/**
 * Time period for an InterfaceTypeSchemaTransition - either dynamic at install time or a fixed date. Prefer daysAfterActivation to prevent instant failed installs through marketplace.
 */
export type GracePeriod =
  | GracePeriod_daysAfterActivation
  | GracePeriod_deadline;

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
 * Migration to add a required property to an interface
 */
export interface InterfaceTypeAddRequiredPropertyMigration {
  propertyTypeRid: _api_InterfacePropertyTypeRid;
}
/**
 * Migration to add a required property to an interface
 */
export interface InterfaceTypeAddRequiredPropertyMigrationModification {
  property: _api_InterfacePropertyTypeRidOrIdInRequest;
}
/**
 * Tracks the initial deadline and any extensions applied during enforcement.
 */
export interface InterfaceTypeSchemaMigrationDeadline {
  effective: string;
  extensions: Array<InterfaceTypeSchemaMigrationDeadlineExtension>;
  initial: string;
}
/**
 * Records a single deadline extension.
 */
export interface InterfaceTypeSchemaMigrationDeadlineExtension {
  newDeadline: string;
  reason: InterfaceTypeSchemaMigrationDeadlineExtensionReason;
}
export interface InterfaceTypeSchemaMigrationDeadlineExtensionReason_userRequested {
  type: "userRequested";
  userRequested: UserInputtedManualReason;
}

export interface InterfaceTypeSchemaMigrationDeadlineExtensionReason_nonCompliantObjectTypesFound {
  type: "nonCompliantObjectTypesFound";
  nonCompliantObjectTypesFound: NonCompliantObjectTypesFound;
}
/**
 * Manual or automatic explanation for a deadline extension
 */
export type InterfaceTypeSchemaMigrationDeadlineExtensionReason =
  | InterfaceTypeSchemaMigrationDeadlineExtensionReason_userRequested
  | InterfaceTypeSchemaMigrationDeadlineExtensionReason_nonCompliantObjectTypesFound;

/**
 * The transition is within its grace period and has not yet been enforced.
 */
export interface InterfaceTypeSchemaMigrationInGracePeriod {}
export interface InterfaceTypeSchemaMigrationInstruction_addRequiredProperty {
  type: "addRequiredProperty";
  addRequiredProperty: InterfaceTypeAddRequiredPropertyMigration;
}
/**
 * An instruction in an InterfaceType schema transition.
 */
export type InterfaceTypeSchemaMigrationInstruction =
  InterfaceTypeSchemaMigrationInstruction_addRequiredProperty;

export interface InterfaceTypeSchemaMigrationInstructionModification_addRequiredProperty {
  type: "addRequiredProperty";
  addRequiredProperty: InterfaceTypeAddRequiredPropertyMigrationModification;
}
/**
 * A modification instruction in an InterfaceType schema transition.
 */
export type InterfaceTypeSchemaMigrationInstructionModification =
  InterfaceTypeSchemaMigrationInstructionModification_addRequiredProperty;

export interface InterfaceTypeSchemaMigrationModification {
  transitions: Array<InterfaceTypeSchemaTransitionModification>;
}
/**
 * The status of a single interface type schema migration transition for an implementing object type.
 */
export interface InterfaceTypeSchemaMigrationObjectStatus {
  complianceStatus: ComplianceStatus;
  deadline: string;
  description?: string | null | undefined;
  directlyImplementedInterfacesInheritingMigration: Array<_api_InterfaceTypeRid>;
  id: InterfaceTypeSchemaTransitionId;
  migrations: Array<InterfaceTypeSchemaMigrationInstruction>;
  rid: _api_InterfaceTypeSchemaTransitionRid;
  title?: string | null | undefined;
}
/**
 * Migration statuses for a single interface type for an implementing object type.
 */
export interface InterfaceTypeSchemaMigrationObjectStatuses {
  statuses: Array<InterfaceTypeSchemaMigrationObjectStatus>;
}
/**
 * The status of a single interface type schema migration transition, including adoption information
 * across implementing object types.
 */
export interface InterfaceTypeSchemaMigrationStatus {
  attribution: _api_Attribution;
  counts: ComplianceCounts;
  deadline: InterfaceTypeSchemaMigrationDeadline;
  description?: string | null | undefined;
  id: InterfaceTypeSchemaTransitionId;
  rid: _api_InterfaceTypeSchemaTransitionRid;
  state: InterfaceTypeSchemaMigrationTransitionState;
  title?: string | null | undefined;
}
export interface InterfaceTypeSchemaMigrationTransitionState_inGracePeriod {
  type: "inGracePeriod";
  inGracePeriod: InterfaceTypeSchemaMigrationInGracePeriod;
}

export interface InterfaceTypeSchemaMigrationTransitionState_awaitingFinalization {
  type: "awaitingFinalization";
  awaitingFinalization: InterfaceTypeSchemaTransitionAwaitingFinalization;
}
/**
 * The current state of an interface type schema migration transition.
 */
export type InterfaceTypeSchemaMigrationTransitionState =
  | InterfaceTypeSchemaMigrationTransitionState_inGracePeriod
  | InterfaceTypeSchemaMigrationTransitionState_awaitingFinalization;

/**
 * A collection of instructions for migrating an InterfaceType schema.
 */
export interface InterfaceTypeSchemaTransition {
  description?: string | null | undefined;
  gracePeriod: GracePeriod;
  id: InterfaceTypeSchemaTransitionId;
  migrations: Array<InterfaceTypeSchemaMigrationInstruction>;
  rid: _api_InterfaceTypeSchemaTransitionRid;
  title?: string | null | undefined;
}
/**
 * Enforcement information retained while an interface type schema transition awaits finalization.
 */
export interface InterfaceTypeSchemaTransitionAwaitingFinalization {
  deadline: InterfaceTypeSchemaMigrationDeadline;
  enforcementCompletedAt: string;
  result: InterfaceTypeSchemaTransitionEnforcementResult;
}
/**
 * All implementing object types were compliant by the deadline.
 */
export interface InterfaceTypeSchemaTransitionEnforcementAllCompliant {}
/**
 * Enforcement was applied to non-compliant object types.
 */
export interface InterfaceTypeSchemaTransitionEnforcementEnforced {
  unimplemented: Array<_api_ObjectTypeRid>;
}
export interface InterfaceTypeSchemaTransitionEnforcementResult_allCompliant {
  type: "allCompliant";
  allCompliant: InterfaceTypeSchemaTransitionEnforcementAllCompliant;
}

export interface InterfaceTypeSchemaTransitionEnforcementResult_enforced {
  type: "enforced";
  enforced: InterfaceTypeSchemaTransitionEnforcementEnforced;
}
/**
 * The outcome of interface type schema migration enforcement.
 */
export type InterfaceTypeSchemaTransitionEnforcementResult =
  | InterfaceTypeSchemaTransitionEnforcementResult_allCompliant
  | InterfaceTypeSchemaTransitionEnforcementResult_enforced;

/**
 * A unique, immutable identifier for an Interface Type schema transition. Can be user defined.
 */
export type InterfaceTypeSchemaTransitionId = string;
export interface InterfaceTypeSchemaTransitionModification_create {
  type: "create";
  create: CreateInterfaceTypeSchemaTransitionModification;
}

export interface InterfaceTypeSchemaTransitionModification_delete {
  type: "delete";
  delete: DeleteInterfaceTypeSchemaTransitionModification;
}

export interface InterfaceTypeSchemaTransitionModification_finalize {
  type: "finalize";
  finalize: FinalizeInterfaceTypeSchemaTransitionModification;
}
/**
 * A modification that creates, deletes, or finalizes an InterfaceType schema transition.
 */
export type InterfaceTypeSchemaTransitionModification =
  | InterfaceTypeSchemaTransitionModification_create
  | InterfaceTypeSchemaTransitionModification_delete
  | InterfaceTypeSchemaTransitionModification_finalize;

/**
 * Type that represents the latest schema version
 */
export interface LatestSchemaVersion {}
/**
 * Update the edits resolution strategy of an object type from latest timestamp to edits always win.
 */
export interface LatestTimestampToEditsWin {
  datasourceRid: _api_DatasourceRid;
  timestampPropertyRid: _api_PropertyTypeRid;
}
export interface LiteralPropertyValue_array {
  type: "array";
  array: Array<LiteralPropertyValue>;
}

export interface LiteralPropertyValue_boolean {
  type: "boolean";
  boolean: boolean;
}

export interface LiteralPropertyValue_byte {
  type: "byte";
  byte: ByteValue;
}

export interface LiteralPropertyValue_date {
  type: "date";
  date: DateValue;
}

export interface LiteralPropertyValue_decimal {
  type: "decimal";
  decimal: DecimalValue;
}

export interface LiteralPropertyValue_double {
  type: "double";
  double: number | "NaN" | "Infinity" | "-Infinity";
}

export interface LiteralPropertyValue_float {
  type: "float";
  float: FloatValue;
}

export interface LiteralPropertyValue_geohash {
  type: "geohash";
  geohash: GeohashValue;
}

export interface LiteralPropertyValue_integer {
  type: "integer";
  integer: number;
}

export interface LiteralPropertyValue_long {
  type: "long";
  long: LongValue;
}

export interface LiteralPropertyValue_marking {
  type: "marking";
  marking: MarkingValue;
}

export interface LiteralPropertyValue_short {
  type: "short";
  short: ShortValue;
}

export interface LiteralPropertyValue_string {
  type: "string";
  string: string;
}

export interface LiteralPropertyValue_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}
/**
 * A property value stored in an object edit (patch), mirroring what Funnel will store.
 */
export type LiteralPropertyValue =
  | LiteralPropertyValue_array
  | LiteralPropertyValue_boolean
  | LiteralPropertyValue_byte
  | LiteralPropertyValue_date
  | LiteralPropertyValue_decimal
  | LiteralPropertyValue_double
  | LiteralPropertyValue_float
  | LiteralPropertyValue_geohash
  | LiteralPropertyValue_integer
  | LiteralPropertyValue_long
  | LiteralPropertyValue_marking
  | LiteralPropertyValue_short
  | LiteralPropertyValue_string
  | LiteralPropertyValue_timestamp;

/**
 * Page token for loadInterfaceTypeSchemaMigrationObjectTypeCompliance.
 */
export type LoadInterfaceTypeSchemaMigrationObjectTypeCompliancePagingToken =
  string;

/**
 * Request to load per-object-type compliance details for a specific interface type schema migration transition.
 */
export interface LoadInterfaceTypeSchemaMigrationObjectTypeComplianceRequest {
  interfaceTypeRid: _api_InterfaceTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
  pageToken?:
    | LoadInterfaceTypeSchemaMigrationObjectTypeCompliancePagingToken
    | null
    | undefined;
  transitionRid: _api_InterfaceTypeSchemaTransitionRid;
}
/**
 * Paged per-object-type compliance details for a specific transition.
 */
export interface LoadInterfaceTypeSchemaMigrationObjectTypeComplianceResponse {
  details: Record<_api_ObjectTypeRid, ObjectTypeCompliance>;
  nextPageToken?:
    | LoadInterfaceTypeSchemaMigrationObjectTypeCompliancePagingToken
    | null
    | undefined;
}
/**
 * Page token for loadInterfaceTypeSchemaMigrationStatusesByImplementingObjectType.
 */
export type LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypePagingToken =
  string;

/**
 * Request to load interface type schema migration statuses for a given implementing ObjectType.
 */
export interface LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeRequest {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
  pageToken?:
    | LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypePagingToken
    | null
    | undefined;
}
/**
 * Response containing interface type schema migration statuses grouped by interface type, for a given
 * implementing object type. Interface types the calling user does not have permission to view are excluded.
 * Paging is over interface types.
 */
export interface LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeResponse {
  nextPageToken?:
    | LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypePagingToken
    | null
    | undefined;
  statusesByInterfaceType: Record<
    _api_InterfaceTypeRid,
    InterfaceTypeSchemaMigrationObjectStatuses
  >;
}
/**
 * Request to load schema migration statuses for a given InterfaceType.
 */
export interface LoadInterfaceTypeSchemaMigrationStatusesRequest {
  interfaceTypeRid: _api_InterfaceTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
}
/**
 * Response containing interface type schema migration statuses, ordered from most recent to least recent.
 */
export interface LoadInterfaceTypeSchemaMigrationStatusesResponse {
  statuses: Array<InterfaceTypeSchemaMigrationStatus>;
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
 * A 64-bit integer encoded as a string to preserve the full long range without the precision loss
 * that a numeric JSON representation would incur.
 */
export type LongValue = string;

/**
 * A marking id. For mandatory markings this is the marking id; for CBAC markings it is the marking name.
 */
export type MarkingValue = string;

/**
 * Instructions on how to transition from one schema version to the version that will be created.
 */
export interface NewVersionSchemaTransitionModification {
  migrations: Array<SchemaMigrationInstructionModification>;
  source: SourceSchemaVersion;
}
/**
 * The interface has implementing object types that are not compliant with the schema migration.
 */
export interface NonCompliantObjectTypesFound {}
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

/**
 * Compliance status for an object type with respect to an interface type schema migration.
 */
export interface ObjectTypeCompliance {
  status: ComplianceStatus;
}
/**
 * The object type is compliant with the interface type schema migration.
 */
export interface ObjectTypeCompliantResult {}
/**
 * The object type is not compliant with the interface type schema migration.
 */
export interface ObjectTypeNonCompliantResult {
  enforcementPolicy: EnforcementPolicy;
}
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
 * The object type was unimplemented due to non-compliance with the interface type schema migration.
 */
export interface ObjectTypeUnimplementedResult {}
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
 * Migration to add a required property to an interface
 */
export interface OntologyIrInterfaceTypeAddRequiredPropertyMigration {
  propertyTypeRid: _api_InterfacePropertyTypeApiName;
}
export interface OntologyIrInterfaceTypeSchemaMigrationInstruction_addRequiredProperty {
  type: "addRequiredProperty";
  addRequiredProperty: OntologyIrInterfaceTypeAddRequiredPropertyMigration;
}
/**
 * An instruction in an InterfaceType schema transition.
 */
export type OntologyIrInterfaceTypeSchemaMigrationInstruction =
  OntologyIrInterfaceTypeSchemaMigrationInstruction_addRequiredProperty;

/**
 * A collection of instructions for migrating an InterfaceType schema.
 */
export interface OntologyIrInterfaceTypeSchemaTransition {
  description?: string | null | undefined;
  gracePeriod: GracePeriod;
  id: InterfaceTypeSchemaTransitionId;
  migrations: Array<OntologyIrInterfaceTypeSchemaMigrationInstruction>;
  title?: string | null | undefined;
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
 * A SchemaMigrationInstruction for ObjectTypes with a unique identifier.
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
  updateEditsResolutionStrategy: OntologyIrUpdateEditsResolutionStrategyMigration;
}

export interface OntologyIrSchemaMigrationInstruction_setPropertyValueIfUnset {
  type: "setPropertyValueIfUnset";
  setPropertyValueIfUnset: OntologyIrSetPropertyValueIfUnsetMigration;
}
/**
 * One out of potentially many instructions on how to transition from one ObjectType version to another.
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
  | OntologyIrSchemaMigrationInstruction_updateEditsResolutionStrategy
  | OntologyIrSchemaMigrationInstruction_setPropertyValueIfUnset;

/**
 * Instructions on how to transition from one ObjectType schema version to another.
 */
export interface OntologyIrSchemaTransition {
  migrations: Array<OntologyIrSchemaMigration>;
  source: _api_SchemaVersion;
  target: _api_SchemaVersion;
}
/**
 * Backfills `value` into historical edits where `property` is implicitly NULL (unset/cleared in a
 * create-object-like patch). An explicit NULL or non-null value is never overwritten.
 */
export interface OntologyIrSetPropertyValueIfUnsetMigration {
  datasource: _api_DatasourceRid;
  property: _api_ObjectTypeFieldApiName;
  value: PropertyValue;
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

export interface PastVersionSchemaMigrationInstructionModification_dropProperty {
  type: "dropProperty";
  dropProperty: DropPropertyMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_dropStructField {
  type: "dropStructField";
  dropStructField: DropStructFieldMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_dropDatasource {
  type: "dropDatasource";
  dropDatasource: DropDatasourceMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_dropAllPatches {
  type: "dropAllPatches";
  dropAllPatches: DropAllPatchesMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_renameDatasource {
  type: "renameDatasource";
  renameDatasource: RenameDatasourceMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_renameProperty {
  type: "renameProperty";
  renameProperty: RenamePropertyMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_renameStructField {
  type: "renameStructField";
  renameStructField: RenameStructFieldMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_cast {
  type: "cast";
  cast: CastMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_castStructField {
  type: "castStructField";
  castStructField: CastStructFieldMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_revert {
  type: "revert";
  revert: RevertMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_nonRevertible {
  type: "nonRevertible";
  nonRevertible: NonRevertibleMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_updateEditsResolutionStrategy {
  type: "updateEditsResolutionStrategy";
  updateEditsResolutionStrategy: UpdateEditsResolutionStrategyMigration;
}

export interface PastVersionSchemaMigrationInstructionModification_setPropertyValueIfUnset {
  type: "setPropertyValueIfUnset";
  setPropertyValueIfUnset: PastVersionSetPropertyValueIfUnsetMigrationModification;
}
/**
 * One out of potentially many instructions on how to fix a past transition.
 */
export type PastVersionSchemaMigrationInstructionModification =
  | PastVersionSchemaMigrationInstructionModification_dropProperty
  | PastVersionSchemaMigrationInstructionModification_dropStructField
  | PastVersionSchemaMigrationInstructionModification_dropDatasource
  | PastVersionSchemaMigrationInstructionModification_dropAllPatches
  | PastVersionSchemaMigrationInstructionModification_renameDatasource
  | PastVersionSchemaMigrationInstructionModification_renameProperty
  | PastVersionSchemaMigrationInstructionModification_renameStructField
  | PastVersionSchemaMigrationInstructionModification_cast
  | PastVersionSchemaMigrationInstructionModification_castStructField
  | PastVersionSchemaMigrationInstructionModification_revert
  | PastVersionSchemaMigrationInstructionModification_nonRevertible
  | PastVersionSchemaMigrationInstructionModification_updateEditsResolutionStrategy
  | PastVersionSchemaMigrationInstructionModification_setPropertyValueIfUnset;

/**
 * Instructions on how to transition from one schema version to another. Can be used to fix past
 * transitions.
 */
export interface PastVersionSchemaTransitionModification {
  migrations: Array<PastVersionSchemaMigrationInstructionModification>;
  source: _api_SchemaVersion;
  target: _api_SchemaVersion;
}
/**
 * Backfills `value` into historical edits where `property` is implicitly NULL (unset/cleared in a
 * create-object-like patch). An explicit NULL or non-null value is never overwritten.
 */
export interface PastVersionSetPropertyValueIfUnsetMigrationModification {
  datasource: _api_DatasourceRid;
  property: _api_PropertyTypeRid;
  value: LiteralPropertyValue;
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
export interface PermanentlyDeletePatchesMigration {}
/**
 * Migration that can be used to hard delete patches on an object type.
 */
export interface PermanentlyDeletePatchesMigrationModification {}
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

export interface PropertyValue_literal {
  type: "literal";
  literal: LiteralPropertyValue;
}

export interface PropertyValue_redacted {
  type: "redacted";
  redacted: RedactedPropertyValue;
}
export type PropertyValue = PropertyValue_literal | PropertyValue_redacted;

/**
 * Sentinel indicating the value is hidden because the caller lacks permissions to see/modify it.
 */
export interface RedactedPropertyValue {}
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
  target: _api_DatasourceMigrationTarget;
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
export interface ResetSchemaMigrationsAndDropEditParameters {}
/**
 * Revert a previous migration.
 */
export interface RevertMigration {
  revert: _api_SchemaMigrationRid;
}
/**
 * A SchemaMigrationInstruction for ObjectTypes with a unique identifier.
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

export interface SchemaMigrationInstruction_setPropertyValueIfUnset {
  type: "setPropertyValueIfUnset";
  setPropertyValueIfUnset: SetPropertyValueIfUnsetMigration;
}
/**
 * One out of potentially many instructions on how to transition from one ObjectType version to another.
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
  | SchemaMigrationInstruction_updateEditsResolutionStrategy
  | SchemaMigrationInstruction_setPropertyValueIfUnset;

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

export interface SchemaMigrationInstructionModification_setPropertyValueIfUnset {
  type: "setPropertyValueIfUnset";
  setPropertyValueIfUnset: SetPropertyValueIfUnsetMigrationModification;
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
  | SchemaMigrationInstructionModification_updateEditsResolutionStrategy
  | SchemaMigrationInstructionModification_setPropertyValueIfUnset;

export interface SchemaMigrationModification {
  transitions: Array<SchemaTransitionModification>;
}
/**
 * Instructions on how to transition from one ObjectType schema version to another.
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

/**
 * Backfills `value` into historical edits where `property` is implicitly NULL (unset/cleared in a
 * create-object-like patch). An explicit NULL or non-null value is never overwritten.
 */
export interface SetPropertyValueIfUnsetMigration {
  datasource: _api_DatasourceRid;
  property: _api_PropertyTypeRid;
  value: PropertyValue;
}
/**
 * Backfills `value` into historical edits where `property` is implicitly NULL (unset/cleared in a
 * create-object-like patch). An explicit NULL or non-null value is never overwritten.
 */
export interface SetPropertyValueIfUnsetMigrationModification {
  property: _api_PropertyTypeId;
  value: LiteralPropertyValue;
}
export type ShortValue = number;
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

export type TimestampValue = string;
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
 * Manual user inputted reason
 */
export interface UserInputtedManualReason {
  input: string;
}
/**
 * An ObjectTypeRid with an optional ontology version
 */
export interface VersionedObjectTypeRid {
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
}
