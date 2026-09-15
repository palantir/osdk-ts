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
type ActionTypeApiName = string;
type InterfaceActionTypeConstraintApiName = string;
type InterfaceParameterConstraintApiName = string;
type InterfaceLinkTypeApiName = string;
type LinkTypeApiName = string;
type LinkTypeSideApiName = string;

export type InterfaceImplementation = {
  implements: InterfaceType;
  propertyMapping: { interfaceProperty: string; mapsTo: string }[];
  /** Link references are stored by API name to remain serializable. */
  linkImplementations?: Record<
    InterfaceLinkTypeApiName,
    Array<{
      linkTypeApiName: LinkTypeApiName;
      sideApiName: LinkTypeSideApiName;
    }>
  >;
  /** Action references are stored by API name to remain serializable. */
  actionTypeImplementations?: Record<
    InterfaceActionTypeConstraintApiName,
    {
      actionTypeApiName: ActionTypeApiName;
      parameterMapping?: Record<
        InterfaceParameterConstraintApiName,
        ActionParameterId
      >;
    }
  >;
};
