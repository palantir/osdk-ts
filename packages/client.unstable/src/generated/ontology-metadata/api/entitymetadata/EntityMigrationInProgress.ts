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

import type { OntologyVersion } from "../OntologyVersion.js";
import type { ActiveStorageBackend } from "./ActiveStorageBackend.js";
import type { EntityMigrationCategory } from "./EntityMigrationCategory.js";
import type { EntityMigrationStage } from "./EntityMigrationStage.js";
import type { SoakPeriodInformation } from "./SoakPeriodInformation.js";
import type { TimeWindow } from "./TimeWindow.js";

/**
 * Contains the information for a running migration.
 */
export interface EntityMigrationInProgress {
  migrationStage: EntityMigrationStage;
  migrationType: EntityMigrationCategory;
  startedAt: string;
  atOntologyVersion: OntologyVersion;
  nextTransitionWindow: TimeWindow | undefined;
  readFrom: ActiveStorageBackend;
  writeTo: ActiveStorageBackend | undefined;
  soakPeriod: SoakPeriodInformation | undefined;
  timestampOfTheFirstSuccessfulSync: string | undefined;
  numberOfEdits: number | undefined;
}
