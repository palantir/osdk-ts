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

import type { PageSize, PageToken, PreviewMode } from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type {
  Branch,
  BranchId,
  CreateBranchRequest,
  DatasetRid,
  ListBranchesResponse,
} from "../_components.js";

//

const _createBranch: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $body: CreateBranchRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Branch>
> = [1, "/v2/datasets/{0}/branches", 3];

/**
 * Creates a branch on an existing dataset. A branch may optionally point to a (committed) transaction.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/branches
 */
export function createBranch(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    $body: CreateBranchRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Branch> {
  return $foundryPlatformFetch($ctx, _createBranch, ...args);
}

const _deleteBranch: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    branchBranchId: BranchId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/datasets/{0}/branches/{1}", 2];

/**
 * Deletes the Branch with the given BranchId.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/branches/{branchBranchId}
 */
export function deleteBranch(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    branchBranchId: BranchId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteBranch, ...args);
}

const _listBranches: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<ListBranchesResponse>
> = [0, "/v2/datasets/{0}/branches", 2];

/**
 * Lists the Branches of a Dataset.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}/branches
 */
export function listBranches(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListBranchesResponse> {
  return $foundryPlatformFetch($ctx, _listBranches, ...args);
}

const _getBranch: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    branchBranchId: BranchId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Branch>
> = [0, "/v2/datasets/{0}/branches/{1}", 2];

/**
 * Get a Branch of a Dataset.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}/branches/{branchBranchId}
 */
export function getBranch(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    branchBranchId: BranchId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Branch> {
  return $foundryPlatformFetch($ctx, _getBranch, ...args);
}
