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
  | ObjectTypeDatasourceDefinition_derived
  | ObjectTypeDatasourceDefinition_direct;

export interface ObjectTypeDatasourceDefinition_dataset {
  type: "dataset";
  markingConstraints?: ObjectTypeDatasourceMarkingConstraints;
  objectSecurityPolicy?: ObjectSecurityPolicy;
  propertySecurityGroups?: Array<PropertySecurityGroup>;
}

/**
 * Settings for the marking-value constraints on a datasource, not read-access
 * policies. Allowed markings, organizations, and maximum classification are
 * supplied through Marketplace marking inputs, not configured here.
 */
export type ObjectTypeDatasourceMarkingConstraints = {
  /**
   * Settings for the shared constraint on ordinary mandatory and organization
   * markings. Requires a `MANDATORY` marking property on the datasource.
   */
  mandatory?: ObjectTypeMarkingConstraintSettings;
  /**
   * Settings for the maximum-classification constraint. Requires a `CBAC`
   * marking property on the datasource.
   */
  cbac?: ObjectTypeMarkingConstraintSettings;
};

export type ObjectTypeMarkingConstraintSettings = {
  /**
   * Allows the datasource's allowed marking set to be empty. In that case,
   * corresponding marking properties may contain only empty arrays. This does
   * not bypass access controls or govern whether individual rows may have empty
   * marking arrays when the allowed set is nonempty.
   *
   * Defaults to false. Omitted from serialized output when undefined.
   */
  allowEmptyMarkings?: boolean;
};

export interface ObjectSecurityPolicy {
  name: string;
  granularPolicy?: SecurityConditionDefinition;
  appliedMarkings?: Record<string, MarkingType>;
  assumedMarkings?: Record<string, MarkingType>;
}

export interface PropertySecurityGroup {
  name: string;
  properties: Array<string>;
  granularPolicy?: SecurityConditionDefinition;
  appliedMarkings?: Record<string, MarkingType>;
  assumedMarkings?: Record<string, MarkingType>;
}

export interface ObjectTypeDatasourceDefinition_stream {
  type: "stream";
  markingConstraints?: ObjectTypeDatasourceMarkingConstraints;
  // Retention period must be in ISO 8601 duration format
  retentionPeriod?: string;
}

export interface ObjectTypeDatasourceDefinition_restrictedView {
  type: "restrictedView";
  markingConstraints?: ObjectTypeDatasourceMarkingConstraints;
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

export interface ObjectTypeDatasourceDefinition_direct {
  type: "direct";
  markingConstraints?: ObjectTypeDatasourceMarkingConstraints;
  objectSecurityPolicy?: ObjectSecurityPolicy;
  propertySecurityGroups?: Array<PropertySecurityGroup>;
}
