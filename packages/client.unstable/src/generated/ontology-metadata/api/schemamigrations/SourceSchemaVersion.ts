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

import type { SchemaVersion } from "../SchemaVersion.js";
import type { LatestSchemaVersion } from "./LatestSchemaVersion.js";
export interface SourceSchemaVersion_latestVersion {
  type: "latestVersion";
  latestVersion: LatestSchemaVersion;
}

export interface SourceSchemaVersion_specificVersion {
  type: "specificVersion";
  specificVersion: SchemaVersion;
}
/**
 * Type to represent either a specific source schema version or the latest one
 */
export type SourceSchemaVersion =
  | SourceSchemaVersion_latestVersion
  | SourceSchemaVersion_specificVersion;
