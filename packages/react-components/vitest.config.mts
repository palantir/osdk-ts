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

import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Use the forks pool (matching @osdk/react, which has the same happy-dom +
    // fakeTimers profile). This is a large, slow suite (DatePicker/DateRangePicker
    // alone run 60-70s each). With the "threads" pool, worker_threads share a
    // single process event loop; under the concurrent CI test matrix the main
    // thread could be starved long enough that vitest's worker RPC timed out
    // ("Timeout calling onTaskUpdate") even though every test passed. Forks give
    // each worker its own process/event loop, avoiding that starvation.
    pool: "forks",
    exclude: [...configDefaults.exclude, "**/build/**/*"],
    environment: "happy-dom",
    setupFiles: ["./src/test/setupPolyfills.ts"],
    env: {
      TZ: "UTC",
      LANG: "en_US.UTF-8",
    },
    fakeTimers: {
      toFake: ["setTimeout", "clearTimeout", "Date"],
    },
  },
});
