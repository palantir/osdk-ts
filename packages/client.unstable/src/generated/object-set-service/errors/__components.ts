/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { OwningRid as _api_OwningRid } from "../api/__components.js";

/**
 * Represents a metric or aggregation name.
 */
export type AggregationEntityName = string;
export interface BlockListingReason_applicationRid {
  type: "applicationRid";
  applicationRid: _api_OwningRid;
}

export interface BlockListingReason_userId {
  type: "userId";
  userId: MultipassUserId;
}

export interface BlockListingReason_groupIds {
  type: "groupIds";
  groupIds: Array<MultipassGroupId>;
}

export interface BlockListingReason_organizationRids {
  type: "organizationRids";
  organizationRids: Array<OrganizationRid>;
}
/**
 * The reason for blocklisting a query. The blocklisted query will either originate from a blocklisted
 * application or blocklisted user (either directly or via group / organization membership)
 */
export type BlockListingReason =
  | BlockListingReason_applicationRid
  | BlockListingReason_userId
  | BlockListingReason_groupIds
  | BlockListingReason_organizationRids;

/**
 * The scope of the blocklisting for a blocklisted query.
 */
export type BlockListingScope = "DERIVED_PROPERTIES";

/**
 * Object counts for a consistent paging request which returned inconsistent counts.
 */
export interface InconsistentObjectCounts {
  isLastPage: boolean;
  numObjectsReturnedNow: number;
  numObjectsReturnedUntilNow: number;
  totalNumExpectedObjects: number;
}
/**
 * The group ID of the group that is being blocklisted.
 */
export type MultipassGroupId = string;

/**
 * The user ID of the user who is being blocklisted.
 */
export type MultipassUserId = string;

/**
 * The reason why there are not enough resources to perform the requested operation.
 */
export type NotEnoughResourcesReason =
  | "TOO_MANY_SPARK_JOBS_QUEUED"
  | "SPARK_MODULE_QUEUEING_TIMEOUT"
  | "SPARK_MODULE_RUNTIME_TIMEOUT";

/**
 * The organization RID of the organization that is being blocklisted.
 */
export type OrganizationRid = string;
