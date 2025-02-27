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
import type { AccessRequestVersion } from "../AccessRequestVersion.js";
import type { AccessRequestEntityRid } from "./AccessRequestEntityRid.js";
import type { AccessSubRequest } from "./AccessSubRequest.js";

/**
 * Metadata pertaining to a single access request.
 */
export interface AccessRequest {
  rid: AccessRequestRid;
  version: AccessRequestVersion;
  entityRid: AccessRequestEntityRid;
  subRequests: Array<AccessSubRequest>;
}
