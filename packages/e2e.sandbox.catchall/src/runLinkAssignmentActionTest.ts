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
  createObjectToContainerLink,
  createOsdkTestContainer,
  OsdkTestContainer,
  OsdkTestObject,
  Person,
} from "@osdk/e2e.generated.catchall";
import { time } from "console";
import { client as unstableClient } from "./client.js";

const client: Client = unstableClient;

export async function runLinkAssignmentActionTest() {
  let didValidateOnce = false;

  const e = await client(OsdkTestObject).fetchOneWithErrors("hi", {
    // $select: ["adUsername"],
    $select: ["osdkObjectName"],
  });

  for await (const obj of client(OsdkTestObject).asyncIter()) {
    console.log(`Name: ${obj.osdkObjectName}`);

    let foundContainer = false;
    for await (const container of obj.$link.osdkTestContainerLink.asyncIter()) {
      foundContainer = true;
      console.log(`  - Venture: ${container.id} ${container.name}`);
    }

    if (!foundContainer) {
      console.log("  - No container for object. ");

      if (!didValidateOnce) {
        console.log("  - Validating assignEmployee1");
        didValidateOnce = true;

        const time = new Date().toISOString();
        client(createOsdkTestContainer).applyAction({
          "name": "assignEmployee1",
          time,
        });
        const { data: [container] } = await client(OsdkTestContainer)
          .fetchPage();
        const r = await client(createObjectToContainerLink).applyAction({
          "osdkTestObjectLink": obj.primaryKey_,
          "osdkTestContainerLink": container.id,
        }, {
          $validateOnly: true,
        });

        if (false) {
          const r = await client(createObjectToContainerLink).batchApplyAction([
            {
              "osdkTestObjectLink": obj.primaryKey_,
              "osdkTestContainerLink": container.id,
            },
          ], {
            $returnEdits: true,
          });
        }

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
