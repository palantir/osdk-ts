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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  BlockSetId as _api_BlockSetId,
  UpdateBlockSetMetadataRequest as _api_UpdateBlockSetMetadataRequest,
  UpdateBlockSetMetadataResponse as _api_UpdateBlockSetMetadataResponse,
} from "../__components.js";

/**
 * Sets and updates block set metadata. The only supported metadata is the Maven Product ID. It backfills
 * the latest BlockSetVersion of the BlockSet with the provided Maven Product ID.
 *
 * For this to succeed, all of the following must be true:
 * * The Compass space containing the marketplace store must have a Maven group set.
 * * The provided product id's group must match
 * `<compass space maven group>.marketplace-store-<store uuid>`
 * * The provided artifact id must end with `<block set id>-`
 *
 * Throws `BlockSetAlreadyHasMavenGroupId` if the block set already has a maven product id
 * different to the one provided.
 * Throws `ContainingNamespaceMissingMavenGroupPrefix` if the compass space containing the Marketplace store does not
 * have a maven group assigned.
 * Throws `InvalidMavenGroup` if the provided maven group does not fulfil requirements specified above.
 */
export async function updateBlockSetMetadata(
  ctx: ConjureContext,
  blockSetId: _api_BlockSetId,
  request: _api_UpdateBlockSetMetadataRequest,
): Promise<_api_UpdateBlockSetMetadataResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/${blockSetId}/metadata`,
    "PUT",
    request,
  );
}
