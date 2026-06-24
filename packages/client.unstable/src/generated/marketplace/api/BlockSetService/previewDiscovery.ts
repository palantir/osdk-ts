/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  BlockSetVersionId as _api_BlockSetVersionId,
  PreviewDiscoveryRequest as _api_PreviewDiscoveryRequest,
  PreviewDiscoveryResponse as _api_PreviewDiscoveryResponse,
} from "../__components.js";

/**
 * Preview the output specs that would be discovered from the provided discovery specs without materializing
 * them into a block set. This allows users to validate what resources will be included before committing to
 * a full block set update.
 *
 * The discovery results will not be specific to the `blockSetVersionId` specified in the request.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 */
export async function previewDiscovery(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_PreviewDiscoveryRequest,
): Promise<_api_PreviewDiscoveryResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/version/${blockSetVersionId}/preview-discovery`,
    "POST",
    request,
  );
}
