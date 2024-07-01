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

import type { DynamicObjectSetInput } from "./DynamicObjectSetInput.js";
import type { ObjectSetTransform } from "./ObjectSetTransform.js";

/**
 * An ObjectSet gotten as a result of performing a sequence of Transforms on a base ObjectSet.
 * Each transforms is either a PropertyFilter or a SearchAround.
 * There is a limit of 3 SearchArounds.
 */
export interface DynamicObjectSet {
  startingObjectSet: DynamicObjectSetInput;
  transforms: Array<ObjectSetTransform>;
}
