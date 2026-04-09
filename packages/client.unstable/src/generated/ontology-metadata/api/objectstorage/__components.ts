/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  DatasetTransactionRid as _api_DatasetTransactionRid,
  DatasourceRid as _api_DatasourceRid,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyVersion as _api_OntologyVersion,
  RestrictedViewTransactionRid as _api_RestrictedViewTransactionRid,
  StreamViewRid as _api_StreamViewRid,
  TimeSeriesSyncRid as _api_TimeSeriesSyncRid,
} from "../__components.js";

/**
 * Provenance information for a dataset that is made available by Object Storage services.
 */
export interface DatasetSecurityProvenanceInformation {
  datasetTransaction: _api_DatasetTransactionRid;
}
/**
 * Request to load security provenance information for ObjectTypes and LinkTypes.
 */
export interface GetSecurityProvenanceRequest {
  linkTypes: Array<_api_LinkTypeRid>;
  objectTypeProvenanceProperties?:
    | ObjectTypeProvenanceProperties
    | null
    | undefined;
  objectTypes: Array<_api_ObjectTypeRid>;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
}
/**
 * Request to load security provenance information for ObjectTypes and LinkTypes.
 */
export interface GetSecurityProvenanceRequestOld {
  linkTypes: Array<_api_LinkTypeRid>;
  objectTypes: Array<_api_ObjectTypeRid>;
}
/**
 * Response to GetSecurisyProvenanceRequest.
 */
export interface GetSecurityProvenanceResponse {
  linkTypes: Record<_api_LinkTypeRid, LinkTypeSecurityProvenanceLoadResponse>;
  objectTypes: Record<
    _api_ObjectTypeRid,
    ObjectTypeSecurityProvenanceLoadResponse
  >;
}
export interface LinkTypeSecurityProvenanceInformation_dataset {
  type: "dataset";
  dataset: DatasetSecurityProvenanceInformation;
}

export interface LinkTypeSecurityProvenanceInformation_restrictedView {
  type: "restrictedView";
  restrictedView: RestrictedViewSecurityProvenanceInformation;
}

export interface LinkTypeSecurityProvenanceInformation_rid {
  type: "rid";
  rid: ProvenanceRid;
}
/**
 * Security provenance information for a resource backing a LinkType.
 */
export type LinkTypeSecurityProvenanceInformation =
  | LinkTypeSecurityProvenanceInformation_dataset
  | LinkTypeSecurityProvenanceInformation_restrictedView
  | LinkTypeSecurityProvenanceInformation_rid;

/**
 * Response with security provenance information for a LinkType made available by Object Storage services.
 */
export interface LinkTypeSecurityProvenanceLoadResponse {
  ontologyVersion: _api_OntologyVersion;
  provenance: Array<LinkTypeSecurityProvenanceInformation>;
  scope: Record<string, Array<Operation>>;
}
export type ObjectStorageService = "PHONOGRAPH2" | "FUNNEL";

/**
 * Object type provenance properties.
 */
export interface ObjectTypeProvenanceProperties {
  datasources: Array<_api_DatasourceRid>;
}
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

/**
 * Response with security provenance information for an ObjectType made available by Object Storage services.
 */
export interface ObjectTypeSecurityProvenanceLoadResponse {
  ontologyVersion: _api_OntologyVersion;
  provenance: Array<ObjectTypeSecurityProvenanceInformation>;
  scope: Record<string, Array<Operation>>;
}
export type Operation = string;
export type ProvenanceRid = string;

/**
 * Provenance information for a restricted view that is made available by Object Storage services.
 */
export interface RestrictedViewSecurityProvenanceInformation {
  restrictedViewTransaction: _api_RestrictedViewTransactionRid;
}
/**
 * Provenance information for a stream that is made available by Object Storage services.
 */
export interface StreamSecurityProvenanceInformation {
  streamViewRid: _api_StreamViewRid;
}
/**
 * Provenance information for a time-dependent property that is made available by Object Storage services.
 */
export interface TimeSeriesSecurityProvenanceInformation {
  timeSeriesSync: _api_TimeSeriesSyncRid;
}
