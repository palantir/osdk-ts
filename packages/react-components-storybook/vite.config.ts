/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { defineConfig } from "vite";

export default defineConfig({
  // Pre-bundle the runtime deps the stories pull in. Without this, Vite
  // discovers them mid-run and reloads the browser page, which closes the
  // Vitest connection and reports "no tests" (especially on a cold CI cache).
  optimizeDeps: {
    // Keep date-fns v2 (react-components) and v4 (faux) separate during resolution.
    exclude: ["date-fns"],
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
});
