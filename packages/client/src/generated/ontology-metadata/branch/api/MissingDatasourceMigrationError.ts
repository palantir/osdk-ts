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

import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";

/**
 * Indicates that a datasource was deleted without the required schema migrations. Currently we only validate
 * for the most common schema migrations. Validation only looks at migrations with
 * `SourceSchemaVersion.latestVersion()`, other migrations will be ignored.
 * There may be some edge cases not covered by this validation.
 *
 * Schema Migrations that are validated for include:
 * - dropAllPatches
 * - dropDatasource, where the source datasource matches the deleted datasource
 * - renameDatasource, where the source matches the deleted datasource
 *
 * Edge cases include:
 * - dropDatasource does not check that the target datasource exists or is valid
 */
export interface MissingDatasourceMigrationError {
  objectTypeRid: ObjectTypeRid;
  datasourceRid: DatasourceRid;
}
