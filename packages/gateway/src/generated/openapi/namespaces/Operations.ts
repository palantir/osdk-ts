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

import type { AsyncOperation } from "../components/AsyncOperation.js";
import type { OpenApiRequest } from "../request/index.js";

/**
 * Get an asynchronous operation by its ID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getOperation<TResponse>(
  _request: OpenApiRequest<AsyncOperation, TResponse>,
  operationId: string,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/operations/${operationId}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
