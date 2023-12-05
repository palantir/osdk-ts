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

import type { EntityMigrationAborted } from "./EntityMigrationAborted.js";
import type { EntityMigrationFailed } from "./EntityMigrationFailed.js";
import type { EntityMigrationFinished } from "./EntityMigrationFinished.js";
import type { EntityMigrationInProgress } from "./EntityMigrationInProgress.js";
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
