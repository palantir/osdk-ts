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
import type { OsdkObjectPropertyType } from "../Definitions.js";
import type { Attachment } from "./Attachment.js";

describe("Object definitions", () => {
  it("correctly upgrades attachment types at conversion time", () => {
    const attachment = {
      type: "attachment",
    } as const;

    const attachmentArray = {
      type: "attachment",
      multiplicity: true,
    } as const;

    expectTypeOf<OsdkObjectPropertyType<typeof attachment>>().toEqualTypeOf<
      Attachment
    >();

    expectTypeOf<OsdkObjectPropertyType<typeof attachmentArray>>()
      .toEqualTypeOf<
        Attachment[]
      >();
  });
  it("correctly maps struct types", () => {
    const structType = {
      type: {
        integerField: "integer",
        floatField: "float",
        attachment: "attachment",
      },
    } as const;

    const structTypeArray = {
      type: {
        integerField: "integer",
        floatField: "float",
        attachment: "attachment",
      },
      multiplicity: true,
    } as const;
    expectTypeOf<OsdkObjectPropertyType<typeof structType>>().toEqualTypeOf<
      {
        readonly integerField: number;
        readonly floatField: number;
        readonly attachment: Attachment;
      }
    >();

    expectTypeOf<OsdkObjectPropertyType<typeof structTypeArray>>()
      .toEqualTypeOf<
        {
          readonly integerField: number;
          readonly floatField: number;
          readonly attachment: Attachment;
        }[]
      >();
  });
});
