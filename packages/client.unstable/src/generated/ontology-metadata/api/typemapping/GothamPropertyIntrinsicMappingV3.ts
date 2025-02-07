/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { StructFieldRid } from "../StructFieldRid.js";
import type { GothamIntrinsicV2 } from "./GothamIntrinsicV2.js";

/**
 * The propertyMappings field stores which struct fields populate the Gotham intrinsic values for this property.
 * Struct fields that are marked as intrinsics here will be ignored during type mapping. This means if you had a
 * struct like {age: int, startDate: timestamp (intrinsic), location: geohash (intrinsic)}, Gotham would ignore
 * the latter 2 fields and map this as an integer property type, not a struct property type.
 */
export interface GothamPropertyIntrinsicMappingV3 {
  propertyMappings: Record<GothamIntrinsicV2, StructFieldRid>;
}
