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

import type {
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";
import type * as $C from "../generated/components.js";

const _listBranches: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ) => Promise<$C.ListBranchesResponse>
> = [0, "/v1/datasets/{0}/branches"];

/**
 * Lists the Branches of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/branches
 */
export function listBranches(
  $ctx: $ClientContext<any>,
  ...args: [
    datasetRid: $C.DatasetRid,

    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ]
): Promise<$C.ListBranchesResponse> {
  return $omniFetch($ctx, _listBranches, ...args);
}

const _createBranch: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $body: $C.CreateBranchRequest,
  ) => Promise<$C.Branch>
> = [1, "/v1/datasets/{0}/branches", 1];

/**
 * Creates a branch on an existing dataset. A branch may optionally point to a (committed) transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/branches
 */
export function createBranch(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid, $body: $C.CreateBranchRequest]
): Promise<$C.Branch> {
  return $omniFetch($ctx, _createBranch, ...args);
}

const _getBranch: $OmniMethod<
  (datasetRid: $C.DatasetRid, branchId: $C.BranchId) => Promise<$C.Branch>
> = [0, "/v1/datasets/{0}/branches/{1}"];

/**
 * Get a Branch of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/branches/{branchId}
 */
export function getBranch(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid, branchId: $C.BranchId]
): Promise<$C.Branch> {
  return $omniFetch($ctx, _getBranch, ...args);
}

const _deleteBranch: $OmniMethod<
  (datasetRid: $C.DatasetRid, branchId: $C.BranchId) => Promise<void>
> = [3, "/v1/datasets/{0}/branches/{1}"];

/**
 * Deletes the Branch with the given BranchId.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/branches/{branchId}
 */
export function deleteBranch(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid, branchId: $C.BranchId]
): Promise<void> {
  return $omniFetch($ctx, _deleteBranch, ...args);
}
