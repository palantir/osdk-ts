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

// @ts-check

import { createMemoryTest } from "@osdk/benchmarks.lib.test";

const r = await createMemoryTest(async () => {
  const { createClient } = await import(
    "@osdk/benchmarks.bundles.simple/build/benchmark/bundler/esbuild/createClient.node.js"
  );

  // return from main so that node doesn't evict early.
  return createClient;
});

// eslint-disable-next-line no-console
console.log(r);
