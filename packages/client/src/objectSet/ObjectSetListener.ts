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
import type { OsdkObjectFrom2 } from "../OsdkObjectFrom.js";

export type ObjectSetListener<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = Partial<
  {
    /**
     * Specific objects have changed and can be immediately updated
     */
    onChange: (objects: Array<OsdkObjectFrom2<O["objects"][K]>>) => void;

    /**
     * The ObjectSet has become outdated and should be re-fetched in its entirety.
     * This is also sent when the subscription is first initialized.
     */
    onOutOfDate: () => void;

    /**
     * There was a fatal error with the subscription process
     */
    onError: (error: unknown) => void;
  }
>;
