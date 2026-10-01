/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  HostMessage,
  ParameterConfig,
  ParameterValue,
  WidgetConfig,
  WidgetMessage,
} from "@osdk/widget.api";

/** @public */
export type PreviewParameterType =
  | { type: Exclude<ParameterValue.Type, "array"> }
  | { type: "array"; subType: ParameterValue.PrimitiveType };

/** @public */
export type PreviewParameter = PreviewParameterType & {
  id: string;
  displayName: string;
};

/** @public */
export interface PreviewEvent {
  id: string;
  displayName: string;
  parameterUpdateIds: readonly string[];
}

/** @public */
export interface PreviewConfig {
  parameters: readonly PreviewParameter[];
  events: readonly PreviewEvent[];
}

/** @public */
export type PreviewMessage =
  | WidgetMessage<WidgetConfig<ParameterConfig>>
  | HostMessage<WidgetConfig<ParameterConfig>>
  | { type: "custom-error"; payload: { error: unknown } };

/** @public */
export interface MessageLogEntry {
  timestamp: Date;
  message: PreviewMessage;
}
