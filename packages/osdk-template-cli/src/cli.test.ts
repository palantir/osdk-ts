/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirSync } from "tmp";
import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { cli } from "./cli.js";
import { promptOverwrite } from "./prompts/promptOverwrite.js";
import { promptProject } from "./prompts/promptProject.js";
import { promptSourceProject } from "./prompts/promptSourceProject.js";
import { run } from "./run.js";

vi.mock("./prompts/promptOverwrite.js");
vi.mock("./prompts/promptProject.js");
vi.mock("./prompts/promptSourceProject.js");
vi.mock("./run.js");

let createAppVersion: string;
beforeAll(() => {
  createAppVersion = JSON.parse(
    fs.readFileSync(
      path.join(dirname(fileURLToPath(import.meta.url)), "..", "package.json"),
      "utf-8",
    ),
  ).version;
});

beforeEach(() => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  const tmpDirName = tmpDir.name;
  vi.spyOn(process, "cwd").mockImplementation(() => tmpDirName);

  return () => {
    vi.restoreAllMocks();
    tmpDir?.removeCallback();
  };
});

describe("CLI", () => {
  test("runs with default arguments", async () => {
    vi.mocked(promptSourceProject).mockResolvedValue(
      "../examples/example-advance-to-do-application",
    );
    vi.mocked(promptProject).mockResolvedValue("my-new-project");
    vi.mocked(promptOverwrite).mockResolvedValue(true);
    vi.mocked(run).mockResolvedValue();

    await cli(["node", "cli.js"]);

    expect(promptSourceProject).toHaveBeenCalled();
    expect(promptProject).toHaveBeenCalled();
    expect(promptOverwrite).toHaveBeenCalled();
    expect(run).toHaveBeenCalledWith({
      sourceProject: "../examples/example-advance-to-do-application",
      project: "my-new-project",
      overwrite: true,
    });
  });
});
