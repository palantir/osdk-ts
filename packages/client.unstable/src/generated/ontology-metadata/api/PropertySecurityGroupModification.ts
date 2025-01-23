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

import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { SecurityGroupSecurityDefinitionModification } from "./SecurityGroupSecurityDefinitionModification.js";

/**
 * Modification of PropertySecurityGroup. A globally unique identifier will be generated for each unique
 * SecurityGroupSecurityDefinitionModification specification.
 *
 * When modifying an existing PropertySecurityGroup, the existing PropertySecurityGroupRid is preserved if the
 * actual security remains unchanged from the existing security definition.
 *
 * The caller issuing a security group modification request must have ontology:edit-property-security-group
 * permission, and to satisfy current and proposed (if being changed) mandatory security.
 */
export interface PropertySecurityGroupModification {
  properties: Array<PropertyTypeId>;
  security: SecurityGroupSecurityDefinitionModification;
}
