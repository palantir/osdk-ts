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

import mockFs from "mock-fs";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptDestinationProject } from "./promptDestinationProject.js";

vi.mock("../consola.js");

beforeEach(() => {
  mockFs({
    "/valid/path/to/project": {}, // Mock a valid directory
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  mockFs.restore();
});

test("it accepts valid path from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("/valid/path/to/project");
  expect(await promptDestinationProject({})).toEqual("/valid/path/to/project");
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts again if answered value is invalid path", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("!@#$%^&*()_+");
  vi.mocked(consola).prompt.mockResolvedValueOnce("/valid/path/to/project");
  expect(await promptDestinationProject({})).toEqual("/valid/path/to/project");
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(2);
});

test("it accepts valid initial path without prompt", async () => {
  expect(
    await promptDestinationProject({
      destinationProject: "/valid/path/to/project",
    }),
  )
    .toEqual("/valid/path/to/project");
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it prompts if initial path is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("/valid/path/to/project");
  expect(await promptDestinationProject({ destinationProject: "!@#$%^&*()_+" }))
    .toEqual("/valid/path/to/project");
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});
