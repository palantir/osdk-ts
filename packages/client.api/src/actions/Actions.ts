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

import type {
  ActionDefinition,
  ActionParameterDefinition,
  ObjectActionDataType,
  ObjectSetActionDataType,
  OntologyDefinition,
} from "@osdk/api";
import type { DataValueClientToWire } from "../mapping/DataValueMapping.js";
import type { BaseObjectSet } from "../objectSet/BaseObjectSet.js";
import type { OsdkBase } from "../OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "../OsdkObjectPrimaryKeyType.js";
import type { NOOP } from "../util/NOOP.js";
import type { NullableProps } from "../util/NullableProps.js";
import type { PartialBy } from "../util/PartialBy.js";
import type {
  ActionResults,
  ValidateActionResponseV2,
} from "./ActionResults.js";
import type { ActionReturnTypeForOptions } from "./ActionReturnTypeForOptions.js";

export type ApplyActionOptions =
  | { returnEdits?: true; validateOnly?: false }
  | {
    validateOnly?: true;
    returnEdits?: false;
  };

type BaseType<APD extends ActionParameterDefinition<any, any>> =
  APD["type"] extends ObjectActionDataType<any, infer TTargetType> ?
      | OsdkBase<TTargetType>
      | OsdkObjectPrimaryKeyType<TTargetType>
    : APD["type"] extends ObjectSetActionDataType<any, infer TTargetType>
      ? BaseObjectSet<TTargetType>
    : APD["type"] extends keyof DataValueClientToWire
      ? DataValueClientToWire[APD["type"]]
    : never;

type MaybeArrayType<APD extends ActionParameterDefinition<any, any>> =
  APD["multiplicity"] extends true ? Array<BaseType<APD>>
    : BaseType<APD>;

type NotOptionalParams<X extends ActionParametersDefinition> = {
  [P in keyof X]: MaybeArrayType<X[P]>;
};

export type OsdkActionParameters<
  X extends ActionParametersDefinition,
> = NullableProps<X> extends never ? NotOptionalParams<X>
  : PartialBy<NotOptionalParams<X>, NullableProps<X>>;

export type ActionSignatureFromDef<T extends ActionDefinition<any, any, any>> =
  NonNullable<T["__OsdkActionType"]> extends never
    ? ActionSignature<T["parameters"]>
    : NonNullable<T["__OsdkActionType"]>;

export type Actions<O extends OntologyDefinition<any>> = {
  [K in keyof O["actions"]]: ActionSignatureFromDef<O["actions"][K]>;
};

type ActionParametersDefinition = Record<
  any,
  ActionParameterDefinition<any, any>
>;

export type ActionSignature<
  X extends Record<any, ActionParameterDefinition<any, any>>,
> = <
  OP extends ApplyActionOptions,
>(
  args: NOOP<OsdkActionParameters<X>>,
  options?: OP,
) => Promise<ActionReturnTypeForOptions<OP>>;

export type ActionEditResponse = ActionResults;
export type ActionValidationResponse = ValidateActionResponseV2;
