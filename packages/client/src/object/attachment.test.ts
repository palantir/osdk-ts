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

import { Ontology as MockOntology } from "@osdk/client.test.ontology";
import { apiServer, stubData } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("attachments", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      MockOntology.metadata.ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("reads attachment metadata successfully", async () => {
    const result = await client(
      MockOntology.objects.objectTypeWithAllPropertyTypes,
    )
      .where({ id: stubData.objectWithAllPropertyTypes1.id }).fetchPage();

    const object1 = result.data[0];
    expect(object1.attachment).toBeDefined();
    const attachmentMetadata = await object1.attachment?.fetchMetadata();
    expect(attachmentMetadata).toBeDefined();
    expect(attachmentMetadata?.filename).toEqual("file1.txt");
    expect(attachmentMetadata?.mediaType).toEqual("application/json");
    expect(attachmentMetadata?.sizeBytes).toEqual(18);
    expect(attachmentMetadata?.rid).toEqual(
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    );
  });

  it("reads attachment successfully", async () => {
    const result = await client(
      MockOntology.objects.objectTypeWithAllPropertyTypes,
    )
      .where({ id: stubData.objectWithAllPropertyTypes1.id }).fetchPage();

    const object1 = result.data[0];
    expect(object1.attachment).toBeDefined();
    const attachmentContent = await object1?.attachment?.fetchContents();
    const attachmentText = await attachmentContent!.text();
    expect(JSON.parse(attachmentText)).toEqual({
      name: "Hello World 2",
    });
  });
});
