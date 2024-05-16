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

import type { ObjectTypeApiName } from "../components/ObjectTypeApiName.js";
import type { PrimaryKeyValue } from "../components/PrimaryKeyValue.js";
import type { PropertyApiName } from "../components/PropertyApiName.js";

/**
 * The parameter object reference or parameter default value is not found, or the client token does not have access to it.
 */
export interface ParameterObjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ParameterObjectNotFound";
  errorInstanceId: string;
  parameters: {
    objectType: ObjectTypeApiName;
    primaryKey: Record<PropertyApiName, PrimaryKeyValue>;
  };
}
