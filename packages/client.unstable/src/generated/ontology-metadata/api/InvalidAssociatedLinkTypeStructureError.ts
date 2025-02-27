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

import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";

/**
 * The associated one-to-many LinkType is not referencing the expected ObjectTypes
 */
export interface InvalidAssociatedLinkTypeStructureError {
  intermediaryLinkTypeRid: LinkTypeRid;
  associatedLinkTypeRid: LinkTypeRid;
  expectedPrimaryKeyObjectTypeRid: ObjectTypeRid;
  actualPrimaryKeyObjectTypeRid: ObjectTypeRid;
  expectedForeignKeyObjectTypeRid: ObjectTypeRid;
  actualForeignKeyObjectTypeRid: ObjectTypeRid;
  intermediaryLinkTypeId: LinkTypeId | undefined;
  associatedLinkTypeId: LinkTypeId | undefined;
  expectedPrimaryKeyObjectTypeId: ObjectTypeId | undefined;
  actualPrimaryKeyObjectTypeId: ObjectTypeId | undefined;
  expectedForeignKeyObjectTypeId: ObjectTypeId | undefined;
  actualForeignKeyObjectTypeId: ObjectTypeId | undefined;
}
