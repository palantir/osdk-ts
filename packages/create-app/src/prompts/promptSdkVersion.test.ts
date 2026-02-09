/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import type { Template } from "../templates.js";
import { promptSdkVersion } from "./promptSdkVersion.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

const templateBothVersions: Template = {
  id: "template-test",
  label: "Test",
  envPrefix: "VITE_",
  buildDirectory: "./dist",
  files: {
    "1.x": () => Promise.resolve(new Map()),
    "2.x": () => Promise.resolve(new Map()),
  },
};

const templateOnly1x: Template = {
  id: "template-test-1x",
  label: "Test 1.x",
  envPrefix: "VITE_",
  buildDirectory: "./dist",
  files: {
    "1.x": () => Promise.resolve(new Map()),
  },
};

const templateOnly2x: Template = {
  id: "template-test-2x",
  label: "Test 2.x",
  envPrefix: "VITE_",
  buildDirectory: "./dist",
  files: {
    "2.x": () => Promise.resolve(new Map()),
  },
};

test("defaults to latest version when no sdkVersion is provided", async () => {
  expect(
    await promptSdkVersion({ template: templateBothVersions }),
  ).toBe("2.x");
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("defaults to only available version when template has one version", async () => {
  expect(
    await promptSdkVersion({ template: templateOnly2x }),
  ).toBe("2.x");
  expect(
    await promptSdkVersion({ template: templateOnly1x }),
  ).toBe("1.x");
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("accepts explicit sdkVersion without prompt", async () => {
  expect(
    await promptSdkVersion({
      sdkVersion: "1.x",
      template: templateBothVersions,
    }),
  ).toBe("1.x");
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("prompts when explicit sdkVersion is not supported by template", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("2.x");
  expect(
    await promptSdkVersion({ sdkVersion: "1.x", template: templateOnly2x }),
  ).toBe("2.x");
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});
