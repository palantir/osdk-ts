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

import type { OntologyObject } from "@osdk/legacy-client";
/**
 * Its a todo item.
 */
export interface Todo extends OntologyObject {
  readonly __apiName: "Todo";
  readonly __primaryKey: number;
  readonly id: number | undefined;
  /**
   * The text of the todo
   */
  readonly body: string | undefined;
  readonly complete: boolean | undefined;
}

export const Todo = {
  apiName: "Todo",
  links: {},
  properties: {
    id: {
      type: "integer",
    },
    body: {
      type: "string",
    },
    complete: {
      type: "boolean",
    },
  },
} satisfies ObjectDefinition<"Todo", "Todo">;
