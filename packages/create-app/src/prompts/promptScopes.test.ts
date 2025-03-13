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

import { afterEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptScopes } from "./promptScopes.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

test("it accepts valid scopes from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(
    "api:ontologies-read api:ontologies-write",
  );
  expect(await promptScopes({})).toEqual([
    "api:ontologies-read",
    "api:ontologies-write",
  ]);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts again if answered scopes are invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("!api:datasets-read");
  vi.mocked(consola).prompt.mockResolvedValueOnce("123api:datasets-read");
  vi.mocked(consola).prompt.mockResolvedValueOnce("api:datasets-read");
  expect(await promptScopes({})).toEqual(["api:datasets-read"]);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(3);
});

test("it accepts valid initial scopes without prompt", async () => {
  expect(await promptScopes({ scopes: ["api:admin-read", "api:admin-write"] }))
    .toEqual(
      ["api:admin-read", "api:admin-write"],
    );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it prompts if initial scopes are invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("api:datasets-read");
  expect(await promptScopes({ scopes: ["<api:datasets-read>"] })).toEqual(
    ["api:datasets-read"],
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});
