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
  WidgetConfig,
} from "../config.js";
import type { HostMessage } from "./hostMessages.js";

// Interfaces and type guards for messages passed from the widget to the host Foundry UI

interface WidgetBaseMessage<T extends string, P = unknown> {
  type: T;
  payload: P;
}

type EmitEventIdMap<C extends WidgetConfig<C["parameters"]>> = {
  [K in EventId<C>]: {
    eventId: K;
    parameterUpdates: EventParameterValueMap<C, K>;
  };
};

export namespace WidgetMessage {
  export namespace Payload {
    export interface Ready {
      apiVersion: HostMessage.Version;
    }

    export type EmitEvent<C extends WidgetConfig<C["parameters"]>> =
      EmitEventIdMap<C>[EventId<C>];
  }

  export type Payload<C extends WidgetConfig<C["parameters"]>> =
    | Payload.Ready
    | Payload.EmitEvent<C>;

  /**
   * Emit when the widget is ready to start receiving messages from the host Foundry UI
   */
  export interface Ready
    extends WidgetBaseMessage<"widget.ready", Payload.Ready>
  {}

  /**
   * Event payload that the widget sends to the host Foundry UI
   */
  export interface EmitEvent<C extends WidgetConfig<C["parameters"]>>
    extends WidgetBaseMessage<"widget.emit-event", Payload.EmitEvent<C>>
  {}
}

export type WidgetMessage<C extends WidgetConfig<C["parameters"]>> =
  | WidgetMessage.Ready
  | WidgetMessage.EmitEvent<C>;

export function isWidgetReadyMessage<C extends WidgetConfig<C["parameters"]>>(
  event: WidgetMessage<C>,
): event is WidgetMessage.Ready {
  return event.type === "widget.ready";
}

export function isWidgetEmitEventMessage<
  C extends WidgetConfig<C["parameters"]>,
>(event: WidgetMessage<C>): event is WidgetMessage.EmitEvent<C> {
  return event.type === "widget.emit-event";
}

type WidgetMessageVisitor<C extends WidgetConfig<C["parameters"]>> =
  & {
    [T in WidgetMessage<C>["type"]]: (
      payload: Extract<WidgetMessage<C>, { type: T }> extends {
        payload: infer P;
      } ? P
        : never,
    ) => void;
  }
  & {
    _unknown: (type: string) => void;
  };

export function visitWidgetMessage<C extends WidgetConfig<C["parameters"]>>(
  message: WidgetMessage<C>,
  visitor: WidgetMessageVisitor<C>,
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
