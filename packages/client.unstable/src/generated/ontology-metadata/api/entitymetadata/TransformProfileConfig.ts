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

import type { AutomaticTransformProfile } from "./AutomaticTransformProfile.js";
import type { ExtraLargeTransformProfile } from "./ExtraLargeTransformProfile.js";
export interface TransformProfileConfig_automatic {
  type: "automatic";
  automatic: AutomaticTransformProfile;
}

export interface TransformProfileConfig_extraLarge {
  type: "extraLarge";
  extraLarge: ExtraLargeTransformProfile;
}
/**
 * A transform profile is an abstraction over the set of Spark profiles to be used for a Funnel job. The exact
 * Spark profiles used may be defined elsewhere (e.g. Funnel).
 */
export type TransformProfileConfig =
  | TransformProfileConfig_automatic
  | TransformProfileConfig_extraLarge;
