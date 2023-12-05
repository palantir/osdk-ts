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

import type { DatasetSecurityProvenanceInformation } from "./DatasetSecurityProvenanceInformation.js";
import type { ProvenanceRid } from "./ProvenanceRid.js";
import type { RestrictedViewSecurityProvenanceInformation } from "./RestrictedViewSecurityProvenanceInformation.js";
import type { StreamSecurityProvenanceInformation } from "./StreamSecurityProvenanceInformation.js";
import type { TimeSeriesSecurityProvenanceInformation } from "./TimeSeriesSecurityProvenanceInformation.js";
export interface ObjectTypeSecurityProvenanceInformation_dataset {
  type: "dataset";
  dataset: DatasetSecurityProvenanceInformation;
}

export interface ObjectTypeSecurityProvenanceInformation_restrictedView {
  type: "restrictedView";
  restrictedView: RestrictedViewSecurityProvenanceInformation;
}

export interface ObjectTypeSecurityProvenanceInformation_timeSeries {
  type: "timeSeries";
  timeSeries: TimeSeriesSecurityProvenanceInformation;
}

export interface ObjectTypeSecurityProvenanceInformation_stream {
  type: "stream";
  stream: StreamSecurityProvenanceInformation;
}

export interface ObjectTypeSecurityProvenanceInformation_rid {
  type: "rid";
  rid: ProvenanceRid;
}
/**
 * Security provenance information for a resource backing an ObjectType.
 */
export type ObjectTypeSecurityProvenanceInformation =
  | ObjectTypeSecurityProvenanceInformation_dataset
  | ObjectTypeSecurityProvenanceInformation_restrictedView
  | ObjectTypeSecurityProvenanceInformation_timeSeries
  | ObjectTypeSecurityProvenanceInformation_stream
  | ObjectTypeSecurityProvenanceInformation_rid;
