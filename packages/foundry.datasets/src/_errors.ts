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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * The provided token does not have permission to abort the given transaction on the given dataset.

   *
   * Log Safety: SAFE
   */
export interface AbortTransactionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AbortTransactionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
  };
}

/**
   * The branch cannot be created because a branch with that name already exists.

   *
   * Log Safety: UNSAFE
   */
export interface BranchAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "BranchAlreadyExists";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
   * The requested branch could not be found, or the client token does not have access to it.

   *
   * Log Safety: UNSAFE
   */
export interface BranchNotFound {
  errorCode: "NOT_FOUND";
  errorName: "BranchNotFound";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
   * The dataset contains column types that are not supported.

   *
   * Log Safety: SAFE
   */
export interface ColumnTypesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ColumnTypesNotSupported";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
  };
}

/**
   * The provided token does not have permission to commit the given transaction on the given dataset.

   *
   * Log Safety: SAFE
   */
export interface CommitTransactionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CommitTransactionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
  };
}

/**
   * The provided token does not have permission to create a branch of this dataset.

   *
   * Log Safety: UNSAFE
   */
export interface CreateBranchPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateBranchPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
   * The provided token does not have permission to create a dataset in this folder.

   *
   * Log Safety: UNSAFE
   */
export interface CreateDatasetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateDatasetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
    name: unknown;
  };
}

/**
   * The provided token does not have permission to create a transaction on this dataset.

   *
   * Log Safety: UNSAFE
   */
export interface CreateTransactionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateTransactionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
   * The requested dataset could not be found, or the client token does not have access to it.

   *
   * Log Safety: SAFE
   */
export interface DatasetNotFound {
  errorCode: "NOT_FOUND";
  errorName: "DatasetNotFound";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
  };
}

/**
   * The dataset does not support being read.

   *
   * Log Safety: SAFE
   */
export interface DatasetReadNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "DatasetReadNotSupported";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
  };
}

/**
   * The provided token does not have permission to delete the given branch from this dataset.

   *
   * Log Safety: UNSAFE
   */
export interface DeleteBranchPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteBranchPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
 * Could not delete the File.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteFilePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteFilePermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    filePath: unknown;
  };
}

/**
 * todo
 *
 * Log Safety: UNSAFE
 */
export interface DeleteSchemaPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteSchemaPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
    transactionId: unknown;
  };
}

/**
   * The given file path already exists in the dataset and transaction.

   *
   * Log Safety: UNSAFE
   */
export interface FileAlreadyExists {
  errorCode: "NOT_FOUND";
  errorName: "FileAlreadyExists";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
    path: unknown;
  };
}

/**
 * The given File could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface FileNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FileNotFound";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    filePath: unknown;
  };
}

/**
   * The requested file could not be found on the given branch, or the client token does not have access to it.

   *
   * Log Safety: UNSAFE
   */
export interface FileNotFoundOnBranch {
  errorCode: "NOT_FOUND";
  errorName: "FileNotFoundOnBranch";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
    path: unknown;
  };
}

/**
   * The requested file could not be found on the given transaction range, or the client token does not have access to it.

   *
   * Log Safety: UNSAFE
   */
export interface FileNotFoundOnTransactionRange {
  errorCode: "NOT_FOUND";
  errorName: "FileNotFoundOnTransactionRange";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    startTransactionRid: unknown;
    endTransactionRid: unknown;
    path: unknown;
  };
}

/**
 * Could not content the File.
 *
 * Log Safety: UNSAFE
 */
export interface GetFileContentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetFileContentPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    filePath: unknown;
  };
}

/**
   * The requested branch name cannot be used. Branch names cannot be empty and must not look like RIDs or UUIDs.

   *
   * Log Safety: UNSAFE
   */
export interface InvalidBranchName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidBranchName";
  errorInstanceId: string;
  parameters: {
    branchName: unknown;
  };
}

/**
   * The given transaction type is not valid. Valid transaction types are `SNAPSHOT`, `UPDATE`, `APPEND`, and `DELETE`.

   *
   * Log Safety: SAFE
   */
export interface InvalidTransactionType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidTransactionType";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
    transactionType: unknown;
  };
}

/**
   * A transaction is already open on this dataset and branch. A branch of a dataset can only have one open transaction at a time.

   *
   * Log Safety: UNSAFE
   */
export interface OpenTransactionAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "OpenTransactionAlreadyExists";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
 * todo
 *
 * Log Safety: UNSAFE
 */
export interface PutSchemaPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PutSchemaPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
  };
}

/**
 * Could not readTable the Dataset.
 *
 * Log Safety: SAFE
 */
export interface ReadTableDatasetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReadTableDatasetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
  };
}

/**
   * The provided token does not have permission to read the given dataset as a table.

   *
   * Log Safety: SAFE
   */
export interface ReadTablePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReadTablePermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
  };
}

/**
   * A schema could not be found for the given dataset and branch, or the client token does not have access to it.

   *
   * Log Safety: UNSAFE
   */
export interface SchemaNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SchemaNotFound";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    branchName: unknown;
    transactionRid: unknown;
  };
}

/**
   * The given transaction has not been committed.

   *
   * Log Safety: SAFE
   */
export interface TransactionNotCommitted {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TransactionNotCommitted";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
    transactionStatus: unknown;
  };
}

/**
   * The requested transaction could not be found on the dataset, or the client token does not have access to it.

   *
   * Log Safety: SAFE
   */
export interface TransactionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "TransactionNotFound";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
  };
}

/**
   * The given transaction is not open.

   *
   * Log Safety: SAFE
   */
export interface TransactionNotOpen {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TransactionNotOpen";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
    transactionStatus: unknown;
  };
}

/**
   * The provided token does not have permission to upload the given file to the given dataset and transaction.

   *
   * Log Safety: UNSAFE
   */
export interface UploadFilePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UploadFilePermissionDenied";
  errorInstanceId: string;
  parameters: {
    datasetRid: unknown;
    transactionRid: unknown;
    path: unknown;
  };
}
