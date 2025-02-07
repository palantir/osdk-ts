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

import type { AccessRequestRid } from "../AccessRequestRid.js";
import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";

/**
 * Returns the access request rids requesting access to ontology entities.
 */
export interface BulkGetAccessRequestsForOntologyEntityResponse {
  objectTypeRids: Record<ObjectTypeRid, Array<AccessRequestRid>>;
  linkTypeRids: Record<LinkTypeRid, Array<AccessRequestRid>>;
  actionTypeRids: Record<ActionTypeRid, Array<AccessRequestRid>>;
  sharedPropertyTypeRids: Record<
    SharedPropertyTypeRid,
    Array<AccessRequestRid>
  >;
  interfaceTypeRids: Record<InterfaceTypeRid, Array<AccessRequestRid>>;
  typeGroupRids: Record<TypeGroupRid, Array<AccessRequestRid>>;
}
