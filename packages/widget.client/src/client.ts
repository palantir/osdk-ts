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

import {
  HostMessage,
  visitHostMessage,
  type WidgetConfig,
  type WidgetMessage,
} from "@osdk/widget.api";
import invariant from "tiny-invariant";
import { FoundryHostEventTarget } from "./host.js";

export interface FoundryWidgetClient<C extends WidgetConfig<C["parameters"]>> {
  /**
   * Notifies the host that this client is ready to receive the first parameter values
   */
  ready: () => void;

  /**
   * Notifies the host that the widget has resized
   */
  resize: (payload: WidgetMessage.Payload.Resize) => void;

  /**
   * Emits an event with the given ID and payload
   */
  emitEvent: <
    M extends WidgetMessage.EmitEvent<C>,
    ID extends M["payload"]["eventId"],
  >(
    eventId: ID,
    payload: Omit<
      ExtractEmitEventPayload<M, ID>,
      "eventId"
    >,
  ) => void;

  /**
   * Sends a message to the parent frame.
   * It is recommended to use the convenience methods for individual messages (e.g. ready or emitEvent) instead
   */
  sendMessage: <M extends WidgetMessage<C>>(message: M) => void;

  /**
   * Subscribes to events from the host, invoking the listener when a message is received
   */
  subscribe: () => void;

  /**
   * Unsubscribes a previously subscribed listener from host events, if one exists
   */
  unsubscribe: () => void;

  /**
   * Event targets on which you can subscribe to specific host messages
   */
  hostEventTarget: FoundryHostEventTarget<C>;
}

type ExtractEmitEventPayload<
  M extends WidgetMessage.EmitEvent<any>,
  ID extends M["payload"]["eventId"],
> = Extract<
  M["payload"],
  { eventId: ID }
>;

interface PalantirWidgetApiEvents<C extends WidgetConfig<C["parameters"]>> {
  message: CustomEvent<HostMessage<C>>;
}

interface PalantirWidgetApi<C extends WidgetConfig<C["parameters"]>> {
  sendMessage: <M extends WidgetMessage<C>>(message: M) => void;
  addEventListener<K extends keyof PalantirWidgetApiEvents<C>>(
    type: K,
    listener: (ev: PalantirWidgetApiEvents<C>[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof PalantirWidgetApiEvents<C>>(
    type: K,
    listener: (ev: PalantirWidgetApiEvents<C>[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
}

export function createFoundryWidgetClient<
  C extends WidgetConfig<C["parameters"]>,
>(): FoundryWidgetClient<C> {
  invariant(
    "__PALANTIR_WIDGET_API__" in window,
    "[FoundryWidgetClient] Missing __PALANTIR_WIDGET_API__ in window",
  );
  const widgetApi = window.__PALANTIR_WIDGET_API__ as PalantirWidgetApi<C>;
  const hostEventTarget = new FoundryHostEventTarget<C>();

  const listenForHostMessages = (event: CustomEvent<HostMessage<C>>) => {
    visitHostMessage(event.detail, {
      "host.update-parameters": (payload) => {
        hostEventTarget.dispatchEventMessage("host.update-parameters", payload);
      },
      _unknown: () => {
        // Do nothing
      },
    });
  };
  const sendMessageToHost = <M extends WidgetMessage<C>>(message: M) => {
    widgetApi.sendMessage(message);
  };

  return {
    hostEventTarget,
    ready: () => {
      sendMessageToHost({
        type: "widget.ready",
        payload: {
          apiVersion: HostMessage.Version,
        },
      });
    },
    resize: (payload) => {
      sendMessageToHost({
        type: "widget.resize",
        payload,
      });
    },
    emitEvent: (eventId, payload) => {
      sendMessageToHost({
        type: "widget.emit-event",
        payload: {
          eventId,
          ...payload,
        },
      });
    },
    sendMessage: sendMessageToHost,
    subscribe: () => {
      widgetApi.addEventListener("message", listenForHostMessages);
    },
    unsubscribe: () => {
      widgetApi.removeEventListener("message", listenForHostMessages);
    },
  };
}
