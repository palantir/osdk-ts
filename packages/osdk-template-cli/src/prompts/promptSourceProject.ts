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

const DEFAULT_PATH = "../examples/example-advance-to-do-application";
const PATH_REGEX = /^[a-zA-Z0-9-_/\\.]+$/;

async function validateSourceProjectPath(
  sourceProject: string,
): Promise<boolean> {
  if (!PATH_REGEX.test(sourceProject)) {
    consola.fail("Source project path can only contain valid path characters.");
    return false;
  }
  try {
    const stats = await fs.stat(sourceProject);
    if (!stats.isDirectory()) {
      consola.fail(`Source project ${sourceProject} is not a directory.`);
      return false;
    }

    const files = await fs.readdir(sourceProject);
    if (files.length === 0) {
      consola.fail(`Source project ${sourceProject} is empty.`);
      return false;
    }

    return true;
  } catch (err) {
    consola.fail(`Source project ${sourceProject} does not exist.`);
    return false;
  }
}

export async function promptSourceProject(
  { sourceProject }: { sourceProject?: string },
): Promise<string> {
  while (true) {
    if (
      sourceProject != null && await validateSourceProjectPath(sourceProject)
    ) {
      return sourceProject;
    }
    sourceProject = await consola.prompt("Source project path:", {
      type: "text",
      placeholder: DEFAULT_PATH,
      default: DEFAULT_PATH,
    });
  }
}
