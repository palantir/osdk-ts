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
  FilePath,
  FolderRid,
  PageToken,
} from "@osdk/internal.foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The identifier (name) of a Branch. Example: master.
 *
 * Log Safety: UNSAFE
 */
export type BranchId = LooselyBrandedString<"BranchId">;

/**
 * The type of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionType = "APPEND" | "UPDATE" | "SNAPSHOT" | "DELETE";

/**
 * Log Safety: UNSAFE
 */
export interface ListBranchesResponse {
  nextPageToken?: PageToken;
  data: Array<Branch>;
}

/**
 * The Resource Identifier (RID) of a Dataset. Example: ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da.
 *
 * Log Safety: SAFE
 */
export type DatasetRid = LooselyBrandedString<"DatasetRid">;

/**
 * Log Safety: UNSAFE
 */
export type DatasetName = LooselyBrandedString<"DatasetName">;

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
export interface CreateBranchRequest {
  branchId: BranchId;
  transactionRid?: TransactionRid;
}

/**
 * An operation that modifies the files within a dataset.
 *
 * Log Safety: UNSAFE
 */
export interface Transaction {
  rid: TransactionRid;
  transactionType: TransactionType;
  status: TransactionStatus;
  createdTime: string;
  closedTime?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface File {
  path: FilePath;
  transactionRid: TransactionRid;
  sizeBytes?: string;
  updatedTime: string;
}

/**
 * The Resource Identifier (RID) of a Transaction. Example: ri.foundry.main.transaction.0a0207cb-26b7-415b-bc80-66a3aa3933f4.
 *
 * Log Safety: SAFE
 */
export type TransactionRid = LooselyBrandedString<"TransactionRid">;

/**
 * Format for tabular dataset export.
 *
 * Log Safety: SAFE
 */
export type TableExportFormat = "ARROW" | "CSV";

/**
 * Log Safety: UNSAFE
 */
export interface CreateDatasetRequest {
  name: DatasetName;
  parentFolderRid: FolderRid;
}

/**
 * The status of a Transaction.
 *
 * Log Safety: SAFE
 */
export type TransactionStatus = "ABORTED" | "COMMITTED" | "OPEN";

/**
 * A Branch of a Dataset.
 *
 * Log Safety: UNSAFE
 */
export interface Branch {
  branchId: BranchId;
  transactionRid?: TransactionRid;
}

/**
 * A page of Files and an optional page token that can be used to retrieve the next page.
 *
 * Log Safety: UNSAFE
 */
export interface ListFilesResponse {
  nextPageToken?: PageToken;
  data: Array<File>;
}

/**
 * Log Safety: SAFE
 */
export interface CreateTransactionRequest {
  transactionType?: TransactionType;
}

/**
 * A path in the Foundry file tree.
 *
 * Log Safety: UNSAFE
 */
export type ResourcePath = LooselyBrandedString<"ResourcePath">;
