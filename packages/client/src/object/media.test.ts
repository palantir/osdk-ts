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

import {
  $ontologyRid,
  objectTypeWithAllPropertyTypes,
} from "@osdk/client.test.ontology";
import { apiServer, stubData } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("media", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("reads media metadata successfully", async () => {
    const result = await client(
      objectTypeWithAllPropertyTypes,
    )
      .where({ id: stubData.objectWithAllPropertyTypes1.id }).fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference).toBeDefined();
    const mediaMetadata = await object1.mediaReference?.fetchMetadata();
    expect(mediaMetadata).toBeDefined();
    expect(mediaMetadata?.path).toEqual("file1.txt");
    expect(mediaMetadata?.mediaType).toEqual("application/json");
    expect(mediaMetadata?.sizeBytes).toEqual(20);
  });

  it("reads media content successfully", async () => {
    const result = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id }).fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference).toBeDefined();
    const mediaContent = await object1?.mediaReference?.fetchContents();
    const mediaText = await mediaContent!.text();
    expect(JSON.parse(mediaText)).toEqual({
      content: "Hello World",
    });
  });
});
