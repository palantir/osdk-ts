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
import type { Actions, BatchActions, BulkActions } from "./actions/actions.js";
import {
  createActionProxy,
  createBatchActionProxy,
  createBulkActionProxy,
} from "./actions/createActionProxy.js";
import { Attachments } from "./baseTypes/index.js";
import type { Objects } from "./objects.js";
import { createBaseOsdkObjectSet } from "./objectSets/OsdkObjectSet.js";
import { type Queries } from "./queries.js";
import { createQueryProxy } from "./queryProxy.js";

export class Ontology<O extends OntologyDefinition<any>> {
  #client: ClientContext<O>;
  constructor(client: ClientContext<O>) {
    this.#client = client;
  }

  get objects(): Objects<O> {
    return createObjectSetCreator(this.#client);
  }

  get actions(): Actions<O> {
    return createActionProxy(this.#client);
  }

  /** @deprecated use batchActions() instead */
  get bulkActions(): BulkActions<O> {
    return createBulkActionProxy(this.#client);
  }

  get batchActions(): BatchActions<O> {
    return createBatchActionProxy(this.#client);
  }

  get queries(): Queries<O> {
    /* this `as any` is required for ts4.9 compatibility */
    return createQueryProxy(this.#client) as any;
  }

  get attachments(): Attachments {
    return Attachments(this.#client);
  }
}

export function createObjectSetCreator<
  O extends OntologyDefinition<any>,
>(client: ClientContext<O>): Objects<O> {
  const proxy = new Proxy(
    {},
    {
      get: (_target, p, _receiver) => {
        if (typeof p === "string") {
          return createBaseOsdkObjectSet(client, p);
        }

        return undefined;
      },
      ownKeys(_target) {
        return Object.keys(client.ontology.objects);
      },
      getOwnPropertyDescriptor(_target, p) {
        if (typeof p === "string") {
          return {
            enumerable: client.ontology.objects[p] != null,
            configurable: true,
            value: proxy[p],
          };
        }
      },
    },
  ) as Objects<O>;

  return proxy;
}
