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

import type { ActionParameterV2 } from "@osdk/foundry.ontologies";

export type SimpleActionParamTypes = "string" | "integer" | "boolean";

export type TH_ActionParameterV2<
  T extends SimpleActionParamTypes,
  R extends boolean,
> =
  & {
    dataType: { type: T };
    required: R;
  }
  & ActionParameterV2;

export function createActionParameterV2<
  T extends SimpleActionParamTypes,
  R extends boolean,
>(type: T, required: R): TH_ActionParameterV2<T, R> {
  return {
    dataType: { type },
    required,
  } as TH_ActionParameterV2<T, R>;
}
