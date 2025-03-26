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

import { afterEach, describe, expect, it, test, vi } from "vitest";
import { consola } from "../consola.js";
import { TEMPLATES } from "../generatedNoCheck/templates.js";
import {
  getAvailableTemplatesOrThrow,
  promptTemplate,
} from "./promptTemplate.js";

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

describe(getAvailableTemplatesOrThrow, () => {
  it("does not include tutorials", () => {
    //
    // At some point, when we changed to generating the templates file, I broke
    // the ability to 'hide' the tutorials. This test is to ensure that the
    // tutorials are not included in the list of available templates but still
    // exist in the TEMPLATES list.
    //
    const tutorials = [
      "template-tutorial-todo-app",
      "template-tutorial-todo-aip-app",
    ];

    for (const id of tutorials) {
      // First be sure that the templates are in TEMPLATES, otherwise if someone
      // renamed them the other checks could pass since we are checking by name
      expect(TEMPLATES).toContainEqual(
        expect.objectContaining({ id }),
      );

      // Be sure that the function for prompting does not include the known tutorials
      expect(getAvailableTemplatesOrThrow(false)).not.toContainEqual(
        expect.objectContaining({ id }),
      );
    }
  });
});
