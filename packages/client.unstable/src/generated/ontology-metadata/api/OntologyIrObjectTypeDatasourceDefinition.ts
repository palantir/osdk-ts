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

import type { OntologyIrObjectTypeDatasetDatasourceV2 } from "./OntologyIrObjectTypeDatasetDatasourceV2.js";
import type { OntologyIrObjectTypeDerivedPropertiesDatasource } from "./OntologyIrObjectTypeDerivedPropertiesDatasource.js";
import type { OntologyIrObjectTypeDirectDatasource } from "./OntologyIrObjectTypeDirectDatasource.js";
import type { OntologyIrObjectTypeEditsOnlyDatasource } from "./OntologyIrObjectTypeEditsOnlyDatasource.js";
import type { OntologyIrObjectTypeGeotimeSeriesDatasource } from "./OntologyIrObjectTypeGeotimeSeriesDatasource.js";
import type { OntologyIrObjectTypeMediaSetViewDatasource } from "./OntologyIrObjectTypeMediaSetViewDatasource.js";
import type { OntologyIrObjectTypeRestrictedStreamDatasource } from "./OntologyIrObjectTypeRestrictedStreamDatasource.js";
import type { OntologyIrObjectTypeRestrictedViewDatasourceV2 } from "./OntologyIrObjectTypeRestrictedViewDatasourceV2.js";
import type { OntologyIrObjectTypeStreamDatasourceV2 } from "./OntologyIrObjectTypeStreamDatasourceV2.js";
import type { OntologyIrObjectTypeTimeSeriesDatasource } from "./OntologyIrObjectTypeTimeSeriesDatasource.js";
export interface OntologyIrObjectTypeDatasourceDefinition_streamV2 {
  type: "streamV2";
  streamV2: OntologyIrObjectTypeStreamDatasourceV2;
}

export interface OntologyIrObjectTypeDatasourceDefinition_timeSeries {
  type: "timeSeries";
  timeSeries: OntologyIrObjectTypeTimeSeriesDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_datasetV2 {
  type: "datasetV2";
  datasetV2: OntologyIrObjectTypeDatasetDatasourceV2;
}

export interface OntologyIrObjectTypeDatasourceDefinition_restrictedViewV2 {
  type: "restrictedViewV2";
  restrictedViewV2: OntologyIrObjectTypeRestrictedViewDatasourceV2;
}

export interface OntologyIrObjectTypeDatasourceDefinition_restrictedStream {
  type: "restrictedStream";
  restrictedStream: OntologyIrObjectTypeRestrictedStreamDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_mediaSetView {
  type: "mediaSetView";
  mediaSetView: OntologyIrObjectTypeMediaSetViewDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_geotimeSeries {
  type: "geotimeSeries";
  geotimeSeries: OntologyIrObjectTypeGeotimeSeriesDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_editsOnly {
  type: "editsOnly";
  editsOnly: OntologyIrObjectTypeEditsOnlyDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_direct {
  type: "direct";
  direct: OntologyIrObjectTypeDirectDatasource;
}

export interface OntologyIrObjectTypeDatasourceDefinition_derived {
  type: "derived";
  derived: OntologyIrObjectTypeDerivedPropertiesDatasource;
}
/**
 * Wrapper type for all supported object type datasource types.
 */
export type OntologyIrObjectTypeDatasourceDefinition =
  | OntologyIrObjectTypeDatasourceDefinition_streamV2
  | OntologyIrObjectTypeDatasourceDefinition_timeSeries
  | OntologyIrObjectTypeDatasourceDefinition_datasetV2
  | OntologyIrObjectTypeDatasourceDefinition_restrictedViewV2
  | OntologyIrObjectTypeDatasourceDefinition_restrictedStream
  | OntologyIrObjectTypeDatasourceDefinition_mediaSetView
  | OntologyIrObjectTypeDatasourceDefinition_geotimeSeries
  | OntologyIrObjectTypeDatasourceDefinition_editsOnly
  | OntologyIrObjectTypeDatasourceDefinition_direct
  | OntologyIrObjectTypeDatasourceDefinition_derived;
