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
import { generateComponent } from "../component.js";

describe("Components", () => {
  it("generates a component", () => {
    const project = new Project({});
    const directory = project.createDirectory("components");

    generateComponent(
      {
        name: "MyRid",
        type: {
          type: "builtin",
          builtin: {
            type: "rid",
            rid: {},
          },
        },
        safety: "SAFE",
        documentation: {},
      },
      directory,
      {
        generateVisitors: true,
      },
    );

    const sourceFiles = project.getSourceFiles();
    const sourceFile = project.getSourceFile("components/MyRid.ts");
    expect(sourceFile?.getFullText()).toMatchInlineSnapshot(`
            "export type MyRid = string;
            "
        `);
    expect(sourceFiles.length).toBe(1);
  });
});
