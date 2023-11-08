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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import type { ActionExecutionOptions } from "../ontology-runtime";
import { executeAction } from "../ontology-runtime/ontologyProvider/calls/executeAction";
import type { ActionArgs, Actions, WrappedActionReturnType } from "./actions";
import type { Objects } from "./objects";
import { createBaseOsdkObjectSet } from "./objectSets/OsdkObjectSet";

export class Ontology<O extends OntologyDefinition<any>> {
  #client: ThinClient<O>;
  constructor(client: ThinClient<O>) {
    this.#client = client;
  }

  get objects(): Objects<O> {
    return createObjectSetCreator(this.#client);
  }

  get actions(): Actions<O> {
    return createActionProxy(this.#client);
  }

  get queries(): never {
    throw new Error("not implemented");
  }

  get attachments(): never {
    throw new Error("not implemented");
  }
}

export function createObjectSetCreator<
  O extends OntologyDefinition<any>,
>(client: ThinClient<O>): Objects<O> {
  return new Proxy(
    {},
    {
      get: (_target, p, _receiver) => {
        if (typeof p === "string") {
          return createBaseOsdkObjectSet(client, p);
        }

        return undefined;
      },
    },
  ) as Objects<O>;
}

export function createActionProxy<
  O extends OntologyDefinition<any>,
>(client: ThinClient<O>): Actions<O> {
  return new Proxy(
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
    },
  ) as Actions<O>;
}
