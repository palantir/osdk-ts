/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

vi.mock("../consola.js");
vi.mock("node:fs");

afterEach(() => {
  vi.restoreAllMocks();
});

test("it accepts valid 'overwrite' from prompt", async () => {
  vi.mocked(fs.existsSync).mockReturnValueOnce(true);
  vi.mocked(consola).prompt.mockResolvedValueOnce("overwrite");
  expect(await promptOverwrite({ project: "abc" })).toBe(true);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts valid 'ignore' from prompt", async () => {
  vi.mocked(fs.existsSync).mockReturnValueOnce(true);
  vi.mocked(consola).prompt.mockResolvedValueOnce("ignore");
  expect(await promptOverwrite({ project: "abc" })).toBe(false);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts initial value without prompt", async () => {
  expect(await promptOverwrite({ project: "abc", overwrite: true })).toBe(true);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it returns true if project does not already exist", async () => {
  vi.mocked(fs.existsSync).mockReturnValueOnce(false);
  expect(await promptOverwrite({ project: "abc" })).toBe(true);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});
