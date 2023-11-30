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

import type { ObjectDefinition } from "@osdk/api";
export const Todo = {
  apiName: "Todo",
  description: "Its a todo item.",
  primaryKeyType: "integer",
  links: {
    Assignee: {
      multiplicity: false,
      targetType: "Person",
    },
  },
  properties: {
    id: {
      multiplicity: false,
      type: "integer",
      nullable: true,
    },
    body: {
      multiplicity: false,
      description: "The text of the todo",
      type: "string",
      nullable: true,
    },
    complete: {
      multiplicity: false,
      type: "boolean",
      nullable: true,
    },
  },
} satisfies ObjectDefinition<"Todo", "Person">;
