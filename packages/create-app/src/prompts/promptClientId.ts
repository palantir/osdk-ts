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

export async function promptClientId(
  { clientId }: { clientId?: string },
): Promise<string> {
  while (clientId == null || !/^[0-9a-f]+$/.test(clientId)) {
    if (clientId != null) {
      consola.fail("Please enter a valid OAuth client ID");
    }
    clientId = await consola.prompt(
      `Enter the OAuth client ID for your application from Developer Console:\n${
        italic(
          "(Example 2650385ab6c5e0df3b44aff776b00a42)",
        )
      }`,
      { type: "text" },
    );
  }
  return clientId;
}
