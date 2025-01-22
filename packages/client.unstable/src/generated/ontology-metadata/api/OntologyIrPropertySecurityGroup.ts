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

import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrSecurityGroupSecurityDefinition } from "./OntologyIrSecurityGroupSecurityDefinition.js";
import type { PropertySecurityGroupRid } from "./PropertySecurityGroupRid.js";

/**
 * Defines a grouping of properties sharing the same security.
 *
 * One and exactly one of the specified groups must contain the primary key property(ies). If there
 * are multiple primary key properties, they must belong to the same property group. The security of the
 * property group that includes the primary key also specifies overall object visibility: if the user does not
 * pass this property group's security, the entire object is invisible, regardless of visibility of other
 * property groups.
 */
export interface OntologyIrPropertySecurityGroup {
  rid: PropertySecurityGroupRid;
  properties: Array<ObjectTypeFieldApiName>;
  security: OntologyIrSecurityGroupSecurityDefinition;
}
