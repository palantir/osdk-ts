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
  DatasetRid as _api_DatasetRid,
  EventDriverConfig as _api_EventDriverConfig,
  MonitorRid as _api_MonitorRid,
  ObjectTypeRid as _api_ObjectTypeRid,
} from "../__components.js";

/**
 * Performs a full replay for ALL input datasets associated with the alert.
 */
export interface FullReplay {
}
export interface GetStreamingTimeseriesTemplateInstancesRequest {
  logicVersion: LogicVersion;
}
export interface GetStreamingTimeseriesTemplateInstancesResponse_notFound {
  type: "notFound";
  notFound: StreamingTimeseriesTemplateInstancesNotFound;
}

export interface GetStreamingTimeseriesTemplateInstancesResponse_templates {
  type: "templates";
  templates: TemplateInstancesByQualifiedSeriesId;
}
export type GetStreamingTimeseriesTemplateInstancesResponse =
  | GetStreamingTimeseriesTemplateInstancesResponse_notFound
  | GetStreamingTimeseriesTemplateInstancesResponse_templates;

/**
 * Logic version of a timeseries streaming job.
 */
export type LogicVersion = string;
export interface PartialReplay {
  durationMillis: number;
}
export interface PatchFields {
  eventDriver?: _api_EventDriverConfig | null | undefined;
}
export interface PatchTimeseriesMonitorRequest {
  monitorRid: _api_MonitorRid;
  patchFields: PatchFields;
}
export interface PatchTimeseriesMonitorResponse {
}
export interface ReplayStreamingAlertRequest {
  outputDatasetRid: _api_DatasetRid;
  outputObjectTypeRid: _api_ObjectTypeRid;
  replayWindow: ReplayWindow;
  rootObjectTypeRid: _api_ObjectTypeRid;
  schemaVersionOverride?: number | null | undefined;
}
export interface ReplayStreamingAlertResponse {
}
export interface ReplayWindow_partialReplay {
  type: "partialReplay";
  partialReplay: PartialReplay;
}

export interface ReplayWindow_fullReplay {
  type: "fullReplay";
  fullReplay: FullReplay;
}
export type ReplayWindow = ReplayWindow_partialReplay | ReplayWindow_fullReplay;

export type StreamingTimeseriesMonitorGroupRid = string;

/**
 * This response is only returned when there has been no update template instances request with the monitor group
 * rid.
 */
export interface StreamingTimeseriesTemplateInstancesNotFound {
}
/**
 * A conjurized version of com.palantir.object.sentinel.timeseriescondition.objects.QualifiedSeriesId
 */
export type StringifiedQualifiedSeriesId = string;

/**
 * A stringified version of com.palantir.object.sentinel.timeseriescondition.objects.TemplateInstanceIdentifier
 */
export type StringifiedTemplateInstanceIdentifier = string;

/**
 * A stringified version of list<com.palantir.object.sentinel.timeseriescondition.objects.TemplateInstance>
 */
export type StringifiedTemplateInstances = string;

/**
 * Note that the map returned in the response could be empty.
 */
export interface TemplateInstancesByQualifiedSeriesId {
  templateInstances: Record<
    StringifiedQualifiedSeriesId,
    StringifiedTemplateInstances
  >;
}
export interface UpdateStreamingTimeseriesTemplateInstancesRequest {
  logicVersion: LogicVersion;
  templateInstancesByQualifiedSeriesId: Record<
    StringifiedQualifiedSeriesId,
    StringifiedTemplateInstances
  >;
}
export interface UpdateStreamingTimeseriesTemplateInstancesResponse {
}
