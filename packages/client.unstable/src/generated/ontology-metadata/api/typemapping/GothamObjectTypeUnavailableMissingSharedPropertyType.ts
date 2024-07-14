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

import type { GothamPropertyTypeUri } from "./GothamPropertyTypeUri.js";

/**
 * Gotham Object types with Foundry-owned property types for which we were unable to find a
 * Shared Property Type with a matching URI. This can happen if the Shared Property Type gets
 * deleted by the time we look for it in Foundry, or if the SPT shares a Gotham URI with another SPT.
 */
export interface GothamObjectTypeUnavailableMissingSharedPropertyType {
  propertyTypeUris: Array<GothamPropertyTypeUri>;
}
