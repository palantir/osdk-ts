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
  ObjectOrInterfaceDefinition,
  ObjectSetSubscription,
  PropertyKeys,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";

/**
 * The injectable seam for `objectSet.subscribe()`. Matches the shape of
 * `ObjectSetListenerWebsocket.subscribe`. The default delegates to the websocket
 * implementation; embedders (e.g. embedded ontology) can provide their own to capture
 * the original subscribe request (`objectType`, the wire `objectSet`, `properties`,
 * `shouldLoadRids`) rather than the resulting websocket traffic.
 */
export type SubscribeFn = <
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
>(
  objectType: ObjectOrInterfaceDefinition,
  objectSet: WireObjectSet,
  listener: ObjectSetSubscription.Listener<Q, P>,
  properties?: Array<P>,
  shouldLoadRids?: boolean,
) => Promise<() => void>;
