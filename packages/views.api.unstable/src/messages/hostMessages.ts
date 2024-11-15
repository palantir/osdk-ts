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

import type { AsyncParameterValueMap, ParameterConfig } from "../config.js";

// Interfaces and type guards for messages passed from the host Foundry UI to the child view

export interface HostParametersUpdatedMessage<CONFIG extends ParameterConfig> {
  type: "host.update-parameters";
  parameters: AsyncParameterValueMap<CONFIG>;
}

export type HostMessage<CONFIG extends ParameterConfig> =
  HostParametersUpdatedMessage<CONFIG>;

export function isHostParametersUpdatedMessage<CONFIG extends ParameterConfig>(
  event: HostMessage<CONFIG>,
): event is HostParametersUpdatedMessage<CONFIG> {
  return event.type === "host.update-parameters";
}
