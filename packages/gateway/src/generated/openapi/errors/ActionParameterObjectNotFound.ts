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

import type { ParameterId } from "../components/ParameterId.js";

/**
 * The parameter object reference or parameter default value is not found, or the client token does not have access to it.
 */
export interface ActionParameterObjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ActionParameterObjectNotFound";
  errorInstanceId: string;
  parameters: {
    parameterId: ParameterId;
  };
}
