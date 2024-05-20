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

import { apiServer, stubData } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  ConfidentialClientAuth,
  FoundryClient,
} from "../generatedNoCheck/@test-app/osdk/index.js";
import type {
  Attachment,
  AttachmentMetadata,
  AttachmentsError,
  GetObjectError,
  Result,
} from "../generatedNoCheck/@test-app/osdk/index.js";
import type {
  objectTypeWithAllPropertyTypes,
} from "../generatedNoCheck/@test-app/osdk/ontology/objects/index.js";
import { assertErrOrThrow, assertOkOrThrow } from "./resultUtils.js";

describe("AttachmentsTest", () => {
  let client: FoundryClient<ConfidentialClientAuth>;
  beforeAll(async () => {
    apiServer.listen();
    client = new FoundryClient({
      url: "https://stack.palantir.com",
      auth: new ConfidentialClientAuth({
        clientId: "myClientId",
        clientSecret: "myClientSecret",
        url: "https://stack.palantir.com",
      }),
    });

    await client.auth.signInAsServiceUser();
  });

  afterAll(() => {
    apiServer.close();
  });

  it("Uploads attachment successfully", async () => {
    const blob =
      stubData.attachmentUploadRequestBody[stubData.localAttachment1.filename];

    const result: Result<Attachment, AttachmentsError> = await client.ontology
      .attachments.upload(
        "file1.txt",
        blob,
      );
    const attachment = assertOkOrThrow(result);
    const result2: Result<Blob, AttachmentsError> = await attachment.read();
    const attachmentContent = assertOkOrThrow(result2);
    const attachmentContentText = await attachmentContent.text();
    expect(JSON.parse(attachmentContentText)).toEqual({
      name: "Hello World 2",
    });
  });
  it("Fails to upload attachment", async () => {
    const obj = { name: "Hello World" };
    const blob: Blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    }) as Blob;

    const result: Result<Attachment, AttachmentsError> = await client.ontology
      .attachments.upload(
        "myFile.txt",
        blob,
      );
    const attachmentError = assertErrOrThrow(result);

    expect(attachmentError).toBeDefined();
    expect(attachmentError.name).toEqual("AttachmentSizeExceededLimit");
  });

  it("Reads attachment metadata succesfully", async () => {
    const result = await client.ontology.objects.objectTypeWithAllPropertyTypes
      .get(
        stubData.objectWithAllPropertyTypes1.__primaryKey,
      );
    const obj = assertOkOrThrow(result);
    const result2: Result<AttachmentMetadata, AttachmentsError> | undefined =
      await obj.attachment?.getMetadata();
    const attachmentMetadata = assertOkOrThrow(result2!);

    expect(attachmentMetadata.filename).toEqual("file1.txt");
    expect(attachmentMetadata.mediaType).toEqual("application/json");
    expect(attachmentMetadata.sizeBytes).toEqual(18);
    expect(attachmentMetadata.rid).toEqual(
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    );
  });

  it("Fails to read attachment metadata succesfully", async () => {
    const result: Result<objectTypeWithAllPropertyTypes, GetObjectError> =
      await client.ontology.objects.objectTypeWithAllPropertyTypes.get(
        stubData.objectWithAllPropertyTypes1.__primaryKey,
      );
    const obj = assertOkOrThrow(result);
    const result2: Result<AttachmentMetadata, AttachmentsError> | undefined =
      await obj.attachment2?.getMetadata();
    const attachmentError = assertErrOrThrow(result2!);

    expect(attachmentError).toBeDefined();
    expect(attachmentError.name).toEqual("AttachmentNotFound");
  });

  it("Reads attachment content successfully", async () => {
    const result: Result<objectTypeWithAllPropertyTypes, GetObjectError> =
      await client.ontology.objects.objectTypeWithAllPropertyTypes.get(
        stubData.objectWithAllPropertyTypes1.__primaryKey,
      );
    const obj = assertOkOrThrow(result);
    const result2: Result<Blob, AttachmentsError> | undefined = await obj
      .attachment?.read();
    const attachmentContent = assertOkOrThrow(result2!);

    const attachmentContentText = await attachmentContent.text();
    expect(JSON.parse(attachmentContentText)).toEqual({
      name: "Hello World 2",
    });
  });

  it("Fails to read attachment content", async () => {
    const result: Result<objectTypeWithAllPropertyTypes, GetObjectError> =
      await client.ontology.objects.objectTypeWithAllPropertyTypes.get(
        stubData.objectWithAllPropertyTypes1.__primaryKey,
      );
    const obj = assertOkOrThrow(result);
    const result2: Result<Blob, AttachmentsError> | undefined = await obj
      .attachment2?.read();
    const attachmentError = assertErrOrThrow(result2!);

    expect(attachmentError).toBeDefined();
    expect(attachmentError.name).toEqual("AttachmentNotFound");
  });
});
