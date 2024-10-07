/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type * as _Core from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Filesystem from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    $body: _Filesystem.CreateFolderRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Folder>
> = [1, "/v2/filesystem/folders", 3];

/**
 * Creates a new Folder.
 *
 * @beta
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/folders
 */
export function create(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Filesystem.CreateFolderRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Folder> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    folderRid: _Filesystem.FolderRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Folder>
> = [0, "/v2/filesystem/folders/{0}", 2];

/**
 * Get the Folder with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:filesystem-read]
 * URL: /v2/filesystem/folders/{folderRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    folderRid: _Filesystem.FolderRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Folder> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _children: $FoundryPlatformMethod<
  (
    folderRid: _Filesystem.FolderRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Filesystem.ListChildrenOfFolderResponse>
> = [0, "/v2/filesystem/folders/{0}/children", 2];

/**
 * List all child Resources of the Folder.
 *
 * This is a paged endpoint. The page size will be limited to 2,000 results per page. If no page size is
 * provided, this page size will also be used as the default.
 *
 * @beta
 *
 * Required Scopes: []
 * URL: /v2/filesystem/folders/{folderRid}/children
 */
export function children(
  $ctx: $Client | $ClientContext,
  ...args: [
    folderRid: _Filesystem.FolderRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Filesystem.ListChildrenOfFolderResponse> {
  return $foundryPlatformFetch($ctx, _children, ...args);
}
