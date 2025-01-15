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

import type { HostMessage, WidgetConfig } from "@osdk/widget-api.unstable";

export interface HostMessageEventListener<P extends HostMessage.Payload> {
  (event: CustomEvent<P>): void;
}

export interface HostMessageEventListenerObject<P extends HostMessage.Payload> {
  handleEvent(object: CustomEvent<P>): void;
}

export class FoundryHostEventTarget<
  C extends WidgetConfig<C["parameters"]>,
> extends EventTarget {
  addEventListener<T extends HostMessage<C>["type"]>(
    type: T,
    callback:
      | HostMessageEventListener<
        (HostMessage<C> & { type: T })["payload"]
      >
      | HostMessageEventListenerObject<
        (HostMessage<C> & { type: T })["payload"]
      >
      | null,
    options?: AddEventListenerOptions | boolean,
  ): void {
    super.addEventListener(type, callback as EventListener, options);
  }

  removeEventListener<T extends HostMessage<C>["type"]>(
    type: T,
    callback:
      | HostMessageEventListener<
        (HostMessage<C> & { type: T })["payload"]
      >
      | HostMessageEventListenerObject<
        (HostMessage<C> & { type: T })["payload"]
      >
      | null,
    options?: EventListenerOptions | boolean,
  ): void {
    super.removeEventListener(type, callback as EventListener, options);
  }

  public dispatchEventMessage<T extends HostMessage<C>["type"]>(
    type: T,
    payload: (HostMessage<C> & { type: T })["payload"],
  ): void {
    this.dispatchEvent(
      new CustomEvent<HostMessage.Payload>(type, {
        detail: payload,
      }),
    );
  }
}
