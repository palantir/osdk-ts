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

import type { OsdkObjectFrom } from "@osdk/client";
import type { Ontology } from "@osdk/examples.basic.sdk";

// Demo for if you want concrete types
export interface Employee
  extends OsdkObjectFrom<Ontology["objects"]["Employee"]>
{}
export interface Todo extends OsdkObjectFrom<Ontology["objects"]["Todo"]> {}
