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

import type { InterfaceType } from "../interface/InterfaceType.js";

type ActionParameterId = string;
type InterfaceActionTypeConstraintApiName = string;
type InterfaceParameterConstraintApiName = string;
type InterfaceLinkTypeApiName = string;
type LinkTypeApiName = string;

export type InterfaceImplementation = {
  implements: InterfaceType;
  propertyMapping: { interfaceProperty: string; mapsTo: string }[];
  linkImplementations?: Record<
    InterfaceLinkTypeApiName,
    // use api names for links and actions to avoid circular representation of stored object types
    Array<{ linkTypeApiName: LinkTypeApiName; sideApiName: LinkTypeApiName }>
  >;
  actionTypeImplementations?: Record<
    InterfaceActionTypeConstraintApiName,
    {
      actionTypeApiName: string;
      parameterMapping?: Record<
        InterfaceParameterConstraintApiName,
        ActionParameterId
      >;
    }
  >;
};
