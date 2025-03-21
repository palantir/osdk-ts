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

import type { ActionParameterV2, ParameterId } from "@osdk/foundry.ontologies";
import { wireActionTypeV2ToSdkActionMetadata } from "@osdk/generator-converters";
import * as crypto from "node:crypto";
import type { Merge } from "type-fest";
import type {
  TH_ActionDefinition,
  TH_ActionMetadata,
} from "./TH_ActionDefinition.js";
import type {
  SimpleActionParamTypes,
  TH_ActionParameterV2,
} from "./TH_ActionParameterV2.js";
import { createActionParameterV2 } from "./TH_ActionParameterV2.js";
import type { TH_ActionTypeV2 } from "./TH_ActionTypeV2.js";
import { createAction } from "./TH_ActionTypeV2.js";

export function createActionRid() {
  return `ri.ontology.main.action-type.${crypto.randomUUID()}`;
}

type NEW_P<
  P extends Record<ParameterId, ActionParameterV2>,
  K extends ParameterId,
  V extends ActionParameterV2,
> = Merge<P, { [KK in K]: V }>;

export interface ActionTypeBuilderResult<
  P extends Record<ParameterId, ActionParameterV2> = {},
> {
  actionTypeV2: TH_ActionTypeV2<P>;
  actionDefinition: TH_ActionDefinition<TH_ActionTypeV2<P>>;
}

export class ActionTypeBuilder<
  P extends Record<ParameterId, ActionParameterV2> = {},
> {
  private action: TH_ActionTypeV2<P>;

  constructor(action: TH_ActionTypeV2<P> | string) {
    if (typeof action === "string") {
      this.action = createAction({
        apiName: action,
        parameters: {},
      }) as TH_ActionTypeV2<P>;
    } else {
      this.action = action;
    }
  }

  addParameter<
    K extends ParameterId,
    V extends ActionParameterV2 | SimpleActionParamTypes,
    R extends boolean = false,
  >(
    paramId: K,
    parameter: V,
    required: R | false = false,
  ): ActionTypeBuilder<
    NEW_P<
      P,
      K,
      V extends SimpleActionParamTypes ? TH_ActionParameterV2<V, R> : never
    >
  > {
    const v = (typeof parameter === "string")
      ? createActionParameterV2(parameter, required)
      : parameter;

    return new ActionTypeBuilder({
      ...this.action,
      parameters: {
        ...this.action.parameters,
        [paramId]: v,
      },
    } as TH_ActionTypeV2<any>) as ActionTypeBuilder<any>;
  }

  build(): ActionTypeBuilderResult<P> {
    const actionTypeV2 = this.action;
    const actionMetadata = wireActionTypeV2ToSdkActionMetadata(
      actionTypeV2,
    ) as TH_ActionMetadata<TH_ActionTypeV2<P>>;

    return {
      actionTypeV2: this.action,
      actionDefinition: {
        __DefinitionMetadata: actionMetadata,
        apiName: actionMetadata.apiName,
        type: "action",
      },
    };
  }
}
