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

import type { ActionDefinition, OntologyDefinition } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { Actions, ActionSignature } from "./Actions.js";
import { applyAction } from "./applyAction.js";

export function createActionInvoker<A extends ActionDefinition<any, any>>(
  client: MinimalClient,
  action: A,
): ActionSignature<A["parameters"]> {
  return function(...args: any[]) {
    return applyAction(client, action, ...args);
  };
}

export function createOldActionInvoker(
  client: MinimalClient,
  ontology: OntologyDefinition<any>,
) {
  const proxy: Actions<any> = new Proxy(
    {},
    {
      get: (_target, p, _receiver) => {
        if (typeof p === "string") {
          return createActionInvoker(client, ontology.actions[p]);
        }

        return undefined;
      },
      ownKeys(_target) {
        return Object.keys(ontology.actions);
      },
      getOwnPropertyDescriptor(_target, p) {
        if (typeof p === "string") {
          return {
            enumerable: ontology.actions[p] != null,
            configurable: true,
            value: proxy[p],
          };
        }
      },
    },
  );
  return proxy;
}
