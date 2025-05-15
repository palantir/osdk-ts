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

import fs from "node:fs";
import { afterEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptOverwrite } from "./promptOverwrite.js";

// Mock the consola and fs modules
vi.mock("../consola.js");
vi.mock("node:fs");

afterEach(() => {
  vi.restoreAllMocks();
});

test("it accepts valid 'overwrite' from prompt", async () => {
  vi.mocked(fs.existsSync).mockReturnValue(true);
  vi.mocked(consola.prompt).mockResolvedValueOnce("overwrite");

  const result = await promptOverwrite({ destinationProject: "abc" });
  expect(result).toBe(true);
  expect(vi.mocked(consola.prompt).mock.calls.length).toBe(1);
});

test("it accepts valid 'ignore' from prompt", async () => {
  vi.mocked(fs.existsSync).mockReturnValue(true);
  vi.mocked(consola.prompt).mockResolvedValueOnce("ignore");

  const result = await promptOverwrite({ destinationProject: "abc" });
  expect(result).toBe(false);
  expect(vi.mocked(consola.prompt).mock.calls.length).toBe(1);
});

test("it accepts initial value without prompt", async () => {
  const result = await promptOverwrite({
    destinationProject: "abc",
    overwrite: true,
  });
  expect(result).toBe(true);
  expect(vi.mocked(consola.prompt).mock.calls.length).toBe(0);
});

test("it returns true if project does not already exist", async () => {
  vi.mocked(fs.existsSync).mockReturnValue(false);

  const result = await promptOverwrite({ destinationProject: "abc" });
  expect(result).toBe(true);
  expect(vi.mocked(consola.prompt).mock.calls.length).toBe(0);
});
