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

import type { ParameterPrefill } from "./ParameterPrefill.js";
import type { ParameterRenderHint } from "./types/ParameterRenderHint.js";
import type { ParameterVisibility } from "./types/ParameterVisibility.js";

/**
 * These values provide details about how parameter fields should be displayed in the form. They are not used to
 * evaluate correctness of submitted parameters.
 */
export interface ParameterValidationDisplayMetadata {
  visibility: ParameterVisibility;
  renderHint: ParameterRenderHint;
  prefill: ParameterPrefill | undefined;
}
