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

import type {
  BlockSetId as _api_BlockSetId,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  BlockSetTag as _api_BlockSetTag,
  BlockSetTagCategory as _api_BlockSetTagCategory,
  BlockSetVersionId as _api_BlockSetVersionId,
  CreationTimestamp as _api_CreationTimestamp,
  MarketplaceFoundrySearchSecurityRid
    as _api_MarketplaceFoundrySearchSecurityRid,
  MarketplaceRid as _api_MarketplaceRid,
  MultipassUserId as _api_MultipassUserId,
  ProductDisplayVersion as _api_ProductDisplayVersion,
  ProductType as _api_ProductType,
  ProductVersionStatus as _api_ProductVersionStatus,
  TagRid as _api_TagRid,
  UpdatedAtTimestamp as _api_UpdatedAtTimestamp,
} from "../../api/__components.js";
export interface BlockSetSearchableTag {
  category: _api_BlockSetTagCategory;
  tags: _api_BlockSetTag;
}
export interface IndexedBlockSet {
  blockSetId: _api_BlockSetId;
  blockSetVersionId: _api_BlockSetVersionId;
  createdAt: _api_CreationTimestamp;
  description: string;
  displayVersion: _api_ProductDisplayVersion;
  marketplaceRid: _api_MarketplaceRid;
  marketplaceSecurityRid: _api_MarketplaceFoundrySearchSecurityRid;
  productName: string;
  productStatus: _api_ProductVersionStatus;
  productType: _api_ProductType;
  tags: Array<BlockSetSearchableTag>;
  typedTags: Array<_api_TagRid>;
}
/**
 * The compass index contains a last modified timestamp and lastModifiedBy field. However, for marketplace
 * installations, the lastModifiedBy is always the marketplace service user. The last modified timestamp is
 * the last timestamp the compass resource itself was edited. Hence, we need our own copies.
 */
export interface IndexedBlockSetInstallation {
  blockSetId: _api_BlockSetId;
  blockSetVersionId: _api_BlockSetVersionId;
  installationLastUpdatedAt: _api_UpdatedAtTimestamp;
  installationLastUpdatedBy: _api_MultipassUserId;
  marketplaceRid: _api_MarketplaceRid;
}
export interface IndexedInstallationJobMetadata {
  blockSetInstallations: Array<_api_BlockSetInstallationRid>;
  installationCreator: _api_MultipassUserId;
  installJobRid: IndexedInstallationJobRid;
  marketplaceRid: _api_MarketplaceRid;
  status: IndexedInstallationJobStatus;
  submittedAt: any;
}
export type IndexedInstallationJobRid = string;
export type IndexedInstallationJobStatus =
  | "IN_PROGRESS"
  | "BUILDING"
  | "SUCCESS"
  | "ERROR";
export interface IndexedMarketplaceTag {
  categoryName: string;
  marketplaceRid: _api_MarketplaceRid;
  tagName: string;
  tagRid: _api_TagRid;
}
