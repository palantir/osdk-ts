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

import { describe, expectTypeOf, it } from "vitest";
import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Edits,
  Result,
} from "..";
import type { MockOntology } from "../util/test";
import type { Actions } from "./actions";
import type { OsdkLegacyObjectFrom } from "./OsdkObject";

describe("actions", () => {
  const actions: Actions<
    typeof MockOntology
  > = {} as any;

  it("creates proper parameters", async () => {
    expectTypeOf<Parameters<typeof actions.createTask>>().toMatchTypeOf<
      [
        {
          id?: number;
        },
        ActionExecutionOptions?,
      ]
    >();

    expectTypeOf<ReturnType<typeof actions.createTask>>().toMatchTypeOf<
      Promise<
        Result<
          ActionResponseFromOptions<
            ActionExecutionOptions,
            Edits<OsdkLegacyObjectFrom<typeof MockOntology, "Task">, void>
          >,
          ActionError
        >
      >
    >();
  });

  it("skips empty parameters", () => {
    expectTypeOf<Parameters<typeof actions.createTodo>>().toMatchTypeOf<
      [
        ActionExecutionOptions?,
      ]
    >();
  });

  it("maps Object types correctly", () => {
    expectTypeOf<Parameters<typeof actions.updateTask>>().toMatchTypeOf<
      [
        {
          task?: OsdkLegacyObjectFrom<typeof MockOntology, "Task">;
        },
        ActionExecutionOptions?,
      ]
    >();

    expectTypeOf<ReturnType<typeof actions.updateTask>>().toMatchTypeOf<
      Promise<
        Result<
          ActionResponseFromOptions<
            ActionExecutionOptions,
            Edits<
              void,
              OsdkLegacyObjectFrom<typeof MockOntology, "Task">
            >
          >,
          ActionError
        >
      >
    >();
  });
});
