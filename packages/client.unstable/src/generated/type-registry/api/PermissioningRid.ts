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

import type { CompassNamespaceRid } from "./CompassNamespaceRid.js";
import type { ServiceManagedRid } from "./ServiceManagedRid.js";
export interface PermissioningRid_compassNamespace {
type: "compassNamespace";
compassNamespace: CompassNamespaceRid
}

export interface PermissioningRid_serviceManaged {
type: "serviceManaged";
serviceManaged: ServiceManagedRid
}
/**
 * Union representing gatekeeper parent of value types, defining their permissioning configuration. All union
 * implementations need to be wrappers over rids.
 * 
 * When extending the union, make sure to update security.yml of security-schema with the new type and ensure
 * it can be properly serialized into Atlas tables as row key with bytes persister.
 */
export type PermissioningRid = PermissioningRid_compassNamespace | PermissioningRid_serviceManaged