/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  LinkTypeApiNamesFor,
  LinkedObjectType,
} from "../objectSet/ObjectSetLinks.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { ObjectIdentifiers } from "../OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "../OsdkObjectPrimaryKeyType.js";
import type { Experiment } from "./Experiment.js";

export namespace LinkSubscription {
  export interface Args<
    Q extends ObjectTypeDefinition,
    L extends LinkTypeApiNamesFor<Q>,
  > {
    readonly links: ReadonlyArray<L>;
    readonly listener: Listener<NoInfer<Q>, NoInfer<L>>;
    readonly objects: ReadonlyArray<
      ObjectIdentifiers<NoInfer<Q>> | OsdkObjectPrimaryKeyType<NoInfer<Q>>
    >;
    readonly objectType: Q;
  }

  export interface Listener<
    Q extends ObjectTypeDefinition,
    L extends LinkTypeApiNamesFor<Q>,
  > {
    readonly onChange?: (linkUpdate: LinkUpdate<Q, L>) => void;
    readonly onError?: (error: {
      readonly error: unknown;
      readonly subscriptionClosed: boolean;
    }) => void;
    readonly onOutOfDate?: (event: OutOfDateEvent<L>) => void;
    readonly onSuccessfulSubscription?: () => void;
  }

  export type LinkUpdate<
    Q extends ObjectTypeDefinition,
    L extends LinkTypeApiNamesFor<Q>,
  > =
    L extends LinkTypeApiNamesFor<Q>
      ? {
          readonly linkType: L;
          readonly source: ObjectIdentifiers<Q>;
          readonly state: "ADDED" | "REMOVED";
          readonly target: ObjectIdentifiers<LinkedObjectType<Q, L>>;
        }
      : never;

  export interface OutOfDateEvent<L extends string> {
    readonly links: ReadonlyArray<L>;
  }
}

type SubscribeToLinks = <
  const Q extends ObjectTypeDefinition,
  const L extends LinkTypeApiNamesFor<NoInfer<Q>>,
>(
  args: LinkSubscription.Args<Q, L>,
) => { readonly unsubscribe: () => void };

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions: Experiment<
  "2.59.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions",
  { readonly subscribeToLinks: SubscribeToLinks }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions",
  type: "experiment",
  version: "2.59.0",
};
