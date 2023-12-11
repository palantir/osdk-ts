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

import type { Client } from "@osdk/client";
import type { Ontology } from "@osdk/examples.basic.sdk";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

/**
 * As a consumer of OSDK, you will not need to use this file ever. It is simply here
 * as a mechanism for us building the OSDK to be sure that we have not broken types
 * across changes.
 * @param client
 */
export function typeChecks(client: Client<Ontology>) {
  // client.objectSet("Employee") is the same as client.objects.Employee
  {
    const objectSet = client.objectSet("Employee");
    expectType<TypeOf<typeof objectSet, typeof client["objects"]["Employee"]>>(
      true,
    );
  }

  // single link pivot types are correct
  {
    const objectSet = client.objectSet("Employee").pivotTo("lead");
    expectType<TypeOf<typeof objectSet, typeof client["objects"]["Employee"]>>(
      true,
    );
  }

  // multi link pivot types are correct
  {
    const objectSet = client.objectSet("Employee").pivotTo("peeps");
    expectType<TypeOf<typeof objectSet, typeof client["objects"]["Employee"]>>(
      true,
    );
  }
}
