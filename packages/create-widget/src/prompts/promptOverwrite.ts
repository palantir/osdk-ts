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

import fs from "node:fs";
import path from "node:path";
import { consola } from "../consola.js";
import { green } from "../highlight.js";

export async function promptOverwrite({
  project,
  overwrite,
}: {
  project: string;
  overwrite?: boolean;
}): Promise<boolean> {
  if (overwrite != null) {
    return overwrite;
  }

  if (!fs.existsSync(path.join(process.cwd(), project))) {
    return true;
  }

  const result = (await consola.prompt(
    `The directory ${
      green(
        project,
      )
    } already exists do you want to overwrite or ignore it?`,
    {
      type: "select",
      options: [
        { label: "Remove existing files and continue", value: "overwrite" },
        { label: "Ignore files and continue", value: "ignore" },
        { label: "Cancel", value: "cancel" },
      ],
    },
    // Types for "select" are wrong the value is returned rather than the option object
    // https://github.com/unjs/consola/pull/238
  )) as unknown as "overwrite" | "ignore" | "cancel";

  switch (result) {
    case "overwrite":
      return true;
    case "ignore":
      return false;
    case "cancel":
      consola.fail("Operation cancelled");
      process.exit(0);
  }
}
