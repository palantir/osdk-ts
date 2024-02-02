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
import { Ontology as MockOntology } from "../generatedNoCheck/index.js";
import { Attachment } from "./Attachment.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

describe("convertWireToOsdkObjects", () => {
  let client: Client<typeof MockOntology>;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      MockOntology,
      "https://stack.palantir.com",
      () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("reuses the object prototype across objects", async () => {
    const employees = await client.objects.Employee.fetchPageOrThrow();
    expect(employees.data.length).toBeGreaterThanOrEqual(2);
    const [a, b] = employees.data;
    expect(Object.getPrototypeOf(a)).toBe(Object.getPrototypeOf(b));
  });

  it("converts attachments as expected", async () => {
    const withValues = await client.objects.objectTypeWithAllPropertyTypes
      .where({ id: 1 })
      .fetchPageOrThrow();
    expect(withValues.data.length).toBeGreaterThanOrEqual(1);

    const { attachment, attachmentArray } = withValues.data[0];

    expect(attachment).toBeInstanceOf(Attachment);
    expect(Array.isArray(attachmentArray)).toBeTruthy();
    expect(attachmentArray![0]).toBeInstanceOf(Attachment);

    const withoutValues = await client.objects.objectTypeWithAllPropertyTypes
      .where({ id: 2 }).fetchPageOrThrow();
    const {
      attachment: emptyAttachment,
      attachmentArray: emptyAttachmentArray,
    } = withoutValues.data[0];
    expect(emptyAttachment).toBeUndefined();
    expect(emptyAttachmentArray).toBeUndefined();
  });

  it("works even with unknown apiNames", () => {
    const clientCtx = createClientContext(
      MockOntology,
      "https://stack.palantir.com",
      () => "myAccessToken",
      "userAgent",
    );

    const object = {
      __apiName: "unknown",
      __primaryKey: 0,
    } as const;
    const prototypeBefore = Object.getPrototypeOf(object);
    convertWireToOsdkObjects(clientCtx, [object]);
    const prototypeAfter = Object.getPrototypeOf(object);

    expect(prototypeBefore).not.toBe(prototypeAfter);
  });
});
