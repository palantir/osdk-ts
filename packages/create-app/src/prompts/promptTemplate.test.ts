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
import { TEMPLATES } from "../generatedNoCheck/templates.js";
import { promptTemplate } from "./promptTemplate.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

test("it accepts valid template from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(TEMPLATES[0].id);
  expect(await promptTemplate({})).toEqual(TEMPLATES[0]);
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts valid initial template id value without prompt", async () => {
  expect(await promptTemplate({ template: TEMPLATES[0].id })).toEqual(
    TEMPLATES[0],
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it accepts valid initial template id value without 'template-' prefix without prompt", async () => {
  expect(
    await promptTemplate({
      template: TEMPLATES[0].id.substring("template-".length),
    }),
  ).toEqual(
    TEMPLATES[0],
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it prompts if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(TEMPLATES[0].id);
  expect(await promptTemplate({ template: "missing" })).toEqual(
    TEMPLATES[0],
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});
