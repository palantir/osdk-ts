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
import { createClient } from "@osdk/client";
import {
  getFirstSecondElementOf2DArray,
  identity2DArray,
} from "@osdk/e2e.generated.catchall";
import { logger } from "./logger.js";
import { loggingFetch } from "./loggingFetch.js";

const client = createClient(
  process.env.FOUNDRY_STACK!,
  // Dev Opi Test Ontology
  "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
  async () => process.env.FOUNDRY_USER_TOKEN!,
  { logger },
  loggingFetch,
);

console.log(
  await client(getFirstSecondElementOf2DArray).executeFunction({
    "array": [[0, 1], [2, 3]],
  }),
); // should be 1

const res = await client(identity2DArray).executeFunction({
  "array": [[0, 1], [2, 3]],
});
const b = res[0][0];
console.log(res); // should return the same array
