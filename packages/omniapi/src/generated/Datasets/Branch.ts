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

export interface Branch {
  /**
   * Lists the Branches of a Dataset.
   *
   * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
   *
   * Required Scopes: [api:datasets-read]
   * URL: /v1/datasets/{datasetRid}/branches
   */
  iterator: (
    datasetRid: $C.DatasetRid,
    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ) => Promise<$C.ListBranchesResponse>;

  /**
   * Creates a branch on an existing dataset. A branch may optionally point to a (committed) transaction.
   *
   * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
   *
   * Required Scopes: [api:datasets-write]
   * URL: /v1/datasets/{datasetRid}/branches
   */
  create: (
    datasetRid: $C.DatasetRid,
    $body: $C.CreateBranchRequest,
  ) => Promise<$C.Branch>;

  /**
   * Get a Branch of a Dataset.
   *
   * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-read`.
   *
   * Required Scopes: [api:datasets-read]
   * URL: /v1/datasets/{datasetRid}/branches/{branchId}
   */
  get: (datasetRid: $C.DatasetRid, branchId: $C.BranchId) => Promise<$C.Branch>;

  /**
   * Deletes the Branch with the given BranchId.
   *
   * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.
   *
   * Required Scopes: [api:datasets-write]
   * URL: /v1/datasets/{datasetRid}/branches/{branchId}
   */
  delete: (datasetRid: $C.DatasetRid, branchId: $C.BranchId) => Promise<void>;
}

export const Branch: OmniResource<Branch> = {
  type: "omniapi",
  methods: {
    iterator: [0, "/v1/datasets/{0}/branches"],
    create: [1, "/v1/datasets/{0}/branches", 1],
    get: [0, "/v1/datasets/{0}/branches/{1}"],
    delete: [3, "/v1/datasets/{0}/branches/{1}"],
  },
};
