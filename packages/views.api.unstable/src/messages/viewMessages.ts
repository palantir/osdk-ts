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
  EventId,
  EventParameterValueMap,
  ParameterValueMap,
  ViewConfig,
} from "../config.js";
import type { HostMessage } from "./hostMessages.js";

// Interfaces and type guards for messages passed from the child view to the host Foundry UI

interface ViewBaseMessage<T extends string, P = unknown> {
  type: T;
  payload: P;
}

type EmitEventIdMap<CONFIG extends ViewConfig> = {
  [K in EventId<CONFIG>]: {
    eventId: K;
    parameterUpdates: EventParameterValueMap<CONFIG, K>;
  };
};

export namespace ViewMessage {
  export namespace Payload {
    export interface Ready {
      apiVersion: HostMessage.Version;
    }

    export type EmitEvent<CONFIG extends ViewConfig> = EmitEventIdMap<
      CONFIG
    >[EventId<CONFIG>];
  }

  export type Payload<CONFIG extends ViewConfig> =
    | Payload.Ready
    | Payload.EmitEvent<CONFIG>;

  /**
   * Emit when the child view is ready to start receiving messages from the host Foundry UI
   */
  export interface Ready extends ViewBaseMessage<"view.ready", Payload.Ready> {}

  /**
   * Event payload that the child view sends to the host Foundry UI
   */
  export interface EmitEvent<CONFIG extends ViewConfig>
    extends ViewBaseMessage<"view.emit-event", Payload.EmitEvent<CONFIG>>
  {}
}

export type ViewMessage<CONFIG extends ViewConfig> =
  | ViewMessage.Ready
  | ViewMessage.EmitEvent<CONFIG>;

export function isViewReadyMessage<CONFIG extends ViewConfig>(
  event: ViewMessage<CONFIG>,
): event is ViewMessage.Ready {
  return event.type === "view.ready";
}

export function isViewEmitEventMessage<CONFIG extends ViewConfig>(
  event: ViewMessage<CONFIG>,
): event is ViewMessage.EmitEvent<CONFIG> {
  return event.type === "view.emit-event";
}

type ViewMessageVisitor<CONFIG extends ViewConfig> =
  & {
    [T in ViewMessage<CONFIG>["type"]]: (
      payload: Extract<ViewMessage<CONFIG>, { type: T }> extends {
        payload: infer P;
      } ? P
        : never,
    ) => void;
  }
  & {
    _unknown: (type: string) => void;
  };

export function visitViewMessage<CONFIG extends ViewConfig>(
  message: ViewMessage<CONFIG>,
  visitor: ViewMessageVisitor<CONFIG>,
) {
  const { type, payload } = message;
  const handler = visitor[type];
  if (handler) {
    // Typescript creates an & of the parameters instead of a union
    (handler as any)(payload);
  } else {
    visitor._unknown(type);
  }
}
