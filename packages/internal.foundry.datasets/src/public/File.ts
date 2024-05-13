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
  BranchId,
  DatasetRid,
  FilePath,
  PageSize,
  PageToken,
} from "@osdk/internal.foundry.core";
import type {
  FoundryPlatformMethod as $FoundryPlatformMethod,
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.net";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net";
import type {
  File,
  ListFilesResponse,
  TransactionRid,
  TransactionType,
} from "../_components.js";

//

const _listFiles: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams?: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ) => Promise<ListFilesResponse>
> = [0, "/v1/datasets/{0}/files", 2];

/**
 * Lists Files contained in a Dataset. By default files are listed on the latest view of the default
 * branch - `master` for most enrollments.
 *
 * #### Advanced Usage
 *
 * See [Datasets Core Concepts](/docs/foundry/data-integration/datasets/) for details on using branches and transactions.
 *
 * To **list files on a specific Branch** specify the Branch's identifier as `branchId`. This will include the most
 * recent version of all files since the latest snapshot transaction, or the earliest ancestor transaction of the
 * branch if there are no snapshot transactions.
 *
 * To **list files on the resolved view of a transaction** specify the Transaction's resource identifier
 * as `endTransactionRid`. This will include the most recent version of all files since the latest snapshot
 * transaction, or the earliest ancestor transaction if there are no snapshot transactions.
 *
 * To **list files on the resolved view of a range of transactions** specify the the start transaction's resource
 * identifier as `startTransactionRid` and the end transaction's resource identifier as `endTransactionRid`. This
 * will include the most recent version of all files since the `startTransactionRid` up to the `endTransactionRid`.
 * Note that an intermediate snapshot transaction will remove all files from the view. Behavior is undefined when
 * the start and end transactions do not belong to the same root-to-leaf path.
 *
 * To **list files on a specific transaction** specify the Transaction's resource identifier as both the
 * `startTransactionRid` and `endTransactionRid`. This will include only files that were modified as part of that
 * Transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/files
 */
export function listFiles(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,

    $queryParams?: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ]
): Promise<ListFilesResponse> {
  return $foundryPlatformFetch($ctx, _listFiles, ...args);
}

const _uploadFile: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $queryParams: {
      filePath: FilePath;
      branchId?: BranchId | undefined;
      transactionType?: TransactionType | undefined;
      transactionRid?: TransactionRid | undefined;
    },
  ) => Promise<File>
> = [1, "/v1/datasets/{0}/files:upload", 2, "*/*"];

/**
 * Uploads a File to an existing Dataset.
 * The body of the request must contain the binary content of the file and the `Content-Type` header must be `application/octet-stream`.
 *
 * By default the file is uploaded to a new transaction on the default branch - `master` for most enrollments.
 * If the file already exists only the most recent version will be visible in the updated view.
 *
 * #### Advanced Usage
 *
 * See [Datasets Core Concepts](/docs/foundry/data-integration/datasets/) for details on using branches and transactions.
 *
 * To **upload a file to a specific Branch** specify the Branch's identifier as `branchId`. A new transaction will
 * be created and committed on this branch. By default the TransactionType will be `UPDATE`, to override this
 * default specify `transactionType` in addition to `branchId`.
 * See [createBranch](/docs/foundry/api/datasets-resources/branches/create-branch/) to create a custom branch.
 *
 * To **upload a file on a manually opened transaction** specify the Transaction's resource identifier as
 * `transactionRid`. This is useful for uploading multiple files in a single transaction.
 * See [createTransaction](/docs/foundry/api/datasets-resources/transactions/create-transaction/) to open a transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/files:upload
 */
export function uploadFile(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,

    $queryParams: {
      filePath: FilePath;
      branchId?: BranchId | undefined;
      transactionType?: TransactionType | undefined;
      transactionRid?: TransactionRid | undefined;
    },
  ]
): Promise<File> {
  return $foundryPlatformFetch($ctx, _uploadFile, ...args);
}

const _getFileMetadata: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    filePath: FilePath,
    $queryParams?: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
    },
  ) => Promise<File>
> = [0, "/v1/datasets/{0}/files/{1}", 2];

/**
 * Gets metadata about a File contained in a Dataset. By default this retrieves the file's metadata from the latest
 * view of the default branch - `master` for most enrollments.
 *
 * #### Advanced Usage
 *
 * See [Datasets Core Concepts](/docs/foundry/data-integration/datasets/) for details on using branches and transactions.
 *
 * To **get a file's metadata from a specific Branch** specify the Branch's identifier as `branchId`. This will
 * retrieve metadata for the most recent version of the file since the latest snapshot transaction, or the earliest
 * ancestor transaction of the branch if there are no snapshot transactions.
 *
 * To **get a file's metadata from the resolved view of a transaction** specify the Transaction's resource identifier
 * as `endTransactionRid`. This will retrieve metadata for the most recent version of the file since the latest snapshot
 * transaction, or the earliest ancestor transaction if there are no snapshot transactions.
 *
 * To **get a file's metadata from the resolved view of a range of transactions** specify the the start transaction's
 * resource identifier as `startTransactionRid` and the end transaction's resource identifier as `endTransactionRid`.
 * This will retrieve metadata for the most recent version of the file since the `startTransactionRid` up to the
 * `endTransactionRid`. Behavior is undefined when the start and end transactions do not belong to the same root-to-leaf path.
 *
 * To **get a file's metadata from a specific transaction** specify the Transaction's resource identifier as both the
 * `startTransactionRid` and `endTransactionRid`.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/files/{filePath}
 */
export function getFileMetadata(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    filePath: FilePath,

    $queryParams?: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
    },
  ]
): Promise<File> {
  return $foundryPlatformFetch($ctx, _getFileMetadata, ...args);
}

const _deleteFile: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    filePath: FilePath,
    $queryParams?: {
      branchId?: BranchId | undefined;
      transactionRid?: TransactionRid | undefined;
    },
  ) => Promise<void>
> = [3, "/v1/datasets/{0}/files/{1}", 2];

/**
 * Deletes a File from a Dataset. By default the file is deleted in a new transaction on the default
 * branch - `master` for most enrollments. The file will still be visible on historical views.
 *
 * #### Advanced Usage
 *
 * See [Datasets Core Concepts](/docs/foundry/data-integration/datasets/) for details on using branches and transactions.
 *
 * To **delete a File from a specific Branch** specify the Branch's identifier as `branchId`. A new delete Transaction
 * will be created and committed on this branch.
 *
 * To **delete a File using a manually opened Transaction**, specify the Transaction's resource identifier
 * as `transactionRid`. The transaction must be of type `DELETE`. This is useful for deleting multiple files in a
 * single transaction. See [createTransaction](/docs/foundry/api/datasets-resources/transactions/create-transaction/) to
 * open a transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v1/datasets/{datasetRid}/files/{filePath}
 */
export function deleteFile(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    filePath: FilePath,

    $queryParams?: {
      branchId?: BranchId | undefined;
      transactionRid?: TransactionRid | undefined;
    },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteFile, ...args);
}

const _getFileContent: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    filePath: FilePath,
    $queryParams?: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
    },
  ) => Promise<unknown>
> = [0, "/v1/datasets/{0}/files/{1}/content", 2, , "*/*"];

/**
 * Gets the content of a File contained in a Dataset. By default this retrieves the file's content from the latest
 * view of the default branch - `master` for most enrollments.
 *
 * #### Advanced Usage
 *
 * See [Datasets Core Concepts](/docs/foundry/data-integration/datasets/) for details on using branches and transactions.
 *
 * To **get a file's content from a specific Branch** specify the Branch's identifier as `branchId`. This will
 * retrieve the content for the most recent version of the file since the latest snapshot transaction, or the
 * earliest ancestor transaction of the branch if there are no snapshot transactions.
 *
 * To **get a file's content from the resolved view of a transaction** specify the Transaction's resource identifier
 * as `endTransactionRid`. This will retrieve the content for the most recent version of the file since the latest
 * snapshot transaction, or the earliest ancestor transaction if there are no snapshot transactions.
 *
 * To **get a file's content from the resolved view of a range of transactions** specify the the start transaction's
 * resource identifier as `startTransactionRid` and the end transaction's resource identifier as `endTransactionRid`.
 * This will retrieve the content for the most recent version of the file since the `startTransactionRid` up to the
 * `endTransactionRid`. Note that an intermediate snapshot transaction will remove all files from the view. Behavior
 * is undefined when the start and end transactions do not belong to the same root-to-leaf path.
 *
 * To **get a file's content from a specific transaction** specify the Transaction's resource identifier as both the
 * `startTransactionRid` and `endTransactionRid`.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v1/datasets/{datasetRid}/files/{filePath}/content
 */
export function getFileContent(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    filePath: FilePath,

    $queryParams?: {
      branchId?: BranchId | undefined;
      startTransactionRid?: TransactionRid | undefined;
      endTransactionRid?: TransactionRid | undefined;
    },
  ]
): Promise<unknown> {
  return $foundryPlatformFetch($ctx, _getFileContent, ...args);
}
