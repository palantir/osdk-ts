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

import type { ParameterAttachmentOrEmpty } from "./ParameterAttachmentOrEmpty.js";
import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterCbacMarkingOrEmpty } from "./ParameterCbacMarkingOrEmpty.js";
import type { ParameterDateTimeRangeOrEmpty } from "./ParameterDateTimeRangeOrEmpty.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterGeoshapeOrEmpty } from "./ParameterGeoshapeOrEmpty.js";
import type { ParameterGeotimeSeriesReferenceOrEmpty } from "./ParameterGeotimeSeriesReferenceOrEmpty.js";
import type { ParameterInterfaceObjectQueryOrEmpty } from "./ParameterInterfaceObjectQueryOrEmpty.js";
import type { ParameterInterfacePropertyValueOrEmpty } from "./ParameterInterfacePropertyValueOrEmpty.js";
import type { ParameterMandatoryMarkingOrEmpty } from "./ParameterMandatoryMarkingOrEmpty.js";
import type { ParameterMediaReferenceOrEmpty } from "./ParameterMediaReferenceOrEmpty.js";
import type { ParameterMultipassGroupOrEmpty } from "./ParameterMultipassGroupOrEmpty.js";
import type { ParameterMultipassUserOrEmpty } from "./ParameterMultipassUserOrEmpty.js";
import type { ParameterObjectListOrEmpty } from "./ParameterObjectListOrEmpty.js";
import type { ParameterObjectPropertyValueOrEmpty } from "./ParameterObjectPropertyValueOrEmpty.js";
import type { ParameterObjectQueryOrEmpty } from "./ParameterObjectQueryOrEmpty.js";
import type { ParameterObjectSetRidOrEmpty } from "./ParameterObjectSetRidOrEmpty.js";
import type { ParameterObjectTypeReferenceOrEmpty } from "./ParameterObjectTypeReferenceOrEmpty.js";
import type { ParameterRangeOrEmpty } from "./ParameterRangeOrEmpty.js";
import type { ParameterStructOrEmpty } from "./ParameterStructOrEmpty.js";
import type { ParameterTimeSeriesReferenceOrEmpty } from "./ParameterTimeSeriesReferenceOrEmpty.js";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.js";
import type { Redacted } from "./Redacted.js";
export interface AllowedParameterValues_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedParameterValues_range {
  type: "range";
  range: ParameterRangeOrEmpty;
}

export interface AllowedParameterValues_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQueryOrEmpty;
}

export interface AllowedParameterValues_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmpty;
}

export interface AllowedParameterValues_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValueOrEmpty;
}

export interface AllowedParameterValues_interfacePropertyValue {
  type: "interfacePropertyValue";
  interfacePropertyValue: ParameterInterfacePropertyValueOrEmpty;
}

export interface AllowedParameterValues_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface AllowedParameterValues_user {
  type: "user";
  user: ParameterMultipassUserOrEmpty;
}

export interface AllowedParameterValues_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface AllowedParameterValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedParameterValues_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmpty;
}

export interface AllowedParameterValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedParameterValues_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface AllowedParameterValues_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface AllowedParameterValues_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarkingOrEmpty;
}

export interface AllowedParameterValues_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface AllowedParameterValues_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReferenceOrEmpty;
}

export interface AllowedParameterValues_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ParameterObjectTypeReferenceOrEmpty;
}

export interface AllowedParameterValues_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}

export interface AllowedParameterValues_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshapeOrEmpty;
}

export interface AllowedParameterValues_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValues_redacted {
  type: "redacted";
  redacted: Redacted;
}

export interface AllowedParameterValues_struct {
  type: "struct";
  struct: ParameterStructOrEmpty;
}
export type AllowedParameterValues =
  | AllowedParameterValues_oneOf
  | AllowedParameterValues_range
  | AllowedParameterValues_objectQuery
  | AllowedParameterValues_interfaceObjectQuery
  | AllowedParameterValues_objectPropertyValue
  | AllowedParameterValues_interfacePropertyValue
  | AllowedParameterValues_objectList
  | AllowedParameterValues_user
  | AllowedParameterValues_multipassGroup
  | AllowedParameterValues_text
  | AllowedParameterValues_datetime
  | AllowedParameterValues_boolean
  | AllowedParameterValues_objectSetRid
  | AllowedParameterValues_attachment
  | AllowedParameterValues_cbacMarking
  | AllowedParameterValues_mandatoryMarking
  | AllowedParameterValues_mediaReference
  | AllowedParameterValues_objectTypeReference
  | AllowedParameterValues_timeSeriesReference
  | AllowedParameterValues_geohash
  | AllowedParameterValues_geoshape
  | AllowedParameterValues_geotimeSeriesReference
  | AllowedParameterValues_redacted
  | AllowedParameterValues_struct;
