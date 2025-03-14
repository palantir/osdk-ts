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

import type { ActionParam } from "@osdk/api";
import type {
  ActionParameterType,
  ActionParameterV2,
  ActionTypeV2,
  ApplyActionRequestV2,
  ParameterId,
} from "@osdk/foundry.ontologies";

type TH_ActionParameterType_Primitive<X extends ActionParameterType> =
  ActionParam.PrimitiveType<
    Exclude<X["type"], "object" | "array" | "objectSet" | "interfaceObject">
  >;

type TH_ActionParameterType<X extends ActionParameterType> = X extends
  { type: "array" }
  ? TH_ActionParameterType_Primitive<Extract<X, { type: "array" }>["subType"]>[]
  : X extends { type: "object" } ? string | number | boolean
  : X extends { type: "objectSet" } ? string
  : X extends { type: "interfaceObject" }
    ? { objectTypeApiName: string; primaryKeyValue: string }
  : TH_ActionParameterType_Primitive<X>;

type TH_Parameters<X extends Record<ParameterId, ActionParameterV2>> =
  & {
    [K in keyof X & string as X[K]["required"] extends true ? K : never]:
      TH_ActionParameterType<X[K]["dataType"]>;
  }
  & {
    [K in keyof X & string as X[K]["required"] extends true ? never : K]?:
      TH_ActionParameterType<X[K]["dataType"]>;
  };

export type TH_ApplyActionRequestV2<X extends ActionTypeV2> =
  & Omit<ApplyActionRequestV2, "parameters">
  & { parameters: TH_Parameters<X["parameters"]> };
