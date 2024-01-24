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

import type { PropertyApiName } from "../components/PropertyApiName.js";
import type { PropertyValue } from "../components/PropertyValue.js";
import type { ValueType } from "../components/ValueType.js";

/**
 * The value of the given property is invalid. See the documentation of `PropertyValue` for details on
 * how properties are represented.
 */
export interface InvalidPropertyValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyValue";
  errorInstanceId: string;
  parameters: {
    propertyBaseType: ValueType;
    property: PropertyApiName;
    propertyValue: PropertyValue;
  };
}
