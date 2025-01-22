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
  MediaUpload,
} from "@osdk/api";
import {
  $Actions,
  $ontologyRid,
  actionTakesAttachment,
  actionTakesMedia,
  createOffice,
  moveOffice,
} from "@osdk/client.test.ontology";
import type {
  BatchApplyActionResponseV2,
  SyncApplyActionResponseV2,
} from "@osdk/internal.foundry.core";
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
import { createMediaUpload } from "../object/mediaUpload.js";
import { ActionValidationError } from "./ActionValidationError.js";
import { remapActionResponse } from "./applyAction.js";

describe("actions", () => {
  let client: Client;
  let customEntryPointClient: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
    customEntryPointClient = createClient(
      "https://stack.palantirCustom.com/foo/first/someStuff",
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
        "addedLinks": [],
        "addedObjects": [
          {
            "objectType": "Office",
            "primaryKey": "NYC",
          },
        ],
        "deletedLinksCount": 0,
        "deletedObjectsCount": 0,
        "editedObjectTypes": [
          "Office",
        ],
        "modifiedObjects": [],
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

  it("returns validation directly on validateOnly mode, with custom entry point in URL", async () => {
    const result = await customEntryPointClient(moveOffice).applyAction({
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

    expectTypeOf<
      {
        attachment:
          | string
          | AttachmentUpload
          | Blob & { readonly name: string };
      }
    >().toMatchTypeOf<
      InferredParamType
    >();
    expectTypeOf<
      {
        attachment:
          | string
          | AttachmentUpload
          | Blob & { readonly name: string };
      }[]
    >().toMatchTypeOf<
      InferredBatchParamType
    >();

    const blob =
      stubData.attachmentUploadRequestBody[stubData.localAttachment1.filename];

    const attachment = createAttachmentUpload(blob, "file1.txt");

    // Mimics the Web file API (https://developer.mozilla.org/en-US/docs/Web/API/File). The File constructor is only available in Node 19.2.0 and above
    const fileAttachment = Object.assign(blob, { name: "file1.txt" });

    const result = await client(actionTakesAttachment).applyAction({
      attachment,
    });

    const result2 = await client(actionTakesAttachment).applyAction({
      attachment: fileAttachment,
    });

    expectTypeOf<typeof result>().toEqualTypeOf<undefined>();
    expect(result).toBeUndefined();

    expectTypeOf<typeof result2>().toEqualTypeOf<undefined>();
    expect(result2).toBeUndefined();
  });

  it("Accepts media uploads", async () => {
    const clientBoundActionTakesMedia = client(
      actionTakesMedia,
    ).applyAction;
    type InferredParamType = Parameters<
      typeof clientBoundActionTakesMedia
    >[0];
    const clientBoundBatchActionTakesMedia = client(
      actionTakesAttachment,
    ).batchApplyAction;
    type InferredBatchParamType = Parameters<
      typeof clientBoundBatchActionTakesMedia
    >[0];

    expectTypeOf<
      {
        media_reference: MediaUpload;
      }
    >().toMatchTypeOf<
      InferredParamType
    >();

    const blob = stubData.mediaUploadRequestBody[stubData.localMedia1.filename];

    const mediaUpload = createMediaUpload({
      data: blob,
      fileName: stubData.localMedia1.filename,
      objectTypeApiName: stubData.mediaReferenceObjectTypeApi,
      propertyApiName: stubData.mediaPropertyName2,
    });

    const result = await client(actionTakesMedia).applyAction({
      media_reference: mediaUpload,
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
        "addedLinks": [],
        "addedObjects": [],
        "deletedLinksCount": 0,
        "deletedObjectsCount": 0,
        "editedObjectTypes": [
          "Office",
        ],
        "modifiedObjects": [
          {
            "objectType": "Office",
            "primaryKey": "SEA",
          },
          {
            "objectType": "Office",
            "primaryKey": "NYC",
          },
        ],
        "type": "edits",
      }
    `);
  });
});

describe("ActionResponse remapping", () => {
  const actionResponse: SyncApplyActionResponseV2 = {
    edits: {
      type: "edits",
      edits: [{
        "objectType": "Developer",
        "primaryKey": "PalantirDev",
        "type": "addObject",
      }, {
        "objectType": "Contractor",
        "primaryKey": "Contractor1",
        "type": "modifyObject",
      }, {
        "aSideObject": { "primaryKey": "key1", "objectType": "Office" },
        "linkTypeApiNameAtoB": "test",
        "linkTypeApiNameBtoA": "test",
        "bSideObject": { "primaryKey": "key2", "objectType": "Employee" },
        "type": "addLink",
      }],
      deletedLinksCount: 0,
      deletedObjectsCount: 0,
      addedObjectCount: 1,
      modifiedObjectsCount: 1,
      addedLinksCount: 1,
    },
  };

  const batchActionResponse: BatchApplyActionResponseV2 = {
    edits: {
      type: "edits",
      edits: [{
        "objectType": "Developer",
        "primaryKey": "PalantirDev",
        "type": "addObject",
      }, {
        "objectType": "Contractor",
        "primaryKey": "Contractor1",
        "type": "modifyObject",
      }, {
        "aSideObject": { "primaryKey": "key1", "objectType": "Office" },
        "linkTypeApiNameAtoB": "test",
        "linkTypeApiNameBtoA": "test",
        "bSideObject": { "primaryKey": "key2", "objectType": "Employee" },
        "type": "addLink",
      }],
      deletedLinksCount: 0,
      deletedObjectsCount: 0,
      addedObjectCount: 1,
      modifiedObjectsCount: 1,
      addedLinksCount: 1,
    },
  };

  it("Correctly unpacks edits and editedObjectTypes", () => {
    const remappedActionResponse = remapActionResponse(actionResponse);
    const remappedBatchActionResponse = remapActionResponse(
      batchActionResponse,
    );
    expect(remappedActionResponse).toMatchInlineSnapshot(`
      {
        "addedLinks": [
          {
            "aSideObject": {
              "objectType": "Office",
              "primaryKey": "key1",
            },
            "bSideObject": {
              "objectType": "Employee",
              "primaryKey": "key2",
            },
            "linkTypeApiNameAtoB": "test",
            "linkTypeApiNameBtoA": "test",
          },
        ],
        "addedObjects": [
          {
            "objectType": "Developer",
            "primaryKey": "PalantirDev",
          },
        ],
        "deletedLinksCount": 0,
        "deletedObjectsCount": 0,
        "editedObjectTypes": [
          "Developer",
          "Contractor",
          "Office",
          "Employee",
        ],
        "modifiedObjects": [
          {
            "objectType": "Contractor",
            "primaryKey": "Contractor1",
          },
        ],
        "type": "edits",
      }
    `);
    expect(remappedBatchActionResponse).toMatchInlineSnapshot(`
      {
        "addedLinks": [
          {
            "aSideObject": {
              "objectType": "Office",
              "primaryKey": "key1",
            },
            "bSideObject": {
              "objectType": "Employee",
              "primaryKey": "key2",
            },
            "linkTypeApiNameAtoB": "test",
            "linkTypeApiNameBtoA": "test",
          },
        ],
        "addedObjects": [
          {
            "objectType": "Developer",
            "primaryKey": "PalantirDev",
          },
        ],
        "deletedLinksCount": 0,
        "deletedObjectsCount": 0,
        "editedObjectTypes": [
          "Developer",
          "Contractor",
          "Office",
          "Employee",
        ],
        "modifiedObjects": [
          {
            "objectType": "Contractor",
            "primaryKey": "Contractor1",
          },
        ],
        "type": "edits",
      }
    `);
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
      "actionTakesMedia",
    ]);
  });
});
