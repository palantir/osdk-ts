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

import { $ontologyRid, Employee, Task } from "@osdk/client.test.ontology";
import { apiServer, MockOntology, stubData } from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createAttachmentUpload } from "../object/AttachmentUpload.js";
import { getWireObjectSet } from "../objectSet/createObjectSet.js";
import { toDataValue } from "./toDataValue.js";

describe(toDataValue, () => {
  let client: Client;
  let clientCtx: MinimalClient;

  const mockFetch: MockedFunction<typeof globalThis.fetch> = vi.fn();

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );

    clientCtx = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      async () => "myAccessToken",
      {},
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("converts passthrough values correctly", async () => {
    // basic pass through types
    const basic = {
      null: undefined,
      boolean: false,
      date: "2024-01-01",
      integer: 0,
      string: "string",
      timestamp: "2024-01-01T00:00:00Z",
    };
    const convertedBasic = await toDataValue(basic, clientCtx);
    expect(convertedBasic).toEqual(basic);
  });

  it("recursively converts arrays and sets into array types", async () => {
    const attachment = "rid";
    const attachmentArray = [attachment];
    const attachmentSet = new Set(attachmentArray);

    const recursiveConversion = await toDataValue({
      attachment,
      attachmentArray,
      attachmentSet,
    }, clientCtx);

    expect(recursiveConversion).toEqual({
      attachment: "rid",
      attachmentArray: ["rid"],
      attachmentSet: ["rid"],
    });
  });

  it("recursively handles structs", async () => {
    const struct = {
      inner: {
        attachment: "rid",
      },
    };

    const recursiveConversion = await toDataValue(struct, clientCtx);

    expect(recursiveConversion).toEqual({
      inner: { attachment: "rid" },
    });
  });

  it("maps an ontology object into just its primary key", async () => {
    const employee = stubData.employee1;
    const ontologyConversion = await toDataValue(employee, clientCtx);
    expect(ontologyConversion).toEqual(
      stubData.employee1.__primaryKey,
    );
  });

  it("maps an ontology object into just its primary key with osdk wrapper", async () => {
    const task = await client(Employee).fetchOne(50030);
    const ontologyConversion = await toDataValue(task, clientCtx);
    expect(ontologyConversion).toEqual(
      task.$primaryKey,
    );
  });

  it("passes through object set definitions", async () => {
    const clientObjectSet = client(Task).where({ id: 0 });
    const definition = getWireObjectSet(clientObjectSet);

    const expected = `
    {
      "objectSet": {
        "objectType": "Task",
        "type": "base",
      },
      "type": "filter",
      "where": {
        "field": "id",
        "type": "eq",
        "value": 0,
      },
    }
  `;
    const objectSetConversion = await toDataValue(clientObjectSet, clientCtx);
    expect(objectSetConversion).toMatchInlineSnapshot(
      expected,
    );

    const definitionConversion = await toDataValue(definition, clientCtx);
    expect(definitionConversion).toMatchInlineSnapshot(expected);
  });

  it("converts blob attachment uploads correctly", async () => {
    const blob =
      stubData.attachmentUploadRequestBody[stubData.localAttachment1.filename];
    const attachmentUpload = createAttachmentUpload(blob, "file1.txt");
    const converted = await toDataValue(attachmentUpload, clientCtx);

    expect(converted).toEqual(
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    );
  });

  it("converts file attachment uploads correctly", async () => {
    // Mimics the Web file API (https://developer.mozilla.org/en-US/docs/Web/API/File). The File constructor is only available in Node 19.2.0 and above
    const file = Object.assign(
      stubData.attachmentUploadRequestBody[stubData.localAttachment1.filename],
      { name: "file1.txt" },
    );

    const converted = await toDataValue(file, clientCtx);

    expect(converted).toEqual(
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    );
  });

  it("converts blob media uploads correctly", async () => {
    const data = stubData.mediaUploadRequestBody[stubData.localMedia1.filename];
    const mediaUpload = {
      data,
      fileName: stubData.localMedia1.filename,
      objectTypeApiName: stubData.mediaReferenceObjectTypeApi,
      propertyApiName: stubData.mediaPropertyName1,
    };
    const converted = await toDataValue(mediaUpload, clientCtx);

    expect(converted).toEqual(
      stubData.mediaReference,
    );
  });
});
