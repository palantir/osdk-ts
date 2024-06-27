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

import type { ObjectTypeDatasetDatasourceModification } from "./ObjectTypeDatasetDatasourceModification.js";
import type { ObjectTypeDatasetDatasourceV2Modification } from "./ObjectTypeDatasetDatasourceV2Modification.js";
import type { ObjectTypeGeotimeSeriesDatasourceModification } from "./ObjectTypeGeotimeSeriesDatasourceModification.js";
import type { ObjectTypeMediaDatasourceModification } from "./ObjectTypeMediaDatasourceModification.js";
import type { ObjectTypeMediaSetViewDatasourceModification } from "./ObjectTypeMediaSetViewDatasourceModification.js";
import type { ObjectTypeRestrictedStreamDatasourceModification } from "./ObjectTypeRestrictedStreamDatasourceModification.js";
import type { ObjectTypeRestrictedViewDatasourceModification } from "./ObjectTypeRestrictedViewDatasourceModification.js";
import type { ObjectTypeRestrictedViewDatasourceV2Modification } from "./ObjectTypeRestrictedViewDatasourceV2Modification.js";
import type { ObjectTypeStreamDatasourceModification } from "./ObjectTypeStreamDatasourceModification.js";
import type { ObjectTypeTimeSeriesDatasourceModification } from "./ObjectTypeTimeSeriesDatasourceModification.js";
export interface ObjectTypeDatasourceModificationDefinition_dataset {
  type: "dataset";
  dataset: ObjectTypeDatasetDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_stream {
  type: "stream";
  stream: ObjectTypeStreamDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_restrictedStream {
  type: "restrictedStream";
  restrictedStream: ObjectTypeRestrictedStreamDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_restrictedView {
  type: "restrictedView";
  restrictedView: ObjectTypeRestrictedViewDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_timeSeries {
  type: "timeSeries";
  timeSeries: ObjectTypeTimeSeriesDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_datasetV2 {
  type: "datasetV2";
  datasetV2: ObjectTypeDatasetDatasourceV2Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_restrictedViewV2 {
  type: "restrictedViewV2";
  restrictedViewV2: ObjectTypeRestrictedViewDatasourceV2Modification;
}

export interface ObjectTypeDatasourceModificationDefinition_media {
  type: "media";
  media: ObjectTypeMediaDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_mediaSetView {
  type: "mediaSetView";
  mediaSetView: ObjectTypeMediaSetViewDatasourceModification;
}

export interface ObjectTypeDatasourceModificationDefinition_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: ObjectTypeGeotimeSeriesDatasourceModification;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
export type ObjectTypeDatasourceModificationDefinition =
  | ObjectTypeDatasourceModificationDefinition_dataset
  | ObjectTypeDatasourceModificationDefinition_stream
  | ObjectTypeDatasourceModificationDefinition_restrictedStream
  | ObjectTypeDatasourceModificationDefinition_restrictedView
  | ObjectTypeDatasourceModificationDefinition_timeSeries
  | ObjectTypeDatasourceModificationDefinition_datasetV2
  | ObjectTypeDatasourceModificationDefinition_restrictedViewV2
  | ObjectTypeDatasourceModificationDefinition_media
  | ObjectTypeDatasourceModificationDefinition_mediaSetView
  | ObjectTypeDatasourceModificationDefinition_geotimeSeries;
