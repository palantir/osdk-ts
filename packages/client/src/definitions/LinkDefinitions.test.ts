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

import type { ObjectOrInterfacePropertyKeysFrom } from "@osdk/api";
import { describe, expectTypeOf, it } from "vitest";
import type {
  FetchPageOrThrowArgs,
  SelectArg,
} from "../object/fetchPageOrThrow.js";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { MockOntology } from "../util/test/mockOntology.js";
import type { OsdkObjectLinksObject } from "./LinkDefinitions.js";

describe("LinkDefinitions", () => {
  describe("OsdkObjectLinkObject", () => {
    it("is correctly absent on types with no links", () => {
      expectTypeOf<OsdkObjectLinksObject<"Todo", typeof MockOntology>>()
        .toEqualTypeOf<never>();
    });

    it("populates on types with links", () => {
      expectTypeOf<OsdkObjectLinksObject<"Task", typeof MockOntology>>()
        .toEqualTypeOf<
          {
            Todos: {
              get: <
                A extends SelectArg<
                  typeof MockOntology,
                  "Todo",
                  ObjectOrInterfacePropertyKeysFrom<
                    typeof MockOntology,
                    "Todo"
                  >
                >,
              >(
                primaryKey: number,
                options?: A,
              ) => OsdkObjectFrom<
                "Todo",
                typeof MockOntology,
                A["select"] extends readonly string[] ? A["select"][number]
                  : ObjectOrInterfacePropertyKeysFrom<
                    typeof MockOntology,
                    "Todo"
                  >
              >;
              fetchPageOrThrow: <
                A extends FetchPageOrThrowArgs<
                  typeof MockOntology,
                  "Todo",
                  ObjectOrInterfacePropertyKeysFrom<typeof MockOntology, "Todo">
                >,
              >(options?: A | undefined) => Promise<
                PageResult<
                  OsdkObjectFrom<
                    "Todo",
                    typeof MockOntology,
                    A["select"] extends readonly string[] ? A["select"][number]
                      : ObjectOrInterfacePropertyKeysFrom<
                        typeof MockOntology,
                        "Todo"
                      >
                  >
                >
              >;
            };
            RP: {
              get: <
                A extends SelectArg<
                  typeof MockOntology,
                  "Person",
                  ObjectOrInterfacePropertyKeysFrom<
                    typeof MockOntology,
                    "Person"
                  >
                >,
              >(
                options?: A,
              ) => OsdkObjectFrom<
                "Person",
                typeof MockOntology,
                A["select"] extends readonly string[] ? A["select"][number]
                  : ObjectOrInterfacePropertyKeysFrom<
                    typeof MockOntology,
                    "Person"
                  >
              >;
            };
          }
        >();
    });
  });
});
