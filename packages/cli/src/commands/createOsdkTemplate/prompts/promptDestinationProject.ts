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

import { consola } from "consola";
import path from "path";

export async function promptDestinationProject(
  { destinationProject }: { destinationProject?: string },
): Promise<string> {
  while (
    destinationProject == null || !isValidPath(destinationProject)
  ) {
    if (destinationProject != null) {
      consola.fail(
        "Invalid path. Please enter a valid file system path.",
      );
    }
    destinationProject = await consola.prompt("Destination project path:", {
      type: "text",
      placeholder: "my-osdk-template-app",
      // default: "my-osdk-template-app",
    });
    if (destinationProject == null) {
      consola.info("Prompt canceled by user. Exiting...");
      process.exit(0);
    }
  }
  return destinationProject;
}

function isValidPath(p: string): boolean {
  // Attempt to resolve the path to check its validity.
  // This doesn't check for existence, just for a valid path format.
  try {
    const PATH_REGEX = /^[a-zA-Z0-9-_/\\.]+$/;
    return PATH_REGEX.test(p)
      && (path.isAbsolute(p) || path.normalize(p) === p);
  } catch {
    return false;
  }
}
