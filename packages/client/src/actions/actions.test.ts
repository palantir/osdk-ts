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

import type {
  ActionEditResponse,
  ActionValidationResponse,
  AttachmentUpload,
} from "@osdk/client.api";
import {
  $Actions,
  $ontologyRid,
  actionTakesAttachment,
  createOffice,
  moveOffice,
} from "@osdk/client.test.ontology";
import { apiServer, stubData } from "@osdk/shared.test";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createAttachmentUpload } from "../object/AttachmentUpload.js";
import { ActionValidationError } from "./ActionValidationError.js";

describe("actions", () => {
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

  it("conditionally returns the edits", async () => {
    const result = await client(createOffice).applyAction({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    }, { $returnEdits: true });

    expectTypeOf<typeof result>().toEqualTypeOf<ActionEditResponse>();
    expect(result).toMatchInlineSnapshot(`
      {
        "addedLinksCount": 0,
        "addedObjectCount": 2,
        "deletedLinksCount": 0,
        "deletedObjectsCount": 0,
        "edits": [
          {
            "objectType": "Office",
            "primaryKey": "NYC",
            "type": "addObject",
          },
        ],
        "modifiedObjectsCount": 0,
        "type": "edits",
      }
    `);

    const undefinedResult = await client(createOffice).applyAction({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    });

    expectTypeOf<typeof undefinedResult>().toEqualTypeOf<undefined>();
    expect(undefinedResult).toBeUndefined();

    const clientCreateOffice = client(createOffice).batchApplyAction;
    expectTypeOf<typeof clientCreateOffice>().toBeCallableWith([{
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    }], { $returnEdits: true });
  });

  it("returns validation directly on validateOnly mode", async () => {
    const result = await client(moveOffice).applyAction({
      officeId: "SEA",
      newAddress: "456 Pike Place",
      newCapacity: 40,
    }, {
      $validateOnly: true,
    });
    expectTypeOf<typeof result>().toEqualTypeOf<ActionValidationResponse>();

    expect(result).toMatchInlineSnapshot(`
        {
          "parameters": {},
          "result": "INVALID",
          "submissionCriteria": [],
        }
      `);
  });

  it("throws on validation errors", async () => {
    try {
      const result = await client(moveOffice).applyAction({
        officeId: "SEA",
        newAddress: "456 Pike Place",
        newCapacity: 40,
      }, {
        $returnEdits: true,
      });
      expect.fail("Should not reach here");
    } catch (e) {
      expect(e).toBeInstanceOf(ActionValidationError);
      expect((e as ActionValidationError).validation).toMatchInlineSnapshot(`
        {
          "parameters": {},
          "result": "INVALID",
          "submissionCriteria": [],
        }
      `);
    }
  });

  it("Accepts attachments", async () => {
    const clientBoundActionTakesAttachment = client(
      actionTakesAttachment,
    ).applyAction;

    type InferredParamType = Parameters<
      typeof clientBoundActionTakesAttachment
    >[0];

    expectTypeOf<{ attachment: string | AttachmentUpload }>().toMatchTypeOf<
      InferredParamType
    >();

    const clientBoundBatchActionTakesAttachment = client(
      actionTakesAttachment,
    ).batchApplyAction;
    type InferredBatchParamType = Parameters<
      typeof clientBoundBatchActionTakesAttachment
    >[0];

    expectTypeOf<{
      attachment: string | AttachmentUpload;
    }[]>().toMatchTypeOf<InferredBatchParamType>();

    const result = await client(actionTakesAttachment).applyAction({
      attachment: "attachment.rid",
    });

    expectTypeOf<typeof result>().toEqualTypeOf<undefined>();
    expect(result).toBeUndefined();
  });

  it("Accepts attachment uploads", async () => {
    const clientBoundActionTakesAttachment = client(
      actionTakesAttachment,
    ).applyAction;
    type InferredParamType = Parameters<
      typeof clientBoundActionTakesAttachment
    >[0];
    const clientBoundBatchActionTakesAttachment = client(
      actionTakesAttachment,
    ).batchApplyAction;
    type InferredBatchParamType = Parameters<
      typeof clientBoundBatchActionTakesAttachment
    >[0];

    expectTypeOf<{ attachment: string | AttachmentUpload }>().toMatchTypeOf<
      InferredParamType
    >();
    expectTypeOf<{ attachment: string | AttachmentUpload }[]>().toMatchTypeOf<
      InferredBatchParamType
    >();

    const blob =
      stubData.attachmentUploadRequestBody[stubData.localAttachment1.filename];

    const attachment = createAttachmentUpload(blob, "file1.txt");
    const result = await client(actionTakesAttachment).applyAction({
      attachment,
    });

    expectTypeOf<typeof result>().toEqualTypeOf<undefined>();
    expect(result).toBeUndefined();
  });
  it("conditionally returns edits in batch mode", async () => {
    const result = await client(moveOffice).batchApplyAction([
      {
        officeId: "SEA",
        newAddress: "456 Good Place",
        newCapacity: 40,
      },
      {
        officeId: "NYC",
        newAddress: "123 Main Street",
        newCapacity: 80,
      },
    ], { $returnEdits: true });

    expect(result).toMatchInlineSnapshot(` 
    {
  "addedLinksCount": 0,
  "addedObjectCount": 0,
  "deletedLinksCount": 0,
  "deletedObjectsCount": 0,
  "edits": [
    {
      "objectType": "Office",
      "primaryKey": "SEA",
      "type": "modifyObject",
    },
    {
      "objectType": "Office",
      "primaryKey": "NYC",
      "type": "modifyObject",
    },
  ],
  "modifiedObjectsCount": 2,
  "type": "edits",
}`);
  });
  it("actions are enumerable", async () => {
    const actions = Object.keys($Actions);
    expect(actions).toStrictEqual([
      "actionTakesAttachment",
      "actionTakesObjectSet",
      "createOffice",
      "createOfficeAndEmployee",
      "moveOffice",
      "promoteEmployee",
      "promoteEmployeeObject",
    ]);
  });
});
