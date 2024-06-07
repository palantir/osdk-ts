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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { symbolClientContext } from "@osdk/shared.client";
import type { Client } from "../Client.js";
import type { createClient } from "../createClient.js";
import { createClientInternal } from "../createClient.js";
import { UNSTABLE_createObjectSet } from "../objectSet/createUnstableObjectSet.js";
import { createBulkLinksAsyncIterFactory } from "./createBulkLinksAsyncIterFactory.js";
import type { UnstableClient } from "./UnstableClient.js";

export function UNSTABLE_createClient(
  ...args: Parameters<typeof createClient>
) {
  const client = createClientInternal(
    UNSTABLE_createObjectSet,
    ...args,
  );

  const unstableClient: UnstableClient = Object.defineProperties<
    UnstableClient
  >(
    client as UnstableClient,
    {
      __UNSTABLE_getBulkLinks: {
        get: () => createBulkLinksAsyncIterFactory(client[symbolClientContext]),
      },
      __UNSTABLE_preexistingObjectSet: {
        get: () =>
        <T extends ObjectOrInterfaceDefinition>(
          definition: T,
          rid: string,
        ) => {
          return UNSTABLE_createObjectSet(
            definition,
            client[symbolClientContext],
            {
              type: "intersect",
              objectSets: [
                {
                  type: "base",
                  objectType: definition.apiName,
                },
                {
                  type: "reference",
                  reference: rid,
                },
              ],
            },
          );
        },
      },
    } satisfies Record<
      Exclude<keyof UnstableClient, keyof Client>,
      PropertyDescriptor
    >,
  );

  return unstableClient;
}
