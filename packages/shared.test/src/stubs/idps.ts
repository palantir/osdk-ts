/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceDefinedPropertyType } from "@osdk/foundry.ontologies";

export const idp: InterfaceDefinedPropertyType = {
  rid: "ri.interfacePropertyType.main.interfacePropertyType.1",
  apiName: "fooIdp",
  displayName: "Foo IDP",
  description: "A Foo IDP",
  dataType: {
    type: "string",
  },
  requireImplementation: true,
};

export const birthDateIdp: InterfaceDefinedPropertyType = {
  rid: "ri.interfacePropertyType.main.interfacePropertyType.2",
  apiName: "myBirthday",
  displayName: "Birthday IDP",
  description: "A birthday IDP",
  dataType: {
    type: "string",
  },
  requireImplementation: true,
};
