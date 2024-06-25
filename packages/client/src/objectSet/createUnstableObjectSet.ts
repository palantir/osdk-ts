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
import type {
  LinkedType,
  LinkNames,
  ObjectSet as OGObjectSet,
  WhereClause,
} from "@osdk/client.api";
import type { ObjectSet as WireObjectSet } from "@osdk/internal.foundry";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createObjectSet } from "./createObjectSet.js";
import type { ObjectSetListener } from "./ObjectSetListener.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

export interface UNSTABLE_ObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends OGObjectSet<Q>
{
  subscribe: (listener: ObjectSetListener<Q>) => () => unknown;

  where: (
    clause: WhereClause<Q>,
  ) => UNSTABLE_ObjectSet<Q>;

  union: (
    ...objectSets: ReadonlyArray<OGObjectSet<Q>>
  ) => UNSTABLE_ObjectSet<Q>;

  intersect: (
    ...objectSets: ReadonlyArray<OGObjectSet<Q>>
  ) => UNSTABLE_ObjectSet<Q>;

  subtract: (
    ...objectSets: ReadonlyArray<OGObjectSet<Q>>
  ) => UNSTABLE_ObjectSet<Q>;

  pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => UNSTABLE_ObjectSet<LinkedType<Q, L>>;
}

export function UNSTABLE_createObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  clientCtx: MinimalClient,
  objectSet: WireObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): UNSTABLE_ObjectSet<Q> {
  return Object.assign(
    createObjectSet(
      objectType,
      clientCtx,
      objectSet,
    ),
    {
      subscribe(listener: ObjectSetListener<Q>) {
        const pendingSubscribe = ObjectSetListenerWebsocket.getInstance(
          clientCtx,
        ).subscribe(
          objectSet,
          listener,
        );

        return async () => (await pendingSubscribe)();
      },
    },
    // cast is needed because we are relying on the where clause doing the right thing via client.createObjectSet
  ) as UNSTABLE_ObjectSet<Q>;
}
