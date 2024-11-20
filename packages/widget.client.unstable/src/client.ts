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
} from "@osdk/widget-api.unstable";
import { META_TAG_HOST_ORIGIN } from "@osdk/widget-api.unstable";
import invariant from "tiny-invariant";
import { FoundryHostEventTarget } from "./host.js";

export interface FoundryWidgetClient<C extends WidgetConfig<C["parameters"]>> {
  /**
   * Notifies the host that this client is ready to receive the first parameter values
   */
  ready: () => void;

  /**
   * Emits an event with the given ID and payload
   */
  emitEvent: <M extends WidgetMessage.EmitEvent<C>>(
    eventId: M["payload"]["eventId"],
    payload: Omit<M["payload"], "eventId">,
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

export function createFoundryWidgetClient<
  C extends WidgetConfig<C["parameters"]>,
>(): FoundryWidgetClient<C> {
  invariant(window.top, "[FoundryWidgetClient] Must be run in an iframe");
  const parentWindow = window.top;
  const metaTag = document.querySelector(
    `meta[name="${META_TAG_HOST_ORIGIN}"]`,
  );
  invariant(
    metaTag,
    "[FoundryWidgetClient] Missing host origin meta tag "
      + META_TAG_HOST_ORIGIN,
  );
  const hostOrigin = metaTag.getAttribute("content");
  invariant(
    hostOrigin,
    "[FoundryWidgetClient] Missing host origin meta tag content",
  );
  const hostEventTarget = new FoundryHostEventTarget<C>();

  const listenForHostMessages = (event: MessageEvent<HostMessage<C>>) => {
    visitHostMessage(event.data, {
      "host.update-parameters": (payload) => {
        hostEventTarget.dispatchEventMessage("host.update-parameters", payload);
      },
      _unknown: () => {
        // Do nothing
      },
    });
  };
  const sendMessageToHost = <M extends WidgetMessage<C>>(message: M) => {
    parentWindow.postMessage(message, hostOrigin);
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
      window.addEventListener("message", (event) => {
        if (event.origin !== hostOrigin) {
          // Reject messages that aren't coming from the configured host
          return;
        }
        listenForHostMessages(event);
      });
    },
    unsubscribe: () => {
      window.removeEventListener("message", listenForHostMessages);
    },
  };
}
