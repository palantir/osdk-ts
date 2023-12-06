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
import type { MediaSetRid } from "./MediaSetRid.js";
import type { MediaSetViewRid } from "./MediaSetViewRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { StreamLocatorRid } from "./StreamLocatorRid.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
export interface DatasourceBackingRid_datasetRid {
  type: "datasetRid";
  datasetRid: DatasetRid;
}

export interface DatasourceBackingRid_streamLocatorRid {
  type: "streamLocatorRid";
  streamLocatorRid: StreamLocatorRid;
}

export interface DatasourceBackingRid_restrictedStreamRid {
  type: "restrictedStreamRid";
  restrictedStreamRid: RestrictedViewRid;
}

export interface DatasourceBackingRid_restrictedViewRid {
  type: "restrictedViewRid";
  restrictedViewRid: RestrictedViewRid;
}

export interface DatasourceBackingRid_timeSeriesSyncRid {
  type: "timeSeriesSyncRid";
  timeSeriesSyncRid: TimeSeriesSyncRid;
}

export interface DatasourceBackingRid_mediaSetRid {
  type: "mediaSetRid";
  mediaSetRid: MediaSetRid;
}

export interface DatasourceBackingRid_mediaSetViewRid {
  type: "mediaSetViewRid";
  mediaSetViewRid: MediaSetViewRid;
}

export interface DatasourceBackingRid_geotimeSeriesIntegrationRid {
  type: "geotimeSeriesIntegrationRid";
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
/**
 * Union type to represent the different resource identifiers for Datasource(s) in load requests.
 */
export type DatasourceBackingRid =
  | DatasourceBackingRid_datasetRid
  | DatasourceBackingRid_streamLocatorRid
  | DatasourceBackingRid_restrictedStreamRid
  | DatasourceBackingRid_restrictedViewRid
  | DatasourceBackingRid_timeSeriesSyncRid
  | DatasourceBackingRid_mediaSetRid
  | DatasourceBackingRid_mediaSetViewRid
  | DatasourceBackingRid_geotimeSeriesIntegrationRid;
