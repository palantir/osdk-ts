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

export interface HostMessageEventListener<
  C extends WidgetConfig<C["parameters"]>,
  M extends HostMessage<C>,
> {
  (event: CustomEvent<M["payload"]>): void;
}

export interface HostMessageEventListenerObject<
  C extends WidgetConfig<C["parameters"]>,
  M extends HostMessage<C>,
> {
  handleEvent(object: CustomEvent<M["payload"]>): void;
}

export class FoundryHostEventTarget<
  C extends WidgetConfig<C["parameters"]>,
> extends EventTarget {
  addEventListener<M extends HostMessage<C>>(
    type: M["type"],
    callback:
      | HostMessageEventListener<C, M>
      | HostMessageEventListenerObject<C, M>
      | null,
    options?: AddEventListenerOptions | boolean,
  ): void {
    super.addEventListener(type, callback as EventListener, options);
  }

  removeEventListener<M extends HostMessage<C>>(
    type: M["type"],
    callback:
      | HostMessageEventListener<C, M>
      | HostMessageEventListenerObject<C, M>
      | null,
    options?: EventListenerOptions | boolean,
  ): void {
    super.removeEventListener(type, callback as EventListener, options);
  }

  public dispatchEventMessage<M extends HostMessage<C>>(
    type: M["type"],
    payload: M["payload"],
  ) {
    this.dispatchEvent(
      new CustomEvent<M["payload"]>(type, { detail: payload }),
    );
  }
}
