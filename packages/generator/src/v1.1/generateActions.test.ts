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
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import { generateActions } from "./generateActions.js";

describe(generateActions, () => {
  it("generates action interface", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateActions(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(helper.getFiles()[`${BASE_PATH}/Actions.ts`])
      .toMatchInlineSnapshot(`
        "import type {
          ActionError,
          ActionExecutionOptions,
          ActionResponseFromOptions,
          Edits,
          Result,
        } from '@osdk/legacy-client';
        import type { Todo } from '../objects/Todo';
        export interface Actions {
          /**
           * An action which takes different types of parameters
           * @param {Todo | Todo["__primaryKey"]} params.object
           */
          markTodoCompleted<O extends ActionExecutionOptions>(
            params: {
              object?: Todo | Todo['__primaryKey'];
            },
            options?: O,
          ): Promise<Result<ActionResponseFromOptions<O, Edits<void, Todo>>, ActionError>>;
        }
        "
      `);
  });
});
