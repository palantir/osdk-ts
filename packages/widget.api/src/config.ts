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

import type { ParameterValue } from "./parameters.js";
import type { AsyncValue } from "./utils/asyncValue.js";

interface PrimitiveParameterDefinition<T extends ParameterValue.PrimitiveType> {
  type: T;
  displayName: string;
}
interface ArrayParameterDefinition<S extends ParameterValue.PrimitiveType> {
  type: ParameterValue.Array["type"];
  displayName: string;
  subType: S;
}
export type ParameterDefinition =
  | PrimitiveParameterDefinition<ParameterValue.PrimitiveType>
  | ArrayParameterDefinition<ParameterValue.PrimitiveType>;

export interface EventDefinition<P extends ParameterConfig> {
  displayName: string;
  parameterUpdateIds: Array<ParameterId<P>>;
}

export type ParameterConfig = Record<string, ParameterDefinition>;

const ID_MAX_LENGTH = 100;
const ID_PATTERN = /^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)*$/;

function validateWidgetId(id: string): void {
  if (id.length > ID_MAX_LENGTH) {
    throw new Error(`Widget id length can be at most ${ID_MAX_LENGTH}`);
  }
  if (!ID_PATTERN.test(id)) {
    throw new Error("Widget id does not match allowed pattern");
  }
}

export interface WidgetConfig<P extends ParameterConfig> {
  id: string;
  name: string;
  description?: string;
  // TODO: Add specific config for each type of widget. For now, all the config is generic and can be used by any widget.
  type: "workshop";
  parameters: ParameterConfig;
  events: { [eventId: string]: EventDefinition<NoInfer<P>> };
}

/**
 * Extracts the parameter ID strings as types from the given ParameterConfig.
 */
export type ParameterId<C extends ParameterConfig> = Extract<keyof C, string>;

/**
 * Extracts a map of parameter IDs to their async-wrapped value types from the given ParameterConfig.
 */
export type AsyncParameterValueMap<C extends WidgetConfig<C["parameters"]>> = {
  [
    K in ParameterId<
      C["parameters"]
    >
  ]: C["parameters"][K] extends ArrayParameterDefinition<infer S>
    // If it's an array, pull out the subtype correctly
    ? Extract<
      ParameterValue.Array,
      { type: C["parameters"][K]["type"]; subType: S }
    >["value"] extends AsyncValue<infer P> ? {
        type: "array";
        subType: S;
        value: AsyncValue<P>;
      }
    : never
    : Extract<
      ParameterValue,
      { type: C["parameters"][K]["type"] }
    >["value"] extends AsyncValue<infer P> ? {
        type: C["parameters"][K]["type"];
        value: AsyncValue<P>;
      }
    : never;
};

/**
 * Extracts a map of parameter IDs to the raw parameter values from the given ParameterConfig.
 */
export type ParameterValueMap<C extends WidgetConfig<C["parameters"]>> = {
  [
    K in ParameterId<
      C["parameters"]
    >
  ]: C["parameters"][K] extends ArrayParameterDefinition<infer S> ? Extract<
      ParameterValue.Array,
      { type: C["parameters"][K]["type"]; subType: S }
    >["value"] extends AsyncValue<infer P> ? P
    : never
    : Extract<
      ParameterValue,
      { type: C["parameters"][K]["type"] }
    >["value"] extends AsyncValue<infer P> ? P
    : never;
};

export type EventId<C extends WidgetConfig<C["parameters"]>> =
  keyof C["events"];

/**
 * Extracts a list of strongly-typed parameter IDs from the given WidgetConfig for a given event ID.
 * If a parameter ID is referenced by an event but does not exist, its type will be never
 */
export type EventParameterIdList<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = C["events"][K]["parameterUpdateIds"] extends
  Array<ParameterId<C["parameters"]>> ? C["events"][K]["parameterUpdateIds"]
  : never;

/**
 * Extracts a map of event IDs to their raw parameter value types from the given WidgetConfig.
 */
export type EventParameterValueMap<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = NotEmptyObject<
  {
    [P in EventParameterIdList<C, K>[number]]: ParameterValueMap<C>[P];
  }
>;

type NotEmptyObject<T extends Record<string, any>> = T extends
  Record<string, never> ? Record<string, never>
  : T;

export function defineConfig<const C extends WidgetConfig<any>>(c: C): C {
  validateWidgetId(c.id);
  return c as any;
}
