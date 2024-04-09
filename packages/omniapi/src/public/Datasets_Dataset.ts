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

const _createDataset: $OmniMethod<
  ($body: $C.CreateDatasetRequest) => Promise<$C.Dataset>
> = [1, "/v1/datasets", 1];

/**
 * Creates a new Dataset. A default branch - `master` for most enrollments - will be created on the Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets
 */
export function createDataset(
  $ctx: $ClientContext<any>,
  ...args: [$body: $C.CreateDatasetRequest]
): Promise<$C.Dataset> {
  return $omniFetch($ctx, _createDataset, ...args);
}

const _getDataset: $OmniMethod<
  (datasetRid: $C.DatasetRid) => Promise<$C.Dataset>
> = [0, "/v1/datasets/{0}"];

/**
 * Gets the Dataset with the given DatasetRid.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}
 */
export function getDataset(
  $ctx: $ClientContext<any>,
  ...args: [datasetRid: $C.DatasetRid]
): Promise<$C.Dataset> {
  return $omniFetch($ctx, _getDataset, ...args);
}

const _readTable: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $queryParams: {
      branchId?: $C.BranchId;
      startTransactionRid?: $C.TransactionRid;
      endTransactionRid?: $C.TransactionRid;
      format: $C.TableExportFormat;
      columns: Array<string>;
      rowLimit?: number;
    },
  ) => Promise<unknown>
> = [0, "/v1/datasets/{0}/readTable", , , "*/*"];

/**
 * Gets the content of a dataset as a table in the specified format.
 *
 * This endpoint currently does not support views (Virtual datasets composed of other datasets).
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/readTable
 */
export function readTable(
  $ctx: $ClientContext<any>,
  ...args: [
    datasetRid: $C.DatasetRid,

    $queryParams: {
      branchId?: $C.BranchId;
      startTransactionRid?: $C.TransactionRid;
      endTransactionRid?: $C.TransactionRid;
      format: $C.TableExportFormat;
      columns: Array<string>;
      rowLimit?: number;
    },
  ]
): Promise<unknown> {
  return $omniFetch($ctx, _readTable, ...args);
}

const _getSchema: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $queryParams?: {
      branchId?: $C.BranchId;
      transactionRid?: $C.TransactionRid;
      preview?: $C.PreviewMode;
    },
  ) => Promise<any | undefined>
> = [0, "/v1/datasets/{0}/schema"];

/**
 * Retrieves the Schema for a Dataset and Branch, if it exists.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/schema
 */
export function getSchema(
  $ctx: $ClientContext<any>,
  ...args: [
    datasetRid: $C.DatasetRid,

    $queryParams?: {
      branchId?: $C.BranchId;
      transactionRid?: $C.TransactionRid;
      preview?: $C.PreviewMode;
    },
  ]
): Promise<any | undefined> {
  return $omniFetch($ctx, _getSchema, ...args);
}

const _putSchema: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $body: any,
    $queryParams?: { branchId?: $C.BranchId; preview?: $C.PreviewMode },
  ) => Promise<void>
> = [2, "/v1/datasets/{0}/schema", 1];

/**
 * Puts a Schema on an existing Dataset and Branch.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/schema
 */
export function putSchema(
  $ctx: $ClientContext<any>,
  ...args: [
    datasetRid: $C.DatasetRid,
    $body: any,
    $queryParams?: { branchId?: $C.BranchId; preview?: $C.PreviewMode },
  ]
): Promise<void> {
  return $omniFetch($ctx, _putSchema, ...args);
}

const _deleteSchema: $OmniMethod<
  (
    datasetRid: $C.DatasetRid,
    $queryParams?: {
      branchId?: $C.BranchId;
      transactionRid?: $C.TransactionRid;
      preview?: $C.PreviewMode;
    },
  ) => Promise<void>
> = [3, "/v1/datasets/{0}/schema"];

/**
 * Deletes the Schema from a Dataset and Branch.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/schema
 */
export function deleteSchema(
  $ctx: $ClientContext<any>,
  ...args: [
    datasetRid: $C.DatasetRid,

    $queryParams?: {
      branchId?: $C.BranchId;
      transactionRid?: $C.TransactionRid;
      preview?: $C.PreviewMode;
    },
  ]
): Promise<void> {
  return $omniFetch($ctx, _deleteSchema, ...args);
}
