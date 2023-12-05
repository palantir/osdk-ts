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

import type { ObjectTypeDatasetDatasource } from "./ObjectTypeDatasetDatasource.mjs";
import type { ObjectTypeDatasetDatasourceV2 } from "./ObjectTypeDatasetDatasourceV2.mjs";
import type { ObjectTypeGeotimeSeriesDatasource } from "./ObjectTypeGeotimeSeriesDatasource.mjs";
import type { ObjectTypeMediaDatasource } from "./ObjectTypeMediaDatasource.mjs";
import type { ObjectTypeMediaSetViewDatasource } from "./ObjectTypeMediaSetViewDatasource.mjs";
import type { ObjectTypeRestrictedStreamDatasource } from "./ObjectTypeRestrictedStreamDatasource.mjs";
import type { ObjectTypeRestrictedViewDatasource } from "./ObjectTypeRestrictedViewDatasource.mjs";
import type { ObjectTypeRestrictedViewDatasourceV2 } from "./ObjectTypeRestrictedViewDatasourceV2.mjs";
import type { ObjectTypeStreamDatasource } from "./ObjectTypeStreamDatasource.mjs";
import type { ObjectTypeTimeSeriesDatasource } from "./ObjectTypeTimeSeriesDatasource.mjs";
export interface ObjectTypeDatasourceDefinition_dataset {
  type: "dataset";
  dataset: ObjectTypeDatasetDatasource;
}

export interface ObjectTypeDatasourceDefinition_stream {
  type: "stream";
  stream: ObjectTypeStreamDatasource;
}

export interface ObjectTypeDatasourceDefinition_restrictedView {
  type: "restrictedView";
  restrictedView: ObjectTypeRestrictedViewDatasource;
}

export interface ObjectTypeDatasourceDefinition_timeSeries {
  type: "timeSeries";
  timeSeries: ObjectTypeTimeSeriesDatasource;
}

export interface ObjectTypeDatasourceDefinition_datasetV2 {
  type: "datasetV2";
  datasetV2: ObjectTypeDatasetDatasourceV2;
}

export interface ObjectTypeDatasourceDefinition_restrictedViewV2 {
  type: "restrictedViewV2";
  restrictedViewV2: ObjectTypeRestrictedViewDatasourceV2;
}

export interface ObjectTypeDatasourceDefinition_restrictedStream {
  type: "restrictedStream";
  restrictedStream: ObjectTypeRestrictedStreamDatasource;
}

export interface ObjectTypeDatasourceDefinition_media {
  type: "media";
  media: ObjectTypeMediaDatasource;
}

export interface ObjectTypeDatasourceDefinition_mediaSetView {
  type: "mediaSetView";
  mediaSetView: ObjectTypeMediaSetViewDatasource;
}

export interface ObjectTypeDatasourceDefinition_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: ObjectTypeGeotimeSeriesDatasource;
}

export type ObjectTypeDatasourceDefinition =
  | ObjectTypeDatasourceDefinition_dataset
  | ObjectTypeDatasourceDefinition_stream
  | ObjectTypeDatasourceDefinition_restrictedView
  | ObjectTypeDatasourceDefinition_timeSeries
  | ObjectTypeDatasourceDefinition_datasetV2
  | ObjectTypeDatasourceDefinition_restrictedViewV2
  | ObjectTypeDatasourceDefinition_restrictedStream
  | ObjectTypeDatasourceDefinition_media
  | ObjectTypeDatasourceDefinition_mediaSetView
  | ObjectTypeDatasourceDefinition_geotimeSeries;
