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
import { italic } from "../highlight.js";

export async function promptWidgetSetRid(
  { widgetSet }: { widgetSet?: string },
): Promise<string> {
  while (
    widgetSet == null
    || !/^ri\.widgetregistry\.\.widget-set\.[^.]+$/.test(widgetSet)
  ) {
    if (widgetSet != null) {
      consola.fail("Please enter a valid widget resource identifier (rid)");
    }
    widgetSet = await consola.prompt(
      `Enter the resource identifier (rid) for your widget set:\n${
        italic(
          "(Example: ri.widgetregistry..widget-set.1c66b352-4e00-40d2-995d-061c9d533ace)",
        )
      }`,
      { type: "text" },
    );
  }
  return widgetSet;
}
