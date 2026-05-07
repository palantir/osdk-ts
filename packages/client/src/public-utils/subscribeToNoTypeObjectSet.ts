/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSetSubscription,
} from "@osdk/api";
import type { Client } from "../Client.js";
import { additionalContext } from "../Client.js";

/**
 * Subscribes to changes on an object set RID without knowing its underlying
 * object/interface type. Useful when you only have an RID and want a
 * "something changed" signal rather than hydrated property values.
 *
 * The emitted `object` payloads carry `$apiName` (and `$rid` when `includeRid`
 * is true). `$primaryKey` will be `undefined` and no user-defined properties
 * are populated, since no properties are requested from the server.
 *
 * @experimental This API is experimental and may change without notice.
 * Imported from `@osdk/client/unstable-do-not-use`.
 *
 * @param client - An OSDK client.
 * @param rid - The RID of an object set.
 * @param listener - The subscription listener (onChange, onOutOfDate, onError,
 *   onSuccessfulSubscription).
 * @param opts - Optional subscription options. Only `includeRid` is honored;
 *   `properties` cannot be customized through this helper.
 * @returns An object with `unsubscribe()` to end the subscription.
 */
export function subscribeToNoTypeObjectSet<R extends boolean = false>(
  client: Client,
  rid: string,
  listener: ObjectSetSubscription.Listener<
    ObjectOrInterfaceDefinition,
    never,
    R
  >,
  opts?: Pick<
    ObjectSetSubscription.Options<ObjectOrInterfaceDefinition, never, R>,
    "includeRid"
  >,
): { unsubscribe: () => void } {
  const clientCtx = client[additionalContext];
  const pendingSubscribe = import("../objectSet/ObjectSetListenerWebsocket.js")
    .then(({ ObjectSetListenerWebsocket }) =>
      ObjectSetListenerWebsocket.getInstance(clientCtx)
        .subscribeWithoutType(
          { type: "reference", reference: rid },
          listener as ObjectSetSubscription.Listener<
            ObjectOrInterfaceDefinition,
            never
          >,
          opts?.includeRid ?? false,
        )
    );

  return { unsubscribe: async () => (await pendingSubscribe)() } as {
    unsubscribe: () => void;
  };
}
