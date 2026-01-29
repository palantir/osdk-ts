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
  DerivedPropertyLinkTypeSide,
  MarkingType,
  ObjectTypeFieldApiName,
} from "@osdk/client.unstable";
import type { LinkType } from "../links/LinkType.js";
import type { SecurityConditionDefinition } from "./SecurityCondition.js";

export type ObjectTypeDatasourceDefinition =
  | ObjectTypeDatasourceDefinition_stream
  | ObjectTypeDatasourceDefinition_dataset
  | ObjectTypeDatasourceDefinition_restrictedView
  | ObjectTypeDatasourceDefinition_derived;

export interface ObjectTypeDatasourceDefinition_dataset {
  type: "dataset";
  objectSecurityPolicy?: ObjectSecurityPolicy;
  propertySecurityGroups?: Array<PropertySecurityGroup>;
}

export interface ObjectSecurityPolicy {
  name: string;
  granularPolicy?: SecurityConditionDefinition;
  additionalMandatoryMarkings?: Record<string, MarkingType>;
}

export interface PropertySecurityGroup {
  name: string;
  properties: Array<string>;
  granularPolicy?: SecurityConditionDefinition;
  additionalMandatoryMarkings?: Record<string, MarkingType>;
}

export interface ObjectTypeDatasourceDefinition_stream {
  type: "stream";
  // Retention period must be in ISO 8601 duration format
  retentionPeriod?: string;
}

export interface ObjectTypeDatasourceDefinition_restrictedView {
  type: "restrictedView";
}

export interface ObjectTypeDatasourceDefinition_derived {
  type: "derived";
  linkDefinition: Array<DerivedPropertiesLinkDefinition>;
  // property->property is linkedProperties, property->aggregation is aggregatedProperties
  propertyMapping:
    | Record<ObjectTypeFieldApiName, ObjectTypeFieldApiName>
    | Record<ObjectTypeFieldApiName, DerivedPropertyAggregation>;
}
export interface DerivedPropertiesLinkDefinition {
  linkType: LinkType;
  side?: DerivedPropertyLinkTypeSide;
}

// if the property is null on the object, it is ignored in aggregations
export type DerivedPropertyAggregation =
  | { type: "count" } // total count of objects
  | { type: "avg"; property: ObjectTypeFieldApiName }
  | { type: "sum"; property: ObjectTypeFieldApiName }
  | { type: "min"; property: ObjectTypeFieldApiName }
  | { type: "max"; property: ObjectTypeFieldApiName }
  | { type: "approximateCardinality"; property: ObjectTypeFieldApiName }
  | { type: "exactCardinality"; property: ObjectTypeFieldApiName }
  | { type: "collectList"; property: ObjectTypeFieldApiName; limit: number } // max limit is 100
  | { type: "collectSet"; property: ObjectTypeFieldApiName; limit: number }; // max limit is 100
