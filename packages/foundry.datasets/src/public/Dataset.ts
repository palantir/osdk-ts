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

import type { PreviewMode } from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type {
  BranchName,
  CreateDatasetRequest,
  Dataset,
  DatasetRid,
  TableExportFormat,
  TransactionRid,
} from "../_components.js";

//

const _createDataset: $FoundryPlatformMethod<
  (
    $body: CreateDatasetRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Dataset>
> = [1, "/v2/datasets", 3];

/**
 * Creates a new Dataset. A default branch - `master` for most enrollments - will be created on the Dataset.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets
 */
export function createDataset(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: CreateDatasetRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Dataset> {
  return $foundryPlatformFetch($ctx, _createDataset, ...args);
}

const _getDataset: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Dataset>
> = [0, "/v2/datasets/{0}", 2];

/**
 * Get the Dataset
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}
 */
export function getDataset(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Dataset> {
  return $foundryPlatformFetch($ctx, _getDataset, ...args);
}

const _readTableDataset: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams: {
      branchName?: BranchName | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
      format: TableExportFormat;
      columns: Array<string>;
      rowLimit?: number | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<Blob>
> = [0, "/v2/datasets/{0}/readTable", 2, , "application/octet-stream"];

/**
 * Gets the content of a dataset as a table in the specified format.
 *
 * This endpoint currently does not support views (Virtual datasets composed of other datasets).
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}/readTable
 */
export function readTableDataset(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,

    $queryParams: {
      branchName?: BranchName | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
      format: TableExportFormat;
      columns: Array<string>;
      rowLimit?: number | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _readTableDataset, ...args);
}
