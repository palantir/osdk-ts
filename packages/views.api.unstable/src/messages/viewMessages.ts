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

import type { ParameterConfig, ParameterValueMap } from "../config.js";

// Interfaces and type guards for messages passed from the child view to the host Foundry UI

/**
 * Emit when the child view is ready to start receiving messages from the host Foundry UI
 */
export interface ViewReadyMessage {
  type: "view.ready";
}

export function isViewReadyMessage<CONFIG extends ParameterConfig>(
  event: ViewMessage<CONFIG>,
): event is ViewReadyMessage {
  return event.type === "view.ready";
}

/**
 * Event payload that the child view sends to the host Foundry UI
 */
export interface ViewEmitEventMessage<CONFIG extends ParameterConfig> {
  type: "view.emit-event";
  eventId: string;
  parameterUpdates: ParameterValueMap<CONFIG>;
}

export function isViewEmitEventMessage<CONFIG extends ParameterConfig>(
  event: ViewMessage<CONFIG>,
): event is ViewEmitEventMessage<CONFIG> {
  return event.type === "view.emit-event";
}

export type ViewMessage<CONFIG extends ParameterConfig> =
  | ViewReadyMessage
  | ViewEmitEventMessage<CONFIG>;
