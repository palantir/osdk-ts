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
  type ParameterConfig,
  type ViewMessage,
  visitHostMessage,
} from "@osdk/views-api.unstable";
import { META_TAG_HOST_ORIGIN } from "@osdk/views-api.unstable";
import invariant from "tiny-invariant";
import { FoundryHostEventTarget } from "./host.js";

export interface FoundryViewClient<CONFIG extends ParameterConfig> {
  /**
   * Notifies the host that this client is ready to receive the first parameter values
   */
  ready: () => void;

  /**
   * Emits an event to the parent frame
   */
  emit: <M extends Extract<ViewMessage<CONFIG>, ViewMessage.EmitEvent<CONFIG>>>(
    type: M["type"],
    message: M["payload"],
  ) => void;

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
  hostEventTarget: FoundryHostEventTarget<CONFIG>;
}

export function createFoundryViewClient<
  CONFIG extends ParameterConfig,
>(): FoundryViewClient<CONFIG> {
  invariant(window.top, "[FoundryViewClient] Must be run in an iframe");
  const parentWindow = window.top;
  const metaTag = document.querySelector(
    `meta[name="${META_TAG_HOST_ORIGIN}"]`,
  );
  invariant(
    metaTag,
    "[FoundryViewClient] Missing host origin meta tag " + META_TAG_HOST_ORIGIN,
  );
  const hostOrigin = metaTag.getAttribute("content");
  invariant(
    hostOrigin,
    "[FoundryViewClient] Missing host origin meta tag content",
  );
  const hostEventTarget = new FoundryHostEventTarget<CONFIG>();

  const listenForHostMessages = (event: MessageEvent<HostMessage<CONFIG>>) => {
    visitHostMessage(event.data, {
      "host.update-parameters": (payload) => {
        hostEventTarget.dispatchEventMessage("host.update-parameters", payload);
      },
      _unknown: () => {
        // Do nothing
      },
    });
  };
  const sendMessage = (message: ViewMessage<CONFIG>) => {
    parentWindow.postMessage(message, hostOrigin);
  };

  return {
    hostEventTarget,
    ready: () => {
      sendMessage({
        type: "view.ready",
        payload: {
          apiVersion: HostMessage.Version,
        },
      });
    },
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
    emit: (type, payload) => {
      sendMessage({
        type,
        payload,
      });
    },
  };
}
