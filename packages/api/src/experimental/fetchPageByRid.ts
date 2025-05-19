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
  FetchPageArgs,
  NullabilityAdherence,
  ObjectSetArgs,
} from "../object/FetchPageArgs.js";
import type { FetchPageResult } from "../object/FetchPageResult.js";

import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { Experiment } from "./Experiment.js";

type fetchPageByRidFn = <
  Q extends ObjectOrInterfaceDefinition,
  const L extends PropertyKeys<Q>,
  const R extends boolean,
  const S extends NullabilityAdherence,
  const T extends boolean,
  Z extends ObjectSetArgs.OrderByOptions<L> = never,
>(
  objectType: Q,
  rids: string[],
  options?: FetchPageArgs<Q, L, R, any, S, T, never, Z>,
) => Promise<FetchPageResult<Q, L, R, S, T, Z>>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid: Experiment<
  "2.2.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid",
  { fetchPageByRid: fetchPageByRidFn }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid",
  type: "experiment",
  version: "2.2.0",
};
