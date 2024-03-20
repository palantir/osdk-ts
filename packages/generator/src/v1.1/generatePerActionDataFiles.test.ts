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
import { generatePerActionDataFiles } from "./generatePerActionDataFiles";

describe(generatePerActionDataFiles, () => {
  it("generates per action metadata", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo/actions";

    await generatePerActionDataFiles(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
      "",
      false,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();
    expect(helper.getFiles()).toMatchObject({
      [`${BASE_PATH}/markTodoCompleted.ts`]: expect.anything(),
      [`${BASE_PATH}/index.ts`]: expect.anything(),
    });
  });

  it("guards against empty actions", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo/actions";
    await generatePerActionDataFiles(
      { ...TodoWireOntology, actionTypes: {} },
      helper.minimalFiles,
      BASE_PATH,
      "",
      true,
    );
    expect(helper.getFiles()[`${BASE_PATH}/index.ts`]).toEqual("export {};\n");
  });

  it("imports object types correctly with array params in actions", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo/actions";
    await generatePerActionDataFiles(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
      "",
      true,
    );
    console.error("OH NO");
    console.error(helper.getFiles()[`${BASE_PATH}/deleteTodos.ts`]);
    expect(helper.getFiles()[`${BASE_PATH}/deleteTodos.ts`]).toContain(
      "import type { Todo } from '../objects';\n",
    );
  });
});
