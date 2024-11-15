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

import type {
  ArrayParameterValue,
  ParameterValue,
  PrimitiveParameterType,
} from "./parameters.js";
import type { AsyncValue } from "./utils/asyncValue.js";

interface PrimitiveParameterDefinition<T extends PrimitiveParameterType> {
  type: T;
  displayName: string;
}
interface ArrayParameterDefinition<S extends PrimitiveParameterType> {
  type: ArrayParameterValue["type"];
  displayName: string;
  subType: S;
}
export type ParameterDefinition =
  | PrimitiveParameterDefinition<PrimitiveParameterType>
  | ArrayParameterDefinition<PrimitiveParameterType>;

export interface ParameterConfig {
  parameters: { [paramId: string]: ParameterDefinition };
}

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
  > ? Extract<
      ArrayParameterValue,
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

export type ParameterValueMap<T extends ParameterConfig> = {
  [K in ParameterId<T>]: T["parameters"][K] extends ArrayParameterDefinition<
    infer S
  > ? Extract<
      ArrayParameterValue,
      { type: T["parameters"][K]["type"]; subType: S }
    >["value"] extends AsyncValue<infer P> ? P
    : never
    : Extract<
      ParameterValue,
      { type: T["parameters"][K]["type"] }
    >["value"] extends AsyncValue<infer P> ? P
    : never;
};
