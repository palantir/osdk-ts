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

import mockFs from "mock-fs";
import { afterEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptSourceProject } from "./promptSourceProject.js";

vi.mock("../consola.js");

afterEach(() => {
  mockFs.restore();
  vi.restoreAllMocks();
});

test("it accepts valid path from prompt", async () => {
  mockFs({
    "example-advance-to-do-application": {
      "file1.js": "",
    },
  });

  vi.mocked(consola.prompt).mockResolvedValueOnce(
    "example-advance-to-do-application",
  );

  expect(await promptSourceProject({})).toEqual(
    "example-advance-to-do-application",
  );
  expect(vi.mocked(consola.prompt)).toHaveBeenCalledTimes(1);
});

test("it prompts again if answered value is invalid", async () => {
  mockFs({
    "example-advance-to-do-application": {
      "file1.js": "",
    },
  });

  vi.mocked(consola.prompt)
    .mockResolvedValueOnce("!@#$%^&*()_+")
    .mockResolvedValueOnce("example-advance-to-do-application");

  expect(await promptSourceProject({})).toEqual(
    "example-advance-to-do-application",
  );
  expect(vi.mocked(consola.prompt)).toHaveBeenCalledTimes(2);
});

test("it accepts valid initial value without prompt", async () => {
  mockFs({
    "example-advance-to-do-application": {
      "file1.js": "",
    },
  });

  expect(
    await promptSourceProject({
      sourceProject: "example-advance-to-do-application",
    }),
  ).toEqual("example-advance-to-do-application");
  expect(vi.mocked(consola.prompt)).not.toHaveBeenCalled();
});

test("it prompts if initial value is invalid", async () => {
  mockFs({
    "example-advance-to-do-application": {
      "file1.js": "",
    },
  });

  vi.mocked(consola.prompt).mockResolvedValueOnce(
    "example-advance-to-do-application",
  );

  expect(await promptSourceProject({ sourceProject: "!@#$%^&*()_+" })).toEqual(
    "example-advance-to-do-application",
  );
  expect(vi.mocked(consola.prompt)).toHaveBeenCalledTimes(1);
});

test("it fails if path is a file", async () => {
  // Initial mock setup with the path as a file
  mockFs({
    "example-advance-to-do-application-file": "file content", // This represents a file
  });

  // Mock the prompt to return first a file path, then a directory path
  vi.mocked(consola.prompt)
    .mockResolvedValueOnce("example-advance-to-do-application-file") // First attempt, it's a file
    .mockResolvedValueOnce("example-advance-to-do-application-dir"); // Second attempt, should be a directory

  // Simulate the second call by changing the mock file system to a directory
  mockFs({
    "example-advance-to-do-application-dir": { "file1.js": "" }, // This represents a directory
  });

  // Expect that the function will eventually return the directory path after the second valid input
  expect(await promptSourceProject({})).toEqual(
    "example-advance-to-do-application-dir",
  );

  // The prompt should be called twice: once for the file and once for the valid directory
  expect(vi.mocked(consola.prompt)).toHaveBeenCalledTimes(2);
});

test("it fails if directory is empty", async () => {
  // Initial mock setup with the path as an empty directory
  mockFs({
    "example-advance-to-do-application-empty": {}, // This represents an empty directory
  });

  // Mock the prompt to first return the empty directory path, then a valid directory path
  vi.mocked(consola.prompt)
    .mockResolvedValueOnce("example-advance-to-do-application-empty") // First attempt, it's an empty directory
    .mockResolvedValueOnce("example-advance-to-do-application-valid"); // Second attempt, should be a valid directory

  // Simulate the second call by changing the mock file system to a directory with files
  mockFs({
    "example-advance-to-do-application-valid": { "file1.js": "" }, // This represents a valid directory
  });

  // Expect that the function will eventually return the valid directory path after the second valid input
  expect(await promptSourceProject({})).toEqual(
    "example-advance-to-do-application-valid",
  );

  // The prompt should be called twice: once for the empty directory and once for the valid directory
  expect(vi.mocked(consola.prompt)).toHaveBeenCalledTimes(2);
});
