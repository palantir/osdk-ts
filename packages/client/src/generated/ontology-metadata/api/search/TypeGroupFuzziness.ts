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

import type { FuzzinessAuto } from "./FuzzinessAuto.js";
import type { FuzzinessOff } from "./FuzzinessOff.js";
export interface TypeGroupFuzziness_off {
  type: "off";
  off: FuzzinessOff;
}

export interface TypeGroupFuzziness_auto {
  type: "auto";
  auto: FuzzinessAuto;
}
/**
 * Fuzziness setting for `contains` FullTextStringPredicates.
 */
export type TypeGroupFuzziness =
  | TypeGroupFuzziness_off
  | TypeGroupFuzziness_auto;
