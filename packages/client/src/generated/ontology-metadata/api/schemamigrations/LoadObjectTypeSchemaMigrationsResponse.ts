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
import type { LoadSchemaMigrationsPagingToken } from "./LoadSchemaMigrationsPagingToken.js";
import type { SchemaTransition } from "./SchemaTransition.js";

/**
 * Response to LoadObjectTypeSchemaMigrationsRequest. Contains the transitions defined up to the
 * requested ontology version.
 */
export interface LoadObjectTypeSchemaMigrationsResponse {
  migrationPageItems: Array<SchemaTransition>;
  schemaVersion: SchemaVersion;
  nextPageToken: LoadSchemaMigrationsPagingToken | undefined;
}
