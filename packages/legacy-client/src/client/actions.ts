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

import type { OntologyDefinition } from "@osdk/api";
import type { LocalDate, Timestamp } from "..";
import type { ObjectSet } from "./interfaces";
import type { OsdkLegacyObjectFrom } from "./OsdkObject";

export interface ValidActionParameterTypes {
  string: string;
  datetime: LocalDate;
  double: number;
  boolean: boolean;
  integer: number;
  timestamp: Timestamp;
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
  A extends keyof O["actions"],
> =
  & {
    [P in NullableKeys<O["actions"][A]["parameters"]>]?: ActionParameterType<
      O,
      A,
      P
    >;
  }
  & {
    [P in NonNullableKeys<O["actions"][A]["parameters"]>]: ActionParameterType<
      O,
      A,
      P
    >;
  };

export type ActionParameterType<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  P extends keyof O["actions"][A]["parameters"],
> = O["actions"][A]["parameters"][P] extends { multiplicity: true }
  ? ActionParameterBaseType<O, A, P>[]
  : ActionParameterBaseType<O, A, P>;

export type ActionParameterBaseType<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  P extends keyof O["actions"][A]["parameters"],
> = O["actions"][A]["parameters"][P]["type"] extends { objectSet: infer K }
  ? ObjectSet<OsdkLegacyObjectFrom<O, K>>
  : O["actions"][A]["parameters"][P]["type"] extends { object: infer K }
    ? OsdkLegacyObjectFrom<O, K>
  : O["actions"][A]["parameters"][P]["type"] extends
    keyof ValidActionParameterTypes
    ? ValidActionParameterTypes[O["actions"][A]["parameters"][P]["type"]]
  : never;

export type Actions<
  O extends OntologyDefinition<any>,
> = {
  [A in keyof O["actions"]]: (
    params: ActionArgs<O, A>,
  ) => Promise<any>;
};
