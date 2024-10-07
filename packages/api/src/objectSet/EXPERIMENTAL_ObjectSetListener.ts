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

export interface EXPERIMENTAL_ObjectSetListener<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O> = PropertyKeys<O>,
> {
  /**
   * Specific objects have changed and can be immediately updated
   */
  onChange?: (
    objects: Array<ObjectUpdate<O, P>>,
  ) => void;

  /**
   * The ObjectSet has become outdated and should be re-fetched in its entirety.
   * This is also sent when the subscription is first initialized.
   */
  onOutOfDate?: () => void;

  /**
   * There was a fatal error with the subscription process
   */
  onError?: (errors: Array<any>) => void;
}

type ObjectUpdate<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O>,
> = {
  object: Osdk<O, P>;
  state: "ADDED_OR_UPDATED" | "REMOVED";
};
