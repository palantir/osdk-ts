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
  NullabilityAdherence,
  SelectArg,
} from "../object/FetchPageArgs.js";

import type { PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { ExtractOptions, Osdk } from "../OsdkObjectFrom.js";
import type { Experiment } from "./Experiment.js";

type fetchOneByRidFn = <
  Q extends ObjectTypeDefinition,
  const L extends PropertyKeys<Q>,
  const R extends boolean,
  const S extends false | "throw" = NullabilityAdherence.Default,
>(
  objectType: Q,
  rid: string,
  options?: SelectArg<Q, L, R, S>,
) => Promise<Osdk.Instance<Q, ExtractOptions<R, S>, L>>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid: Experiment<
  "2.1.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid",
  { fetchOneByRid: fetchOneByRidFn }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid",
  type: "experiment",
  version: "2.1.0",
};
