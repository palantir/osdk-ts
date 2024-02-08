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
import { promptApplicationUrl } from "./promptApplicationUrl.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

const valid = "https://app.com";

test("it accepts valid application url from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce(valid);
  expect(await promptApplicationUrl({})).toEqual(valid);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(2);
});

test("it prompts again if answered value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce("invalid");
  vi.mocked(consola).prompt.mockResolvedValueOnce("ftp://abc.com");
  vi.mocked(consola).prompt.mockResolvedValueOnce(valid);
  expect(await promptApplicationUrl({})).toEqual(valid);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(4);
});

test("it accepts valid initial value without prompt", async () => {
  expect(await promptApplicationUrl({ applicationUrl: valid })).toEqual(valid);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it prompts if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(valid);
  expect(await promptApplicationUrl({ applicationUrl: "invalid" })).toEqual(
    valid,
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it strips trailing slash from url", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce(valid + "/");
  expect(await promptApplicationUrl({})).toEqual(valid);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(2);
});

test("it skips prompting application url if told to fill in later", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("no");
  expect(await promptApplicationUrl({})).toEqual(undefined);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it skips prompting completely if told to", async () => {
  expect(await promptApplicationUrl({ skipApplicationUrl: true })).toEqual(
    undefined,
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});
