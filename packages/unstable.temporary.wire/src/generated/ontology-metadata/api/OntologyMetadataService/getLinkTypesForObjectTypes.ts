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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { GetLinkTypesForObjectTypesRequest } from "../GetLinkTypesForObjectTypesRequest.js";
import type { GetLinkTypesForObjectTypesResponse } from "../GetLinkTypesForObjectTypesResponse.js";

/**
 * Endpoint to batch load links associated to given ObjectTypeRid(s). The GetLinkTypesForObjectTypesResponse
 * will only contain links that are visible to the user. If the user has requested to get link types at
 * invalid ontology versions or for ObjectTypeRid(s) that do not exist in the specified versions, those entries
 * will include an empty set of link types.
 *
 * The includeObjectTypesWithoutSearchableDatasources flag is respected if present in the request,
 * else we set it to a default (false) unless the user-agent is blocklisted.
 * The flag is set to true for blocklisted user agents. Currently the blocklist
 * includes functions-typescript-gradle-plugin only.
 */
export async function getLinkTypesForObjectTypes(
  ctx: ConjureContext,
  request: GetLinkTypesForObjectTypesRequest,
): Promise<GetLinkTypesForObjectTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/linkTypesForObjectTypes`,
    "POST",
    request,
  );
}
