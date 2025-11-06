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

import type { ObjectType, ParameterValue } from "./parameters.js";
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
interface ObjectSetParameterDefinition<T extends ObjectType> {
  type: "objectSet";
  displayName: string;
  objectType: T;
}
export type ParameterDefinition =
  | PrimitiveParameterDefinition<ParameterValue.PrimitiveType>
  | ArrayParameterDefinition<ParameterValue.PrimitiveType>
  | ObjectSetParameterDefinition<ObjectType>;

interface ManifestObjectSetParameterDefinition<T extends ObjectType> {
  type: ObjectSetParameterDefinition<T>["type"];
  displayName: string;
  objectTypeRids: [string];
}

export type ManifestParameterDefinition =
  | PrimitiveParameterDefinition<ParameterValue.PrimitiveType>
  | ArrayParameterDefinition<ParameterValue.PrimitiveType>
  | ManifestObjectSetParameterDefinition<ObjectType>;

export type EventParameterDefinition = ParameterDefinition & {
  /**
   * The unique identifier for this event parameter
   */
  id: string;
};

export type ManifestEventParameterDefinition = ManifestParameterDefinition;

export interface EventDefinitionBase<P extends ParameterConfig> {
  displayName: string;
}

export interface WorkshopEventDefinition<P extends ParameterConfig>
  extends EventDefinitionBase<P>
{
  parameterUpdateIds: Array<ParameterId<P>>;
}

export interface SlateEventDefinition<P extends ParameterConfig>
  extends EventDefinitionBase<P>
{
  eventParameters: Array<EventParameterDefinition>;
}

export type ParameterConfig = Record<string, ParameterDefinition>;

export type WidgetType = "workshop" | "slate";

interface BaseWidgetConfig<P extends ParameterConfig> {
  id: string;
  name: string;
  type: WidgetType;
  description?: string;
  parameters: ParameterConfig;
}

interface WorkshopWidgetConfig<P extends ParameterConfig>
  extends BaseWidgetConfig<P>
{
  type: "workshop";
  events: {
    [eventId: string]: WorkshopEventDefinition<P>;
  };
}

interface SlateWidgetConfig<P extends ParameterConfig>
  extends BaseWidgetConfig<P>
{
  type: "slate";
  events: {
    [eventId: string]: SlateEventDefinition<P>;
  };
}

export type WidgetConfig<P extends ParameterConfig> =
  | WorkshopWidgetConfig<P>
  | SlateWidgetConfig<P>;

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
    : C["parameters"][K] extends ObjectSetParameterDefinition<infer T>
      ? ParameterValue.ObjectSet<T>["value"] extends AsyncValue<infer P> ? {
          type: "objectSet";
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
    : C["parameters"][K] extends ObjectSetParameterDefinition<infer T>
      ? ParameterValue.ObjectSet<T>["value"] extends AsyncValue<infer P> ? P
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
export type EventParameterUpdateIdList<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = C["events"][K] extends WorkshopEventDefinition<C["parameters"]>
  ? C["events"][K]["parameterUpdateIds"]
  : never;

/**
 * Extracts a list of strongly-typed event parameters from the given WidgetConfig for a given event ID.
 */
export type EventParameterList<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = C["events"][K] extends SlateEventDefinition<C["parameters"]>
  ? C["events"][K]["eventParameters"]
  : never;

/**
 * Extracts a map of event IDs to their raw parameter value types from the given WidgetConfig.
 */
export type EventIdToParameterValueMap<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = NotEmptyObject<
  {
    [P in EventParameterUpdateIdList<C, K>[number]]: ParameterValueMap<C>[P];
  }
>;

/**
 * TODO clean up this type - specifically how we extract the ID as non-async values
 * Extracts a map of event parameter IDs to their eventParameter value types for that given event
 */
export type SlateEventIdToParameterValueMap<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = NotEmptyObject<
  {
    [
      P in EventParameterList<C, K>[number]["id"]
    ]: Extract<
      C["parameters"][P],
      ParameterDefinition
    > extends ArrayParameterDefinition<infer S> ? Extract<
        ParameterValue.Array,
        { type: C["parameters"][P]["type"]; subType: S }
      >["value"] extends AsyncValue<infer AV> ? AV
      : never
      : Extract<
        C["parameters"][P],
        ParameterDefinition
      > extends ObjectSetParameterDefinition<infer T>
        ? ParameterValue.ObjectSet<T>["value"] extends AsyncValue<infer AV> ? AV
        : never
      : Extract<
        ParameterValue,
        { type: C["parameters"][P]["type"] }
      >["value"] extends AsyncValue<infer AV> ? AV
      : never;
  }
>;

type NotEmptyObject<T extends Record<string, any>> = T extends
  Record<string, never> ? Record<string, never>
  : T;

export function defineConfig<const C extends WidgetConfig<any>>(c: C): C {
  return c as any;
}
