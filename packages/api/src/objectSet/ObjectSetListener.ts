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
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { WirePropertyTypes } from "../ontology/WirePropertyTypes.js";
import type { Osdk } from "../OsdkObjectFrom.js";

export namespace ObjectSetSubscription {
  export interface Listener<
    O extends ObjectOrInterfaceDefinition,
    P extends PropertyKeys<O> = PropertyKeys<O>,
    R extends boolean = false,
  > {
    /**
     * Specific objects have changed and can be immediately updated
     */
    onChange?: (
      objectUpdate: ObjectUpdate<O, P, R>,
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
    onError?: (errors: { subscriptionClosed: boolean; error: any }) => void;
  }

  /**
   * Options for subscribing to an ObjectSet.
   *
   * @param properties The properties to request a subscription for. Requesting specific properties limits the possible properties
   * that can be returned from the subscription. If not provided, all properties will be requested and potentially be returned on updates.
   *
   * @param includeRid Whether to include the $rid property in the subscription. Defaults to false. RIDs will be returned on all updates unless the update
   * contains a new value for a geotime series reference property, in which case the RID will be undefined.
   */
  export interface Options<
    O extends ObjectOrInterfaceDefinition,
    P extends PropertyKeys<O> = PropertyKeys<O>,
    R extends boolean = false,
  > {
    /**
     * The properties to request a subscription for. Requesting specific properties limits the possible properties
     * that can be returned from the subscription. If not provided, all properties will be requested and potentially be returned on updates.
     */
    properties?: Array<P>;

    /**
     * Whether to include the $rid property in the subscription. Defaults to false. RIDs will be returned on all updates unless the update
     * contains a new value for a geotime series reference property, in which case the RID will be undefined. RIDs will not be included
     * on the objects themselves.
     */
    includeRid?: AllFalse<
      PropertyTypesOnDefMatchesType<O, P, "geotimeSeriesReference">
    > extends true ? R
      : false;
  }
}

type ObjectUpdate<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O>,
  R extends boolean = false,
> = {
  object: R extends false ? Osdk.Instance<O, never, P>
    : Osdk.Instance<O, "$rid", P>;
  state: "ADDED_OR_UPDATED" | "REMOVED";
};

type PropertyTypesOnDefMatchesType<
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
  T extends WirePropertyTypes,
> = {
  [K in P]: CompileTimeMetadata<Q>["properties"][K][
    "type"
  ] extends T ? true
    : false;
};

type AllFalse<T extends Record<string, boolean>> =
  Exclude<T[keyof T], false> extends never ? true : false;
