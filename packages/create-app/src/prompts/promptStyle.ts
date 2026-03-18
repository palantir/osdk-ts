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

import { consola } from "../consola.js";
import { green } from "../highlight.js";
import type { StyleAddon, Template } from "../templates.js";

export async function promptStyle(
  parsed: { style?: string },
  template: Template,
): Promise<StyleAddon | undefined> {
  const addons = template.styleAddons;
  if (addons == null || addons.length === 0) {
    return undefined;
  }

  if (parsed.style === "vanilla") {
    return undefined;
  }

  if (parsed.style != null) {
    const match = addons.find((a) => a.id === parsed.style);
    if (match != null) {
      return match;
    }
  }

  const styleId = await consola.prompt(
    parsed.style != null
      ? `The provided style ${
        green(parsed.style)
      } is invalid. Select a UI style:`
      : "Select a UI style:",
    {
      type: "select",
      options: [
        { value: "vanilla", label: "Vanilla CSS (default)" },
        ...addons.map((a) => ({
          value: a.id,
          label: a.label,
        })),
      ],
    },
  );

  if (styleId === "vanilla") {
    return undefined;
  }

  return addons.find((a) => a.id === styleId);
}
