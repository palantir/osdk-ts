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
  ObjectActionDataType,
  ObjectSetActionDataType,
  OntologyDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import type { ObjectSet } from "../index.js";
import type { Attachment } from "../object/Attachment.js";
import type {
  OsdkObjectFrom,
  OsdkObjectPrimaryKeyType,
} from "../OsdkObjectFrom.js";
import type { NOOP } from "../util/NOOP.js";
import type { NullableProps } from "../util/NullableProps.js";
import type { PartialByNotStrict } from "../util/PartialBy.js";
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
} from "./applyAction.js";

type ActionKeysFrom<O extends OntologyDefinition<any>> = keyof O["actions"];

type ActionDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
> = O["actions"][K];

type ActionParameterKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
> = keyof ActionDefinitionFrom<O, K>["parameters"];

type ActionParameterDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
  P extends keyof O["actions"][K]["parameters"],
> = ActionDefinitionFrom<O, K>["parameters"][P];

type ActionParameterTypeFrom<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
  P extends ActionParameterKeysFrom<O, K>,
> = ActionParameterDefinitionFrom<O, K, P>["type"];

// we have to override the @osdk/api WirePropertyTypes to specify how we handle the Attachment types
interface OverrideWirePropertyTypes extends WirePropertyTypes {
  attachment: Attachment;
}

type OsdkActionParameterBaseType<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
  P extends keyof O["actions"][K]["parameters"],
> = ActionParameterTypeFrom<O, K, P> extends
  ObjectActionDataType<infer TObjectName>
  ? OsdkObjectFrom<TObjectName, O> | OsdkObjectPrimaryKeyType<TObjectName, O>
  : ActionParameterTypeFrom<O, K, P> extends
    ObjectSetActionDataType<infer TObjectName> ? ObjectSet<O, TObjectName>
  : ActionParameterTypeFrom<O, K, P> extends keyof OverrideWirePropertyTypes
    ? OverrideWirePropertyTypes[ActionParameterTypeFrom<O, K, P>]
  : never;

type OsdkActionParameterMaybeArrayType<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
  P extends ActionParameterKeysFrom<O, K>,
> = ActionParameterDefinitionFrom<O, K, P>["multiplicity"] extends true
  ? Array<OsdkActionParameterBaseType<O, K, P>>
  : OsdkActionParameterBaseType<O, K, P>;

type OsdkActionParametersNotOptional<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
> = {
  [P in ActionParameterKeysFrom<O, K>]: OsdkActionParameterMaybeArrayType<
    O,
    K,
    P
  >;
};

type OsdkActionParameters<
  O extends OntologyDefinition<any>,
  K extends ActionKeysFrom<O>,
> = NullableProps<ActionDefinitionFrom<O, K>["parameters"]> extends never
  ? OsdkActionParametersNotOptional<O, K>
  : PartialByNotStrict<
    OsdkActionParametersNotOptional<O, K>,
    NullableProps<ActionDefinitionFrom<O, K>["parameters"]>
  >;

export type Actions<O extends OntologyDefinition<any>> = {
  [K in ActionKeysFrom<O>]: <OP extends ApplyActionOptions>(
    args: NOOP<OsdkActionParameters<O, K>>,
    options?: OP,
  ) => Promise<ActionReturnTypeForOptions<OP>>;
};
