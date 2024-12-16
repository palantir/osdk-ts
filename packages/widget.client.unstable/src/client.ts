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

import { type Client, createClient } from "@osdk/client";
import {
  HostMessage,
  visitHostMessage,
  type WidgetConfig,
  type WidgetMessage,
} from "@osdk/widget-api.unstable";
import { META_TAG_HOST_ORIGIN } from "@osdk/widget-api.unstable";
import invariant from "tiny-invariant";
import { FoundryHostEventTarget } from "./host.js";
import { deserializeResponse, serializeRequest } from "./request.js";

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
   * Creates a new OSDK client for the given Ontology, automatically inferring the correct URL to make API requests to.
   */
  createOntologyClient: (ontologyRid: string) => Client;

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
      "host._unstable.fetch-response-success": (payload) => {
        hostEventTarget.dispatchEventMessage(
          "host._unstable.fetch-response-success",
          payload,
        );
      },
      "host._unstable.fetch-response-failed": (payload) => {
        hostEventTarget.dispatchEventMessage(
          "host._unstable.fetch-response-failed",
          payload,
        );
      },
      _unknown: () => {
        // Do nothing
      },
    });
  };
  const sendMessageToHost = <M extends WidgetMessage<C>>(message: M) => {
    parentWindow.postMessage(message, hostOrigin);
  };

  // Temporary fetch proxy since the widget iframe isn't allowed to make requests (yet)
  // This should be replaced by a server-side proxy instead.
  const fetchProxy: typeof fetch = async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => {
    const requestId = Math.random().toString(36).substring(7);

    return new Promise<Response>((resolve, reject: (error: Error) => void) => {
      function handleMessage(event: MessageEvent) {
        const { data } = event;
        visitHostMessage(event.data, {
          "host.update-parameters": () => {
            // do nothing
          },
          "host._unstable.fetch-response-success": (payload) => {
            if (payload.id === requestId) {
              window.removeEventListener("message", handleMessage);
              resolve(deserializeResponse(payload));
            }
          },
          "host._unstable.fetch-response-failed": (payload) => {
            if (payload.id === requestId) {
              window.removeEventListener("message", handleMessage);
              reject(new Error(data.error));
            }
          },
          _unknown: () => {
            // Do nothing
          },
        });
      }
      window.addEventListener("message", handleMessage);
      sendMessageToHost({
        type: "widget._unstable.fetch-request",
        payload: serializeRequest(requestId, input, init),
      });
    });
  };

  return {
    hostEventTarget,
    createOntologyClient: (ontologyRid: string) => {
      return createClient(
        hostOrigin,
        ontologyRid,
        // Temporary while we don't have a server-side proxying requests from within the frame
        () => Promise.resolve("unused_token"),
        undefined,
        fetchProxy,
      );
    },
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
