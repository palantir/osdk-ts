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

import { apiServer } from "@osdk/shared.test";
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
import {
  actionTakesAttachment,
  createOffice,
  moveOffice,
  Ontology as MockOntology,
} from "../generatedNoCheck/index.js";
import { Attachment } from "../object/Attachment.js";
import type {
  ActionEditResponse,
  ActionValidationResponse,
} from "./Actions.js";
import { ActionValidationError } from "./ActionValidationError.js";

describe("actions", () => {
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

  it("conditionally returns the edits", async () => {
    const result = await client(createOffice)({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    }, { returnEdits: true });

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

    const undefinedResult = await client(createOffice)({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    });

    expectTypeOf<typeof undefinedResult>().toEqualTypeOf<undefined>();
    expect(undefinedResult).toBeUndefined();

    const clientCreateOffice = client(createOffice);
    expectTypeOf<typeof clientCreateOffice>().toBeCallableWith([{
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    }], { returnEdits: true });

    //   const resultNoValidate = await client(moveOffice)([
    //     {
    //       officeId: "SEA",
    //       newAddress: "456 Good Place",
    //       newCapacity: 40,
    //     },
    //     {
    //       officeId: "NYC",
    //       newAddress: "123 Main Street",
    //       newCapacity: 80,
    //     },
    //     // @ts-expect-error
    //   ], { validateOnly: true });
  });

  it("returns validation directly on validateOnly mode", async () => {
    const result = await client(moveOffice)({
      officeId: "SEA",
      newAddress: "456 Pike Place",
      newCapacity: 40,
    }, {
      validateOnly: true,
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
      const result = await client(moveOffice)({
        officeId: "SEA",
        newAddress: "456 Pike Place",
        newCapacity: 40,
      }, {
        returnEdits: true,
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
    );
    expectTypeOf<Parameters<typeof clientBoundActionTakesAttachment>[0]>()
      .toEqualTypeOf<
        { attachment: Attachment } | { attachment: Attachment }[]
      >();

    const attachment = new Attachment("attachment.rid");
    const result = await client(actionTakesAttachment)({
      attachment,
    });

    expectTypeOf<typeof result>().toEqualTypeOf<undefined>();
    expect(result).toBeUndefined();
  });
});
