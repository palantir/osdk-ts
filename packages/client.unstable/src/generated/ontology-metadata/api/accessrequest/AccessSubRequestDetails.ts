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

import type { InternalRealmGroupAdditionSubRequest } from "./InternalRealmGroupAdditionSubRequest.js";
import type { OntologyEntityRoleGrantSubRequest } from "./OntologyEntityRoleGrantSubRequest.js";
export interface AccessSubRequestDetails_internalRealmGroupAddition {
  type: "internalRealmGroupAddition";
  internalRealmGroupAddition: InternalRealmGroupAdditionSubRequest;
}

export interface AccessSubRequestDetails_ontologyEntityRoleGrant {
  type: "ontologyEntityRoleGrant";
  ontologyEntityRoleGrant: OntologyEntityRoleGrantSubRequest;
}
/**
 * A subrequest that provides some access to a resource.
 */
export type AccessSubRequestDetails =
  | AccessSubRequestDetails_internalRealmGroupAddition
  | AccessSubRequestDetails_ontologyEntityRoleGrant;
