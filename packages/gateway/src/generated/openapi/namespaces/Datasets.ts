/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { Branch } from "../components/Branch.js";
import type { BranchId } from "../components/BranchId.js";
import type { CreateBranchRequest } from "../components/CreateBranchRequest.js";
import type { CreateDatasetRequest } from "../components/CreateDatasetRequest.js";
import type { CreateTransactionRequest } from "../components/CreateTransactionRequest.js";
import type { Dataset } from "../components/Dataset.js";
import type { DatasetRid } from "../components/DatasetRid.js";
import type { File } from "../components/File.js";
import type { FilePath } from "../components/FilePath.js";
import type { ListBranchesResponse } from "../components/ListBranchesResponse.js";
import type { ListFilesResponse } from "../components/ListFilesResponse.js";
import type { PageSize } from "../components/PageSize.js";
import type { PageToken } from "../components/PageToken.js";
import type { PreviewMode } from "../components/PreviewMode.js";
import type { TableExportFormat } from "../components/TableExportFormat.js";
import type { Transaction } from "../components/Transaction.js";
import type { TransactionRid } from "../components/TransactionRid.js";
import type { TransactionType } from "../components/TransactionType.js";
import type { OpenApiRequest } from "../request/index.js";

/**
 * Creates a new Dataset. A default branch - `master` for most enrollments - will be created on the Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 */
export function createDataset<TResponse>(
  _request: OpenApiRequest<Dataset, TResponse>,
  request: CreateDatasetRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/datasets`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Gets the Dataset with the given DatasetRid.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 */
export function getDataset<TResponse>(
  _request: OpenApiRequest<Dataset, TResponse>,
  datasetRid: DatasetRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * :::callout{theme=warning title=Warning}
 *   This endpoint is in preview and may be modified or removed at any time.
 *   To use this endpoint, add `preview=true` to the request query parameters.
 *   Furthermore, this endpoint currently does not support views (Virtual datasets composed of other datasets).
 * :::
 *
 * Gets the content of a dataset as a table in the specified format.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 */
export function readTable<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  datasetRid: DatasetRid,
  queryParameters: {
    branchId?: BranchId;
    startTransactionRid?: TransactionRid;
    endTransactionRid?: TransactionRid;
    format: TableExportFormat;
    columns: Array<string>;
    rowLimit?: number;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/readTable`,
    __undefined,
    queryParameters,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

/**
 * Retrieves the Schema for a Dataset and Branch, if it exists.
 */
export function getSchema<TResponse>(
  _request: OpenApiRequest<any, TResponse>,
  datasetRid: DatasetRid,
  queryParameters?: {
    branchId?: BranchId;
    transactionRid?: TransactionRid;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/schema`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Puts a Schema on an existing Dataset and Branch.
 */
export function putSchema<TResponse>(
  _request: OpenApiRequest<undefined, TResponse>,
  datasetRid: DatasetRid,
  request: any,
  queryParameters?: {
    branchId?: BranchId;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "PUT",
    `/v1/datasets/${datasetRid}/schema`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Deletes the Schema from a Dataset and Branch.
 */
export function deleteSchema<TResponse>(
  _request: OpenApiRequest<undefined, TResponse>,
  datasetRid: DatasetRid,
  queryParameters?: {
    branchId?: BranchId;
    transactionRid?: TransactionRid;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "DELETE",
    `/v1/datasets/${datasetRid}/schema`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Lists the Branches of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 */
export function listBranches<TResponse>(
  _request: OpenApiRequest<ListBranchesResponse, TResponse>,
  datasetRid: DatasetRid,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/branches`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Creates a branch on an existing dataset. A branch may optionally point to a (committed) transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 */
export function createBranch<TResponse>(
  _request: OpenApiRequest<Branch, TResponse>,
  datasetRid: DatasetRid,
  request: CreateBranchRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/datasets/${datasetRid}/branches`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Get a Branch of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 */
export function getBranch<TResponse>(
  _request: OpenApiRequest<Branch, TResponse>,
  datasetRid: DatasetRid,
  branchId: BranchId,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/branches/${branchId}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Deletes the Branch with the given BranchId.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 */
export function deleteBranch<TResponse>(
  _request: OpenApiRequest<undefined, TResponse>,
  datasetRid: DatasetRid,
  branchId: BranchId,
): Promise<TResponse> {
  return _request(
    "DELETE",
    `/v1/datasets/${datasetRid}/branches/${branchId}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Creates a Transaction on a Branch of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 */
export function createTransaction<TResponse>(
  _request: OpenApiRequest<Transaction, TResponse>,
  datasetRid: DatasetRid,
  request: CreateTransactionRequest,
  queryParameters?: {
    branchId?: BranchId;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/datasets/${datasetRid}/transactions`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a Transaction of a Dataset.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
 */
export function getTransaction<TResponse>(
  _request: OpenApiRequest<Transaction, TResponse>,
  datasetRid: DatasetRid,
  transactionRid: TransactionRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/transactions/${transactionRid}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Commits an open Transaction. File modifications made on this Transaction are preserved and the Branch is
 * updated to point to the Transaction.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 */
export function commitTransaction<TResponse>(
  _request: OpenApiRequest<Transaction, TResponse>,
  datasetRid: DatasetRid,
  transactionRid: TransactionRid,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/datasets/${datasetRid}/transactions/${transactionRid}/commit`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Aborts an open Transaction. File modifications made on this Transaction are not preserved and the Branch is
 * not updated.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
 */
export function abortTransaction<TResponse>(
  _request: OpenApiRequest<Transaction, TResponse>,
  datasetRid: DatasetRid,
  transactionRid: TransactionRid,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/datasets/${datasetRid}/transactions/${transactionRid}/abort`,
    __undefined,
    __undefined,
    __undefined,
  );
}

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
 */
export function listFiles<TResponse>(
  _request: OpenApiRequest<ListFilesResponse, TResponse>,
  datasetRid: DatasetRid,
  queryParameters?: {
    branchId?: BranchId;
    startTransactionRid?: TransactionRid;
    endTransactionRid?: TransactionRid;
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/files`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

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
 */
export function uploadFile<TResponse>(
  _request: OpenApiRequest<File, TResponse>,
  datasetRid: DatasetRid,
  request: ReadableStream<Uint8Array> | Blob,
  queryParameters: {
    filePath: FilePath;
    branchId?: BranchId;
    transactionType?: TransactionType;
    transactionRid?: TransactionRid;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/datasets/${datasetRid}/files:upload`,
    request,
    queryParameters,
    __undefined,
    __anyMediaType,
  );
}

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
 */
export function getFileMetadata<TResponse>(
  _request: OpenApiRequest<File, TResponse>,
  datasetRid: DatasetRid,
  filePath: FilePath,
  queryParameters?: {
    branchId?: BranchId;
    startTransactionRid?: TransactionRid;
    endTransactionRid?: TransactionRid;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/files/${filePath}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

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
 */
export function deleteFile<TResponse>(
  _request: OpenApiRequest<undefined, TResponse>,
  datasetRid: DatasetRid,
  filePath: FilePath,
  queryParameters?: {
    branchId?: BranchId;
    transactionRid?: TransactionRid;
  },
): Promise<TResponse> {
  return _request(
    "DELETE",
    `/v1/datasets/${datasetRid}/files/${filePath}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

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
 */
export function getFileContent<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  datasetRid: DatasetRid,
  filePath: FilePath,
  queryParameters?: {
    branchId?: BranchId;
    startTransactionRid?: TransactionRid;
    endTransactionRid?: TransactionRid;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/datasets/${datasetRid}/files/${filePath}/content`,
    __undefined,
    queryParameters,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
