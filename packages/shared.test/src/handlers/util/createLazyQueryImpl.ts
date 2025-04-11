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

import type {
  ExecuteQueryRequest,
  ExecuteQueryResponse,
} from "@osdk/foundry.ontologies";
import { InvalidRequest } from "../../errors.js";
import { OpenApiCallError } from "./handleOpenApiCall.js";

export function createLazyQueryImpl(
  bodyToResponse: Record<string, ExecuteQueryResponse>,
): (req: ExecuteQueryRequest) => ExecuteQueryResponse {
  return (req: ExecuteQueryRequest): ExecuteQueryResponse => {
    const body = JSON.stringify(req);

    const resp = bodyToResponse[body];
    if (!resp) {
      throw new OpenApiCallError(400, InvalidRequest("Invalid Query Request"));
    }
    return resp;
  };
}
