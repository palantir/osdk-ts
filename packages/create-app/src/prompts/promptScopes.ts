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

  while (true) {
    const invalidScopes = scopes.filter(scope => !scopeNameRegex.test(scope));
    const allValidScopes = invalidScopes.length === 0;
    if (allValidScopes) {
      break;
    }

    const joinedInvalidScopes = invalidScopes.join(", ");
    consola.fail(
      `Scopes [ ${joinedInvalidScopes} ] are invalid. Scope names can only contain letters, hyphens, underscores, and colons`,
    );
    const stringScopes = await consola.prompt("Scopes:", {
      type: "text",
      placeholder: "api:read-data api:write-data",
      default: "api:read-data api:write-data",
    });
    scopes = stringScopes.split(" ");
  }

  return deduplicateScopes(scopes);
}

// Preserving the originally specified scope order
function deduplicateScopes(scopes: string[]): string[] {
  const dedupedScopes = [];
  const seen = new Set();
  for (const scope of scopes) {
    if (seen.has(scope)) {
      continue;
    }
    dedupedScopes.push(scope);
    seen.add(scope);
  }
  return dedupedScopes;
}
