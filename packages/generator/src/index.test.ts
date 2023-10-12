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

import { describe, expect, test, vi } from "vitest";
import type { WriteFileFn } from "./index";
import { generateClientSdkVersionOneDotOne } from "./index";

describe("generator", () => {
  test("should be able to generate a project", () => {
    const writeFile = vi.fn<Parameters<WriteFileFn>, ReturnType<WriteFileFn>>(
      () => Promise.resolve(),
    );

    generateClientSdkVersionOneDotOne(
      {
        rid: "ridHere",
        actionTypes: [],
        apiName: "ApIName",
        objectTypes: {},
        queryTypes: [],
      },
      { writeFile },
      "/foo",
    );

    expect(writeFile).toBeCalled();
    console.log(writeFile.mock.calls[0]);
    expect(writeFile.mock.calls[0][0]).toBe("/foo/index.ts");
    expect(writeFile.mock.calls[0][1]).contains(
      `export const ontologyRid = "ridHere";`,
    );
  });
});
