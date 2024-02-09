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

import { describe, expectTypeOf, it } from "vitest";
import type { Ontology as MockOntology } from "./generatedNoCheck/index.js";
import type { Office } from "./generatedNoCheck/ontology/objects.js";
import { Employee } from "./generatedNoCheck/ontology/objects.js";
import type { Client } from "./index.js";
import type { ObjectSet2 } from "./objectSet/ObjectSet.js";
import type { OsdkObjectFrom2 } from "./OsdkObjectFrom.js";

describe("client", () => {
  it("can be called with an object definition", async () => {
    const client: Client<MockOntology> = undefined as any;
    const objSet = client(Employee);
    expectTypeOf<typeof objSet>().toEqualTypeOf<
      ObjectSet2<typeof Employee>
    >();

    const result = await objSet.fetchPageOrThrow();
    expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
      OsdkObjectFrom2<
        typeof Employee
      >
    >();

    const office = await result.data[0].$link.officeLink.get();
    expectTypeOf<typeof office>().toEqualTypeOf<
      OsdkObjectFrom2<typeof Office>
    >();
  });
});
