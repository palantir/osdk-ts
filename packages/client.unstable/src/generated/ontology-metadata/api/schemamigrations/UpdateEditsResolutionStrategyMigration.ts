/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { EditsWinToLatestTimestamp } from "./EditsWinToLatestTimestamp.js";
import type { LatestTimestampToEditsWin } from "./LatestTimestampToEditsWin.js";
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
