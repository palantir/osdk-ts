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

import type { AccessRequestEntityRid } from "./AccessRequestEntityRid.js";
import type { AccessSubRequestModification } from "./AccessSubRequestModification.js";

/**
 * A request for access to an ontology entity. AccessSubRequests can be used in conjunction to
 * grant the desired permissions on an ontology entity. The title and description properties
 * are not stored in the access request but rather, just passed through to the approvals service.
 */
export interface CreateAccessRequestRequest {
  title: string;
  description: string | undefined;
  entityRid: AccessRequestEntityRid;
  subRequests: Array<AccessSubRequestModification>;
}
