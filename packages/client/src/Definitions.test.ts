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

import type { ObjectTypePropertyDefinition } from "@osdk/api";
import { describe, expectTypeOf, it } from "vitest";
import type { OsdkObjectPropertyType } from "./Definitions.js";

describe("OsdkObjectPropertyType", () => {
  describe("{ nullable: false } property", () => {
    const nonNullDef = {
      type: "string",
      nullable: false,
    } satisfies ObjectTypePropertyDefinition;

    it("is `| undefined` for `false`", () => {
      expectTypeOf<OsdkObjectPropertyType<typeof nonNullDef, false>>()
        .toEqualTypeOf<string | undefined>();
    });

    it("is not `| undefined` for `true`", () => {
      expectTypeOf<OsdkObjectPropertyType<typeof nonNullDef, true>>()
        .toEqualTypeOf<string>();
    });
  });

  describe("{ nullable: true } property", () => {
    const nullableDef = {
      type: "string",
      nullable: true,
    } satisfies ObjectTypePropertyDefinition;

    it("is | undefined for `false`", () => {
      expectTypeOf<OsdkObjectPropertyType<typeof nullableDef, false>>()
        .toEqualTypeOf<string | undefined>();
    });

    it("is `| undefined` for `true`", () => {
      expectTypeOf<OsdkObjectPropertyType<typeof nullableDef, true>>()
        .toEqualTypeOf<string | undefined>();
    });
  });
});
