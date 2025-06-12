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
  ListManagedNamespacesRequest
    as _installmanager_api_ListManagedNamespacesRequest,
  ListManagedNamespacesResponse
    as _installmanager_api_ListManagedNamespacesResponse,
} from "../__components.js";

/**
 * Get the list of all namespaces managed by MIM, which are the namespaces that can get installed into.
 * This returns only installations on which the user has installation permissions.
 */
export async function listManagedNamespaces(
  ctx: ConjureContext,
  request: _installmanager_api_ListManagedNamespacesRequest,
): Promise<_installmanager_api_ListManagedNamespacesResponse> {
  return conjureFetch(
    ctx,
    `/install-manager/managed-namespaces`,
    "POST",
    request,
  );
}
