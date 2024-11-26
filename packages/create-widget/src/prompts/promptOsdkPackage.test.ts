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

import { afterEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptOsdkPackage } from "./promptOsdkPackage.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

test("it accepts valid osdk package from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("@myapp/sdk");
  expect(await promptOsdkPackage({})).toEqual("@myapp/sdk");
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts again if answered value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("some-package");
  vi.mocked(consola).prompt.mockResolvedValueOnce("@some/package");
  vi.mocked(consola).prompt.mockResolvedValueOnce("@myapp/sdk");
  expect(await promptOsdkPackage({})).toEqual("@myapp/sdk");
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(3);
});

test("it accepts valid initial value without prompt", async () => {
  expect(await promptOsdkPackage({ osdkPackage: "@myapp/sdk" })).toEqual(
    "@myapp/sdk",
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it prompts if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("@myapp/sdk");
  expect(await promptOsdkPackage({ osdkPackage: "some-package" })).toEqual(
    "@myapp/sdk",
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});
