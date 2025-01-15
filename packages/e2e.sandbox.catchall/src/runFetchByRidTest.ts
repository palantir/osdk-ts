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

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid } from "@osdk/api/unstable";
import { FintrafficAis } from "@osdk/e2e.generated.catchall";
import { dsClient } from "./client.js";

export async function runFetchByRidTest(): Promise<void> {
  const result = await dsClient(
    __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
  ).fetchOneByRid(
    FintrafficAis,
    "ri.phonograph2-objects.main.object.7b74bd56-4de1-4190-9123-266ab14b0b20",
  );

  console.log(result);
}
