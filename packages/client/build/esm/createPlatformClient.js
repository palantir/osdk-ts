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

import { createSharedClientContext } from "@osdk/shared.client.impl";
import { USER_AGENT } from "./util/UserAgent.js";
/**
 * Creates a client that can only be used with Platform APIs.
 *
 * If you already have an OSDK Client (from `createClient`), you do not need to
 * create one of these - those clients can be used with Platform APIs as well.
 *
 * @param baseUrl
 * @param tokenProvider
 * @param options Currently unused, reserved for future use.
 * @param fetchFn
 * @returns
 */
export function createPlatformClient(baseUrl, tokenProvider, options = undefined, fetchFn = fetch) {
  return createSharedClientContext(baseUrl, tokenProvider, USER_AGENT, fetchFn);
}
//# sourceMappingURL=createPlatformClient.js.map