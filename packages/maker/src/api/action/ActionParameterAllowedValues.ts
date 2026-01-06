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
  InterfaceTypeApiName,
  OntologyIrConditionValue,
  OntologyIrLabelledValue,
  OntologyIrParameterDateRangeValue,
} from "@osdk/client.unstable";

// TODO(dpaquin): cleanup? or does "type: foo" actually make sense here

export type ActionParameterAllowedValues =
  | {
    type: "oneOf";
    oneOf: Array<OntologyIrLabelledValue>;
    otherValueAllowed?: boolean;
  }
  | {
    type: "range";
    min?: OntologyIrConditionValue;
    max?: OntologyIrConditionValue;
  }
  | { type: "text"; minLength?: number; maxLength?: number; regex?: string }
  | {
    type: "datetime";
    maximum?: OntologyIrParameterDateRangeValue;
    minimum?: OntologyIrParameterDateRangeValue;
  }
  | { type: "objectTypeReference"; interfaceTypes: Array<InterfaceTypeApiName> }
  | { type: "objectQuery" }
  | { type: "attachment" }
  | { type: "boolean" }
  | { type: "objectSetRid" }
  | { type: "cbacMarking" }
  | { type: "mandatoryMarking" }
  | { type: "objectList" }
  | { type: "mediaReference" }
  | { type: "timeSeriesReference" }
  | { type: "geohash" }
  | { type: "geoshape" }
  | { type: "geotimeSeriesReference" }
  | { type: "interfaceObjectQuery" }
  | { type: "redacted" }
  | { type: "multipassGroup" }
  | {
    type: "user";
    fromGroups?: Array<UserGroup>;
  };

export type UserGroup =
  | ParameterUserGroup
  | StaticUserGroup;

export type ParameterUserGroup = {
  type: "parameter";
  parameter: string;
};

export type StaticUserGroup = {
  type: "static";
  name: string;
};
