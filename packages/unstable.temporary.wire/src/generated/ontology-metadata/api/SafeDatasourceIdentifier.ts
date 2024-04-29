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

import type { DatasetRid } from "./DatasetRid.js";
import type { GeotimeSeriesIntegrationRid } from "./GeotimeSeriesIntegrationRid.js";
import type { MediaSetViewLocator } from "./MediaSetViewLocator.js";
import type { MediaSourceRid } from "./MediaSourceRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { StreamLocatorRid } from "./StreamLocatorRid.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
export interface SafeDatasourceIdentifier_datasetRid {
  type: "datasetRid";
  datasetRid: DatasetRid;
}

export interface SafeDatasourceIdentifier_streamLocatorRid {
  type: "streamLocatorRid";
  streamLocatorRid: StreamLocatorRid;
}

export interface SafeDatasourceIdentifier_restrictedViewRid {
  type: "restrictedViewRid";
  restrictedViewRid: RestrictedViewRid;
}

export interface SafeDatasourceIdentifier_timeSeriesSyncRid {
  type: "timeSeriesSyncRid";
  timeSeriesSyncRid: TimeSeriesSyncRid;
}

export interface SafeDatasourceIdentifier_restrictedStream {
  type: "restrictedStream";
  restrictedStream: RestrictedViewRid;
}

export interface SafeDatasourceIdentifier_mediaSourceRids {
  type: "mediaSourceRids";
  mediaSourceRids: Array<MediaSourceRid>;
}

export interface SafeDatasourceIdentifier_mediaSetView {
  type: "mediaSetView";
  mediaSetView: MediaSetViewLocator;
}

export interface SafeDatasourceIdentifier_geotimeSeriesIntegrationRid {
  type: "geotimeSeriesIntegrationRid";
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
/**
 * Union type representing safe parts of different datasource identifiers
 */
export type SafeDatasourceIdentifier =
  | SafeDatasourceIdentifier_datasetRid
  | SafeDatasourceIdentifier_streamLocatorRid
  | SafeDatasourceIdentifier_restrictedViewRid
  | SafeDatasourceIdentifier_timeSeriesSyncRid
  | SafeDatasourceIdentifier_restrictedStream
  | SafeDatasourceIdentifier_mediaSourceRids
  | SafeDatasourceIdentifier_mediaSetView
  | SafeDatasourceIdentifier_geotimeSeriesIntegrationRid;
