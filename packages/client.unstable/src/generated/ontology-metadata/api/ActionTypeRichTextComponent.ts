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

import type { ActionTypeRichTextMessage } from "./ActionTypeRichTextMessage.js";
import type { ActionTypeRichTextParameterPropertyReference } from "./ActionTypeRichTextParameterPropertyReference.js";
import type { ActionTypeRichTextParameterReference } from "./ActionTypeRichTextParameterReference.js";
export interface ActionTypeRichTextComponent_message {
  type: "message";
  message: ActionTypeRichTextMessage;
}

export interface ActionTypeRichTextComponent_parameter {
  type: "parameter";
  parameter: ActionTypeRichTextParameterReference;
}

export interface ActionTypeRichTextComponent_parameterProperty {
  type: "parameterProperty";
  parameterProperty: ActionTypeRichTextParameterPropertyReference;
}
/**
 * Generic type that can used to define a string that should have Action execution details injected into it when
 * it is rendered.
 */
export type ActionTypeRichTextComponent =
  | ActionTypeRichTextComponent_message
  | ActionTypeRichTextComponent_parameter
  | ActionTypeRichTextComponent_parameterProperty;
