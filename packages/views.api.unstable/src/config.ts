/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ParameterValue, PrimitiveParameterType } from "./parameters.js";
import type { AsyncValue } from "./utils/asyncValue.js";

interface PrimitiveParameterDefinition<T extends PrimitiveParameterType> {
  type: T;
  displayName: string;
}
interface ArrayParameterDefinition<S extends PrimitiveParameterType> {
  type: ParameterValue.Array["type"];
  displayName: string;
  subType: S;
}
export type ParameterDefinition =
  | PrimitiveParameterDefinition<PrimitiveParameterType>
  | ArrayParameterDefinition<PrimitiveParameterType>;

export interface EventDefinition<CONFIG extends ParameterConfig> {
  displayName: string;
  parameterIds: Array<ParameterId<CONFIG>>;
}

export interface ParameterConfig {
  parameters: { [paramId: string]: ParameterDefinition };
}

export type ViewConfig<PARAMS extends ParameterConfig = ParameterConfig> =
  & ParameterConfig
  & {
    events: { [eventId: string]: EventDefinition<PARAMS> };
  };

/**
 * Extracts the parameter ID strings as types from the given ParameterConfig.
 */
export type ParameterId<T extends ParameterConfig> = keyof T["parameters"];

/**
 * Extracts a map of parameter IDs to their async-wrapped value types from the given ParameterConfig.
 */
export type AsyncParameterValueMap<T extends ParameterConfig> = {
  [K in ParameterId<T>]: T["parameters"][K] extends ArrayParameterDefinition<
    infer S
  >
    // If it's an array, pull out the subtype correctly
    ? Extract<
      ParameterValue.Array,
      { type: T["parameters"][K]["type"]; subType: S }
    >["value"] extends AsyncValue<infer P> ? {
        type: "array";
        subType: S;
        value: AsyncValue<P>;
      }
    : never
    : Extract<
      ParameterValue,
      { type: T["parameters"][K]["type"] }
    >["value"] extends AsyncValue<infer P> ? {
        type: T["parameters"][K]["type"];
        value: AsyncValue<P>;
      }
    : never;
};

/**
 * Extracts a map of parameter IDs to the raw parameter values from the given ParameterConfig.
 */
export type ParameterValueMap<T extends ParameterConfig> = {
  [K in ParameterId<T>]: T["parameters"][K] extends ArrayParameterDefinition<
    infer S
  > ? Extract<
      ParameterValue.Array,
      { type: T["parameters"][K]["type"]; subType: S }
    >["value"] extends AsyncValue<infer P> ? P
    : never
    : Extract<
      ParameterValue,
      { type: T["parameters"][K]["type"] }
    >["value"] extends AsyncValue<infer P> ? P
    : never;
};

export type EventId<T extends ViewConfig<{ parameters: T["parameters"] }>> =
  keyof T["events"];

/**
 * Extracts a list of strongly-typed parameter IDs from the given ViewConfig for a given event ID.
 * If a parameter ID is referenced by an event but does not exist, its type will be never
 */
export type EventParameterIdList<
  T extends ViewConfig<{ parameters: T["parameters"] }>,
  K extends EventId<T>,
> = T["events"][K]["parameterIds"] extends Array<ParameterId<T>>
  ? T["events"][K]["parameterIds"]
  : never;

/**
 * Extracts a map of event IDs to their raw parameter value types from the given ViewConfig.
 */
export type EventParameterValueMap<
  T extends ViewConfig<{ parameters: T["parameters"] }>,
  K extends EventId<T>,
> = {
  [P in EventParameterIdList<T, K>[number]]: ParameterValueMap<T>[P];
};
