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

    stubData.fauxFoundry
      .getDataStore($ontologyRid)
      .registerMedia(
        objectTypeWithAllPropertyTypes.apiName,
        "mediaReference",
        {
          content: new TextEncoder().encode(
            JSON.stringify({ content: "Hello World" }),
          ),
          mediaType: "application/json",
          mediaItemRid: stubData.objectWithAllPropertyTypes1.mediaReference,
          path: "file1.txt",
        },
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
    expect(mediaMetadata).toEqual({
      path: "file1.txt",
      mediaType: "application/json",
      sizeBytes: 25,
    });
  });

  it("reads media content successfully", async () => {
    const result = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id }).fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference).toBeDefined();
    const mediaContent = await object1?.mediaReference?.fetchContents();
    expect(await mediaContent!.json()).toEqual({
      content: "Hello World",
    });
  });
});
