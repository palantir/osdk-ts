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

import type { DatasetRidAndBranchId } from "./DatasetRidAndBranchId.js";
import type { GeotimeSeriesIntegrationRid } from "./GeotimeSeriesIntegrationRid.js";
import type { MediaSetViewLocator } from "./MediaSetViewLocator.js";
import type { MediaSourceRid } from "./MediaSourceRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { StreamLocator } from "./StreamLocator.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
export interface DatasourceIdentifier_datasetRidAndBranchId {
  type: "datasetRidAndBranchId";
  datasetRidAndBranchId: DatasetRidAndBranchId;
}

export interface DatasourceIdentifier_streamLocator {
  type: "streamLocator";
  streamLocator: StreamLocator;
}

export interface DatasourceIdentifier_restrictedViewRid {
  type: "restrictedViewRid";
  restrictedViewRid: RestrictedViewRid;
}

export interface DatasourceIdentifier_timeSeriesSyncRid {
  type: "timeSeriesSyncRid";
  timeSeriesSyncRid: TimeSeriesSyncRid;
}

export interface DatasourceIdentifier_restrictedStream {
  type: "restrictedStream";
  restrictedStream: RestrictedViewRid;
}

export interface DatasourceIdentifier_mediaSourceRids {
  type: "mediaSourceRids";
  mediaSourceRids: Array<MediaSourceRid>;
}

export interface DatasourceIdentifier_mediaSetView {
  type: "mediaSetView";
  mediaSetView: MediaSetViewLocator;
}

export interface DatasourceIdentifier_geotimeSeriesIntegrationRid {
  type: "geotimeSeriesIntegrationRid";
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
/**
 * Union type to represent the different datasource identifiers
 */
export type DatasourceIdentifier =
  | DatasourceIdentifier_datasetRidAndBranchId
  | DatasourceIdentifier_streamLocator
  | DatasourceIdentifier_restrictedViewRid
  | DatasourceIdentifier_timeSeriesSyncRid
  | DatasourceIdentifier_restrictedStream
  | DatasourceIdentifier_mediaSourceRids
  | DatasourceIdentifier_mediaSetView
  | DatasourceIdentifier_geotimeSeriesIntegrationRid;
