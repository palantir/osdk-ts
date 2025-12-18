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

import type { DerivedProperty } from "../derivedProperties/DerivedProperty.js";
import type {
  FetchPageArgs,
  NullabilityAdherence,
} from "../object/FetchPageArgs.js";
import type {
  FetchPageResult,
  SingleOsdkResult,
} from "../object/FetchPageResult.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { PageResult } from "../PageResult.js";
import type { Experiment } from "./Experiment.js";

type fetchPageByRidFn = <
  Q extends ObjectOrInterfaceDefinition,
  const L extends PropertyKeys<Q>,
  const R extends boolean,
  const S extends NullabilityAdherence,
  const T extends boolean,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  objectType: Q,
  rids: string[],
  options?: FetchPageArgs<Q, L | (string & keyof RDPs), R, any, S, T> & {
    $withProperties?: {
      [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
    };
  },
) => Promise<
  PageResult<SingleOsdkResult<Q, L | (string & keyof RDPs), R, S, RDPs, T>>
>;

export type FetchPageByRidPayload = {
  fetchPageByRid: fetchPageByRidFn;
  fetchPageByRidNoType: fetchPageByRidNoTypeFn;
};

type fetchPageByRidNoTypeFn = <
  const R extends boolean,
  const S extends NullabilityAdherence,
  const T extends boolean,
>(
  rids: readonly string[],
  options?: FetchPageArgs<ObjectOrInterfaceDefinition, any, R, any, S, T>,
) => Promise<FetchPageResult<ObjectOrInterfaceDefinition, any, R, S, T>>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid: Experiment<
  "2.2.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid",
  FetchPageByRidPayload
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid",
  type: "experiment",
  version: "2.2.0",
};
