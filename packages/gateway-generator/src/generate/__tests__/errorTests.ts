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

import { Project } from "ts-morph";
import { describe, expect, it } from "vitest";
import { generateError } from "../error";

describe("Errors", () => {
  it("should generate an error interface", () => {
    const project = new Project({});
    const directory = project.createDirectory("errors");
    generateError(
      {
        name: "MyError",
        errorType: "ERROR_TYPE",
        parameters: {
          param1: {
            type: {
              type: "builtin",
              builtin: {
                type: "string",
                string: {},
              },
            },
            safety: "SAFE",
            documentation: {},
          },
        },
        documentation: {},
      },
      directory,
    );
    const sourceFiles = project.getSourceFiles();
    const sourceFile = project.getSourceFile("errors/MyError.ts");
    expect(sourceFile?.getFullText()).toMatchInlineSnapshot(`
            "export interface MyError {
                errorCode: \\"ERROR_TYPE\\";
                errorName: \\"MyError\\";
                errorInstanceId: string;
                parameters: {
                        param1: string;
                    };
            }
            "
        `);
    expect(sourceFiles.length).toBe(1);
  });
});
