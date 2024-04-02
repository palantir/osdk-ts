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

const _createTransaction: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $body: $C.CreateTransactionRequest,
    $queryParams?: { branchId?: $C.BranchId },
  ) => Promise<$C.Transaction>
> = [1, "/v1/datasets/{0}/transactions", 1];

/**
 * Creates a Transaction on a Branch of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/transactions
 */
export function createTransaction(
  $ctx: $ClientContext<any>,
  ...args: [
    datasetRid: $C.DatasetRid,
    $body: $C.CreateTransactionRequest,
    $queryParams?: { branchId?: $C.BranchId },
  ]
): Promise<$C.Transaction> {
  return $omniFetch($ctx, _createTransaction, ...args);
}

const _getTransaction: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    transactionRid: $C.TransactionRid,
  ) => Promise<$C.Transaction>
> = [0, "/v1/datasets/{0}/transactions/{1}"];

/**
 * Gets a Transaction of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/transactions/{transactionRid}
 */
export function getTransaction(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid, transactionRid: $C.TransactionRid]
): Promise<$C.Transaction> {
  return $omniFetch($ctx, _getTransaction, ...args);
}

const _commitTransaction: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    transactionRid: $C.TransactionRid,
  ) => Promise<$C.Transaction>
> = [1, "/v1/datasets/{0}/transactions/{1}/commit"];

/**
 * Commits an open Transaction. File modifications made on this Transaction are preserved and the Branch is
 * updated to point to the Transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/transactions/{transactionRid}/commit
 */
export function commitTransaction(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid, transactionRid: $C.TransactionRid]
): Promise<$C.Transaction> {
  return $omniFetch($ctx, _commitTransaction, ...args);
}

const _abortTransaction: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    transactionRid: $C.TransactionRid,
  ) => Promise<$C.Transaction>
> = [1, "/v1/datasets/{0}/transactions/{1}/abort"];

/**
 * Aborts an open Transaction. File modifications made on this Transaction are not preserved and the Branch is
 * not updated.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/transactions/{transactionRid}/abort
 */
export function abortTransaction(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid, transactionRid: $C.TransactionRid]
): Promise<$C.Transaction> {
  return $omniFetch($ctx, _abortTransaction, ...args);
}
