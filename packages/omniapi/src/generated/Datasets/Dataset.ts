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

import type { OmniResource } from "@osdk/api";
import type * as $C from "../components.js";

export interface Dataset {
  /**
   * Creates a new Dataset. A default branch - `master` for most enrollments - will be created on the Dataset.
   *
   * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
   *
   * Required Scopes: [api:datasets-write]
   * URL: /v1/datasets
   */
  create: ($body: $C.CreateDatasetRequest) => Promise<$C.Dataset>;

  /**
   * Gets the Dataset with the given DatasetRid.
   *
   * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
   *
   * Required Scopes: [api:datasets-read]
   * URL: /v1/datasets/{datasetRid}
   */
  get: (datasetRid: $C.DatasetRid) => Promise<$C.Dataset>;

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
  readTable: (
    datasetRid: $C.DatasetRid,
    $queryParams: {
      branchId?: $C.BranchId;
      startTransactionRid?: $C.TransactionRid;
      endTransactionRid?: $C.TransactionRid;
      format: $C.TableExportFormat;
      columns: Array<string>;
      rowLimit?: number;
    },
  ) => Promise<unknown>;

  /**
   * Retrieves the Schema for a Dataset and Branch, if it exists.
   *
   * Required Scopes: [api:datasets-read]
   * URL: /v1/datasets/{datasetRid}/schema
   */
  getSchema: (
    datasetRid: $C.DatasetRid,
    $queryParams?: {
      branchId?: $C.BranchId;
      transactionRid?: $C.TransactionRid;
      preview?: $C.PreviewMode;
    },
  ) => Promise<any | undefined>;

  /**
   * Puts a Schema on an existing Dataset and Branch.
   *
   * Required Scopes: [api:datasets-write]
   * URL: /v1/datasets/{datasetRid}/schema
   */
  putSchema: (
    datasetRid: $C.DatasetRid,
    $body: any,
    $queryParams?: { branchId?: $C.BranchId; preview?: $C.PreviewMode },
  ) => Promise<void>;

  /**
   * Deletes the Schema from a Dataset and Branch.
   *
   * Required Scopes: [api:datasets-write]
   * URL: /v1/datasets/{datasetRid}/schema
   */
  deleteSchema: (
    datasetRid: $C.DatasetRid,
    $queryParams?: {
      branchId?: $C.BranchId;
      transactionRid?: $C.TransactionRid;
      preview?: $C.PreviewMode;
    },
  ) => Promise<void>;
}

export const Dataset: OmniResource<Dataset> = {
  type: "omniapi",
  methods: {
    create: [1, "/v1/datasets", 1],
    get: [0, "/v1/datasets/{0}"],
    readTable: [0, "/v1/datasets/{0}/readTable", , , "*/*"],
    getSchema: [0, "/v1/datasets/{0}/schema"],
    putSchema: [2, "/v1/datasets/{0}/schema", 1],
    deleteSchema: [3, "/v1/datasets/{0}/schema"],
  },
};
