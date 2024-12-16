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

import { createMemoryTest, neverOptimizeFunction } from "../helpers.js";

import { createClient } from "@osdk/client";

const REPEAT_REQUESTS = 100;
const WARMUP_REQUESTS = 10;

let randomStringCounter = 0;
export function randomString() {
  let ret = randomStringCounter.toString(36).slice(0, 16).padStart(16, " ");
  randomStringCounter++;
  return ret;
}

const client = createClient(
  "http://localhost:6723/",
  "ri.d",
  () => Promise.resolve("hi"),
  {},
);

for (let i = 0; i < WARMUP_REQUESTS; i++) {
  const page = await client({ type: "object", apiName: "Employee" })
    .fetchPage();
  // something to keep the runtime from optimizing away the fetch
  console.log(page.data.length);
}

const r = await createMemoryTest(neverOptimizeFunction(async () => {
  const pages = [];
  for (let i = 0; i < REPEAT_REQUESTS; i++) {
    const page = await client({ type: "object", apiName: "Employee" })
      .fetchPage();
    pages.push(page);
  }

  return pages;
}));

// eslint-disable-next-line no-console
console.log(r);
