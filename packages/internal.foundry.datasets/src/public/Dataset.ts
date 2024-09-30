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

import type * as _Core from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Datasets from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  ($body: _Datasets.CreateDatasetRequest) => Promise<_Datasets.Dataset>
> = [1, "/v1/datasets", 1];

/**
 * Creates a new Dataset. A default branch - `master` for most enrollments - will be created on the Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets
 */
export function create(
  $ctx: $Client | $ClientContext,
  ...args: [$body: _Datasets.CreateDatasetRequest]
): Promise<_Datasets.Dataset> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (datasetRid: _Datasets.DatasetRid) => Promise<_Datasets.Dataset>
> = [0, "/v1/datasets/{0}"];

/**
 * Gets the Dataset with the given DatasetRid.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [datasetRid: _Datasets.DatasetRid]
): Promise<_Datasets.Dataset> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _read: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $queryParams: {
      branchId?: _Datasets.BranchId | undefined;
      startTransactionRid?: _Datasets.TransactionRid | undefined;
      endTransactionRid?: _Datasets.TransactionRid | undefined;
      format: _Datasets.TableExportFormat;
      columns: Array<string>;
      rowLimit?: number | undefined;
    },
  ) => Promise<Blob>
> = [0, "/v1/datasets/{0}/readTable", 2, , "*/*"];

/**
 * Gets the content of a dataset as a table in the specified format.
 *
 * This endpoint currently does not support views (Virtual datasets composed of other datasets).
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * @public
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/readTable
 */
export function read(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,

    $queryParams: {
      branchId?: _Datasets.BranchId | undefined;
      startTransactionRid?: _Datasets.TransactionRid | undefined;
      endTransactionRid?: _Datasets.TransactionRid | undefined;
      format: _Datasets.TableExportFormat;
      columns: Array<string>;
      rowLimit?: number | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _read, ...args);
}

const _replaceSchema: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $body: any,
    $queryParams?: {
      branchId?: _Datasets.BranchId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<void>
> = [2, "/v1/datasets/{0}/schema", 3];

/**
 * Puts a Schema on an existing Dataset and Branch.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/schema
 */
export function replaceSchema(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    $body: any,
    $queryParams?: {
      branchId?: _Datasets.BranchId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _replaceSchema, ...args);
}

const _getSchema: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $queryParams?: {
      branchId?: _Datasets.BranchId | undefined;
      transactionRid?: _Datasets.TransactionRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<any | undefined>
> = [0, "/v1/datasets/{0}/schema", 2];

/**
 * Retrieves the Schema for a Dataset and Branch, if it exists.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/schema
 */
export function getSchema(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,

    $queryParams?: {
      branchId?: _Datasets.BranchId | undefined;
      transactionRid?: _Datasets.TransactionRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<any | undefined> {
  return $foundryPlatformFetch($ctx, _getSchema, ...args);
}

const _deleteSchema: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $queryParams?: {
      branchId?: _Datasets.BranchId | undefined;
      transactionRid?: _Datasets.TransactionRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<void>
> = [3, "/v1/datasets/{0}/schema", 2];

/**
 * Deletes the Schema from a Dataset and Branch.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/schema
 */
export function deleteSchema(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,

    $queryParams?: {
      branchId?: _Datasets.BranchId | undefined;
      transactionRid?: _Datasets.TransactionRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteSchema, ...args);
}
