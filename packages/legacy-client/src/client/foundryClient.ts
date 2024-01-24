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
import { createClientContext } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { Auth } from "../oauth-client/index.js";
import { USER_AGENT } from "../USER_AGENT.js";
import type { FoundryClientOptions } from "./foundryClientOptions.js";
import { Ontology } from "./ontology.js";

export class BaseFoundryClient<
  O extends OntologyDefinition<any>,
  TAuth extends Auth = Auth,
> {
  #client: ClientContext<O>;

  constructor(
    private foundryClientOptions: FoundryClientOptions<TAuth>,
    metadata: O,
  ) {
    this.#client = createClientContext(
      metadata,
      foundryClientOptions.url,
      async () => {
        const getToken = await foundryClientOptions.auth.getToken();
        return getToken.accessToken;
      },
      USER_AGENT,
      foundryClientOptions.fetchFunction,
    );
  }

  get ontology(): Ontology<O> {
    return new Ontology<O>(this.#client);
  }

  get auth(): TAuth {
    return this.foundryClientOptions.auth;
  }
}
