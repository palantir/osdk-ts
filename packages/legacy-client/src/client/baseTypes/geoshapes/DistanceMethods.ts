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

import { DistanceUnit } from "./DistanceUnit";

export const ofMillimeters = (value: number) => ({
  unit: DistanceUnit.MILLIMETERS,
  value,
});

export const ofCentimeters = (value: number) => ({
  unit: DistanceUnit.CENTIMETERS,
  value,
});

export const ofMeters = (value: number) => ({
  unit: DistanceUnit.METERS,
  value,
});

export const ofKilometers = (value: number) => ({
  unit: DistanceUnit.KILOMETERS,
  value,
});

export const ofInches = (value: number) => ({
  unit: DistanceUnit.INCHES,
  value,
});

export const ofFeet = (value: number) => ({
  unit: DistanceUnit.FEET,
  value,
});

export const ofYards = (value: number) => ({
  unit: DistanceUnit.YARDS,
  value,
});

export const ofMiles = (value: number) => ({
  unit: DistanceUnit.MILES,
  value,
});

export const ofNauticalMiles = (value: number) => ({
  unit: DistanceUnit.NAUTICAL_MILES,
  value,
});
