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
import { colorize } from "consola/utils";

export async function promptOsdkPackage(
  { osdkPackage }: { osdkPackage?: string },
): Promise<string> {
  while (osdkPackage == null || !/^@[a-z0-9-]+\/sdk$/.test(osdkPackage)) {
    if (osdkPackage != null) {
      consola.fail("Please enter a valid OSDK package name");
    }
    osdkPackage = await consola.prompt(
      `Enter the OSDK package name for your application from Developer Console:\n${
        colorize("italic", "(Example: @my-app/sdk)")
      }`,
      { type: "text" },
    );

    if (osdkPackage == null) {
      consola.info("Prompt canceled. Exiting...");
      process.exit(0); // Exit the process if Esc is pressed
    }
  }
  return osdkPackage;
}
