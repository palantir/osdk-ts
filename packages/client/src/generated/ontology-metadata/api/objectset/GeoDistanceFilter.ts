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

import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { Distance } from "./Distance.js";

/**
 * An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
 * of the provided location i.e. sits within a circle centered at the provided location.
 */
export interface GeoDistanceFilter {
  propertyId: PropertyTypeId;
  location: string;
  distance: Distance;
}
