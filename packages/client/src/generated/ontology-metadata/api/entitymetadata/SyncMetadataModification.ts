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

import type { ObjectDbType } from "./ObjectDbType.js";
import type { ObjectDbTypeSyncConfig } from "./ObjectDbTypeSyncConfig.js";

/**
 * Contains ObjectDB Sync (This is a Funnel concept - check Objects Data Funnel documentation for more
 * details) configurations for a particular ObjectType or LinkType. This modification carries out a complete
 * overwrite of the existing Sync config Map with the provided Map in this request.
 */
export interface SyncMetadataModification {
  objectDbTypeSyncConfigs: Record<ObjectDbType, ObjectDbTypeSyncConfig>;
}
