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

import type { EntityTypeRid } from "../../api/EntityTypeRid.js";
import type { EntityVersion } from "../../api/EntityVersion.js";
import type { LoggableEntityPrimaryKey } from "../../loggable/LoggableEntityPrimaryKey.js";
import type { LoggableFoundryObjectReference } from "../../loggable/LoggableFoundryObjectReference.js";
export interface AuditFoundryLink {
  linkTypeRid: EntityTypeRid;
  primaryKey: LoggableEntityPrimaryKey;
  objectSideA: LoggableFoundryObjectReference;
  objectSideB: LoggableFoundryObjectReference;
  version: EntityVersion;
}
