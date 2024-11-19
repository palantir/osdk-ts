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

import type {
  AsyncParameterValueMap,
  ParameterConfig,
} from "@osdk/views-client.unstable";

/**
 * Utility function to initialize a map of parameter values to either a loading or not-started loading state
 */
export function initializeParameters<CONFIG extends ParameterConfig>(
  config: CONFIG,
  initialLoadingState: "loading" | "not-started",
): AsyncParameterValueMap<CONFIG> {
  return Object.fromEntries(
    Object.entries(config.parameters).map(([key, parameterConfig]) => [
      key,
      { type: parameterConfig.type, value: { type: initialLoadingState } },
    ]),
  ) as AsyncParameterValueMap<CONFIG>;
}
