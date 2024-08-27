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

import type { Client } from "@osdk/client";
import {
  assignEmployee1,
  Employee,
  Person,
  Venture,
} from "@osdk/e2e.generated.catchall";
import { client as unstableClient } from "./client.js";

const client: Client = unstableClient;

export async function runAssignEmployeeToVentureTest() {
  let didValidateOnce = false;
  for await (const emp of client(Employee).asyncIter()) {
    emp.id;
    console.log(`Employee: ${emp.id}`);

    let foundVentures = false;
    for await (const venture of emp.$link.ventures.asyncIter()) {
      foundVentures = true;
      console.log(`  - Venture: ${venture.ventureId} ${venture.ventureName}`);
    }

    if (!foundVentures) {
      console.log("  - No ventures. ");

      if (!didValidateOnce) {
        console.log("  - Validating assignEmployee1");
        didValidateOnce = true;

        const { data: [venture] } = await client(Venture).fetchPage();

        const r = await client(assignEmployee1).applyAction({
          "employee-1": emp.id,
          "venture-1": venture.ventureId,
        }, {
          $validateOnly: true,
        });

        console.log(r);
      }
    } else if (didValidateOnce) {
      // once we are sure a single action can work and we got some ventures we are good here
      break;
    }
  }

  const foo = (client as Client)(Person);

  const q = (client as Client)(Person).fetchPage();
}
