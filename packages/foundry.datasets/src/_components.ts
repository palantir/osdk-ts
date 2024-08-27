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

import type { FilePath, PageToken } from "@osdk/foundry.core";
import type { FolderRid } from "@osdk/foundry.filesystem";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface Branch {
  name: BranchName;
  transactionRid?: TransactionRid;
}

/**
 * The name of a Branch.
 *
 * Log Safety: UNSAFE
 */
export type BranchName = LooselyBrandedString<"BranchName">;

/**
 * Log Safety: UNSAFE
 */
export interface CreateBranchRequest {
  transactionRid?: TransactionRid;
  name: BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateDatasetRequest {
  parentFolderRid: FolderRid;
  name: DatasetName;
}

/**
 * Log Safety: SAFE
 */
export interface CreateTransactionRequest {
  transactionType: TransactionType;
}

/**
 * Log Safety: UNSAFE
 */
export interface Dataset {
  rid: DatasetRid;
  name: DatasetName;
  parentFolderRid: FolderRid;
}

/**
 * Log Safety: UNSAFE
 */
export type DatasetName = LooselyBrandedString<"DatasetName">;

/**
 * The Resource Identifier (RID) of a Dataset.
 *
 * Log Safety: SAFE
 */
export type DatasetRid = LooselyBrandedString<"DatasetRid">;

/**
 * Log Safety: UNSAFE
 */
export interface File {
  path: FilePath;
  transactionRid: TransactionRid;
  sizeBytes?: string;
  updatedTime: FileUpdatedTime;
}

/**
 * Log Safety: UNSAFE
 */
export type FileUpdatedTime = string;

/**
 * Log Safety: UNSAFE
 */
export interface ListBranchesResponse {
  data: Array<Branch>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListFilesResponse {
  data: Array<File>;
  nextPageToken?: PageToken;
}

/**
 * Format for tabular dataset export.
 *
 * Log Safety: SAFE
 */
export type TableExportFormat = "ARROW" | "CSV";

/**
 * Log Safety: UNSAFE
 */
export interface Transaction {
  rid: TransactionRid;
  transactionType: TransactionType;
  status: TransactionStatus;
  createdTime: TransactionCreatedTime;
  closedTime?: string;
}

/**
 * The timestamp when the transaction was created, in ISO 8601 timestamp format.
 *
 * Log Safety: UNSAFE
 */
export type TransactionCreatedTime = string;

/**
 * The Resource Identifier (RID) of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionRid = LooselyBrandedString<"TransactionRid">;

/**
 * The status of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionStatus = "ABORTED" | "COMMITTED" | "OPEN";

/**
 * The type of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionType = "APPEND" | "UPDATE" | "SNAPSHOT" | "DELETE";
