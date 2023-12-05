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

import type { DatasetSecurityProvenanceInformation } from "./DatasetSecurityProvenanceInformation.mjs";
import type { ProvenanceRid } from "./ProvenanceRid.mjs";
import type { RestrictedViewSecurityProvenanceInformation } from "./RestrictedViewSecurityProvenanceInformation.mjs";
import type { StreamSecurityProvenanceInformation } from "./StreamSecurityProvenanceInformation.mjs";
import type { TimeSeriesSecurityProvenanceInformation } from "./TimeSeriesSecurityProvenanceInformation.mjs";
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

export type ObjectTypeSecurityProvenanceInformation =
  | ObjectTypeSecurityProvenanceInformation_dataset
  | ObjectTypeSecurityProvenanceInformation_restrictedView
  | ObjectTypeSecurityProvenanceInformation_timeSeries
  | ObjectTypeSecurityProvenanceInformation_stream
  | ObjectTypeSecurityProvenanceInformation_rid;
