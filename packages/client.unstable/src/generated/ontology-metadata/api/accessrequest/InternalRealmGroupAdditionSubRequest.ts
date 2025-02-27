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

import type { GroupId } from "../GroupId.js";
import type { PrincipalId } from "../PrincipalId.js";

/**
 * A request for a principal to be added to a multipass group.
 *
 * The principal's access to the project will be dictated by the roles granted on
 * the MP group which are subject to change from the roles displayed at time
 * of request.
 */
export interface InternalRealmGroupAdditionSubRequest {
  groupId: GroupId;
  principal: PrincipalId;
  expiresBy: string | undefined;
}
