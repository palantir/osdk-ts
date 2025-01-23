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
import type { ParameterCbacMarkingOrEmptyModification } from "./ParameterCbacMarkingOrEmptyModification.js";
import type { ParameterDateTimeRangeOrEmptyModification } from "./ParameterDateTimeRangeOrEmptyModification.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterGeoshapeOrEmpty } from "./ParameterGeoshapeOrEmpty.js";
import type { ParameterGeotimeSeriesReferenceOrEmpty } from "./ParameterGeotimeSeriesReferenceOrEmpty.js";
import type { ParameterInterfaceObjectQueryOrEmptyModification } from "./ParameterInterfaceObjectQueryOrEmptyModification.js";
import type { ParameterInterfacePropertyValueOrEmptyModification } from "./ParameterInterfacePropertyValueOrEmptyModification.js";
import type { ParameterMandatoryMarkingOrEmpty } from "./ParameterMandatoryMarkingOrEmpty.js";
import type { ParameterMediaReferenceOrEmpty } from "./ParameterMediaReferenceOrEmpty.js";
import type { ParameterMultipassGroupOrEmpty } from "./ParameterMultipassGroupOrEmpty.js";
import type { ParameterMultipassUserOrEmptyModification } from "./ParameterMultipassUserOrEmptyModification.js";
import type { ParameterObjectListOrEmpty } from "./ParameterObjectListOrEmpty.js";
import type { ParameterObjectPropertyValueOrEmptyModification } from "./ParameterObjectPropertyValueOrEmptyModification.js";
import type { ParameterObjectQueryOrEmptyModification } from "./ParameterObjectQueryOrEmptyModification.js";
import type { ParameterObjectSetRidOrEmpty } from "./ParameterObjectSetRidOrEmpty.js";
import type { ParameterObjectTypeReferenceOrEmptyModification } from "./ParameterObjectTypeReferenceOrEmptyModification.js";
import type { ParameterRangeOrEmptyModification } from "./ParameterRangeOrEmptyModification.js";
import type { ParameterStructOrEmpty } from "./ParameterStructOrEmpty.js";
import type { ParameterTimeSeriesReferenceOrEmpty } from "./ParameterTimeSeriesReferenceOrEmpty.js";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.js";
import type { Redacted } from "./Redacted.js";
export interface AllowedParameterValuesModification_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedParameterValuesModification_range {
  type: "range";
  range: ParameterRangeOrEmptyModification;
}

export interface AllowedParameterValuesModification_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQueryOrEmptyModification;
}

export interface AllowedParameterValuesModification_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmptyModification;
}

export interface AllowedParameterValuesModification_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValueOrEmptyModification;
}

export interface AllowedParameterValuesModification_interfacePropertyValue {
  type: "interfacePropertyValue";
  interfacePropertyValue: ParameterInterfacePropertyValueOrEmptyModification;
}

export interface AllowedParameterValuesModification_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface AllowedParameterValuesModification_user {
  type: "user";
  user: ParameterMultipassUserOrEmptyModification;
}

export interface AllowedParameterValuesModification_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface AllowedParameterValuesModification_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedParameterValuesModification_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmptyModification;
}

export interface AllowedParameterValuesModification_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedParameterValuesModification_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface AllowedParameterValuesModification_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface AllowedParameterValuesModification_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarkingOrEmptyModification;
}

export interface AllowedParameterValuesModification_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface AllowedParameterValuesModification_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReferenceOrEmpty;
}

export interface AllowedParameterValuesModification_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ParameterObjectTypeReferenceOrEmptyModification;
}

export interface AllowedParameterValuesModification_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValuesModification_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}

export interface AllowedParameterValuesModification_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshapeOrEmpty;
}

export interface AllowedParameterValuesModification_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}

export interface AllowedParameterValuesModification_redacted {
  type: "redacted";
  redacted: Redacted;
}

export interface AllowedParameterValuesModification_struct {
  type: "struct";
  struct: ParameterStructOrEmpty;
}
export type AllowedParameterValuesModification =
  | AllowedParameterValuesModification_oneOf
  | AllowedParameterValuesModification_range
  | AllowedParameterValuesModification_objectQuery
  | AllowedParameterValuesModification_interfaceObjectQuery
  | AllowedParameterValuesModification_objectPropertyValue
  | AllowedParameterValuesModification_interfacePropertyValue
  | AllowedParameterValuesModification_objectList
  | AllowedParameterValuesModification_user
  | AllowedParameterValuesModification_multipassGroup
  | AllowedParameterValuesModification_text
  | AllowedParameterValuesModification_datetime
  | AllowedParameterValuesModification_boolean
  | AllowedParameterValuesModification_objectSetRid
  | AllowedParameterValuesModification_attachment
  | AllowedParameterValuesModification_cbacMarking
  | AllowedParameterValuesModification_mandatoryMarking
  | AllowedParameterValuesModification_mediaReference
  | AllowedParameterValuesModification_objectTypeReference
  | AllowedParameterValuesModification_timeSeriesReference
  | AllowedParameterValuesModification_geohash
  | AllowedParameterValuesModification_geoshape
  | AllowedParameterValuesModification_geotimeSeriesReference
  | AllowedParameterValuesModification_redacted
  | AllowedParameterValuesModification_struct;
