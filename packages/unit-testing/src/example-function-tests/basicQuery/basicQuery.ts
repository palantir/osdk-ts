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

import type { Client } from "@osdk/client";
import { addOne } from "@osdk/client.test.ontology";
import type { Integer } from "@osdk/functions";

export async function basicQuery(client: Client, n: Integer): Promise<Integer> {
  const result = await client(addOne).executeFunction({ n });
  if (result !== n + 1) {
    throw new Error(`Expected ${n + 1}, but got ${result}`);
  }
  return result;
}
