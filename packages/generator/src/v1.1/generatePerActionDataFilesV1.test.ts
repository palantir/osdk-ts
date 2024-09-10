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

import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import { generatePerActionDataFilesV1 } from "./generatePerActionDataFilesV1.js";

describe(generatePerActionDataFilesV1, () => {
  it("generates per action metadata", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo/ontology/actions";
    const sanitizedOntology = TodoWireOntology;

    await generatePerActionDataFilesV1(
      {
        sanitizedOntology,
        fs: helper.minimalFiles,
        outDir: path.join(BASE_PATH, "..", ".."),
        ontology: enhanceOntology(sanitizedOntology, undefined, new Map(), ""),
      },
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();
    expect(helper.getFiles()).toMatchObject({
      [`${BASE_PATH}/markTodoCompleted.ts`]: expect.anything(),
      [`${BASE_PATH}/index.ts`]: expect.anything(),
    });
  });
});
