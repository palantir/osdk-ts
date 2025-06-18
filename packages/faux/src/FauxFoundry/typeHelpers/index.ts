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

export { actionTypeBuilder, createActionRid } from "./ActionTypeBuilder.js";
export type { ActionTypeBuilderResult } from "./ActionTypeBuilder.js";
export type { JustProps } from "./JustProps.js";
export type {
  TH_ActionDefinition as ActionDefinition,
  TH_ActionMetadata as ActionMetadata,
} from "./TH_ActionDefinition.js";
export { createActionParameterV2 } from "./TH_ActionParameterV2.js";
export type { TH_ActionParameterV2 as ActionParameterV2 } from "./TH_ActionParameterV2.js";
export { createAction as createActionType } from "./TH_ActionTypeV2.js";
export type { TH_ActionTypeV2 as ActionTypeV2 } from "./TH_ActionTypeV2.js";
export type { TH_ApplyActionRequestV2 as ApplyActionRequestV2 } from "./TH_ApplyActionRequestV2.js";
export type { TH_ObjectTypeFullMetadata as ObjectTypeFullMetadata } from "./TH_ObjectTypeFullMetadata.js";
