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

import type { AsyncParameterValueMap, WidgetConfig } from "../config.js";

// Interfaces and type guards for messages passed from the host Foundry UI to the widget
interface HostBaseMessage<T extends string, P = unknown> {
  type: T;
  payload: P;
}

export namespace HostMessage {
  export const Version = "1.0.0";
  export type Version = typeof Version;

  export namespace Payload {
    export interface UpdateParameters<C extends WidgetConfig<C["parameters"]>> {
      parameters: AsyncParameterValueMap<C>;
    }
  }

  export interface UpdateParameters<C extends WidgetConfig<C["parameters"]>>
    extends
      HostBaseMessage<
        "host.update-parameters",
        Payload.UpdateParameters<C>
      >
  {}
}

// Union type
export type HostMessage<C extends WidgetConfig<C["parameters"]>> =
  HostMessage.UpdateParameters<C>;

export function isHostParametersUpdatedMessage<
  C extends WidgetConfig<C["parameters"]>,
>(event: HostMessage<C>): event is HostMessage.UpdateParameters<C> {
  return event.type === "host.update-parameters";
}

type HostMessageVisitor<C extends WidgetConfig<C["parameters"]>> =
  & {
    [T in HostMessage<C>["type"]]: (
      payload: Extract<HostMessage<C>, { type: T }> extends {
        payload: infer P;
      } ? P
        : never,
    ) => void;
  }
  & {
    _unknown: (type: string) => void;
  };

/**
 * Strongly typed visitor to handle every type of host message
 */
export function visitHostMessage<C extends WidgetConfig<C["parameters"]>>(
  message: HostMessage<C>,
  visitor: HostMessageVisitor<C>,
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
