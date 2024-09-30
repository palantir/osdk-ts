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
    $body: _Datasets.CreateTransactionRequest,
    $queryParams?: { branchId?: _Datasets.BranchId | undefined },
  ) => Promise<_Datasets.Transaction>
> = [1, "/v1/datasets/{0}/transactions", 3];

/**
 * Creates a Transaction on a Branch of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/transactions
 */
export function create(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    $body: _Datasets.CreateTransactionRequest,
    $queryParams?: { branchId?: _Datasets.BranchId | undefined },
  ]
): Promise<_Datasets.Transaction> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    transactionRid: _Datasets.TransactionRid,
  ) => Promise<_Datasets.Transaction>
> = [0, "/v1/datasets/{0}/transactions/{1}"];

/**
 * Gets a Transaction of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/transactions/{transactionRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    transactionRid: _Datasets.TransactionRid,
  ]
): Promise<_Datasets.Transaction> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _commit: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    transactionRid: _Datasets.TransactionRid,
  ) => Promise<_Datasets.Transaction>
> = [1, "/v1/datasets/{0}/transactions/{1}/commit"];

/**
 * Commits an open Transaction. File modifications made on this Transaction are preserved and the Branch is
 * updated to point to the Transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/transactions/{transactionRid}/commit
 */
export function commit(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    transactionRid: _Datasets.TransactionRid,
  ]
): Promise<_Datasets.Transaction> {
  return $foundryPlatformFetch($ctx, _commit, ...args);
}

const _abort: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    transactionRid: _Datasets.TransactionRid,
  ) => Promise<_Datasets.Transaction>
> = [1, "/v1/datasets/{0}/transactions/{1}/abort"];

/**
 * Aborts an open Transaction. File modifications made on this Transaction are not preserved and the Branch is
 * not updated.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/transactions/{transactionRid}/abort
 */
export function abort(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    transactionRid: _Datasets.TransactionRid,
  ]
): Promise<_Datasets.Transaction> {
  return $foundryPlatformFetch($ctx, _abort, ...args);
}
