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

import type { OrganizationRid } from "./OrganizationRid.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";

/**
 * Request to associate given set of OrganizationRids with the specified TypeGroupRid(s).
 * Users should have permissions to modify the specified TypeGroupRid(s) and also have
 * relevant permissions to apply the specified organizations' markings.
 * An empty set of organizations is not permissible.
 */
export interface TypeGroupSetOrganizationsRequest {
  organizationRidByTypeGroupRid: Record<TypeGroupRid, Array<OrganizationRid>>;
}
