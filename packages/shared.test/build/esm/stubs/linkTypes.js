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

import { employeeObjectType, officeObjectType } from "./objectTypes.js";
export const peepsLinkType = {
  apiName: "peeps",
  status: "EXPERIMENTAL",
  objectTypeApiName: employeeObjectType.apiName,
  cardinality: "MANY",
  displayName: "Peeps",
  linkTypeRid: "rid.link-type.327"
};
export const leadLinkType = {
  apiName: "lead",
  status: "EXPERIMENTAL",
  objectTypeApiName: employeeObjectType.apiName,
  cardinality: "ONE",
  displayName: "Lead",
  linkTypeRid: peepsLinkType.linkTypeRid
};
export const officeLinkType = {
  apiName: "officeLink",
  status: "EXPERIMENTAL",
  objectTypeApiName: officeObjectType.apiName,
  cardinality: "ONE",
  displayName: "Office",
  linkTypeRid: "rid.link-type.324"
};
export const occupants = {
  apiName: "occupants",
  status: "EXPERIMENTAL",
  objectTypeApiName: employeeObjectType.apiName,
  cardinality: "MANY",
  displayName: "Office Occupants",
  linkTypeRid: officeLinkType.linkTypeRid
};
//# sourceMappingURL=linkTypes.js.map