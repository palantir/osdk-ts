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

import { describe, expectTypeOf, it } from "vitest";
import type { ObjectIdentifiers } from "../OsdkBase.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import type { ExperimentFns } from "./Experiment.js";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions } from "./subscribeToLinks.js";

type SubscribeToLinks = ExperimentFns<
  typeof __EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions
>["subscribeToLinks"];

describe("subscribeToLinks", () => {
  const employeeOne = {} as Osdk.Instance<EmployeeApiTest>;
  const employeeTwo = {} as Osdk.Instance<EmployeeApiTest>;
  const subscribeToLinks: SubscribeToLinks = () => ({
    unsubscribe: () => {},
  });

  it("infers links and updates from the first object", () => {
    subscribeToLinks({
      links: ["lead", "peeps"],
      listener: {
        onChange: ({ updates }) => {
          expectTypeOf(updates[0].linkType).toEqualTypeOf<"lead" | "peeps">();
          expectTypeOf(updates[0].source).toEqualTypeOf<
            ObjectIdentifiers<EmployeeApiTest>
          >();
          expectTypeOf(updates[0].target).toEqualTypeOf<
            ObjectIdentifiers<EmployeeApiTest>
          >();
        },
      },
      objects: [employeeOne, employeeTwo],
    });
  });
});
