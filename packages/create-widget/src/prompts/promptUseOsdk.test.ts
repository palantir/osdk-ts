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
import { promptUseOsdk } from "./promptUseOsdk.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

function template(supportsOsdk: boolean): Template {
  return {
    id: "template-widget-test",
    label: "Test",
    buildDirectory: "./dist",
    supportsOsdk,
    files: {},
  };
}

test("it does not use an OSDK without prompting if the template does not support one", async () => {
  expect(await promptUseOsdk({ template: template(false) })).toBe(false);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it does not use an OSDK without prompting if skipOsdk is set", async () => {
  expect(
    await promptUseOsdk({ template: template(true), skipOsdk: true }),
  ).toBe(false);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it uses an OSDK without prompting if an osdk package is provided", async () => {
  expect(
    await promptUseOsdk({
      template: template(true),
      osdkPackage: "@myapp/sdk",
    }),
  ).toBe(true);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it uses an OSDK without prompting if an osdk registry url is provided", async () => {
  expect(
    await promptUseOsdk({
      template: template(true),
      osdkRegistryUrl:
        "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
    }),
  ).toBe(true);
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it uses an OSDK if the prompt is answered yes", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  expect(await promptUseOsdk({ template: template(true) })).toBe(true);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it does not use an OSDK if the prompt is answered no", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("no");
  expect(await promptUseOsdk({ template: template(true) })).toBe(false);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});
