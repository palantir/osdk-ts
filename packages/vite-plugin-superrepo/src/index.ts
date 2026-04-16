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

import type { Plugin } from "vite";

/**
 * Vite plugin that transparently wraps the OSDK client with smartClient
 * during development. Any import of `client` from `src/client.ts`
 * automatically gets the local-function-routing wrapper applied.
 * Production builds are completely untouched.
 */
export function smartClientPlugin(): Plugin {
  return {
    name: "vite-plugin-smart-client",
    apply: "serve",

    transform(code, id) {
      if (!id.endsWith("/src/client.ts")) return null;

      return (
        code
          .replace(/export const client\b/, "const __rawClient")
          .replace(/export default client\b/, "export default __rawClient") +
        `\nimport { smartClient as __sc } from "@osdk/vite-plugin-superrepo/smartClient";\n` +
        `export const client = __sc(__rawClient);\n`
      );
    },
  };
}
