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

import { createClientContext } from "@osdk/shared.net";
import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import {
  Employee,
  Ontology as MockOntology,
} from "../generatedNoCheck/index.js";
import { Attachment } from "./Attachment.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

describe("convertWireToOsdkObjects", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      MockOntology.metadata.ontologyRid,
      () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("configures properties correctly", async () => {
    const { data: [employee] } = await client(Employee).fetchPage();

    expect(Object.keys(employee)).toEqual([
      "employeeId",
      "fullName",
      "office",
      "class",
      "startDate",
      "employeeStatus",
      "$apiName",
      "$objectType",
      "$primaryKey",
    ]);

    expect(Object.keys(employee.$as)).toEqual([]);
    expect(Object.keys(employee.$link)).toEqual([
      "peeps",
      "lead",
      "officeLink",
    ]);
  });

  it("reuses the object prototype across objects", async () => {
    const employees = await client(MockOntology.objects.Employee).fetchPage();
    expect(employees.data.length).toBeGreaterThanOrEqual(2);
    const [a, b] = employees.data;
    expect(Object.getPrototypeOf(a)).toBe(Object.getPrototypeOf(b));
  });

  it("converts attachments as expected", async () => {
    const withValues = await client(
      MockOntology.objects.objectTypeWithAllPropertyTypes,
    )
      .where({ id: 1 })
      .fetchPage();
    expect(withValues.data.length).toBeGreaterThanOrEqual(1);

    const { attachment, attachmentArray } = withValues.data[0];

    expect(attachment).toBeInstanceOf(Attachment);
    expect(Array.isArray(attachmentArray)).toBeTruthy();
    expect(attachmentArray![0]).toBeInstanceOf(Attachment);

    const withoutValues = await client(
      MockOntology.objects.objectTypeWithAllPropertyTypes,
    ).where({ id: 2 }).fetchPage();

    const {
      attachment: emptyAttachment,
      attachmentArray: emptyAttachmentArray,
    } = withoutValues.data[0];
    expect(emptyAttachment).toBeUndefined();
    expect(emptyAttachmentArray).toBeUndefined();
  });

  it("works even with unknown apiNames", async () => {
    const clientCtx = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      () => "myAccessToken",
    );
    createClientContext(
      // by only taking the metadata, we are seeding a client that knows nothing
      { metadata: MockOntology.metadata },
      "https://stack.palantir.com",
      () => "myAccessToken",
      "userAgent",
    );

    let object = {
      __apiName: "Employee",
      __primaryKey: 0,
    } as const;
    const prototypeBefore = Object.getPrototypeOf(object);
    let object2 = await convertWireToOsdkObjects(
      clientCtx,
      [object],
      undefined,
    );
    const prototypeAfter = Object.getPrototypeOf(object2);

    expect(prototypeBefore).not.toBe(prototypeAfter);
  });
});
