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
import type { LoadEntityMetadataRequest } from "../LoadEntityMetadataRequest.js";
import type { LoadEntityMetadataResponse } from "../LoadEntityMetadataResponse.js";

/**
 * Endpoint to load the EntityMetadata for the specified ObjectTypeRids/LinkTypeRids at the specified
 * OntologyVersion.
 *
 * The response will contain EntityMetadata for a requested ObjectType/LinkType unless at least one of the
 * the following applies:
 * - the specified version is invalid
 * - the ObjectType/LinkType does not exist at the specified version
 * - the ObjectType/LinkType is not visible to the user
 *
 * If no EntityMetadata has been set for an existing ObjectType or LinkType, then a default empty
 * ObjectTypeEntityMetadata/LinkTypeEntityMetadata object will be returned.
 *
 * There are limits on the number of EntityMetadatas that can be loaded in one request. Please refer to
 * documentation of LoadEntityMetadataRequest for the values of these limits.
 */
export async function loadEntityMetadata(
  ctx: ConjureContext,
  request: LoadEntityMetadataRequest,
): Promise<LoadEntityMetadataResponse> {
  return conjureFetch(ctx, `/entityMetadata/load`, "POST", request);
}
