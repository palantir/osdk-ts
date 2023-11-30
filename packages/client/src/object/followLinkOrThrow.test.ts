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

import type { OsdkObjectFrom } from "@osdk/api";
import { createThinClient } from "@osdk/api";
import type { Mock } from "vitest";
import { describe, it, vi } from "vitest";
import { followLinkOrThrow } from "./followLinkOrThrow";
import { Ontology } from "./generatedNoCheck";

describe(followLinkOrThrow, () => {
  it("follows", async () => {
    const mockFetch: Mock = vi.fn();
    const thinClient = createThinClient(
      Ontology,
      "host.com",
      () => "",
      mockFetch,
    );

    const startingObject: OsdkObjectFrom<"Todo", typeof Ontology> = {} as any;

    const response = await followLinkOrThrow(
      thinClient,
      startingObject,
      "Assignee",
    );
  });
});
