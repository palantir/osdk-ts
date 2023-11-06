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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import type { ObjectSet } from "./interfaces";
import type { OsdkLegacyObjectFrom } from "./OsdkObject";

export interface ValidActionParameterTypes {
  string: string;
  datetime: Date;
  double: number;
  boolean: boolean;
  integer: number;
  timestamp: Date;
  short: number;
  long: number;
  float: number;
  decimal: number;
  byte: number;
}

type NullableKeys<T> = {
  [K in keyof T]: T[K] extends { nullable: true } ? K : never;
}[keyof T];

type NonNullableKeys<T> = {
  [K in keyof T]: T[K] extends { nullable: true } ? never : K;
}[keyof T];

type ActionArgs<
  O extends OntologyDefinition<any>,
  K extends keyof O["actions"],
  B extends ObjectTypesFrom<O>,
> =
  & {
    [A in NullableKeys<O["actions"][K]["parameters"]>]?: ActionParameterType<
      O,
      K,
      A,
      B
    >;
  }
  & {
    [A in NonNullableKeys<O["actions"][K]["parameters"]>]: ActionParameterType<
      O,
      K,
      A,
      B
    >;
  };

export type ActionParameterType<
  O extends OntologyDefinition<any>,
  K extends keyof O["actions"],
  P extends keyof O["actions"][K]["parameters"],
  B extends ObjectTypesFrom<O>,
> = O["actions"][K]["parameters"][P] extends { multiplicity: true }
  ? ActionParameterBaseType<O, K, P, B>[]
  : ActionParameterBaseType<O, K, P, B>;

export type ActionParameterBaseType<
  O extends OntologyDefinition<any>,
  K extends keyof O["actions"],
  P extends keyof O["actions"][K]["parameters"],
  B extends ObjectTypesFrom<O>,
> = O["actions"][K]["parameters"][P]["type"] extends { objectSet: B }
  ? ObjectSet<OsdkLegacyObjectFrom<O, B>>
  : O["actions"][K]["parameters"][P]["type"] extends { object: B }
    ? OsdkLegacyObjectFrom<O, B>
  : O["actions"][K]["parameters"][P]["type"] extends
    keyof ValidActionParameterTypes
    ? ValidActionParameterTypes[O["actions"][K]["parameters"][P]["type"]]
  : never;

export type Actions<
  O extends OntologyDefinition<any>,
  B extends ObjectTypesFrom<O>,
> = {
  [K in keyof O["actions"]]: (arg: ActionArgs<O, K, B>) => Promise<any>;
};
