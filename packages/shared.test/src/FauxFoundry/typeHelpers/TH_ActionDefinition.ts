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
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  DataValueClientToWire,
} from "@osdk/api";
import type { ActionParameterV2, ParameterId } from "@osdk/foundry.ontologies";
import type { TH_ActionParameterV2 } from "./TH_ActionParameterV2.js";
import type { TH_ActionTypeV2 } from "./TH_ActionTypeV2.js";

export interface TH_ActionDefinition<
  X extends TH_ActionTypeV2<Record<ParameterId, ActionParameterV2>>,
> extends ActionDefinition<any> {
  __DefinitionMetadata: TH_ActionMetadata<X>;
}

export interface TH_ActionMetadata<
  X extends TH_ActionTypeV2<Record<ParameterId, ActionParameterV2>>,
> extends ActionMetadata {
  parameters: X extends TH_ActionTypeV2<infer P> ? {
      [K in keyof P]: P[K] extends TH_ActionParameterV2<infer APT, infer R>
        ? (APT extends "string" | "integer" ? {
            multiplicity: false;
            nullable: R extends true ? false : true;
            type: APT;
          }
          : never)
        : never;
    }
    : never;

  // not part of ActionMetadata but used for types in @osdk/client
  signatures: Signatures<TH_ActionMetadata<X>["parameters"]>;
}
interface Signatures<X extends Record<any, ActionMetadata.Parameter<any>>> {
  applyAction: ActionSignature<X>;

  batchApplyAction: <
    A extends OsdkActionParameters<X>[],
    OP extends ApplyBatchActionOptions,
  >(args: A, options?: OP) => Promise<ActionReturnTypeForOptions<OP>>;
}
type BaseType<APD extends Pick<ActionMetadata.Parameter<any>, "type">> =
  APD["type"] extends ActionMetadata.DataType.Object<infer TTargetType>
    ? ActionParam.ObjectType<TTargetType>
    : APD["type"] extends ActionMetadata.DataType.ObjectSet<infer TTargetType>
      ? ActionParam.ObjectSetType<TTargetType>
    : APD["type"] extends ActionMetadata.DataType.Struct<infer TStructType>
      ? ActionParam.StructType<TStructType>
    : APD["type"] extends keyof DataValueClientToWire
      ? ActionParam.PrimitiveType<APD["type"]>
    : never;
type ActionSignature<
  X extends Record<any, ActionMetadata.Parameter<any>>,
> = <
  A extends OsdkActionParameters<X>,
  OP extends ApplyActionOptions,
>(
  args: A,
  options?: OP,
) => Promise<
  ActionReturnTypeForOptions<OP>
>;
type ActionParametersDefinition = Record<
  any,
  ActionMetadata.Parameter<any>
>;
type OsdkActionParameters<
  X extends ActionParametersDefinition,
> = PartialBy<FullParams<X>, NullableParamKeys<X>>;
type NullableParamKeys<T extends Record<string, { nullable?: boolean }>> =
  keyof {
    [K in keyof T as T[K]["nullable"] extends true ? K : never]: "";
  };
type FullParams<X extends ActionParametersDefinition> = {
  [P in keyof X]: MaybeArrayType<X[P]>;
};
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type MaybeArrayType<APD extends ActionMetadata.Parameter<any>> =
  APD["multiplicity"] extends true ? Array<BaseType<APD>> : BaseType<APD>;
