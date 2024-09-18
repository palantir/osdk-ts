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

import type {
  LinkTypeSideV2,
  ListOutgoingLinkTypesResponseV2,
} from "@osdk/internal.foundry.core";
import { employeeObjectType, officeObjectType } from "./objectTypes.js";

export const peepsLinkType: LinkTypeSideV2 = {
  apiName: "peeps",
  status: "EXPERIMENTAL",
  objectTypeApiName: employeeObjectType.apiName,
  cardinality: "MANY",
  displayName: "Peeps",
  linkTypeRid: "rid.link-type.327",
};

export const leadLinkType: LinkTypeSideV2 = {
  apiName: "lead",
  status: "EXPERIMENTAL",
  objectTypeApiName: employeeObjectType.apiName,
  cardinality: "ONE",
  displayName: "Lead",
  linkTypeRid: "rid.link-type.326",
};

export const officeLinkType: LinkTypeSideV2 = {
  apiName: "officeLink",
  status: "EXPERIMENTAL",
  objectTypeApiName: officeObjectType.apiName,
  cardinality: "ONE",
  displayName: "Office",
  linkTypeRid: "rid.link-type.324",
};

export const occupants: LinkTypeSideV2 = {
  apiName: "occupants",
  status: "EXPERIMENTAL",
  objectTypeApiName: employeeObjectType.apiName,
  cardinality: "MANY",
  displayName: "Office Occupants",
  linkTypeRid: "rid.link-type.323",
};

export const linkTypesResponseMap: {
  [objectType: string]: ListOutgoingLinkTypesResponseV2;
} = {
  Employee: {
    data: [peepsLinkType, leadLinkType, officeLinkType],
  },
  Office: {
    data: [occupants],
  },
};
