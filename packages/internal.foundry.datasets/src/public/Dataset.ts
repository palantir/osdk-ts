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

import type { PreviewMode } from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type {
  BranchId,
  CreateDatasetRequest,
  Dataset,
  DatasetRid,
  TableExportFormat,
  TransactionRid,
} from "../_components.js";

//

const _createDataset: $FoundryPlatformMethod<
  ($body: CreateDatasetRequest) => Promise<Dataset>
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
export function createDataset(
  $ctx: $Client | $ClientContext,
  ...args: [$body: CreateDatasetRequest]
): Promise<Dataset> {
  return $foundryPlatformFetch($ctx, _createDataset, ...args);
}

const _getDataset: $FoundryPlatformMethod<
  (datasetRid: DatasetRid) => Promise<Dataset>
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
export function getDataset(
  $ctx: $Client | $ClientContext,
  ...args: [datasetRid: DatasetRid]
): Promise<Dataset> {
  return $foundryPlatformFetch($ctx, _getDataset, ...args);
}

const _readTable: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
      format: TableExportFormat;
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
export function readTable(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,

    $queryParams: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
      format: TableExportFormat;
      columns: Array<string>;
      rowLimit?: number | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _readTable, ...args);
}

const _putSchema: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $body: any,
    $queryParams?: {
      branchId?: BranchId | undefined;
      preview?: PreviewMode | undefined;
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
export function putSchema(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    $body: any,
    $queryParams?: {
      branchId?: BranchId | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _putSchema, ...args);
}

const _getSchema: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams?: {
      branchId?: BranchId | undefined;
      transactionRid?: TransactionRid | undefined;
      preview?: PreviewMode | undefined;
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
    datasetRid: DatasetRid,

    $queryParams?: {
      branchId?: BranchId | undefined;
      transactionRid?: TransactionRid | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<any | undefined> {
  return $foundryPlatformFetch($ctx, _getSchema, ...args);
}

const _deleteSchema: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams?: {
      branchId?: BranchId | undefined;
      transactionRid?: TransactionRid | undefined;
      preview?: PreviewMode | undefined;
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
    datasetRid: DatasetRid,

    $queryParams?: {
      branchId?: BranchId | undefined;
      transactionRid?: TransactionRid | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteSchema, ...args);
}
