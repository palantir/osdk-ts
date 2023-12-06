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

import type { AllFoundryRids } from "./AllFoundryRids.js";
import type { ObjectsPlatformRids } from "./ObjectsPlatformRids.js";
export interface RidFormatter_objectsPlatformRids {
  type: "objectsPlatformRids";
  objectsPlatformRids: ObjectsPlatformRids;
}

export interface RidFormatter_allFoundryRids {
  type: "allFoundryRids";
  allFoundryRids: AllFoundryRids;
}
/**
 * Convert Resource Identifiers into human-readable format. For example,
 * show the display name of an Object Set as opposed to its Rid.
 */
export type RidFormatter =
  | RidFormatter_objectsPlatformRids
  | RidFormatter_allFoundryRids;
