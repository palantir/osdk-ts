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

import type { OntologyDefinition } from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type { ActionExecutionOptions } from "../../index.js";
import { executeAction } from "../net/executeAction.js";
import type {
  ActionArgs,
  Actions,
  WrappedActionReturnType,
} from "./actions.js";

export function createActionProxy<
  O extends OntologyDefinition<any>,
>(client: ClientContext<O>): Actions<O> {
  const proxy = new Proxy(
    {},
    {
      get: (_target, p: keyof O["actions"], _receiver) => {
        if (typeof p === "string") {
          if (Object.keys(client.ontology.actions[p].parameters).length === 0) {
            return async function<Op extends ActionExecutionOptions>(
              options?: Op,
            ): Promise<WrappedActionReturnType<O, typeof p, Op>> {
              return executeAction<O, typeof p, Op>(
                client,
                p,
                undefined,
                options,
              );
            };
          }

          return async function<Op extends ActionExecutionOptions>(
            params: ActionArgs<O, typeof p>,
            options?: Op,
          ): Promise<WrappedActionReturnType<O, typeof p, Op>> {
            return executeAction<O, typeof p, Op>(client, p, params, options);
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
  ) as Actions<O>;
  return proxy;
}
