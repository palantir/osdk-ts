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
import { executeQuery } from "../ontology-runtime/ontologyProvider/calls/executeQuery";
import type {
  Queries,
  QueryNamesFrom,
  QueryParameters,
  WrappedQueryReturnType,
} from "./queries";

export function createQueryProxy<O extends OntologyDefinition<any>>(
  client: ThinClient<O>,
): Queries<O> {
  return new Proxy({}, {
    get(_target, q: QueryNamesFrom<O> & string, _receiver) {
      const queryDefinition = client.ontology.queries[q];
      if (queryDefinition) {
        const hasParams = Object.keys(queryDefinition.parameters).length > 0;

        if (hasParams) {
          return async function(
            params: QueryParameters<O, typeof q>,
          ): Promise<WrappedQueryReturnType<O, typeof q>> {
            return executeQuery(client, q, params);
          };
        } else {
          return async function(): Promise<
            WrappedQueryReturnType<O, typeof q>
          > {
            return executeQuery(client, q);
          };
        }
      }

      return undefined;
    },
  }) as Queries<O>;
}
