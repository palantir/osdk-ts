/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ClientContext } from "@osdk/shared.net";
import type { Actions } from "./Actions.js";
import { applyAction } from "./applyAction.js";

export function createActionInvoker<T extends ClientContext<any>>(client: T) {
  const proxy: Actions<any> = new Proxy(
    {},
    {
      get: (_target, p, _receiver) => {
        if (typeof p === "string") {
          return function(...args: any[]) {
            return applyAction(client, p, ...args);
          };
        }

        return undefined;
      },
      ownKeys(_target) {
        return Object.keys(client.ontology.actions);
      },
      getOwnPropertyDescriptor(_target, p) {
        if (typeof p === "string") {
          return {
            enumerable: client.ontology.actions[p] != null,
            configurable: true,
            value: proxy[p],
          };
        }
      },
    },
  );
  return proxy;
}
