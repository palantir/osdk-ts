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

import type { EntityMigrationAborted } from "./EntityMigrationAborted.mjs";
import type { EntityMigrationFailed } from "./EntityMigrationFailed.mjs";
import type { EntityMigrationFinished } from "./EntityMigrationFinished.mjs";
import type { EntityMigrationInProgress } from "./EntityMigrationInProgress.mjs";
import type { EntityMigrationNotAttempted } from "./EntityMigrationNotAttempted.mjs";
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

export type EntityMigrationStatus =
  | EntityMigrationStatus_migrationNotAttempted
  | EntityMigrationStatus_migrationFailed
  | EntityMigrationStatus_migrationAborted
  | EntityMigrationStatus_migrationInProgress
  | EntityMigrationStatus_migrationFinished;
