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
  ActionParameterV2,
  ActionTypeApiName,
  ActionTypeV2,
  ParameterId,
} from "@osdk/foundry.ontologies";
import { createActionRid } from "./ActionTypeBuilder.js";

export interface TH_ActionTypeV2<
  P extends Record<ParameterId, ActionParameterV2>,
> extends ActionTypeV2 {
  parameters: P;
}
export function createAction<P extends Record<ParameterId, ActionParameterV2>>(
  {
    apiName,
    parameters,
    rid = createActionRid(),
    operations = [],
    status = "ACTIVE",
    description,
  }: Partial<Omit<ActionTypeV2, "apiName" | "parameters">> & {
    apiName: ActionTypeApiName;
    parameters: P;
  },
): TH_ActionTypeV2<P> {
  return {
    apiName,
    parameters,
    rid,
    operations,
    status,
    description: description ?? `Action ${apiName}`,
  } as const;
}
