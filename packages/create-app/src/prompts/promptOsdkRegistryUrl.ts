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
import { italic } from "../highlight.js";

export async function promptOsdkRegistryUrl(
  { osdkRegistryUrl }: { osdkRegistryUrl?: string },
): Promise<string> {
  while (
    osdkRegistryUrl == null
    || !/^https:\/\/[^/]+\/artifacts\/api\/repositories\/ri\.artifacts\.[^/]+\/contents\/release\/npm\/?$/
      .test(
        osdkRegistryUrl,
      )
  ) {
    if (osdkRegistryUrl != null) {
      consola.fail(
        "Please enter a valid NPM registry URL to install your OSDK package",
      );
    }
    osdkRegistryUrl = await consola.prompt(
      `Enter the NPM registry URL to install your OSDK package from Developer Console:\n${
        italic(
          "(Example: https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.a4a7fe1c-486f-4226-b706-7b90005f527d/contents/release/npm)",
        )
      }`,
      { type: "text" },
    );
  }
  return osdkRegistryUrl.replace(/\/$/, "");
}
