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

import { consola } from "../consola.js";

export async function promptDestinationProject(
  { destinationProject }: { destinationProject?: string },
): Promise<string> {
  while (
    destinationProject == null || !/^[a-zA-Z0-9-_]+$/.test(destinationProject)
  ) {
    if (destinationProject != null) {
      consola.fail(
        "Project name can only contain alphanumeric characters, hyphens and underscores",
      );
    }
    destinationProject = await consola.prompt("Destination project name:", {
      type: "text",
      placeholder: "my-osdk-template-app",
      default: "my-osdk-template-app",
    });
  }

  return destinationProject;
}
