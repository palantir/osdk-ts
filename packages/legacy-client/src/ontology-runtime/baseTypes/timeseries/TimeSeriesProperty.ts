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

import type { OntologyDefinition, ThinClient } from "@osdk/api";

import { getFirstPoint } from "../../ontologyProvider/calls/getFirstPoint";
import { getLastPoint } from "../../ontologyProvider/calls/getLastPoint";
import type { TimeSeries } from "./TimeSeries";
import { createTimeSeriesQuery, type TimeSeriesQuery } from "./TimeSeriesQuery";

export function isTimeSeries<T extends number | string>(
  obj: any,
): obj is TimeSeries<T> {
  return obj?.type === "TimeSeries";
}

export const TimeSeriesProperty = <T extends number | string>(
  thinClient: ThinClient<OntologyDefinition<any>>,
  propertyName: string,
  objectTypeApiName: string,
  primaryKey: any,
): TimeSeries<T> => {
  return {
    type: "TimeSeries" as const,
    getFirstPoint() {
      return getFirstPoint(
        thinClient,
        objectTypeApiName,
        primaryKey,
        propertyName,
      );
    },
    getLastPoint() {
      return getLastPoint(
        thinClient,
        objectTypeApiName,
        primaryKey,
        propertyName,
      );
    },
    get points(): TimeSeriesQuery<T> {
      return createTimeSeriesQuery(
        thinClient,
        propertyName,
        objectTypeApiName,
        primaryKey,
      );
    },
  };
};
