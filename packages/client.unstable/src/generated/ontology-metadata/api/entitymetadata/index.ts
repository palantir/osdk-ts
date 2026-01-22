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

export * as OntologyEntityMetadataService from "./OntologyEntityMetadataService.js";

export type {
  ActionLogNotRequired,
  ActionLogRequiredForObjectType,
  ActionLogRequirednessMetadata,
  ActionLogRequirednessSetting,
  ActiveStorageBackend,
  Alias,
  ArchivedState,
  ArchiveState,
  AutomaticTransformProfile,
  CombinedModificationType,
  CombinedOntologyHistoryPageItem,
  CombinedOntologyHistoryPageItemSummary,
  CombinedOntologyHistoryPageToken,
  DatasourceScopedLivenessStrategy,
  DayOfWeek,
  DayTime,
  EditsHistory,
  EditsHistoryConfig,
  EditsHistoryImportConfiguration,
  EditsResolutionStrategies,
  EditsResolutionStrategy,
  EntityConfig,
  EntityMigrationAborted,
  EntityMigrationCategory,
  EntityMigrationFailed,
  EntityMigrationFinished,
  EntityMigrationInProgress,
  EntityMigrationNotAttempted,
  EntityMigrationStage,
  EntityMigrationStatus,
  EntityMigrationStatusModification,
  ExtraLargeTransformProfile,
  GetCombinedOntologyHistoryRequest,
  GetCombinedOntologyHistoryResponse,
  GetStreamingProfileConfigsResponse,
  LinkTypeEntityMetadata,
  LinkTypeEntityMetadataLoadRequest,
  LinkTypeEntityMetadataLoadResponse,
  LinkTypeSystemEntityMetadata,
  LinkTypeSystemEntityMetadataModification,
  LoadEntityMetadataRequest,
  LoadEntityMetadataResponse,
  MigrationConfiguration,
  NoEditsHistory,
  ObjectDbConfig,
  ObjectDbType,
  ObjectDbTypeConfig,
  ObjectDbTypeSyncConfig,
  ObjectScopedLivenessStrategy,
  ObjectStorageV1,
  ObjectStorageV2,
  ObjectTypeAlias,
  ObjectTypeEntityMetadata,
  ObjectTypeEntityMetadataLoadRequest,
  ObjectTypeEntityMetadataLoadResponse,
  ObjectTypeIndexingSettings,
  ObjectTypeSystemEntityMetadata,
  ObjectTypeSystemEntityMetadataModification,
  OntologyIrEditsHistory,
  OntologyIrEditsHistoryConfig,
  OntologyIrEditsResolutionStrategies,
  OntologyIrEditsResolutionStrategy,
  OntologyIrLinkTypeEntityMetadata,
  OntologyIrTimestampPropertyStrategy,
  PatchApplicationStrategy,
  ReadOnlyV1V2,
  RestorationState,
  SharedPropertyTypeAlias,
  SoakPeriodInformation,
  StorageBackend,
  StreamingConsistencyGuarantee,
  StreamingProfile,
  StreamingProfileConfig,
  StreamingProfileConfigDetails,
  StreamingProfileConfigId,
  SyncConfig,
  SyncMetadata,
  SyncMetadataModification,
  SystemEntityMetadataModificationRequest,
  SystemEntityMetadataModificationResponse,
  TimestampPropertyStrategy,
  TimeWindow,
  TransformProfileConfig,
  TransitionWindow,
  TransitionWindows,
} from "./__components.js";

export * as provenance from "./provenance/index.js";
