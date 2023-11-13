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

import type { OntologyObjectV2 } from "@osdk/gateway/types";

export const mockTodoObject = {
  __apiName: "Todo",
  __primaryKey: 1,
  __rid: "ri.a.b.c.d",
  id: "123",
  body: "body",
  complete: false,
} satisfies OntologyObjectV2;

export const mockTodoObject2 = {
  __apiName: "Todo",
  __primaryKey: 2,
  __rid: "ri.a.b.c.d",
  id: "124",
  body: "body",
  complete: false,
} satisfies OntologyObjectV2;

export const mockTaskObject = {
  __apiName: "Task",
  __primaryKey: 1,
  id: 1,
} satisfies OntologyObjectV2;
