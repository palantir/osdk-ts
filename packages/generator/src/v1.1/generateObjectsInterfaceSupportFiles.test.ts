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

import { describe, expect, it } from "vitest";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles";
import { TodoWireOntology } from "../util/test/TodoWireOntology";
import { generateObjectsInterfaceSupportFiles } from "./generateObjectsInterfaceSupportFiles";

describe(generateObjectsInterfaceSupportFiles, () => {
  it("generates ObjectSet supporting named types", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateObjectsInterfaceSupportFiles(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(helper.getFiles()[`${BASE_PATH}/Todo.ts`]).toMatchInlineSnapshot(`
      "import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
      import { Todo as OG_Todo } from "../Todo";

      /** @deprecated Use Todo from ontology/objects instead */
      export type Todo = OG_Todo;
      /** @deprecated Use ObjectSetFilterArg<Todo> instead */
      export type TodoFilter = ObjectSetFilterArg<OG_Todo>;
      /** @deprecated Use ObjectSetOrderByArg<Todo> instead */
      export type TodoOrderBy = ObjectSetOrderByArg<OG_Todo>;
      /** @deprecated Use ObjectSetGroupByArg<Todo> instead */
      export type TodoGroupByProperties = ObjectSetGroupByArg<OG_Todo>;

            /**
              * Aggregation properties for Todo
              * @deprecated Use ObjectSetAggregateArg<Todo> instead
              */
      export type TodoAggregationProperties = ObjectSetAggregateArg<OG_Todo>;

            /**
              * Multiple aggregation properties for Todo.
              * @deprecated Use ObjectSetMultipleAggregateArg<Todo> instead
              */
      export type TodoMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_Todo>;"
    `);
  });
});
