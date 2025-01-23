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

import type { OntologyIrParameterCbacMarkingOrEmpty } from "./OntologyIrParameterCbacMarkingOrEmpty.js";
import type { OntologyIrParameterDateTimeRangeOrEmpty } from "./OntologyIrParameterDateTimeRangeOrEmpty.js";
import type { OntologyIrParameterMultipassUserOrEmpty } from "./OntologyIrParameterMultipassUserOrEmpty.js";
import type { OntologyIrParameterObjectPropertyValueOrEmpty } from "./OntologyIrParameterObjectPropertyValueOrEmpty.js";
import type { OntologyIrParameterObjectQueryOrEmpty } from "./OntologyIrParameterObjectQueryOrEmpty.js";
import type { OntologyIrParameterObjectTypeReferenceOrEmpty } from "./OntologyIrParameterObjectTypeReferenceOrEmpty.js";
import type { OntologyIrParameterRangeOrEmpty } from "./OntologyIrParameterRangeOrEmpty.js";
import type { OntologyIrParameterValueOneOfOrEmpty } from "./OntologyIrParameterValueOneOfOrEmpty.js";
import type { ParameterAttachmentOrEmpty } from "./ParameterAttachmentOrEmpty.js";
import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterGeoshapeOrEmpty } from "./ParameterGeoshapeOrEmpty.js";
import type { ParameterGeotimeSeriesReferenceOrEmpty } from "./ParameterGeotimeSeriesReferenceOrEmpty.js";
import type { ParameterInterfaceObjectQueryOrEmpty } from "./ParameterInterfaceObjectQueryOrEmpty.js";
import type { ParameterInterfacePropertyValueOrEmpty } from "./ParameterInterfacePropertyValueOrEmpty.js";
import type { ParameterMandatoryMarkingOrEmpty } from "./ParameterMandatoryMarkingOrEmpty.js";
import type { ParameterMediaReferenceOrEmpty } from "./ParameterMediaReferenceOrEmpty.js";
import type { ParameterMultipassGroupOrEmpty } from "./ParameterMultipassGroupOrEmpty.js";
import type { ParameterObjectListOrEmpty } from "./ParameterObjectListOrEmpty.js";
import type { ParameterObjectSetRidOrEmpty } from "./ParameterObjectSetRidOrEmpty.js";
import type { ParameterStructOrEmpty } from "./ParameterStructOrEmpty.js";
import type { ParameterTimeSeriesReferenceOrEmpty } from "./ParameterTimeSeriesReferenceOrEmpty.js";
import type { Redacted } from "./Redacted.js";
export interface OntologyIrAllowedParameterValues_oneOf {
  type: "oneOf";
  oneOf: OntologyIrParameterValueOneOfOrEmpty;
}

export interface OntologyIrAllowedParameterValues_range {
  type: "range";
  range: OntologyIrParameterRangeOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectQuery {
  type: "objectQuery";
  objectQuery: OntologyIrParameterObjectQueryOrEmpty;
}

export interface OntologyIrAllowedParameterValues_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: OntologyIrParameterObjectPropertyValueOrEmpty;
}

export interface OntologyIrAllowedParameterValues_interfacePropertyValue {
  type: "interfacePropertyValue";
  interfacePropertyValue: ParameterInterfacePropertyValueOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface OntologyIrAllowedParameterValues_user {
  type: "user";
  user: OntologyIrParameterMultipassUserOrEmpty;
}

export interface OntologyIrAllowedParameterValues_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface OntologyIrAllowedParameterValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface OntologyIrAllowedParameterValues_datetime {
  type: "datetime";
  datetime: OntologyIrParameterDateTimeRangeOrEmpty;
}

export interface OntologyIrAllowedParameterValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface OntologyIrAllowedParameterValues_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface OntologyIrAllowedParameterValues_cbacMarking {
  type: "cbacMarking";
  cbacMarking: OntologyIrParameterCbacMarkingOrEmpty;
}

export interface OntologyIrAllowedParameterValues_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface OntologyIrAllowedParameterValues_mediaReference {
  type: "mediaReference";
  mediaReference: ParameterMediaReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: OntologyIrParameterObjectTypeReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: ParameterTimeSeriesReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_geohash {
  type: "geohash";
  geohash: ParameterGeohashOrEmpty;
}

export interface OntologyIrAllowedParameterValues_geoshape {
  type: "geoshape";
  geoshape: ParameterGeoshapeOrEmpty;
}

export interface OntologyIrAllowedParameterValues_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: ParameterGeotimeSeriesReferenceOrEmpty;
}

export interface OntologyIrAllowedParameterValues_redacted {
  type: "redacted";
  redacted: Redacted;
}

export interface OntologyIrAllowedParameterValues_struct {
  type: "struct";
  struct: ParameterStructOrEmpty;
}
export type OntologyIrAllowedParameterValues =
  | OntologyIrAllowedParameterValues_oneOf
  | OntologyIrAllowedParameterValues_range
  | OntologyIrAllowedParameterValues_objectQuery
  | OntologyIrAllowedParameterValues_interfaceObjectQuery
  | OntologyIrAllowedParameterValues_objectPropertyValue
  | OntologyIrAllowedParameterValues_interfacePropertyValue
  | OntologyIrAllowedParameterValues_objectList
  | OntologyIrAllowedParameterValues_user
  | OntologyIrAllowedParameterValues_multipassGroup
  | OntologyIrAllowedParameterValues_text
  | OntologyIrAllowedParameterValues_datetime
  | OntologyIrAllowedParameterValues_boolean
  | OntologyIrAllowedParameterValues_objectSetRid
  | OntologyIrAllowedParameterValues_attachment
  | OntologyIrAllowedParameterValues_cbacMarking
  | OntologyIrAllowedParameterValues_mandatoryMarking
  | OntologyIrAllowedParameterValues_mediaReference
  | OntologyIrAllowedParameterValues_objectTypeReference
  | OntologyIrAllowedParameterValues_timeSeriesReference
  | OntologyIrAllowedParameterValues_geohash
  | OntologyIrAllowedParameterValues_geoshape
  | OntologyIrAllowedParameterValues_geotimeSeriesReference
  | OntologyIrAllowedParameterValues_redacted
  | OntologyIrAllowedParameterValues_struct;
