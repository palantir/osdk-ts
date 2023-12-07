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

import type { ObjectTypeKeysFrom, OntologyDefinition } from "@osdk/api";
import type { OsdkObject } from "../OsdkObject.js";

export interface ObjectSetWatcherEvents<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> {
  change: Array<OsdkObject<K & string>>;
  refresh: never;
  cancelled: never;
}

export type ObjectSetListener<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = Partial<
  {
    [E in keyof ObjectSetWatcherEvents<O, K>]:
      ObjectSetWatcherEvents<O, K>[E] extends never ? () => void : (
        data: ObjectSetWatcherEvents<O, K>[E],
      ) => void;
  }
>;
