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
  HostMessage,
  ParameterConfig,
  ViewEmitEventMessage,
  ViewMessage,
} from "@osdk/views-api.unstable";
import { META_TAG_HOST_ORIGIN } from "@osdk/views-api.unstable";

type FoundryHostEventListener<CONFIG extends ParameterConfig> = (
  event: MessageEvent<HostMessage<CONFIG>>,
) => void;

export interface IFoundryViewClient<CONFIG extends ParameterConfig> {
  ready: () => void;
  emit: (
    message: Extract<ViewMessage<CONFIG>, ViewEmitEventMessage<CONFIG>>,
  ) => void;
}

export class FoundryViewClient<CONFIG extends ParameterConfig>
  implements IFoundryViewClient<CONFIG>
{
  private listener: FoundryHostEventListener<CONFIG> | undefined = undefined;
  private parentWindow: Window;
  private hostOrigin: string;

  constructor() {
    if (window.top == null) {
      throw new Error("[FoundryViewClient] Must be run in an iframe");
    }
    this.parentWindow = window.top;
    const metaTag = document.querySelector(
      `meta[name="${META_TAG_HOST_ORIGIN}"]`,
    );
    if (metaTag == null) {
      throw new Error(
        "[FoundryViewClient] Missing host origin meta tag "
          + META_TAG_HOST_ORIGIN,
      );
    }
    const hostOrigin = metaTag.getAttribute("content");
    if (hostOrigin == null) {
      throw new Error(
        "[FoundryViewClient] Missing host origin meta tag content",
      );
    }
    this.hostOrigin = hostOrigin;
  }

  /**
   * Notifies the host that this client is ready to receive the first parameter values
   */
  public ready() {
    this.sendMessage({ type: "view.ready" });
  }

  public subscribe(listener: FoundryHostEventListener<CONFIG>) {
    this.listener = listener;
    window.addEventListener("message", (event) => {
      if (event.origin !== this.hostOrigin) {
        // Reject messages that aren't coming from the configured host
        return;
      }
      if (this.listener == null) {
        return;
      }
      this.listener(event);
    });
  }

  public unsubscribe() {
    if (this.listener == null) {
      return;
    }
    window.removeEventListener("message", this.listener);
  }

  /**
   * Emits an event to the parent frame
   */
  public emit(
    message: Extract<ViewMessage<CONFIG>, ViewEmitEventMessage<CONFIG>>,
  ) {
    this.sendMessage(message);
  }

  private sendMessage(message: ViewMessage<CONFIG>) {
    this.parentWindow.postMessage(message, this.hostOrigin);
  }
}
