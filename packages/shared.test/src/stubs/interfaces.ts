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

import type { InterfaceType } from "@osdk/internal.foundry.core";
import { fooSpt } from "./spts.js";

export const FooInterface: InterfaceType = {
  apiName: "FooInterface",
  description: "Interface for Foo",
  displayName: "Foo Interface",
  rid: "ri.interface.main.interface.1",
  extendsInterfaces: [],
  properties: {
    fooSpt,
  },
  links: {},
};

export const employeeInterfaceScoped = {
  fullName: "Santa Claus",
  $rid:
    "ri.phonograph2-objects.main.object.99a6fccb-f333-46d6-a07e-7725c5f18b61",
  $primaryKey: 50050,
  $apiName: "Employee",
};
