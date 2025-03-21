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

import { Employee, Task } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer, stubData } from "@osdk/shared.test";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import { createAttachmentUpload } from "../object/AttachmentUpload.js";
import { getWireObjectSet } from "../objectSet/createObjectSet.js";
import { toDataValue } from "./toDataValue.js";
describe(toDataValue, () => {
  let client;
  let clientCtx;
  vi.fn();
  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({
      client
    } = testSetup);
    clientCtx = createMinimalClient({
      ontologyRid: testSetup.fauxFoundry.defaultOntologyRid
    }, testSetup.fauxFoundry.baseUrl, testSetup.auth, {});
    return () => {
      testSetup.apiServer.close();
    };
  });
  it("converts passthrough values correctly", async () => {
    // basic pass through types
    const basic = {
      null: undefined,
      boolean: false,
      date: "2024-01-01",
      integer: 0,
      string: "string",
      timestamp: "2024-01-01T00:00:00Z"
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
      attachmentSet
    }, clientCtx);
    expect(recursiveConversion).toEqual({
      attachment: "rid",
      attachmentArray: ["rid"],
      attachmentSet: ["rid"]
    });
  });
  it("recursively handles structs", async () => {
    const recursiveConversion = await toDataValue({
      inner: {
        attachment: "rid"
      }
    }, clientCtx);
    expect(recursiveConversion).toEqual({
      inner: {
        attachment: "rid"
      }
    });
  });
  it("maps an ontology object into just its primary key", async () => {
    const employee = stubData.employee1;
    const ontologyConversion = await toDataValue(employee, clientCtx);
    expect(ontologyConversion).toEqual(stubData.employee1.__primaryKey);
  });
  it("maps an ontology object into just its primary key with osdk wrapper", async () => {
    const task = await client(Employee).fetchOne(50030);
    const ontologyConversion = await toDataValue(task, clientCtx);
    expect(ontologyConversion).toEqual(task.$primaryKey);
  });
  it("passes through object set definitions", async () => {
    const clientObjectSet = client(Task).where({
      id: 0
    });
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
    expect(objectSetConversion).toMatchInlineSnapshot(expected);
    const definitionConversion = await toDataValue(definition, clientCtx);
    expect(definitionConversion).toMatchInlineSnapshot(expected);
  });
  it("converts blob attachment uploads correctly", async () => {
    const blob = new Blob([JSON.stringify({
      "hi": "mom"
    })]);
    const attachmentUpload = createAttachmentUpload(blob, "file1.txt");
    const converted = await toDataValue(attachmentUpload, clientCtx);
    expect(converted).toMatch(/ri\.attachments.main.attachment\.[a-z0-9\-]+/i);
  });
  it("converts file attachment uploads correctly", async () => {
    // Mimics the Web file API (https://developer.mozilla.org/en-US/docs/Web/API/File). The File constructor is only available in Node 19.2.0 and above
    const file = Object.assign(new Blob([JSON.stringify({
      name: "Hello World"
    }, null, 2)], {
      type: "application/json"
    }), {
      name: "file1.txt"
    });
    const converted = await toDataValue(file, clientCtx);
    expect(converted).toMatch(/ri\.attachments.main.attachment\.[a-z0-9\-]+/i);
  });
  it("converts media reference correctly", async () => {
    const mediaReference = {
      mimeType: "application/json",
      reference: {
        type: "mediaSetViewItem",
        mediaSetViewItem: {
          mediaItemRid: "media-item-rid",
          mediaSetRid: "media-set-rid",
          mediaSetViewRid: "media-set-view-rid"
        }
      }
    };
    const converted = await toDataValue(mediaReference, clientCtx);
    expect(converted).toEqual(mediaReference);
  });
});
//# sourceMappingURL=toDataValue.test.js.map