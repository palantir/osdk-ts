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
import type { NamespaceRid as _api_NamespaceRid } from "../../../api/__components.js";
import type { InstallManagerNamespace as _installmanager_api_InstallManagerNamespace } from "../__components.js";

/**
 * Retrieves information about a managed namespace, including its settings and maven group ID. The user must
 * have view permissions on the namespace, otherwise the endpoint will throw.  This endpoint does NOT require
 * marketplace:use-install-manager on the marketplace root rid -permissions will be fully checked on the
 * namespace rid instead.
 */
export async function getInstallManagerNamespace(
  ctx: ConjureContext,
  namespaceRid: _api_NamespaceRid,
): Promise<_installmanager_api_InstallManagerNamespace> {
  return conjureFetch(
    ctx,
    `/install-manager/namespaces/${namespaceRid}`,
    "GET",
  );
}
