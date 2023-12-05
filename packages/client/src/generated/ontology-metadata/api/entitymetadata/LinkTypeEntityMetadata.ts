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

import type { EntityConfig } from "./EntityConfig.js";
import type { EntityProvenance } from "./provenance/EntityProvenance.js";
import type { StorageBackend } from "./StorageBackend.js";

/**
 * Contains additional metadata associated with a LinkType.
 */
export interface LinkTypeEntityMetadata {
  entityConfig: EntityConfig;
  arePatchesEnabled: boolean;
  targetStorageBackend: StorageBackend;
  provenance: EntityProvenance | undefined;
  redacted: boolean | undefined;
}
