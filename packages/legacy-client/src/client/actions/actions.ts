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
import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Attachment,
  Edits,
  LocalDate,
  Result,
  Timestamp,
} from "../..";
import type { ObjectSet } from "../interfaces";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import type { IsEmptyRecord } from "../utils/IsEmptyRecord";
import type { NonNullableKeys, NullableKeys } from "../utils/NullableKeys";
import type { ValuesOfMap } from "../utils/ValuesOfMap";

export interface ValidLegacyActionParameterTypes {
  boolean: boolean;
  string: string;
  integer: number;
  long: number;
  double: number;
  datetime: LocalDate;
  timestamp: Timestamp;
  attachment: Attachment;
}

export type ActionArgs<
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
> = O["actions"][A]["parameters"][P]["type"] extends
  { type: "objectSet"; objectSet: infer K }
  ? ObjectSet<OsdkLegacyObjectFrom<O, K>>
  : O["actions"][A]["parameters"][P]["type"] extends
    { type: "object"; object: infer K }
    ? OsdkLegacyObjectFrom<O, K> | OsdkLegacyObjectFrom<O, K>["__primaryKey"]
  : O["actions"][A]["parameters"][P]["type"] extends
    keyof ValidLegacyActionParameterTypes
    ? ValidLegacyActionParameterTypes[O["actions"][A]["parameters"][P]["type"]]
  : never;

export type ModifiedObjects<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
> = {
  [
    K in keyof O["actions"][A][
      "modifiedEntities"
    ] as O["actions"][A]["modifiedEntities"][K] extends { modified: true } ? K
      : never
  ]: OsdkLegacyObjectFrom<O, K>;
};

export type CreatedObjects<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
> = {
  [
    K in keyof O["actions"][A][
      "modifiedEntities"
    ] as O["actions"][A]["modifiedEntities"][K] extends { created: true } ? K
      : never
  ]: OsdkLegacyObjectFrom<O, K>;
};

export type CreatedObjectOrVoid<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
> = ValuesOfMap<CreatedObjects<O, A>> extends OsdkLegacyObjectFrom<O, infer K>
  ? OsdkLegacyObjectFrom<O, K>
  : void;

export type ModifiedObjectsOrVoid<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
> = ValuesOfMap<ModifiedObjects<O, A>> extends OsdkLegacyObjectFrom<O, infer K>
  ? OsdkLegacyObjectFrom<O, K>
  : void;

export type WrappedActionReturnType<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  Op extends ActionExecutionOptions,
> = Promise<
  Result<
    ActionReturnType<O, A, Op>,
    ActionError
  >
>;

export type ActionReturnType<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  Op extends ActionExecutionOptions,
> = ActionResponseFromOptions<
  Op,
  Edits<CreatedObjectOrVoid<O, A>, ModifiedObjectsOrVoid<O, A>>
>;

export type Actions<
  O extends OntologyDefinition<any>,
> = {
  [A in keyof O["actions"]]:
    IsEmptyRecord<O["actions"][A]["parameters"]> extends true
      ? <Op extends ActionExecutionOptions>(
        options?: Op,
      ) => WrappedActionReturnType<O, A, Op>
      : <Op extends ActionExecutionOptions>(
        params: ActionArgs<O, A>,
        options?: Op,
      ) => WrappedActionReturnType<O, A, Op>;
};
