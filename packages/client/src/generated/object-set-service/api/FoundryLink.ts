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

import type { EntityPrimaryKey } from "./EntityPrimaryKey.js";
import type { EntityTypeRid } from "./EntityTypeRid.js";
import type { EntityVersion } from "./EntityVersion.js";
import type { FoundryObjectReference } from "./FoundryObjectReference.js";

/**
 * A Foundry link.
 */
export interface FoundryLink {
  linkTypeRid: EntityTypeRid;
  primaryKey: EntityPrimaryKey;
  objectSideA: FoundryObjectReference;
  objectSideB: FoundryObjectReference;
  version: EntityVersion;
}
