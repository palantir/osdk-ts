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

// the value side of this needs to match DistanceUnit from @osdk/foundry but we don't
// want the dependency
export const DistanceUnitMapping = {
  "centimeter": "CENTIMETERS",
  "centimeters": "CENTIMETERS",
  "cm": "CENTIMETERS",
  "meter": "METERS",
  "meters": "METERS",
  "m": "METERS",
  "kilometer": "KILOMETERS",
  "kilometers": "KILOMETERS",
  "km": "KILOMETERS",
  "inch": "INCHES",
  "inches": "INCHES",
  "foot": "FEET",
  "feet": "FEET",
  "yard": "YARDS",
  "yards": "YARDS",
  "mile": "MILES",
  "miles": "MILES",
  "nautical_mile": "NAUTICAL_MILES",
  "nauticalMile": "NAUTICAL_MILES",
  "nautical miles": "NAUTICAL_MILES"
};

// FIXME we need to represent all types
//# sourceMappingURL=WhereClause.js.map