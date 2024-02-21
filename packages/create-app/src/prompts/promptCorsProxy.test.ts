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

import { afterEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptCorsProxy } from "./promptCorsProxy.js";

vi.mock("../consola.js");
vi.mock("node:fs");

afterEach(() => {
  vi.restoreAllMocks();
});

test("it accepts 'corsProxy' true from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(true);
  expect(await promptCorsProxy({})).toBe(true);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts 'corsProxy' false from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(false);
  expect(await promptCorsProxy({})).toBe(false);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts initial value without prompt", async () => {
  expect(await promptCorsProxy({ corsProxy: true })).toBe(true);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
  expect(await promptCorsProxy({ corsProxy: false })).toBe(false);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});
