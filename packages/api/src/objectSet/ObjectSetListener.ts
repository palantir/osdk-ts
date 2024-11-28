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

import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { Osdk } from "../OsdkObjectFrom.js";

export interface ObjectSetListener<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O> = PropertyKeys<O>,
> {
  /**
   * Specific objects have changed and can be immediately updated
   */
  onChange?: (
    objectUpdate: ObjectUpdate<O, P>,
  ) => void;

  /**
   * The subscription has been successfully established and updates can be expected to be received.
   */
  onSuccessfulSubscription?: () => void;

  /**
   * The ObjectSet has become outdated and should be re-fetched in its entirety.
   * This is also sent when the subscription is first initialized.
   */
  onOutOfDate?: () => void;

  /**
   * There was a fatal error with the subscription process. The subscription will close or will not be established.
   */
  onError?: (errors: Array<any>) => void;
}

type ObjectUpdate<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O>,
> = {
  object: Osdk.Instance<O, never, P>;
  state: "ADDED_OR_UPDATED" | "REMOVED";
};

/**
 * Options for subscribing to an ObjectSet.
 *
 * properties - The properties to request a subscription for. Requesting specific properties limits the possible properties
 * that can be returned from the subscription. If not provided, all properties will be requested and potentially be returned on updates.
 */
export interface ObjectSetListenerOptions<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O> = PropertyKeys<O>,
> {
  properties?: Array<P>;
}
