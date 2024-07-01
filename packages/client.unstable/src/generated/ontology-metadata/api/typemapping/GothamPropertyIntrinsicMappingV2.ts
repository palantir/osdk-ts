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

import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { GothamIntrinsicV2 } from "./GothamIntrinsicV2.js";

/**
 * The propertyMappings field stores which properties populate the intrinsic values for specific Gotham
 * intrinsics.
 *
 * A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
 */
export interface GothamPropertyIntrinsicMappingV2 {
  propertyMappings: Record<GothamIntrinsicV2, PropertyTypeRid>;
}
