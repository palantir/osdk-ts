/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { EntityTypeRid } from "../../api/EntityTypeRid.js";
import type { EntityVersion } from "../../api/EntityVersion.js";
import type { LoggableEntityPrimaryKey } from "../../loggable/LoggableEntityPrimaryKey.js";

/**
 * Property values other than primary key values are not included in the audit version of a
 * PatchableFoundryEntity to avoid dropping audit logs due to them being too large.
 */
export interface AuditPatchableFoundryEntity {
  entityTypeRid: EntityTypeRid;
  primaryKey: LoggableEntityPrimaryKey;
  version: EntityVersion;
  isAlive: boolean;
  datasourceRids: Array<DatasourceRid>;
}
