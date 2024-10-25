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

const scopeNameRegex = /^[a-zA-Z-_:]+$/;

export async function promptScopes(
  { scopes }: { scopes?: string[] },
): Promise<string[] | undefined> {
  if (scopes == null) {
    return undefined;
  }

  for (const scope in scopes) {
    if (!scopeNameRegex.test(scope)) {
      consola.fail(
        "Scope name can only contain letters, hyphens, underscores, and colons",
      );
      // Following promptOverwrite
      process.exit(0);
    }
  }

  return scopes;
}
