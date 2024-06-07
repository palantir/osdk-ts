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
import { generateQueries } from "./generateQueries.js";

describe(generateQueries, () => {
  it("generates queries interface", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateQueries(TodoWireOntology, helper.minimalFiles, BASE_PATH);

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(helper.getFiles()[`${BASE_PATH}/Queries.ts`])
      .toMatchInlineSnapshot(`
        "import type { QueryError, QueryResponse, Result } from '@osdk/legacy-client';

        export interface Queries {
          /**
           * @param {boolean} params.completed
           * @returns number
           */
          getCount(params: { completed: boolean }): Promise<Result<QueryResponse<number>, QueryError>>;
        }
        "
      `);
  });
});
