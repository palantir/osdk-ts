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

import fs from "node:fs/promises";
import { consola } from "../consola.js";

export async function promptSourceProject(
  { sourceProject }: { sourceProject?: string },
): Promise<string> {
  // Adjusted regex to allow valid path characters
  const pathRegex = /^[a-zA-Z0-9-_/\\.]+$/;

  while (true) {
    if (sourceProject && pathRegex.test(sourceProject)) {
      try {
        const stats = await fs.stat(sourceProject);
        if (stats.isDirectory()) {
          const files = await fs.readdir(sourceProject);
          if (files.length > 0) {
            return sourceProject; // Valid path, exists, is a directory, and is not empty
          } else {
            consola.fail(`Source project ${sourceProject} is empty.`);
          }
        } else {
          consola.fail(`Source project ${sourceProject} is not a directory.`);
        }
      } catch (err) {
        consola.fail(`Source project ${sourceProject} does not exist.`);
      }
    } else if (sourceProject != null) {
      consola.fail(
        "Source project path can only contain valid path characters.",
      );
    }

    sourceProject = await consola.prompt("Source project path:", {
      type: "text",
      placeholder: "../examples/example-advance-to-do-application",
      default: "../examples/example-advance-to-do-application",
    });
  }
}
