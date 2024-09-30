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
import type * as _Datasets from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $body: _Datasets.CreateBranchRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Datasets.Branch>
> = [1, "/v2/datasets/{0}/branches", 3];

/**
 * Creates a branch on an existing dataset. A branch may optionally point to a (committed) transaction.
 *
 * @beta
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/branches
 */
export function create(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    $body: _Datasets.CreateBranchRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Datasets.Branch> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _deleteBranch: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    branchName: _Datasets.BranchName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/datasets/{0}/branches/{1}", 2];

/**
 * Deletes the Branch with the given BranchName.
 *
 * @beta
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/branches/{branchName}
 */
export function deleteBranch(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    branchName: _Datasets.BranchName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteBranch, ...args);
}

const _list: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Datasets.ListBranchesResponse>
> = [0, "/v2/datasets/{0}/branches", 2];

/**
 * Lists the Branches of a Dataset.
 *
 * @beta
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}/branches
 */
export function list(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Datasets.ListBranchesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    branchName: _Datasets.BranchName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Datasets.Branch>
> = [0, "/v2/datasets/{0}/branches/{1}", 2];

/**
 * Get a Branch of a Dataset.
 *
 * @beta
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}/branches/{branchName}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    branchName: _Datasets.BranchName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Datasets.Branch> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
