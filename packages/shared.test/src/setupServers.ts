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

import type { SetupServerApi } from "msw/node";
import { setupServer } from "msw/node";
import type { FauxFoundry } from "./FauxFoundry/FauxFoundry.js";

interface ClientFactory<C, A extends any[]> {
  (
    baseUrl: string,
    ontologyRid: string,
    authToken: () => Promise<string>,
    ...args: A
  ): C;
}

export interface TestSetup<C> {
  apiServer: SetupServerApi;
  fauxFoundry: FauxFoundry;
  client: C;
  auth: () => Promise<string>;
}
/** Helper method to start an api server with a FauxFoundry
 * @param fauxFoundry
 * @returns
 */
export function startNodeApiServer<
  CF extends ClientFactory<any, any[]> | undefined,
>(
  fauxFoundry: FauxFoundry,
  clientFactory?: CF,
  ...clientArgs: CF extends ClientFactory<any, infer A> ? A : never[]
): TestSetup<CF extends ClientFactory<infer C, any> ? C : never> {
  const apiServer = setupServer(...fauxFoundry.handlers);
  const auth = () => Promise.resolve("myAccessToken");
  apiServer.listen();
  return {
    apiServer,
    auth,
    fauxFoundry,
    client: clientFactory?.(
      fauxFoundry.baseUrl,
      fauxFoundry.defaultOntologyRid,
      auth,
      ...clientArgs,
    ),
  };
}
