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

import type { ActionTypeAuthScopePatch } from "./ActionTypeAuthScopePatch.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { AuthScopePatch } from "./AuthScopePatch.js";
import type { CompassProjectRid } from "./CompassProjectRid.js";
import type { FunctionAuthScopePatch } from "./FunctionAuthScopePatch.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { InterfaceTypeAuthScopePatch } from "./InterfaceTypeAuthScopePatch.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeAuthScopePatch } from "./LinkTypeAuthScopePatch.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeAuthScopePatch } from "./ObjectTypeAuthScopePatch.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { ProjectAuthScopePatch } from "./ProjectAuthScopePatch.js";
export interface AuthScopeModification {
  objectTypeUpdates: Record<ObjectTypeRid, ObjectTypeAuthScopePatch>;
  linkTypeUpdates: Record<LinkTypeRid, LinkTypeAuthScopePatch>;
  actionTypeUpdates: Record<ActionTypeRid, ActionTypeAuthScopePatch>;
  functionUpdates: Record<FunctionRid, FunctionAuthScopePatch>;
  interfaceTypeUpdates: Record<InterfaceTypeRid, InterfaceTypeAuthScopePatch>;
  ontologyPackageUpdates: Record<OntologyPackageRid, AuthScopePatch>;
  projectUpdates: Record<CompassProjectRid, ProjectAuthScopePatch>;
}
