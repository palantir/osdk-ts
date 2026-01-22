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
  DatasourceRid as _api_DatasourceRid,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectDbRid as _api_ObjectDbRid,
  ObjectDbSyncRid as _api_ObjectDbSyncRid,
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeRid as _api_PropertyTypeRid,
} from "../__components.js";
import type { ObjectTypeGothamMapping as _api_typemapping_ObjectTypeGothamMapping } from "../typemapping/__components.js";
import type { EntityProvenance as _api_entitymetadata_provenance_EntityProvenance } from "./provenance/__components.js";

/**
 * Action Log is not required for this ObjectType.
 */
export interface ActionLogNotRequired {
}
/**
 * Action Log is required for this ObjectType.
 */
export interface ActionLogRequiredForObjectType {
}
/**
 * Types of Action Log requiredness. Currently logging is either required or not but in future other kinds of
 * requiredness, such as property-level logging requiredness, may be introduced.
 */
export interface ActionLogRequirednessMetadata {
  actionLogRequirednessSetting: ActionLogRequirednessSetting;
  lastUpdated: string;
}
export interface ActionLogRequirednessSetting_actionLogNotRequired {
  type: "actionLogNotRequired";
  actionLogNotRequired: ActionLogNotRequired;
}

export interface ActionLogRequirednessSetting_actionLogRequiredForObjectType {
  type: "actionLogRequiredForObjectType";
  actionLogRequiredForObjectType: ActionLogRequiredForObjectType;
}
/**
 * Types of Action Log requiredness. Currently logging is either required or not but in future other kinds of
 * requiredness may be introduced.
 */
export type ActionLogRequirednessSetting =
  | ActionLogRequirednessSetting_actionLogNotRequired
  | ActionLogRequirednessSetting_actionLogRequiredForObjectType;

export type ActiveStorageBackend = "V1" | "V2";
export type Alias = string;

/**
 * Indicates the that given object type is archived.
 */
export interface ArchivedState {
}
export interface ArchiveState_archivedState {
  type: "archivedState";
  archivedState: ArchivedState;
}

export interface ArchiveState_pendingRestorationState {
  type: "pendingRestorationState";
  pendingRestorationState: RestorationState;
}
/**
 * Archive state for an OSv2 object type. It can be either Archived, or PendingRestoration. Archived means the
 * object type is archived and cannot be queried by OSS or modified by actions. PendingRestoration means that
 * restoration of the object type was requested, and Funnel is currently in the process of restoring it.
 * In the future, can have different archival modes, such as "light" archiving, where we deindex from Highbury,
 * but keep the pipelines active.
 */
export type ArchiveState =
  | ArchiveState_archivedState
  | ArchiveState_pendingRestorationState;

/**
 * Delegates the selected transform profile to Funnel.
 */
export interface AutomaticTransformProfile {
}
export type CombinedModificationType = "CREATED" | "UPDATED" | "DELETED";

/**
 * A history item corresponding to a modification of the Ontology or SystemEntityMetadata.
 * Contains a list of all ObjectTypes and LinkTypes affected by the modification.
 */
export interface CombinedOntologyHistoryPageItem {
  ontologyVersion: _api_OntologyVersion;
  summary: CombinedOntologyHistoryPageItemSummary;
}
/**
 * Summary of ObjectTypes and LinkTypes affected by the modification.
 * ObjectTypes and LinkTypes will be listed if one or more of the following applies:
 * - The ObjectType/LinkType was created, updated or deleted
 * - The associated ObjectTypeEntityMetadata/LinkTypeEntityMetadata was updated
 * - The associated ObjectTypeSystemEntityMetadata/LinkTypeSystemEntityMetadata was updated.
 */
export interface CombinedOntologyHistoryPageItemSummary {
  affectedLinkTypes: Record<_api_LinkTypeRid, CombinedModificationType>;
  affectedObjectTypes: Record<_api_ObjectTypeRid, CombinedModificationType>;
}
/**
 * A paging token to be passed back to get the next page of results. Clients shouldn't make any assumptions
 * about the content of the paging token and it should not be parsed/modified.
 */
export type CombinedOntologyHistoryPageToken = string;

/**
 * With this strategy, whether a datasource is alive for a given object is evaluated on a
 * datasource-by-datasource basis. This can have unintuitive consequences if properties are moved between
 * different datasources, as the MarkAlive instructions within the patch will not be adjusted to reflect the new
 * datasources containing the edited properties. In such cases, if the new datasource were not otherwise marked
 * as alive, the values of the migrated properties would become nulls.
 */
export interface DatasourceScopedLivenessStrategy {
}
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export interface DayTime {
  day: DayOfWeek;
  time: string;
  zoneId: string;
}
export interface EditsHistory_config {
  type: "config";
  config: EditsHistoryConfig;
}

export interface EditsHistory_none {
  type: "none";
  none: NoEditsHistory;
}
export type EditsHistory = EditsHistory_config | EditsHistory_none;

/**
 * Edits history tracking is enabled for this entity with the specified configuration. All action edits
 * for objects of this object type will be available for querying from the point the history was enabled.
 */
export interface EditsHistoryConfig {
  store: _api_ObjectTypeRid;
  storeAllPreviousProperties?: boolean | null | undefined;
}
/**
 * Contains configuration to import edits history from Phonograph to Funnel/Highbury.
 */
export interface EditsHistoryImportConfiguration {
}
/**
 * Wrapper for multiple strategies as objects can have multiple datasources.
 */
export interface EditsResolutionStrategies {
  strategies: Record<_api_DatasourceRid, EditsResolutionStrategy>;
}
export interface EditsResolutionStrategy_timestampProperty {
  type: "timestampProperty";
  timestampProperty: TimestampPropertyStrategy;
}
/**
 * The strategy used when resolving conflicts between user edits and datasource values.
 */
export type EditsResolutionStrategy = EditsResolutionStrategy_timestampProperty;

/**
 * Contains ObjectDb configurations for a particular ObjectType or LinkType.
 */
export interface EntityConfig {
  objectDbTypeConfigs: Record<ObjectDbType, ObjectDbTypeConfig>;
}
/**
 * Contains the information when the migration was aborted.
 */
export interface EntityMigrationAborted {
  migrationStage: EntityMigrationStage;
  time: string;
}
export interface EntityMigrationCategory_objectStorageV1 {
  type: "objectStorageV1";
  objectStorageV1: ObjectStorageV1;
}

export interface EntityMigrationCategory_readOnlyV1V2 {
  type: "readOnlyV1V2";
  readOnlyV1V2: ReadOnlyV1V2;
}
/**
 * Migration category depending on the previous targetStorageBackend setting.
 */
export type EntityMigrationCategory =
  | EntityMigrationCategory_objectStorageV1
  | EntityMigrationCategory_readOnlyV1V2;

/**
 * Contains the reason why the migration failed and at which stage.
 */
export interface EntityMigrationFailed {
  migrationStage: EntityMigrationStage;
  reason: string;
  time: string;
}
/**
 * Contains the information for a finished migration.
 */
export interface EntityMigrationFinished {
  endTime: string;
  hadPhonoRegistration: boolean;
  pulledEditsCount: string;
  startingState: EntityMigrationCategory;
  startTime: string;
}
/**
 * Contains the information for a running migration.
 */
export interface EntityMigrationInProgress {
  atOntologyVersion: _api_OntologyVersion;
  migrationStage: EntityMigrationStage;
  migrationType: EntityMigrationCategory;
  nextTransitionWindow?: TimeWindow | null | undefined;
  numberOfEdits?: number | null | undefined;
  readFrom: ActiveStorageBackend;
  soakPeriod?: SoakPeriodInformation | null | undefined;
  startedAt: string;
  timestampOfTheFirstSuccessfulSync?: string | null | undefined;
  writeTo?: ActiveStorageBackend | null | undefined;
}
/**
 * Empty type used as a placeholder for ontology entities which were never migrated.
 */
export interface EntityMigrationNotAttempted {
}
/**
 * Current stage the entity migration is in.
 */
export interface EntityMigrationStage {
  name: string;
  percentage: number;
}
export interface EntityMigrationStatus_migrationNotAttempted {
  type: "migrationNotAttempted";
  migrationNotAttempted: EntityMigrationNotAttempted;
}

export interface EntityMigrationStatus_migrationFailed {
  type: "migrationFailed";
  migrationFailed: EntityMigrationFailed;
}

export interface EntityMigrationStatus_migrationAborted {
  type: "migrationAborted";
  migrationAborted: EntityMigrationAborted;
}

export interface EntityMigrationStatus_migrationInProgress {
  type: "migrationInProgress";
  migrationInProgress: EntityMigrationInProgress;
}

export interface EntityMigrationStatus_migrationFinished {
  type: "migrationFinished";
  migrationFinished: EntityMigrationFinished;
}
/**
 * Contains the current migration status populated by Funnel.
 */
export type EntityMigrationStatus =
  | EntityMigrationStatus_migrationNotAttempted
  | EntityMigrationStatus_migrationFailed
  | EntityMigrationStatus_migrationAborted
  | EntityMigrationStatus_migrationInProgress
  | EntityMigrationStatus_migrationFinished;

export interface EntityMigrationStatusModification_migrationFailed {
  type: "migrationFailed";
  migrationFailed: EntityMigrationFailed;
}

export interface EntityMigrationStatusModification_migrationAborted {
  type: "migrationAborted";
  migrationAborted: EntityMigrationAborted;
}

export interface EntityMigrationStatusModification_migrationInProgress {
  type: "migrationInProgress";
  migrationInProgress: EntityMigrationInProgress;
}

export interface EntityMigrationStatusModification_migrationFinished {
  type: "migrationFinished";
  migrationFinished: EntityMigrationFinished;
}
/**
 * Contains the migration status for the Object Storage V1 to Object Storage V2 migration for an ontology entity.
 * The migration status will be stored by Funnel and can be read by consumers to retrieve information about the
 * status of the migration for this entity.
 */
export type EntityMigrationStatusModification =
  | EntityMigrationStatusModification_migrationFailed
  | EntityMigrationStatusModification_migrationAborted
  | EntityMigrationStatusModification_migrationInProgress
  | EntityMigrationStatusModification_migrationFinished;

/**
 * Funnel jobs for this object types will be run with the largest possible transform profile. Note that this
 * value is designed as a break-the-glass option for failing jobs and should be used carefully. Unnecessary
 * usage of this option could lead to expensive builds and hog resources from other builds/services.
 */
export interface ExtraLargeTransformProfile {
}
/**
 * Request to load a page of the combined history of an Ontology and
 * SystemEntityMetadata.
 */
export interface GetCombinedOntologyHistoryRequest {
  pageSizeLimit: number;
  pageToken?: CombinedOntologyHistoryPageToken | null | undefined;
}
/**
 * Response containing a page of the combined history of an Ontology and
 * SystemEntityMetadata.
 */
export interface GetCombinedOntologyHistoryResponse {
  modificationPageItems: Array<CombinedOntologyHistoryPageItem>;
  nextPageToken?: CombinedOntologyHistoryPageToken | null | undefined;
}
/**
 * Response to getStreamingProfileConfigs.
 */
export interface GetStreamingProfileConfigsResponse {
  streamingProfileConfigs: Record<
    StreamingProfileConfigId,
    StreamingProfileConfigDetails
  >;
}
/**
 * Contains additional metadata associated with a LinkType.
 */
export interface LinkTypeEntityMetadata {
  arePatchesEnabled: boolean;
  entityConfig: EntityConfig;
  provenance?:
    | _api_entitymetadata_provenance_EntityProvenance
    | null
    | undefined;
  redacted?: boolean | null | undefined;
  targetStorageBackend: StorageBackend;
}
/**
 * Request to load LinkTypeEntityMetadata of a LinkType.
 */
export interface LinkTypeEntityMetadataLoadRequest {
  branch?: _api_OntologyBranchRid | null | undefined;
  linkTypeRid: _api_LinkTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
}
/**
 * Response to LinkTypeEntityMetadataLoadRequest.
 */
export interface LinkTypeEntityMetadataLoadResponse {
  linkTypeEntityMetadata: LinkTypeEntityMetadata;
  linkTypeRid: _api_LinkTypeRid;
  linkTypeSystemEntityMetadata?:
    | LinkTypeSystemEntityMetadata
    | null
    | undefined;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
/**
 * Metadata associated with LinkTypes which can only be modified by services.
 * Any metadata which is expected to be configured by users directly should instead
 * be added to the LinkTypeEntityMetadata object.
 *
 * LinkTypeSystemEntityMetadata will automatically be deleted when
 * the LinkType is deleted through an Ontology modification.
 */
export interface LinkTypeSystemEntityMetadata {
  entityMigrationStatus: EntityMigrationStatus;
  redacted?: boolean | null | undefined;
  syncMetadata: SyncMetadata;
}
/**
 * Used to set LinkTypeSystemEntityMetadata for a LinkType.
 *
 * NOTE: This modification request will carry out a complete overwrite of fields for which the values
 * are provided.
 */
export interface LinkTypeSystemEntityMetadataModification {
  entityMigrationStatus?: EntityMigrationStatusModification | null | undefined;
  syncMetadata?: SyncMetadataModification | null | undefined;
}
/**
 * Request to load the EntityMetadata for the specified ObjectTypeRids/LinkTypeRids at the specified OntologyVersion.
 * If an OntologyVersion is not present, the EntityMetadata will be loaded from the latest "system" OntologyVersion.
 * A "system" OntologyVersion is an OntologyVersion created using the modifySystemEntityMetadata endpoint as opposed
 * to the modifyOntology endpoint.
 * If no EntityMetadata has been set for an existing ObjectType or LinkType, a default empty
 * ObjectTypeEntityMetadata/LinkTypeEntityMetadata object will be returned.
 */
export interface LoadEntityMetadataRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  includeSystemEntityMetadata?: boolean | null | undefined;
  linkTypes: Array<LinkTypeEntityMetadataLoadRequest>;
  loadRedacted?: boolean | null | undefined;
  objectTypes: Array<ObjectTypeEntityMetadataLoadRequest>;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * Response to LoadEntityMetadataRequest.
 */
export interface LoadEntityMetadataResponse {
  linkTypes: Array<LinkTypeEntityMetadataLoadResponse | null | undefined>;
  objectTypes: Array<ObjectTypeEntityMetadataLoadResponse | null | undefined>;
}
/**
 * Contains configuration for Phonograph to Funnel/Highbury migration.
 */
export interface MigrationConfiguration {
  entityMigrationCategory: EntityMigrationCategory;
  importEditsHistory?: boolean | null | undefined;
  minMigrationDuration: string;
  transitionRetryLimit: number;
  transitionWindows: TransitionWindows;
}
/**
 * Edits history is disabled for this entity.
 */
export interface NoEditsHistory {
}
/**
 * Configuration for one instance of an ObjectDb, for example for one Highbury cluster.
 * If `configValue` is left empty, the ObjectDb should apply the default configuration for this entity.
 * If `configValue` is present, interpretation of the string is responsibility of the ObjectDb.
 */
export interface ObjectDbConfig {
  configValue?: string | null | undefined;
}
/**
 * Represents the type of ObjectDb, for example Highbury or Writeback. The value corresponds to the type field
 * advertised by the ObjectDb in the "funnel-sync-manager" discovery role.
 *
 * The maximum size of the objects DB type is 20 bytes, when encoded in UTF-8.
 */
export type ObjectDbType = string;

/**
 * Configuration for one type of ObjectDb which contains the individual configurations for each cluster
 * of the particular ObjectDbType.
 */
export interface ObjectDbTypeConfig {
  objectDbConfigs: Record<_api_ObjectDbRid, ObjectDbConfig>;
}
/**
 * Allows services to set up Funnel syncs by ObjectDbSyncRid for the case where multiple syncs are
 * requested per ObjectDbType.
 */
export interface ObjectDbTypeSyncConfig {
  syncConfig: Record<_api_ObjectDbSyncRid, SyncConfig>;
}
/**
 * With this strategy, liveness is no longer evaluated on a datasource-by-datasource level, and is evaluated at
 * the object level. This provides improved UX for MDOs, and has no effect for non-MDOs.
 */
export interface ObjectScopedLivenessStrategy {
}
/**
 * Entity can be stored in Phonograph. Note that it is not guaranteed that the object type or link type is
 * currently registered with Phonograph. There is no guarantee the object type or link type has finished
 * syncing and is queryable via Phonograph.
 */
export interface ObjectStorageV1 {
}
/**
 * Entity can be stored in Highbury and other V2 Object DBs. It is not possible to store the entity in Phonograph.
 * Edits can be enabled or disabled using the `arePatchesEnabled` field in ObjectTypeEntityMetadata/LinkTypeEntityMetadata.
 *
 * Note that this field indicates a target state. There is no guarantee that the object type or link type has
 * finished syncing. A migration may currently be in progress and queries may still be served by Phonograph during
 * particular stages of the migration process.
 *
 * In order to determine whether the object type or link type can be queried via OSv2 the Funnel getCurrentView
 * endpoint can be used.
 */
export interface ObjectStorageV2 {
  archiveState?: ArchiveState | null | undefined;
  editsHistoryImportConfiguration?:
    | EditsHistoryImportConfiguration
    | null
    | undefined;
  migrationConfiguration?: MigrationConfiguration | null | undefined;
}
export type ObjectTypeAlias = Alias;

/**
 * Contains additional metadata associated with an ObjectType.
 */
export interface ObjectTypeEntityMetadata {
  actionLogRequirednessMetadata?:
    | ActionLogRequirednessMetadata
    | null
    | undefined;
  aliases: Array<ObjectTypeAlias>;
  arePatchesEnabled: boolean;
  diffEdits: boolean;
  editsHistory: EditsHistory;
  editsResolutionStrategies: EditsResolutionStrategies;
  entityConfig: EntityConfig;
  gothamMapping?: _api_typemapping_ObjectTypeGothamMapping | null | undefined;
  objectTypeIndexingSettings?: ObjectTypeIndexingSettings | null | undefined;
  patchApplicationStrategy: PatchApplicationStrategy;
  provenance?:
    | _api_entitymetadata_provenance_EntityProvenance
    | null
    | undefined;
  redacted?: boolean | null | undefined;
  targetStorageBackend: StorageBackend;
  usesOnlyOsv2ObjectRids: boolean;
}
/**
 * Request to load ObjectTypeEntityMetadata of an ObjectType.
 */
export interface ObjectTypeEntityMetadataLoadRequest {
  branch?: _api_OntologyBranchRid | null | undefined;
  objectTypeRid: _api_ObjectTypeRid;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
}
/**
 * Response to ObjectTypeEntityMetadataLoadRequest.
 */
export interface ObjectTypeEntityMetadataLoadResponse {
  objectTypeEntityMetadata: ObjectTypeEntityMetadata;
  objectTypeRid: _api_ObjectTypeRid;
  objectTypeSystemEntityMetadata?:
    | ObjectTypeSystemEntityMetadata
    | null
    | undefined;
  ontologyRid: _api_OntologyRid;
  ontologyVersion: _api_OntologyVersion;
}
/**
 * Settings related to indexing object types in Funnel.
 */
export interface ObjectTypeIndexingSettings {
  streamingConsistencyGuarantee?:
    | StreamingConsistencyGuarantee
    | null
    | undefined;
  streamingProfileConfig?: StreamingProfileConfig | null | undefined;
  transformProfileConfig?: TransformProfileConfig | null | undefined;
}
/**
 * Metadata associated with ObjectTypes which can only be modified by services.
 * Any metadata which is expected to be configured by users directly should instead
 * be added to the ObjectTypeEntityMetadata object.
 *
 * ObjectTypeSystemEntityMetadata will automatically be deleted when
 * the ObjectType is deleted through an Ontology modification.
 */
export interface ObjectTypeSystemEntityMetadata {
  entityMigrationStatus: EntityMigrationStatus;
  redacted?: boolean | null | undefined;
  syncMetadata: SyncMetadata;
}
/**
 * Used to set ObjectTypeSystemEntityMetadata for an ObjectType.
 *
 * NOTE: This modification request will carry out a complete overwrite of fields for which the values
 * are provided.
 */
export interface ObjectTypeSystemEntityMetadataModification {
  entityMigrationStatus?: EntityMigrationStatusModification | null | undefined;
  syncMetadata?: SyncMetadataModification | null | undefined;
}
export interface OntologyIrEditsHistory_config {
  type: "config";
  config: OntologyIrEditsHistoryConfig;
}

export interface OntologyIrEditsHistory_none {
  type: "none";
  none: NoEditsHistory;
}
export type OntologyIrEditsHistory =
  | OntologyIrEditsHistory_config
  | OntologyIrEditsHistory_none;

/**
 * Edits history tracking is enabled for this entity with the specified configuration. All action edits
 * for objects of this object type will be available for querying from the point the history was enabled.
 */
export interface OntologyIrEditsHistoryConfig {
  store: _api_ObjectTypeApiName;
  storeAllPreviousProperties?: boolean | null | undefined;
}
/**
 * Wrapper for multiple strategies as objects can have multiple datasources.
 */
export interface OntologyIrEditsResolutionStrategies {
  strategies: Record<_api_DatasourceRid, OntologyIrEditsResolutionStrategy>;
}
export interface OntologyIrEditsResolutionStrategy_timestampProperty {
  type: "timestampProperty";
  timestampProperty: OntologyIrTimestampPropertyStrategy;
}
/**
 * The strategy used when resolving conflicts between user edits and datasource values.
 */
export type OntologyIrEditsResolutionStrategy =
  OntologyIrEditsResolutionStrategy_timestampProperty;

/**
 * Contains additional metadata associated with a LinkType.
 */
export interface OntologyIrLinkTypeEntityMetadata {
  arePatchesEnabled: boolean;
}
/**
 * For this strategy, the datasource value should be used when the time in the given timestamp property is
 * more recent than the time the patch is applied.
 */
export interface OntologyIrTimestampPropertyStrategy {
  timestampPropertyRid: _api_ObjectTypeFieldApiName;
}
export interface PatchApplicationStrategy_datasourceScopedLiveness {
  type: "datasourceScopedLiveness";
  datasourceScopedLiveness: DatasourceScopedLivenessStrategy;
}

export interface PatchApplicationStrategy_objectScopedLiveness {
  type: "objectScopedLiveness";
  objectScopedLiveness: ObjectScopedLivenessStrategy;
}
export type PatchApplicationStrategy =
  | PatchApplicationStrategy_datasourceScopedLiveness
  | PatchApplicationStrategy_objectScopedLiveness;

/**
 * Entity can be stored in Phonograph and Highbury though the data is read-only. Edits are disabled.
 * This is a legacy state which should not be used anymore. OMS guarantees that the latest version of each
 * ontology does not return this state for any object type or link type.
 */
export interface ReadOnlyV1V2 {
}
/**
 * Indicates that the given object type is in the process of being restored by funnel.
 */
export interface RestorationState {
}
export type SharedPropertyTypeAlias = Alias;

/**
 * Contains the start and end time of the soak period during the migration.
 */
export interface SoakPeriodInformation {
  end: string;
  start: string;
}
export interface StorageBackend_objectStorageV1 {
  type: "objectStorageV1";
  objectStorageV1: ObjectStorageV1;
}

export interface StorageBackend_readOnlyV1V2 {
  type: "readOnlyV1V2";
  readOnlyV1V2: ReadOnlyV1V2;
}

export interface StorageBackend_objectStorageV2 {
  type: "objectStorageV2";
  objectStorageV2: ObjectStorageV2;
}
/**
 * Storage backend intended to be used for the Entity. This is used to indicate whether
 * an entity can be stored in Phonograph or Highbury.
 */
export type StorageBackend =
  | StorageBackend_objectStorageV1
  | StorageBackend_readOnlyV1V2
  | StorageBackend_objectStorageV2;

export type StreamingConsistencyGuarantee = "AT_LEAST_ONCE" | "EXACTLY_ONCE";

/**
 * A Flink streaming profile.
 */
export type StreamingProfile = string;

/**
 * A complete streaming profile configuration.
 */
export interface StreamingProfileConfig {
  id: StreamingProfileConfigId;
}
/**
 * A preconfigured set of Flink streaming profiles.
 */
export interface StreamingProfileConfigDetails {
  id: StreamingProfileConfigId;
  jobManagerMemory: number;
  parallelism: number;
  streamingProfiles: Array<StreamingProfile>;
  taskManagerMemory: number;
}
/**
 * The ID of a preconfigured streaming profile configuration. Each corresponds to exactly one
 * `StreamingProfileConfigDetails`.
 */
export type StreamingProfileConfigId =
  | "EXTRA_SMALL"
  | "SMALL"
  | "MEDIUM"
  | "LARGE"
  | "EXTRA_LARGE";

/**
 * No distinct SyncConfig is supported at the moment.
 * This object is included for potential extensions in the future only.
 */
export interface SyncConfig {
}
/**
 * Used by services to set up additional Funnel syncs to ObjectDbs.
 */
export interface SyncMetadata {
  objectDbTypeSyncConfig: Record<ObjectDbType, ObjectDbTypeSyncConfig>;
}
/**
 * Contains ObjectDB Sync (This is a Funnel concept - check Objects Data Funnel documentation for more
 * details) configurations for a particular ObjectType or LinkType. This modification carries out a complete
 * overwrite of the existing Sync config Map with the provided Map in this request.
 */
export interface SyncMetadataModification {
  objectDbTypeSyncConfigs: Record<ObjectDbType, ObjectDbTypeSyncConfig>;
}
/**
 * Request to modify the SystemEntityMetadata of the specified ObjectType(s)/LinkType(s).
 */
export interface SystemEntityMetadataModificationRequest {
  expectedOntologyVersion: _api_OntologyVersion;
  linkTypeSystemEntityMetadata: Record<
    _api_LinkTypeRid,
    LinkTypeSystemEntityMetadataModification
  >;
  objectTypeSystemEntityMetadata: Record<
    _api_ObjectTypeRid,
    ObjectTypeSystemEntityMetadataModification
  >;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * Response to SystemEntityMetadataModificationRequest.
 */
export interface SystemEntityMetadataModificationResponse {
  ontologyVersion: _api_OntologyVersion;
}
/**
 * For this strategy, the datasource value should be used when the time in the given timestamp property is
 * more recent than the time the patch is applied.
 */
export interface TimestampPropertyStrategy {
  timestampPropertyRid: _api_PropertyTypeRid;
}
/**
 * Period between two timestamps computed by Funnel.
 */
export interface TimeWindow {
  end: string;
  start: string;
}
export interface TransformProfileConfig_automatic {
  type: "automatic";
  automatic: AutomaticTransformProfile;
}

export interface TransformProfileConfig_extraLarge {
  type: "extraLarge";
  extraLarge: ExtraLargeTransformProfile;
}
/**
 * A transform profile is an abstraction over the set of Spark profiles to be used for a Funnel job. The exact
 * Spark profiles used may be defined elsewhere (e.g. Funnel).
 */
export type TransformProfileConfig =
  | TransformProfileConfig_automatic
  | TransformProfileConfig_extraLarge;

/**
 * An interval between two times. A start and end time that are exactly the same mean all day.
 */
export interface TransitionWindow {
  end: DayTime;
  start: DayTime;
}
/**
 * A set of TransitionWindows during which the migration state machine can do possibly disruptive transitions.
 * An empty set means that it is always safe to do the transitions. Examples of disruptive transitions are
 * temporarily disabling edits and perf degradation when interacting with migrating ontology entity.
 */
export interface TransitionWindows {
  timeIntervals: Array<TransitionWindow>;
}
