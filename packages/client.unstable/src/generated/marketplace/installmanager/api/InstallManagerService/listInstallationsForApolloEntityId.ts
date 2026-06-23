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
import type { ApolloEntityId as _api_ApolloEntityId } from "../../../api/__components.js";
import type {
  ListInstallationsForEntityIdRequest
    as _installmanager_api_ListInstallationsForEntityIdRequest,
  ListInstallationsForEntityIdResponse
    as _installmanager_api_ListInstallationsForEntityIdResponse,
} from "../__components.js";

/**
 * Lists installations for the requested entity id, sorted by namespace RID.
 * For non-Universal entities this returns at most one installation.
 * For Universal entities this returns all sub-installations, paginated.
 */
export async function listInstallationsForApolloEntityId(
  ctx: ConjureContext,
  apolloEntityId: _api_ApolloEntityId,
  request: _installmanager_api_ListInstallationsForEntityIdRequest,
): Promise<_installmanager_api_ListInstallationsForEntityIdResponse> {
  return conjureFetch(
    ctx,
    `/install-manager/installations/entity-id/${apolloEntityId}/list`,
    "POST",
    request,
  );
}
