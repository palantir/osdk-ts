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
import type { GetLinkMetadataForObjectTypesRequest } from "../GetLinkMetadataForObjectTypesRequest.js";
import type { GetLinkMetadataForObjectTypesResponse } from "../GetLinkMetadataForObjectTypesResponse.js";

/**
 * Endpoint to batch load links associated to given ObjectTypeRid(s). The GetLinkTypesForObjectTypesResponse
 * will only contain links that are visible to the user. If the user has requested to get links at for
 * ObjectTypeRid(s) that do not exist in the specified versions, those entries will include an empty set
 * of link types.
 */
export async function getLinkMetadataForObjectTypes(
  ctx: ConjureContext,
  request: GetLinkMetadataForObjectTypesRequest,
): Promise<GetLinkMetadataForObjectTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/getLinkMetadataForObjectTypes`,
    "POST",
    request,
  );
}
